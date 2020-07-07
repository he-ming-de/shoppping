<template>
  <div class="container">
    <div class="warp">
      <div class="item">{{objw.name}}</div>
      <div class="d-f item1">
        <div v-for="(item,index) in objw.panelContents" :key="index" class="imgs">
          <div class="d-f j-c-c item3">
            <img :src="item.picUrl" width="30%" />
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
}
.item1 {
  border: 1px solid #ccc;
  background: #fff;
}
</style>