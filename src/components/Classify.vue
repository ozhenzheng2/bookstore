<template>
  <div class="classify">
        <!--搜索框-->
        <div class="search">
          <span class="iconfont" >&#xe678;</span>
          <input type="search" placeholder="请输入您想查找的图书名称进行搜索">
        </div>

        <!-- 列表 -->
        <ul>
            <li v-for="book in bookList" :key="book.id" >
                <!-- 图书 -->
                <div class="claImg">{{book.img}}</div>
                <!-- 详细列表 -->
                <div class="claInfo">
                    <p>{{book.name}}</p>
                    <p>{{book.author}}</p>
                    <p>￥{{book.price}}</p>
                </div>
                <!-- 图标 -->
                <span class="claIcont"><</span>
            </li>
        </ul>

        <!-- 加载更多 -->
        <div class="claMore">
              <p>加载更多<span class="iconfont" style="color: #000;">&#xe625;</span></p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Classify',
  data () {
    return {
        bookList: []
    }
  },
  methods:{
    loadBookInfo() {
            // 使用axios进行数据请求
            axios.get('../../static/data.json')
            .then((res) => {
                // 如果请求成功，将bookList空数组替换为请求到的数组
                this.bookList = res.data;
            })
            .catch(function(){
                console.error('数据请求错误');
            });
    },
    mounted(){
          this.loadBookInfo();
        }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 .classify{
   width: 100%;
   height: auto;
   background-color: papayawhip;
   text-align: center;
   .search{
     position: relative;
     display: flex;
     justify-content: space-between;
     span{
       position: absolute;
       top: 50%;
       left: 1%;
       transform: translateY(-50%);
     }
     input{
       width: 100%;
       height: 30px;
       line-height: 30px;
       border-radius: 50px;
       padding: 0 30px;
       margin: 10px auto;
       border: none;
       outline: none;
     }
   }
  ul{
      list-style: none;
      width: 100%;
      height: auto;
      margin: 20px auto;

  }li{
      height: 200px;
      width: 100%;
      border-bottom: 1px solid black;
      background-color: palegreen;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .claImg{

      }
      .claInfo{

      }
      .claIcont{

      }
  }
   
 }
@font-face {
  font-family: 'iconfont';  /* project id 378106 */
  src: url('//at.alicdn.com/t/font_378106_4x2chynp4zuuwhfr.eot');
  src: url('//at.alicdn.com/t/font_378106_4x2chynp4zuuwhfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_378106_4x2chynp4zuuwhfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_378106_4x2chynp4zuuwhfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_378106_4x2chynp4zuuwhfr.svg#iconfont') format('svg');
}
@font-face {
  font-family: 'iconfont';  /* project id 378106 */
  src: url('//at.alicdn.com/t/font_378106_p0qjs7hus1yvi.eot');
  src: url('//at.alicdn.com/t/font_378106_p0qjs7hus1yvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_378106_p0qjs7hus1yvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_378106_p0qjs7hus1yvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_378106_p0qjs7hus1yvi.svg#iconfont') format('svg');
}
.iconfont{
  font-family: 'iconfont';
}
</style>
