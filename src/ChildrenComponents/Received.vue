<template>
      <div class="meAddress">
        <div style="text-align:center;background: #252525" >
          <i style="padding: 0 10px" @click="$emit('returnPre')"><</i>
          <span style="color:#ffffff">收货地址</span>
        </div>

        <p>
          <span>姓名</span>
          <input type="text" placeholder="请填写你的真实名字 ">
        </p>
        <p>
          <span>联系电话</span>
          <input type="number" placeholder="请填写我们联系你的方式">
        </p>
        <p>
          <span>邮政编码</span>
          <input type="number" placeholder="请填写你所在地区的邮政编码">
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
          <input type="text" placeholder="请填写你详细的街道，楼道，门牌号">
        </p>
        <button class="mebtn" @click="sure" >确认修改</button>

      </div>

</template>

<script>
  export default {
    name: 'received',
    props: [],
    data () {
      return {
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

      }
    },
    methods:{
      sure() {
          alert('修改成功')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .meAddress{
    z-index: 999999999999;
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: fixed;
    top:0;
    left: 0;
    text-align: center;
    font-size: 20px;
      div{
        width: 100%;
        height: auto;
        background-color: #000000;
        color: white;
        height: 50px;
        line-height: 50px;
      }
      i{
        color: white;
        position: absolute;
        top: 0;
        left: 2%;
      }
      p{
        border-bottom: 1px solid gray;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        text-align: left;
      }
        span{
          display: inline-block;
          width: 100px;
          font-size: 18px;
          color: #5e5e5e;
        }
      input{
        display: inline-block;
        outline-style: none;
        border: 0;
        font-size: 15px;
        height: 30px;
        margin: 0;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
        select{
          font-size: 15px;
          color: #5e5e5e;
        }
      button{
        width: 80%;
        height: 40px;
        margin: 40px auto;
        line-height: 40px;
        background: #1da43e;
        color: #ffffff;
        border-style: none;
        border-radius: 5px;
        font-size: 20px;
      }
  }
</style>
