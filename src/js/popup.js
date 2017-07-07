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
    exists: function(rule) {
        return this.items.some(item => item.type === rule.type);
    },
    add: function(rule) {
        const message = Message.findByType(rule.type);
        this.element.innerHTML +=
            `<tr data-type="${rule.type}">
              <td>${message.author.label} の</td>
              <td>${message.label} を</td>
              <td>${actions[rule.action]}</td>
              <td><a class="delete is-small"></a></td>
            </tr>`;
        this.items.push(rule);
    },
    remove: function(rule) {
        this.items = this.items.filter(item => item.type !== rule.type);
    },
    save: function(callback=undefined) {
        chrome.storage.sync.set({ rules: this.items }, callback);
    },
    init: function() {
        this.element.addEventListener('click', e => {
            if (e.target.classList.contains('delete')) {
                const node = e.target.parentNode.parentNode;
                this.remove({ type: node.dataset.type });
                this.save(() => node.remove());
            }
        });

        chrome.storage.sync.get(null, data =>
            data.rules.map(rule => this.add(rule))
        );
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
            if (rules.exists(rule)) {
                modal.show('同じ条件のルールがすでに存在します。');
            } else {
                rules.add(rule);
                rules.save();
            }
        });
    }
};

const modal = {
    element: $('modal'),
    text: $('modal-text'),
    show(message) {
        this.text.innerText = message;
        this.element.classList.add('is-active');
    },
    init() {
        this.element.addEventListener('click', () =>
            this.element.classList.remove('is-active')
        );
    }
};

document.addEventListener('DOMContentLoaded', () => {
    rules.init();
    form.init();
    modal.init();
});

function $(id) {
    return document.getElementById(id);
}
