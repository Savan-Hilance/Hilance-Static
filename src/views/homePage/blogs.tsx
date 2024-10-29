import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Group9417 from "../../assets/images/Group 9417.png";
import Group301 from "../../assets/images/Group 30 (1).png";
import Group30 from "../../assets/images/Group 30.png";
import { useNavigate } from "react-router-dom";

const Blogs: React.FC = () => {
  const navigate = useNavigate();
  const handleUpdateBlogs = () => {
    navigate("/blogs");
  };
  const blogsItems = [
    {
      image: Group9417,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group30,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
    {
      image: Group301,
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      button: `Read More`,
    },
  ];

  return (
    <div>
      <div className="text-center mt-12">
        <h6 className="text-bglburegistrationbanner text-lg mb-2">Our Blogs</h6>
        <h1 className="text-2xl font-bold text-gray-900 mb-5">Latest News</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
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
              <Button
                size="small"
                style={{ color: "#5054a4" }}
                endIcon={<ArrowForwardIcon />}
                onClick={handleUpdateBlogs}
              >
                {item.button}
              </Button>
            </CardActions>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
