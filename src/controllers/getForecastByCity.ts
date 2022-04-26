import axios from 'axios';

export const getForecastByCity = async ( argcity: any ) => {
    try {

        const params:any = { 
            q: argcity,
            appid: process.env.OPENWEATHERKEY,
            units: 'metric',
            lang: 'es'};   
            
        const resp = await axios.get(`${ process.env.BASEURL_OWM }/forecast?q=${ params.q }&appid=${ params.appid }&units=${ params.units }&lang=${ params.lang }`);
        const { city, list } = resp.data;

        return {
            city,
            list
        };

    } catch (error) {

        console.log(error);

    }

  }