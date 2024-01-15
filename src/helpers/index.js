import { useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setMode } from "../state";

const Helper = () => {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const location = useLocation();

  const { palette } = useTheme();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:700px)");

  return {
    mode,
    dispatch,
    palette,
    navigate,
    isNonMobileScreens,
    location,
    setMode,
  };
};

export default Helper;
