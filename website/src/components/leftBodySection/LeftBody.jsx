import React, { useState, useEffect } from "react";
import SortNavbar from '../sortNavbarSection/SortNavbar.jsx';
import { SortByDate, SortByTitle, SortByRating, SortByPopularity } from "../sortdata/SortedData.js";
import ClockIcon from "../../svg icuns/ClockIcun.jsx";
import "./LeftBody.css";

function LeftBody({ dataType }) {
  const [visibleItems, setVisibleItems] = useState(8);
  const [sortedData, setSortedData] = useState([]);
  
  useEffect(() => {
    if (dataType) {
      setSortedData(getFilteredData(dataType, SortByDate));
    } else {
      setSortedData(SortByDate);
    }
  }, [dataType]);

  const getFilteredData = (dataType, data) => {
    return data.filter(item => item.type === dataType);
  };

  function DateAndTime(data) {
    const date = data.details.updatedDate.date;
    const time = data.details.updatedDate.time;
    const [year, month, day] = date.split("-");
    const [hours, minutes] = time.split(":");

    let clockHour = parseInt(hours, 10);
    let AmOrPm = "AM";

    if (clockHour >= 12) {
      AmOrPm = "PM";
      if (clockHour > 12) {
        clockHour -= 12;
      }
    } else if (clockHour === 0) {
      clockHour = 12;
    }

    let monthName;
    switch (month) {
      case "01":
        monthName = "January";
        break;
      case "02":
        monthName = "February";
        break;
      case "03":
        monthName = "March";
        break;
      case "04":
        monthName = "April";
        break;
      case "05":
        monthName = "May";
        break;
      case "06":
        monthName = "June";
        break;
      case "07":
        monthName = "July";
        break;
      case "08":
        monthName = "August";
        break;
      case "09":
        monthName = "September";
        break;
      case "10":
        monthName = "October";
        break;
      case "11":
        monthName = "November";
        break;
      case "12":
        monthName = "December";
        break;
      default:
        monthName = "?";
        break;
    }

    let ShowDateAndTime = `${day} ${monthName} ${year} || ${clockHour}:${minutes} ${AmOrPm}`;
    return ShowDateAndTime;
  }

  function TitleInfo(data) {
    const { language, subTitle, quality } = data.details;
    const { seasons } = data;

    let seassonEpDetails, qualityDetails;
    if (data.type === "anime" || data.type === "webSeries") {
      seassonEpDetails = ` Season 1  Ep[${seasons.season1.episodes.length}]`;
      return ` ${seassonEpDetails} [${language} Audio] || ${subTitle} Sub`;
    } else {
      qualityDetails = `||${quality.toString()}`;
      return `[${language} Audio] || ${subTitle} Sub ${qualityDetails}`;
    }
  }

  function LoadMore() {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  }

  const handleSortChange = (sortType) => {
    let sortedData;
    switch (sortType) {
      case 'date':
        sortedData = dataType ? getFilteredData(dataType, SortByDate) : SortByDate;
        break;
      case 'alphabet':
        sortedData = dataType ? getFilteredData(dataType, SortByTitle) : SortByTitle;
        break;
      case 'rating':
        sortedData = dataType ? getFilteredData(dataType, SortByRating) : SortByRating;
        break;
      case 'popularity':
        sortedData = dataType ? getFilteredData(dataType, SortByPopularity) : SortByPopularity;
        break;
      default:
        sortedData = dataType ? getFilteredData(dataType, SortByDate) : SortByDate;
    }
    setVisibleItems(8);
    setSortedData(sortedData);
  };

  return (
    <div className="contentContainer">
      <div className="sortNavbar">
        <SortNavbar onSortChange={handleSortChange} />
      </div>
      <div className="contentData">
        {sortedData.slice(0, visibleItems).map((data) => (
          <div key={data.id} className="eachDataCtr">
            <img className="image" src={data.details.image} alt="" />
            <h1>
              {data.details.title}
              {TitleInfo(data)}
            </h1>
            <div className="dateAndTimeCtr">
              <ClockIcon />
              {DateAndTime(data)}
            </div>
          </div>
        ))}
      </div>
      <div className="loadMoreBtnCtr">
        {visibleItems < sortedData.length && <button onClick={LoadMore}>Load More</button>}
      </div>
    </div>
  );
}

export default LeftBody;
