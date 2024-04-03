import { getInputBoolean, setOutputs } from "https://raw.githubusercontent.com/hugoalh-studio/github-actions-core-ts/v0.2.1/parameter.ts";
import { getDenoFilesPath, validateDenoResources, validateJSRResources, validateNPMResources } from "../deno-utility.ts";
const jsrHasDeployment: boolean = getInputBoolean("jsr_hasdeployment", { require: true });
const npmHasDeployment: boolean = getInputBoolean("npm_hasdeployment", { require: true });
await validateDenoResources();
const filesPath: string[] = await getDenoFilesPath();
const benchmarkDispatch: boolean = filesPath.filter((path: string): boolean => {
	return /(?:^|\/|\\|\.|_)bench\.tsx?$/.test(path);
}).length > 0;
const testDispatch: boolean = filesPath.filter((path: string): boolean => {
	return /(?:^|\/|\\|\.|_)test\.tsx?$/.test(path);
}).length > 0;
if (jsrHasDeployment) {
	await validateJSRResources();
}
if (npmHasDeployment) {
	await validateNPMResources();
}
setOutputs({
	benchmark_dispatch: String(benchmarkDispatch),
	files: JSON.stringify(filesPath),
	test_dispatch: String(testDispatch)
});
