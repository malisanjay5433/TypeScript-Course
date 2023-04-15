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
var makeUser = function () {
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
var user = makeUser();
console.log(user.id);
