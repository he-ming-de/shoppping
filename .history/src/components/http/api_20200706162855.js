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
    allGoods(page, size, sort, priceGt, priceLte) {
        return service.get(`/goods/allGoods?page=${page}size=${size}sort=${sort}priceGt=${priceGt}priceLte=${priceLte}`)
        // 1.page: 请求页数(必填)
        // 2.size: 请求条数(必填)
        // 3.sort: 排序方式 1为升序 - 1为降序
        // 4.priceGt: 价格区间 从多少开始
        // 5.priceLte: 价格区间 到哪结束
    },
    // 4.搜索商品
    search(keyword) {
        return service.get(`/goods/search?keyword=${keyword}`)
        //keyword: 关键字
    },
    // 5.商品详情
    detail(productId) {
        return service.get(`/goods/detail?productId=${productId}`)
        // productId: 商品id
    },
    // 6.登陆
    login(username, password) {
        return service.post(`/users/login`, { username, password })
        //username: 用户名
        //password: 密码
    },
    // 7.注册
    register(username, password) {
        return service.post(`/users/register`, {
            username,
            password,
        })
    },
    // 8.加入购物车
    addCart(id) {
        return service.post(`/goods/addCart`, { id })
        //productId: 商品id
    },
    // 9.查询购物车
    getCarts() {
        return service.get(`/goods/getCarts`)

    },
    // 10.删除购物车的商品
    delCart(productId) {
        return service.post(`/goods/delCart`,
            { productId }
        )
        //1.productId: 商品_id
    },
    // 11.修改购物车数量
    editCarts(productId, count) {
        return service.post(`/goods/editCart`,
            { productId, count }
        )
        //1.productId: 商品_id
        //2.count: 数量
    },
    // 12.获取全部收获地址
    list() {
        return service.get(`/address/list`)
    },
    // 13.添加收获地址
    addAddress(username, phone, address, isDefault) {
        return service.post(`/address/addAddress`,
            { username, phone, address, isDefault })
        //1.username: 用户名
        //2.phone: 电话
        //3.address: 地址
        //4.isDefault: 是否为默认地址
    },
    // 14.设置默认地址
    setDefault(addressId) {
        return service.post(`/address/setDefault`,
            { addressId })
        //1.addressId: 地址的_id
    },
    // 15.修改地址
    editAddress({ addressId, username, phone, address, isDefault }) {
        return service.post(`/saveUser`, {
            addressId, username, phone, address, isDefault
        })
        //1.addressId: 地址的_id
//2.username: 用户名
//3.phone: 电话
//4.address: 地址
//5.isDefault: 是否为默认地址
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