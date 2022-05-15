import { Textfit } from "react-textfit";

import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;


// we included display output resize on length,
//  meaning longer values must shrink in size.
//   We’ll use a small (3.4kb gzip) library called
//    react-textfit for that.
