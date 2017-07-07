//
// popup.js
//

'use strict';

const actions = {
    mute: 'ミュート',
    highlight: 'ハイライト',
};

const rules = {
    items: [],
    element: $('rules'),
    add: function(rule) {
        const message = Message.findByType(rule.type);
        this.element.innerHTML +=
            `<tr>
              <td>${message.author.label} の</td>
              <td>${message.label} を</td>
              <td>${actions[rule.action]}</td>
              <td><a class="delete is-small"></a></td>
            </tr>`;
        this.items.push(rule);
    },
    save: function() {
        chrome.storage.sync.set({ rules: this.items });
    }
};

const form = {
    author: $('item-author'),
    type: $('item-type'),
    action: $('item-action'),
    button: $('item-add'),
    fragments: (() => {
        const obj = {};
        Object.values(Author).map(author => {
            const fragment = document.createDocumentFragment();
            const elements = Message.findByAuthor(author).map(message => {
                const option = document.createElement('option');
                option.innerText = message.label + 'を';
                option.value = message.type;
                return option;
            });
            elements.map(element => fragment.appendChild(element));
            obj[author.value] = fragment;
        });
        return obj;
    })(),
    init: function() {
        this.type.appendChild(this.fragments.user.cloneNode(true));

        this.author.addEventListener('change', e => {
            Array.from(this.type.childNodes).map(node => node.remove());
            const clone = this.fragments[e.target.value].cloneNode(true);
            this.type.appendChild(clone);
        }, false);

        this.button.addEventListener('click', () => {
            const rule = { type: this.type.value, action: this.action.value };
            rules.add(rule);
            rules.save();
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    form.init();
    chrome.storage.sync.get(null, data =>
        data.rules.map(rule => rules.add(rule))
    );
});

function $(id) {
    return document.getElementById(id);
}
