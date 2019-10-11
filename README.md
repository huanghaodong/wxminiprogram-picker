![avatar](http://upload-images.jianshu.io/upload_images/12063255-ed58d98366b12a06.gif?imageMogr2/auto-orient/strip)
## 为什么要自定义picker
原生小程序picker不支持自定义样式，无联动。
该自定组件
* 支持自定义数据
* 支持自定义样式
* 支持传入和返回对象或者基本类型
* 支持联动（改变父列，子列根据关联自动变化）

## 使用

* 直接将picker文件夹拖入工程
	
* 在某page的json文件中配置

```js
{
  "usingComponents": {
    "picker": picker.js的相对路径
  }
}
```
* 在page的wxml文件中使用

```xml
<picker
	isShowPicker="{{isShow_02}}"
	bind:sure="sureCallBack_02"
	bind:cancle="cancleCallBack_02"
	scrollType="normal"
	listData="{{listData_02}}"
	indicatorStyle="height:80px"
	maskStyle=""
	titleStyle=""
	sureStyle="color:blue;font-size:16px;"
	cancelStyle="color:red;font-size:16px;"
	chooseItemTextStyle="color:green;"
	pickerHeaderStyle="background:#eee;"
	titleText="自定义标题"
	cancelText="cancle"
	sureText="sure"
></picker>

```
* 更多使用方式，可自行参考demo

## 参数说明

| name | type | required | default | Description |
| ------ | ------ | ------ | ------ |------ |
| isShowPicker | Boolean | ✓ | false | 显示隐藏picker，需要在bindsure和bindcancle中手动设为false |
| scrollType | String | ✗ | 'normal' | picker类型，'normal':非联动picker 'link':联动picker |
| listData | Array | ✓ | [] | picker数据源,是一个数组，scrollType='normal'时，数组成员也是数组，数组成员数量就是picker列数;scrollType='link'时，listData格式需为固定格式 |
| keyWordsOfShow | String | ✗ | 'name' | 当listData的的每一个成员，是由对象组成的数组时，keyWordsOfShow作为对象的key，其value用于显示；或者当picker='link'时，供显示的key |
| defaultPickData | Array | ✗ | [] | 设置picker默认选择 |
| indicatorStyle | String | ✗ | '' | 设置选择器中间选中框的样式（详见[picker-view](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html)）如，每一行的高度 view |
| maskStyle | String | ✗ | '' | 设置蒙层的样式（详见[picker-view](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html)） view |
| titleStyle | String | ✗ | '' | 标题栏标题样式  view |
| sureStyle | String | ✗ | '' | 标题栏确定样式  text |
| cancelStyle | String | ✗ | '' | 标题栏取消样式 text |
| chooseItemTextStyle | Array | ✗ | '' | 设置picker列表文案样式 text |
| pickerHeaderStyle | String | ✗ | '' | 标题栏样式 view |
| titleText | String | ✗ | '' | 标题文案 |
| cancelText | String | ✗ | '' | 取消按钮文案 |
| sureText | String | ✗ | '' | 确定按钮文案 |
| bindsure | EventHandle | ✗ | 无 | 点击确定触发的事件，event.detail = {choosedData, choosedIndexArr} ,choosedData为选中项的数据, choosedIndexArr为选中项的索引数组；当scrollType='link'时choosedIndexArr无意义。|
| bindcancle | EventHandle | ✗ | 无 | 点击取消触发的事件 |


## 注意
 - **模态框无法覆盖原生组件（参考[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)），所以如果页面有原生组件，可以在isShowPicker为true设置原生组件display:none**。
 - 在使用该组件的page页面中，禁止出现'.wrapper'类名，否则会出现样式问题，如果用到请换个名字。（ 我也觉得很奇怪 ）
 - 必须在bindsure和bindcancle中将isShowPicker设为false。
 - scrollType='normal'时，listData数据结构代码如下；当第二维数组的成员为对象时，需指定用于显示的key(通过keyWordsOfShow属性)，默认为'name'。若要设置默认选中，设置 defaultPickData=[第一选中的列索引,第二选中的列索引,第三选中的列索引,...]，如[1,2,1]
 
 ```js
 //listData数据结构
  [ 
    [对象或者普通类型], 
    [对象或者普通类型], 
    [对象或者普通类型], 
    ...
    ]
 
 ```
 
 -  scrollType='link'时，listData数据结构代码如下，"children"字段为必须；'用于显示的key'对应keyWordsOfShow属性。若要设置默认选中，设置 defaultPickData = [{第一列选中项对应的唯一key:value}, {第二列选中项对应的唯一key:value}, {第三列选中项对应的唯一key:value},...]，如[{id:2},{id:21},{id:213}]

```js
//listData数据结构
 [
   {
     用于显示的key:'',
     children:[
       {
          用于显示的key:'',
          children:[
            {
              用于显示的key:'',
              children:[
                      
              ],
              其他属性...,
             }      
          ],
          其他属性...,
       },
       ...
     ],
     其他属性...,
   },
   ...
 ]
```

## 如果觉得有用，请给个start，谢谢
