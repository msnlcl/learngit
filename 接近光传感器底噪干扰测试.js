var key = new Array();
var i=0;
//距离传感器
console.show();
var f = open("/sdcard/1.csv", "w");
//距离传感器
sensors.register("proximity", sensors.delay.fastest)
  .on("change", (event, a, b, c)=>{
    key[i]=b;
    i++;
    f.writeline(a + "," + b + "," + c);
    log("接近光底噪："+b);
});

//3秒后退出程序
setTimeout(()=>{
  f.close();
  alert("接近光底噪最大值与最小值分别为："+ String(Math.max.apply( Math, key ))+","+ String(Math.min.apply( Math, key )));
  exit();
}, 3 * 1000);
