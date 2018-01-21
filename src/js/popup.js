//
// popup.js
//

'use strict';

const actions = {
    mute: { value: 'mute', label: 'ミュート' },
    highlight: { value: 'highlight', label: 'ハイライト' },
};

const rules = {
    items: [],
    element: $('rules'),
    exists(rule) {
        return this.items.some(item => item.type === rule.type);
    },
    add(rule) {
        const message = Message.findByType(rule.type);
        const element = (() => {
            const tr = document.createElement('tr');
            tr.dataset.type = rule.type;
            const author = document.createElement('td');
            author.innerText = message.author.label + ' の';
            const type = document.createElement('td');
            type.innerText = message.label + ' を';
            const action = document.createElement('td');
            action.innerText = actions[rule.action].label;
            if (rule.action === actions.highlight.value) {
                const highlight = document.createElement('span');
                highlight.className = 'tag';
                highlight.style.backgroundColor = rule.color;
                highlight.innerText = '色';
                action.appendChild(highlight);
            }
            const remove = document.createElement('td');
            remove.innerHTML = '<a class="delete is-small"></a>';
            tr.appendChild(author);
            tr.appendChild(type);
            tr.appendChild(action);
            tr.appendChild(remove);
            return tr;
        })();
        this.element.appendChild(element);
        this.items.push(rule);
    },
    remove(rule) {
        this.items = this.items.filter(item => item.type !== rule.type);
    },
    save(callback = undefined) {
        chrome.storage.sync.set({ rules: this.items }, () => {
            if (chrome.runtime.lastError) {
                modal.show(chrome.runtime.lastError);
            } else {
                callback && callback();
            }
        });
    },
    init() {
        this.element.addEventListener('click', e => {
            if (e.target.classList.contains('delete')) {
                const node = e.target.parentNode.parentNode;
                this.remove({ type: node.dataset.type });
                this.save(() => node.remove());
            }
        });

        chrome.storage.sync.get(null, data =>
            data.rules && data.rules.map(rule => this.add(rule))
        );
    }
};

const form = {
    author: $('item-author'),
    type: $('item-type'),
    action: $('item-action'),
    button: $('item-add'),
    highlight: $('item-highlight'),
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
    init() {
        this.type.appendChild(this.fragments.user.cloneNode(true));

        this.author.addEventListener('change', e => {
            Array.from(this.type.childNodes).map(node => node.remove());
            const clone = this.fragments[e.target.value].cloneNode(true);
            this.type.appendChild(clone);
        });

        this.action.addEventListener('change', e =>
            this.highlight.disabled = (e.target.value !== actions.highlight.value)
        );

        this.highlight.addEventListener('click', () =>
            highlight.selectColor()
        );

        this.button.addEventListener('click', () => {
            const rule = { type: this.type.value, action: this.action.value };
            if (rule.action === actions.highlight.value) {
                if (!this.highlight.value) {
                    modal.show('ハイライト色が選択されていません。');
                    return;
                }
                rule.color = this.highlight.value;
            }
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

const highlight = {
    element: $('highlight'),
    colors: $('highlight-colors'),
    pallet: [
        { value: '#ffcdea', label: '赤' },
        { value: '#eaffcd', label: '緑' },
        { value: '#cdeaff', label: '青' },
        { value: '#fffbcd', label: '黄' },
        { value: '#cdd1ff', label: '紫' },
    ],
    selectColor() {
        this.element.classList.add('is-active');
    },
    init() {
        this.element.addEventListener('click', e => {
            if (e.target.dataset.color) {
                form.highlight.value = e.target.dataset.color;
                form.highlight.style.backgroundColor = e.target.dataset.color;
            }
            this.element.classList.remove('is-active');
        });

        this.pallet.map(color => {
            const button = document.createElement('a');
            button.className = 'button';
            button.style.backgroundColor = color.value;
            button.dataset.color = color.value;
            button.innerText = color.label;
            this.colors.appendChild(button);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    rules.init();
    form.init();
    modal.init();
    highlight.init();
});

function $(id) {
    return document.getElementById(id);
}
