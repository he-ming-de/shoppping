<template>
  <div class="container">
    <div class="warp">
      <div class="d-f f-w-w" >
        <div v-for="(item,index) in obje.panelContents" :key="index" class="box">
          <div v-if="index===0">
            <img :src="item.picUrl" class="imgs" />
          </div>
          <div v-if="index>0">
            <img :src="item.picUrl" class="imgss" />
            
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

.box {
    display: flex;
}
.imgs {
  width: 50%;
}
.imgss {
  width: 25%;
}
</style>