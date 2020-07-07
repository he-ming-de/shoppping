<template>
  <div class="container m-t2 m-b2">
    <div class="warp">
      <Carousel autoplay v-model="value2" loop autoplay-speed="5000" arrow="never" easing>
        <CarouselItem v-for="(item,index) in obj.panelContents" :key="index">
          <div class="demo-carousel imgss">
            <img :src="item.picUrl" class="imgs" alt />
            <img :src="item.picUrl2" class="imgs" alt />
            <img :src="item.picUrl3" class="imgs" alt />
          </div>
        </CarouselItem>
      </Carousel>
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
.imgss {
  position: relative;
  height: 482.61px;
  border-radius: 10px;
}
.imgs {
  position: absolute;
}
</style>