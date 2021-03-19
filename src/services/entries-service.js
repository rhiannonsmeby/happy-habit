import TokenService from './token-service'
import config from '../config'

const EntriesService = {
    getAllEntries() {
        return fetch(`${config.API_ENDPOINT}/entries`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
    },
}

export default EntriesService;