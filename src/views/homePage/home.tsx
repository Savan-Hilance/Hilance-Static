import React from "react";
import Contact from "../../components/contact";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import missionImg from "../../assets/images/mission_1628441.png";
import diamondImg from "../../assets/images/diamond_612145.png";
import visualImg from "../../assets/images/visual_10191900.png";
import GenerativeFill from "../../assets/images/GenerativeHome.png";

const Home: React.FC = () => {
  const cardData = [
    {
      img: missionImg,
      title: "Our Mission",
      content:
        "To empower businesses and entrepreneurs succeed by building high-quality mobile and web applications that boost productivity and expand their digital reach. As a leader in app development, we create custom solutions for iOS, Android, and web platforms, whether as ready-to-use products or subscription-based apps. Our goal is to make technology a tool for growth, helping our clients thrive in the digital world through innovative and sustainable solutions.",
    },
    {
      img: visualImg,
      title: "Our Vision",
      content:
        " Leading the way in mobile and web app development, Hilance combines innovation with user-centered design to empower businesses worldwide. Connect with us to stay updated on our latest projects and industry insights. ",
    },
    {
      img: diamondImg,
      title: "Our Values",
      content:
        "<strong>Innovation:</strong> We embrace change and continually seek new ideas to stay ahead.<br> <strong>Quality:</strong> We prioritize high standards in every app we build, ensuring reliability and performance. <br> <strong>Customer Success:</strong> We focus on our clients' success, tailoring our solutions to meet their unique needs. <br> <strong>Integrity:</strong>We maintain transparency and honesty in all interactions. <br> <strong>Collaboration:</strong> We believe in the power of teamwork, both within our company and with our clients.",
    },
  ];

  return (
    <div>
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${GenerativeFill})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-40 md:space-y-2">
          <p className="text-white">IT Solutions Agency in UAE</p>
          <p className="text-white text-2xl md:text-3xl font-bold py-1">
            Driving Business Innovation with Expert IT Solutions
          </p>
          <p className="text-white font-normal text-sm md:text-[16px] py-3">
            Empowering businesses to excel through customized IT solutions that
            enhance productivity, streamline processes, and drive growth.
            Partner with us to bring your digital vision to life and stay ahead
            in today’s fast-paced tech landscape.
          </p>
          <p className="text-white font-normal text-sm md:text-[16px]">
            At Hilance, we specialize in delivering high-quality mobile and web
            applications designed to boost your productivity and drive growth.
            Whether you need custom solutions or white-label products, our team
            is here to help you succeed in today’s digital landscape.
          </p>
        </div>
      </div>

      <Contact />

      <div className="flex flex-wrap w-[85%] gap-9 m-auto justify-center my-14 xl:gap-12">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="w-72 xl:w-96 mb-8"
            sx={{
              backgroundColor: "rgb(240, 240, 240)",
              borderLeft: "6px solid #5054A4",
            }}
          >
            <CardContent>
              <div className="flex justify-center mb-4">
                <img src={card.img} alt={card.title} className="w-16 h-16" />
              </div>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#1A1A1A",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: "#605E5E" }}
                className="xl:text-2xl text-sm"
                dangerouslySetInnerHTML={{ __html: card.content }}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
