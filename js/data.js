

function returnJson(type){
    switch(type){
        case "首页轮播":
            var data = {
                data:[
                    {
                        img_url: "./images/banner01.jpg"
                    },
                    {
                        img_url: "./images/banner02.jpg"
                    },
                    {
                        img_url: "./images/banner03.jpg"
                    },
                    {
                        img_url: "./images/banner04.jpg"
                    },
                    {
                        img_url: "./images/banner05.jpg"
                    },
                ]
            };
            break;
        case "导航栏":
            var data = {
                data : [
                    {
                        business_id:1,
                        name: "账号估值",
                        img_url: "./images/icon_gu.png",
                        gourl:'guzhi.html'
                    },
                    {
                        business_id:2,
                        name: "增值服务",
                        img_url: "./images/icon_addserver.png"
                    },
                    {
                        business_id:3,
                        name: "服务中心",
                        img_url: "./images/icon_sercenter.png"
                    },
                    {
                        business_id:4,
                        name: "我的订单",
                        img_url: "./images/icon_order.png"
                    },

                ]
            };
            break;
        case "热产品":
            var data = {
                data : [
                    {
                        business_id: 11,
                        img_url: "./images/hot-item01.jpg",
                        business_name: "产品1"
                    },
                    {
                        business_id: 12,
                        img_url: "./images/hot-item02.jpg",
                        business_name: "产品2"
                    },
                    {
                        business_id: 13,
                        img_url: "./images/hot-item03.jpg",
                        business_name: "产品3"
                    },
                    {
                        business_id: 14,
                        img_url: "./images/hot-item04.jpg",
                        business_name: "产品4"
                    },
                    {
                        business_id: 15,
                        img_url: "./images/hot-item05.jpg",
                        business_name: "产品5"
                    },
                    {
                        business_id: 16,
                        img_url: "./images/hot-item06.jpg",
                        business_name: "产品6"
                    }

                ]
            }
            break;
        case "分类":
            var data = {
                data: [
                    {
                        business_id: 21,
                        img_url: "./images/hot-item01.jpg",
                        zhname: "it小龙公众号，订阅号，服务号，速速来购",
                        price: 30
                    },
                    {
                        business_id: 22,
                        img_url: "./images/hot-item02.jpg",
                        zhname: "it小龙订阅号，服务号，速速来购",
                        price: 32
                    },
                    {
                        business_id: 23,
                        img_url: "./images/hot-item03.jpg",
                        zhname: "卖号，服务号，速速来购",
                        price: 33
                    },
                    {
                        business_id: 24,
                        img_url: "./images/hot-item04.jpg",
                        zhname: "我是公众号或者服务号的名称",
                        price: 34
                    },
                    {
                        business_id: 25,
                        img_url: "./images/hot-item05.jpg",
                        zhname: "我是公众号或者服务号的名称",
                        price: 35
                    },
                    {
                        business_id: 26,
                        img_url: "./images/hot-item06.jpg",
                        zhname: "我是公众号或者服务号的名称",
                        price: 36
                    },
                    {
                        business_id: 27,
                        img_url: "./images/hot-item01.jpg",
                        zhname: "我是公众号或者服务号的名称",
                        price: 37
                    },
                    {
                        business_id: 28,
                        img_url: "./images/hot-item02.jpg",
                        zhname: "我是公众号或者服务号的名称",
                        price: 38
                    },
                ]
            };
            break;
        case "类别":
            var data = {
                data:[
                    {
                        type_id: 1,
                        title: "类别1",
                    },
                    {
                        type_id: 2,
                        title: "类别2",
                    },
                    {
                        type_id: 3,
                        title: "类别3",
                    },
                    {
                        type_id: 4,
                        title: "类别4",
                    },
                    {
                        type_id: 5,
                        title: "类别5",
                    },
                    {
                        type_id: 6,
                        title: "类别6",
                    },
                    {
                        type_id: 7,
                        title: "类别7",
                    },
                    {
                        type_id: 8,
                        title: "类别8",
                    },
                    {
                        type_id: 9,
                        title: "类别9",
                    },
                    {
                        type_id: 10,
                        title: "类别10",
                    },
                ]
            };
            break;
        case "商品列表":
            var data = {
                data: [
                    {
                        "name": "分类1",
                        "type":1,
                        "product":[
                            {
                                "business_id":1,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":2,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":3,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":4,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "":5,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    },
                    {
                        "name": "分类2",
                        "type":2,
                        "product":[
                            {
                                "business_id":6,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":7,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":8,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":9,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":10,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    },
                    {
                        "name": "分类3",
                        "type":3,
                        "product":[
                            {
                                "business_id":11,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":12,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":13,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":14,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":15,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    },
                    {
                        "name": "分类4",
                        "type":4,
                        "product":[
                            {
                                "business_id":16,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":17,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":18,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":19,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":20,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    },
                    {
                        "name": "分类5",
                        "type":5,
                        "product":[
                            {
                                "business_id":21,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":22,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":23,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":24,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":25,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    },
                    {
                        "name": "分类6",
                        "type":6,
                        "product":[
                            {
                                "business_id":26,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":27,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":28,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":29,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":30,
                                "business_id":20,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    },
                    {
                        "name": "分类7",
                        "type":7,
                        "product":[
                            {
                                "business_id":31,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":32,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":33,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":34,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":35,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    },
                    {
                        "name": "分类8",
                        "type":8,
                        "product":[
                            {
                                "business_id":36,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":37,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":38,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":39,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                            {
                                "business_id":40,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                        ]
                    },
                    {
                        "name": "分类9",
                        "type":9,
                        "product":[
                            {
                                "business_id":41,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":42,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":43,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":44,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":45,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    },
                    {
                        "name": "分类10",
                        "type":10,
                        "product":[
                            {
                                "business_id":41,
                                "img_url": "./images/item-img01.jpg",
                                "item_title": "标题1",
                                "item_des": "商品描述1",
                                "newPrice": 10,
                                "oldPrice": 100
                            },
                            {
                                "business_id":42,
                                "img_url": "./images/item-img02.jpg",
                                "item_title": "标题2",
                                "item_des": "商品描述2",
                                "newPrice": 20,
                                "oldPrice": 200
                            },
                            {
                                "business_id":43,
                                "img_url": "./images/item-img03.jpg",
                                "item_title": "标题3",
                                "item_des": "商品描述3",
                                "newPrice": 30,
                                "oldPrice": 300
                            },
                            {
                                "business_id":44,
                                "img_url": "./images/item-img04.jpg",
                                "item_title": "标题4",
                                "item_des": "商品描述4",
                                "newPrice": 40,
                                "oldPrice": 400
                            },
                            {
                                "business_id":45,
                                "img_url": "./images/item-img05.jpg",
                                "item_title": "标题5",
                                "item_des": "商品描述5",
                                "newPrice": 50,
                                "oldPrice": 500
                            },
                        ]
                    }
                ]
            };
            break;
        case "交易":
            var data = {
                data:[
                    {
                        type_id: 1,
                        title: "11111111111",
                    },
                    {
                        type_id: 2,
                        title: "22222222222",
                    },
                    {
                        type_id: 3,
                        title: "333333333333",
                    },
                    {
                        type_id: 4,
                        title: "44444444444444",
                    },
                    {
                        type_id: 5,
                        title: "5555555555555555",
                    },
                    {
                        type_id: 6,
                        title: "666666666666666",
                    },
                ]
            };
            break;

    }
    return data;
}

function getOrderList(type){
    switch(type){
        case '待收货':
            var data = {
                code:'200',
                msg:'获取数据成功',
                data:{
                    order_list:[
                        {
                            order_status: 2,
                            order_status_name: "待收货",
                            business:[{
                                logo: './images/item-img01.jpg',
                                business_name: '商铺1'
                            }],
                            products:[
                                {
                                    name: "商品name1",
                                    desc: "商品描述1",
                                    image_url: "./images/item-img01.jpg",
                                }
                            ]
                        },
                    ]
                }

            };
            break;
        case '待付款':
            var data = {
                code:'200',
                msg:'获取数据成功',
                data:{
                    order_list:[
                        {
                            order_status: 1,
                            order_status_name: "待付款",
                            business:[{
                                logo: './images/item-img01.jpg',
                                business_name: '商铺1'
                            }],
                            products:[
                                {
                                    name: "商品name1",
                                    desc: "商品描述1",
                                    image_url: "./images/item-img01.jpg",
                                }
                            ]
                        },
                        {
                            order_status: 1,
                            order_status_name: "待付款",
                            business:[{
                                logo: './images/item-img01.jpg',
                                business_name: '商铺2'
                            }],
                            products:[
                                {
                                    name: "商品name2",
                                    desc: "商品描述2",
                                    image_url: "./images/item-img01.jpg",
                                }
                            ]
                        },
                    ]
                }

            };
            break;
        case '已完成':
            var data = {
                code:'200',
                msg:'获取数据成功',
                data:{
                    order_list:[
                        {
                            order_status: 3,
                            order_status_name: "已完成",
                            business:[{
                                logo: './images/item-img01.jpg',
                                business_name: '商铺1'
                            }],
                            products:[
                                {
                                    name: "商品name1",
                                    desc: "商品描述1",
                                    image_url: "./images/item-img01.jpg",
                                }
                            ]
                        },
                    ]
                }

            };
            break;
        case '所有订单':
            var data = {
                code:'200',
                msg:'获取数据成功',
                data: {
                    order_list: [
                        {
                            order_status: 1,
                            order_status_name: "待付款",
                            business: [{
                                logo: './images/item-img01.jpg',
                                business_name: '商铺1'
                            }],
                            products: [
                                {
                                    name: "商品name1",
                                    desc: "商品描述1",
                                    image_url: "./images/item-img01.jpg",
                                }
                            ]
                        },
                        {
                            order_status: 2,
                            order_status_name: "待收货",
                            business: [{
                                logo: './images/item-img01.jpg',
                                business_name: '商铺2'
                            }],
                            products: [
                                {
                                    name: "商品name2",
                                    desc: "商品描述2",
                                    image_url: "./images/item-img01.jpg",
                                }
                            ]
                        },
                        {
                            order_status: 3,
                            order_status_name: "已完成",
                            business: [{
                                logo: './images/item-img01.jpg',
                                business_name: '商铺3'
                            }],
                            products: [
                                {
                                    name: "商品name3",
                                    desc: "商品描述3",
                                    image_url: "./images/item-img01.jpg",
                                }
                            ]
                        }
                    ],

                }
            };
            break;
    }
    return data;
}

