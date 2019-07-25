class  Promiss {
    constructor( executor){
        this.status = 'pending';
        // 成功和失败都有一个结果,设置一个value传给then
        this.value = undefined;
 //   实例上添加两个容器
        this.fulfilledAry = [];
        this.rejectedAry = [];
     
 
 
           //这里的execotor是一个函数 
           let resolveFn = (result) =>{
               let timer = setTimeout( ()=>{
                   //执行resolveFn代表成功
            if (this.status !== 'pending') return;
            // 不是pending就不往下走了
            this.status = 'fulfilled';
            //当前状态已经成功
            this.value = result;
            this.fulfilledAry.forEach( item => item(this.value))
               },0)
          
         }
           let rejectFn = ( reason) =>{
          //执行resolveFn代表失败
          let timer= setTimeout( ()=>{
             if (this.status !== 'pending') return;
             this.statue = 'rejected';
             // 代表失败
             this.value = reason;
             this.rejectedAry.forEach( item => item(this.value));
            //  把reject的值/结果传值给then方法
          },0)
         
           }
           executor(resolveFn,rejectFn); 
 // ( resolve, reject) => { } 就是executor
 // 把 resolve()和reject() 两个函数当做值传给executor 也就是回调函数的机制
 // 这里推出得传两个函数给executor
       try {
           executor (resolveFn,rejectFn);
       } catch (err) {
           //有异常信息按照rejected状态处理
           rejectFn(err);
       }

  //直接原型上台添加方法
 //   promise.prototype.then = fn
      then( fulfilledCallBack,rejectedCallBack) {
          //=>返回一个新的promise实例以实现链式调用
        //   如何返回一个新的Promise实例 => return new Promiss
        return new Promiss(()=>{ })
     // 在实例上挂载两个容器
     this.fulfilledAry.push(fulfilledCallBack);
     this.rejectedAry.push(this.rejectedCallBack);
 }
    }
 }
 module.exports = Promise;  //common.js 在node情况下