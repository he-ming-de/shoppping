<template>
  <div class="container">
    <div class="warp">
      <div class="d-f">
        <div v-for="(item,index) in obje.panelContents" :key="index">
          <div class="imgs" v-if="index===1">
            <img :src="item.picUrl" width="100%" height="100%"/>
          </div>
          <div class="imgss">
            <img :src="item.picUrl" width="100%" height="100%"/>
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
.imgs {
  width: 50%;
}
.imgss {
  width: 25%;
}
</style>