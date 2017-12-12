<template>
  <div class="home">
      <div class="homeHeader">
        <transition-group
          name="list"
          enter-active-class="animated bounceInDown"
          leave-active-class="animated bounceOut"
          ><img src="../assets/banner1.png" alt=""/>
          <img src="../assets/banner2.png" alt=""/>
          <img src="../assets/banner3.png" alt=""/>
        </transition-group>
        <ul class="dotBox">
            <li v-for="(item,index) in bannerList"><span>{{index}}</span></li>
          </ul>
          <div class="bntBox">
            <span @cilck="bannerLeft"> < </span>
            <span> > </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      bannerList:['../assets/banner1.png','../assets/banner2.png','../assets/banner3.png']
    }
  },
  methods: {
    bannerLeft() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home{
  .homeHeader{
    position:relative;
  }
  ul{
    padding: 0;
    margin: 0;
  }
      .bannerBox{
        width:100%;
        height:180px;
        width: 100%;
          img{
            width:100%;
            height:180px;
            margin: 0;
            position:absolute;
            top:0;
          }
        }
  .dotBox{
    position:absolute;
    bottom:20px;
    left: 50px;
  li{
    /*with:10px;*/
    /*height:10px*/
  }
    /*span{*/
      /*dispaly:inline-block;*/
      /*width:10px;*/
      /*height:10px;*/
      /*border-radius:10px;*/
      /*background:red*/
    /*}*/
  }
  }

</style>
