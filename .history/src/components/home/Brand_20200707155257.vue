
<template>
  <div class="container m-t3">
    <div class="card">
      <div class="name">{{brand.name}}</div>
      <div class="huanh">
        <div v-for="(item,index) in brand.panelContents" :key="index" class="item">
          <div v-if="index===0">
            <img :src="item.picUrl" alt width="640px" />
          </div>
          <div v-else class="img">
            <div class="d-f a-i-c j-c-c">
              <img :src="item.picUrl" alt width="206px" />
            </div>
            <h6>{{item.productName}}</h6>
            <h5 class="subTitle">{{item.subTitle}}</h5>
            <p class="price">￥{{item.salePrice}}.00</p>
            <p class="btn1">
              <Button size="small" class="btn">查看详情</Button>
              <Button type="primary" size="small" class="but">加入购物车</Button>
            </p>
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
    brand: {
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
.card {
  width: 1280px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
 
}
.name {
  font-size: 18px;
  color: #626262;
  padding: 15px 10px 15px 24px;
  background: #f5f5f5;
  border-bottom: 1px solid #d4d4d4;
  border-radius: 8px 8px 0 0;
 
  background: linear-gradient(#fbfbfb, #ececec);
}
.huanh {
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
}
.imgs {
  width: 50%;
}
.img {
  width: 320px;
}
.item {
  background: white;
  text-align: center;
  z-index: 10;
}
.item:hover {
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 3px 3px 3px 3px #ccc;
  transition: all 0.5s;
}
h6 {
  font-size: 16px;
  color: #424242;
  font-weight: 500;
}
.subTitle {
  color: #d0d0d0;
  font-weight: 500;
  padding: 30px;
}
p {
  font-size: 18px;
  color: #d44d44;
  margin-top: 10px;
  margin-bottom: 50px;
}
.but {
  font-size: 12px;
}
.btn {
  margin-right: 10px;
  font-size: 12px;
}
.btn1 {
  display: none;
}
.item:hover .btn1 {
  display: block;
}
.item:hover .price {
  display: none;
}
</style>

