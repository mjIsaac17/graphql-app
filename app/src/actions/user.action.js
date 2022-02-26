import graphQLRequest from '../graphql/graphqlRequest';
import userQueries from '../graphql/queries/user.query';

// actions
export const GET = 'user/GET';
export const GET_ALL = 'user/GET_ALL';
export const UPDATE = 'user/UPDATE';
export const DELETE = 'user/DELETE';

// action creators
const successGetAllUsers = (userList) => ({
  type: GET_ALL,
  payload: userList
});

export const startGettingAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await graphQLRequest(userQueries.getAllUsers);
      if (response.ok) {
        const userData = await response.json();
        dispatch(successGetAllUsers(userData.data.getAllUsers));
      } else {
        alert('It was not possible to load the user data');
      }
    } catch (error) {
      alert('It was not possible to load the user data');
      console.log(error);
    }
  };
};
