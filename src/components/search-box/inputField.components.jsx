import { Component } from "react"

class InputField extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder={this.props.placeholder}
        className={this.props.className}
        onChange={this.props.onChange}
      />
    )
  }
}

export default InputField
