<template>
  <div>
    <div class="item d-f j-c-c">
      <div class="warp d-f j-c-s-b">
        <div class="p-t2 p-b2">
          <div class="item1 b-c-f">M</div>
        </div>
        <div>
          <Input suffix="ios-search" placeholder="请输入商品信息" style="width: auto" />
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
</style>