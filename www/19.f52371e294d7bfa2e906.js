(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7EpS":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("mrSG"),i=u("gIcY"),a=u("F5nt"),b=function(){function n(n,l,u){this.app=n,this.formBuilder=l,this.route=u,this.data={},this.readyToRender=!1,this.apps_idx=this.route.snapshot.params.apps_idx,console.log("apps_idx =",this.apps_idx)}return n.prototype.ngOnInit=function(){return t.b(this,void 0,void 0,function(){var n;return t.e(this,function(l){switch(l.label){case 0:return this.readyToRender=!1,this.apps_idx?[4,this.app.service.get_app(this.apps_idx)]:[3,2];case 1:n=l.sent(),console.log("init value =",n),n.app_id&&(this.data=n),l.label=2;case 2:return this.registerForm=new i.e({app_id:new i.c(this.data.app_id,[i.m.required]),channel_name:new i.c(this.data.channel_name,[i.m.required]),git_url:new i.c(this.data.git_url,[i.m.required]),git_user_id:new i.c(this.data.git_user_id),git_user_pw:new i.c(this.data.git_user_pw),endpoint:new i.c(this.data.endpoint),cache_url:new i.c(this.data.cache_url)}),this.readyToRender=!0,[2]}})})},n.prototype.onSubmit=function(){return t.b(this,void 0,void 0,function(){var n,l;return t.e(this,function(u){switch(u.label){case 0:console.log("onSubmit =",this.registerForm.value),u.label=1;case 1:return u.trys.push([1,6,,7]),this.apps_idx?(this.registerForm.value.apps_idx=this.apps_idx,[4,this.app.service.update_app(this.registerForm.value)]):[3,3];case 2:return n=u.sent(),console.log("result =",n),n&&this.app.goReplace("main"),[3,5];case 3:return[4,this.app.service.new_app(this.registerForm.value)];case 4:n=u.sent(),console.log("result =",n),n&&this.app.goReplace("main"),u.label=5;case 5:return[3,7];case 6:return l=u.sent(),alert(l),[3,7];case 7:return[2]}})})},n}(),o=function(){return function(){}}(),s=u("pMnS"),r=u("oBZk"),g=u("ZZ/e"),d=u("Ip0R"),p=u("ZYCi"),h=e.mb({encapsulation:0,styles:[[""]],data:{}});function c(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,92,"div",[],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,91,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,i=n.component;return"submit"===l&&(t=!1!==e.xb(n,3).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.xb(n,3).onReset()&&t),"ngSubmit"===l&&(t=!1!==i.onSubmit()&&t),t},null,null)),e.nb(2,16384,null,0,i.o,[],null,null),e.nb(3,540672,null,0,i.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.yb(2048,null,i.a,null,[i.f]),e.nb(5,16384,null,0,i.k,[[4,i.a]],null,null),(n()(),e.ob(6,0,null,null,11,"ion-item",[],null,null,null,r.o,r.f)),e.nb(7,49152,null,0,g.G,[e.h,e.k],null,null),(n()(),e.ob(8,0,null,0,2,"ion-label",[],null,null,null,r.p,r.g)),e.nb(9,49152,null,0,g.M,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["app_id"])),(n()(),e.ob(11,0,null,0,6,"ion-input",[["formControlName","app_id"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.xb(n,12)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,12)._handleInputEvent(u.target.value)&&t),t},r.n,r.e)),e.nb(12,16384,null,0,g.Jb,[e.k],null,null),e.yb(1024,null,i.h,function(n){return[n]},[g.Jb]),e.nb(14,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(16,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(17,49152,null,0,g.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.ob(18,0,null,null,11,"ion-item",[],null,null,null,r.o,r.f)),e.nb(19,49152,null,0,g.G,[e.h,e.k],null,null),(n()(),e.ob(20,0,null,0,2,"ion-label",[],null,null,null,r.p,r.g)),e.nb(21,49152,null,0,g.M,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["channel_name"])),(n()(),e.ob(23,0,null,0,6,"ion-input",[["formControlName","channel_name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.xb(n,24)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,24)._handleInputEvent(u.target.value)&&t),t},r.n,r.e)),e.nb(24,16384,null,0,g.Jb,[e.k],null,null),e.yb(1024,null,i.h,function(n){return[n]},[g.Jb]),e.nb(26,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(28,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(29,49152,null,0,g.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.ob(30,0,null,null,11,"ion-item",[],null,null,null,r.o,r.f)),e.nb(31,49152,null,0,g.G,[e.h,e.k],null,null),(n()(),e.ob(32,0,null,0,2,"ion-label",[],null,null,null,r.p,r.g)),e.nb(33,49152,null,0,g.M,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["git_url"])),(n()(),e.ob(35,0,null,0,6,"ion-input",[["formControlName","git_url"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.xb(n,36)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,36)._handleInputEvent(u.target.value)&&t),t},r.n,r.e)),e.nb(36,16384,null,0,g.Jb,[e.k],null,null),e.yb(1024,null,i.h,function(n){return[n]},[g.Jb]),e.nb(38,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(40,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(41,49152,null,0,g.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.ob(42,0,null,null,11,"ion-item",[],null,null,null,r.o,r.f)),e.nb(43,49152,null,0,g.G,[e.h,e.k],null,null),(n()(),e.ob(44,0,null,0,2,"ion-label",[],null,null,null,r.p,r.g)),e.nb(45,49152,null,0,g.M,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["git git_user_id"])),(n()(),e.ob(47,0,null,0,6,"ion-input",[["formControlName","git_user_id"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.xb(n,48)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,48)._handleInputEvent(u.target.value)&&t),t},r.n,r.e)),e.nb(48,16384,null,0,g.Jb,[e.k],null,null),e.yb(1024,null,i.h,function(n){return[n]},[g.Jb]),e.nb(50,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(52,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(53,49152,null,0,g.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.ob(54,0,null,null,11,"ion-item",[],null,null,null,r.o,r.f)),e.nb(55,49152,null,0,g.G,[e.h,e.k],null,null),(n()(),e.ob(56,0,null,0,2,"ion-label",[],null,null,null,r.p,r.g)),e.nb(57,49152,null,0,g.M,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["git git_user_pw"])),(n()(),e.ob(59,0,null,0,6,"ion-input",[["formControlName","git_user_pw"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.xb(n,60)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,60)._handleInputEvent(u.target.value)&&t),t},r.n,r.e)),e.nb(60,16384,null,0,g.Jb,[e.k],null,null),e.yb(1024,null,i.h,function(n){return[n]},[g.Jb]),e.nb(62,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(64,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(65,49152,null,0,g.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.ob(66,0,null,null,11,"ion-item",[],null,null,null,r.o,r.f)),e.nb(67,49152,null,0,g.G,[e.h,e.k],null,null),(n()(),e.ob(68,0,null,0,2,"ion-label",[],null,null,null,r.p,r.g)),e.nb(69,49152,null,0,g.M,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["cache_url"])),(n()(),e.ob(71,0,null,0,6,"ion-input",[["formControlName","cache_url"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.xb(n,72)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,72)._handleInputEvent(u.target.value)&&t),t},r.n,r.e)),e.nb(72,16384,null,0,g.Jb,[e.k],null,null),e.yb(1024,null,i.h,function(n){return[n]},[g.Jb]),e.nb(74,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(76,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(77,49152,null,0,g.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.ob(78,0,null,null,11,"ion-item",[],null,null,null,r.o,r.f)),e.nb(79,49152,null,0,g.G,[e.h,e.k],null,null),(n()(),e.ob(80,0,null,0,2,"ion-label",[],null,null,null,r.p,r.g)),e.nb(81,49152,null,0,g.M,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["endpoint"])),(n()(),e.ob(83,0,null,0,6,"ion-input",[["formControlName","endpoint"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.xb(n,84)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.xb(n,84)._handleInputEvent(u.target.value)&&t),t},r.n,r.e)),e.nb(84,16384,null,0,g.Jb,[e.k],null,null),e.yb(1024,null,i.h,function(n){return[n]},[g.Jb]),e.nb(86,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(88,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(89,49152,null,0,g.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.ob(90,0,null,null,2,"ion-button",[["type","submit"]],null,null,null,r.k,r.b)),e.nb(91,49152,null,0,g.j,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.Bb(-1,0,["Submit"]))],function(n,l){n(l,3,0,l.component.registerForm),n(l,14,0,"app_id"),n(l,17,0,"text"),n(l,26,0,"channel_name"),n(l,29,0,"text"),n(l,38,0,"git_url"),n(l,41,0,"text"),n(l,50,0,"git_user_id"),n(l,53,0,"text"),n(l,62,0,"git_user_pw"),n(l,65,0,"text"),n(l,74,0,"cache_url"),n(l,77,0,"text"),n(l,86,0,"endpoint"),n(l,89,0,"text"),n(l,91,0,"submit")},function(n,l){n(l,1,0,e.xb(l,5).ngClassUntouched,e.xb(l,5).ngClassTouched,e.xb(l,5).ngClassPristine,e.xb(l,5).ngClassDirty,e.xb(l,5).ngClassValid,e.xb(l,5).ngClassInvalid,e.xb(l,5).ngClassPending),n(l,11,0,e.xb(l,16).ngClassUntouched,e.xb(l,16).ngClassTouched,e.xb(l,16).ngClassPristine,e.xb(l,16).ngClassDirty,e.xb(l,16).ngClassValid,e.xb(l,16).ngClassInvalid,e.xb(l,16).ngClassPending),n(l,23,0,e.xb(l,28).ngClassUntouched,e.xb(l,28).ngClassTouched,e.xb(l,28).ngClassPristine,e.xb(l,28).ngClassDirty,e.xb(l,28).ngClassValid,e.xb(l,28).ngClassInvalid,e.xb(l,28).ngClassPending),n(l,35,0,e.xb(l,40).ngClassUntouched,e.xb(l,40).ngClassTouched,e.xb(l,40).ngClassPristine,e.xb(l,40).ngClassDirty,e.xb(l,40).ngClassValid,e.xb(l,40).ngClassInvalid,e.xb(l,40).ngClassPending),n(l,47,0,e.xb(l,52).ngClassUntouched,e.xb(l,52).ngClassTouched,e.xb(l,52).ngClassPristine,e.xb(l,52).ngClassDirty,e.xb(l,52).ngClassValid,e.xb(l,52).ngClassInvalid,e.xb(l,52).ngClassPending),n(l,59,0,e.xb(l,64).ngClassUntouched,e.xb(l,64).ngClassTouched,e.xb(l,64).ngClassPristine,e.xb(l,64).ngClassDirty,e.xb(l,64).ngClassValid,e.xb(l,64).ngClassInvalid,e.xb(l,64).ngClassPending),n(l,71,0,e.xb(l,76).ngClassUntouched,e.xb(l,76).ngClassTouched,e.xb(l,76).ngClassPristine,e.xb(l,76).ngClassDirty,e.xb(l,76).ngClassValid,e.xb(l,76).ngClassInvalid,e.xb(l,76).ngClassPending),n(l,83,0,e.xb(l,88).ngClassUntouched,e.xb(l,88).ngClassTouched,e.xb(l,88).ngClassPristine,e.xb(l,88).ngClassDirty,e.xb(l,88).ngClassValid,e.xb(l,88).ngClassInvalid,e.xb(l,88).ngClassPending)})}function x(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,6,"ion-header",[],null,null,null,r.m,r.d)),e.nb(1,49152,null,0,g.A,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.r,r.i)),e.nb(3,49152,null,0,g.Ab,[e.h,e.k],null,null),(n()(),e.ob(4,0,null,0,2,"ion-title",[],null,null,null,r.q,r.h)),e.nb(5,49152,null,0,g.yb,[e.h,e.k],null,null),(n()(),e.Bb(-1,0,["new-app"])),(n()(),e.ob(7,0,null,null,3,"ion-content",[],null,null,null,r.l,r.c)),e.nb(8,49152,null,0,g.t,[e.h,e.k],null,null),(n()(),e.fb(16777216,null,0,1,null,c)),e.nb(10,16384,null,0,d.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,10,0,l.component.readyToRender)},null)}function v(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,1,"app-new-app",[],null,null,null,x,h)),e.nb(1,114688,null,0,b,[a.a,i.b,p.a],null,null)],function(n,l){n(l,1,0)},null)}var C=e.kb("app-new-app",b,v,{},{},[]);u.d(l,"NewAppPageModuleNgFactory",function(){return m});var m=e.lb(o,[],function(n){return e.ub([e.vb(512,e.j,e.ab,[[8,[s.a,C]],[3,e.j],e.x]),e.vb(4608,d.k,d.j,[e.u,[2,d.q]]),e.vb(4608,i.p,i.p,[]),e.vb(4608,i.b,i.b,[]),e.vb(4608,g.c,g.c,[e.z,e.g]),e.vb(4608,g.Fb,g.Fb,[g.c,e.j,e.q,d.c]),e.vb(4608,g.Ib,g.Ib,[g.c,e.j,e.q,d.c]),e.vb(1073742336,d.b,d.b,[]),e.vb(1073742336,i.n,i.n,[]),e.vb(1073742336,i.g,i.g,[]),e.vb(1073742336,i.l,i.l,[]),e.vb(1073742336,g.Cb,g.Cb,[]),e.vb(1073742336,p.n,p.n,[[2,p.t],[2,p.m]]),e.vb(1073742336,o,o,[]),e.vb(1024,p.k,function(){return[[{path:"",component:b}]]},[])])})}}]);