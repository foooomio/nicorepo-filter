//
// timeline.js
//

'use strict';

/**
 * @param {string} color
 * @param {number} percent
 * @return {string} color
 * @see https://gist.github.com/renancouto/4675192
 */
function darken(color, percent) {
    const number = parseInt(color.slice(1), 16);
    const amount = Math.round(2.55 * percent);
    let r = (number >> 16) - amount;
    let g = (number >> 8 & 0x00FF) - amount;
    let b = (number & 0x0000FF) - amount;
    r = r < 255 ? r < 1 ? 0 : r : 255;
    g = g < 255 ? g < 1 ? 0 : g : 255;
    b = b < 255 ? b < 1 ? 0 : b : 255;
    return '#' + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
}

class TimelineItem {
    constructor(node) {
        this.node = node;
        this.type = Message.findByText(node.innerText).type;
    }
    action(rules) {
        const rule = rules.find(rule => this.match(rule));
        rule ? this[rule.action](rule) : this.reset();
    }
    match(rule) {
        return rule.type === this.type;
    }
    mute(rule) {
        this.node.style.display = 'none';
        this.node.style.backgroundColor = null;
    }
    highlight(rule) {
        this.node.style.display = null;
        this.node.style.backgroundColor = TimelineItem.isDarkMode ? darken(rule.color, 60) : rule.color;
    }
    reset() {
        this.node.style.display = null;
        this.node.style.backgroundColor = null;
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
