import { request, response } from 'express';

export const getLocation = async(req = request, res = response) => {

    try {
        // Validaciones
        

        res.json({
            msg: 'get - Desde controller getLocation'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}


export const getCurrentLocationOrCity = async(req = request, res = response) => {

    try {
        // Validaciones
        

        res.json({
            msg: 'get - Desde controller getCurrentLocationOrCity'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}


export const getForecastCurrentLocationOrCity = async(req = request, res = response) => {

    try {
        // Validaciones
        

        res.json({
            msg: 'get - Desde controller getForecastCurrentLocationOrCity'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}


