
export const CalculateTemp = (measure, temp) => {
    switch (measure) {
        case 'F':
            let fahrenheit = (9 / 5) * (temp - 273.15) + 32;
            return `${fahrenheit.toFixed(2)}°F`;
            break;
        case 'C':
            let celcius = temp - 273.15;
            return `${celcius.toFixed(2)}°C`;
            break;
        default: celcius = temp - 273.15;
            return `${celcius.toFixed(2)}°C`;
            break;

    };
};

export const CalculateWind = (measure, wind) => {
    switch (measure) {
        case 'm/s':
            let ms = wind;
            return `${ms.toFixed(2)}m/s`;
            break;
        case 'km/h':
            let kmh = wind * 3.6;
            return `${kmh.toFixed(2)}km/h`;
            break;
        case 'knots':
            let knots = wind * 1.94384;
            return `${knots.toFixed(2)}knots`;
            break;
        default:
            return `${wind.toFixed(2)}m/s`;
            break;
    }
}