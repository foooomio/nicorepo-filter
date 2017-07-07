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
        rules.some(rule => this.match(rule) && !this[rule.action]())
            || this.reset();
    }
    match(rule) {
        return rule.type === this.type;
    }
    mute() {
        this.node.classList.add('filter-mute');
        this.node.classList.remove('filter-highlight');
    }
    highlight() {
        this.node.classList.remove('filter-mute');
        this.node.classList.add('filter-highlight');
    }
    reset() {
        this.node.classList.remove('filter-mute');
        this.node.classList.remove('filter-highlight');
    }
}

const Timeline = {
    items: [],
    rules: [],
    /**
     * @param {Object} rule
     */
    setRules(rules) {
        this.rules = rules;
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
