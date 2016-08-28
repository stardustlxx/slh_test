/**
 * 获取查询界面第一个...按钮的下标
 * @returns
 */
function getQueryBtnIndex() {
    return getButtonIndex(window, "...");
}

/**
 * 统一通知数，保存后由NULL变成0
 * @param data
 * @returns
 */
function unityNotice(data) {
    for (var i = 0; i < data.length; i++) {
        data[i]["通知数"] = 0;
    }
    return data;
}

// goods
/**
 * 获取库存分布二级界面 款号的数据
 * @param code
 * @param close 是否返回 默认返回
 * @returns
 */
function getDetTS100006(code, close) {
    tapLine();
    var keys = { "款号" : code };
    var fields = queryGoodsDistributionDetFields(keys);
    var view = getScrollView(-1, 0);
    setTFieldsValue(view, fields);
    tapButton(view, QUERY);

    var qr = getQR2(view, "名称", "中洲店");
    // 查询结果唯一
    var data = qr.data[0];

    if (isUndefined(close)) {
        tapNaviLeftButton();
    }

    return data;
}