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
            <div class="item5">全部商品</div>
            <div class="item2">捐赠</div>
            <div class="item4"></div>
          </div>
          <div class="d-f">
            <Icon type="ios-contact" class="contact" />
            <Icon type="ios-cart" class="cart" />
            <div class="item6">
              0
            </div>
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
}
</style>