<template>
  <div class="container m-t3">
    <div class="warp d-f item2">
      <div v-for="(item,index) in objss.panelContents" :key="index">
        <div v-if="index>0">
          <div class="item">
            <img :src="item.picUrl" width="360" height="240" />
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
  width: 426.6px;
  height: 240px;
  background: #fff;
}
.item2 {
    border-radius: 10px;
}
</style>