import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {
  setCurrentUser,
  startGettingAllUsers,
  startGettingUserById
} from '../../actions/user.action';
import { setModal } from '../../actions/modal.action';
import componentsModal from '../../helpers/componentsModal';
import { Typography } from '@mui/material';

const UserList = memo(() => {
  console.log('UserList');
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);

  // handlers
  const handleEdit = (user) => {
    dispatch(setCurrentUser(null));
    dispatch(startGettingUserById(user.id));
    dispatch(setModal(true, 'Update user', componentsModal.userEdit));
  };

  const handleDelete = (user) => {
    dispatch(startGettingUserById(user.id));
    dispatch(setModal(true, 'Delete user', componentsModal.userDelete));
  };

  useEffect(() => {
    if (!userList) {
      dispatch(startGettingAllUsers());
    }
  }, [dispatch, userList]);

  return (
    <>
      {!userList ? (
        <p> Loading users...</p>
      ) : (
        <>
          {userList.length === 0 ? (
            <Typography
              variant='h6'
              component='p'
              sx={{ textAlign: 'center', marginTop: '40px' }}
            >
              There are no users
            </Typography>
          ) : (
            <List sx={{ maxWidth: '1300px', width: '95%', margin: '0 auto' }}>
              {userList.map((user, idx) => (
                <div key={idx}>
                  <ListItem>
                    <ListItemText primary={user.name}></ListItemText>
                    <IconButton
                      onClick={() => handleEdit(user)}
                      aria-label='delete-user'
                      variant='contained'
                      color='info'
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label='delete-user'
                      variant='contained'
                      color='error'
                      onClick={() => handleDelete(user)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          )}
        </>
      )}
    </>
  );
});

export default UserList;
