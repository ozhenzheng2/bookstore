<template>
  <div id ="content">
    <!--<div v-for="(item,index) in marklist" :key="item.id" >-->
      <!--<h3>{{item.topTitle}}</h3>-->
      <h3>{{h2}}</h3>
      <ul>
        <li v-for="(book,index) in marklist" @click=showBookInfo(index,book)>
          <img :src="book.img">
          <h5>{{book.name}}</h5>
          <h6>￥{{book.price}}</h6>
        </li>
      </ul>
    <!--</div>-->
  </div>
</template>
<script>

  export default {
    name: 'home',
    props: ['marklist','h2','markShow'],
    data () {
      return {
        markIndex:'',
        markItem:'',

      }
    },
    methods:{
      showBookInfo(index,book) {
        this.markIndex = index;
        this.$emit('showBookInfo',index,book)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #content{
    padding: 0px 20px;
    h3{
      font-size:20px ;
      font-weight: bolder;
    }
    ul{
      width: 100%;
      list-style: none;
      padding: 0;
      li{
        display: inline-block;
        height: 200px;
        width: 50%;
        padding: 0;
        margin: 0;
        text-align: center;
        h5{
          height: 20px;
          line-height: 20px;
          overflow: hidden;
        }
        h6{
          color: #ffffff;
        }
        img{
          width: 76%;
          height: 130px;
        }
      }
    }
  }
</style>
