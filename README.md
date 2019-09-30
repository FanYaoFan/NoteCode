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
#### 1.2.2 created     
实例已经在内存中创建好,但是还没有开始编译模板,实际项目中一般是作网络请求(axios)后台数据渲染到页面上   
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/created.png" width="900"></img>
#### 1.2.3 beforeMount 
此时已经完成了模板编译,但是还没有挂载到页面中
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/beforeMount.png"  width="900"></img>
#### 1.2.4 mounted  
此时,已经将编译好的模板挂载到了页面指定的容器中显示 (比如通过js获取所在盒子的高度)
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/mounted.png" ></img>
    mounted() {
       // 等数据全部渲染完.改变其高度  
       let orderHeight = document.body.clientHeight; //获得高度  
    document.getElementById("orderlist").style.height = orderHeight + "px"  
  }
  ***
### 1.3 运行期间的生命周期函数
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/vue2.png" height="350"></img>
#### 1.3.1 beforeUpdate
状态更新之前执行此函数,此时data中的状态值是最新的,但是界面上显示的数据还是旧的(还没有进行重新渲染DOM节点) 
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/beforeUpdate.png"></img>
#### 1.3.2 updated
实例更新完毕之后调用此函数,此时data状态值和界面上显示的数据都是新的.(页面已经重新渲染过了)
<img src="https://github.com/FanYaoFan/Vue/blob/master/img/updated.png"></img>
***
### 1.4 销毁期间的生命周期函数 
#### 1.4.1 beforeDestroy
实例销毁之前调用,在这一步,实例仍然完全可用
#### 1.4.2 destroyed  
 vue实例销毁后被调用,调用后,vue实例指示的所有东西都会解绑,所有的事件监听器都会被移除,所有的子实例也会被销毁


