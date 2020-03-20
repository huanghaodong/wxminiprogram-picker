// pages/index/index.js
import { citys } from './city.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp:[],
    isShow_01: false,
    listData_01:[['太阳', '月亮', '星星']],
    picker_01_data:[],


    isShow_02: false,
    listData_02:[['太阳', '月亮', '星星']],
    picker_02_data:[],


    isShow_03: false,
    listData_03:[['男', '女'],['已婚','未婚'],['在职','离职']],
    picker_03_data:[],


    isShow_04: false,
    listData_04:[
      [{type:'性别',id:0,str:'男'}, {type:'性别',id:1,str:'女'}],
      [{type:'婚姻状况',id:0,str:'已婚'},{type:'婚姻状况',id:0,str:'未婚'}],
      [{type:'职业状态',id:0,str:'在职'},{type:'婚姻状况',id:0,str:'离职'}]
    ],
    picker_04_data:[],


    isShow_05: false,
    listData_05:[
      [{type:'性别',id:0,str:'男'}, {type:'性别',id:1,str:'女'}],
      [{type:'婚姻状况',id:0,str:'已婚'},{type:'婚姻状况',id:0,str:'未婚'}],
      [{type:'职业状态',id:0,str:'在职'},{type:'婚姻状况',id:0,str:'离职'}]
    ],
    defaultPickData_05:[0,1,1],
    picker_05_data:[],


    isShow_06: false,
    listData_06:[
      {
        name:'动物',
        id:1,
        children:[
          {
            name:'鱼',
            id:11,
            children:[
              {
                name:'草鱼',
                id:111
              },
              {
                name:'鲫鱼',
                id:112
              },
              {
                name:'鲢鱼',
                id:113
              }
            ]
          },
          {
            name:'蛇',
            id:12,
            children:[
              {
                name:'蟒蛇',
                id:121
              },
              {
                name:'眼镜蛇',
                id:122
              },
              {
                name:'水蛇',
                id:123
              }
            ]
          }
        ]
      },
      {
        name:'植物',
        id:2,
        children:[
          {
            name:'树',
            id:21,
            children:[
              {
                name:'梧桐树',
                id:211
              },
              {
                name:'银杏树',
                id:212
              },
              {
                name:'杉树',
                id:213
              }
            ]
          },
          {
            name:'花',
            id:22,
            children:[
              {
                name:'玫瑰',
                id:221
              },
              {
                name:'紫罗兰',
                id:222
              },
              {
                name:'菊花',
                id:223
              },
              {
                name:'牡丹',
                id:224
              }
            ]
          }
        ]
      }
    ],
    picker_06_data:[],


    isShow_07: false,
    listData_07:[
      {
        name:'动物',
        id:1,
        children:[
          {
            name:'鱼',
            id:11,
            children:[
              {
                name:'草鱼',
                id:111
              },
              {
                name:'鲫鱼',
                id:112
              },
              {
                name:'鲢鱼',
                id:113
              }
            ]
          },
          {
            name:'蛇',
            id:12,
            children:[
              {
                name:'蟒蛇',
                id:121
              },
              {
                name:'眼镜蛇',
                id:122
              },
              {
                name:'水蛇',
                id:123
              }
            ]
          }
        ]
      },
      {
        name:'植物',
        id:2,
        children:[
          {
            name:'树',
            id:21,
            children:[
              {
                name:'梧桐树',
                id:211
              },
              {
                name:'银杏树',
                id:212
              },
              {
                name:'杉树',
                id:213
              }
            ]
          },
          {
            name:'花',
            id:22,
            children:[
              {
                name:'玫瑰',
                id:221
              },
              {
                name:'紫罗兰',
                id:222
              },
              {
                name:'菊花',
                id:223
              },
              {
                name:'牡丹',
                id:224
              }
            ]
          }
        ]
      }
    ],
    defaultPickData_07:[
      {id:2},{id:21},{id:213}
    ],
    picker_07_data:[],


    isShow_08: false,
    defaultPickData_08:[
      {code:'500000'},{code:'500200'},{code:'500243'}
    ],
    listData_08:citys,
    picker_08_data:[],

    isShow_09: false,
    listData_09:[
      {
        name:'动物',
        id:1,
        children:[
          {
            name:'鱼',
            id:11
          },
          {
            name:'蛇',
            id:12
          }
        ]
      },
      {
        name:'植物',
        id:2,
        children:[
          {
            name:'树',
            id:21
          },
          {
            name:'花',
            id:22
          }
        ]
      }
    ],
    picker_09_data:[],

    isShow_10: false,
    listData_10:[
      {
        name:'动物',
        id:1,
        children:[
          {
            name:'鱼',
            id:11,
            children:[
              {
                name:'草鱼',
                id:111,
                children:[
                  {
                    name:'小',
                    id:1111,
                  },
                  {
                    name:'大',
                    id:1112
                  },
                ]
              },
              {
                name:'鲫鱼',
                id:112,
                children:[
                  {
                    name:'小',
                    id:1121,
                  },
                  {
                    name:'大',
                    id:1122
                  },
                ]
              },
              {
                name:'鲢鱼',
                id:113,
                children:[
                  {
                    name:'小',
                    id:1131,
                  },
                  {
                    name:'大',
                    id:1132
                  },
                ]
              }
            ]
          },
          {
            name:'蛇',
            id:12,
            children:[
              {
                name:'蟒蛇',
                id:121,
                children:[
                  {
                    name:'小',
                    id:1211,
                  },
                  {
                    name:'大',
                    id:1212
                  },
                ]
              },
              {
                name:'眼镜蛇',
                id:122,
                children:[
                  {
                    name:'小',
                    id:1221,
                  },
                  {
                    name:'大',
                    id:1222
                  },
                ]
              },
              {
                name:'水蛇',
                id:123,
                children:[
                  {
                    name:'小',
                    id:1231,
                  },
                  {
                    name:'大',
                    id:1232
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name:'植物',
        id:2,
        children:[
          {
            name:'树',
            id:21,
            children:[
              {
                name:'梧桐树',
                id:211,
                children:[
                  {
                    name:'小',
                    id:2111,
                  },
                  {
                    name:'大',
                    id:2112
                  },
                ]
              },
              {
                name:'银杏树',
                id:212,
                children:[
                  {
                    name:'小',
                    id:2121,
                  },
                  {
                    name:'大',
                    id:2122
                  },
                ]
              },
              {
                name:'杉树',
                id:213,
                children:[
                  {
                    name:'小',
                    id:2131,
                  },
                  {
                    name:'大',
                    id:2132
                  },
                ]
              }
            ]
          },
          {
            name:'花',
            id:22,
            children:[
              {
                name:'玫瑰',
                id:221,
                children:[
                  {
                    name:'小',
                    id:2211,
                  },
                  {
                    name:'大',
                    id:2212
                  },
                ]
              },
              {
                name:'紫罗兰',
                id:222,
                children:[
                  {
                    name:'小',
                    id:2221,
                  },
                  {
                    name:'大',
                    id:2222
                  },
                ]
              },
              {
                name:'菊花',
                id:223,
                children:[
                  {
                    name:'小',
                    id:2231,
                  },
                  {
                    name:'大',
                    id:2232
                  },
                ]
              },
              {
                name:'牡丹',
                id:224,
                children:[
                  {
                    name:'小',
                    id:2241,
                  },
                  {
                    name:'大',
                    id:2242
                  },
                ]
              }
            ]
          }
        ]
      }
    ],
    picker_10_data:[]
  },
  onLoad () {
    setTimeout(() => {
      this.setData({
        defaultPickData_08:[
          {code:'110000'},{code:'110100'},{code:'110101'}
        ]
      })
    },3000)
  },
  showPicker_01: function () {
    this.setData({
      isShow_01: true
    })
  },
  sureCallBack_01 (e) {
    let data = e.detail
    this.setData({
      isShow_01: false,
      picker_01_data: e.detail.choosedData,
      picker_01_index:JSON.stringify(e.detail.choosedIndexArr)
    })
  },
  cancleCallBack_01 () {
    this.setData({
      isShow_01: false,
    })
  },


  showPicker_02: function () {
    this.setData({
      isShow_02: true
    })
  },
  sureCallBack_02 (e) {
    let data = e.detail
    this.setData({
      isShow_02: false,
      picker_02_data: e.detail.choosedData,
      picker_02_index:JSON.stringify(e.detail.choosedIndexArr)
    })
  },
  cancleCallBack_02 () {
    this.setData({
      isShow_02: false,
    })
  },


  showPicker_03: function () {
    this.setData({
      isShow_03: true
    })
  },
  sureCallBack_03 (e) {
    let data = e.detail
    this.setData({
      isShow_03: false,
      picker_03_data: e.detail.choosedData,
      picker_03_index:JSON.stringify(e.detail.choosedIndexArr)
    })
  },
  cancleCallBack_03 () {
    this.setData({
      isShow_03: false,
    })
  },


  showPicker_04: function () {
    this.setData({
      isShow_04: true
    })
  },
  sureCallBack_04 (e) {
    let data = e.detail
    this.setData({
      isShow_04: false,
      picker_04_data: JSON.stringify(e.detail.choosedData),
      picker_04_index:JSON.stringify(e.detail.choosedIndexArr)
    })
  },
  cancleCallBack_04 () {
    this.setData({
      isShow_04: false,
    })
  },


  showPicker_05: function () {
    this.setData({
      isShow_05: true
    })
  },
  sureCallBack_05 (e) {
    let data = e.detail
    this.setData({
      isShow_05: false,
      picker_05_data: JSON.stringify(e.detail.choosedData),
      picker_05_index:JSON.stringify(e.detail.choosedIndexArr)

    })
  },
  cancleCallBack_05 () {
    this.setData({
      isShow_05: false,
    })
  },


  showPicker_06: function () {
    this.setData({
      isShow_06: true
    })
  },
  sureCallBack_06 (e) {
    let data = e.detail
    this.setData({
      isShow_06: false,
      picker_06_data: JSON.stringify(e.detail.choosedData),
      picker_06_index:JSON.stringify(e.detail.choosedIndexArr)

    })
  },
  cancleCallBack_06 () {
    this.setData({
      isShow_06: false,
    })
  },


  showPicker_07: function () {
    this.setData({
      isShow_07: true
    })
  },
  sureCallBack_07 (e) {
    this.setData({
      isShow_07: false,
      picker_07_data: JSON.stringify(e.detail.choosedData),
      picker_07_index:JSON.stringify(e.detail.choosedIndexArr)

    })
  },
  cancleCallBack_07 () {
    this.setData({
      isShow_07: false,
    })
  },


  showPicker_08: function () {
    this.setData({
      isShow_08: true
    })
  },
  sureCallBack_08 (e) {
    this.setData({
      isShow_08: false,
      picker_08_data: JSON.stringify(e.detail.choosedData),
      picker_08_index:JSON.stringify(e.detail.choosedIndexArr)

    })
    console.log(JSON.stringify(e.detail))
  },
  cancleCallBack_08 () {
    this.setData({
      isShow_08: false,
    })
  },


  showPicker_09: function () {
    this.setData({
      isShow_09: true
    })
  },
  sureCallBack_09 (e) {
    let data = e.detail
    this.setData({
      isShow_09: false,
      picker_09_data: JSON.stringify(e.detail.choosedData),
      picker_09_index:JSON.stringify(e.detail.choosedIndexArr)

    })
  },
  cancleCallBack_09 () {
    this.setData({
      isShow_09: false,
    })
  },


  showPicker_10: function () {
    this.setData({
      isShow_10: true
    })
  },
  sureCallBack_10 (e) {
    let data = e.detail
    this.setData({
      isShow_10: false,
      picker_10_data: JSON.stringify(e.detail.choosedData),
      picker_10_index:JSON.stringify(e.detail.choosedIndexArr)

    })
  },
  cancleCallBack_10 () {
    this.setData({
      isShow_10: false
    })
  },
})
