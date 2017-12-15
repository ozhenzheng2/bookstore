<template>

  <div id ="homedetails" v-if="detshow" class="{'trans':true}">
    <!--<transiton name="fade">-->
      <header>
          <span @click="$emit('detafalse')"><</span>
          <span>图书详情</span>
      </header>
      <main>
        <div class="mainTop">
          <div class="details">
            <img src="../../static/book-01.png" >
            <div class="authorBox">
              <p><span>作者：</span><span>author</span></p>
              <p><span>页数：</span><span>730</span></p>
              <p><span>书号：</span><span>AFDAVGr</span> </p>
              <p><span>出版日期:</span><span>2017.1.1</span> </p>
              <p><span>售价:</span><span>￥99.50</span> </p>
            </div>
          </div>
          <h4>JavaScript高级程序设计（第三版）</h4>
          <div class="cart">
            <span v-for="(item,index) in list" :class="[idx == index ? 'active':'' ]" @click="isActive(index)">{{item}}</span>
          </div>
        </div>
        <div class="center"></div>
        <form>
          <fieldset class="bookcontent">
            <legend>内容概要</legend>
            <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
              《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象深入浅出地探讨了面向对象</p>
          </fieldset>
          <fieldset class="bookcontent">
            <legend>内容概要</legend>
            <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
              《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象深入浅出地探讨了面向对象</p>
          </fieldset>
          <fieldset class="bookcontent">
            <legend>内容概要</legend>
            <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
              《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象深入浅出地探讨了面向对象</p>
          </fieldset>
          <fieldset class="bookcontent">
            <legend>内容概要</legend>
            <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
              《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象深入浅出地探讨了面向对象</p>
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
        idx: 1
      }
    },
    methods:{
      isActive(index) {
        this.idx = index
      },
      detafalse() {

      }
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
              & span:first-child{
                display: inline-block;
                width: 60px;
                margin-right: 30px;
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
          height: 130px;
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
