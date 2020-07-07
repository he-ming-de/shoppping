<template>
  <div class="container">
    <div class="warp">
      <div class="d-f f-w-w">
        <div v-for="(item,index) in obje.panelContents" :key="index">
          <div v-if="index===0">
            <img :src="item.picUrl" class="imgs" />
          </div>
          <div  v-if="index>0">
            <img :src="item.picUrl" class="imhss" />
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