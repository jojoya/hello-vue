<template>
  <div class="hello vue">
    <h1>{{ hello_vue }}</h1>
    <h2>Essential Links</h2>
    <a href="http://www.baidu.com">{{ log_info }}</a>
    <div >{{ log_info }}</div>
  </div>
</template>

<script>
    export default {
        name: 'HelloVue',
        count: 0,
        total: 0,
        data() {
            const titile = 'hello_vue'
            return {
                hello_vue: 'This is ' + titile,
                log_info:  'This is log_info'
                // log_info:  hello_vue + total.toString()
            }
        },
        computed:{
            total:{
                get:function () {
                    return this.count
                },
                set:function (newValue) {
                    this.count++
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  a{
    color: yellow;
  }
</style>
