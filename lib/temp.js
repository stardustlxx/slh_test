function debugElemnetsAtView() {
	var view1 = window.scrollViews()[0];
	debugElemnetsAt(view1);
}

//对象类型判定
function isUIAElementNil(obj) {
	return isType(obj, "[object UIAElementNil]");
}
function isUIAButton(obj) {
	return isType(obj, "[object UIAButton]");
}
function isUIAStaticText(obj) {
	return isType(obj, "[object UIAStaticText]");
}
function isUIAScrollView(obj) {
	return isType(obj, "[object UIAScrollView]");
}
function isType(obj, typeName) {
	return Object.prototype.toString.call(obj) === typeName;
}


/*
for (var i = 0; i < texts.length; i++) {
	if (title1 == texts[i].value()) {
		title1IndexPre = title1Index;
		title1Index = i;
	}
	if (title == texts[i].value()) {
		titleIndexPre = titleIndex;
		titleIndex = i;
		// 已经搜索到标题的尽头
		var title1IndexNext = 2 * title1Index - title1IndexPre;
		if (title1IndexPre > 0
				&& titleIndexPre > 0
				&& title1Index - title1IndexPre == titleIndex
						- titleIndexPre && title1IndexNext < texts.length
				&& title1 != texts[title1IndexNext].value()) {
			break;
		}
	}
}
*/


function getDTQueryResultTitle(texts, title) {
	// 第一个标题是固定的
	var title1 = "序号";
	var title1IndexPre = 0;
	var title1Index = 0;
	// 找标题下标，标题结构很奇怪，有的第一遍是个全集，后面两遍是显示标题，也有的显示10遍同样的,还有中间穿插的
	var titleIndexPre = 0;
	var titleIndex = 0;

	var i = 0;
	while (i < texts.length) {
		// 先找序号的下标
		var index1 = getIndexFromStartIndex(texts, title1, i);
		if (index1 != -1) {
			i = index1;
			title1IndexPre = title1Index;
			title1Index = i;
			// 从index1位置继续开始找title
			var index = getIndexFromStartIndex(texts, title, index1);
			if (index != -1) {
				i = index;
				titleIndexPre = titleIndex;
				titleIndex = i;
			} else {
				break;
			}
		} else {
			break;
		}
	}
	if (titleIndex < title1Index) {
		logWarn(title+ "下标小于序号下标");
	}
	if (titleIndex - titleIndexPre != title1Index - title1IndexPre) {
		logWarn("标题总个数有误 titleIndex-titleIndexPre="+
				(titleIndex - titleIndexPre)+ "title1Index-title1IndexPre="+
				(title1Index - title1IndexPre));
	}

	var titleTotal = titleIndex - titleIndexPre; // 显示标题总个数
	var qrTitle = new DTQueryResultTitle(title, titleIndex, titleTotal);

	return qrTitle;
}

function getIndexFromStartIndex(texts, title, startIndex) {
	var ret = -1;
	for (var i = startIndex; i < texts.length; i++) {
		if (title === texts[i].value()) {
			ret = i;
			break;
		}
	}
	return ret;
}

/*
UIAWindow: rect:{{0, 0}, {1024, 768}}
	UIANavigationBar: name:商陆花 6.58 rect:{{0, 20}, {150, 44}}
		UIAStaticText: name:商陆花 6.58 value:商陆花 6.58 rect:{{8, 22}, {134, 40}}
	UIATableView: value:rows 1 to 14 of 14 rect:{{0, 0}, {150, 768}}
		UIATableCell: name:货品管理 value: rect:{{0, 64}, {150, 44}}
			UIAStaticText: name:货品管理 value:货品管理 rect:{{45, 69}, {100, 30}}
		。。。
		UIAImage: rect:{{5, 680}, {40, 40}} --刷新按钮
		UIAStaticText: value: rect:{{10, 680}, {140, 20}}
		UIAStaticText: name:刷新于: 09-09 09:50:55 value:刷新于: 09-09 09:50:55 rect:{{40, 690}, {140, 15}}
		UIAStaticText: name:货品 0   客户 0 value:货品 0   客户 0 rect:{{40, 705}, {140, 15}}
	UIAToolbar: rect:{{0, 768}, {150, 44}}
		UIAImage: rect:{{0, 767}, {150, 1}}
		UIAImage: rect:{{0, 768}, {150, 44}}
	UIAActivityIndicator: name:In progress value:1 rect:{{494, 366}, {37, 37}}
	UIAStaticText: rect:{{512, 403}, {0, 0}}
	UIANavigationBar: name:000,管理员,总经理 [常青店(test)36新] [jxh] rect:{{151, 20}, {873, 44}}
	UIAButton: name:客户查询 rect:{{153, 70}, {80, 30}}
	...
	UIAButton: name:新增物流商 rect:{{865, 70}, {80, 30}}
	UIATextField: value: rect:{{153, 110}, {170, 34}} --查询输入框
	。。。
	UIAScrollView: rect:{{153, 185}, {840, 600}}  --查询结果
	UIAImage: name:arrow_1.png rect:{{993, 227}, {15, 15}}
	UIAStaticText: name:黄色代表已停用 value:黄色代表已停用 rect:{{155, 725}, {730, 22}}
	UIAStaticText: name:共 1条 value:共 1条 rect:{{875, 725}, {80, 22}}
	UIAStaticText: name:1/1 value:1/1 rect:{{955, 725}, {220, 22}}
	UIAStaticText: name:每日23:00-23:30系统维护期间，请错开时间登录  V6.5895 value:每日23:00-23:30系统维护期间，请错开时间登录  V6.5895 rect:{{163, 745}, {400, 30}}
	UIAStaticText: name:客服 400-680-5685转2    编号 21154483  115.231. value:客服 400-680-5685转2    编号 21154483  115.231. rect:{{683, 745}, {350, 30}}
	UIAToolbar: rect:{{151, 768}, {873, 44}}
*/

/* 
 * nmh刷usr新
 *target.frontMostApp().mainWindow().tableViews()[0].staticTexts()[1].tapWithOptions({tapOffset:{x:0.43, y:0.93}});

 * 
*/

//等待直至文本数组长度超textsMaxLen，最多maxTimes次，每次1秒
function wait(textsMaxLen, maxTimes) {
	for (var i = 0; i < maxTimes; i++) {
		var texts = window.staticTexts();
		logDebug("texts.length=" + texts.length);
		if (texts.length > textsMaxLen) {
			break;
		} else {
			target.delay(1);
		}
	}
}

function logDebug() {
	if (debug) {
		var msg = Array.prototype.join.call(arguments, ' ');
		UIALogger.logDebug(msg);
	}
}

// ok=undefined

function testRefresh() {
//	debugArray(window.tableViews()[0].images());
//	window.tableViews()[0].images()[0].tap();
//	target.delay(10);

	//window.tableViews()[0].logElementTree();
	window.tableViews()[0].tapWithOptions({tapOffset:{x:0.17, y:0.92}});
	//myDelay();
	var cond="isIn(window.tableViews()[0].staticTexts()[1].value(),'刷新于')";
	waitUntil(cond);
	logInfo(window.tableViews()[0].staticTexts()[1].value());
	logInfo(isIn(window.tableViews()[0].staticTexts()[1].value(),'刷新于'));
	return true;
}