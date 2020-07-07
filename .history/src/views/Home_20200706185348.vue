<template>
  <div>
    <Tops></Tops>
    <Nav></Nav>
  </div>
</template>

<script>
import Tops from "../components/home/Tops";
import Nav from "../components/home/Nav"
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Tops,
    Nav,
  },
  methods: {},
  mounted() {
    this.$api
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>