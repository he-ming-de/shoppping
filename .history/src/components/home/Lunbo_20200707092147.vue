<template>
  <div>
    <template>
      <div v-for="(item,index) in obj.panelContents" :key="index">
        <Carousel autoplay v-model="value2" loop>
          <CarouselItem>
            <div class="demo-carousel">{{item.picUrl}}</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
        </Carousel>
      </div>
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