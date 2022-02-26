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

import { useDispatch } from 'react-redux';
import { setModal } from '../../actions/modal.action';
import { startAddingUser } from '../../actions/user.action';

const UserAdd = () => {
  const dispatch = useDispatch();

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
      dispatch(startAddingUser(userData));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '350px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          sx={{ margin: '5px' }}
          size='small'
          name='name'
          required
          label='User name'
        />
        <TextField
          sx={{ margin: '5px' }}
          size='small'
          name='age'
          required
          label='Age'
          type='number'
        />
      </div>
      <FormControl required sx={{ margin: '5px' }}>
        <FormLabel>Single</FormLabel>
        <RadioGroup row name='isSingle'>
          <FormControlLabel value={true} control={<Radio />} label='Yes' />
          <FormControlLabel value={false} control={<Radio />} label='No' />
        </RadioGroup>
      </FormControl>

      <Stack direction='row' spacing={2} justifyContent='center' marginTop={3}>
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
          Save
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default UserAdd;
