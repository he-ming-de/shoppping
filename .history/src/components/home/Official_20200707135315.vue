<template>
  <div class="container">
    <div class="warp">
      <div v-for="(item,index) in obje.panelContents" :key="index">
        <div v-if="index===1">
          <img :src="item.picUrl" width="100%" />
        </div>
        <div v-else>
        <img :src="item.picUrl" width="100%" /></div>
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
</style>