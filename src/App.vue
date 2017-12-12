<template>
  <div id="app">
    <header>
      <h5>掌上书城</h5>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <ul>
        <router-link :to="{name: 'home'}" tag="li" exact>首页</router-link>
        <router-link :to="{name: 'classify'}" tag="li" >分类</router-link>
        <router-link :to="{name: 'cart'}" tag="li" >购物车</router-link>
        <router-link :to="{name: 'me'}" tag="li" >我</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "./styles/common";
</style>
