import { useEffect, useState } from "react";
import arrow from "../assets/right.png";
import axios from "axios";
import location from "../assets/location.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Shows = () => {
  const [show, setShow] = useState([]);
  const [fileIds, setFileIds] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  useEffect(() => {
    axios
      .get(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      )
      .then((response) => {
        setShow(response.data.events);
        const ids = response.data.events.map((item) =>
          extractFileId(item.imgUrl)
        );
        setFileIds(ids);
      })
      .catch((err) => console.log(err));
  }, []);

  const extractFileId = (imgUrl) => {
    const startIndex = imgUrl.indexOf("/d/") + 3; 
    const endIndex = imgUrl.indexOf("/view", startIndex); 
    if (startIndex !== -1 && endIndex !== -1) {
      return imgUrl.substring(startIndex, endIndex);
    } else {
      console.error("Invalid image URL format");
      return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Function to convert meters to kilometers
  const convertToKilometers = (distanceInMeters) => {
    return (distanceInMeters / 1000).toFixed(2);
  };

  // Function to reduce event name to the second space
  const reduceEventName = (eventName) => {
    const parts = eventName.split(' ');
    if (parts.length >= 3) {
        return parts.slice(0, 2).join(' ');
    } else {
        return eventName;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between font-semibold">
        <div className="flex items-center gap-3 ps-5">
          Recommended shows
          <img src={arrow} alt="arrow-icon" className="w-4 h-4" />
        </div>
        <div className="underline">
          See all
        </div>
      </div>

      <Slider {...settings}>
        {show.map((item, index) => (
          <div key={index}>
            <div className="relative mt-5 max-[480px]:w-72">
              <img
                src={`https://drive.google.com/thumbnail?id=${fileIds[index]}&sz=w1000`}
                alt={`event${index}`}
                className="w-72"
              />
              <div className="w-64 absolute z-30 text-white bottom-7 text-sm ps-7">
                <div className="flex justify-between pe-5">
                  <div>{reduceEventName(item.eventName)}</div>
                  <div>{formatDate(item.date)}</div>
                </div>
                <div className="flex gap-1">
                  <div className="flex items-center gap-1">
                    <img src={location} alt="venue" className="w-3 h-3 grayscale invert" />
                    {item.cityName}
                  </div>
                  <div className="flex gap-2">
                    <div>{item.weather}</div>|
                    <div>{convertToKilometers(item.distanceKm)} Km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Shows;
