<template>
  <div id="app">
    <header class="header">
      <h5 v-if="!$route.params.title">掌上书店</h5>
      <h5 v-else>{{$route.params.title}}</h5>
    </header>
    <main class="main">
      <router-view><div :booklist="booklists"></div></router-view>
    </main>
    <footer class="footer">
      <ul>
        <router-link :to="{name: 'home',params:{title:'掌上书店'}}" tag="li" exact><p class="iconfont">&#xe605;</p><p>首页</p></router-link>
        <router-link :to="{name: 'classify',params:{title:'分类'}}" tag="li" ><p class="iconfont">&#xe60e;</p><p>分类</p></router-link>
        <router-link :to="{name: 'cart',params:{title:'购物车'}}" tag="li"><p class="iconfont">&#xe600;</p><p>购物车</p></router-link>
        <router-link :to="{name: 'me',params:{title:'我'}}" tag="li"><p class="iconfont">&#xe611;</p><p>我</p></router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      booklists:'this.booklist'
    }
  },
  methods: {
    // setBooklist() {
    //   const selt = this;
    //   axios.get('https://www.aulence.com/data/book-info.json').then(function (res) {
    //     selt.booklist= res.data
    //   }).catch(function (err) {
    //     console.error('请求错误')
    //   })
    // }
  },
  // created() {
  //   this.setBooklist()
  // }
}
</script>

<style lang="less">
@import "./styles/common";
</style>
