import http from "../http";

function getUsers() {
  return new Promise((resolve, reject) => {
    http(`https://jsonplaceholder.typicode.com/users`, "get")
      .then((res) => {
        const _users = res.data.map((user) => {
          return {
            ...user,
            avatar: `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`,
            isFavorite: false
          };
        });
        resolve(_users);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { getUsers };
