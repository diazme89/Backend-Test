import { Router } from 'express';

import {getLocation,
        getCurrentLocationOrCity, 
        getForecastCurrentLocationOrCity               
} from '../controllers/geolocation';

export const router = Router();

router.get('', (req, res) => {
        res.status(200).json({ status: "running" });
      });

router.get('/location', getLocation);    

router.get('/current/:city?', getCurrentLocationOrCity);  
  
router.get('/forecast/:city?', getForecastCurrentLocationOrCity);   


export default router;