import config from '../config';
import TokenService from './token-service';

const EntryApiService = {
    getEntryData() {
        return fetch(`${config.API_ENDPOINT}/entry`, {
          headers: {
            'content-type': 'application/json',  
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((response) => {
            if (!response.ok) {
              return response.json().then((event) => Promise.reject(event));
            } else {
                return response.json();
            }
          })
        //   .catch(() => {
        //     alert('Oops! Something went wrong');
        //   });
      },
      getEntryById(id) {
        return  fetch(`${config.API_ENDPOINT}/entry/${id}`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then((event) => Promise.reject(event));
                } else {
                    return response.json();
                }
            })
            .catch(() => alert('Oops! Something went wrong'));
      },
      addEntry(newEntry) {
        return fetch(`${config.API_ENDPOINT}/entry`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newEntry),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((event) => Promise.reject(event));
                } else {
                    return response.json();
                }
            })
            .catch(() =>
                alert('Oops! Something went wrong')
            );
      },
      deleteEntry(id) {
          return fetch(`${config.API_ENDPOINT}/entry/${id}`, {
              method: 'DELETE',
              headers: {
                  'content-type': 'application/json',
                  authorization: `Bearer ${TokenService.getAuthToken()}`,
              },
          })
          .then((response) => {
              if (!response.ok) {
                  return response.json().then((event) => Promise.reject(event));
              }
          })
          .catch((error) => {
              alert(error.message);
          });
      },
}

export default EntryApiService;