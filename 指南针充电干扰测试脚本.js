events.observeKey();
events.onKeyDown("volume_up", function(event) {
  try {
    f.close();
  } catch (err) {}

  log("充电与非充电状态下，指南针X轴跳动量："+String(Math.max.apply( Math, angx_c )-Math.min.apply( Math, angx_c ))+","+String(Math.max.apply( Math, angx )-Math.min.apply( Math, angx )));
  log("充电与非充电状态下，指南针Y轴跳动量："+String(Math.max.apply( Math, angy_c )-Math.min.apply( Math, angy_c ))+","+String(Math.max.apply( Math, angy )-Math.min.apply( Math, angy )));
  log("充电与非充电状态下，指南针Z轴跳动量："+String(Math.max.apply( Math, angz_c )-Math.min.apply( Math, angz_c ))+","+String(Math.max.apply( Math, angz )-Math.min.apply( Math, angz )));
  
  device.vibrate(70);
  alert("指南针充电干扰测试结束！请前往手机内部存储根目录下寻找输出文件！");
  exit();
});




var key = new Array();
var angx = new Array();
var angy = new Array();
var angz = new Array();
var angx_c = new Array();
var angy_c = new Array();
var angz_c = new Array();
anglex[0] = 0;
angley[0] = 0;
anglez[0] = 0;
var i = 0;
var j = 0;
var o=0;
alert("欢迎使用龙小证指南针充电干扰测试程序！测试过程保证手机不动，在低电量插拔手机充电器侧线缆端!");
var name = rawInput("请输入即将生成的数据文件名");
sleep(3000);
var f = open("/sdcard/" + name + ".csv", "w");
threads.start(function() {
  while (true) {
    toast("测试中，后台正在收集指南针数据！！");
    sleep(3000);
  }
});
console.show();
sensors.register("MAGNETIC_FIELD", sensors.delay.fastest)
  .on("change", (event, a, b, c) => {
    if(device.isCharging()){
      angx_c[i] = a;
      angy_c[i] = b;
      angz_c[i] = c;
      i++;
    }else{
      angx[j] = a;
      angy[j] = b;
      angz[j] = c;
      j++
    }
    

    
    o = (device.isCharging() == true) ? 1 : 0;
    try {
      f.writeline(a + "," + b + "," + c + "," + o);
      log(a + "," + b + "," + c + "," + o);
    } catch (err) {}
  });