import React from 'react';
import PropTypes from 'prop-types';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

NavButton.propTypes = {
  title: PropTypes.string.isRequired,
  customFunc: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
  dotColor: PropTypes.string,
};

NavButton.defaultProps = {
  color: 'black',
  dotColor: null,
};

export default NavButton;
