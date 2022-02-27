export const SET_MODAL = 'modal/SET';

export const setModal = (
  isOpen = false,
  header = 'Modal title',
  componentName = ''
) => ({
  type: SET_MODAL,
  payload: {
    isOpen,
    header,
    componentName
  }
});
