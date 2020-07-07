<template>
  <div class="container">
    <div class="warp">
      <div v-for="(item,index) in obj.panelContents" :key="index">
        <template>
          <Carousel autoplay v-model="value2" loop>
              <CarouselItem>
                <div class="demo-carousel imgss">
                  <img :src="item.picUrl" class="imgs" alt />
                  <img :src="item.picUrl2" class="imgs" alt />
                  <img :src="item.picUrl3" class="imgs" alt />
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
.imgss {
  position: relative;
  height: 460px;
}
.imgs {
  position: absolute;
}
</style>