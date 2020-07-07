<template>
  <div>
    <div v-for="(item,index) in Dibu.panelContents" :key="index">
      <div v-if="index>0" class="d-f">
        <img :src="item.picUrl" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    Dibu: {
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