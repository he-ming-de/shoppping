<template>
  <div class="container">
    <div class="warp d-f">
      <div v-for="(item,index) in objss.panelContents" :key="index">
        <div v-if="index>0" class="item">
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
.item {
  width: 30%;
}
</style>