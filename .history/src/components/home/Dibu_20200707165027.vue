<template>
  <div class="container">
    <div class="warp d-f">
      <div v-for="(item,index) in objss.panelContents" :key="index" class="item">
        <div v-if="index>0">
          <img :src="item.picUrl" width="100%" />
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
.item {
  width: 30%;
}
</style>