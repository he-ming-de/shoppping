<template>
  <div class="container">
    <div class="warp">
      <div v-for="(item,index) in obj.panelContents" :key="index">
        <template>
          <Carousel autoplay v-model="value2" loop>
            <CarouselItem>
              <div class="demo-carousel">
                <img :src="item.picUrl" alt />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img :src="item.picUrl2" alt />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img :src="item.picUrl3" alt />
              </div>
            </CarouselItem>
          </Carousel>
        </template>
      </div>
    </div>
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
img {
  width: 100%;
}
.imgs {
  position: relative;
}
.imgsa {
  position: absolute;
}
</style>