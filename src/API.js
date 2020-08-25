const baseUrl = 'http://localhost:9090/addressbookservice';

const contactUrl = baseUrl + '/contacts/';

const get = (url) => {
   return fetch(url).then(resp => resp.json())
}

const post = (url, obj) =>{
    const configObj = {
        method : 'POST',
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    return fetch(url, configObj)
}

const deleteAPI = url =>(
    fetch(url, {
    method: 'DELETE',
    }).then(resp => resp.json()) 
)
	
const patchAPI = (url, obj) => {
	return fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
            'Accept': 'application/json'
		},
		body: JSON.stringify(obj)
    }).then(resp => resp.json())
};
    


const getContacts = () => get(contactUrl)

const submitObj = (body) => {
    return post(contactUrl, body).then(resp => resp.json())
}


const removeContact = obj => deleteAPI(contactUrl + obj);

const editContact = (obj) => patchAPI(contactUrl + obj)

export default { getContacts, submitObj,removeContact, editContact}