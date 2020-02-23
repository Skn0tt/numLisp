import * as _ from "lodash";

export const splitMultiple =
  (...splitters: string[]) =>
  (v: string): string[] => {
    const result: string[] = [];

    let lastElement = "";

    _.forEach(v, c => {
      if (_.includes(splitters, c)) {
        if (lastElement) {
          result.push(lastElement);
        }
        result.push(c);
        lastElement = "";
      } else {
        lastElement += c;
      }
    })

    if (lastElement) {
      result.push(lastElement);
    }

    return result;
  }

export const tokenize =
  (v: string) =>
  splitMultiple("(", ")", " ")(v)
    .filter(_.trim);