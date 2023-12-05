const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="items-center form-control">
      <label htmlFor={name} className="cursor-pointer label">
        <span className="capitalize label-text">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
