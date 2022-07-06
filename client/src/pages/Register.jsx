import { useState, useEffect } from 'react';
import { FormRow, Logo } from '../components/common';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const toggleMember = () => {
    setFormData({ ...formData, isMember: !formData.isMember });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Logo />
      <h3>{formData.isMember ? 'login' : 'register'}</h3>

      {!formData.isMember && (
        <FormRow
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      )}

      <FormRow
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormRow
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
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
