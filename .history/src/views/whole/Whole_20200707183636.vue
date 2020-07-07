<template>
  <div class="container">
   <div>
    <div class="d-f a-i-c">
      <div>综合排序</div>
      <div>价格从低到高</div>
      <div>价格从高到底</div>
      <div>
        <input v-model="value" placeholder="价格" class="input" />
      </div>
      <div>-</div>
      <div>
        <input v-model="value" placeholder="价格" class="input" />
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        value:''
    };
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
.input {
    width: 80px;
}
</style>