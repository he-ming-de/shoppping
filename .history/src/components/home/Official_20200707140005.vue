<template>
  <div class="container">
    <div class="warp">
      <div class="d-f">
        <div v-for="(item,index) in obje.panelContents" :key="index">
         
            <img :src="item.picUrl" width="100%" height="100%" />
         
          
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