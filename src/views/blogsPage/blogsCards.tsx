import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Group302 from "../../assets/images/Group302.png";
import Group303 from "../../assets/images/Group 30 (3).png";
import Group304 from "../../assets/images/Group 30 (4).png";
import Group305 from "../../assets/images/Group 30 (5).png";
import Group306 from "../../assets/images/Group 30 (6).png";
import Group307 from "../../assets/images/Group 30 (7).png";
import Group308 from "../../assets/images/Group 30 (8).png";
import Group309 from "../../assets/images/Group 30 (9).png";
import Group29 from "../../assets/images/Group 29.png";
import { Link } from "react-router-dom";

const BlogsCards: React.FC = () => {
  const blogsItems = [
    {
      image: Group302,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group303,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group304,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group305,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group29,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group306,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group307,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group308,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group309,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 my-12">
        {blogsItems.map((item, index) => (
          <div key={index} className="max-w-xs w-full bg-white ">
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions className="flex justify-between px-4 pb-4">
              <Link to="/recentBlogs">
                {item.button}
                <span>
                  {" "}
                  <ArrowForwardIcon />{" "}
                </span>
              </Link>
            </CardActions>
          </div>
        ))}
      </div>
      <div>
        <Stack spacing={2} className="items-center my-6">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
};

export default BlogsCards;
