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
    <div class="f-d-c a-i-c colors m-t3">
    <div class="box1">
      <div class="d-f">
        <div>
          <div class="word1">订单服务</div>
          <div class="word2">购买指南</div>
          <div class="word2">支付方式</div>
          <div class="word2">送货政策</div>
        </div>
        <div>
          <div class="word1">服务支持</div>
          <div class="word2">官方开源</div>
          <div class="word2">项目前端</div>
          <div class="word2">项目后端</div>
        </div>
        <div>
          <div class="word1">自助服务</div>
          <div class="word2">个人博客</div>
          <div class="word2">个人简介</div>
          <div class="word2">个人视频</div>
        </div>
        <div>
          <div class="word1">其他项目</div>
          <div class="word2">XPay支付系统</div>
          <div class="word2">数据共享</div>
          <div class="word2">待开发...</div>
        </div>
        <div>
          <div class="word1">友情链接</div>
          <div class="word2">宇cccc</div>
          <div class="word2">Smartisan</div>
          <div class="word2">Vue</div>
        </div>
        <div>
          <div class="word1">关注我吧</div>
          <div class="word2">腾讯QQ</div>
          <div class="word2">新浪微博</div>
          <div class="word2">官方邮箱</div>
        </div>
      </div>
      <div class="dv2">
        <div class="word3">1012139570</div>
        <div class="word4">周一至周日 10：00-23：00 (限Starrer或捐赠人联系)</div>
        <div class="hlep">
          <Button type="primary" ghost size="small" class="btn">在线帮助</Button>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="dv3">
        <div>Copyright 2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</div>
        <div class="Y-axis"></div>
        <Button type="text" ghost class="word5">法律声明</Button>
        <div class="Y-axis"></div>
        <Button type="text" ghost class="word5">隐私条款</Button>
        <div class="Y-axis"></div>
        <Button type="text" ghost class="word5">开发者中心</Button>
      </div>
      <div>
        <span class="word6">蜀ICP备16030308号-1</span>
        <span class="word6">蜀ICP证16030308号</span>
      </div>
    </div>
  </div>
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
.nav {
  background: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
}
.nav1:hover {
  cursor: pointer;
  color: rgb(86, 131, 234);
}
</style>