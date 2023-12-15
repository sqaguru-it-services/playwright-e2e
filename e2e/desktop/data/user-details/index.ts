import userInfo from "./test-data/UserInfo.json";
import { IUserInfo } from "./test-data/interface/UserInterface";

class UserTestData {
  getUsersInfo(): any {
    return userInfo;
  }

  getUserInfo({ profile = "default" }: { profile?: string }): IUserInfo {
    return userInfo?.[profile === undefined ? "default" : profile];
  }
}

class UserLocaleData {
  get(locale?: string): any {
    let localeValue: string = "";
    if (locale !== undefined) {
      localeValue = locale;
    } else if (process.env.TEST_LOCALE === undefined) {
      throw `'TEST_LOCALE' environment variable is ${process.env.TEST_LOCALE}`;
    } else {
      localeValue = process.env.TEST_LOCALE;
    }
    const localeData: any = require(`./locale/${localeValue}.json`);
    return localeData;
  }
}

export { UserTestData, UserLocaleData, IUserInfo };
