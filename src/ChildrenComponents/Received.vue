<template>
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
</template>

<script>

  export default {
    name: 'address',
    props: [],
    data () {
      return {


      }
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .meAddress{
    width: 100%;
    height: 500px;
    background-color: tan;
    position: absolute;
    top: 220px;
    left: 0;
    text-align: center;
  div{
    width: 100%;
    height: auto;
    background-color: #000000;
    color: white;
    height: 50px;
    line-height: 50px;
  i{
    color: white;
    position: absolute;
    top: 0;
    left: 2%;
  }
  span{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

  }
  }
  p{
    border-bottom: 1px solid gray;
    padding: 5px;
  }
  button{
    margin: 20px 0;
    padding: 10px 40px;
    background-color:  #00ff00;
    outline: none;

  }
  .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: 	#D3D3D3;
    opacity: .6;
    z-index: 100;

  }
  .mask-btn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    z-index: 200;
    color: black;
    width: 400px;
    height: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
  button{
    padding: 10px 40px;
    border-radius: 20px;
    outline: none;
  }

  }
  }
</style>
