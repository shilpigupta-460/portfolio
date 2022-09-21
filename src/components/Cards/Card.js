import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Img from "../../assets/photo1.jpg";
import p1 from "../../assets/photo3.jpg";
import v1 from "../../assets/videos/Shopping1.mp4";
import v4 from "../../assets/videos/chat.mp4";
import v3 from "../../assets/videos/Blog.mp4";
import Style from "./Card.css";
import Link from "@mui/material/Link";

// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//     root: {
//         color: "red",
//         background: "blue",
//         // display: "flex",
//         // flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         // margin: "30px 0",

//         boxSizing: "border-box",
//         margin: "1rem .25rem"

//     },
// });
export default function MediaCard({ length }) {
  // const classes = useStyles();

  const projects = [
    {
      id: 1,
      title: "ECommerce Web Application",
      description:
        "React, Hooks, Redux, Tailwind  CSS Firebase as a backend service ",
      image: v1,
      view: "",
    },
    {
      id: 2,
      title: "Reels-Instagram Clone",
      description:
        "React, Context, Hooks, Material UI, Firebase as a backend service ",
      image: "",
      view: "",
    },
    {
      id: 3,
      title: " Blog App backend with express under development",
      description:
        "Html semantics, CSS3, React, Express and responsive to devices ",
      image: v3,
      view: "",
    },
    {
      id: 4,
      title: " ChatApp with Google Account ",
      description: "React,Hooks, Tailwind CSS,  Firebase, Google SignUp ",
      image: v4,
      view: "",
    },
    {
      id: 5,
      title: "  JS Spotify Clone",
      description: "Html semantics, CSS 3, Js with responsive to devices ",
      image:
        "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
      view: "",
    },
    {
      id: 6,
      title: "  City Weather, Todo, TicTac ",
      description: "Weather API, Axios,Hooks, React CURD operations",
      image:
        "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
      view: "",
    },
  ];

  return (
    <div className="cards">
      {projects.map((project, index) => {
        if (index < length) {
          return (
            <Card key={index} sx={{ maxWidth: 400, marginTop: "3%" }}>
              <CardMedia
                component="iframe"
                src={project.image}
                allow="autoPlay"
                // component="video"
                height="230"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  {" "}
                  <Link href={project.view} underline="none">
                    Demo
                  </Link>{" "}
                </Button>
                <Button size="small">
                  <Link href="https://github.com/shilpigupta-460/Shopping-React-Material--UI-Redux-" underline="none">
                    Code
                  </Link>
                </Button>
              </CardActions>
            </Card>
          );
        }
      })}
    </div>
  );
}
