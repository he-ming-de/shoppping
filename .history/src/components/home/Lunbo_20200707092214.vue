<template>
  <div>
    <template>
      <div v-for="(item,index) in obj.panelContents" :key="index">
        <Carousel autoplay v-model="value2" loop>
          <CarouselItem>
            <div class="demo-carousel">
              <img :src="item.picUrl" alt />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img :src="item.picUrl" alt /></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img :src="item.picUrl" alt /></div>
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