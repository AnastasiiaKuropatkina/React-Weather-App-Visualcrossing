import React from "react";
import {
    Accordion,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItem,
    AccordionItemButton
} from 'react-accessible-accordion';
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    return (
    <>
        <label className="title">Forecast</label>
         <Accordion allowZeroExpanded>
            {data.days.splice(0, 7).map((day, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="daily-item">
                            <img alt="weather" className="weather-icon icon-small" src={`icons/${day.icon}.svg`}/>
                            <label className="day">{forecastDays[index]}</label>
                            <label className="description">{day.description}</label>
                            <label className="min-max">{Math.round(day.tempmax)}°C / {Math.round(day.tempmin)}°C</label>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="daily-details-grid">
                        <div className="daily-details-grid-item">
                          <label>Pressure:</label>
                          <label>{day.pressure}hPa</label>
                        </div>
                        <div className="daily-details-grid-item">
                          <label>Humidity:</label>
                          <label>{day.humidity}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                          <label>Clouds:</label>
                          <label>{day.cloudcover}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                          <label>Wind speed:</label>
                          <label>{day.windspeed}m/s</label>
                        </div>
                        <div className="daily-details-grid-item">
                          <label>Feels like:</label>
                          <label>{day.feelslike}°C</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Sunrise and 	Sunset time:</label>
                            <label>{day.sunrise} / {day.sunset}</label>
                        </div>
                      </div>
                </AccordionItemPanel>
            </AccordionItem>
            ))}
        </Accordion>
    </>
    )
};
export default Forecast;