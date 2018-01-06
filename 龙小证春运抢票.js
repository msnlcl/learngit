"auto";
var window = floaty.window( <
  frame >
  <
  button id = "action"
  text = "龙小证抢票开始运行"
  w = "auto"
  h = "auto"
  bg = "#77ffffff" / >
  <
  /frame>
);

setInterval(() => {}, 1000);

var execution = null;

//记录按键被按下时的触摸坐标
var x = 0,
  y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;


var seat_kind = "";
var n_fact = "";
seat_kind = rawInput("请输入需求的乘坐类型，如：硬座，一等座等");
switch (seat_kind) {
  case "硬座":
    {
      n_fact = "硬座:无";
    }
  case "硬座":
    {
      n_fact = "硬座:无";
    }

  case "硬座":
    {
      n_fact = "硬座:无";
    }
  case "硬座":
    {
      n_fact = "硬座:无";
    }
  case "硬座":
    {
      n_fact = "硬座:无";
    }
  case "硬座":
    {
      n_fact = "硬座:无";
    }




    window.action.setOnTouchListener(function(view, event) {
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
    console.show();

    function onClick() {
      if (window.action.getText() == '开始') {
        threads.start(function() {
          //在线程中每隔1秒打印"线程1"
          console.log(!desc(seat_kind + ':无').exists());
          //console.log("找到一个");

          while (true) {
            console.log("线程1");
            sleep(1000);
          }
        });


        console.log(x);
        console.log(y);
        window.action.setText('停止');
      } else {
        threads.shutDownAll();
        window.action.setText('开始');
      }
    }