class MensagemView extends View {
    
    constructor(elemento){
        super(elemento)
    }

    template(model){
        return  model.texto ? /*html*/`<p class="alert alert-info">${model.texto}</p>` : /*html*/`<p></p>`
    };

}