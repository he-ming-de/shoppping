<template>
  <div>
    <div>
      <div class="item d-f j-c-c">
        <div class="warp d-f j-c-s-b">
          <div class="p-t2 p-b2 item3">
            <div class="item1 b-c-f">M</div>
          </div>
          <div class="d-f a-i-c j-c-c">
            <div class="d-f a-i-c j-c-c fonts">
              <Input suffix="ios-search" placeholder="请输入商品信息" style="width: auto" />
              <div class="item5">全部商品</div>
              <div class="item2">捐赠</div>
              <div class="item4"></div>
            </div>
            <div class="d-f">
              <Icon type="ios-contact" class="contact" />
              <Icon type="ios-cart" class="cart" />
              <div class="item6">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="warp p-t2 p-b2">
        <div class="d-f">
          <div>·</div>
          <div class="nav1 p-l1 p-r1">首页</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1">全部</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1">品牌周边</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1">捐赠名单</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1">后台管理系统</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1">XPay支付系统</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1">XBoot开发平台</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1">宣传视频</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1">Github</div>
          <div>·</div>
          <div class="nav1 p-l1 p-r1 nav2">商用授权</div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.imgs {
  width: 25%;
  border: 1px solid #ccc;
  position: relative;
  display: inline-block;
  *display: inline;
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
}
.imgs:hover:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 1px 10px;
  -webkit-box-shadow: 0 0 30px #ccc inset;
  -moz-box-shadow: 0 0 30px #ccc inset;
  -o-box-shadow: 0 0 30px #ccc inset;
}
img {
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
}
.item {
  background: rgb(6, 6, 6);
}
.item1 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 25px;
}
/deep/ .ivu-input {
  width: 300px;
  height: 36px;
}
.item4 {
  width: 1px;
  height: 20px;
  background: rgb(55, 55, 55);
  margin-left: 40px;
}
.fonts {
  color: rgb(200, 200, 200);
}
.contact {
  color: rgb(200, 200, 200);
  font-size: 20px;
  margin-left: 40px;
}
.contact:hover {
  cursor: pointer;
  color: #fff;
}
.cart {
  color: rgb(200, 200, 200);
  font-size: 20px;
  margin-left: 40px;
}
.cart:hover {
  cursor: pointer;
  color: #fff;
}
.item3:hover {
  cursor: pointer;
}
.item5:hover {
  cursor: pointer;
  color: #fff;
}
.item5 {
  margin-left: 40px;
}
.item2:hover {
  cursor: pointer;
  color: #fff;
}
.item2 {
  margin-left: 40px;
}
.item6 {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgb(151, 151, 151);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>