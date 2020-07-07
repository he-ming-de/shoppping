<template>
  <div class="rgb">
    <Tops></Tops>
    <Nav></Nav>
    <Lunbo :obj="obj"></Lunbo>
  </div>
</template>

<script>
import Lunbo from "../components/home/Lunbo";
import Tops from "../components/home/Tops";
import Nav from "../components/home/Nav";
export default {
  name: "",
  props: {},
  data() {
    return {
      obj: {}
    };
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
        this.obj=res.data[0]
        console.log(res.data);
      })
      .catch(err => {});
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>