import React from "react";

import {
  Card,
  Container,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { theme } from "../utilities/theme";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  media: {
    height: "250px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
  card: {
    marginBottom: theme.spacing(2),
  },
});

const Posts = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        style={{ objectFit: "fill" }}
        component="img"
        alt="post"
        className={classes.media}
        src="https://images.pexels.com/photos/9734976/pexels-photo-9734976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5">
          My first Post
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          vitae voluptate saepe sint illum odit, eum accusamus sit harum qui
          commodi explicabo adipisci eligendi cupiditate dolorum accusantium
          totam natus rem!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Posts;
