import { useState } from 'react';
import {
  Stack,
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../actions/modal.action';
import { startUpdatingUser } from '../../actions/user.action';

const UserEdit = () => {
  const dispatch = useDispatch();

  const { selectedUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const handleCloseModal = () => {
    dispatch(setModal(false));
  };

  const isFormValid = (userData) => {
    if (userData.name === '') {
      alert('Invalid user name');
      return false;
    }

    if (userData.age < 0) {
      alert('Invalid age');
      return false;
    }

    if (!userData.isSingle) {
      alert('Select an option (Yes/No)');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      name: formData.get('name').trim(),
      age: parseInt(formData.get('age')),
      isSingle: formData.get('isSingle')
    };

    if (isFormValid(userData)) {
      setLoading(true);
      dispatch(startUpdatingUser({ id: selectedUser.id, ...userData }));
    }
  };

  if (!selectedUser) return <p>Loading user data...</p>;
  else
    return (
      <form onSubmit={handleSubmit} style={{ width: '350px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            sx={{ margin: '5px' }}
            size='small'
            name='name'
            required
            label='User name'
            defaultValue={selectedUser.name}
          />
          <TextField
            sx={{ margin: '5px' }}
            size='small'
            name='age'
            required
            label='Age'
            type='number'
            defaultValue={selectedUser.age}
          />
        </div>
        <FormControl required sx={{ margin: '5px' }}>
          <FormLabel>Single</FormLabel>
          <RadioGroup row name='isSingle' defaultValue={selectedUser.isSingle}>
            <FormControlLabel value={true} control={<Radio />} label='Yes' />
            <FormControlLabel value={false} control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>

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
            color='success'
            endIcon={<SaveIcon />}
            loading={loading}
            loadingPosition='end'
            type='submit'
            variant='contained'
          >
            Update
          </LoadingButton>
        </Stack>
      </form>
    );
};

export default UserEdit;
