import React from "react";

export default function DateTime(props) {
  let minutes = props.date.getMinutes();
  let hours = props.date.getHours();

  let dateNumber = props.date.getDate();
  let year = props.date.getFullYear();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[props.date.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <ul className="current-time-date">
      <li>
        {hours}:{minutes}
      </li>
      <li>
        {month}/{dateNumber}/{year}
      </li>
      <li>{day}</li>
    </ul>
  );
}
