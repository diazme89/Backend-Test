import { request, response } from 'express';
import accents from 'remove-accents';

import { getCityIpApi } from './getCityIpApi';
import { getForecastByCity } from './getForecastByCity';
import { getWeatherByCity } from './getWeatherByCity';


export const getLocation = async(req = request, res = response) => {

    try {
        const ipApi = await getCityIpApi();

        res.status(200).json({                 
            ipApi
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}


export const getCurrentLocationOrCity = async(req = request, res = response) => {
    
    let { city } = req.params;

    let ipApi: any;    

    try {

        if (!city) {

            ipApi = await getCityIpApi(); 
            city = accents(ipApi.city);
      
        }        

        const openWeatherMap = await getWeatherByCity( accents(city) );

        if(openWeatherMap){
            res.status(200).json({
                openWeatherMap
            }); 
        } else {
            res.status(404).json({
                msg: 'Nombre de ciudad no encontrado'
            });            
        }
   

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }   

}



export const getForecastCurrentLocationOrCity = async(req = request, res = response) => {

    let { city } = req.params;

    let ipApi: any;    

    try {

        if (!city) {

            ipApi = await getCityIpApi(); 
            city = accents(ipApi.city);
      
        }        

        const openWeatherMap = await getForecastByCity( accents(city) );

        if(openWeatherMap){
            res.status(200).json({
                openWeatherMap
            }); 
        } else {
            res.status(404).json({
                msg: 'Nombre de ciudad no encontrado'
            });            
        }
   

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }  
}




