# Vue
## 1 生命周期 
生命周期函数=钩子函数   
### 1.1 什么是生命周期
从Vue实例创建,运行,销毁期间,总是伴随着各种各样的事件.这些事件统称为生命周期  
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
    mounted() {
       // 等数据全部渲染完.改变其高度  
       let orderHeight = document.body.clientHeight; //获得高度  
    document.getElementById("orderlist").style.height = orderHeight + "px"  
  }
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

## 2 组件
### 2.1 组件传值
#### 2.1.1 父组件向子组件传值  
#####  props
父组件页面,在父组件的眼中,子组件就是一对标签,添加属性 v-bind/: 的方式来声明一个属性  
`<son :parent = "父组件中的数据/方法"></son>`  
子组件页面, 声明一个props属性来接收父组件里面的数据和方法  
`props : [ "parent"]`  在子组件可以以{{parent}}的形式渲染到子组件中,方法则可以通过@click="parent"来直接使用  
#### 2.1.2 子组件向父组件传值  
##### this.$emit('fn',value)  
子组件页面中,子组件在方法中自定义一个方法,(可传参)
`<input type="button" @click="add()">`在add()中通过this.$emit("fnjia")的方式来自定义一个函数  
父组件页面中,子组件标签中通过 `<son @fnjia="numChange父组件的方法"></son>`在父组件的methods中的numChange()方法中通过this.count=count来接收子组件里的方法.当增加和减少改变的值都是一个可以指向同一函数来执行接收数据. 具体可见图片  
***  

