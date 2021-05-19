function socials(selector, data) {
    //validations

    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';

    //result return
    for (const social of data) {
        HTML += `<a href="${social.href}"
                    target="_blank"
                    class="fa fa-${social.icon}"></a>`;

    }

    DOM.innerHTML = HTML;
}

export { socials }