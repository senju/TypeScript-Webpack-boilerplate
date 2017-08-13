import * as _ from "lodash";

export default class Main {
  public greet(): Promise<string> {
    return Promise.resolve('Hello, World!');
  }

  public three_times(str: string) : string {
    return _.repeat(str, 3);
  }
}
