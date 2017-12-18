<template>
  <div class="classify">
        <!--搜索框-->
        <div class="search">
          <span class="iconfont" >&#xe678;</span>
          <input v-model="text" type="search" placeholder="请输入您想查找的图书名称进行搜索">
        </div>
        <!-- 列表 -->
        <ul>
          <transition-group enter-active-class=" bounceInLeft" leave-active-class=" bounceOutRight" >
            <li class="animated" v-for="(item,index) in lists" :key="index" @click="details(item,index)">
              <img :src="item.img" alt="">
              <div class="right">
                <h5>{{item.name}}</h5>
                <p>{{item.author}}</p>
                <h6>￥{{item.price}}</h6>
              </div>
              <!-- 图标 -->
              <p class="claIcont" > > </p>
            </li>
          </transition-group>
        </ul>
        <!-- 加载更多 -->
        <!--<div class="claMore">-->
              <!--<p>加载更多<span class="iconfont" style="color: #000;">&#xe625;</span></p>-->
        <!--</div>-->
    <transition name="slide-fade">
        <Homedetails
          v-if="detshow"
          @detafalse = 'detafalses'
        />
    </transition>
  </div>
</template>

<script>
  import Homedetails from '../ChildrenComponents/Homedetails.vue'

export default {
  name: 'Classify',
  components:{
    Homedetails
  },
  data() {
    return {
      text: '',
      detshow: false,
      calssifyObj:{},
      bookList: [
        {
          "img": "../../static/book-01.png",
          "name": "JavaScript高级程序设计",
          "price": "9.9",
          "author": "Nicholas C. Zakas",
          "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
          "pages": 730,
          "number": 'B00CBBJS5Y',
          "DateOfPublication": '2012年3月1日'
        },
        {
          "img": "../../static/book-02.jpg",
          "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
          "price": "9.9",
          "author": "Nicholas C. Zakas",
          "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
          "pages": 730,
          "number": 'B00CBBJS5Y',
          "DateOfPublication": '2012年3月1日'
        },
        {
          "img": "../../static/book-03.jpg",
          "name": "JavaScript权威指南（第6版）",
          "price": "9.9",
          "author": "Nicholas C. Zakas",
          "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
          "pages": 730,
          "number": 'B00CBBJS5Y',
          "DateOfPublication": '2012年3月1日'
        },
        {
          "img": "../../static/book-04.jpg",
          "name": "编写高质量代码：改善Java程序的151个建议",
          "price": "9.9",
          "author": "Nicholas C. Zakas",
          "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
          "pages": 730,
          "number": 'B00CBBJS5Y',
          "DateOfPublication": '2012年3月1日'
        },
        {
          "img": "../../static/book-02.jpg",
          "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
          "price": "9.9",
          "author": "Nicholas C. Zakas",
          "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
          "pages": 730,
          "number": 'B00CBBJS5Y',
          "DateOfPublication": '2012年3月1日'
        },
      ]
    }
  },
  computed: {
    lists:function () {
      var arr = [];
      var thiss = this;
      this.bookList.forEach(function (val) {
        if(val.name.indexOf(thiss.text) != -1){
          arr.push(val)
        }
      });
      return arr
    }
  },
  methods: {
    // 进入详情页
    details(obj,index) {
        this.detshow = true;
        this.calssifyObj = JSON.stringify(obj);
          localStorage.setItem('bookObj', this.calssifyObj)
    },
    // 关闭详情页
    detafalses() {
      this.detshow = false
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  @import "../styles/classify.less";
  @import "../styles/animate.css";
  .slide-fade-enter-active {
    transition: all .6s ease;
    transform: translateX(0);
  }
  .slide-fade-leave-active {
    transition: all .6s linear;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100%);
  }
</style>

