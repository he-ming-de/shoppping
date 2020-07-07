<template>
  <div class="container">
    <div class="warp d-f f-w-w">
      <div v-for="(item,index) in obje.panelContents" :key="index">
        <div v-if="index<1">
          <img :src="item.picUrl" width="640" height="400" />
        </div>
        <div v-else class="item">
          <img :src="item.picUrl" />
          <div>{{item.productName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    obje: {
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
.imgs {
  width: 50%;
}
.imgss {
  width: 25%;
}
.item {
  width: 320px;
  height: 400px;
}
</style>