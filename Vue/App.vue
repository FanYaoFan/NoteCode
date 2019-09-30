<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
        <h1> hello </h1>                         
                                      
        <son @fnjia="numChange" @fnjian="numChange" :priceCount="price" :show="show"></son>
        <!-- 注意 : 1 写在父组件的子组件的标签之中  通过属性绑定方法,属性=父组件里的方法
                 子组件用props属性接收  数据就用{{}}渲染 方法可以用@click调用
                    2 子组件的(传)数据名字 与 父组件的(接收容器)数据名字 要一致
                    3 同数据值的变化可以指向同一个函数 -->
        <p>总数为{{count}}</p>
        <!-- <p @fnjia="numChange"></p> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
 import son from '@/components/Son.vue'
export default {
  data (){
     return {
       count : 1,
       price :  100,
     }
  },
  components: {
    son
  },
  methods: {
    numChange(count){
      
      this.count = count 
      // console.log(num)
      // console.log(hello)
    },
    show(){
      console.log( '父组件的方法')
    }
    // up(count){
    //    this.num = count
    //    console.log(num)
       
    // },
    // down(count){
    //   this.num = count
    // }
  }
}
</script>
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
