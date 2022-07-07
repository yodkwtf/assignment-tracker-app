import { useAppContext } from '../../context/context';

const Alert = () => {
  const { alertMessage, alertType } = useAppContext();

  return <div className={`alert alert-${alertType}`}>{alertMessage}</div>;
};
export default Alert;
