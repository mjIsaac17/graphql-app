const userQueries = {
  getAllUsers: `
  {
    getAllUsers {
      id
      name
    }
  }`,
  createUser: (username, age, isSingle) => `
  mutation {
    createUser(name: "${username}", age: ${age}, isSingle: ${isSingle}) {
      id
    }
  }
  `
};

export default userQueries;
