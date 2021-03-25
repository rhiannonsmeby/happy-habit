import TokenService from './token-service'
import config from '../config'

const EntriesService = {
    getUserEntries: async function () {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/entry`, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: `bearer ${TokenService.getAuthToken()}`
                },
            });
            if (!response.ok) {
                return response.json().then((event) => Promise.reject(event));
            } else {
                return response.json();
            }
        } catch(e) {
            console.error(e);
        }
    }
}

export default EntriesService;