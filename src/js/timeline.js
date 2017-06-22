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
            this.match(rule) && !this[rule.action]()
        ) || this.reset();
    }
    match(rule) {
        return rule.type === this.type;
    }
    mute() {
        this.node.style.display = 'none';
        this.node.style.backgroundColor = 'none';
    }
    highlight() {
        this.node.style.display = 'block';
        this.node.style.backgroundColor = 'pink';
    }
    reset() {
        this.node.style.display = 'block';
        this.node.style.backgroundColor = 'none';
    }
}

const Timeline = {
    items: [],
    rules: [],
    /**
     * @param {Object} rule
     */
    addRules(rules) {
        this.rules = this.rules.concat(rules);
        this.items.map(item => item.action(this.rules));
    },
    /**
     * @param {TimelineItem}
     */
    push: function(item) {
        item.action(this.rules);
        this.items.push(item);
    }
};
