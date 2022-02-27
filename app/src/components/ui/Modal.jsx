import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch, useSelector } from 'react-redux';

import { setModal } from '../../actions/modal.action';

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const { isOpen, header } = useSelector((state) => state.modal);

  const handleCloseModal = () => {
    dispatch(setModal(false, ''));
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{header}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
