<template>
  <div class=" container">
    <div class="d-f warp">
      <div v-for="(item,index) in objq.panelContents" :key="index">
        <img :src="item.picUrl" alt />
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
</style>