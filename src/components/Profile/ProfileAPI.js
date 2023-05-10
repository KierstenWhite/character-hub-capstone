//FETCH Function - EditUserProfile.js
export const getUserProfile = (currentUserObject) => {
  return fetch(
    `http://localhost:8088/users?userId=${currentUserObject.id}`
  ).then((response) => response.json());
};

// PUT Function - EditUserProfile.js
export const getUserAndReplace = (user) => {
  return fetch(`http://localhost:8088/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};
