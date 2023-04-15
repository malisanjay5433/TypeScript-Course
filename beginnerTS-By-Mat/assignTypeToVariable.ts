interface User {
  id: number;
  name: string;
  last: string;
  isAdmin: boolean;
}

const newUser: User = {
  id: 0,
  name: "Sanjay",
  last: "Mali",
  isAdmin: true,
};
console.log(newUser.id);
export {};
