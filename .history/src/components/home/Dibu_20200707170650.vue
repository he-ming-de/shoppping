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
.imgs:hover .item {
  cursor: pointer;
  box-shadow: 3px 3px 10px #ccc;
  transform: translateY(-3px);
  transition: all 0.5s;
}
.imgs:hover before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 1px 10px;
  -webkit-box-shadow: 0 0 30px #ccc inset;
  -moz-box-shadow: 0 0 30px #ccc inset;
  -o-box-shadow: 0 0 30px #ccc inset;
}
</style>