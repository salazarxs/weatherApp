//Images
import cloudy from '../images/cloudy.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import sunWhitClouds from '../images/sunWhitClouds.png';

const ProviderImg = (currentTime) => {
    switch (currentTime) {
        case 'Cloudy':
            return cloudy;
        case 'Sun':
            return sun;
        case 'Rain':
            return rain;
        default:
            return sunWhitClouds;
    }

};

export default ProviderImg;