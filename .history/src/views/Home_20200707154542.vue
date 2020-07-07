<template>
  <div class="rgb">
    <Tops></Tops>
    <Nav></Nav>
    <Lunbo :obj="obj"></Lunbo>
    <Activity :objq="objq"></Activity>
    <Hot :objw="objw"></Hot>
    <Official :obje="obje"></Official>
    <Brand :brand="brand"></Brand>
  </div>
</template>

<script>
import Brand from "../components/home/Brand";
import Official from "../components/home/Official";
import Hot from "../components/home/Hot";
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
      objq: {},
      objw: {},
      obje: {},
      brand: {}
    };
  },
  components: {
    Tops,
    Nav,
    Lunbo,
    Activity,
    Hot,
    Official,
    Brand
  },
  methods: {},
  mounted() {
    this.$api
      .home()
      .then(res => {
        this.obj = res.data[0];
        this.objq = res.data[1];
        this.objw = res.data[2];
        this.obje = res.data[3];
        this.brand=res.data[4]
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