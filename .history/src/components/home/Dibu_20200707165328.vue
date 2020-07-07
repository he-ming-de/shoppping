<template>
  <div class="container m-t3">
    <div class="warp d-f">
      <div v-for="(item,index) in objss.panelContents" :key="index">
        <div class="item">
          <div v-if="index>0">
            <img :src="item.picUrl" width="100%" />
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
  width: ;
}
</style>