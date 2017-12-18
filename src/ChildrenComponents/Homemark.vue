<template>
    <div class="homemark">
      <div class="mark" >
        <h3 @click="$emit('close')">x </h3>
        <div class="details">
          <img :src="obj.img" >
          <div class="authorBox">
            <p><span>作者：</span><span>{{obj.author}}</span></p>
            <p><span>页数：</span><span>{{obj.pages}}</span></p>
            <p><span>书号：</span><span>{{obj.number}}</span> </p>
            <p><span>出版日期:</span><span>{{obj.DateOfPublication}}</span> </p>
            <p class="details" @click="$emit('detailisshow')">详情></p>
          </div>
        </div>
        <div class="bookcontent">
          <h4>JavaScript高级程序设计（第三版）</h4>
          <p>{{obj.describe}}</p>
        </div>
        <div class="price">
          <span>￥69.30</span>
          <span>3本</span>
        </div>
        <div class="cart">
          <span @click="addCart">加入购物车</span>
          <router-link :to="{name: 'cartpayment'}" tag="span"  class="active">立即购买</router-link>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'home',
    props: ['markisShow','markindex','obj'],
    data () {
      return {
        isactive: 'true',
        list:['加入购物车','立即购买'],
        idx: 1,
        addcart: {},
      }
    },
    methods:{
      addCart(){
            this.addcart = this.obj;
            this.$emit('isActive',this.addcart);
            alert('成功加入购物车')
        },
      gitBookObj(){
          var obj =JSON.stringify(this.$props.obj);
          localStorage.setItem("bookObj",obj);
      }
    },
    mounted(){
      this.gitBookObj()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  .homemark{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 99;
    font-size: 10px;
    .mark{
        width: 96%;
        height: 78%;
        background: #ffffff;
        margin: 0 auto;
        padding: 0;
        border: 1px solid #828282;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden;
      h3{
        border-bottom: 1px solid #c4c4c4;
        margin-top: 10px;
        text-align: right;
      }
      .details{
        padding: 10px 20px 10px 10px;
        width: 100%;
        height: 140px;
        display: flex;
        img{
          width: 100px;
          height: 130px;
          display: inline-block;
          margin-right: 20px;
        }
        .authorBox{
          width: calc(~"100% - 100px");
          p{
            & span:first-child{
              display: inline-block;
              width: 60px;
              margin-right: 30px;
            }
          }
          .details{
            width: 100%;
            height: 20px;
            text-align: right;
            margin: 0 0 0 90%;
            padding: 0;
            color: #aeaeae;
          }
        }
      }
    }
    .bookcontent{
      padding: 0 10px;
      h4{
        font-weight: 600;
      }
      p{
        font-size: 15px;
        width: 100%;
        height: 180px;
        color: #5e5e5e;
        overflow: hidden;

      }
    }
    .price{
      font-size: 20px;
      width: 100%;
      margin: 0;
      border-top: 1px solid #aeaeae;
      border-bottom: 1px solid #aeaeae;
      display: flex;
      height: 45px;
      line-height: 45px;
      & span:first-child{
        border-right:1px solid #aeaeae;
      }
      span{
        display: inline-block;
        width: 49%;
        text-align: center;
        box-sizing: border-box;

      }
    }
    .cart{
      font-size: 20px;
      width: 90%;
      height: 50px;
      margin: 10px auto;
      display: flex;
      justify-content: space-between;
      border:1px solid #252525;
      line-height: 50px;
      span{
        display: inline-block;
        width: 49%;
        text-align: center;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      .active{
        background: #24922e;
        color: #ffffff;
      }
    }
  }
</style>
