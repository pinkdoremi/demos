如何实现一个promise
首先列出需要的方法：
q.promise;
q.deferred()
promise.then(func,func)
deferred.resolve()
deferred.reject()

function Promise(process){
    var hasCalled = false;
    var process = process;
    this.then = function(success,failure){
        this.resolveCB = success;
        this.failureCb = failure;
        var subPromise = new Promise();
        return subPromise;
    };
    var resolve = function(){
        if(hasCalled)return;
        if(this.resolveCB){
            this.resolveCB.call(this,arguments);
            hasCalled = true;
        }
    }
    var reject = function(){
        if(hasCalled)return;
        if(this.failureCb){
            this.failureCb.call(this,arguments);
            hasCalled = true;
        }
    }
    setTimeout(function(){
        process(resolve,reject);
    });
    return this;
}

var deferred = new Promise(function(resolve,reject){
    resolve();
});
deferred.then()

