export const getName = (params: { first: string; last: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return `${params.first}`;
};

const name = getName({ first: "Sanjay", last: "Mali" });
console.log(name);
