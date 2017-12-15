
<template>
  <transition name="slide-right">
          <div class="Box">
                <div class="cartpayment">
                  <main>
                    <div>
                      <h3>商品信息确认</h3>
                      <div class="section" >
                        <h5 class="h5">价格信息</h5>
                        <p>
                          <span>商品总价：</span>
                          <span>￥128.60</span>
                        </p>
                        <p>
                          <span>运送费：</span>
                          <span>￥128.60</span>
                        </p>
                        <p>
                          <span class="h5">订单总计：</span>
                          <span class="red">￥10</span>
                        </p>
                      </div>
                      <div class="bottom">
                        <div class="section">
                          <h5 class="h5">收货信息</h5>
                          <p>
                            <span>收货地址：</span>
                            <span>四川省成都市孵化园</span>
                          </p>
                          <p>
                            <span>收货人：</span>
                            <span>瓜子可可</span>
                          </p>
                          <p>
                            <span>邮编：</span>
                            <span>610000</span>
                          </p>
                          <p>
                            <span>电话：</span>
                            <span>181805777777</span>
                          </p>
                        </div>
                        <div class="section">
                          <p>
                            <span>修改地址：</span>
                            <span> > </span>
                          </p>
                        </div>
                        <div class="section">
                          <p>
                            <span>新增地址：</span>
                            <span> > </span>
                          </p>
                        </div>

                      </div>
                    </div>
                    <div>
                      <h3>选择支付方式</h3>
                      <div>
                        <div class="section">
                          <p>
                            <span>微信</span>
                            <span> > </span>
                          </p>
                        </div>
                        <div class="section">
                          <p>
                            <span>支付宝</span>
                            <span> > </span>
                          </p>
                        </div>
                        <div class="section">
                          <p>
                            <span>银行卡</span>
                            <span> > </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
                <header>
                  <router-link :to="{name: 'cart',params:{title:'购物车'}}" tag="span" class="return"> < </router-link>

                  <!--<span class="return" @click="returnCart"><</span>-->
                  <span>结算中心</span>
                </header>
          </div>
  </transition>
</template>

<script>

  export default {
    name: 'cartpayment',
    props: [],
    data () {
      return {


      }
    },
    methods:{
      returnCart() {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .Box{
      transition: all 2s ease;
    header{
      position: fixed;
      top:0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: #ffffff;
      text-align: center;
      font-size: 20px;
      background: #252525;
      .return{
        font-size: 30px;
        position: absolute;
        top: 2px;
        left: 20px;
      }
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

    }
  }
  .cartpayment{
    width: 100%;
    z-index: 999999;
    position: fixed;
    top: 50px;
    background: #efefef;
    padding: 0 10px 30px 10px;
    border: 1px solid #252525;
    font-size: 15px;
    height: calc(~"100% - 50px");
    overflow-y:auto;
    .red{
      color: #ff3d31;
      font-size: 20px;
      font-weight: bolder;
    }
    .section{
      width: 100%;
      background: #ffffff;
      padding: 10px;
      border: 1px solid #e1e1e1;
    }
    p{
      display: flex;
      justify-content: space-between;
    }
    .h5{
      font-size: 18px;
      font-weight: bolder;
    }
    h3{
      font-size: 20px;
      color: #626262;
      font-weight: bolder;
    }
    .main{
      width: 100%;

    }
  }

</style>
