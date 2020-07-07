<template>
  <div class="container">
    <div class="warp">
 
        <div class="box">
          <div class="bot">
            <div class="box1">
              <div class="dv1">
                <div class="word1">订单服务</div>
                <div class="word2">购买指南</div>
                <div class="word2">支付方式</div>
                <div class="word2">送货政策</div>
              </div>
              <div class="dv1">
                <div class="word1">服务支持</div>
                <div class="word2">官方开源</div>
                <div class="word2">项目前端</div>
                <div class="word2">项目后端</div>
              </div>
              <div class="dv1">
                <div class="word1">自助服务</div>
                <div class="word2">个人博客</div>
                <div class="word2">个人简介</div>
                <div class="word2">个人视频</div>
              </div>
              <div class="dv1">
                <div class="word1">其他项目</div>
                <div class="word2">XPay支付系统</div>
                <div class="word2">数据共享</div>
                <div class="word2">待开发...</div>
              </div>
              <div class="dv1">
                <div class="word1">友情链接</div>
                <div class="word2">宇cccc</div>
                <div class="word2">Smartisan</div>
                <div class="word2">Vue</div>
              </div>
              <div class="dv1">
                <div class="word1">关注我吧</div>
                <div class="word2">腾讯QQ</div>
                <div class="word2">新浪微博</div>
                <div class="word2">官方邮箱</div>
              </div>
              <div class="dv2">
                <div class="word3">1012139570</div>
                <div>周一至周日 10：00-23：00 (限Starrer或捐赠人联系)</div>
                <Button type="primary" class="btn">在线帮助</Button>
              </div>
            </div>
            <div class="box2">
              <div class="below">
                <div class="dv3">
                  <div>Copyright 2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</div>
                  <div class="Y-axis"></div>
                  <Button type="text" ghost class="word4">法律声明</Button>
                  <div class="Y-axis"></div>
                  <Button type="text" ghost class="word4">隐私条款</Button>
                  <div class="Y-axis"></div>
                  <Button type="text" ghost class="word4">开发者中心</Button>
                </div>
                <div>
                  <Button type="text" class="word5">蜀ICP备16030308号-1</Button>
                  <Button type="text" class="word5">蜀ICP证16030308号</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
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
.below {
  position: relative;
  right: 220px;
}
.word5 {
  color: rgb(200, 200, 200);
}
.word4 {
  color: rgb(91, 139, 230);
}
.dv3 {
  display: flex;
}
.Y-axis {
  width: 1px;
  height: 20px;
  border: 1px solid rgb(200, 200, 200);
  margin-left: 10px;
  position: relative;
  top: 5px;
}
.box2 {
  width: 1660px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn {
  position: relative;
  left: 120px;
}
.dv2 {
  width: 220px;
  position: relative;
  left: 70px;
  bottom: 20px;
}
.word3 {
  font-size: 40px;
}
.box {
  margin-top: 25px;
  width: 100%;
  height: 500px;
  background: white;
  display: flex;
  justify-content: center;
}
.box1 {
  width: 1660px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgb(200, 200, 200);
}
.word1 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
}
.word2 {
  margin-bottom: 8px;
}
</style>