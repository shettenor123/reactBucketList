import React, { Component } from "react";
import "./FormSelect.scss";
import Select from "react-select";

const individualselect = {
  option: () => ({
    color: "red",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "13px",
    lineHeight: "23px",
    color: "#2B2C33",
    padding: " 8px",
    cursor: "pointer",
    textTransform: "capitalize",
  }),
  singleValue: (provided, state) => {
    const fontFamily = "'Roboto', sans-serif";
    const fontSize = "16px";
    const lineHeight = "23px";
    const color = "#16181D";
    const cursor = "pointer";
    const width = "100%";

    return {
      ...provided,
      width,
      fontFamily,
      fontSize,
      lineHeight,
      color,
      cursor,
      textTransform: "capitalize",
    };
  },
  control: () => ({
    fontFamily: "'Roboto', sans-serif",
    fontSize: "16px",
    lineHeight: "10px",
    border: "1px solid #ADB7BA",
    borderRadius: "4px",
    background: "#fff",
    textTransform: "capitalize",
  }),
};
export default class FormSelect extends Component {
  render() {
    return (
      <div className="FormSelect" id={this.props.id ? this.props.id : ""}>
        <label
        >
          {this.props.label}
          {this.props.required ? <span>*</span> : ""}
        </label>
        <Select
          styles={this.props.customStyles}
          isMulti={this.props.IsMulti}
          value={this.props.value}
          onChange={this.props.onChange}
          options={this.props.options}
          className={this.props.className}
          isSearchable={this.props.isSearchable}
          styles={individualselect}
          placeholder={this.props.placeholder}
          inputValue={this.props.inputValue}
          classNamePrefix={this.props.classNamePrefix}
          onMenuOpen={this.props.onMenuOpen}
          onInputChange={this.props.onInputChange}
          isDisabled={this.props.disabled}
          menuIsOpen={this.props.menuIsOpen}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
        />
        {this.props.error ? (
          <span className="error">{this.props.error || "Required"}</span>
        ) : (
          ""
        )}
      </div>
    );
  }
}
