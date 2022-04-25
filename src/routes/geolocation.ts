import { Router } from 'express';

import {getLocation,
        getCurrentLocationOrCity, 
        getForecastCurrentLocationOrCity               
} from '../controllers/geolocation';

const router = Router();

router.get('/location', getLocation);    

router.get('/current/:city?', getCurrentLocationOrCity);  
  
router.get('/forecast/:city?', getForecastCurrentLocationOrCity);   


export default router;