<template>
  <div class="container">
    <div class="warp">
      <div class="d-f a-i-c">
        <div class="m-r2 f-s12">综合排序</div>
        <div class="m-r2 f-s12">价格从低到高</div>
        <div class="m-r2 f-s12">价格从高到底</div>
        <div class="f-s16 c-c">
          <input v-model="value" placeholder="价格" class="input" />
        </div>
        <div>
          &nbsp;
          <div class="hx"></div>&nbsp;
        </div>
        <div class="f-s16 c-c">
          <input v-model="value" placeholder="价格" class="input" />
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
    return {
      value: ""
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.$api
      .allGoods({ page: 1, size: 10 })
      .then(res => {
        console.log(res);
      })
      .catch(err => {});
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.input {
  width: 80px;
  height: 30px;
  padding-left: 10px;
  border-radius: 10px;
  outline: none;
}
.hx {
  width: 10px;
  height: 2px;
  background: #000;
}
</style>