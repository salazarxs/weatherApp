const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const data = { longitude, latitude };
                    resolve(data);
                },
                function (error) {
                    reject("Error al obtener la ubicación: " + error.message);
                }
            );
        } else {
            reject("Geolocalización no es compatible en este navegador.");
        }
    });
};

export default getCurrentPosition;
