class Toast {
    constructor() {
        this.DOM = document.querySelector('body')

        this.render();
    }

    render() {
        const HTML = `<div class="toast">
        <button type="button" class="close-toast"><i class="fa fa-times" aria-hidden="true"></i></button>
                            Form validation
                            </div>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML)

    }
}

export { Toast }