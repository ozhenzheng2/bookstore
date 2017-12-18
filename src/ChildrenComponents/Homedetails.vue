<template>
  <div id ="homedetails"  class="{'trans':true}">
    <!--<transiton name="fade">-->
      <header>
          <span @click="$emit('detafalse')"><</span>
          <span>图书详情</span>
      </header>
      <main>
        <div class="mainTop">
          <div class="details">
            <img :src="bookObj.img" >
            <div class="authorBox">
              <p><span>作者：</span><span>{{bookObj.author}}</span></p>
              <p><span>页数：</span><span>{{bookObj.pages}}</span></p>
              <p><span>书号：</span><span>{{bookObj.name}}</span> </p>
              <p><span>出版日期:</span><span>{{bookObj.DateOfPublication}}</span> </p>
              <p><span>售价:</span><span>￥{{bookObj.price}}</span> </p>
            </div>
          </div>
          <h4>JavaScript高级程序设计（第三版）</h4>
          <div class="cart">
            <span @click="addCart">加入购物车</span>
            <router-link :to="{name: 'cartpayment'}" tag="span"  class="active">立即购买</router-link>
          </div>
        </div>
        <div class="center"></div>
        <form>
          <fieldset class="bookcontent">
            <legend>内容概要</legend>
            <p>{{bookObj.describe}}</p>
          </fieldset>
          <fieldset class="bookcontent">
            <legend>内容概要</legend>
            <p>{{bookObj.describe}}</p>
          </fieldset>
          <fieldset class="bookcontent">
            <legend>内容概要</legend>
            <p>{{bookObj.describe}}</p>
          </fieldset>
          <fieldset class="bookcontent">
            <legend>内容概要</legend>
            <p>{{bookObj.describe}}</p>
          </fieldset>
        </form>
      </main>
    <!--</transiton>-->
  </div>
</template>

<script>

  export default {
    name: 'Homedetails',
    props: ['marklist','h2','detshow'],
    data () {
      return {
        list:['加入购物车','立即购买'],
        idx: 1,
        bookObj : {}
      }
    },
    methods:{
      addCart(){
        alert('成功加入购物车')
      },
      getObj(){
        this.bookObj = JSON.parse(localStorage.getItem('bookObj'));
      }
    },
    mounted(){
      this.getObj()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #homedetails{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    z-index: 999;
    font-size: 10px;
    header{
      width: 100%;
      height:50px;
      line-height: 50px;
      background: #252525;
      text-align: center;
      color: #f7f7f7;
      position: absolute;
      top: 0;
      font-size: 20px;
      & span:first-child{
        position: absolute;
        left: 10px;
        font-size: 30px;
        font-weight: lighter;
      }
    }
    main{
      height: ~"calc(100% - 50px)";
      width: 100%;
      position: absolute;
      top: 60px;
      overflow-y:auto;
      .mainTop{
        padding: 0 10px;
        h4{
          padding: 0;
        }
        .details{
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
              text-overflow:ellipsis;
              height: 15px;
              overflow: hidden;
              white-space: nowrap;
              text-align: left;
              & span:first-child{
                display: inline-block;
                width: 60px;
                height: 15px;
                margin-right: 30px;
                span{
                  height: 15px;
                  display: inline-block;
                  text-overflow:ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
              }
            }
          }
        }
        .cart{
          font-size: 18px;
          width: 86%;
          height: 40px;
          margin: 10px auto;
          display: flex;
          justify-content: space-between;
          line-height: 40px;
          span{
            display: inline-block;
            width: 48%;
            border:1px solid #585858;
            border-radius: 10px;
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
      form{
        fieldset{
          padding: 10px 10px;
          width: 95%;
          height: 128px;
          border: 1px solid #252525;
          margin: 10px auto;
          overflow: hidden;
          legend{
            width: 100px;
            border-bottom: 0;
            padding: 0;
            margin: 0;
          }
          p{
            font-size: 15px;
            color: #5e5e5e;
            text-overflow:ellipsis;
          }
        }
      }
      .center{
        width: 100%;
        height: 15px;
        background: #f0f0f0;
      }
    }
  }

</style>
