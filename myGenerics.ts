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

// Also let's dive deeper into the generic type

function searchProducts<T>(products: T[]): T {
  // search products locally
  const indx = 3;
  return products[indx];
}

const searchMoreProducts = <T>(product: T[]): T => {
  const myIndex = 22;
  return product[myIndex];
};

//and also <T,> uses sometime for reference ,
//it's not any regular tag, Its generic tag
const searchMore = <T>(product: T[]): T => {
  const myIndex = 22;
  return product[myIndex];
};
