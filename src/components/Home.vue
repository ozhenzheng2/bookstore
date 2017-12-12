<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner,index) in bannerList" :key="banner" ><img :src="banner"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮.. -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>
    <div class="swiper-container2">
      <span class="bell"><img src="../../static/lingdang.png"></span>
      <div class="swiper-wrapper">
        <div class= "swiper-slide" v-for="(item,index) in homeMessage" :key="item.id" >
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <!--书籍内容-->
    <div id ="content">
      <div v-if="(item,index) in recoBook">
        <h3>{{item.topTitle}}</h3>
        <ul>
          <li v-for="a in item.bookList">
            <img :src="a.img">
            <h5>{{a.name}}</h5>
            <h6>{{a.price}}</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
  name: 'Home',
    props:['booktitle'],
  data () {
    return {
      bannerList:['../../static/banner1.png','../../static/banner2.png','../../static/banner3.png'],
      homeMessage:['人生若只如初见，何事秋风悲画扇。','只愿君心似我心，定不负相思意。','愿得一心人，白头不相离。'],
      recoBook:[{
        topTitle:'新书上架',
        bookList:[
          {
            "img":"../../static/book-01.png",
            "name": "JavaScript高级程序设计",
            "price": "9.9",
            "author": "Nicholas C. Zakas",
            "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
            "pages":730,
            "number":'B00CBBJS5Y',
            "DateOfPublication":'2012年3月1日'
          },
          {
            "img":"../../static/book-02.png",
            "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
            "price": "9.9"
          },
          {
            "img":"../../static/book-03.png",
            "name": "JavaScript权威指南（第6版）",
            "price": "9.9"
          },
          {
            "img":"../../static/book-04.png",
            "name": "编写高质量代码：改善Java程序的151个建议",
            "price": "9.9"
          }]
      },
        {
          topTitle:'编辑推荐',
          bookList:[
            {
              "img":"../../static/book-01.png",
              "name": "JavaScript高级程序设计",
              "price": "9.9"
            },
            {
              "img":"../../static/book-02.png",
              "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
              "price": "9.9"
            },
            {
              "img":"../../static/book-03.png",
              "name": "JavaScript权威指南（第6版）",
              "price": "9.9"
            },
            {
              "img":"../../static/book-04.png",
              "name": "编写高质量代码：改善Java程序的151个建议",
              "price": "9.9"
            }]
        },
        {
          topTitle:'热门新书',
          bookList:[
            {
              "img":"../../static/book-01.png",
              "name": "JavaScript高级程序设计",
              "price": "9.9"
            },
            {
              "img":"../../static/book-02.png",
              "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
              "price": "9.9"
            },
            {
              "img":"../../static/book-03.png",
              "name": "JavaScript权威指南（第6版）",
              "price": "9.9"
            },
            {
              "img":"../../static/book-04.png",
              "name": "编写高质量代码：改善Java程序的151个建议",
              "price": "9.9"
            }]
        },
      ]

    }
  },
  methods: {
    swiper() {
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          clickableClass : 'my-pagination-clickable',
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination'
        }
      });
    },
    swiper2() {
      var mySwiper2 = new Swiper ('.swiper-container2', {
        direction: 'vertical',
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      })
    }
  },
    mounted() {
      this.swiper();
      this.swiper2()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/home";
</style>
