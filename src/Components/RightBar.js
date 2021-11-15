import React from "react";

import { Container} from "@mui/material";

import { theme } from "../utilities/theme";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
  container: {
    padding: theme.spacing(10),
  },
});

const RightBar = () => {
  const classes = useStyles();

  return <Container className={classes.container}>
      Rightbar
  </Container>;
};

export default RightBar;
