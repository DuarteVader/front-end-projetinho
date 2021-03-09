import React from 'react';
import { oneOf, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './Button.css';

const cbn = 'ui-button';

const UIButton = ({ handleSubmit, to, theme, rounded, children, className, ...restProps }) => {


  return (
    <button
      {...restProps}
      className={cx(className, cbn, `${cbn}--${theme}`, {
        [`${cbn}--rounded`]: rounded,
      })}
      onClick={(e) => handleSubmit(e)}
    >
      {children}
    </button>
  )
}

UIButton.propTypes = {
  rounded: bool,
  theme: oneOf([
    'bordered-green',
    'contained-green',
  ]),
};

export default UIButton;
