<template>
  <div class="container">
    <div class="warp">
      <div class="item">{{objw.name}}</div>
      <div v-for="(item,index) in objw.panelContents" :key="index"></div>
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
}
</style>