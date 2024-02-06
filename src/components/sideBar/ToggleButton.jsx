import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

const ToggleButton = ({ Open, setIsOpen }) => {
  return (
    <button onClick={() => setIsOpen((prev) => !prev)}>
      {Open ? <RxCross2 size={22} /> : <RxHamburgerMenu size={22} />}
    </button>
  );
};

export default ToggleButton;
