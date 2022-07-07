import { useState, useEffect } from 'react';
import { FormRow, Logo, Alert } from '../components/common';
import { useAppContext } from '../context/context';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  // get Data from context
  const { showAlert, displayAlert } = useAppContext();

  const toggleMember = () => {
    setFormData({ ...formData, isMember: !formData.isMember });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = formData;

    if (!email || !password || (!isMember && !name)) {
      displayAlert('Please fill in all fields', 'danger');
    }
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Logo />
      <h3>{formData.isMember ? 'login' : 'register'}</h3>

      {showAlert && <Alert />}

      {!formData.isMember && (
        <FormRow
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      )}

      <FormRow
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
      />
      <FormRow
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
      />

      <button type="submit" className="btn btn-block">
        Submit
      </button>

      <p>
        {formData.isMember ? 'Not a member?' : 'already a member?'}
        <button type="button" onClick={toggleMember}>
          {formData.isMember ? 'Register' : 'Login'}
        </button>
      </p>
    </form>
  );
};
export default Register;
