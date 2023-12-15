import merge from "deepmerge";

async function getAppConfig(): Promise<any> {
  let defaultConfig = require(`./config-default.json`);
  if (process.env.TEST_ENV === undefined) {
    throw `'TEST_ENV' environment variable is ${process.env.TEST_ENV}`;
  }
  let envConfig = require(`./config-${process.env.TEST_ENV}.json`);
  console.log("=== app config");
  const appConfig: any = merge(defaultConfig, envConfig);
  console.log(appConfig);
  return appConfig;
}

export default getAppConfig;
