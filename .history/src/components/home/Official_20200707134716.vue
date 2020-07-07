<template>
  <div class="container">
    <div class="warp">
      <div v-for="(item,index) in obje.panelContents" :key="index">
        <div>
          <img :src="item.picUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    Official: {
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