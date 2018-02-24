events.observeKey();
events.onKeyDown("volume_up", function(event) {
  try {
    f.close();
  } catch (err) {}
  device.vibrate(70);
  alert("指南针充电干扰测试结束！请前往手机内部存储根目录下寻找输出文件！");
  exit();
});




var key = new Array();
var angx = new Array();
var angy = new Array();
var angz = new Array();
var anglex = new Array();
var angley = new Array();
var anglez = new Array();
anglex[0] = 0;
angley[0] = 0;
anglez[0] = 0;
var i = 0;
var j = 0;
var o=0;
alert("欢迎使用龙小证指南针充电干扰测试程序！该界面消失后3s，开始测试！请以均匀慢速旋转手机，从-90度到正90°，完成后，点击音量+按键，结束测试！");
var name = rawInput("请输入即将生成的数据文件名");
sleep(3000);
var f = open("/sdcard/" + name + ".csv", "w");
threads.start(function() {
  while (true) {
    toast("测试中，后台正在收集环境光FOV数据！！");
    sleep(3000);
  }
});
console.show();
sensors.register("MAGNETIC_FIELD", sensors.delay.fastest)
  .on("change", (event, a, b, c) => {
    angx[i] = a;
    angy[i] = b;
    angz[i] = c;
     o = (device.isCharging() == true) ? 1 : 0;
    try {
      f.writeline(angx[i] + "," + angy[i] + "," + angz[i] + "," + o);
      log(angx[i] + "," + angy[i] + "," + angz[i] + "," + o);
    } catch (err) {}
  });