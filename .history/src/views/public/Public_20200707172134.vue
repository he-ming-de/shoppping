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
</style>