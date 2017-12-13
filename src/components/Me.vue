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
            <!-- 个人 -->
            <div v-if="currentIndex === 0" class="mePerson">
              <div>
                <i><</i>
                <span>个人资料修改</span>
              </div>
              <form action="">
                <p>
                  <span>昵称</span>
                  <input type="text">
                  </p>
                <p>
                  <span>E-mail</span>
                  <input type="email" placeholder="请填写你的安全邮箱"></p>
                <p>
                  <span>性别</span>
                  <i>
                  <button>男</button>
                  <button>女</button>
                  <button>保密</button>
                  </i>
                </p>
                <p>
                  <span>生日</span>

                </p>
                <p>
                  <span>生份证</span>
                  <input type="email" placeholder="请填写你的18位身份证"></p>
                </p>
                <p>
                  <span>个人描述</span>
                  <textarea>请谈谈你对自己的认识</textarea>
                </p>
                <button class="mebtn">确认修改</button>
              </form>
              <div class="mePerson-mask" style="display:none">
                  <div class="mask"></div>
                  <div class="mask-btn">
                    <p>地址修改完成</p>
                    <button>确定</button>
                  </div>
              </div>
            </div>
      </transition>
      <!-- =-============================================= -->
      <transition name="slide-fade">
            <!-- 地址 -->
          <div  v-if="currentIndex === 1" class="meAddress">
              <div style="text-align:center">
                <i><</i>
                <span>收货地址</span>
              </div>
              <form action="">
              <p>
                <span>姓名</span>
                <input type="text" placeholder="请填写你的真实名字 ">
                </p>
              <p>
                <span>联系电话</span>
                <input type="number" placeholder="请填写我们联系你的方式"></p>
              <p>
                <span>邮政编码</span>
                <input type="number" placeholder="请填写你所在地区的邮政编码"></p>

              </p>
              <p>
               <select name="">
                 <option 
                 v-for="me in mePro" 
                 :key="me.id">{{me.mepro}}
                 </option>
               </select>
               <select name="">
                  <option 
                 v-for="me in meCity" 
                 :key="me.id">{{me.mecity}}
                 </option>
                
               </select>
               <select name="">
                  <option 
                  v-for="me in meArea" 
                  :key="me.id">{{me.mearea}}
                  </option>
               </select>
              </p>
               <p>
                <span>详细地址</span>
                <input type="text" placeholder="请填写你详细的街道，楼道，门牌号"></p>
                
              </p>
           
              <button class="mebtn">确认修改</button>
            </form>
            <div class="meAddress-mask" style="display:none">
                <div class="mask"></div>
                <div class="mask-btn">
                  <p>个人资料修改完成</p>
                  <button>确定</button>
                </div>
            </div>

          </div>
      </transition>
      <!-- =-============================================= -->
      <transition name="slide-fade">
            <!-- 订单 -->
            
      </transition>
      <div class="Login">
        <div>
          <ul>
            <li :class="{loginColor:isshow}" @click="showLogPage">登录</li>
            <li :class="{loginColor:!isshow}" @click="showRegPage">注册</li>
          </ul>
        </div>
        <div class="login-wrap" v-if="showLog">           
            <input type="text" placeholder="请输入用户名" >
            <input type="password" placeholder="请输入密码">
            <button>登录</button>     
        </div>
        <div class="register-wrap" v-else>
            <input type="text" placeholder="请输入你的手机号" >
            <input type="text" placeholder="请输入你的昵称" >
            <input type="password" placeholder="请输入密码">
            <input type="password" placeholder="请确认你的密码">
            <button>注册</button>   
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Me",
  data() {
    return {
      showReg:false,
      showLog:true,
      
      isshow:true,
      currentIndex: NaN,
      meData: [
        { medata: "设置个人资料" },
        { medata: "收货地址管理" },
        { medata: "我的订单" },
        { medata: "我的评价" },
        { medata: "商品收藏" },
        { medata: "店铺收藏" },
        { medata: "浏览记录" }
      ],
        mePro:[

          {mepro:"四川省"},
          {mepro:"广州省"},
          {mepro:"广西省"},
          {mepro:"浙江省"},
          {mepro:"湖南省"},
          {mepro:"湖北省"},
          {mepro:"河北省"},
          {mepro:"河南省"},
          {mepro:"...."}
        ],
        
        meCity:[

          {mecity:"成都市"},
          {mecity:"绵阳市"},
          {mecity:"攀枝花市"},
          {mecity:"泸州市"},
          {mecity:"广元市"},
          {mecity:"达州市"},
          {mecity:"...."}
        ],
        meArea:[
          {mearea:"武侯区"},
          {mearea:"金牛区"},
          {mearea:"高新区"},
          {mearea:"锦江区"},
          {mearea:"青羊区"},
          {mearea:"双牛区"},
          {mearea:"...."}
        ]            
    };
  },
  methods: {
    meShow: function(index) {
      this.$refs.list[index].children[1].style.transform = "rotate(90deg)";
      this.currentIndex = index;
    },
     showRegPage() {
            if(this.showReg){
                return;
            }else{
                this.showReg = true;
                this.showLog = false;
            }   
        },
        showLogPage() {  
            if(this.showLog){
                return;
            }else{
                this.showLog = true;
                this.showReg = false;
            }   
        },
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
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}

</style>
