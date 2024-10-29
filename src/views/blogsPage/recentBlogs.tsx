import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Group302 from "../../assets/images/Group302.png";

const RecentBlogs = () => {
  return (
    <div className="px-4">
      <div
        className="h-96 w-full relative mb-9 bg-center"
        style={{
          backgroundImage: `url(${Group302})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between mb-9 w-full lg:w-[80%] mx-auto">
        <div className="w-full lg:w-[40%] mb-8 lg:mb-0">
          <div className="flex items-center bg-bglburegistrationbanner w-full lg:w-72 h-12 lg:h-24 px-4">
            <input
              className="w-full lg:w-48 h-10 lg:h-8 bg-white placeholder-gray-400 focus:outline-none text-white"
              type="text"
              placeholder="Search..."
            />
            <SearchIcon
              style={{
                background: "black",
                color: "white",
                width: "33px",
                height: "33px",
              }}
            />
          </div>

          <div className="w-full lg:w-72 bg-gray-200 my-4 p-4">
            <h4 className="text-bglburegistrationbanner pb-2">Recent Blogs</h4>
            <div className="space-y-4">
              {["What is Lorem ipsum?", "Lorem Ipsum?", "Lorem Ipsum Text"].map(
                (text, idx) => (
                  <div key={idx}>
                    <p className="text-sm">{text}</p>
                    <div className="text-sm text-gray-600 flex items-center">
                      <CalendarTodayIcon
                        style={{ color: "gray", fontSize: "17px" }}
                      />
                      <span className="ml-2">Oct 03, 2024</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="w-full lg:w-72 bg-gray-200 my-4 p-4">
            <h4 className="text-bglburegistrationbanner pb-2">Categories</h4>
            {["UI/UX Designing", "Website Development", "App Development"].map(
              (category, idx) => (
                <p key={idx} className="text-sm">
                  {category}
                </p>
              )
            )}
          </div>
        </div>

        <div className="w-full lg:w-[60%]">
          <div>
            <h1 className="text-xl font-bold text-black">
              Lorem ipsum is simply dummy text
            </h1>
            <p className="text-sm py-4" style={{ color: "#605e5e" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <p className="text-sm py-4" style={{ color: "#605e5e" }}>
              Lorem Ipsum is simply dummy text of the printing industry's
              standard dummy Lorem Ipsum is simply dumm
            </p>

            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                  <TaskAltIcon
                    className="text-bglburegistrationbanner"
                    style={{ fontSize: "18px" }}
                  />
                  <Typography
                    sx={{ ml: 2, fontSize: "14px", color: "#605e5e" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing.
                  </Typography>
                </Box>
              ))}

            <h1 className="text-xl font-bold mt-6">
              Lorem ipsum is simply dummy text
            </h1>
            <p className="text-sm py-4" style={{ color: "#605e5e" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>

          <hr className="my-4" />

          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center mb-2">
              <h1 className="mr-2">Tag: </h1>
              <p className="text-sm">The standard chunk of Lorem Ipsum used</p>
            </div>
            <div className="flex items-center">
              <h1 className="mr-2">Share This:</h1>
              <div className="space-x-1">
                <FacebookIcon className="bg-gray-300 text-bglburegistrationbanner" />
                <InstagramIcon className="bg-gray-300 text-bglburegistrationbanner" />
                <XIcon className="bg-gray-300 text-bglburegistrationbanner" />
                <YouTubeIcon className="bg-gray-300 text-bglburegistrationbanner" />
              </div>
            </div>
          </div>

          <div className="my-4">
            <h1 className="text-lg">2 Comments</h1>
            {[...Array(2)].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-wrap bg-gray-200 p-4 my-3 rounded-lg"
              >
                <div className="w-[14%] text-center">
                  <AccountCircleIcon
                    style={{ fontSize: "55px" }}
                    className="text-gray-600"
                  />
                </div>
                <div className="w-[83%]">
                  <h1 className="font-medium">Admin</h1>
                  <p className="text-sm" style={{ color: "#605e5e" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-lg mb-2">Write a Reply or Comment</h1>
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-gray-200 text-gray-500 w-full lg:w-[49%] h-10 mr-2 my-2 p-2"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="bg-gray-200 text-gray-500 w-full lg:w-[49%] h-10 my-2 p-2"
            />
            <textarea
              placeholder="Enter Your Comment"
              className="bg-gray-200 text-gray-500 w-full h-28 p-2 my-2"
            />
          </div>
        </div>
      </div>
      <div className="text-center mb-6">
        <button className="bg-bglburegistrationbanner text-white py-2 px-6 rounded-xl">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default RecentBlogs;
