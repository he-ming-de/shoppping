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
    allGoods({ page = 1, size = 10 }) {
        return service.get(`/goods/allGoods?page=${page}&size=${size}`)
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
        //username: 用户名
        //password: 密码
    },
    // 8.加入购物车
    addCart(productId) {
        return service.post(`/goods/addCart`, { productId })
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
    editCart(productId, count) {
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
        return service.post(`/address/editAddress`, {
            addressId, username, phone, address, isDefault
        })
        //1.addressId: 地址的_id
        //2.username: 用户名
        //3.phone: 电话
        //4.address: 地址
        //5.isDefault: 是否为默认地址
    },
    // 16.删除地址
    deleteAddress(addressId) {
        return service.post(`/address/deleteAddress`, { addressId })
        //addressId: 地址的_id
    },
}