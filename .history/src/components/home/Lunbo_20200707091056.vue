<template>
  <div>
    <template>
      <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
          <div class="demo-carousel"><img src="obj." alt=""></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </template>
  </div>
</template>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    obj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      value2: 0
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>