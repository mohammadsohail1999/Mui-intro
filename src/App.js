import "./App.css";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Navbar from "./Components/Navbar";

import { Grid } from "@mui/material";
import Leftbar from "./Components/Leftbar";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import { makeStyles } from "@mui/styles";
import { theme } from "./utilities/theme";
import Add from "./Components/Add";

const CustomButton = styled(Button)({
  backgroundColor: "#FBAB7E",
  backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  color: "#fff",
  // padding: "6px 12px",
  border: "1px solid",
});

const useStyles = makeStyles({
  right: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      {/* <Button
        startIcon={<SendIcon />}
        color="secondary"
        variant="outlined"
        size="large"
        style={{ background: "purple", color: "white" }}
      >
        MATERIAL UI
      </Button>

      <CustomButton size="large">Custom button</CustomButton> */}
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={10} xs={10}>
          <Feed />
        </Grid>
        {/* 
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid> */}
      </Grid>
      <Add />
    </div>
  );
}

export default App;
