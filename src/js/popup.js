//
// popup.js
//

'use strict';

const form = {
    author: $('item-author'),
    type: $('item-type'),
    action: $('item-action'),
    add: $('item-add'),
    fragments: (() =>
        ['myself', 'user', 'channel', 'community'].map(author => {
            const fragment = document.createDocumentFragment();
            const elements = Message[author].map(message => {
                const option = document.createElement('option');
                option.innerText = message.label;
                option.value = message.type;
                return option;
            });
            elements.map(element => fragment.appendChild(element));
            return fragment;
        })
    )(),
    init: function() {
        this.type.appendChild(this.fragments[1].cloneNode(true));

        this.author.addEventListener('change', e => {
            Array.from(this.type.childNodes).map(node => node.remove());
            const clone = this.fragments[e.target.value].cloneNode(true);
            this.type.appendChild(clone);
        }, false);

        document.getElementById('item-add').addEventListener('click', () => {
            console.log(this.type.value, this.action.value);
        });
    }
};

form.init();

function $(id) {
    return document.getElementById(id);
}
