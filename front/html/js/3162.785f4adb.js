"use strict";(self["webpackChunks013"]=self["webpackChunks013"]||[]).push([[3162],{3162:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var a=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("添加实验室类型")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"类型名称",prop:"title"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入类型名称..."},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"类型备注",prop:"remark"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"选填类型备注..."},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),e("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[e("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:t.form.sortOrder,callback:function(e){t.$set(t.form,"sortOrder",e)},expression:"form.sortOrder"}})],1),e("FormItem",{attrs:{label:"状态",prop:"status"}},[e("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请输入选择类型的状态..."},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[e("Option",{attrs:{value:"正常"}},[t._v("正常")]),e("Option",{attrs:{value:"禁用"}},[t._v("禁用")])],1)],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},r=[],l=s(1182);const o={name:"add",components:{},data(){return{submitLoading:!1,form:{title:"",remark:"",sortOrder:0,status:"正常"},formValidate:{}}},methods:{init(){},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,l.Jg)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},i=o;var c=s(1001),m=(0,c.Z)(i,a,r,!1,null,null,null);const n=m.exports},1182:(t,e,s)=>{s.d(e,{Ir:()=>r,Jg:()=>l,lM:()=>i,vK:()=>o});var a=s(7184);const r=t=>(0,a.A_)("/laboratoryType/getByPage",t),l=t=>(0,a.j0)("/laboratoryType/insert",t),o=t=>(0,a.j0)("/laboratoryType/update",t),i=t=>(0,a.j0)("/laboratoryType/delByIds",t)}}]);