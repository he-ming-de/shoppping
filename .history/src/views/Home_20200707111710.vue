<template>
  <div class="rgb">
    <Tops></Tops>
    <Nav></Nav>
    <Lunbo :obj="obj"></Lunbo>
    <Activity :objq="objq"></Activity>
    <Hot></Hot>
  </div>
</template>

<script>
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
      objw:{}
    };
  },
  components: {
    Tops,
    Nav,
    Lunbo,
    Activity,
    Hot
  },
  methods: {},
  mounted() {
    this.$api
      .home()
      .then(res => {
        this.obj = res.data[0];
        this.objq = res.data[1];
        this.objw = res.data[2];
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