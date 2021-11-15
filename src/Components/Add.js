import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Tooltip,
  Button,
  Modal,
  Container,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
  Alert,
} from "@mui/material";

import { Add as AddIcon } from "@mui/icons-material";
import { theme } from "../utilities/theme";

const useStyles = makeStyles({
  btn: {
    background: "red !important",
    padding: "1rem !important",
    borderRadius: "50% !important",
    position: "fixed !important",
    bottom: "20px !important",
    right: "20px !important",
  },
  container: {
    width: "500px !important",
    height: "550px",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },

  form: {
    padding: "1rem",
  },
  item: {
    marginBottom: theme.spacing(3),
  },
});

const Add = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleOnClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setSuccessOpen(false);
  };

  return (
    <>
      <Tooltip title="Add">
        <Button
          onClick={(e) => {
            setOpen(true);
          }}
          variant="contained"
          className={classes.btn}
          color="primary"
        >
          <AddIcon />
        </Button>
      </Tooltip>
      <Modal open={open} onClose={handleOnClose}>
        <Container className={classes.container}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={classes.form}
          >
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="title"
                variant="standard"
                fullWidth
                margin="normal"
                required
              />
            </div>
            <div className={classes.item}>
              <TextField
                multiline
                rows={4}
                placeholder="Tell you story..."
                id="standard-basic"
                label="Description"
                variant="standard"
                fullWidth
                margin="normal"
                required
              />
            </div>
            <div className={classes.item}>
              <TextField
                margin="normal"
                variant="standard"
                select
                label="Visibility"
                fullWidth
                required
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormControl required margin="dense" component="fieldset">
                <FormLabel component="legend">Who Can comment?</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="EveryBody"
                    control={<Radio size="small" />}
                    label="EveryBody"
                  />
                  <FormControlLabel
                    value="My Friends"
                    control={<Radio size="small" />}
                    label="My Friends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio size="small" />}
                    label="Nobody"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.item}>
              <Button
                onClick={() => {
                  setOpen(false);
                  setSuccessOpen(true);
                }}
                type="submit"
                variant="outlined"
                color="primary"
              >
                Create
              </Button>
              <Button
                style={{ marginLeft: "1rem" }}
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Post was Cerated Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
