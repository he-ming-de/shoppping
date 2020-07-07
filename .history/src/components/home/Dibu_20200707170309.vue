<template>
  <div class="container m-t3">
    <div class="warp d-f">
      <div v-for="(item,index) in objss.panelContents" :key="index" class="imgs">
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

.imgs {
  border-radius: 10px;
}
.imgs:hover .item{

}
</style>