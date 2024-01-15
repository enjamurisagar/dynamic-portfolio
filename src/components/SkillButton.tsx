import { Button } from "@mui/material";
import React from "react";

const SkillButton = ({
  children,
  key,
}: {
  children: React.ReactNode;
  key?: number;
}) => {
  return <Button sx={{ px: 1, py: 0.5, border: 1 }}>{children}</Button>;
};

export default SkillButton;
