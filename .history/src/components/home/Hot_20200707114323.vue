<template>
  <div>
    <div v-for="(item,index) in objw."></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    objw: {
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