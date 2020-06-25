import { API } from './api.js'
import { APIURL } from './config.js'
import { TODOCard } from './todoCard.js'

export class cardList{
    constructor(selector){
        this.el = document.querySelector(selector)      
        this._api = new API( { baseUrl: APIURL } )
    }

    addCard(card){
        this.el.prepend(card._html())
    }

    loadCards(){
        this._api.get('/').then(result => {
            result.map(item => new TODOCard(item)).forEach(card => this.addCard(card))
        })
    }
}