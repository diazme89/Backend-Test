import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import geolocalizacionPathRoute from '../routes/geolocation';


// Configurar dot.env
dotenv.config(); 

class Server {
    private app: Application;
    private port: string;
    private geolocalizacionPath: string;
   

    constructor(){
        // Crear una aplicacion de express
        this.app = express();
        this.geolocalizacionPath = '/v1';
        
        this.port = process.env.PORT || '8000';

        //Middlewares
        this.middlewares();

        //Rutas de nuestra aplicacion
        this.routes();

    }
    
    routes(){
        //Rutas de nuestra aplicacion
        this.app.use( this.geolocalizacionPath, geolocalizacionPathRoute);
    }
      

    middlewares(){
        // CORS
        this.app.use( cors() );        

        // Lectura y parseo del body
        this.app.use( express.json() );         

        //Directorios Publicos
        this.app.use( express.static('public') );

    }

    //Metodo para inicializar nuestro servidor
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Se inicializo el servidor en el puerto', this.port)
        })
    }

    getApp() {
        return this.app;
    }

}

export default Server;