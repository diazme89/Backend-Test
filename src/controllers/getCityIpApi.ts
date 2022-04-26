import axios from 'axios';
import publicIp from 'public-ip';

export async function getCityIpApi() {
    try {
        const ip = await publicIp.v4();

        const ipApi = await axios.get(`${ process.env.BASEURL_IPAPI}/${ ip }`);

        return ipApi.data;

    } catch (error) {

        return { error };

    }
}