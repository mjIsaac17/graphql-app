const userQueries = {
  getUserById: (id) => `
  {
    getUserbyId(id:${id}){
      id
      name
      age
      isSingle
    }
  }
  `,
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
  `,
  updateUser: (id, username, age, isSingle) => `
  mutation {
    updateUser(id: ${id}, name: "${username}", age: ${age}, isSingle: ${isSingle}) {
      status
    }
  }
  `
};

export default userQueries;
