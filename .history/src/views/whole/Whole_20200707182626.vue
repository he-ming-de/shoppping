<template>
  <div>
    <div>
      <div>综合排序</div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    this.$api
      .allGoods({ page: 1, size: 10 })
      .then(res => {
        console.log(res);
      })
      .catch(err => {});
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>