<template>
  <div>
    <div v-for="(item,index) in Dibu.panelContents" :key="index"></div>
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