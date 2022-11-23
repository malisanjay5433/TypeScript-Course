export {};
//Generic type
//Generics are increased code reusability and type safety

const score: Array<number> = [];
const names: Array<string> = [];

//lets create some functions
function identyNumber(value: number): number {
  return value;
}

function identityString(value: string): string {
  return value;
}

function identityAny(value: any): any {
  return value;
}
function identityType<Type>(value: Type): Type {
  return value;
}

//shorthands
function identityTypeTwo<T>(value: T): T {
  return value;
}

function identityTypeThree<S>(value: S): S {
  return value;
}

//returns specific number
identyNumber(1);
//returns specific string
identityString("3");

//return any type , no visibilty on what type it returns
identityAny(3);

//Genernic type are powerfull type can be return passed type, helpful for resuable code
identityType("Sanjay");
identityType(21212);
identityType(true);
