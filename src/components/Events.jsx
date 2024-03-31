import { useEffect, useState } from "react";
import arrow from "../assets/right.png";
import location from "../assets/location.png";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [fileIds, setFileIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    fetchEvents();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const fetchEvents = () => {
    setLoading(true);
    setError(null); // Clear any previous error
    axios
      .get(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
      )
      .then((response) => {
        if (response.data.events.length === 0) {
          setReachedEnd(true);
        } else {
          setEvents((prevEvents) => [...prevEvents, ...response.data.events]);
          const ids = response.data.events.map((item) =>
            extractFileId(item.imgUrl)
          );
          setFileIds((prevFileIds) => [...prevFileIds, ...ids]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch events:", err);
        setError("Failed to fetch events. Please try again later."); // Set error message
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading &&
      !reachedEnd
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

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

  const convertToKilometers = (distanceInMeters) => {
    return (distanceInMeters / 1000).toFixed(3);
  };

  const reduceEventName = (eventName) => {
    const parts = eventName.split(" ");
    if (parts.length >= 2) {
      return parts.slice(0, 2).join(" ");
    } else {
      return eventName;
    }
  };

  return (
    <div>
      <div className="flex items-center font-semibold gap-2">
        Upcoming events
        <img src={arrow} alt="right-arrow" className="w-4 h-4" />
      </div>
      <div className="flex flex-wrap gap-3 mt-6 w-11/12 mx-20 max-[480px]:mx-auto">
        {events.map((item, index) => (
          <div key={index} className="border">
            <div className="relative">
              <LazyLoadImage className="mb:-30"
                effect="blur"
                src={`https://drive.google.com/thumbnail?id=${fileIds[index]}&sz=w1000`}
                alt={`event${index}`}
                width="300px"
                height="auto"
              />
              <div className="absolute bottom-3 text-center text-white bg-black w-11/12 left-3 ">
                {formatDate(item.date)}
              </div>
            </div>
            <div className="p-3 text-sm">
              <div className="font-semibold">
                {reduceEventName(item.eventName)}
              </div>
              <div className="flex justify-between">
                <div className='flex items-center gap-2'>
                  <img src={location} alt="location-icon" className='w-4 h-4'/>
                  {item.cityName}
                </div>
                <div className="flex gap-1">
                  <div>{item.weather}</div>|
                  <div className="pe-2">
                    {convertToKilometers(item.distanceKm)} Km
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {error && <div className="text-red-500">{error}</div>} {/* Render error message */}
      </div>
    </div>
  );
};

export default Events;
