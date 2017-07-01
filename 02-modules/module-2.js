console.log('module 2');

// expose function getName
exports.getName = function() {
    return process.argv[2];
}