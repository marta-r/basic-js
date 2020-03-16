module.exports = class DepthCalculator {
    depth = 1;
    depthArr = [];
    calculateDepth(arr, fromRecursive = false) {
        if (!fromRecursive) {
            this.depth = 1;
            this.depthArr = [];
        }
        arr.forEach(element => {
            if (Array.isArray(element)) {
                this.depth++;
                this.calculateDepth(element, true);
            }
        });
        this.depthArr.push(this.depth);
        this.depth--;
        return Math.max(...this.depthArr);
    }
};
