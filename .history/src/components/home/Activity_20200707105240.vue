<template>
  <div class="container m-t2">
    <div class="d-f warp">
      <div v-for="(item,index) in objq.panelContents" :key="index" class="imgs">
        <img :src="item.picUrl" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    objq: {
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
  width: 25%;
}
.warp {
    border-radius: 30px;
}
</style>