import "./current-weather.css";

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div className="details">
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.description}</p>
                </div>
                <div className="top-details">
                    <img alt="weather" className="weather-icon" src={`icons/${data && data.days && data.days[0] && data.days[0].icon ? data.days[0].icon : 'unknown'}.svg`}/>
                </div>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.days[0].temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.days[0].feelslike)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.days[0].windspeed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.days[0].humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.days[0].pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;