<template>
    <div>
        <input type="button" value="+" id="" @click="add">&nbsp;&nbsp;&nbsp;
        <span class="box">{{count}}</span>&nbsp;&nbsp;&nbsp;
        <input type="button" value="-" id=""  @click="decrease">
        <p @click="show">{{priceCount}}元</p>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                count : 1,
                msg : 'hello'
            }
        },
        props : [ "priceCount" , "show"],
        methods: {
            add(count){
                this.count ++
                // console.log(this.count)
                this.$emit( 'fnjia',this.count)
            },
            decrease(count){
                this.count --
                // console.log(this.count)
                this.$emit( 'fnjian',this.count)
            },
        }
    }
</script>

<style lang="scss" scoped>
 .box{
      font-size: 30px;
 }
</style>