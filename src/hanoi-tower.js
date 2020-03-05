module.exports = function calculateHanoi(a,b) {
    return {
        turns : (Math.pow(2, a))-1,
        seconds : ((Math.pow(2, a))-1)/(b/3600)
    };
}
