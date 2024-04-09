import { lessOrEqual as isSemVerLessOrEqual } from "https://deno.land/std@0.221.0/semver/less_or_equal.ts";
import { parse as parseSemVer } from "https://deno.land/std@0.221.0/semver/parse.ts";
import { writeError, writeWarn } from "https://raw.githubusercontent.com/hugoalh-studio/github-actions-core-ts/v0.2.1/log.ts";
import { setOutputs } from "https://raw.githubusercontent.com/hugoalh-studio/github-actions-core-ts/v0.2.1/parameter.ts";
const packageManifest = JSON.parse(await Deno.readTextFile("package.json"));
const name = packageManifest.name;
const versionPackageString = packageManifest.version;
const versionPackageSemVer = parseSemVer(versionPackageString);
const versionIsPreRelease: boolean = (versionPackageSemVer.prerelease ?? []).length === 0;
let tagLatest: boolean = !versionIsPreRelease;
let tagPre: boolean = true;
try {
	const { stderr, stdout, success } = await new Deno.Command("pwsh", {
		args: ["-NonInteractive", "-Command", `$ErrorActionPreference = 'Stop'; npm show ${name} --json`]
	}).output().then(({ stderr, stdout, success }: Deno.CommandOutput) => {
		return {
			stderr: new TextDecoder().decode(stderr),
			stdout: new TextDecoder().decode(stdout),
			success
		};
	});
	if (!success) {
		throw stderr;
	}
	const packageMetadata = JSON.parse(stdout);
	if (isSemVerLessOrEqual(versionPackageSemVer, parseSemVer(packageMetadata?.["dist-tags"]?.latest ?? "0.0.0"))) {
		tagLatest = false;
	}
	if (isSemVerLessOrEqual(versionPackageSemVer, parseSemVer(packageMetadata?.["dist-tags"]?.pre ?? "0.0.0"))) {
		tagPre = false;
	}
} catch (error) {
	writeWarn(`Unable to resolve NPM package publish tags: ${error}`);
}
const tags: string[] = [];
if (tagLatest) {
	tags.push("latest");
}
if (tagPre) {
	tags.push("pre");
}
if (!versionIsPreRelease) {
	tags.push(`latest-${versionPackageSemVer.major}`);
}
tags.push(`pre-${versionPackageSemVer.major}`);
if (tags.length === 0) {
	writeError("No NPM package publish tags!");
	Deno.exit(1);
}
setOutputs({
	name: name,
	version: versionPackageString,
	descriptor: `${name}@${versionPackageString}`,
	tags_main: tags[0],
	tags_rest: tags.slice(1).join(","),
	tarballname: `${name.replace(/^@/, "").replaceAll("\/", "-")}-${versionPackageString}.tgz`
});
