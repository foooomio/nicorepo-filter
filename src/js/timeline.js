//
// timeline.js
//

'use strict';

class TimelineItem {
    constructor(node) {
        this.node = node;
        this.type = Message.findByText(node.innerText).type;
    }
    action(rules) {
        rules.some(rule =>
            this.match(rule) && !this[rule.action](rule)
        ) || this.reset();
    }
    match(rule) {
        return rule.type === this.type;
    }
    mute(rule) {
        this.node.style.display = 'none';
        this.node.style.backgroundColor = 'initial';
    }
    highlight(rule) {
        this.node.style.display = 'block';
        this.node.style.backgroundColor = rule.color;
    }
    reset() {
        this.node.style.display = 'block';
        this.node.style.backgroundColor = 'initial';
    }
}

const Timeline = {
    items: [],
    rules: [],
    clear() {
        this.items = [];
    },
    /**
     * @param {Rule[]} rules
     */
    update(rules) {
        this.rules = rules;
        this.items.map(item => item.action(this.rules));
    },
    /**
     * @param {TimelineItem} item
     */
    push(item) {
        item.action(this.rules);
        this.items.push(item);
    }
};
