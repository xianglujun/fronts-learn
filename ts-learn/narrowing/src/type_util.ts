function isNumber(str: any): boolean {
  return typeEquals(str, "number");
}

function isString(s: any): boolean {
  return typeEquals(s, "string");
}

function isBoolean(s: any): boolean {
  return typeEquals(s, "boolean");
}

function isObject(s: any): boolean {
  return typeEquals(s, "object");
}

function isSymbol(s: any): boolean {
  return typeEquals(s, "symbol");
}

function typeEquals(s: any, type: string): boolean {
  return typeof s === type;
}
