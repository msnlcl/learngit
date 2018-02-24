"auto";
device.keepScreenOn();
var i = 0;
threads.start(function() {
  while (true) {
    toast("抢红包呐！*****按音量上键可以强制关闭程序运行！！！*****   注意：监听过程中，避免操控手机！");
    sleep(5000);
  }
});
threads.start(function() {
  events.on("exit", function() {
    console.hide();
    device.vibrate(70);
    device.cancelKeepingAwake();
    alert("《龙小证》休息了，李辰龙祝大家狗年快乐！阖家幸福！");
  })
})
threads.start(function() {
  alert("龙小证系列抢红包神器！请授权辅助功能权限，请允许程序的悬浮窗权限！进入要抢红包的群组，就开始监听，吃年夜饭，包饺子的时候都会自动监听并抢红包哦！！");
  alert("它会自己保证不灭屏待机，华为&荣耀手机完美支持！");
  var i = 0;
  launchApp("微信");
  sleep(1500);
  console.show();
  console.log("时刻准备着! 注意：把界面保持在要抢红包的群组哦！！");
  while (true) {
    while (!click("领取红包"));
    sleep(100);
    while (!className("android.widget.Button").click());
    sleep(1500);
    back();
    if (textContains("手慢了").exists()) {
      log("手慢了");
      while (!className("android.widget.ImageView").click());
      sleep(3000);
    } else {
      while (!className("android.widget.Button").click());
      sleep(1500);
      back();
    }
    i++;
    console.log("龙小证帮助你抢了" + i + "次红包！！");
    //back();
  }
});