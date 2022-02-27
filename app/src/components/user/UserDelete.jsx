import { useState } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../actions/modal.action';
import { startDeletingUser } from '../../actions/user.action';

const UserDelete = () => {
  const dispatch = useDispatch();

  const { selectedUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const handleCloseModal = () => {
    dispatch(setModal(false));
  };

  const handleDelete = () => {
    setLoading(true);
    dispatch(startDeletingUser(selectedUser.id));
  };

  if (!selectedUser) return <p>Loading user data...</p>;
  else
    return (
      <div style={{ width: '350px' }}>
        <Typography>
          Are you sure you want to delete the user <b>{selectedUser.name}</b>?
        </Typography>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          marginTop={3}
        >
          <Button variant='contained' color='info' onClick={handleCloseModal}>
            Cancel
          </Button>
          <LoadingButton
            color='error'
            endIcon={<DeleteIcon />}
            loading={loading}
            loadingPosition='end'
            onClick={handleDelete}
            variant='contained'
          >
            Delete
          </LoadingButton>
        </Stack>
      </div>
    );
};

export default UserDelete;
