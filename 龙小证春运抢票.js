"auto";
var m_v = device.width;
var m_h = device.height;
var window = floaty.window(
  <frame>
    <button id="action" text="龙小证春运抢票" w="auto" h="auto" bg="#77ffffff" />
  </frame>
);

setInterval(() => { }, 1000);

var execution = null;

//记录按键被按下时的触摸坐标
var x = 0,
  y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;
console.setPosition(0, 250);
console.show();


var seat_kind = "";
var n_fact = "";
var key_d = false;
//seat_kind = rawInput("请输入需求的乘坐类型，如：硬座，一等座等");
n_fact = rawInput("请输入需求的乘坐类型，如：硬座，一等座等");
switch (n_fact) {
  case "硬座":
    {
      seat_kind = "硬座";
      break;
    }
  case "硬卧":
    {
      seat_kind = "硬卧";
      break;
    }

  case "软卧":
    {
      seat_kind = "软卧";
      break;
    }
  case "无座":
    {
      seat_kind = "无座";
      break;
    }
  case "一等":
    {
      seat_kind = "一等";
      break;
    }
  case "二等":
    {
      seat_kind = "二等";
      break;
    }

  case "特等":
    {
      seat_kind = "特等";
      break;
    }

  case "高软":
    {
      seat_kind = "高软";
      break;
    }

  case "任意":
    {
      key_d = true;
      break;
    }
}
console.log(n_fact);
window.action.setOnTouchListener(function (view, event) {
  switch (event.getAction()) {
    case event.ACTION_DOWN:
      x = event.getRawX();
      y = event.getRawY();
      windowX = window.getX();
      windowY = window.getY();
      downTime = new Date().getTime();
      return true;
    case event.ACTION_MOVE:
      //移动手指时调整悬浮窗位置
      window.setPosition(windowX + (event.getRawX() - x),
        windowY + (event.getRawY() - y));
      //如果按下的时间超过1.5秒判断为长按，退出脚本
      if (new Date().getTime() - downTime > 1500) {
        exit();
      }
      return true;
    case event.ACTION_UP:
      //手指弹起时如果偏移很小则判断为点击
      if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
        onClick();
      }
      return true;
  }
  return true;
});


function onClick() {
  if (window.action.getText() == '开始') {

    threads.start(function () {
      //////////////////////////////

      while (true) {
        /*
        if (textOrDesc("提交订单").exists()) {
          break;
        }
        */
        console.hide();
        sleep(1000);

        swipe(m_v / 2, m_h * 0.35, m_v / 2, m_h * 0.7, 500);
        sleep(1500);
        if (desc("确认支付").exists()) {
          alert("龙小证已经为您抢到票了，请先点击停止脚本，然后自己快去支付吧!");
          while (true) {
            device.vibrate(500);
            sleep(3000);
          }
          break;
        }


        if (text("确认支付").exists()) {
          alert("龙小证已经为您抢到票了，请先点击停止脚本，然后自己快去支付吧!");
          while (true) {
            device.vibrate(500);
            sleep(3000);
          }
          break;
        }
        if (desc("提交订单").exists())
          desc("提交订单").click();

        if (text("提交订单").exists())
          text("提交订单").click();


        if (textOrDesc("加载中...").exists()) {
          console.log("加载中");
          sleep(1500);
          continue;
        }
        /*
        if (textOrDesc("温馨提示").exists()) {
          console.log("温馨提示");
          sleep(500);
          back();
          sleep(500);
          back();
        }
        */

        if (textOrDesc("温馨提示").exists() && (descContains("目前您还有处理的订单").exists() || textContains("目前您还有处理的订单").exists())) {
          console.log("温馨提示");
          sleep(500);
          back();
          sleep(500);
          back();
        }

        if (textOrDesc("温馨提示").exists() && (descContains("出票失败，对不起，由于您取消次数过多").exists() || textContains("出票失败，对不起，由于您取消次数过多").exists())) {
          alert("龙小证发现您取消次数过多,今天不能抢票了，明天再来!!再见");
          console.hide();
          exit();
        }
        console.show();
        console.log("进入循环");
        console.log(descEndsWith("张").findOne().desc());
        console.log(descEndsWith("张").findOne().desc().indexOf(seat_kind) >= 0) ;
        console.log(descEndsWith("张").find());

        if (!(desc("确认订单").exists() || text("确认订单").exists())) {
          if (descEndsWith("张").exists() || textEndsWith("有").exists() || descEndsWith("有").exists() || (textEndsWith("张").exists())) {
            sleep(500);
            console.log("执行点击");
            //textOrDesc(n_fact).findOne().click();
            if (descEndsWith("张").exists()){
              if(descEndsWith("张").findOne().desc().indexOf(seat_kind) >= 0) 
              descEndsWith("张").findOne().click();
            }
            







            if (descEndsWith("有").exists() && (descContains(seat_kind).exists() || key_d))
              descEndsWith("有").click();

            if (textEndsWith("张").exists() && (textContains(seat_kind).exists() || key_d))
              descEndsWith("张").click();
            if (textEndsWith("有").exists() && (textContains(seat_kind).exists() || key_d))
              descEndsWith("有").click();

            console.log("执行成功");
          }
          else {
            swipe(m_v / 2, m_h * 0.35, m_v / 2, m_h * 0.7, 500);
            sleep(1500);
          }
        }




      }




      //////////////////////////////
    });
    window.action.setText('暂停脚本');
  } else {
    threads.shutDownAll();
    //console.hide();
    window.action.setText('开始');
  }
}

function textOrDesc(str) {
  return enabled(true).filter(function (obj) {
    return str == obj.text() || str == obj.desc();
  });
}