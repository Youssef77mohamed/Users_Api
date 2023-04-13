const API_URL = "https://dummyjson.com/users";

export const getAllUsers = () => {
  return fetch(API_URL).then((res) => res.json());
};

export const getUser = (id) => {
  return fetch(`${API_URL}/${id}`).then((res) =>
    res.json()
  );
};





