//zhangy <2397655091 at qq.com> 20151215
function testSystem001() {
    run("【系统设置—打印机】保存", "test210001");
    run("【系统设置—打印机】返回", "test210002");
    run("【系统设置—打印机】远程打印参数", "test210003");
    run("【系统设置—打印机】保存/返回/参数生效", "test210004_210005_210006");
    run("【系统设置—打印机】翻页/页码切换", "test210007_210008");
    run("【系统设置—全局设置】查询/清除", "test210010_210011");
    run("【系统设置—打印机】保存/返回/参数生效", "test210012_210013_210014");
    run("【系统设置—全局设置】翻页", "test210015_210016");
    run("【系统设置—打印机】条码打印机IP", "test210055");
    run("【系统设置—打印机】条码打印机端口", "test210056");
    run("【系统设置—打印机】快递单打印端口", "test210057");
    run("【系统设置—打印机】打印机端口", "test210065");
    run("【系统设置—小票信息】门店信息", "test210017");
    run("【系统设置—小票信息】保存", "test210018_1");
    run("【系统设置—小票信息】保存", "test210018_2");
    run("【系统设置—小票信息】保存", "test210018_3");
    run("【系统设置—小票信息】保存", "test210018_4");
    run("【系统设置—小票信息】保存", "test210018_5");
    run("【系统设置—小票信息】保存", "test210018_6");
    run("【系统设置—小票信息】保存", "test210018_7");
    run("【系统设置—刷新图像】刷新缩略图", "test210022");
    run("【系统设置—小票信息】【系统设置—清理本地】清理", "test210020_210021");
    run("【系统设置—刷新图像】刷新大图", "test210023");
    run("【系统设置—人员列表】查询", "test210024");
    run("【系统设置—人员列表】清除", "test210025");
    run("【系统设置—人员列表】【系统设置—人员列表】详细-修改保存", "test210027");
    run("【系统设置—人员列表】详细-启用/停用", "test210028_210029");
    run("【系统设置—人员列表】详细-返回", "test210031");
    run("【系统设置—新增人员】新增人员", "test210032");
    run("【系统设置—新增人员】返回", "test210033");
    run("【系统设置—新增人员】新增工号为0的员工", "test210034");
    run("【系统设置—人员列表】详细-密码重置", "test210030");
    run("【系统设置—改密码】关闭", "test210036");
    run("【系统设置—改密码】修改", "test210035");
    run("【系统设置】紧急模式上传异常", "test210061");
    run("【系统设置-全局参数】异地发货参数互斥", "test210063");
    run("【系统设置】设置本地参数为默认", "test210062");//
    run("【系统设置】数据清理授权", "test210043");//

    run("【系统设置】是否需要颜色尺码参数影响了颜色尺码下销售开单修改界面的颜色尺码显示", "test210039_210068");
    run("【系统设置】是否需要颜色尺码参数影响了颜色尺码下销售开单修改界面的颜色尺码显示", "test210039_1_210068");
    run("【系统设置】人员列表里同一工号显示多条记录，如988工号显示3条。", "test210041");
    
    run("【系统设置】参数互斥检查", "test210042");
    run("【系统设置-更多】门店停用规则", "test210067");
    run("【系统设置-更多】新增门店功能/【系统设置-更多】新增帐户功能", "test210069_210070");
    run("【系统设置-更多】刷卡或汇款帐户已经有6个后再新增帐户", "test210071");

}
function testSystem002() {
    run("【系统设置】", "testSystem002prepare");
    run("【系统设置】开单代收模式下,输入了代收金额,是否验证一定要选择物流商--验证", "test210045");
    run("【系统设置】开单代收模式下,输入了代收金额,是否验证一定要选择物流商--不验证", "test210046");
    run("【系统设置-全局参数】均色均码+打印小票以尺码为头部", "test210049");
    run("【系统设置-全局参数】均色均码+打印小票以尺码为头部", "test210049_1");
    run("【系统设置-全局参数】是否允许修改单据日期--不限制", "test210050");
    run("【系统设置-全局参数】是否允许修改单据日期--限制修改销售单日期", "test210051");
    run("【系统设置-全局参数】是否允许修改单据日期--限制修改销售单日期", "test210051_1");
    run("【系统设置-全局设置】是否允许修改单据日期--限制修改所有单据日期", "test210052");
    run("【系统设置-全局设置】是否允许修改单据日期--限制修改所有单据日期", "test210052_1");
    // run("【系统设置-全局设置】是否允许修改单据日期--限制修改所有单据日期",
    // "test210052_2");(已合并入test210052_1)
    // run("【系统设置－全局设置】“颜色尺码下，开单是否显示上次单价”与“是否启动上次成交价作为本次开单单价”", "test210053");
    // run("【系统设置－全局设置】“颜色尺码下，开单是否显示上次单价”与“是否启动上次成交价作为本次开单单价”", "test210053_1");
    // run("【系统设置－全局设置】“颜色尺码下，开单是否显示上次单价”与“是否启动上次成交价作为本次开单单价”", "test210053_2");
}
function testSystem002prepare() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-1), "日期到" : getDay(1), "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;
    for (var i = 0; i < total1; i++) {
        tapButton(getScrollView(), 0);
        tapButton(window, "盘点撤销");
        delay(5);

        tapButton(window, QUERY);
    }

    qr = getQR();
    var total2 = qr.total;
    var ret = false;
    if (total2 < 1) {
        ret = true;
    }

    return ret;
}
function test210001() {
    tapMenu("系统设置", "打印机");
    tapFirstText();
    var r = getRandomInt(10000);
    var ip = getRandomInt(100) + ".0.0.1";
    var f = new TField("数值", TF, 2, r);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "IP地址错误");

    f = new TField("数值", TF, 2, ip);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);
    var qr = getQR();
    ret = isAnd(ret, isEqual(ip, qr.data[0]["数值"]));

    var texts = getStaticTexts(getScrollView());
    var i = getArrayIndexIn(texts, "print_port");
    var ok = tap(texts[i]);

    // tapTextByFirstWithName("2");
    f = new TField("数值", TF, 2, r);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);

    qr = getQR();
    ret = isAnd(ret, isEqual(r, qr.data[1]["数值"]));

    tapMenu("系统设置", "打印机");
    tapFirstText();
    tapButton(getScrollView(), "本 机");
    var ret1 = isEqual("127.0.0.1", getTextFieldValue(getScrollView(), 2));
    tapButtonAndAlert(SAVE, OK);
    delay();

    tapMenu("系统设置", "打印机");
    tapFirstText();
    var ret2 = isEqual("127.0.0.1", getTextFieldValue(getScrollView(), 2));
    tapReturn();

    return ret && ret1 && ret2;
}
function test210002() {
    tapMenu("系统设置", "打印机");
    var qr = getQR();
    var jo1 = qr.data[0];

    tapFirstText();
    tapButton(window, RETURN);
    qr = getQR();
    var jo2 = qr.data[0];

    return isEqualObject(jo1, jo2);
}
function test210003() {
    var qo, o, ret = true;
    qo = { "备注" : "远程" };
    o = { "新值" : "1", "数值" : [ "支持本地和远程同时打印", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("系统设置", "打印机");
    var qr = getQR();
    var ret1 = isAnd(isEqual(7, qr.total), isEqual(7, qr.data.length), isEqual(
            "商陆花远程打印iPad地址，保存后请重新登录商陆花", qr.data[6]["备注"]));

    var texts = getStaticTexts(getScrollView());
    var i = getArrayIndexIn(texts, "sc_remote_mac");
    var ok = tap(texts[i]);

    // var r = "ac:29:3a:9f:22";
    // var f = new TField("数值", TF, 2, r);
    // setTFieldsValue(getScrollView(), [ f ]);
    // delay();
    // tapButtonAndAlert(SAVE, OK);
    // tapPrompt();
    // var ret2 = isIn(alertMsg, "MAC地址非法");

    var ip = "ac:29:3a:9f:22:3b";
    var f = new TField("数值", TF, 2, ip);
    setTFieldsValue(getScrollView(), [ f ]);
    delay();
    tapButtonAndAlert(SAVE, OK);
    delay();

    tapMenu("系统设置", "打印机");
    var qr = getQR();
    var ret3 = isEqual(ip, qr.data[6]["数值"]);

    // var qo, o, ret = true;
    qo = { "备注" : "远程" };
    o = { "新值" : "0", "数值" : [ "默认本地打印", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("系统设置", "打印机");
    var qr = getQR();

    var ret4 = isAnd(isEqual(6, qr.total), isEqual(6, qr.data.length));

    return ret && ret1 && ret3 && ret4;// && ret2
}
function test210004_210005_210006() {
    var qo, o, ret = true;
    qo = { "备注" : "打印份数" };
    o = { "新值" : "3", "数值" : [ "3", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapFirstText();
    var ret1 = isEqual(3, getTextFieldValue(getScrollView(), 2));

    tapReturn();

    qo = { "备注" : "打印份数" };
    o = { "新值" : "2", "数值" : [ "2", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    return ret && ret1;
}
function test210007_210008() {
    tapMenu("系统设置", "本地设置");

    var ret = goPageCheck();

    return ret;
}
function test210010_210011() {
    tapMenu("系统设置", "全局设置");
    var keys = { "名称" : "ignorecolorsize" };
    var fields = querySystemGlobalFields(keys);
    query(fields);
    var qr = getQR();

    var ret = isEqual("是否需要颜色尺码", qr.data[0]["备注"]);

    keys = { "备注" : "是否需要颜色尺码" };
    fields = querySystemGlobalFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual("是否需要颜色尺码", qr.data[0]["备注"]), isEqual(
            "ignorecolorsize", qr.data[0]["名称"]));

    keys = { "类别" : "销售" };
    fields = querySystemGlobalFields(keys);
    query(fields);
    qr = getQR();
    var len = qr.data.length;
    var ret2 = false;
    for (var i = 0; i <= len - 1; i++) {
        var s = qr.data[i]["备注"];
        if (isEqual("开单模式", s)) {
            ret2 = true;
            break;
        }
    }

    keys = { "名称" : "ignorecolorsize", "备注" : "是否需要颜色尺码", "类别" : "综合" };
    fields = querySystemGlobalFields(keys);
    query(fields);
    qr = getQR();

    var ret3 = isAnd(isEqual("是否需要颜色尺码", qr.data[0]["备注"]), isEqual(
            "ignorecolorsize", qr.data[0]["名称"]));

    tapButton(window, CLEAR);
    var b = getTextFieldValue(window, 0);
    var b1 = getTextFieldValue(window, 1);
    var b2 = getTextFieldValue(window, 2);

    var ret4 = isAnd(isEqual("", b), isEqual("", b1), isEqual("", b2));

    return ret && ret1 && ret2 && ret3 && ret4;
}
function test210012_210013_210014() {
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "1", "数值" : [ "货品单价精确到角", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapFirstText();
    var ret1 = isIn(getTextFieldValue(getScrollView(), 2), "货品单价精确到角");

    tapReturn();

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapFirstText();
    var ret2 = isIn(getTextFieldValue(getScrollView(), 2), "货品单价精确到元");

    tapReturn();

    return ret && ret1 && ret2;
}
function test210015_210016() {
    tapMenu("系统设置", "全局设置");

    query();

    var ret = goPageCheck();

    return ret;
}
function test210017() {
    tapMenu("系统设置", "小票信息");

    tapMenu("系统设置", "小票信息");
    var qr = getQR();
    var ret = isAnd(isEqualQRData1ByTitle(qr, "门店", "常青店"),
            isEqualQRData1ByTitle(qr, "门店", "中洲店"), isEqualQRData1ByTitle(qr,
                    "门店", "仓库店"));
    return ret;
}
function test210018_1() {
    tapMenu("系统设置", "小票信息");

    tapFirstText();
    var f1 = new TField("电话", TF, 1, "111111111111");
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, CANCEL);

    tapReturn();

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var ret = isEqual("027123456789", a);

    f1 = new TField("电话", TF, 1, "111111111111");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 1);
    var ret1 = isEqual("111111111111", b);

    f1 = new TField("电话", TF, 1, "027123456789");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    return ret && ret1;
}
function test210018_2() {
    tapMenu("系统设置", "小票信息");

    tapFirstText();
    var f1 = new TField("小票抬头", TF, 0, "Sunshine");
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, CANCEL);

    tapReturn();

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 0);
    var ret = isEqual("Singlesnew", a);

    f1 = new TField("小票抬头", TF, 0, "Sunshine");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 0);
    var ret1 = isEqual("Sunshine", b);

    f1 = new TField("小票抬头", TF, 0, "Singlesnew");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test210018_3() {
    tapMenu("系统设置", "小票信息");

    tapFirstText();
    var f1 = new TField("手机", TF, 2, "222222");
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, CANCEL);

    tapReturn();

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 2);
    var ret = isEqual("123456789012-1-3", a);

    f1 = new TField("手机", TF, 2, "222222");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 2);
    var ret1 = isEqual("222222", b);

    f1 = new TField("手机", TF, 2, "123456789012-1-3");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    return ret && ret1;
}
function test210018_4() {
    tapMenu("系统设置", "小票信息");

    tapFirstText();
    var f1 = new TField("地址", TF, 3, "香榭12f");
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, CANCEL);

    tapReturn();

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 3);
    var ret = isEqual("杭州 出门 m", a);

    f1 = new TField("地址", TF, 3, "香榭12f");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 3);
    var ret1 = isEqual("香榭12f", b);

    f1 = new TField("地址", TF, 3, "杭州 出门 m");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    return ret && ret1;
}
function test210018_5() {
    tapMenu("系统设置", "小票信息");

    tapFirstText();
    var f1 = new TField("户名", TF, 4, "习近平12p");
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, CANCEL);

    tapReturn();

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 4);
    var ret = isEqual("李开复-1-3-4", a);

    f1 = new TField("户名", TF, 4, "习近平12p");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("习近平12p", b);

    f1 = new TField("户名", TF, 4, "李开复-1-3-4");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    return ret && ret1;
}
function test210018_6() {
    tapMenu("系统设置", "小票信息");

    tapFirstText();
    var f1 = new TField("帐号", TF, 5, "建行6227000943230037636");
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, CANCEL);

    tapReturn();

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 5);
    var ret = isEqual("农行 14233232443-1-3", a);

    f1 = new TField("帐号", TF, 5, "建行6227000943230037636");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 5);
    var ret1 = isEqual("建行6227000943230037636", b);

    f1 = new TField("帐号", TF, 5, "农行 14233232443-1-3");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    return ret && ret1;
}
function test210018_7() {
    tapMenu("系统设置", "小票信息");

    tapFirstText();
    var f1 = new TField("备注", TV, 0, "香榭12f");
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, CANCEL);

    tapReturn();

    tapFirstText();
    var a = getTextViewValue(getScrollView(), 0);
    var ret = isEqual("备注打印成明细了，验证中31", a);

    f1 = new TField("备注", TV, 0, "香榭12f");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapFirstText();
    var b = getTextViewValue(getScrollView(), 0);
    var ret1 = isEqual("香榭12f", b);

    f1 = new TField("备注", TV, 0, "备注打印成明细了，验证中31");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    return ret && ret1;
}
function test210022() {
    tapMenu("系统设置", "刷新图像");

    var ret1 = false;
    var bt = app.mainWindow().buttons()["刷新缩略图"];
    if (bt = isUIAButton) {
        ret1 = true;
    }

    tapNaviLeftButton();

    return ret1;

    // tapButtonAndAlert("刷新缩略图", OK);
    // tapPrompt();
    //
    // var cond = "isIn(alertMsg, '操作成功')";
    // waitUntil(cond, 300);
    //
    // var ret = isIn(alertMsg, "操作成功");
    //
    // tapNaviLeftButton();
    //
    // return ret;
}
function test210020_210021() {
    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);

    var ret = isIn(alertMsg, "清理和刷新成功");

    return ret;
}
function test210020Clear() {
    tapMenu("系统设置", "清理本地");
}
function test210023() {
    tapMenu("系统设置", "刷新图像");

    var ret1 = false;
    var bt = app.mainWindow().buttons()["刷新大图"];
    if (bt = isUIAButton) {
        ret1 = true;
    }

    tapNaviLeftButton();

    return ret1;

    // tapButtonAndAlert("刷新大图", OK);
    // tapPrompt();
    //
    // var cond = "isIn(alertMsg, '操作成功')";
    // waitUntil(cond, 300);
    //
    // var ret = isIn(alertMsg, "操作成功");
    //
    // tapNaviLeftButton();
    //
    // return ret;
}
function test210024() {
    tapMenu("系统设置", "人员列表");

    var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["工号"];
    var a1 = qr.data[0]["姓名"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["岗位"];

    var ret = isAnd(isEqual("000", a), isEqual("总经理", a1), isEqual("常青店", a2),
            isEqual("总经理", a3));

    return ret;
}
function test210025() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 0)), isEqual("", getTextFieldValue(
            window, 0)), isEqual("", getTextFieldValue(window, 0)));

    return ret;
}
function test210027() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "005", "是否停用" : "否", "姓名" : "开单员", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    tapFirstText();

    var f1 = new TField("工号", TF, 0, "004");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert("修改保存", OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "工号已存在")) {
        ret = true;
    }

    var r = getRandomInt(10000);
    f1 = new TField("工号", TF, 0, "y" + r);
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert("修改保存", OK);

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "y" + r, "是否停用" : "否", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isEqual("y" + r, qr.data[0]["工号"]);

    tapFirstText();

    f1 = new TField("工号", TF, 0, "005");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert("修改保存", OK);

    return ret;
}
function test210028_210029() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "005", "是否停用" : "否" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    tapFirstText();
    tapButtonAndAlert("停 用", CANCEL);
    var ret = isEqual("005", getTextFieldValue(getScrollView(), 0));

    tapButtonAndAlert("停 用", OK);

    keys = { "是否停用" : "是" };
    fields = querySystemStaffFields(keys);
    query(fields);

    tapFirstText();
    ret = isAnd(isEqual("005", getTextFieldValue(getScrollView(), 0)), isEqual(
            "开单员", getTextFieldValue(getScrollView(), 1)));

    tapButtonAndAlert("启 用", CANCEL);
    ret = isAnd(isEqual("005", getTextFieldValue(getScrollView(), 0)), isEqual(
            "开单员", getTextFieldValue(getScrollView(), 1)));

    tapButtonAndAlert("启 用", OK);

    keys = { "是否停用" : "否" };
    fields = querySystemStaffFields(keys);
    query(fields);
    tapFirstText();
    ret = isAnd(isEqual("005", getTextFieldValue(getScrollView(), 0)), isEqual(
            "开单员005", getTextFieldValue(getScrollView(), 1)));

    tapReturn();

    return ret;
}
function test210030() {
    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "000000");
    var f1 = new TField("新密码", TF_S, 1, "222222");
    var f2 = new TField("确认密码", TF_S, 2, "222222");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "000", "是否停用" : "否" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    tapFirstText();
    tapButtonAndAlert("密码重置", OK);

    var ret = false;
    if (isIn(alertMsg, "密码会重置为000000")) {
        ret = true;
    }

    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "000000");
    var f1 = new TField("新密码", TF_S, 1, "222222");
    var f2 = new TField("确认密码", TF_S, 2, "222222");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "操作成功")) {
        ret1 = true;
    }
    tapButton(window, "关 闭");

    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "222222");
    var f1 = new TField("新密码", TF_S, 1, "000000");
    var f2 = new TField("确认密码", TF_S, 2, "000000");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    var ret2 = isIn(alertMsg, "操作成功");

    tapButton(window, "关 闭");

    return ret && ret1 && ret2;
}
function test210031() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "005", "是否停用" : "否" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    tapFirstText();

    tapReturn();

    var qr = getQR();

    var ret = isAnd(isEqual("005", qr.data[0]["工号"]), isEqual("开单员005",
            qr.data[0]["姓名"]), isEqual("常青店", qr.data[0]["门店"]), isEqual("开单员",
            qr.data[0]["岗位"]), isEqual("1", qr.data[0]["序号"]));

    return ret;
}
function test210032() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "001", "是否停用" : "否", "姓名" : "财务员" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    var qr = getQR();

    var ret = isAnd(isEqual("001", qr.data[0]["工号"]), isEqual("财务员",
            qr.data[0]["姓名"]), isEqual("常青店", qr.data[0]["门店"]), isEqual("财务员",
            qr.data[0]["岗位"]));

    tapMenu("系统设置", "新增人员");
    var f0 = new TField("工号", TF, 0, "001");
    var f1 = new TField("姓名", TF, 1, "财务员");
    var f2 = new TField("门店", BTN_SC, 0, "常青店");
    var f3 = new TField("岗位", BTN_SC, 1, "财务员");
    var fields = [ f0, f1, f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "工号已存在，请选择另外一个")) {
        ret1 = true;
    }

    var r = getTimestamp(4);
    f0 = new TField("工号", TF, 0, "y" + r);
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "y" + r, "是否停用" : "否" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isAnd(isEqual("y" + r, qr.data[0]["工号"]), isEqual("财务员",
            qr.data[0]["姓名"]), isEqual("常青店", qr.data[0]["门店"]), isEqual("财务员",
            qr.data[0]["岗位"]));

    tapFirstText();
    tapButtonAndAlert("停 用", OK);

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "y" + r, "是否停用" : "是" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    qr = getQR();
    var a = qr.data[0]["工号"];
    var a1 = qr.data[0]["姓名"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["岗位"];

    tapFirstText();
    var gh = getTextFieldValue(getScrollView(), 0);
    var xm = getTextFieldValue(getScrollView(), 1);
    var md = getTextFieldValue(getScrollView(), 2);
    var gw = getTextFieldValue(getScrollView(), 3);

    tapReturn();

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "2001", "是否停用" : "是" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    qr = getQR();

    var ret3 = isAnd(isEqual("y" + r, a), isEqual("财务员", a1),
            isEqual("常青店", a2), isEqual("财务员", a3), isEqual("y" + r, gh),
            isEqual("财务员", xm), isEqual("常青店", md), isEqual("财务员", gw),
            isEqual("2001", qr.data[0]["工号"]), isEqual("总经理2001",
                    qr.data[0]["姓名"]), isEqual("常青店", qr.data[0]["门店"]),
            isEqual("总经理", qr.data[0]["岗位"]));

    tapMenu("系统设置", "新增人员");
    var f0 = new TField("工号", TF, 0, "2001");
    var f1 = new TField("姓名", TF, 1, "财务员");
    var f2 = new TField("门店", BTN_SC, 0, "常青店");
    var f3 = new TField("岗位", BTN_SC, 1, "财务员");
    var fields = [ f0, f1, f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret4 = (isIn(alertMsg, "工号已存在，请选择另外一个"));

    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test210033() {
    tapMenu("系统设置", "新增人员");
    var r = getRandomInt(10000);
    var f0 = new TField("工号", TF, 0, "y" + r);
    var f1 = new TField("姓名", TF, 1, "财务员");
    var f2 = new TField("门店", BTN_SC, 0, "常青店");
    var f3 = new TField("岗位", BTN_SC, 1, "财务员");
    var fields = [ f0, f1, f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapReturn();

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "y" + r, "是否停用" : "否" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    var qr = getQR();

    var ret = isEqual(0, qr.data.length);

    return ret;
}
function test210034() {
    tapMenu("系统设置", "新增人员");
    var f0 = new TField("工号", TF, 0, "0");
    var f1 = new TField("姓名", TF, 1, "财务员");
    var f2 = new TField("门店", BTN_SC, 0, "常青店");
    var f3 = new TField("岗位", BTN_SC, 1, "财务员");
    var fields = [ f0, f1, f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "工号不能为0")) {
        ret = true;
    }

    tapReturn();

    return ret;
}
function test210035() {
    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "000000");
    var f1 = new TField("新密码", TF_S, 1, "111");
    var f2 = new TField("确认密码", TF_S, 2, "111");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "密码必须为6位")) {
        ret = true;
    }

    tapButton(window, "关 闭");
    delay();

    tapMenu("系统设置", "改密码");
    f0 = new TField("原密码", TF_S, 0, "000000");
    f1 = new TField("新密码", TF_S, 1, "");
    f2 = new TField("确认密码", TF_S, 2, "");
    fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    if (isIn(alertMsg, "密码必须为6位")) {
        ret = true;
    }
    tapButton(window, "关 闭");

    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "000001");
    var f1 = new TField("新密码", TF_S, 1, "111111");
    var f2 = new TField("确认密码", TF_S, 2, "111111");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    if (isIn(alertMsg, "请确认原密码是否正确")) {
        ret = true;
    }
    tapButton(window, "关 闭");

    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "000000");
    var f1 = new TField("新密码", TF_S, 1, "111111");
    var f2 = new TField("确认密码", TF_S, 2, "111112");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    if (isIn(alertMsg, "再次输入都密码不同")) {
        ret = true;
    }
    tapButton(window, "关 闭");

    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "000000");
    var f1 = new TField("新密码", TF_S, 1, "222222");
    var f2 = new TField("确认密码", TF_S, 2, "222222");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    if (isIn(alertMsg, "操作成功")) {
        ret = true;
    }
    tapButton(window, "关 闭");

    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "222222");
    var f1 = new TField("新密码", TF_S, 1, "000000");
    var f2 = new TField("确认密码", TF_S, 2, "000000");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    var ret1 = isIn(alertMsg, "操作成功");

    tapButton(window, "关 闭");

    // tapMenu("系统设置", "人员列表");
    // var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    // var fields = querySystemStaffFields(keys);
    // query(fields);
    //
    // tapFirstText();
    // tapButtonAndAlert("密码重置", OK);

    return ret && ret1;
}
function test210036() {
    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "000000");
    var f1 = new TField("新密码", TF_S, 1, "222222");
    var f2 = new TField("确认密码", TF_S, 2, "222222");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, "关 闭");

    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "000000");
    var f1 = new TField("新密码", TF_S, 1, "222222");
    var f2 = new TField("确认密码", TF_S, 2, "222222");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "操作成功")) {
        ret = true;
    }
    tapButton(window, "关 闭");

    tapMenu("系统设置", "改密码");
    var f0 = new TField("原密码", TF_S, 0, "222222");
    var f1 = new TField("新密码", TF_S, 1, "000000");
    var f2 = new TField("确认密码", TF_S, 2, "000000");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButton(window, OK);
    tapPrompt();

    var ret1 = isIn(alertMsg, "操作成功");

    tapButton(window, "关 闭");

    // tapMenu("系统设置", "人员列表");
    // var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    // var fields = querySystemStaffFields(keys);
    // query(fields);
    //
    // tapFirstText();
    // tapButtonAndAlert("密码重置", OK);

    return ret && ret1;
}
function test210039_210068() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否显示颜色尺码字样" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 5, 6 ] },
                { "货品" : "x003", "数量" : [ 1, 2 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();
    var ret = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(14,
            qr.data[0]["数量"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    tapFirstText();
    var ret1 = isAnd(
            isEqual("X001,特步夹克", getTextFieldValue(getScrollView(), 0)),
            isEqual("红色", getTextFieldValue(getScrollView(), 1)), isEqual("L",
                    getTextFieldValue(getScrollView(), 2)), isEqual(5,
                    getTextFieldValue(getScrollView(), 3)), isEqual(
                    "X001,特步夹克", getTextFieldValue(getScrollView(), 7)),
            isEqual("红色", getTextFieldValue(getScrollView(), 8)), isEqual("XL",
                    getTextFieldValue(getScrollView(), 9)), isEqual(6,
                    getTextFieldValue(getScrollView(), 10)), isEqual(
                    "X003,特步登山服", getTextFieldValue(getScrollView(), 14)),
            isEqual("黄色", getTextFieldValue(getScrollView(), 15)), isEqual("L",
                    getTextFieldValue(getScrollView(), 16)), isEqual(1,
                    getTextFieldValue(getScrollView(), 17)), isEqual(
                    "X003,特步登山服", getTextFieldValue(getScrollView(), 21)),
            isEqual("黄色", getTextFieldValue(getScrollView(), 22)), isEqual(
                    "XL", getTextFieldValue(getScrollView(), 23)), isEqual(2,
                    getTextFieldValue(getScrollView(), 24)));

    tapReturn();

    delay(3);

    tapMenu("系统设置", "全局设置");

    var f1 = new TField("备注", TF, 1, "是否显示颜色尺码字样");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);

    tapButton(window, QUERY);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "0,不显示" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret2 = false;
    if (isIn(alertMsg, "关闭显示颜色尺码字样必须开启均色均码模式")) {
        ret2 = true;
    }

    tapReturn();

    // qo = { "备注" : "是否显示颜色尺码字样" };
    // o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // tapMenu("销售开单", "按批次查");
    // query();
    //
    // var qr = getQR();
    // var ret = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(14,
    // qr.data[0]["数量"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]),
    // 0.5);
    //
    // tapFirstText();
    // var ret1 = isAnd(
    // isEqual("X001,特步夹克", getTextFieldValue(getScrollView(), 0)),
    // isEqual("", getTextFieldValue(getScrollView(), 1)), isEqual("",
    // getTextFieldValue(getScrollView(), 2)), isEqual(5,
    // getTextFieldValue(getScrollView(), 3)), isEqual(
    // "X001,特步夹克", getTextFieldValue(getScrollView(), 7)),
    // isEqual("", getTextFieldValue(getScrollView(), 8)), isEqual("",
    // getTextFieldValue(getScrollView(), 9)), isEqual(6,
    // getTextFieldValue(getScrollView(), 10)), isEqual(
    // "X003,特步登山服", getTextFieldValue(getScrollView(), 14)),
    // isEqual("", getTextFieldValue(getScrollView(), 15)), isEqual("",
    // getTextFieldValue(getScrollView(), 16)), isEqual(1,
    // getTextFieldValue(getScrollView(), 17)), isEqual(
    // "X003,特步登山服", getTextFieldValue(getScrollView(), 21)),
    // isEqual("", getTextFieldValue(getScrollView(), 22)), isEqual("",
    // getTextFieldValue(getScrollView(), 23)), isEqual(2,
    // getTextFieldValue(getScrollView(), 24)));
    //
    // tapReturn();
    //
    // qo = { "备注" : "是否需要颜色尺码" };
    // o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test210039_1_210068() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否显示颜色尺码字样" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k200", "数量" : "1", "备注" : "mxbz" },
                { "货品" : "3035", "数量" : "1", "备注" : "mxbz1" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesQueryBatchFields(keys);

    tapFirstText();
    var ret = isAnd(isEqual("", getTextFieldValue(getScrollView(), 1)),
            isEqual("", getTextFieldValue(getScrollView(), 2)), isEqual("",
                    getTextFieldValue(getScrollView(), 8)), isEqual("",
                    getTextFieldValue(getScrollView(), 9)));

    tapReturn();

    qo = { "备注" : "是否显示颜色尺码字样" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    var ret1 = isAnd(isEqual("均色", getTextFieldValue(getScrollView(), 1)),
            isEqual("均码", getTextFieldValue(getScrollView(), 2)), isEqual("均色",
                    getTextFieldValue(getScrollView(), 8)), isEqual("均码",
                    getTextFieldValue(getScrollView(), 9)));

    tapReturn();

    return ret && ret1;
}

function test210041() {
    tapMenu("系统设置", "人员列表");
    var keys = { "是否停用" : "否" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    var qr = getQR();

    var len = qr.data.length;
    var ret = false;
    for (var i = 0; i <= len - 2; i++) {
        var h = qr.data[i]["工号"];
        var h1 = qr.data[i + 1]["工号"];
        var g = qr.data[i]["岗位"];
        var g1 = qr.data[i + 1]["岗位"];

        if (!isEqual(h1, h)) {
            ret = true;
        } else {
            if (!isEqual(g1, g)) {
                ret = true;
            }
        }
    }

    return ret;
}
function test210042() {
    var qo, o, ret = true;
    qo = { "备注" : "建款" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var menu1 = "系统设置";
    var menu2 = "全局设置";
    tapMenu(menu1, menu2);

    qo = { "备注" : "价格模式" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "不同门店不同的价格体系", "in" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "[【不同门店不同的价格体系】的价格模式与【省代价格模式】的货品建款的价格模式，不能同时存在]")) {
        ret = true;
    }
    delay();
    tapReturn();

    qo = { "备注" : "建款" };
    o = { "新值" : "0", "数值" : [ "默认价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "建款" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "省代价格模式", "in" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "[【不同门店不同的价格体系】的价格模式与【省代价格模式】的货品建款的价格模式，不能同时存在]")) {
        ret1 = true;
    }

    tapReturn();

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    delay();

    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);

    var ret3 = isIn(alertMsg, "清理和刷新成功");

    return ret && ret1 && ret3;
}
function test210043() {
    tapMenu1("系统设置");
    tapMenu2(More);
    tapMenu3("数据清理授权");

    var f0 = new TField("服务描述", TV, 0, "数据清理授权");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapNaviRightButton();
    var ret = isEqual(null, getTextViewValue(window, 0));

    var f0 = new TField("服务描述", TV, 0, "数据清理授权aa");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapKeyboardHide();
    tapButton(window, "保存");
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "操作成功")) {
        ret1 = true;
    }
    tapReturn();

    tapNaviLeftButton();

    return ret && ret1;
}
function test210045() {
    var qo, o, ret = true;
    qo = { "备注" : "是否验证一定要选择物流商" };
    o = { "新值" : "1", "数值" : [ "默认验证", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapStaticText(window, "代收");
    delay();

    tapNaviLeftButton();

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "必须选择物流商")) {
        ret = true;
    }

    tapReturn();

    return ret;
}
function test210046() {
    var qo, o, ret = true;
    qo = { "备注" : "物流商" };
    o = { "新值" : "0", "数值" : [ "不验证" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapStaticText(window, "代收");
    delay();

    tapNaviLeftButton();

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "保存成功")) {
        ret = true;
    }

    tapReturn();

    return ret;
}
function test210049() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var menu1 = "系统设置";
    var menu2 = "全局设置";
    tapMenu(menu1, menu2);

    qo = { "备注" : "打印小票" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "以尺码为小票明细的头部", "in" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret = false;
    if (isIn(alertMsg,
            "当参数“是否需要颜色尺码” 设置为”默认均色均码“时，“打印小票是否以尺码为头部”不允许设置为”以尺码为小票明细的头部")) {
        ret = true;
    }

    tapReturn();

    return ret;
}
function test210049_1() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "打印小票" };
    o = { "新值" : "1", "数值" : [ "以尺码为小票明细的头部", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "默认均色均码", "in" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret1 = (isIn(alertMsg,
            "当参数“是否需要颜色尺码” 设置为”默认均色均码“时，“打印小票是否以尺码为头部”不允许设置为”以尺码为小票明细的头部"));

    tapReturn();

    qo = { "备注" : "打印小票" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test210050() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "0", "数值" : [ "默认不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getDay(1), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var f9 = new TField("日期", TF_DT, 9, getToday());
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    delay();

    var ret1 = isIn(alertMsg, "保存成功");

    delay();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    delay();

    var ret2 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getDay(1) };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var f9 = new TField("日期", TF_DT, 9, getToday());
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret3 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购订货", "按批次查");
    var keys = { "厂商" : "Rt", "日期从" : getToday(), "日期到" : getDay(1),
        "门店" : "常青店" }
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var ret4 = isAnd(isIn(getDay(1), qr.data[0]["日期"]), isEqual("Rt",
            qr.data[0]["厂商"]), isEqual(20, qr.data[0]["总数"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 1));

    tapFirstText();

    var f9 = new TField("日期", TF_DT, 8, getToday());
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret5 = isIn(alertMsg, "操作成功");

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 8, getDay(1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret6 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getDay(1), "门店" : "常青店",
        "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var f9 = new TField("日期", TF_DT, 8, getToday());
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    delay();

    var ret7 = isIn(alertMsg, "操作成功");

    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("数量", TF_SC, 1, "中洲店");
    var f2 = new TField("日期", TF_DT, 2, getDay(1));
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    var f2 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields = [ f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret8 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getDay(1), "调出门店" : "常青店" };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var f2 = new TField("日期", TF_DT, 2, getToday());
    var fields = [ f2 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret9 = isIn(alertMsg, "操作成功");

    tapReturn();

    logDebug(" ret8=" + ret8 + ", ret9=" + ret9);

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();

    var f8 = new TField("日期", TF_DT, 8, getDay(1));
    var fields = [ f8 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret10 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var f10 = new TField("日期", TF_DT, 10, getDay(1));
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    delay();

    var ret11 = isIn(alertMsg, "保存成功");

    delay();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7 + ", ret8=" + ret8 + ", ret9=" + ret9
            + ", ret10=" + ret10 + ", ret11=" + ret11);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9 && ret10 && ret11;
}
function test210051() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "1", "数值" : [ "限制修改销售单日期", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "系统设定不允许修改开单日期");

    var f7 = new TField("日期", TF_AC, 7, "k300");
    var f10 = new TField("日期", TF, 10, 12);
    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);

    var f9 = new TField("日期", TF_DT, 9, getToday());
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f9 = new TField("日期", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "系统设定不允许修改开单日期");
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var f10 = new TField("日期", TF_DT, 10, getDay(-1));
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "系统设定不允许修改开单日期");

    tapReturn();

    return ret && ret1 && ret2;
}
function test210051_1() {
    // 检查销售以外的模块修改日期不受此参数控制,采购订货没有“保存成功”提示弹窗，所以在按批次查界面进行查询
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "1", "数值" : [ "限制修改销售单日期", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "保存成功");
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购订货", "按批次查");
    var keys = { "厂商" : "Rt", "日期从" : getToday(), "日期到" : getDay(1),
        "门店" : "常青店" }
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var ret1 = isAnd(isIn(getDay(1), qr.data[0]["日期"]), isEqual("Rt",
            qr.data[0]["厂商"]), isEqual(20, qr.data[0]["总数"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 1));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 8, getDay(1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "保存成功");
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("数量", TF_SC, 1, "中洲店");
    var f2 = new TField("日期", TF_DT, 2, getDay(1));
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    var f2 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields = [ f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret3 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();

    var f8 = new TField("日期", TF_DT, 8, getDay(1));
    var fields = [ f8 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret4 = false;
    if (isIn(alertMsg, "保存成功")) {
        ret4 = true;
    }
    tapReturn();

    return ret && ret1 && ret2 && ret3 && ret4;
}
function test210052() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "2", "数值" : [ "限制修改所有单据日期", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret = true;
    }
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 8, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret3 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret3 = true;
    }
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("数量", TF_SC, 1, "中洲店");
    var f2 = new TField("日期", TF_DT, 2, getDay(1));
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    var f2 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields = [ f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret4 = isIn(alertMsg, "系统设定不允许修改开单日期");

    tapReturn();

    return ret && ret1 && ret2 && ret3 && ret4;
}
function test210052_1() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "2", "数值" : [ "限制修改所有单据日期", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f9 = new TField("日期", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret = true;
    }
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();

    var f9 = new TField("日期", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var f10 = new TField("日期", TF_DT, 10, getDay(-1));
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret5 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret5 = true;
    }
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();

    var f9 = new TField("日期", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();

    var f8 = new TField("日期", TF_DT, 8, getDay(-1));
    var fields = [ f8 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret4 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret4 = true;
    }
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var f8 = new TField("日期", TF_DT, 8, getDay(-1));
    var fields = [ f8 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret3 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret3 = true;
    }
    tapReturn();

    logDebug(", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test210052_2() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "2", "数值" : [ "限制修改所有单据日期", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var f10 = new TField("日期", TF_DT, 10, getDay(-1));
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret = true;
    }
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();

    var f8 = new TField("日期", TF_DT, 8, getDay(-1));
    var fields = [ f8 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "系统设定不允许修改开单日期")) {
        ret1 = true;
    }
    tapReturn();

    return ret && ret1;
}
function test210053() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "1,启用", "in" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "操作失败，[开启启用上次成交价作为本次开单单价时，必须先开启颜色尺码下，开单显示上次单价] ")) {
        ret1 = true;
    }

    tapReturn();

    return ret && ret1;
}
function test210053_1() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "上次单价" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "不显示", "in" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "操作失败，[关闭颜色尺码下，开单显示上次单价时，必须先关闭启用上次成交价作为本次开单单价]")) {
        ret1 = true;
    }

    tapReturn();

    return ret && ret1
}
function test210053_2() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "1,启用" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret1 = true;
    if (isIn(alertMsg, "操作失败，[关闭启用上次成交价作为本次开单单价时，必须先关闭颜色尺码下，开单显示上次单价] ")) {
        ret1 = false;
    }

    tapReturn();

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "默认不启用", "in" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret2 = true;
    if (isIn(alertMsg, "操作失败，[关闭启用上次成交价作为本次开单单价时，必须先关闭颜色尺码下，开单显示上次单价] ")) {
        ret2 = false;
    }

    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1 && ret2;
}
function test210055() {
    tapMenu("系统设置", "打印机");

    tapTextByFirstWithName("4");
    var r = ";/";
    var ip = getRandomInt(100) + ".0.0.1";
    var f = new TField("数值", TF, 2, r);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "填入的值必须是数字");

    tapFirstText(getScrollView(), "3", 4);
    var f = new TField("数值", TF, 2, ip);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);
    var qr = getQR();
    var ret1 = isEqual(ip, qr.data[3]["数值"]);

    tapMenu("系统设置", "打印机");
    tapFirstText(getScrollView(), "3", 4);
    tapButton(getScrollView(), "本 机");
    var ret2 = isEqual("127.0.0.1", getTextFieldValue(getScrollView(), 2));
    tapButtonAndAlert(SAVE, OK);

    qr = getQR();
    ret = isAnd(ret, isEqual("127.0.0.1", qr.data[3]["数值"]));

    tapFirstText(getScrollView(), "3", 4);
    var ret3 = isEqual("127.0.0.1", getTextFieldValue(getScrollView(), 2));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test210056() {
    tapMenu("系统设置", "打印机");
    tapFirstText(getScrollView(), "4", 4);

    var r = getRandomInt(10000);
    var f = new TField("数值", TF, 2, r);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);

    var qr = getQR();
    var ret = isEqual(r, qr.data[4]["数值"]);

    tapFirstText(getScrollView(), "4", 4);
    var ret1 = isEqual(r, getTextFieldValue(getScrollView(), 2));
    tapReturn();

    tapFirstText(getScrollView(), "4", 4);

    ret1 = isAnd(ret1, isEqual(r, getTextFieldValue(getScrollView(), 2)));

    var r1 = ";/";
    var f = new TField("数值", TF, 2, r1);
    setTFieldsValue(getScrollView(), [ f ]);

    tapButtonAndAlert(SAVE, OK);

    tapPrompt();
    ret1 = isAnd(ret1, isIn(alertMsg, "填入的值必须是数字"));

    tapReturn();

    // debugArray(alertMsgs);
    // var alertMsg1 = getArray1(alertMsgs, -1);
    // var ret1 = isIn(isIn(alertMsg1, "填入的值必须是数字"));

    // tapReturn();

    var qr = getQR();
    var ret2 = isEqual(r, qr.data[4]["数值"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test210057() {
    tapMenu("系统设置", "打印机");
    tapFirstText(getScrollView(), "5", 4);

    var r = getRandomInt(1000000);
    var f = new TField("数值", TF, 2, r);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);
    var qr = getQR();
    var ret = isEqual(r, qr.data[5]["数值"]);

    tapFirstText(getScrollView(), "5", 4);
    var ret1 = isEqual(r, getTextFieldValue(getScrollView(), 2));
    tapReturn();

    tapFirstText(getScrollView(), "5", 4);

    ret1 = isAnd(ret1, isEqual(r, getTextFieldValue(getScrollView(), 2)));

    var r1 = "<>/";
    var f = new TField("数值", TF, 2, r1);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);

    tapPrompt();
    ret1 = isAnd(ret1, isIn(alertMsg, "填入的值必须是数字"));

    tapReturn();

    var qr = getQR();
    var ret2 = isEqual(r, qr.data[5]["数值"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test210061() {
    tapMenu1("系统设置");
    tapMenu2(More);
    tapMenu3("紧急模式上传异常");

    tapButton(getScrollView(1), "删除紧急模式数据");
    tapPrompt();
    tapPrompt();

    var ret = isIn(alertMsg, "操作成功");

    tapNaviLeftButton();

    return ret;
}
function test210062() {
    tapMenu1("系统设置");
    tapMenu2(More);
    tapMenu3("设置本地参数为默认");

    var cond = "isIn(alertMsg, '操作成功')";
    waitUntil(cond, 50);

    var ret = isIn(alertMsg, "操作成功");

    return ret;
}
function test210063() {
    // 常青店没有绑定仓库
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    var fields = querySystemGlobalFields(qo);
    query(fields);

    tapFirstText();
    var setObj = {};
    setObj["数值"] = [ "15,异地发货开单模式", "in" ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapPrompt();

    var ret = isIn(alertMsg, "操作失败，[当开单模式设置成异地发货模式，必须先开启异地仓库的参数");

    tapReturn();

    return ret;
}
function test210065() {
    tapMenu("系统设置", "打印机");

    tapTextByFirstWithName("2");
    var r = ";/";
    var ip = getRandomInt(100) + ".0.0.1";
    var f = new TField("数值", TF, 2, r);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "填入的值必须是数字");

    tapReturn();

    tapFirstText(getScrollView(), "1", 4);
    var f = new TField("数值", TF, 2, ip);
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert(SAVE, OK);
    var qr = getQR();
    var ret1 = isEqual(ip, qr.data[1]["数值"]);

    tapMenu("系统设置", "打印机");
    tapFirstText(getScrollView(), "1", 4);

    ret1 = isAnd(ret1, isEqual(ip, getTextFieldValue(getScrollView(),
            2)));

    tapButton(getScrollView(), "本 机");
    var ret2 = isEqual("127.0.0.1", getTextFieldValue(getScrollView(), 2));
    tapButtonAndAlert(SAVE, OK);

    qr = getQR();
    ret2 = isAnd(ret2, isEqual("127.0.0.1", qr.data[1]["数值"]));

    tapFirstText(getScrollView(), "1", 4);
    var ret3 = isEqual("127.0.0.1", getTextFieldValue(getScrollView(), 2));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test210067() {
    tapMenu1("系统设置");
    tapMenu2(More);
    tapMenu3("门店列表");

    query();

    tapFirstText();

    tapButtonAndAlert("停 用", OK);

    tapPrompt();

    var ret = isIn(alertMsg, "该门店下还存在款号库存，无法停用");

    return ret;
}
function test210069_210070() {
    tapMenu1("系统设置");
    tapMenu2(More);
    tapMenu3("新增门店＋");

    var m = "test" + getTimestamp(8);

    var f0 = new TField("店名", TF, 0, m);
    var f1 = new TField("类型", BTN_SC, 0, "门店");
    var f2 = new TField("门店类型", BTN_SC, 1, "加盟店");
    var f3 = new TField("地址", TF, 3, "江城路889号");
    var f5 = new TField("联系电话", TF, 5, "3003008");
    var fields = [ f0, f1, f2, f3, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapReturn();

    tapMenu1("系统设置");
    tapMenu2(More);
    tapMenu3("门店列表");

    query();

    var qr = getQR();

    var ret = isEqual(m, qr.data[0]["门店"]);

    tapMenu1("系统设置");
    tapMenu2("更多..");
    tapMenu3("新增账户＋");

    var r = "zh" + getTimestamp(4);
    var r1 = getTimestamp(4);

    var f0 = new TField("账户全称", TF, 0, r);
    var f1 = new TField("账户简称", TF, 1, r1);
    var f2 = new TField("门店", BTN_SC, 0, m);
    var f3 = new TField("刷卡/汇款", BTN_SC, 1, "通用");
    var fields = [ f0, f1, f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    tapPrompt();

    var ret1 = isIn(alertMsg, "账户简称]值超过限制，最大允许长度为2");

    var r2 = getTimestamp(2);
    var f1 = new TField("账户简称", TF, 1, r2);
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    tapReturn();

    tapMenu1("系统设置");
    tapMenu2("更多..");
    tapMenu3("账户列表");

    query();

    var qr = getQR();

    var ret2 = isEqual(r, qr.data[0]["账户名称"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + " ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test210071() {
    tapMenu1("系统设置");
    tapMenu2("更多..");
    tapMenu3("新增账户＋");

    var r = "zh" + getTimestamp(4);
    var r1 = getTimestamp(2);

    var f0 = new TField("账户全称", TF, 0, r);
    var f1 = new TField("账户简称", TF, 1, r1);
    var f2 = new TField("门店", BTN_SC, 0, "常青店");
    var f3 = new TField("刷卡/汇款", BTN_SC, 1, "通用");
    var fields = [ f0, f1, f2, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    tapPrompt();

    var ret = isIn(alertMsg, "能够刷卡或汇款的账户不允许超过6个");

    tapReturn();

    tapMenu1("系统设置");
    tapMenu2("更多..");
    tapMenu3("账户列表");

    query();

    var qr = getQR();

    var ret1 = !isEqual(r, qr.data[0]["账户名称"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}