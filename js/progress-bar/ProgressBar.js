function progress(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const progress of data) {
        HTML += `  <p class="progress-bar-text">${progress.content}</p>
                    <div class="progressBarContainer">
                        <p class="progress-bar-number">${progress.width}</p>
                        <span class="progressBarIn" style="width: ${progress.width};">
                        </span>
                    </div>`;

    }

    DOM.innerHTML = HTML;
}


class Progressbar {
    constructor(selector, data){
        this.selector = selector
        this.data = data
    }
}


export { progress }