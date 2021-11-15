import React from "react";

import { Container } from "@mui/material";

import { theme } from "../utilities/theme";
import { makeStyles } from "@mui/styles";
import Posts from "./Posts";

const useStyles = makeStyles({
  container: {
    padding: theme.spacing(10),
  },
});

const Feed = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Container>
  );
};

export default Feed;
