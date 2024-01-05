
export const CalculateTemp = (measure, temp) => {
    let celcius = 0;
    let fahrenheit = 0;
    switch (measure) {
        case 'F':
            fahrenheit = (9 / 5) * (temp - 273.15) + 32;
            return `${fahrenheit.toFixed(2)}°F`;
            break;
        case 'C':
            celcius = temp - 273.15;
            return `${celcius.toFixed(2)}°C`;
            break;
        default: celcius = temp - 273.15;
            return `${celcius.toFixed(2)}°C`;
            break;

    };
};

export const CalculateWind = (measure, wind) => {
    let ms = 0;
    let kmh = 0;
    let knots = 0;
    switch (measure) {
        case 'm/s':
            ms = wind;
            return `${ms.toFixed(2)}m/s`;
            break;
        case 'km/h':
            kmh = wind * 3.6;
            return `${kmh.toFixed(2)}km/h`;
            break;
        case 'knots':
            knots = wind * 1.94384;
            return `${knots.toFixed(2)}knots`;
            break;
        default:
            return `${wind.toFixed(2)}m/s`;
            break;
    }
}