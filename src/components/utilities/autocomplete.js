import React, { Component } from "react";
import PropTypes from "prop-types";

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ userInput: props.value });
  }

  onChange(e) {
    console.log("onChanges");

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter((optionName) => optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
  }

  onClick(e) {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
    this.props.onChange(e.currentTarget.innerText);
  }
  onKeyDown(e) {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState(
        {
          activeOption: 0,
          showOptions: false,
          userInput: filteredOptions[activeOption],
        },
        () => {
          this.props.onChange(filteredOptions[activeOption]);
        }
      );
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  }

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className={`list-group text-dark`}>
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = "option-active";
              }
              return (
                <li className={className + " list-group-item"} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <input type="text" className="form-control" onChange={onChange} onKeyDown={onKeyDown} value={userInput} required />
          {/* <input type="submit" value="" className="search-btn" /> */}
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
