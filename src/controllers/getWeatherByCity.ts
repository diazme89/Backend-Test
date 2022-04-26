import axios from 'axios';

export const getWeatherByCity = async ( argcity: any ) => {
    try {

        const params:any = { 
            q: argcity,
            appid: process.env.OPENWEATHERKEY,
            units: 'metric',
            lang: 'es'};   
            
        const resp = await axios.get(`${ process.env.BASEURL_OWM }/weather?q=${ params.q }&appid=${ params.appid }&units=${ params.units }&lang=${ params.lang }`);
        const { dt, main, weather, clouds, wind, id, name, coord, sys, timezone } = resp.data;

        return {
            city: {
                id,
                name,
                coord,
                country: sys.country,
                timezone,
                sunrise: sys.sunrise,
                sunset: sys.sunset,
            },
            dt,
            main,
            weather: weather[0],
            clouds,
            wind
        };

    } catch (error) {

        console.log(error);

    }
  }