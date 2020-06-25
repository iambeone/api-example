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
}