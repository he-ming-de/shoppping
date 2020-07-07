<template>
  <div>
    <div>
      <div>综合排序</div>
      <div>价格从低到高</div>
      <div>价格从高到底</div>
      <div>
        <Input v-model="value" placeholder="价格" width="80px" />
      </div>
      <div>-</div>
      <div>
        <Input v-model="value" placeholder="Enter something..."  width="80px" />
      </div>
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