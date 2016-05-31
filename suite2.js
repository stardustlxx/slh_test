//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
    colorSize = "no";
    debug = true;
    ipadVer ="7.10"; // "6.59";// 7.01// 7.10
	
// run("【销售开单－按批次查】退货并退款情况下实付金额检查", "test170019");
// run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");//
// run("【销售开单－代收收款】核销代收收款功能", "test170287");//
// run("【销售开单-开单】积分兑换后的金额在综合收支表和收支流水的正确性和正负值检查", "test170188");//
// run("【 开单】快速新增客户时自动刷新检查", "test170538");//
    
// run("【销售开单-开单】允许店长改低价格", "test170586_4");
// run("【销售开单-开单】允许店长改低价格", "test170586_5");
// run("【销售开单-按批次查】将付款方式修改为代收-点击打印-不点保存，物流单检查", "test170646");//
// run("【销售开单-开单】异地+代收，物流核销", "test170673");//
// run("【销售开单－开单】开单时不允许负库存", "test170116_170660");//
//    run("【销售开单-开单】开启积分跨门店共享，总经理和店员查看", "test170694");//
//    run("【销售开单－按批次查】是否未结", "test170005");
//    run("【销售开单-按批次查】销售单作废（付款方式为代收）", "test170023");
    
    run("【销售开单+整单折扣+代收】整单折扣+代收后核销物流单", "test170368");
    run("【销售开单+产品折扣+代收】产品折扣+代收后核销物流单", "test170368_1");
    run("【销售开单+产品折扣+代收】产品折扣+代 收后核销物流单", "test170378");
    run("【销售开单-按明细查】折扣后价格的核算模式 四舍五入取整", "test170438");
    run("【销售开单-核销】开启-允许跨门店核销时，显示其他门店的物流代收单", "test170574");
    run("【销售开单-核销】开启-允许跨门店核销时，显示全部门店的余款", "test170686");
    run("【销售开单-核销】开启跨门店核销核销不同门店的物流单", "test170687");
    run("【销售开单-核销】开启-不允许跨门店核销时，不显示其他门店的物流代收单", "test170291");// (帐套存在跨门店核销数据，关闭参数失败)
    run("【销售开单-核销】不开启允许跨门店核销时，显示本门店的余款", "test170688");

// run("", "test1");
}
    
function test1(){
// debugElementTree(window);
// var texts = getStaticTexts(target.frontMostApp().navigationBar());
 
// var qr = getQR2(getScrollView(-1, 0), "日期", "欠款");
// debugQResult(qr);
// debugElements(window);
 
}
function test2(){
    var qo, o, ret = true;

   qo = { "备注" : "童装模式是否批发零售分开(按组按件分开)" };
   o = { "新值" : "1", "数值" : [ "1", "in" ] };
   ret = isAnd(ret, setLocalParam(qo, o));
   
   return ret;
}
function setSales001Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/开单模式2", "setNoColorSize_1Params");
        logout();
    }
}
function setSales002Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("颜色尺码/开单模式2", "setNoColorSize_2Params");
        logout();
    }
}
// 销售开单
function test000SalesNoColorSize001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
        testSalesNoColorSizeAll();
       
       logout();
   }
}
function test000SalesNoColorSize001_1() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
         testSalesNoColorSizeAll_1();
        
        logout();
    }
 }
function test000SalesNoColorSize001_2() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
         testSalesNoColorSizeAll_2();
        
        logout();
    }
 }
function test000SalesNoColorSize002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSize001();
        
        logout();
    }
}
function test000SalesNoColorSize003() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSize002();
        
        logout();
    }
}
function test000SalesNoColorSize004() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSize001_1();
        
        logout();
    }
}
function testSalesNoColorSize170125_Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】开单的同时订货", "test170125Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170125() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】开单的同时订货", "test170125");
        
        logout();
    }
}
function testSalesNoColorSize170607() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单-开单】客户为空时进行开单同时订货操作", "test170607");
        
        logout();
    }
}
function testSalesNoColorSize170140_Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】取未保存", "test170140Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170140() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】取未保存", "test170140");
        
        logout();
    }
}
function testSalesNoColorSize170429_Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单-开单-加工货品】加工货品", "test170429Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170429() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单-开单-加工货品】加工货品", "test170429");
        
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
function test000SalesNoColorSizeElse002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElse002();
        
        logout();
    }
}
function test000SalesNoColorSizeElse003() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElseAll();
        
        logout();
    }
}
function test000SalesNoColorSizeElse004() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElseAll_1();
        
        logout();
    }
}
function test000SalesNoColorSizeElse005() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElseAll_2();
        
        logout();
    }
}
function test100SalesNoColorSizeElsePrepare003() {
    var p1 = {"角色":"总经理"};
    var ok = login("100","000000",p1);
    if( ok ) {
        run("仓库店准备代收单", "testSalesPrepare003");
        logout();
    }
}
function testSalesNoColorSize170240_1() {
    var p1 = {"角色":"财务员001"};
    var ok = login("001","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_1");
        
        logout();
    }
}
function testSalesNoColorSize170241_1() {
    var p1 = {"角色":"财务员001"};
    var ok = login("001","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_1");
        
        logout();
    }
}
function testSalesNoColorSize170240_2() {
    var p1 = {"角色":"仓管员002"};
    var ok = login("002","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_2");
        
        logout();
    }
}
function testSalesNoColorSize170241_2() {
    var p1 = {"角色":"仓管员002"};
    var ok = login("002","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_2");
        
        logout();
    }
}
function testSalesNoColorSize170240_3() {
    var p1 = {"角色":"采购员003"};
    var ok = login("003","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_3");
        
        logout();
    }
}
function testSalesNoColorSize170241_3() {
    var p1 = {"角色":"采购员003"};
    var ok = login("003","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_3");
        
        logout();
    }
}
function testSalesNoColorSize170240_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_4");
        
        logout();
    }
}
function testSalesNoColorSize170241_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_4");
        
        logout();
    }
}
function testSalesNoColorSize170240_5() {
    var p1 = {"角色":"开单员005"};
    var ok = login("005","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_5");
        
        logout();
    }
}
function testSalesNoColorSize170241_5() {
    var p1 = {"角色":"开单员005"};
    var ok = login("005","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_5");
        
        logout();
    }
}
function testSalesNoColorSize170240_6() {
    var p1 = {"角色":"营业员006"};
    var ok = login("006","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_6");
        
        logout();
    }
}
function testSalesNoColorSize170241_6() {
    var p1 = {"角色":"营业员006"};
    var ok = login("006","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_6");
        
        logout();
    }
}
function testSalesNoColorSize170240_7() {
    var p1 = {"角色":"配货员007"};
    var ok = login("007","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_7");
        
        logout();
    }
}
function testSalesNoColorSize170241_7() {
    var p1 = {"角色":"配货员007"};
    var ok = login("007","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_7");
        
        logout();
    }
}
function testSalesNoColorSize170134_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单－开单】打印后不允许修改单据（不允许修改）", "test170134");
        
        logout();
    }
}
function testSalesNoColorSize170586_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-开单】允许店长改低价格", "test170586_4");
        
        logout();
    }
}
function testSalesNoColorSize170586_5() {
    var p1 = {"角色":"开单员005"};
    var ok = login("005","000000",p1);
    if( ok ) {
        run("【销售开单-开单】允许店长改低价格", "test170586_5");
        
        logout();
    }
}
function testSalesNoColorSize170641_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-物流单】非总经理登录", "test170641_4");
        
        logout();
    }
}
function testSalesNoColorSize170649_Prepare() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售订货】异地+代收，店长权限", "test170649_Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170649() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售订货】异地+代收，店长权限", "test170649");
        
        logout();
    }
}
function testSalesNoColorSize170650() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售订货】异地+代收，挂单+店长权限", "test170650");
        
        logout();
    }
}
function testSalesNoColorSize170670() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单－开单】打印后不允许修改单据（不允许修改）", "test170670");
        
        logout();
    }
}
function testSalesNoColorSize170679_170680() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-开单】异地+代收，店员权限/异地+代收，+挂单+ 店员权限", "test170679_170680");
        
        logout();
    }
}
function testSalesNoColorSize170684() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-按汇总-按客户上货】店员权限只能看本门店数据", "test170684");
        
        logout();
    }
}
function testSalesNoColorSize170685() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-按汇总-按配货员汇总】查看权限", "test170685");
        
        logout();
    }
}
function testSalesNoColorSize170699_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-按明细查】增加厂商查询条件", "test170699_4");
        
        logout();
    }
}
function testSalesNoColorSize170709_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-按汇总-按店员汇总】每日业绩-同一个店员同一天在不同门店销售", "test170709_4");
        
        logout();
    }
}
function testSalesNoColorSize170568Prepare() {
    var p1 = {"角色":"配货员"};
    var ok = login("007","000000",p1);
    if( ok ) {
        run("【销售开单－开单】异地发货－－配货员可查看内容", "test170568Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170568() {
    var p1 = {"角色":"配货员"};
    var ok = login("007","000000",p1);
    if( ok ) {
        run("【销售开单－开单】异地发货－－配货员可查看内容", "test170568");
        
        logout();
    }
}
function test000SalesColorSize002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesColorSize002();
        
        logout();
    }
}
function testSalesNoColorSizeOutAndIn() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testOutAndIn();
        
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
 
 function testCheck180022_Prepare() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         run("【盘点管理—新增盘点】获取未保存", "test180022Prepare");
         
         logout();
     }
 }
 function testCheck180022() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         run("【盘点管理—新增盘点】获取未保存", "test180022");
         
         logout();
     }
 }
 function testCheck180058_Prepare() {
     var p1 = {"角色":"总经理"};
     var ok = login("200","000000",p1);
     if( ok ) {
         run("【盘点管理-按批次查】修改其他门店的未处理盘点单后，该盘点单的门店检查", "test180058Prepare");
         logout();
     }
 }
 function testCheck180058() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         run("【盘点管理-按批次查】修改其他门店的未处理盘点单后，该盘点单的门店检查", "test180058");
         
         logout();
     }
 }
 
 function testCheck180028_Prepare() {
     var p1 = {"角色":"总经理"};
     var ok = login("200","000000",p1);
     if( ok ) {
         run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028Prepare");
         
         logout();
     }
 }
 function testCheck180028() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028");
         
         logout();
     }
 }
// 统计图表
 function test000testStatisticPicture001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testStatisticPictureAll();
        
        logout();
    }
 }
// 系统设置
 function test000System001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSystem001();
        
        logout();
    }
 }
 function test000System002() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         testSystem002();
         
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