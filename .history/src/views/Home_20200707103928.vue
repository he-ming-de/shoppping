<template>
  <div class="rgb">
    <Tops></Tops>
    <Nav></Nav>
    <Lunbo :obj="obj"></Lunbo>
    <Activity :objq="objq"></Activity>
  </div>
</template>

<script>
import Activity from "../components/home/Activity";
import Lunbo from "../components/home/Lunbo";
import Tops from "../components/home/Tops";
import Nav from "../components/home/Nav";
export default {
  name: "",
  props: {},
  data() {
    return {
      obj: {},
      objq: {}
    };
  },
  components: {
    Tops,
    Nav,
    Lunbo,
    Activity
  },
  methods: {},
  mounted() {
    this.$api
      .home()
      .then(res => {
        this.obj = res.data[0];
        this.objq = res.data[1];
        console.log(res.data);
      })
      .catch(err => {});
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.rgb {
  background: rgb(237, 237, 237);
}
</style>