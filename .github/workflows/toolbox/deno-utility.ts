import { walk as readDir, type WalkEntry } from "jsr:@std/fs@1.0.0/walk";
import { writeError } from "https://raw.githubusercontent.com/hugoalh-studio/github-actions-core-es/v0.2.1/log.ts";
async function checkFileExist(filePath: string): Promise<boolean> {
	try {
		const { isFile }: Deno.FileInfo = await Deno.stat(filePath);
		return isFile;
	} catch {
		return false;
	}
}
export async function getDenoFilesPath(): Promise<string[]> {
	return (await Array.fromAsync(readDir(".", { includeDirs: false }))).filter(({ path }: WalkEntry): boolean => {
		return /\.tsx?$/.test(path);
	}).map(({ path }: WalkEntry): string => {
		return path;
	});
}
export async function validateDenoResources(): Promise<void> {
	try {
		if (!(await checkFileExist("deno.jsonc"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing Deno configuration file!");
		Deno.exit(1);
	}
}
export async function validateJSRResources(): Promise<void> {
	try {
		if (!(await checkFileExist("jsr.jsonc"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing JSR configuration file!");
		Deno.exit(1);
	}
}
export async function validateNPMResources(): Promise<void> {
	try {
		if (!(await checkFileExist(".dnt.ts"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing Deno NPM Transformer file!");
		Deno.exit(1);
	}
	try {
		if (!(await checkFileExist("npm/.npmrc"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing NPM configuration file!");
		Deno.exit(1);
	}
	try {
		if (!(await checkFileExist("npm/package.json"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing NPM package metadata file!");
		Deno.exit(1);
	}
	try {
		const packageManifest = JSON.parse(await Deno.readTextFile("npm/package.json"));
		if (typeof packageManifest?.scripts?.build !== "string") {
			throw undefined;
		}
	} catch {
		writeError("Missing NPM package script `build`!");
		Deno.exit(1);
	}
	try {
		if (!(await checkFileExist("npm/tsconfig.json"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing NPM TypeScript configuration file!");
		Deno.exit(1);
	}
}
