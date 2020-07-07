<template>
  <div class="container">
    <div class="warp d-f">
      <div v-for="(item,index) in obje.panelContents" :key="index">
        <div class="d-f f-w-w">
          <div v-if="index<1">
            <img :src="item.picUrl" class="imgs" width="609" height="400"/>
          </div>
          <div v-else>
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
.warp{
    width: 1220px;
}
</style>