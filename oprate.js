auto();

launch('com.tencent.mm');

const { width, height } = device;
setScreenMetrics(width, height);

sleep(500);
desc('搜索').findOne().click();

sleep(1000);
setText('camel_y');

sleep(500);
click('camel_y', 1);

sleep(1000);
id('b3q').findOne().click();

sleep(1000);

// const clickList = className('RelativeLayout').find()
// sleep(500)
click(width - 300, height - 600)

sleep(100);
// click('视频通话');


sleep(3000);
swipe(500, height - 10, 500, 1400, 1500);

sleep(1000);
swipe(400, height / 2 + 300, 10, height / 2 + 300, 500);

sleep(200);
home();