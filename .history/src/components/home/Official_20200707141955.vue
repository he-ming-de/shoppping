<template>
  <div class="container">
    <div class="warp">
      <div class="d-f f-w-w">
        <div v-for="(item,index) in obje.panelContents" :key="index">
          <div v-if="index===0">
            <img :src="item.picUrl" width="50%" height="50%" />
          </div>
          <div  v-if="index>0">
            <img :src="item.picUrl" width="25%" height="50%" />
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

</style>