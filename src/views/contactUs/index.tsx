import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import GoogleMapReact from 'google-map-react';
import Generative from "../../assets/images/Generativecontact.png";
import Form from './form';

interface MarkerProps {
  text: string;
  lat: number;
  lng: number;
}

const AnyReactComponent: React.FC<MarkerProps> = ({ text }) => <div>{text}</div>;

const ContactUs: React.FC = () => {
  const information = [
    { icon: <FaMapMarkerAlt />, Iconname: 'Our Location', title1: '1395 UAE.', title2: 'Suite 800,FL 33131' },
    { icon: <IoMdCall />, Iconname: 'Call Us', title1: '+964 786 278 9084', title2: '+971 50 943 7956' },
    { icon: <IoMdMail />, Iconname: 'Email Us', title1: 'info@example.com', title2: 'infos@example.co.in' },
  ];

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 17,
  };

  const handleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    const trafficLayer = new maps.TrafficLayer()
    trafficLayer.setMap(map);
  }

  return (
    <div>
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${Generative})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-44 md:space-y-2">
          <p className="text-white text-3xl md:text-5xl font-bold">CONTACT US</p>
          <h1 className="text-white font-normal text-sm md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:px-2 lg:px-4 xl:px-0 space-y-6 md:space-y-0 md:space-x-4 lg:space-x-6 xl:space-x-9 py-10">
        {information.map((data, index) => (
          <div
            key={index}
            className="xl:py-16 lg:py-16 md:py-10 py-16 px-6 md:px-12 lg:px-24 text-center w-full md:w-1/3 max-w-sm"
            style={{ backgroundColor: 'rgb(240, 240, 240)' }}
          >
            <div>
              <button className="bg-bglburegistrationbanner text-white rounded-full p-4 text-4xl">
                {data.icon}
              </button>
            </div>
            <p className="py-2 text-xl font-medium" style={{ color: "#1a1a1a" }}>{data.Iconname}</p>
            <p className="text-sm" style={{ color: "#424242" }}>{data.title1}</p>
            <p className="text-sm" style={{ color: "#424242" }}>{data.title2}</p>
          </div>
        ))}
      </div>

      <Form />

      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={handleApiLoaded}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default ContactUs;
