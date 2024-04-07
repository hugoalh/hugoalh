import { setOutputs } from "https://raw.githubusercontent.com/hugoalh-studio/github-actions-core-ts/v0.2.1/parameter.ts";
import { getDenoFilesPath, validateDenoResources } from "../deno-utility.ts";
await validateDenoResources();
const filesPath: string[] = await getDenoFilesPath();
const benchmarkDispatch: boolean = filesPath.filter((path: string): boolean => {
	return /(?:^|\/|\\|\.|_)bench\.tsx?$/.test(path);
}).length > 0;
const testDispatch: boolean = filesPath.filter((path: string): boolean => {
	return /(?:^|\/|\\|\.|_)test\.tsx?$/.test(path);
}).length > 0;
setOutputs({
	benchmark_dispatch: String(benchmarkDispatch),
	files: JSON.stringify(filesPath),
	test_dispatch: String(testDispatch)
});
