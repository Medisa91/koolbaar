import { components } from "react-select";

export const InputOption = (props) => {
  return (
    <components.Option {...props}>
      <div className="checkbox-wrapper">
        <label className="lbl" htmlFor="cbx">
          {props.label}
        </label>
        <input
          id="cbx"
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <label className="cbx" htmlFor="cbx"></label>
      </div>
    </components.Option>
  );
};
