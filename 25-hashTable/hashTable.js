/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function () {
    var result = {};
    var storage = [];
    var storageLimit = 1000;
    result.insert = function (key,value) {
        // TODO: implement `insert()`
        const hash=getIndexBelowMaxForKey(key, storageLimit);
        storage[hash] = value;
    };

    result.retrieve = function (key) {
        // TODO: implement `retrieve()`
        const hash=getIndexBelowMaxForKey(key, storageLimit);
        return storage[hash];
    };

    result.remove = function (key) {
        // TODO: implement `remove()`
        const hash=getIndexBelowMaxForKey(key, storageLimit);
        delete storage[hash];
    };
    return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = (hash << 5) + hash + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
        hash = Math.abs(hash);
    }
    return hash % max;
};
