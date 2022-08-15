"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[3270],{3270:(e,s,t)=>{t.r(s),t.d(s,{default:()=>V});var r=t(9835),i=t(6970);const l={class:"row q-mx-md"},o={class:"col-12"},a={class:"row q-mx-md q-mt-md"},u={class:"col-12"},n=(0,r._)("div",{class:"text-h6"},"Edit rule group",-1),d={class:"row"},c={class:"col-12 q-mb-xs"},h={class:"row q-mx-md"},m={class:"col-12"},p={class:"row"},b={class:"col-12 text-right"},g={class:"row"},f={class:"col-12 text-right"};function w(e,s,t,w,_,v){const q=(0,r.up)("q-btn"),E=(0,r.up)("q-banner"),R=(0,r.up)("q-card-section"),x=(0,r.up)("q-input"),k=(0,r.up)("q-card"),C=(0,r.up)("q-checkbox"),S=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(S,null,{default:(0,r.w5)((()=>[(0,r._)("div",l,[(0,r._)("div",o,[""!==_.errorMessage?((0,r.wg)(),(0,r.j4)(E,{key:0,"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:(0,r.w5)((()=>[(0,r.Wm)(q,{flat:"",onClick:v.dismissBanner,label:"Dismiss"},null,8,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(_.errorMessage)+" ",1)])),_:1})):(0,r.kq)("",!0)])]),(0,r._)("div",a,[(0,r._)("div",u,[(0,r.Wm)(k,{bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(R,null,{default:(0,r.w5)((()=>[n])),_:1}),(0,r.Wm)(R,null,{default:(0,r.w5)((()=>[(0,r._)("div",d,[(0,r._)("div",c,[(0,r.Wm)(x,{"error-message":_.submissionErrors.title,error:_.hasSubmissionErrors.title,"bottom-slots":"",disable:v.disabledInput,type:"text",clearable:"",modelValue:_.title,"onUpdate:modelValue":s[0]||(s[0]=e=>_.title=e),label:e.$t("form.title"),outlined:""},null,8,["error-message","error","disable","modelValue","label"])])])])),_:1})])),_:1})])]),(0,r._)("div",h,[(0,r._)("div",m,[(0,r.Wm)(k,{class:"q-mt-xs"},{default:(0,r.w5)((()=>[(0,r.Wm)(R,null,{default:(0,r.w5)((()=>[(0,r._)("div",p,[(0,r._)("div",b,[(0,r.Wm)(q,{disable:v.disabledInput,color:"primary",label:"Update",onClick:v.submitRuleGroup},null,8,["disable","onClick"])])]),(0,r._)("div",g,[(0,r._)("div",f,[(0,r.Wm)(C,{disable:v.disabledInput,modelValue:_.doReturnHere,"onUpdate:modelValue":s[1]||(s[1]=e=>_.doReturnHere=e),"left-label":"",label:"Return here"},null,8,["disable","modelValue"])])])])),_:1})])),_:1})])])])),_:1})}var _=t(6739),v=t(1569);class q{post(e,s){let t="/api/v1/rule_groups/"+e;return v.api.put(t,s)}}var E=t(3555);const R={name:"Edit",data(){return{submissionErrors:{},hasSubmissionErrors:{},submitting:!1,doReturnHere:!1,doResetForm:!1,errorMessage:"",id:0,title:"",store:null}},computed:{disabledInput:function(){return this.submitting}},created(){this.id=parseInt(this.$route.params.id),this.store=(0,E.S)(),this.collectRuleGroup()},methods:{collectRuleGroup:function(){let e=new _.Z;e.get(this.id).then((e=>this.parseRuleGroup(e)))},parseRuleGroup:function(e){this.title=e.data.data.attributes.title},resetErrors:function(){this.submissionErrors={title:""},this.hasSubmissionErrors={title:!1}},submitRuleGroup:function(){this.submitting=!0,this.errorMessage="",this.resetErrors();const e=this.buildRuleGroup();(new q).post(this.id,e).catch(this.processErrors).then(this.processSuccess)},buildRuleGroup:function(){return{title:this.title}},dismissBanner:function(){this.errorMessage=""},processSuccess:function(e){if(this.store.refreshCacheKey(),!e)return;this.submitting=!1;let s={level:"success",text:"Rule group is is updated",show:!0,action:{show:!0,text:"Go to rule group",link:{name:"rule.index"}}};this.$q.localStorage.set("flash",s),this.doReturnHere&&window.dispatchEvent(new CustomEvent("flash",{detail:{flash:this.$q.localStorage.getItem("flash")}})),this.doReturnHere||this.$router.go(-1)},processErrors:function(e){if(e.response){let s=e.response.data;this.errorMessage=s.message,console.log(s);for(let e in s.errors)s.errors.hasOwnProperty(e)&&(this.submissionErrors[e]=s.errors[e][0],this.hasSubmissionErrors[e]=!0)}this.submitting=!1}}};var x=t(1639),k=t(9885),C=t(7128),S=t(8879),G=t(4458),W=t(3190),Z=t(6611),y=t(1221),I=t(9984),Q=t.n(I);const M=(0,x.Z)(R,[["render",w]]),V=M;Q()(R,"components",{QPage:k.Z,QBanner:C.Z,QBtn:S.Z,QCard:G.Z,QCardSection:W.Z,QInput:Z.Z,QCheckbox:y.Z})}}]);