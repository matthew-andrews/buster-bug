var buster = require('buster');

buster.testCase("online", {

  // Adapted from: http://docs.busterjs.org/en/latest/modules/buster-test/test-case/#asynchronous-tests
  "Slightly adapted async test from Buster docs": function() {
    var promise = {
      then: function (callback) {
       this.callbacks = this.callbacks || [];
       this.callbacks.push(callback);
      }
    };

    setTimeout(function () {
      buster.assert(true);
      var callbacks = promise.callbacks || [];

      for (var i = 0, l = callbacks.length; i < l; ++i) {

        // In order for Buster to work with async callbacks the callback registered
        // to #then *must* have their first argument falsey because it will buster-test
        // will think it is an error object.
        callbacks[i](true);
      }
    }, 100);

    return promise;
  }
});
