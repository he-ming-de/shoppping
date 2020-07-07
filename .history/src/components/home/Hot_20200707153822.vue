<template>
  <div class="container">
    <div class="warp">
      <div class="item">{{objw.name}}</div>
      <div class="d-f item1">
        <div v-for="(item,index) in objw.panelContents" :key="index" class="imgs p-b3">
          <div class="d-f j-c-c item3">
            <img :src="item.picUrl" width="30%" />
          </div>
          <div class="d-f j-c-c m-t1">{{item.productName}}</div>
          <div class="d-f j-c-c m-t1 f-s12 c-c">{{item.subTitle}}</div>
          <div class="d-f j-c-c m-t3 btn2 f-s20">￥{{item.salePrice}}</div>
          <div class="btn1 d-f j-c-c m-t3">
            <Button size="small" class="btn">查看详情</Button>
            <Button type="primary" size="small" class="but">加入购物车</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    objw: {
      type: Object,
      default: () => {}
    }
  },
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
  font-size: 20px;
  background: rgb(243, 243, 243);
  padding: 20px;
  border: 1px solid #ccc;
  border-bottom: none;
}
.imgs {
  width: 50%;
  text-align: center;
}
.imgs:hover {
  cursor: pointer;
  box-shadow: 3px 3px 3px 3px #ccc;
}
.item1 {
  border: 1px solid #ccc;
  background: #fff;
}
.item3 {
  margin-top: 50px;
}
.item2 {
  margin-bottom: 50px;
  color: red;
}
.btn {
  margin-right: 10px;
  font-size: 12px;
}
.btn1 {
  display: none;
}
.imgs:hover .btn1 {
  display: block;
}
.imgs:hover .btn2 {
  display: none;
}
.but {
  font-size: 12px;
}
</style>