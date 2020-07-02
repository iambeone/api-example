import { TODOCard } from './todoCard.js'

export class cardList{
    constructor(selector, api){
        this.el = document.querySelector(selector)
        this._api = api
    }

    addCard(card){
        this.el.prepend(card._html())
    }

    loadCard(){
        this._api.get('/')
            .then(result => {
                result
                    .reverse()
                    .map(data => new TODOCard(data))
                    .forEach(card => this.addCard(card))
            })
    }
}