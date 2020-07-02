import { TODOCard } from './todoCard.js'
import { cardList } from './cardList.js'
import { API } from './api.js'
import { APIURL } from './config.js'

const api = new API( { baseUrl: APIURL } )

const list = new cardList('.todos', api)
list.loadCard()

const addForm = document.querySelector('#createTodo')
addForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const data = new FormData(addForm)
    const card = new TODOCard({
        title: data.get('title'),
        description: data.get('desc')
    }, api)
    card.save()
    list.addCard(card)
})