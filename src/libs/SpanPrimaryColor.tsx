import React from "react";
import Helper from "../helpers";

const SpanPrimaryColor = ({ children }: { children: React.ReactNode }) => {
  const { palette } = Helper();
  return (
    <span
      style={{
        color: palette.primary.main,
        fontWeight: 800,
        fontStyle: "italic",
      }}
    >
      {children}
    </span>
  );
};

export default SpanPrimaryColor;
