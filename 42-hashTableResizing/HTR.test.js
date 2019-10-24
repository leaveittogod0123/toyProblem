import { makeHashTable } from "./hashTableResizing";

describe('makeHashTable', function () {
    it('should exist', function () {
        // should.exist(makeHashTable);
        expect(makeHashTable).toBeDefined();
    });
    it('should be a function', function () {
        // makeHashTable.should.be.a.Function();
        expect(typeof makeHashTable).toEqual("function");
    });
    it('should return a hash table', function () {
        var hashTable = makeHashTable();
        // should.exist(hashTable);
        // hashTable.should.be.an.Object();
        expect(hashTable).toBeDefined();
        expect(typeof hashTable).toEqual("object");
    });
    it('should return different instances of hash tables each time', function () {
        var hashTable1 = makeHashTable();
        // should.exist(hashTable1);
        expect(hashTable1).toBeDefined();
        var hashTable2 = makeHashTable();
        // should.exist(hashTable2);
        // hashTable1.should.not.be.equal(hashTable2);

        expect(hashTable1).not.toEqual(hashTable2);
        // `makehashTable()` should create a new hash table object instance
        // everytime but it's not!
    });
});

describe('hashTable', function () {
    describe('#insert', function () {
        it('should exist as a method of hashtable instances', function () {
            var hashTable = makeHashTable();
            // should.exist(hashTable.insert);
            expect(hashTable.insert).toBeDefined();
        })
        it('should take exactly two arguments. a key and a value', function () {
            var hashTable = makeHashTable();
            // hashTable.insert.length.should.equal(2);
            expect(hashTable.insert.length).toEqual(2);
            /**
              a hashtable gets its awesomeness from associating data. it wouldn't be
              very useful if you just gave it data without any association.
      
              ie, bad hash table:
              you: hey hashtable, can you please remember "sarah" (key)?
              hashtable: um... okay?
              ... sometime later...
              you: hey hastable, when's "sarah"'s (key) birthday?
              hashtable: "sarah"
              you: Um.. this is awkward...
      
              ie, good hashtable:
              you: hey hashtable, please remember that "sarah"s (key) birthday is
              "January 23rd" (value)
              hashtable: okay, friend. you got it!
              ... sometime later ...
              you: hey hashtable, when's "sarah"'s (key) birthday?
              hashtable: "January 23rd"
              you: thanks hashtable, you're awesome!
              hashtable: i know
            */
        });
        /*    it('should not throw an error with valid input', function(){
              (function(){
                var hashTable = makeHashTable();
                hashTable.insert('keanu reeves best movie', 'The Matrix');
                // calling insert should not throw an error
              }).should.not.throw();
            });*/
        it('should allow keys to be reinserted with new values', function () {
            var hashTable = makeHashTable();
            // (function () {
            //     hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
            //     hashTable.insert('keanu reeves best movie', 'The Matrix');
            // }).should.not.throw();

            expect(() => {
                hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
                hashTable.insert('keanu reeves best movie', 'The Matrix');
            }).not.toThrow();

        });
        /*it('should throw an error if keys are not strings', function(){
          // not a HUDGE deal but only strings should be keys. regular objects
          // converted to strings are always '[object Object]'
          var hashTable = makeHashTable();
          (function(){
            hashTable.insert({foo:'bar'}, 'oh no!');
          }).should.throw();
        });*/
    });

    describe('#retrieve', function () {
        it('should be a method of hashTable instances', function () {
            var hashTable = makeHashTable();
            // should.exist(hashTable.retrieve);
            expect(hashTable.retrieve).toBeDefined();
        })
        it('should be a function', function () {
            var hashTable = makeHashTable();
            // hashTable.retrieve.should.be.a.Function();
            expect(typeof hashTable.retrieve).toEqual("function");
        });
        it('should take exactly one argument', function () {
            var hashTable = makeHashTable();
            // the retrieve function should only take a single `key` argument
            // hashTable.retrieve.length.should.equal(1);
            expect(hashTable.retrieve.length).toEqual(1);
        })
        it('should return values previously inserted', function () {
            var hashTable = makeHashTable();
            hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
            var value = hashTable.retrieve('William Shatner\'s most well known role');

            // should.exist(value);
            // value.should.be.equal('Captain Kirk');

            expect(value).toBeDefined();
            expect(value).toEqual("Captain Kirk");
        });
        it('should return undefined for unknown keys', function () {
            var hashTable = makeHashTable();
            // should.not.exist(hashTable.retrieve('echo?'));
            expect(hashTable.retrieve('echo?')).not.toBeDefined();
        });
    });

    describe('#insert', function () {
        it('should allow valus to be updated', function () {
            var hashTable = makeHashTable();
            hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
            hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
            var value = hashTable.retrieve('Tarantino\'s best movie');
            // should.exist(value);
            // value.should.be.equal('Pulp Fiction');
            expect(value).toBeDefined();
            expect(value).toEqual("Pulp Fiction");
        });
    });

    describe('#remove', function () {
        it('should exist as a method of the hashTable instance', function () {
            var hashTable = makeHashTable();
            // should.exist(hashTable.remove);
            expect(hashTable.remove).toBeDefined();
        });
        it('should be a function', function () {
            var hashTable = makeHashTable();
            // hashTable.remove.should.be.a.Function();
            expect(typeof hashTable.remove).toEqual("function");
        });
        it('should take exactly one argument', function () {
            var hashTable = makeHashTable();
            // the remove function should only take a single `key` argument
            // hashTable.remove.length.should.equal(1);
            expect(hashTable.remove.length).toEqual(1);
        });
        it('should allow values to be removed', function () {
            var hashTable = makeHashTable();
            hashTable.insert('Spielberg\'s best movie', 'Jaws');
            hashTable.remove('Spielberg\'s best movie');
            var value = hashTable.retrieve('Spielberg\'s best movie');
            // should.not.exist(value);
            expect(value).not.toBeDefined();
        });
    });

    describe('#insert', function () {
        it('should handle collisions', function () {
            var hashTable = makeHashTable();
            // (function () {
            //     var n = 1000;
            //     for (var i = 0; i < n; i++) {
            //         hashTable.insert('userid:' + (i++), 'Jamie Hyneman');
            //     }
            // }).should.not.throw();
            expect(() => {
                var n = 1000;
                for (var i = 0; i < n; i++) {
                    hashTable.insert('userid:' + (i++), 'Jamie Hyneman');
                }
            }).not.toThrow();
        });
    });
    it('should be able to resize', function () {
        // if your hashtable isn't resizing, its going to start running more
        // and more slowly with a large number of inserts and retrievals.
        var hashTable = makeHashTable();
        var n = 10, id = 0, diffs = [];
        var endTime, startTime;
        for (var i = 0; i <= n; i++) {
            startTime = new Date();
            for (var j = 0; j < 1000; j++) {
                hashTable.insert('userid:' + (id++), 'Syd Mead');
            }
            for (j = 0; j < 100; j++) {
                hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
            }
            endTime = new Date();
            diffs.push(endTime - startTime);
        }
        var sum = function (arr) {
            var total = 0;
            for (var i = 0; i < arr.length; i++) {
                total += arr[i];
            }
            return total;
        }
        // we should expect the first iteration to take up ruffly 1 / n
        // of the total time. we give it some wiggle room by letting it be as
        // low as a 1 / (n*2) of the total duration.
        var ratio = (diffs[0] / sum(diffs));
        // ratio.should.be.above(1 / (n * 2));
        expect(ratio).toBeGreaterThan(1 / (n * 2));
    });
});
