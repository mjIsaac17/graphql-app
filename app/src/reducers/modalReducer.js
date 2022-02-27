import { SET_MODAL } from '../actions/modal.action';

const initialState = {
  isOpen: false,
  header: 'Modal title',
  componentName: null
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      const { isOpen, header, componentName } = action.payload;
      return {
        ...state,
        isOpen,
        header,
        componentName
      };

    default:
      return state;
  }
};

export default modalReducer;
