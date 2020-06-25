import { TODOCard } from './todoCard.js'
import { cardList } from './cardList.js'

const list = new cardList('.todos')

const addForm = document.querySelector('#createTodo')
addForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const data = new FormData(addForm)
    const card = new TODOCard({
        title: data.get('title'),
        description: data.get('desc')
    })
    list.addCard(card)    
})