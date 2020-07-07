<template>
  <div class="container m-t3 m-b3">
    <div class="d-f warp">
      <div v-for="(item,index) in objq.panelContents" :key="index" class="imgs">
        <img :src="item.picUrl" width="100%" height="100%" />
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
  border: 1px solid #ccc;
  position: relative;
  display: inline-block;
  *display: inline;
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
}
.imgs:hover:
img {
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
}
</style>