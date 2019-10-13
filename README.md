# Vue
***
# 目录  
## [1  生命周期](#1-生命周期)  
## [2 组件](#2-组件-1)
## [3 Vuex](#3-vuex-1)
***
___
## 1 生命周期 
生命周期函数=钩子函数   
### 1.1 什么是生命周期
从Vue实例创建,运行,销毁期间,总是伴随着各种各样的事件.这些事件统称为生命周期  
[生命周期code](https://github.com/FanYaoFan/Vue/blob/master/Vue/lifecircle.html)
### 1.2 创建期间的生命周期函数 
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/vue1.png" height="350"></img>     
#### 1.2.1 beforeCreate
实例刚在内存中被创建出来,此时,还没有初始化好data属性和methods属性
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/beforeCreate.png" width="400" height="350"></img>
***
#### 1.2.2 created     
实例已经在内存中创建好,但是还没有开始编译模板,实际项目中一般是作网络请求(axios)后台数据渲染到页面上   
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/created.png" width="900"></img>
***
#### 1.2.3 beforeMount 
此时已经完成了模板编译,但是还没有挂载到页面中
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/beforeMount.png"  width="900"></img>
***
#### 1.2.4 mounted  
此时,已经将编译好的模板挂载到了页面指定的容器中显示 (比如通过js获取所在盒子的高度)
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/mounted.png" ></img>
```JavaScript  
    mounted() {
       // 等数据全部渲染完.改变其高度  
       let orderHeight = document.body.clientHeight; //获得高度  
    document.getElementById("orderlist").style.height = orderHeight + "px"  
  }
```    
  ***
  ___ 
### 1.3 运行期间的生命周期函数
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/vue2.png" height="350"></img>  
***
#### 1.3.1 beforeUpdate
状态更新之前执行此函数,此时data中的状态值是最新的,但是界面上显示的数据还是旧的(还没有进行重新渲染DOM节点) 
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/beforeUpdate.png"></img>  
***
#### 1.3.2 updated
实例更新完毕之后调用此函数,此时data状态值和界面上显示的数据都是新的.(页面已经重新渲染过了)
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/updated.png"></img>
***
### 1.4 销毁期间的生命周期函数 
#### 1.4.1 beforeDestroy
实例销毁之前调用,在这一步,实例仍然完全可用
#### 1.4.2 destroyed  
 vue实例销毁后被调用,调用后,vue实例指示的所有东西都会解绑,所有的事件监听器都会被移除,所有的子实例也会被销毁
 ***
## 2 组件
### 2.1 组件传值
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/effector.png"></img>
#### 2.1.1 父组件向子组件传值  
#####  props
父组件页面,在父组件的眼中,子组件就是一对标签,添加属性 v-bind/: 的方式来声明一个属性  
```JavaScript  
<son :parent = "父组件中的数据/方法"></son>   
```  
子组件页面, 声明一个props属性来接收父组件里面的数据和方法  
`props : [ "parent"]`  在子组件可以以{{parent}}的形式渲染到子组件中,方法则可以通过@click="parent"来直接使用
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/father.png"></img>
#### 2.1.2 子组件向父组件传值  
##### this.$emit('fn',value)  
子组件页面中,子组件在方法中自定义一个方法,(可传参)
`<input type="button" @click="add()">`在add()中通过this.$emit("fnjia")的方式来自定义一个函数  
父组件页面中,子组件标签中通过 `<son @fnjia="numChange父组件的方法"></son>`在父组件的methods中的numChange()方法中通过this.count=count来接收子组件里的方法.当增加和减少改变的值都是一个可以指向同一函数来执行接收数据. 具体可见图片 
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/father.png"></img>
***  
## 3 Vuex
了解  
1. 解构赋值
*数组  
`let [x,y] [ 1, 4]` //=> x=1,y=4  
`let x = 1, y =4 [x,y]=[y,x]` x,y的值互换 x=4,y=1  
* 对象 
```JavaScript  
      const person = {
     firstName: firstName,
      lastName: lastName,
    }
     const person = {
      firstName: 'Stephen',
      lastName: 'Curry',}
     const {firstName, lastName} = person;  
     ```
2. 对象展开运算符
* 数组 :  
`let ary1 = [1,2,3]` `let ary2 = [0, ...ary1,5,6,7]`//=> ary2 = [0,1,2,3,5,6,7]  
* 对象:
```JavaScript
let obj1 = {a:1,b:2}
let obj2 = {...obj1,f:5}` //=> { a:1,b:2,f:5} 
```
3. devtools工具  
- 1. 安装 谷歌扩展程序  
 <img src="https://github.com/FanYaoFan/Vue/blob/master/img/devtools.png"></img>
 ___
- 2. 使用   
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/dev2.png"></img>  
***
## 图例 
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/vuex1.png"></img>
### 3.1 state  
#### 单一状态树   
Vuex 使用单一状态树——用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。  
将共享的数据写在这.  
```JavaScript  
	const store = new Vuex.Store({
	 state : {count : 1}})
 ```	 
__页面中调用共享数据__  
`<span>{{$store.state.counts}}</span>`  

___
### 3.2 getters 
类似于computed属性,属于store的计算属性.getters接受 state 作为其第一个参数  
eg ```JavaScript  
ageSelect(state){return state.students.filter ( s => s.age > 20 )} or  
squareCount(state){ return state.count * state.count} 
``` 
__传递参数__ 
getters默认是不能传递参数的,如果需要传参,让getters本身返回一个另一个函数   
根据id获取用户信息  如图 
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/getters.png"></img>
___ 
### 3.3 mutations 
store状态更新的唯一方式 : 提交mutations (同步操作时),一系列的逻辑操作都在这里
#### 3.3.1  
Vuex 中的 mutation 非常类似于事件：  
1. 每个 mutation 都有一个字符串的 事件类型 (type)   
2. 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
3. 定义方式:
`mutations : { add(state){state.count++}}`
通过mutations更新  
`fn(){ this.$store.commit('add')}`
#### 3.3.2 传递参数 
mutations中参数被称为payload
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/payload.png"></
`add(state,n){state.count += n}`  
在使用页面中 `chuancan(){this.$store.commit( 'add', 5)}`  
如果有多个参数需要传递,这个时候我们通常会以对象的形式传递(payload = 对象),然后再从对象中取得相关信息  
```JavaScript   
     mutations: {  
      increment (state, payload) { 
      tate.count += payload.amount }}  
changecount(){ this.$store.commit ( 'increament', { count : 0})}   
```
**提交方式**  
vue还提供了另外一种风格,它是一个包含了type属性的对象 
```JavaScript  
   this.$store.commit({ type : 'add', count : 100})
   ```
__页面中调用共享数据/方法__   
```JavaScript 
<button @click = 'add(5)'>+5</button>  
```  
___
### 3.4 Actios  
相当于把mutations,把异步操作放到antions里,比如网络请求,为什么用action,如果异步操作直接调用mutations,devtools无法监听state值的改变,不利于寻找出错点
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/flow.png"></img>
在actions调用mutations里面的方法
```JavaScript   
    actions: {    
    increment (context) {  
      context.commit('increment')     
     }
    } 
```    
或者
**分发 Action**
在组件中Action 通过 store.dispatch 方法触发  
```JavaScript 
this.$store.dispatch(‘mutations.fn’)
```   
总结: 
1. 在actions里的异步操作(方法)要执行的(nutations)方法通过context.commit提交给mutations中.
2. 在组件中通过this.$store.dispatch分发`this.$store.dispatch('actonsFn', '携带信息')`
### 3.5 modules 
当应用变的非常臃肿时,需要将store分割成模块,每个模块拥有自己的state,getters,mutations,actions.
### 3.6 实例图解
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/analyse.png"></img>  
3.6.1 store.js
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/store.png"></img>
#### 3.6.2  父组件 app.vue 
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/fu.png"></img>
#### 3.6.3  子组件 son.vue
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/zi.png"></img>

	

