import { DISPLAY_ALERT, HIDE_ALERT } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.alertType,
        alertMessage: action.payload.alertMessage,
      };

    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertMessage: '',
      };

    default:
      throw new Error(`no such action : ${action.type}`);
  }
};

export default reducer;
