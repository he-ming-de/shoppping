<template>
  <div>
    <Tops></Tops>
    <Nav></Nav>
    <Lunbo></Lunbo>
  </div>
</template>

<script>
import Lunbo from '../components/home/Lunbo'
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
    Nav,
    Lunbo
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