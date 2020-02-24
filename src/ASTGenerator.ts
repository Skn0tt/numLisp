import * as _ from "lodash";

const indexOfClosingBracket = (tokens: string[]): number => {
  let openedBrackets: number = 0;

  for (let i = 0; i < tokens.length; i++) {
    const isFirstToken = i === 0;
    const token = tokens[i];

    switch (token) {
      case "(":
          openedBrackets++;
          break;
      case ")":
        openedBrackets--;
        if (!isFirstToken && openedBrackets === 0) {
          return i;
        }
        break;
    }
  }

  return -1;
}

export const untilClosingBracket = (tokens: string[]): string[] => {
  const closingIndex = indexOfClosingBracket(tokens);
  return tokens.slice(0, closingIndex + 1);
}

export const withoutEnclosingBrackets = (tokens: string[]): string[] => {
  if (_.first(tokens) === "(" && _.last(tokens) === ")") {
    return _.tail(_.initial(tokens));
  }

  return tokens;
}

export type AST = (string | AST)[];

export const generateAST = (tokens: string[]): AST => {
  const result: AST = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    switch (token) {
      case "(":
        const remainder = tokens.slice(i);
        const lengthOfSubExpression = indexOfClosingBracket(remainder);
        const endOfSubExpression = i + lengthOfSubExpression;
        
        const subExpressionWithEnclosingBrackets = tokens.slice(i, endOfSubExpression + 1);
        const subExpression = withoutEnclosingBrackets(subExpressionWithEnclosingBrackets);

        i = endOfSubExpression;
        result.push(generateAST(subExpression));

        break;
      default:
        result.push(token as any);
        break;
    }
  }

  return result;
}

export const generateASTs = (tokens: string[]): AST[] => {
  const result: AST[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === "(") {
      const remainder = tokens.slice(i);
      const lengthOfSubExpression = indexOfClosingBracket(remainder);
      const endOfSubExpression = i + lengthOfSubExpression;
      
      const subExpressionWithEnclosingBrackets = tokens.slice(i, endOfSubExpression + 1);
      const subExpression = withoutEnclosingBrackets(subExpressionWithEnclosingBrackets);

      i = endOfSubExpression;
      result.push(generateAST(subExpression));
    }
  }

  return result;
}