import { walk as readDir, type WalkEntry } from "https://deno.land/std@0.221.0/fs/walk.ts";
import { writeError } from "https://raw.githubusercontent.com/hugoalh-studio/github-actions-core-ts/v0.2.1/log.ts";
async function checkFile(filePath: string): Promise<boolean> {
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
		if (!(await checkFile("deno.jsonc"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing Deno configuration file!");
		Deno.exit(1);
	}
}
export async function validateJSRResources(): Promise<void> {
	try {
		if (!(await checkFile("jsr.jsonc"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing JSR configuration file!");
		Deno.exit(1);
	}
}
export async function validateNPMResources(): Promise<void> {
	try {
		if (!(await checkFile(".dnt.ts"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing Deno NPM Transformer file!");
		Deno.exit(1);
	}
	try {
		if (!(await checkFile("npm/.npmrc"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing NPM configuration file!");
		Deno.exit(1);
	}
	try {
		if (!(await checkFile("npm/package.json"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing NPM package metadata file!");
		Deno.exit(1);
	}
	try {
		if (!(await checkFile("npm/tsconfig.json"))) {
			throw undefined;
		}
	} catch {
		writeError("Missing NPM TypeScript configuration file!");
		Deno.exit(1);
	}
}
