let P1 = require( './promiseA')
new Promise( ( resolve, reject) => {
  // new promise 就是把这个方法执行了
  setTimeout(() => {
    Math.random()<0.5?resolve(100):reject(-100);
  }, 1000);
}) 
 let P2 =P1.then( (result) =>{ return result +100},
(reason) => {
  return reason + 100;
})
P2.then(result =>{
  console.log(P1 === P2); //=>FALSE
  // 执行then返回的是一个新的promise实例
  //这里受上一个then方法管控,上一个方法执行成功后执行这里的方法
   console.log(result);
},reason => {
  //同理,不过是出错的
  console.log(reason);
})
console.log(3)