import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../actions/modal.action';
import FabAdd from '../components/ui/FabAdd';
import Modal from '../components/ui/Modal';
import UserAdd from '../components/user/UserAdd';
import UserDelete from '../components/user/UserDelete';
import UserEdit from '../components/user/UserEdit';
import UserList from '../components/user/UserList';
import componentsModal from '../helpers/componentsModal';

const Home = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);
  const handleAddUser = () => {
    dispatch(setModal(true, 'Add new user', componentsModal.userAdd));
  };

  return (
    <>
      <Typography
        variant='h5'
        component='p'
        sx={{ marginTop: '15px', textAlign: 'center' }}
      >
        Manage Users
      </Typography>
      <UserList />
      <FabAdd onClickFunction={handleAddUser} tooltipText='Add user' />
      {modalState.componentName === componentsModal.userAdd && (
        <Modal>
          <UserAdd />
        </Modal>
      )}
      {modalState.componentName === componentsModal.userEdit && (
        <Modal>
          <UserEdit />
        </Modal>
      )}
      {modalState.componentName === componentsModal.userDelete && (
        <Modal>
          <UserDelete />
        </Modal>
      )}
    </>
  );
};

export default Home;
