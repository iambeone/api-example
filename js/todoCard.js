
export class TODOCard{
    constructor({ title, description, id, likes }, api){
        this.title = title
        this.id = id
        this.description = description
        this.likes = likes
        this._el = this.createElement()
        this._api = api
        this.likesCountEl = null
    }

    delete(){
        this._api
            .delete('/' + this.id)
        this._el.remove()
    }

    updateLikesValue(){
        this._el.querySelector('.card__like-count').textContent = this.likes || 0
    }

    like(){
        this._api
            .post('/like/' + this.id).then(result => {
                this.likes = result.likes
                this.updateLikesValue()
            })
    }

    save(){
        result = this._api.post('/', {
            title: this.title,
            description: this.description
        })
        this.id = result.id
        this.likes = result.likes
        this.updateLikesValue()
    }

    createElement(){
        const el = document
            .querySelector('#todo-card-template')
            .content
            .querySelector('.card')
            .cloneNode(true)
        el.querySelector('.card__title').textContent = this.title
        el.querySelector('.card__description-text').textContent = this.description
        el.querySelector('.card__likes-count').textContent = this.likes || 0
        el.querySelector('.card__delete').addEventListener('click', () => this.delete())
        el.querySelector('.card__like').addEventListener('click', () => this.like())
        return el
    }

    _html(){
        return this._el
    }
}