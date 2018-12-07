import styles from './Checkbox.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onHover = e => {
    this.setState({
      ...this.state,
      hover: true
    });
  };

  onLeave = e => {
    this.setState({
      ...this.state,
      hover: false
    });
  };

  renderItems = () => {
    let { hover } = this.state;
    let { children } = this.props;

    if (!children) {
      return null;
    }

    return React.Children.map(children, (child, index) =>
      React.isValidElement(child)
        ? child.type.name === 'Checkmark'
          ? React.cloneElement(child, {
              onHover: hover
            })
          : React.cloneElement(child)
        : null
    );
  };

  render() {
    let {
      position,
      name,
      id,
      value,
      isChecked,
      children,
      className,
      ...restProps
    } = this.props;

    return (
      <label
        {...restProps}
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
      >
        {this.renderItems()}
      </label>
    );
  }
}

export default Checkbox;
