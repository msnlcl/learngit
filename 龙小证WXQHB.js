"auto";
var i = 0;
threads.start(function() {
  events.on("exit", function() {
       console.hide();
      device.vibrate(70);
    device.cancelKeepingAwake();
    alert("《龙小证》结束运行!如果是异常退出，请记得截图，发到优化群组方便分析，同时请附带场景的描述。");
   if(i > 3)
        if (confirm("龙小证同学为你抢了" + i + "个红包，觉得值得打赏吗？  小龙的尝试需要肯定哦！！!")) {
        sleep(1000);
        alipay("FKX099191JMATRSHNYWGD3");
        sleep(1000);
      }
  })
})



threads.start(function() {
  alert("龙小证系列抢红包神器！请允许程序的悬浮窗权限！");
    alert("有其他的需求，可以关注微信公众号：龙小证，如果好用，如果你想用的久一些，请口口相传！谨记在心！！！");
  console.show();
  sleep(1000);
  device.keepScreenDim();
  var i = 0;
  console.log("时刻准备着!");
  while (true) {
    while (!click("领取红包"));
    //sleep(1);
    if (text("手慢了，红包派完了").exists()) {
      while(!className("android.widget.ImageView").click());
    } else {
      while(!className("android.widget.Button").click());
      sleep(500);
      while(!desc("返回").click());
    }
    sleep(500);
    i++;
    console.show();
    console.log("龙小证帮助你抢了" + i + "次红包！！");
    back();
  }

});

function alipay(code) {
  var url = "intent://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode=https%3A%2F%2Fqr.alipay.com%2F" + code + "%3F_s%3Dweb-other&_t=1472443966571#Intent;scheme=alipayqr;package=com.eg.android.AlipayGphone;end"
  var intent = android.content.Intent.parseUri(url, android.content.Intent.URI_INTENT_SCHEME);
  context.startActivity(intent);
}