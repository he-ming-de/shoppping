张华军 2020/7/4 22:00:12
可是我看不了

花开花落 2020/7/4 22:00:16
...

张华军 2020/7/4 22:00:21
。。

花开花落 2020/7/4 22:00:44
手机连电脑wifi试试

花开花落 2020/7/4 22:00:56
我抄的吴靖文的

张华军 2020/7/4 22:02:04
我连的WIFI

张华军 2020/7/4 22:02:18
咋鸽子连电脑WIFI嘛

花开花落 2020/7/4 22:02:48
电脑开热点呀

张华军 2020/7/4 22:05:51
不得行

对方已成功接收了你发送的离线文件“商城项目答辩.pptx”(5.39MB)。

张华军 2020/7/4 22:09:44
我的定位有问题

张华军 2020/7/4 22:09:52
说定位不了

张华军 2020/7/4 22:09:54
哈哈

花开花落 2020/7/4 22:10:15
调撒

张华军 2020/7/4 22:10:29
去网站都不行

张华军 2020/7/4 22:10:33
不存在

花开花落 2020/7/4 22:10:40
。。

张华军 2020/7/4 22:31:31
刚刚洛川五咋的了

花开花落 2020/7/4 22:31:53
没怎么呀

花开花落 2020/7/4 22:31:57
在打游戏

张华军 2020/7/4 22:32:03
。。。

张华军 2020/7/4 22:32:26
看着何能发的挺严重的样

花开花落 2020/7/4 22:32:41
发的撒

张华军 2020/7/4 23:08:27


张华军 2020/7/4 23:08:31
哈哈哈

张华军 2020/7/4 23:08:45
刚刚我才知道

张华军 2020/7/4 23:09:05
这个ppt不写也可以

花开花落 2020/7/4 23:09:43
哈哈

花开花落 2020/7/4 23:09:58
我就是改了一下  

花开花落 2020/7/4 23:10:32
骆老师不是说  随便写哈嘛

花开花落 2020/7/6 11:51:41
http://192.168.61.113:8080/

张华军 14:53:08
<template>
  <div class="flex-j-c">
    <div class="card">
      <div class="name">{{periphery.name}}</div>
      <div class="huanh">
        <div v-for="(item,index) in periphery.panelContents" :key="index" class="item">
          <div v-if="index===0">
            <img :src="item.picUrl" alt width="610px" />
          </div>
          <div v-else class="img">
            <div class="flex-cent">
              <img :src="item.picUrl" alt width="206px" />
            </div>
            <h6>{{item.productName}}</h6>
            <h5 class="subTitle">{{item.subTitle}}</h5>
            <p class="price">￥{{item.salePrice}}.00</p>
            <p class="btn1">
              <Button size="small" class="btn">查看详情</Button>
              <Button type="primary" size="small" class="but">加入购物车</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    periphery: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.card {
  width: 1220px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.name {
  font-size: 18px;
  color: #626262;
  padding: 15px 10px 15px 24px;
  background: #f5f5f5;
  border-bottom: 1px solid #d4d4d4;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.huanh {
  width: 1220px;
  display: flex;
  flex-wrap: wrap;
}
.imgs {
  width: 50%;
}
.img {
  width: 305px;
}
.item {
  background: white;
  text-align: center;
  z-index: 10;
}
.item:hover {
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 2px 2px 10px;
  transition: all 0.5s;
}
h6 {
  font-size: 16px;
  color: #424242;
  font-weight: 500;
}
.subTitle {
  color: #d0d0d0;
  font-weight: 500;
  padding: 10px;
}
p {
  font-size: 18px;
  color: #d44d44;
  margin-top: 10px;
  margin-bottom: 50px;
}
.but {
  font-size: 12px;
}
.btn {
  margin-right: 10px;
  font-size: 12px;
}
.btn1 {
  display: none;
}
.item:hover .btn1 {
  display: block;
}
.item:hover .price {
  display: none;
}
</style>

