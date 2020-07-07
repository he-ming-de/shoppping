<template>
  <div>
    <Tops></Tops>
    <Nav></Nav>
  </div>
</template>

<script>
import Tops from "../components/home/Tops";
import Nav from "../components/home/Nav";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Tops,
    Nav
  },
  methods: {},
  mounted() {
    this.$api
      .home()
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