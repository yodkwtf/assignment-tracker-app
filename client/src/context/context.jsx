import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import { DISPLAY_ALERT, HIDE_ALERT } from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // FUNCTIONS
  const displayAlert = (alertMessage, alertType) => {
    dispatch({ type: DISPLAY_ALERT, payload: { alertMessage, alertType } });
    hideAlert();
  };

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
