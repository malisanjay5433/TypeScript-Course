//Narrowing using typeOf operator
export {};
function paddingLeft(padding: string | number, inputstring: string) {
  if (typeof padding == "string") {
    console.log("padding is string");
  }
}

//Narrowing using in operator
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  role: string;
  isAdmin: boolean;
}

function isAdminUser(account: User | Admin) {
  if ("isAdmin" in account) {
    console.log("Is admin user");
  }
}
/*
TypeScript expects this to return a certain set of strings:
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"
*/
function printAlloperators(
  inputValue: string | number | null | string[] | number[]
) {
  if (typeof inputValue == "string") {
    console.log("Input value is string do operations now");
  } else if (typeof inputValue == "number") {
    console.log("Input value is number do operations now");
  } else if (typeof inputValue == "object") {
    for (const i in inputValue) {
      console.log(`Array values are : ${{ i }}`);
    }
  }
}
