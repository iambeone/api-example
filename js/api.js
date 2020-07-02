export class API{
    constructor( { baseUrl } ){
        this._baseUrl = baseUrl
    }
    _fetch(url, params){
        if(params.body){
            params.headers = {
                "Content-Type": "text/json"
            }
            params.body = JSON.stringify(params.body)
        }
        return fetch(this.baseUrl + url, params)
        .then(data => {
            if(data.ok){
                return data
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
    post(url, body){
        return this._fetch(url, {
            method: 'POST',
            body
        })
    }
    get(url){
        return this._fetch(url, {
            method: 'GET'
        })
    }
    delete(url){
        return this._fetch(url, {
            method: 'DELETE'
        })
    }
    put(url, body){
        return this._fetch(url, {
            method: 'PUT',
            body
        })
    }

}