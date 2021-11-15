import React, { useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import {
  AppBar,
  styled,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../utilities/theme";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",

    backgroundColor: alpha("#806161", 0.15),
    "&:hover": {
      backgroundColor: alpha("#806161", 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  icon: {
    justifyContent: "space-between",
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  searchbtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar color="inherit" position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.logoLg} variant="h6">
          Mohammad Sohail
        </Typography>
        <Typography className={classes.logoSm} variant="h6">
          Mohammad
        </Typography>
        <div className={classes.search}>
          <SearchSharpIcon />
          <InputBase
            className={classes.input}
            placeholder="Search..."
            fullWidth
          />
          <Cancel
            onClick={() => {
              setOpen(false);
            }}
            className={classes.cancel}
          />
        </div>
        <div className={classes.icon}>
          <Search
            className={classes.searchbtn}
            onClick={() => {
              setOpen(true);
            }}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Mohammad Sohail" src="/static/images/avatar/1.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
