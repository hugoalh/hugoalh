import { walk as readDir, type WalkEntry } from "https://deno.land/std@0.221.0/fs/walk.ts";
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
		throw new Error("Missing Deno configuration file!");
	}
}
export async function validateJSRResources(): Promise<void> {
	try {
		if (!(await checkFile("jsr.jsonc"))) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing JSR configuration file!");
	}
}
export async function validateNPMResources(): Promise<void> {
	try {
		if (!(await checkFile(".dnt.ts"))) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing Deno NPM Transformer file!");
	}
	try {
		if (!(await checkFile("npm/.npmrc"))) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing NPM configuration file!");
	}
	try {
		if (!(await checkFile("npm/package.json"))) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing NPM package metadata file!");
	}
	try {
		if (!(await checkFile("npm/tsconfig.json"))) {
			throw undefined;
		}
	} catch {
		throw new Error("Missing NPM TypeScript configuration file!");
	}
}
