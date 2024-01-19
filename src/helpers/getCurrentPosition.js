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
                    /**
                     * latitud -33.45694 y longitud -70.64827
                     */
                    const latitude = -33.45694;
                    const longitude = -70.64827;
                    const data = { longitude, latitude };
                    resolve(data);
                    //reject("Error al obtener la ubicación: " + error.message);
                }
            );
        } else {

            const latitude = -33.45694;
            const longitude = -70.64827;
            const data = { longitude, latitude };
            resolve(data);
            //reject("Geolocalización no es compatible en este navegador.");
        }
    });
};

export default getCurrentPosition;
