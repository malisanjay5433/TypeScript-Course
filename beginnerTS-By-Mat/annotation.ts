interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
// const makeUser = () => {
//   return {};
// };

// const user = makeUser();
// console.log(user.id);

//Solution
const makeUser = (): User => {
  return {
    id: 1212,
    firstName: "Sanjay",
    lastName: "Mali",
    role: "admin",
    posts: [
      {
        id: 21212,
        title: "News",
      },
    ],
  };
};

const user = makeUser();
console.log(user.id);
export {};
