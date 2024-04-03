import { walk as readDir, type WalkEntry } from "https://deno.land/std@0.221.0/fs/walk.ts";
import { getInputBoolean, setOutputs } from "https://raw.githubusercontent.com/hugoalh-studio/github-actions-core-ts/v0.2.1/parameter.ts";
const jsrHasDeployment: boolean = getInputBoolean("jsr_hasdeployment", { require: true });
const npmHasDeployment: boolean = getInputBoolean("npm_hasdeployment", { require: true });
try {
	const { isFile }: Deno.FileInfo = await Deno.stat("deno.jsonc");
	if (!isFile) {
		throw undefined;
	}
} catch {
	throw new Error("Missing Deno configuration file!");
}
const filesPath: string[] = (await Array.fromAsync(readDir(".", { includeDirs: false }))).filter(({ path }: WalkEntry): boolean => {
	return /\.tsx?$/.test(path);
}).map(({ path }: WalkEntry): string => {
	return path;
});
const benchmarkDispatch: boolean = filesPath.filter((path: string): boolean => {
	return /(?:^|\/|\\|\.|_)bench\.tsx?$/.test(path);
}).length > 0;
const testDispatch: boolean = filesPath.filter((path: string): boolean => {
	return /(?:^|\/|\\|\.|_)test\.tsx?$/.test(path);
}).length > 0;
if (jsrHasDeployment) {
	try {
		const { isFile }: Deno.FileInfo = await Deno.stat("jsr.jsonc");
		if (!isFile) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing JSR configuration file!");
	}
}
if (npmHasDeployment) {
	try {
		const { isFile }: Deno.FileInfo = await Deno.stat(".dnt.ts");
		if (!isFile) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing Deno NPM Transformer file!");
	}
	try {
		const { isFile }: Deno.FileInfo = await Deno.stat("npm/.npmrc");
		if (!isFile) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing NPM configuration file!");
	}
	try {
		const { isFile }: Deno.FileInfo = await Deno.stat("npm/package.json");
		if (!isFile) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing NPM package metadata file!");
	}
	try {
		const { isFile }: Deno.FileInfo = await Deno.stat("npm/tsconfig.json");
		if (!isFile) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing NPM TypeScript configuration file!");
	}
}
setOutputs({
	benchmark_dispatch: String(benchmarkDispatch),
	files: JSON.stringify(filesPath),
	test_dispatch: String(testDispatch)
});
