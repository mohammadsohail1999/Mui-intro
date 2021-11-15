import React from "react";
import { makeStyles } from "@mui/styles";
import { theme } from "../utilities/theme";
import { Container, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import InfoIcon from "@mui/icons-material/Info";

const useStyles = makeStyles({
  container: {
    paddingTop: theme.spacing(10),
    height: "100vh",
    background: "#000",
    color: "#fff",
    position: "sticky",
    top: "0",
  },
  item: {
    display: "flex",

    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    cursor: "pointer",
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
});

const Leftbar = () => {
  const classes = useStyles();

  return (
    <Container
      // sx={{ position: "fixed", top: "0",width:"17%" }}
      maxWidth="lg"
      className={classes.container}
    >
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <MenuIcon className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <PersonalVideoIcon className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <InfoIcon className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
