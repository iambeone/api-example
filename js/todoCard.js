import { APIURL } from './config.js'
import { API } from './api.js'

export class TODOCard{
    constructor({ title, description, id }){
        this.title = title
        this.id = id
        this.description = description
        this._el = this.createElement()
        this._api = new API( { baseUrl: APIURL } )
    }

    delete(){
        console.log(this.id)
    }

    save(){
        this._api.post('/', 
            {
                title: this.title,
                description: this.description
            }).then(result => {
                if(result && result.id){
                    this.id = result.id
                }
            })
    }

    createElement(){
        const el = document
            .querySelector('#todo-card-template')
            .content
            .querySelector('.card')
            .cloneNode(true)
        el.querySelector('.card__title').textContent = this.title
        el.querySelector('.card__description-text').textContent = this.description
        el.querySelector('.card__delete').addEventListener('click', () => this.delete())
        return el
    }

    _html(){
        return this._el
    }
}