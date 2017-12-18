<template>
  <div class="CartBox">
    <div class="cart" v-if="Cartshow">
      <div v-if="shows">
        <header>
          <div v-if="editshow" @click="editclick">编辑</div>
          <div v-else>
            <span @click="cancel">取消</span>
            <span @click="deletes">删除选中</span>
          </div>
        </header>
        <div class="ulBox">
          <ul>
            <li v-for="(item,index) in bookList">
              <div class="idot" v-show="!editshow">
                <input type="checkbox" name="checkbox" v-model="item.selection" @change="runCheckItem">
              </div>
              <img :src="item.img" alt="">
              <div class="right">
                <h5>{{item.name}}</h5>
                <p>{{item.author}}</p>
                <h6>￥{{item.price}}</h6>
              </div>
              <!--数量加减-->
              <div class="add" v-show="editshow">
                <span @click="reduce(index)">-</span>
                <span>{{item.count}}</span>
                <span @click="plus(index)">+</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="btn">
          <p>总价：{{prices}}</p>
          <!--<p>前往支付</p>-->
          <transition name="slide-right">
            <router-link :to="{name: 'cartpayment',params:{title:'结算中心'}}" tag="p"  @click="cartshowclick" class="gopayment">前往支付</router-link>
          </transition>

        </div>
      </div>
      <div v-else>
        <div class="none">
          <h3>购物车还没有东西</h3>
          <h5 @click="gohome">去逛逛？</h5>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Cartpayment from '../ChildrenComponents/Cartpayment'

export default {
  name: 'Cart',
  components:{Cartpayment},
  data () {
    return {
      Cartshow: true,
      shows:'true',
      editshow: true,
      isactive: true,
      addnum:'0',
      checkedBook: [],
      bookList:[
            {
              "img":"../../static/book-01.png",
              "name": "JavaScript高级程序设计",
              "price": "9.9",
              "author": "Nicholas C. Zakas",
              "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
              "pages":730,
              "number":'B00CBBJS5Y',
              "DateOfPublication":'2012年3月1日',
              "count": 1
            },
            {
              "img":"../../static/book-02.jpg",
              "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
              "price": "9.9",
              "author": "Nicholas C. Zakas",
              "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
              "pages":730,
              "number":'B00CBBJS5Y',
              "DateOfPublication":'2012年3月1日',
              "count": 1
            },
            {
              "img":"../../static/book-03.jpg",
              "name": "JavaScript权威指南（第6版）",
              "price": "9.9",
              "author": "Nicholas C. Zakas",
              "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
              "pages":730,
              "number":'B00CBBJS5Y',
              "DateOfPublication":'2012年3月1日',
              "count": 1
            },
            {
              "img":"../../static/book-04.jpg",
              "name": "编写高质量代码：改善Java程序的151个建议",
              "price": "9.9",
              "author": "Nicholas C. Zakas",
              "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
              "pages":730,
              "number":'B00CBBJS5Y',
              "DateOfPublication":'2012年3月1日',
              "count": 1
            }
      ],
      checkItem: [],
      prices: 39.6,
    }
  },
  computed: {
      show: function () {
        if(this.checkItem.length > 0){
          this.shows = true
        }else {
          this.shows = false
        }
      }

},
  methods: {
    // 选择事件
    runCheckItem() {
      this.checkItem = this.bookList.filter(item => {
        return item.selection;
      });

    },
//    编辑按钮
    editclick() {
      this.editshow = false
    },
//    取消按钮
    cancel() {
      this.editshow = true;
      this.isactive = false
    },

//    减号
    reduce(idx) {
      if(this.bookList[idx].count == 0){
        return
      }else {
        this.bookList[idx].count -= 1
      }
      //      计算总价
      if(this.bookList.length > 0) {
        let a = 0;
        for(var i = 0;i < this.bookList.length;i++){
          a += (parseFloat((this.bookList)[i].price) * parseFloat((this.bookList)[i].count));
        }
        this.prices = a.toFixed(2);
      }
    },
//    加号
    plus(idx) {
      this.bookList[idx].count += 1;

//      计算总价
      if(this.bookList.length > 0) {
        let a = 0;
        for(var i = 0;i < this.bookList.length;i++){
          a += (parseFloat((this.bookList)[i].price) * parseFloat((this.bookList)[i].count));
        }
        this.prices = a.toFixed(2);

      }


    },
//    选中删除
    deletes() {
      let checkedBookCount = this.checkItem.length;
      let index = 0;
      while(checkedBookCount) {
        if(this.bookList[index].selection) {
          this.bookList.splice(index,1);
          checkedBookCount--
        }else {
          index++
        }
      }
      if(checkedBookCount <= 0){
          this.editshow =true
      }
    },
    cartshowclick() {
      this.Cartshow = false
    }
  },
  gohome() {
    window.ContentList.location.href = './Home.vue';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../styles/cart.less";
  .slide-right-enter-active {
    transition: all 1s ease;
    transform: translateX(0)
  }

  .slide-right-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }

  .slide-right-enter {
    transform: translateX(100%)
  }

  .slide-right-leave {
    transform: translateX(0)
  }
</style>
