import TokenService from './token-service'
import config from '../config'

const EntriesService = {
    getUserEntries: async function () {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/entry`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${TokenService.getAuthToken()}`,
                    'Access-Control-Allow-Origin': 'https://git.heroku.com/fathomless-cliffs-34718.git/api/entry'
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