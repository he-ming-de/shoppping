import service from './index'

export default {
    // 1.首页数据
    home() {
        return service.get(`/goods/home`)
    },
    // 2.为你推荐
    recommend() {
        return service.get(`/goods/recommend`)
    },
    // 3.所有商品
    allGoods(page,size,sort,priceGt,priceLte) {
        return service.get(`/goods/allGoods?page=${page}size=${size}`)
        // 1.page: 请求页数(必填)
        // 2.size: 请求条数(必填)
        // 3.sort: 排序方式 1为升序 - 1为降序
        // 4.priceGt: 价格区间 从多少开始
        // 5.priceLte: 价格区间 到哪结束
    },
    // 查询获取购物车数据
    getCard() {
        return service.post(`/getCard`)
    },
    // 购物车加减商品
    editCart({ count, id, mallPrice }) {
        return service.post(`/editCart`, {
            count,
            id,
            mallPrice
        })
    },
    // 购物车商品删除
    deleteShop(idArr) {
        return service.post(`/deleteShop`, idArr)
    },
    // 购物车支付页面
    order({ address, tel, orderId, totalPrice, idDirect, count }) {
        return service.post(`/order`, {
            address,
            tel,
            orderId,
            totalPrice,
            idDirect,
            count
        })
    },
    // 单个商品详情
    goods(id) {
        return service.get(`/goods/one?id=${id}`)
    },
    // 收藏单个商品
    collection(goods) {
        return service.post(`/collection`,
            goods
        )
    },
    // 取消收藏
    cancelCollection(id) {
        return service.post(`/cancelCollection`,
            { id }
        )
    },
    // 查询商品是否已收藏
    isCollection(id) {
        return service.post(`/isCollection`,
            { id }
        )
    },
    // 加入购物车
    addShop({ id }) {
        return service.post(`/addShop`, {
            id
        })
    },
    // 退出登录
    loginOut() {
        return service.post(`/loginOut`,
            {})
    },
    // 获取用户信息
    queryUser() {
        return service.post(`/queryUser`,
            {})
    },
    // 修改保存用户信息
    saveUser({ gender, year, month, day, id, nickname }) {
        return service.post(`/saveUser`, {
            gender,
            year,
            month,
            day,
            id,
            nickname
        })
    },
    // 查询用户订单数量
    myOrders() {
        return service.get(`/myOrder/orderNum`)
    },
    // 商品评论
    goodsOne({ id, rate, content, anonymous, _id, order_id, image }) {
        return service.post(`/goodsOne/comment`, {
            id,
            rate,
            content,
            anonymous,
            _id,
            order_id,
            image
        })
    },
    // 获取登录注册默认验证码
    verify() {
        return service.get(`/verify`)
    },
    // 查询用户收货地址
    getAddress() {
        return service.get(`/getAddress`)
    },
    // 查询默认收货地址
    getDefaultAddress() {
        return service.get(`/getDefaultAddress`)
    },
    // 设置默认收货地址
    setDefaultAddress({ id }) {
        return service.post(`setDefaultAddress`, {
            id
        })
    },
    // 增加收货地址
    address({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }) {
        return service.post(`/address`, {
            name,
            tel,
            address,
            isDefault,
            province,
            city,
            county,
            addressDetail,
            areaCode,
            id
        })
    },
    // 删除地址
    deleteAddress(id) {
        return service.post(`/deleteAddress`,
            id
        )
    },
    // 查询我的收藏
    collectionlist() {
        return service.get(`/collection/list`)
    },
    // 注册
    register({ nickname, password, verify }) {
        return service.post(`/register`, {
            nickname,
            password,
            verify
        })
    },
    // 登录
    login({ nickname, password, verify }) {
        return service.post(`/login`, {
            nickname,
            password,
            verify
        })
    },
    // 订单查询
    myOrder() {
        return service.get(`/myOrder`)
    },
    // 查询已评价
    alreadyEvaluated() {
        return service.get(`/alreadyEvaluated`)
    },
    // 查询未评价
    tobeEvaluated() {
        return service.get(`/tobeEvaluated`)
    },
    // 查询单条评论
    evaluateOne({ id, _id }) {
        return service.post(`/evaluateOne`, {
            id,
            _id
        })
    }
}