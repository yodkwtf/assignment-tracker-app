const FormRow = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <input
        type={type || 'text'}
        name={name}
        placeholder={placeholder || `Enter ${name}`}
        value={value}
        onChange={onChange}
        className="form-input"
        autoComplete="off"
      />
    </div>
  );
};
export default FormRow;
