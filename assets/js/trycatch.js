"use strict";

console.log("before");

function logToFile(err) {
  console.log("===");
  console.dir(err);
  console.log("===");
}

function pow(base, exp) {
  if (typeof base === "string") {
    throw new TypeError("must be a number");
  }

  if (exp === 0) {
    return 1;
  }
  return base * pow(base, exp - 1);
}

function dangerousCode() {
  try {
    console.log("TRY 1");

    const res = pow("2", 4);

    console.log("TRY 2");
  } catch (err) {
    if (err instanceof Error) {
      console.log("true");
    }

    if (err instanceof RangeError) {
      console.log("RANGE_ERROR", err);
    }

    if (err instanceof TypeError) {
      console.log("TypeError =>>>", err);
    }

    throw err;
  } finally {
    console.log("finally");
  }
}
console.log("after danger code declaration");

try {
  console.log("second try");
  dangerousCode();
} catch (err) {
  console.log("Second catch", err);
}

function toJadenCase(string) {
  return string
    .split(" ")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

toJadenCase("after danger code declaration");

const db = [
  {
    name: "Teset Testovich",
    age: 18,
  },
  {
    name: "Tset Testovna",
    age: 28,
  },
];

function getPropertyValues(db, prop) {
  const result = [];

  for (const cortege of db) {
    result.push(cortege[prop]);
  }

  return result;
}

function getPropertyValues2(db, prop) {
  return db.map((cortege) => cortege[prop]);
}

console.log(getPropertyValues(db, "age"));
console.log(getPropertyValues2(db, "age"));
