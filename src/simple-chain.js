const chainMaker = {
  chain: [],
  getLength() {
      this.chain.push(this.chain.length);
      return this;
  },
  addLink(value) {
      this.chain.push("( " + value + " )");
      return this;
  },
  removeLink(position) {
      if (position > 0 && isFinite(position) && position <= this.chain.length - 1) {
          this.chain.splice(position - 1, 1);
          return this;
      } else {
        this.chain = [];
        throw "Error on removing wrong link";
      }
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let str = this.chain.join("~~");
      this.chain = [];
      return str;
  }
};

module.exports = chainMaker;
