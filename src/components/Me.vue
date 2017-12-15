<template>
  <div class="me">
      <!-- 图片 -->
      <div class="mebg">
        <div class="mask"></div>
        <p class="mename">{{userName}}</p>
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
      <button class="signout" @click="tologin">退出登录</button>

      <!-- =-==================<!-- 个人 =========================== -->
      <transition name="slide-fade">           
            <div v-if="currentIndex === 0" class="mePerson">
              <div>
                <i @click="toperson"><</i>
                <span>个人资料修改</span>
              </div>
             
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
              <button class="mebtn" @click="PersonMask">确认修改</button>
              
              <div class="mePerson-mask" v-show="maskshow">
                  <div class="mask"></div>
                  <div class="mask-btn">
                    <p>个人修改资料完成</p>
                    <button @click="toperson">确定</button>
                  </div>
              </div>
            </div>
      </transition>
      <!-- =-================== <!-- 地址 =========================== -->
      <transition name="slide-fade"> 
          <div  v-if="currentIndex  === 1" class="meAddress">
              <div style="text-align:center">
                <i @click="toperson"><</i>
                <span>收货地址</span>
              </div>
              
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
           
              <button class="mebtn" @click="AddressMask">确认修改</button>
              
              <div class="mePerson-mask" v-show="maskshowAddress">
                  <div class="mask"></div>
                  <div class="mask-btn">
                    <p>地址资料完成</p>
                    <button @click="toperson">确定</button>
                  </div>
              </div>
          
          </div>
      </transition>
      <!-- =-==================<!-- 登录注册模块 =========================== -->
       
        <div  v-show="loginShow" class="Login">
          <div>
            <ul>
              <li :class="{loginColor:isshow}" @click="showLogPage">登录</li>
              <li :class="{loginColor:!isshow}" @click="showRegPage">注册</li>
            </ul>
          </div>
          <!-- 登录 -->
          <div class="login-wrap" v-if="showLog">
          
            <p class="lo">
              <span class="iconfont">&#xe621;</span>
              <input type="text" placeholder="请输入11位手机号" v-model="loginname">
            </p> 
            <p v-show="numbertishi" class="red">请输入密码</p> 
            <p class="lo">
              <span class="iconfont">&#xe622;</span>
              <input type="password" placeholder="请输入(6-12)密码" v-model="loginnumber">
            </p>        
            <button @click="LoginBtn">登录</button>     
          </div>
          <!-- 注册 -->
          <div class="register-wrap" v-else>
            <!-- 手机验证 -->
          
            <p class="re">
              <span class="iconfont">&#xe621;</span>
              <input type="text" placeholder="请输入11位有效手机号" v-model="iphoneNumber">
            </p>
            <!-- 昵称 -->
            
            <p class="re">
              <span class="iconfont">&#xe64d;</span>
              <input type="text" placeholder="请输入你的昵称(中文和英文)" v-model="usrName">
            </p>
            <!-- 密码 -->
            
            <p class="re">
              <span class="iconfont">&#xe6b2;</span>
              <input type="password" placeholder="请输入密码(6-12)位" v-model="usrPsd">
            </p>
            <!-- 请确认 -->
            
            <p class="re">
              <span class="iconfont">&#xe623;</span>
              <input type="password" placeholder="请确认你的密码" v-model="conusrPsd">
            </p>
            <button @click="RegBtn">注册</button>   
          </div>
        </div>
     
  </div>
</template>

<script>
export default {
  name: "Me",
  data() {
    return {
      // 状态值
      maskshow:false,
      maskshowAddress:false,
      MaskData:'',
      userName:'',
      showReg:false,
      showLog:true,      
      isshow:true,
      currentIndex: NaN,
      loginShow:false,

      iphoneNumber:'',
      usrName:'',
      usrPsd:'',
      conusrPsd:'',
      RegData:[],
      loginname:'',
      loginnumber:'',
      nametishi:false,
      numbertishi:false,
      showLonumber:false,
      showLoName:false,
     

      // 数据
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
    // 列表点击
    meShow: function(index) {
      this.$refs.list[index].children[1].style.transform = "rotate(90deg)";
      this.currentIndex = index;
    },
    //修改按钮跳转回个人中心页面
    PersonMask(){
        this.maskshow = !this.maskshow;
        
    },
    AddressMask(){
        this.maskshowAddress = !this.maskshowAddress;
        
    },
    //登录注册点击切换
    showRegPage() {
            if(this.showReg){
                return;
            }else{
                this.showReg = true;
                this.showLog = false;
            }
            this.isshow = !this.isshow;
    },
    showLogPage() {  
            if(this.showLog){
                return;
            }else{
                this.showLog = true;
                this.showReg = false;
            }
             this.isshow = !this.isshow;   
    },
    //返回个人中心
    toperson(){
            this.currentIndex = NaN;
        },
    //退出按钮调转到登录注册页面
    tologin(){
            this.loginShow = !this.loginShow;
            this.userName = '';
            this.usrName  = '',
            this.iphoneNumber = '',
            this.usrPsd = '',
            this.conusrPsd = '',
            this.loginname = '',
            this.loginnumber = ''
    },
    //注册按钮判断
    RegBtn(){
        
        if(this.iphoneNumber === "" || this.usrName ==="" ||this.usrPsd === "" ||this.conusrPsd === ""  ){
          alert('请输入密码和用户名');
        }
        //手机号验证
        else{
          
                      
          if(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(this.iphoneNumber)){
                if(/^[a-zA-Z\u4e00-\u9fa5]+$/.test(this.usrName)){
                if(/^[a-zA-Z0-9]{6,12}$/.test(this.usrPsd)){
                if(this.conusrPsd === this.usrPsd){
                      var userData     = localStorage.getItem("userInfoList");  
                      if(userData == null){
                        alert("注册成功");
                        this.loginShow = !this.loginShow;
                        this.userName = "欢迎" + this.usrName;
                      
                        const usrData = { 
                          number: this.iphoneNumber,
                          name: this.usrName,
                          Psd:this.usrPsd
                        };

                      //
                      var userInfoListDB = localStorage.getItem("userInfoList");
                      // 如果该键名不存在
                      if(!userInfoListDB) {
                        // 创建用户数组
                        var userArr = [];
                      }
                      // 如果键名已经存在
                      else {
                        // 取出该键
                        var userArr = localStorage.getItem("userInfoList");
                        // 解析JSON字符串成一个可操作的JS对象数组
                        userArr = JSON.parse(userArr);
                      }
                      // 为用户数组新增当前用户的信息
                      userArr.push(usrData);
                      
                      // 转换为JSON字符串
                      userArr = JSON.stringify(userArr);
                      
                      // 创建本地存储的键值对
                      localStorage.setItem("userInfoList", userArr);
                      
                      }else{
                      

                        var userDataReg  = JSON.parse(localStorage.getItem("userInfoList"));
                        var userArr_leng = userDataReg.length;
                        for(var i = 0; i < userArr_leng; i++) {
                            if( this.iphoneNumber === userDataReg[i].number) {
                                // 显示错误信息
                            alert("对不起，该账号已经被注册过了");
                            break;
                            
                          }else{
                            alert("注册成功");
                            this.loginShow = !this.loginShow;
                            this.userName = "欢迎" + this.usrName;
                          
                            const usrData = { 
                              number: this.iphoneNumber,
                              name: this.usrName,
                              Psd:this.usrPsd
                            };
    
                          //
                          var userInfoListDB = localStorage.getItem("userInfoList");
                          // 如果该键名不存在
                          if(!userInfoListDB) {
                            // 创建用户数组
                            var userArr = [];
                          }
                          // 如果键名已经存在
                          else {
                            // 取出该键
                            var userArr = localStorage.getItem("userInfoList");
                            // 解析JSON字符串成一个可操作的JS对象数组
                            userArr = JSON.parse(userArr);
                          }
                          // 为用户数组新增当前用户的信息
                          userArr.push(usrData);
                          
                          // 转换为JSON字符串
                          userArr = JSON.stringify(userArr);
                          
                          // 创建本地存储的键值对
                          localStorage.setItem("userInfoList", userArr);
                          break;
                      }
                        
                  }
                        

                      
                        
                    
                      
                  }
                }
                else{
                  alert('和上一次输入的密码不匹配！');
                }
              }else{

                alert('密码请输入6-12位字母数字混合密码！');
              }
            }else{
                alert('昵称请输入中文或者英文！');
            }
                }
          else{
            alert('手机号请输入11位有效的手机号码！');
          }
        }
       
    },
    //登录按钮判断
    LoginBtn(){
      //输入框数据为空
      if(this.loginname == "" || this.loginnumber == ""){
            alert('请输入手机号和密码');
            return           
      }else{
            const LoginUerdata = localStorage.getItem("userInfoList");
            if(!LoginUerdata){
                  alert('请先注册');
                  this.loginname = '';
                  this.loginnumber = '';
            }else{  
              //用户名不存在 密码输入错误
              const listdata = JSON.parse(localStorage.getItem("userInfoList"));
              for(var i = 0; i < listdata.length; i++){
                if(this.loginname !== listdata[i].number){
                        alert('该用户还没注册，请先注册！')
                        this.loginname = '';
                        this.loginnumber = '';
                }else{
                  if(this.loginnumber !== listdata[i].Psd){
                        alert('密码输入错误');
                        this.loginname = '';
                        this.loginnumber = '';
                  }else{
                        alert('登录成功！'); 
                        this.userName = listdata[i].name; 
                        this.loginShow = !this.loginShow;         
                  }
                }
        
              }
              

            }
      }

      
			

    
    }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  @import '../styles/me.less';

</style>
