<template>
  <div class="container">
    <div class="warp">
      <div v-for="(item,index) in objss.panelContents" :key="index">
        <div v-if="index>0">
          <img :src="item.picUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    objss: {
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