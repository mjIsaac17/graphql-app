import graphQLRequest from '../graphql/graphqlRequest';
import userQueries from '../graphql/queries/user.query';
import { setModal } from './modal.action';

// actions
export const GET = 'user/GET';
export const GET_ALL = 'user/GET_ALL';
export const ADD = 'user/ADD';
export const UPDATE = 'user/UPDATE';
export const DELETE = 'user/DELETE';

// action creators
export const setCurrentUser = (userData) => ({
  type: GET,
  payload: userData
});

export const startGettingUserById = (userId = 1) => {
  return async (dispatch) => {
    try {
      const response = await graphQLRequest(userQueries.getUserById(userId));
      if (response.ok) {
        const userData = await response.json();
        dispatch(setCurrentUser(userData.data.getUserbyId));
      } else {
        alert('It was not possible to load the user data');
      }
    } catch (error) {
      alert('It was not possible to load the user data');
      console.log(error);
    }
  };
};

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

const successAddUser = (newUser) => ({
  type: ADD,
  payload: newUser
});

export const startAddingUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await graphQLRequest(
        userQueries.createUser(userData.name, userData.age, userData.isSingle)
      );
      if (response.ok) {
        const userResponse = await response.json();
        dispatch(
          successAddUser({ ...userData, id: userResponse.data.createUser.id })
        );
        dispatch(setModal(false));
      } else {
        alert('It was not possible to save the user');
      }
    } catch (error) {
      alert('It was not possible to save the user');
      console.log(error);
    }
  };
};

const successUpdateUser = (userData) => ({
  type: UPDATE,
  payload: userData
});

export const startUpdatingUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await graphQLRequest(
        userQueries.updateUser(
          userData.id,
          userData.name,
          userData.age,
          userData.isSingle
        )
      );
      if (response.ok) {
        dispatch(successUpdateUser({ id: userData.id, name: userData.name }));
        dispatch(setModal(false));
      } else {
        alert('It was not possible to update the user');
      }
    } catch (error) {
      alert('It was not possible to update the user');
      console.log(error);
    }
  };
};

const successRemoveUser = (userId) => ({
  type: DELETE,
  payload: userId
});

export const startDeletingUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await graphQLRequest(userQueries.deleteUser(userId));
      if (response.ok) {
        dispatch(successRemoveUser(userId));
        dispatch(setModal(false));
      } else {
        alert('It was not possible to delete the user');
      }
    } catch (error) {
      alert('It was not possible to delete the user');
      console.log(error);
    }
  };
};
