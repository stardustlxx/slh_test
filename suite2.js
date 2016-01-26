//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
// testBasicSetUpAll();
// testWanLaiCustomerAll();
// testGoodsGoodsAll();
// testPurchaseAll();
// testPurchase002();
// testPurchase001();
// testPurchaseOrder001();
// testPurchaseOrderAll();
// testShopInAll();
// testShopIn001();
// testShopOutAll();
// testShopOut001();
// testSalesOrderAll();
// testCheckAll();
// testCheck001();
// testSalesNoColorSizeAll();
// testSalesNoColorSizeElseAll();
// testSalesNoColorSizeElse001();
// testSalesColorSizeAll();
// testSalesColorSize001();
// testSalesColorSize002();
	
// run("【销售开单-开单】检查核销", "testCs170132"); //添加款号 覆盖了,商路花程序Bug
// run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170104");//备注不对
// run("【销售开单】不同门店不同价格在销售开单和图片选款界面的数值检查", "testCs170242");//
// run("【销售开单】不同门店不同价格时销售开单-按明细查界面检查差额值", "testCs170244");//
//	
// run("【销售开单－开单】", "test170475");
// run("【销售开单－开单】", "test170064");/


// run("【销售开单－开单】", "test170083_1");//
// run("【销售开单－开单】", "testPictureCodePictureFields");//
	
	// 运单号取7位随即数
	
// run("【盘点管理—新增盘点】", "test180019");
// run("【盘点管理—新增盘点】整单复制、整单粘贴", "test180021");
// run("【盘点管理—新增盘点】返回", "test180023");
// run("【盘点管理—新增盘点】删除按钮", "test180024");
// run("【盘点管理—按批次查】查询条件单项查询／【盘点管理—按批次查】底部统计数据检查", "test180001_180005");
// run("【盘点管理—按批次查】输入起始批次和结束批次后查询", "test180002");
// run("【盘点管理—按批次查】查询条件组合查询/【盘点管理—按批次查】清除功能", "test180003_180004");
    
//	   run("【盘点管理—按明细查】品牌,类别查询条件检查", "test180015");
	 run("【盘点管理—盘点撤销】", "test180033");
	

// testStatisticPictureAll();
// testSystem001();
// logout();

}


function setSales001Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/开单模式2", "setIgnorecolorsize_1Params");
        logout();
    }
}
function setSales002Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("颜色尺码/开单模式2", "setIgnorecolorsize_0Params");
        logout();
    }
}
function test000SalesNoColorSizeElse001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElse001();
        
        logout();
    }
}
function test000SalesColorSize001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesColorSizeAll();
        
        logout();
    }
}
// 采购入库
 function test000Purchase001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
         testPurchase001();
        
        logout();
    }
 }
// 销售开单
 function test000SalesNoColorSizeElse001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
// testSalesNoColorSizeAll();
        testSalesNoColorSizeElse001();
        
        logout();
    }
 }
// 盘点管理
 function test000Check001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testCheck001();
        
        logout();
    }
 }
 
 function test000Check002() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         testCheckAll();
         
         logout();
     }
 }
 
// 系统设置
 function test000System001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSystemprepare();
        testSystem001();
        
        logout();
    }
 }
function test001All() {
    var p1 = {"角色":"财务员","门店":"常青店"};
    var ok = login("001","000000",p1);
    if( ok ) {
// testCheckMenuAll();
        logout();
    }
}

function test004All() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
// testCheckMenuAll();
     logout();
  }
}