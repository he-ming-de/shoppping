<template>
  <div>
    <div class="item d-f j-c-c">
      <div class="warp d-f j-c-s-b">
        <div class="p-t2 p-b2 item3">
          <div class="item1 b-c-f">M</div>
        </div>
        <div class="d-f a-i-c j-c-c">
          <div class="d-f a-i-c j-c-c fonts">
            <Input suffix="ios-search" placeholder="请输入商品信息" style="width: auto" />
            <div class="m-l3">全部商品</div>
            <div class="m-l3">捐赠</div>
            <div class="item4 m-l3"></div>
          </div>
          <div>
            <Icon type="ios-contact" class="contact m-l3" />
            <Icon type="ios-cart" class="cart m-l3" />
          </div>
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
}
.fonts {
  color: rgb(200, 200, 200);
}
.contact {
  color: rgb(200, 200, 200);
  font-size: 20px;
}
.cart {
  color: rgb(200, 200, 200);
  font-size: 20px;
}
.item3:hover {
  cursor: pointer;
  XMall商城官网;
}
</style>