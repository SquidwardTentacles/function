

// 截取字符串的方法url地址栏字符串相关数据
function parseURL(url) {
    var result = [];
    var query = url.split("?")[1];
    var queryArr = query.split("&");
    var params = {};
    queryArr.forEach(function (item) {
        var key = item.split("=")[0];
        var value = item.split("=")[1];
        params[key] = value;
    });
    return params;
}
// html模板中的字符串拼接
/* <a href="./classifymenu.html?id={{$value.categoryId
}}"></a> */

// var productid =parseURL(window.location.href).id ;
// console.log(productid); 
// js中获取地址栏带来的数据 写在跳转后的页面的js中

//获取某个数组的index
Array.prototype.indexOf = function (val) {
    for(var i = 0; i < this.length; i++){
        if(this[i] == val){return i;}
    }
    return -1;
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------
//删除某个数组元素
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if(index > -1){this.splice(index,1);}
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------
//去重
Array.prototype.norepeat = function () {
    var arr = this,
        result = [],
        i,
        j,
        len = arr.length;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        result.push(arr[i]);
    }
    return result;
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------

function parseURL(url) {
    var result = [];
    var qu
    return params;
}ery = url.split("?")[1];
    var queryArr = query.split("&");
    var params = {};
    queryArr.forEach(function (item) {
        var key = item.split("=")[0];
        var value = item.split("=")[1];
        params[key] = value;
    });

// var url = "https://127.0.0.1:300?key=123&page=1&name=xiaoming";
//["key=123", "page=1", "name=xiaoging"]
//[["key", "123"], ["page", [1]]]

// console.log(parseUrl(url));

// --------------------------------------------------------------------------------------------------------------------------------------------------------

//获取操作数组
function getKeysArr() {
    //如果第一次搜索，创建一个新数组， 如果是之前有存过搜索记录， 那么就直接从localStorage里取出来[数组字符串]，生成数组
    var keysArr = [];

    //取出搜索历史数组字符串
    var recode = window.localStorage.getItem("search-keys");

    //如果存过
    if(recode) {
        //把字符串转数组
        keysArr = JSON.parse(recode);
    }

    return keysArr;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------
//存储搜索记录的数组
function saveKeysArr(keysarr) {
    //1. 先把arr转成字符串
    var keysStr = JSON.stringify(keysarr);
    //2. 存储
    window.localStorage.setItem("search-keys", keysStr);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------


// 将函数内部的方法暴露到外面
(function (window) {
    //1.构造函数
    function Game(map){
      this.food = new  Food(); //游戏对象里面有食物,食物是创建出来的食物
      this.snake = new Snake();//游戏对象里面有蛇,蛇也是创建出来的.
      this.map = map;//游戏对象里面有地图,地图是传递进来的.
    }
  
    //2.游戏开始方法.
    Game.prototype.start = function () {
      //2.1 显示蛇和食物.
      this.food.render(this.map);
      this.snake.render(this.map);
    }
  
  
    //3.把构造函数给暴露出去
    window.Game = Game;
  
  }(window));

// --------------------------------------------------------------------------------------------------------------------------------------------------------
    // 倒计时
  function show_time(){ 
    var time_start = new Date().getTime();  //5.30         //设定当前时间
    var time_end =  new Date("2016/11/11 23:59:59").getTime();    //设定目标时间

   // 计算时间差 
   var time_distance = time_end - time_start; 
   //console.log(time_distance)
   // 天
   var int_day = Math.floor(time_distance/86400000) 
   time_distance -= int_day * 86400000; 
   // 时
   var int_hour = Math.floor(time_distance/3600000) 
   time_distance -= int_hour * 3600000; 
   // 分
   var int_minute = Math.floor(time_distance/60000) 
   time_distance -= int_minute * 60000; 
   // 秒 
   var int_second = Math.floor(time_distance/1000) 
   // 时分秒为单数时、前面加零 
   if(int_day < 10){ 
       int_day = "0" + int_day; 
   } 
   if(int_hour < 10){ 
       int_hour = "0" + int_hour; 
   } 
   if(int_minute < 10){ 
       int_minute = "0" + int_minute; 
   } 
   if(int_second < 10){
       int_second = "0" + int_second; 
   } 
   // 显示时间 
   $("#time_d").val(int_day); 
   $("#time_h").val(int_hour); 
   $("#time_m").val(int_minute); 
   $("#time_s").val(int_second); 
   // 设置定时器
   setTimeout("show_time()",1000)
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------