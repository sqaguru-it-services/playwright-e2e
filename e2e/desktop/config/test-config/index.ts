import testSkipConfig from "./test-skip.config.json";
import testSuitSkipConfig from "./test-suite-skip.config.json";

export class TestConfig {
  constructor() {}

  getTestSkipConfig(): any {
    return testSkipConfig;
  }
  ज़;

  getTestSuiteSkipConfig(): any {
    return testSuitSkipConfig;
  }

  initTestSuite(test: any, testSuiteIds: string[]): void {
    const testSuiteConfig = this.getTestSuiteSkipConfig();
    testSuiteIds.forEach((item: string) => {
      if (testSuiteConfig.all.skip === true) {
        if (testSuiteConfig?.all?.exclude?.[item] !== true) {
          test.skip();
        }
      } else if (testSuiteConfig?.individual?.[item] === true) {
        test.skip();
      }
    });
  }

  getTestConfig(test: any, tags: string[], testCaseIds: string[]): string {
    let tag = "";
    tags.forEach((item: string) => {
      tag = tag + " " + item;
    });
    testCaseIds.forEach((item: string) => {
      if (this.getTestSkipConfig()?.[item] === true) {
        test.skip();
      }
    });
    return tag;
  }
}
