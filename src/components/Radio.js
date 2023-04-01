import "./Radio.scss";

function Radio({ children, value, name, defaultChecked, disabled, onHandler }) {
  return (
    <label className="label">
      <input
        className="radio"
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onHandler}
      />
      {children}
    </label>
  );
}

export default Radio;
