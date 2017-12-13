<template>
  <div class="me">
      <!-- 图片 -->
      <div class="mebg">
        <div class="mask"></div>
        <p class="mename">fuck you！</p>
      </div>
      <!-- 列表 -->
      <ul class="melist">
        <li
        v-for="(item,index) in meData"
        ref="list"
        :key='item.id'
        v-on:click="meShow(index)"
        >
              <span>{{item.medata}}</span>
              <span class="meicon">></span>
        </li>
      </ul>
      <button class="signout">退出登录</button>
      <!-- =-============================================= -->
      <transition name="slide-fade">
            <!-- 地址 -->
            <div v-if="show" class="meAddress">
              <h4>收货地址</h4>
              <form name="meAddressList">
                  <p>
                    <span>收货人:</span>
                    <input type="text" >
                  </p>
                  <p>
                    <span>手机号码:</span>
                    <input type="number">
                  </p>
                  <p>
                    <span>省份:</span>
                      <input type="text">
                  </p>
                  <p>
                    <span>城市份:</span>
                      <input type="text">
                  </p>
                  <p>
                    <span>地区:</span>
                      <input type="text">
                  </p>
                  <p>
                    <span>详细地址:</span>
                    <textarea></textarea>
                  </p>
                  <p>
                    <span>邮政编码:</span>
                      <input type="text">
                  </p>
                  <p>
                      <input type="radio" style="padding:0 10px">
                      <span>设为默认地址</span>
                  </p>
                  <p>
                      <button class="meaddressbtn">确认</button>
                  </p>
              </form>
            </div>
      </transition>
      <!-- =-============================================= -->
      <transition name="slide-fade">
            <!-- 个人 -->
            <div v-if="show" class="mePerson">
              <h4>个人信息</h4>
              <form action="" name="meperson">
                  <p style="">
                    <span>昵称:</span>
                    <input type="text" >
                  </p>
                  <p>
                    <span>邮箱:</span>
                    <input type="email" >
                  </p>
                  <p>
                    <span style="transform:translateX(30px)">性别:</span>
                    <input type="radio" >
                    <span>男</span>
                    <input type="radio" >
                    <span>女</span>
                    <input type="radio" >
                    <span>保密</span>
                  </p>
                  <p>
                    <span>生日:</span>
                    <input type="email" >
                  </p>
                  <p>
                    <span>身份证:</span>
                    <input type="number" >
                  </p>
                  <p  style="display:flex;justify-content: center;">
                    <span>个人介绍:</span>
                    <textarea></textarea>
                  </p>
              </form>
            </div>
      </transition>
      <!-- =-============================================= -->
      <transition name="slide-fade">
            <!-- 订单 -->
            <div v-if="show" class="meOder">
                <h4>订单</h4>
                <form action="" name="meoder" class="meoderList">
                    <!-- 已购买 -->
                    <div class="meBuyed">
                        <h3>已购买商品</h3>

                    </div>

                    <!-- 进行中 -->
                    <div class="meBuying">
                      <h3>进行中商品信息</h3>

                    </div>
                    <!-- 取消的订单 -->
                    <div class="meAbolish">
                        <h3>取消订单信息</h3>
                    </div>
                </form>
            </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: "Me",
  data() {
    return {
      show:false,
      meData: [
        { medata: "设置个人资料" },
        { medata: "收货地址管理" },
        { medata: "我的订单" },
        { medata: "我的评价" },
        { medata: "商品收藏" },
        { medata: "店铺收藏" },
        { medata: "浏览记录" }
      ]
    };
  },
  methods: {
    meShow: function(index) {
      this.$refs.list[index].children[1].style.transform = "rotate(90deg)";
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  @import '../styles/me.less';
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
