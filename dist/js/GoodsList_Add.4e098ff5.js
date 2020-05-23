(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GoodsList_Add"],{"2c9c":function(e,t,a){"use strict";var r=a("8e18"),o=a.n(r);o.a},"4f9b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",{attrs:{to:{path:"/goods"}}},[e._v("商品列表")]),a("el-breadcrumb-item",[e._v("添加商品")])],1),a("el-card",[a("el-alert",{attrs:{title:"添加商品信息",type:"info",center:"","show-icon":"",closable:!1}}),a("el-steps",{attrs:{"align-center":"",space:200,active:e.activeIndex-0,"finish-status":"success"}},[a("el-step",{attrs:{title:"基本信息"}}),a("el-step",{attrs:{title:"商品参数"}}),a("el-step",{attrs:{title:"商品属性"}}),a("el-step",{attrs:{title:"商品图片"}}),a("el-step",{attrs:{title:"商品内容"}}),a("el-step",{attrs:{title:"完成"}})],1),a("el-form",{ref:"addGoodsRef",attrs:{model:e.addGoodsForm,rules:e.addGoodsRules,"label-width":"100px","label-position":"top"}},[a("el-tabs",{attrs:{"tab-position":"left","before-leave":e.beforeLeave},on:{"tab-click":e.tabClicked},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[a("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[a("el-input",{model:{value:e.addGoodsForm.goods_name,callback:function(t){e.$set(e.addGoodsForm,"goods_name",t)},expression:"addGoodsForm.goods_name"}})],1),a("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[a("el-input",{attrs:{type:"number"},model:{value:e.addGoodsForm.goods_price,callback:function(t){e.$set(e.addGoodsForm,"goods_price",t)},expression:"addGoodsForm.goods_price"}})],1),a("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[a("el-input",{attrs:{type:"number"},model:{value:e.addGoodsForm.goods_number,callback:function(t){e.$set(e.addGoodsForm,"goods_number",t)},expression:"addGoodsForm.goods_number"}})],1),a("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[a("el-input",{attrs:{type:"number"},model:{value:e.addGoodsForm.goods_weight,callback:function(t){e.$set(e.addGoodsForm,"goods_weight",t)},expression:"addGoodsForm.goods_weight"}})],1),a("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[a("el-cascader",{attrs:{"expand-trigger":"hover",options:e.cateList,props:e.cateProps,clearable:""},on:{change:e.handleChange},model:{value:e.addGoodsForm.goods_cat,callback:function(t){e.$set(e.addGoodsForm,"goods_cat",t)},expression:"addGoodsForm.goods_cat"}})],1)],1),a("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyTabData,(function(t){return a("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[a("el-checkbox-group",{model:{value:t.attr_vals,callback:function(a){e.$set(t,"attr_vals",a)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return a("el-checkbox",{key:t,attrs:{label:e,border:""}})})),1)],1)})),1),a("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyTabData,(function(t){return a("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[a("el-input",{model:{value:t.attr_vals,callback:function(a){e.$set(t,"attr_vals",a)},expression:"item.attr_vals"}})],1)})),1),a("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[a("el-upload",{attrs:{action:e.uploadURL,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"list-type":"picture",headers:e.headerObj,"on-success":e.handleSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),a("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[a("quill-editor",{model:{value:e.addGoodsForm.goods_introduce,callback:function(t){e.$set(e.addGoodsForm,"goods_introduce",t)},expression:"addGoodsForm.goods_introduce"}}),a("el-button",{staticClass:"btnAdd",attrs:{type:"primary"},on:{click:e.add}},[e._v("添加商品")])],1)],1)],1)],1),a("el-dialog",{attrs:{title:"图片预览",visible:e.previewVisible,width:"50%",center:""},on:{"update:visible":function(t){e.previewVisible=t}}},[a("img",{staticClass:"previewImg",attrs:{src:e.previewPath,alt:""}})])],1)},o=[],s=(a("c740"),a("a15b"),a("a434"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),n=a("60bb"),i=a.n(n),d={data:function(){return{activeIndex:"0",addGoodsForm:{goods_name:"",goods_price:0,goods_number:0,goods_weight:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addGoodsRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"blur"}]},cateList:[],cateProps:{label:"cat_name",value:"cat_id",children:"children"},manyTabData:[],onlyTabData:[],uploadURL:"http://timemeetyou.com:8889/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},previewPath:"",previewVisible:!1}},created:function(){this.getCateList()},methods:{getCateList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("categories");case 2:if(t=e.sent,a=t.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("获取失败!"));case 6:this.cateList=a.data;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleChange:function(){3!==this.addGoodsForm.goods_cat.length&&(this.addGoodsForm.goods_cat=[])},beforeLeave:function(e,t){if("0"===t&&3!==this.addGoodsForm.goods_cat.length)return this.$message.error("请先选择商品分类！"),!1},tabClicked:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("1"!==this.activeIndex){e.next=11;break}return e.next=3,this.$http.get("categories/".concat(this.cateId,"/attributes"),{params:{sel:"many"}});case 3:if(t=e.sent,a=t.data,200===a.meta.status){e.next=7;break}return e.abrupt("return",this.$message.error("获取参数失败！"));case 7:a.data.forEach((function(e){e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(" ")})),this.manyTabData=a.data,e.next=19;break;case 11:if("2"!==this.activeIndex){e.next=19;break}return e.next=14,this.$http.get("categories/".concat(this.cateId,"/attributes"),{params:{sel:"only"}});case 14:if(r=e.sent,o=r.data,200===o.meta.status){e.next=18;break}return e.abrupt("return",this.$message.error("获取属性失败！"));case 18:this.onlyTabData=o.data;case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handlePreview:function(e){this.previewPath=e.response.data.url,this.previewVisible=!0},handleRemove:function(e){var t=e.response.data.tmp_path,a=this.addGoodsForm.pics.findIndex((function(e){return e.pic===t}));this.addGoodsForm.pics.splice(a,1)},handleSuccess:function(e){var t={pics:e.data.tmp_path};this.addGoodsForm.pics.push(t)},add:function(){var e=this;this.$refs.addGoodsRef.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",e.$message.error("请先填写必填项！"));case 2:return r=i.a.cloneDeep(e.addGoodsForm),r.goods_cat=r.goods_cat.join(","),e.manyTabData.forEach((function(t){var a={attr_id:t.attr_id,attr_value:t.attr_vals.join(" ")};e.addGoodsForm.attrs.push(a)})),e.onlyTabData.forEach((function(t){var a={attr_id:t.attr_id,attr_value:t.attr_vals};e.addGoodsForm.attrs.push(a)})),r.attrs=e.addGoodsForm.attrs,t.next=9,e.$http.post("goods",r);case 9:if(o=t.sent,s=o.data,201===s.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error("添加商品失败！"));case 13:e.$message.success("添加商品成功！"),e.$router.push("/goods");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{cateId:function(){return 3===this.addGoodsForm.goods_cat.length?this.addGoodsForm.goods_cat[2]:null}}},l=d,c=(a("2c9c"),a("2877")),u=Object(c["a"])(l,r,o,!1,null,"00cec271",null);t["default"]=u.exports},"8e18":function(e,t,a){},c740:function(e,t,a){"use strict";var r=a("23e7"),o=a("b727").findIndex,s=a("44d2"),n="findIndex",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),s(n)},cb38:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("商品列表")])],1),a("el-card",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getGoodsList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getGoodsList},slot:"append"})],1)],1),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:e.goToAddPage}},[e._v("添加商品")])],1)],1),a("el-table",{attrs:{data:e.goodslist,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"商品名称",prop:"goods_name"}}),a("el-table-column",{attrs:{label:"商品价格(元)",prop:"goods_price",width:"105px"}}),a("el-table-column",{attrs:{label:"商品重量",prop:"goods_weight",width:"80px"}}),a("el-table-column",{attrs:{label:"创建时间",prop:"add_time",width:"170px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateFormat")(t.row.add_time)))]}}])}),a("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.removeById(t.row.goods_id)}}})]}}])})],1),a("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[5,10,20,30],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},o=[],s=(a("96cf"),a("1da1")),n={data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:10},goodslist:[],total:0}},created:function(){this.getGoodsList()},methods:{getGoodsList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("goods",{params:this.queryInfo});case 2:if(t=e.sent,a=t.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("获取商品列表失败！"));case 6:this.$message.success("获取商品列表成功！"),this.goodslist=a.data.goods,this.total=a.data.total;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getGoodsList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getGoodsList()},removeById:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=e.sent,"confirm"===a){e.next=5;break}return e.abrupt("return",this.$message.info("已取消删除！"));case 5:return e.next=7,this.$http.delete("goods/".concat(t));case 7:if(r=e.sent,o=r.data,200===o.meta.status){e.next=11;break}return e.abrupt("return",this.$message.error("删除失败！"));case 11:this.$message.success("删除成功！"),this.getGoodsList();case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),goToAddPage:function(){this.$router.push("goods/add")}}},i=n,d=a("2877"),l=Object(d["a"])(i,r,o,!1,null,"a38e641c",null);t["default"]=l.exports}}]);
//# sourceMappingURL=GoodsList_Add.4e098ff5.js.map