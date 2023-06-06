import React from "react";
import "./SpanCustom.css";
export const SpanCustom = ({ children, color }) => {
  const style = `__SpanCustom__ ${color}`;
  return <span className={style}>{children}</span>;
};
