const baseUrl = 'http://localhost:9090/addressbookservice';

const contactUrl = baseUrl + '/contacts';

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

const getContacts = () => get(contactUrl)

const submitObj = (body) => {
    return post(contactUrl, body).then(resp => resp.json())
}

export default { getContacts, submitObj}