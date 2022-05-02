const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push("( )");
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
