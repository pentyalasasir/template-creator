import React, { useContext } from "react";

import { LayoutContext } from "./Layout";

export default function ImageSelect(props) {
  const { lMethods } = useContext(LayoutContext);
  return (
    <div
      onClick={() => {
        lMethods.openRdrawer();
        props.setImgType(props.imageType);
      }}
      onFocus={lMethods.openRdrawer}
      onBlur={lMethods.closeRdrawer}
      style={{
        position: "absolute",
        left: props.left,
        top: props.top,
        height: "auto",
        width: props.width,
      }}
    >
      <img src={props.path || props.default}></img>
    </div>
  );
}
