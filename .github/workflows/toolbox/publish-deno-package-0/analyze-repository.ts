import { setOutputs } from "https://raw.githubusercontent.com/hugoalh-studio/github-actions-core-es/v0.2.1/parameter.ts";
import { getDenoFilesPath, validateDenoResources } from "../deno-utility.ts";
await validateDenoResources();
const filesPath: string[] = await getDenoFilesPath();
setOutputs({
	files: JSON.stringify(filesPath)
});
