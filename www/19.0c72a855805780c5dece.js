(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7EpS":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),i=u("gIcY"),a=u("F5nt"),b=function(){function l(l,n,u){this.app=l,this.formBuilder=n,this.route=u,this.data={},this.readyToRender=!1,this.apps_idx=this.route.snapshot.params.apps_idx,console.log("apps_idx =",this.apps_idx)}return l.prototype.ngOnInit=function(){return t.b(this,void 0,void 0,function(){var l;return t.e(this,function(n){switch(n.label){case 0:return this.readyToRender=!1,this.apps_idx?[4,this.app.service.get_app(this.apps_idx)]:[3,2];case 1:l=n.sent(),console.log("init value =",l),l.app_id&&(this.data=l),n.label=2;case 2:return this.registerForm=new i.e({app_id:new i.c(this.data.app_id,[i.m.required]),channel_name:new i.c(this.data.channel_name,[i.m.required]),git_url:new i.c(this.data.git_url,[i.m.required]),git_full_name:new i.c(this.data.git_full_name),git_user_id:new i.c(this.data.git_user_id),git_user_pw:new i.c(this.data.git_user_pw),git_web_url:new i.c(this.data.git_web_url),git_web_user_id:new i.c(this.data.git_web_user_id),git_web_user_pw:new i.c(this.data.git_web_user_pw),endpoint:new i.c(this.data.endpoint),cache_url:new i.c(this.data.cache_url),auto_update:new i.c(this.data.auto_update),android_link:new i.c(this.data.android_link),ios_link:new i.c(this.data.ios_link)}),this.readyToRender=!0,[2]}})})},l.prototype.onBlurGitUrl=function(){console.log("onBlurGitUrl -"+this.registerForm.value.git_url);var l=this.app.util.extractFullName(this.registerForm.value.git_url),n=this.app.util.extractGitUrl(this.registerForm.value.git_url);this.registerForm.patchValue({git_full_name:l,git_url:n})},l.prototype.onBlurWebGitUrl=function(){var l=this.app.util.extractGitUrl(this.registerForm.value.git_web_url);this.registerForm.patchValue({git_web_url:l})},l.prototype.onSubmit=function(){return t.b(this,void 0,void 0,function(){var l,n;return t.e(this,function(u){switch(u.label){case 0:console.log("onSubmit =",this.registerForm.value),u.label=1;case 1:return u.trys.push([1,6,,7]),this.apps_idx?(this.registerForm.value.apps_idx=this.apps_idx,[4,this.app.service.update_app(this.registerForm.value)]):[3,3];case 2:return l=u.sent(),console.log("result =",l),l&&this.app.goReplace("main"),[3,5];case 3:return[4,this.app.service.new_app(this.registerForm.value)];case 4:l=u.sent(),console.log("result =",l),l&&this.app.goReplace("main"),u.label=5;case 5:return[3,7];case 6:return n=u.sent(),alert(n),[3,7];case 7:return[2]}})})},l}(),o=function(){return function(){}}(),r=u("pMnS"),s=u("oBZk"),g=u("ZZ/e"),d=u("Ip0R"),h=u("ZYCi"),p=e.mb({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Cb(0,[(l()(),e.ob(0,0,null,null,176,"div",[],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,175,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.xb(l,3).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,3).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.onSubmit()&&t),t},null,null)),e.nb(2,16384,null,0,i.o,[],null,null),e.nb(3,540672,null,0,i.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.yb(2048,null,i.a,null,[i.f]),e.nb(5,16384,null,0,i.k,[[4,i.a]],null,null),(l()(),e.ob(6,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(7,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(8,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(9,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["git_url"])),(l()(),e.ob(11,0,null,0,6,"ion-input",[["formControlName","git_url"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focusout"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.xb(l,12)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,12)._handleInputEvent(u.target.value)&&t),"focusout"===n&&(t=!1!==i.onBlurGitUrl()&&t),t},s.p,s.f)),e.nb(12,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(14,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(16,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(17,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(18,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(19,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(20,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(21,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["app_id"])),(l()(),e.ob(23,0,null,0,6,"ion-input",[["formControlName","app_id"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,24)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,24)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(24,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(26,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(28,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(29,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(30,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(31,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(32,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(33,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["channel_name"])),(l()(),e.ob(35,0,null,0,6,"ion-input",[["formControlName","channel_name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,36)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,36)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(36,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(38,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(40,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(41,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(42,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(43,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(44,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(45,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["git_full_name"])),(l()(),e.ob(47,0,null,0,6,"ion-input",[["formControlName","git_full_name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,48)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,48)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(48,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(50,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(52,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(53,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(54,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(55,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(56,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(57,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["git git_user_id"])),(l()(),e.ob(59,0,null,0,6,"ion-input",[["formControlName","git_user_id"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,60)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,60)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(60,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(62,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(64,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(65,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(66,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(67,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(68,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(69,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["git git_user_pw"])),(l()(),e.ob(71,0,null,0,6,"ion-input",[["formControlName","git_user_pw"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,72)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,72)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(72,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(74,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(76,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(77,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(78,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(79,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(80,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(81,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["git_web_url"])),(l()(),e.ob(83,0,null,0,6,"ion-input",[["formControlName","git_web_url"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focusout"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.xb(l,84)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,84)._handleInputEvent(u.target.value)&&t),"focusout"===n&&(t=!1!==i.onBlurWebGitUrl()&&t),t},s.p,s.f)),e.nb(84,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(86,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(88,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(89,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(90,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(91,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(92,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(93,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["git_web_user_id"])),(l()(),e.ob(95,0,null,0,6,"ion-input",[["formControlName","git_web_user_id"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,96)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,96)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(96,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(98,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(100,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(101,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(102,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(103,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(104,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(105,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["git_web_user_id"])),(l()(),e.ob(107,0,null,0,6,"ion-input",[["formControlName","git_web_user_pw"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,108)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,108)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(108,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(110,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(112,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(113,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(114,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(115,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(116,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(117,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["cache_url"])),(l()(),e.ob(119,0,null,0,6,"ion-input",[["formControlName","cache_url"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,120)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,120)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(120,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(122,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(124,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(125,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(126,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(127,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(128,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(129,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["endpoint"])),(l()(),e.ob(131,0,null,0,6,"ion-input",[["formControlName","endpoint"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,132)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,132)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(132,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(134,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(136,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(137,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(138,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(139,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(140,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(141,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["auto_update"])),(l()(),e.ob(143,0,null,0,6,"ion-checkbox",[["formControlName","auto_update"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,144)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,144)._handleIonChange(u.target.checked)&&t),t},s.m,s.c)),e.nb(144,16384,null,0,g.d,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.d]),e.nb(146,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(148,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(149,49152,null,0,g.r,[e.h,e.k],null,null),(l()(),e.ob(150,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(151,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(152,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(153,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["android_link"])),(l()(),e.ob(155,0,null,0,6,"ion-input",[["formControlName","android_link"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,156)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,156)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(156,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(158,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(160,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(161,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(162,0,null,null,11,"ion-item",[],null,null,null,s.q,s.g)),e.nb(163,49152,null,0,g.H,[e.h,e.k],null,null),(l()(),e.ob(164,0,null,0,2,"ion-label",[],null,null,null,s.r,s.h)),e.nb(165,49152,null,0,g.N,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["ios_link"])),(l()(),e.ob(167,0,null,0,6,"ion-input",[["formControlName","ios_link"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,168)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.xb(l,168)._handleInputEvent(u.target.value)&&t),t},s.p,s.f)),e.nb(168,16384,null,0,g.Kb,[e.k],null,null),e.yb(1024,null,i.h,function(l){return[l]},[g.Kb]),e.nb(170,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.h],[2,i.q]],{name:[0,"name"]},null),e.yb(2048,null,i.i,null,[i.d]),e.nb(172,16384,null,0,i.j,[[4,i.i]],null,null),e.nb(173,49152,null,0,g.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.ob(174,0,null,null,2,"ion-button",[["type","submit"]],null,null,null,s.l,s.b)),e.nb(175,49152,null,0,g.k,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.Bb(-1,0,["Submit"]))],function(l,n){l(n,3,0,n.component.registerForm),l(n,14,0,"git_url"),l(n,17,0,"text"),l(n,26,0,"app_id"),l(n,29,0,"text"),l(n,38,0,"channel_name"),l(n,41,0,"text"),l(n,50,0,"git_full_name"),l(n,53,0,"text"),l(n,62,0,"git_user_id"),l(n,65,0,"text"),l(n,74,0,"git_user_pw"),l(n,77,0,"text"),l(n,86,0,"git_web_url"),l(n,89,0,"text"),l(n,98,0,"git_web_user_id"),l(n,101,0,"text"),l(n,110,0,"git_web_user_pw"),l(n,113,0,"text"),l(n,122,0,"cache_url"),l(n,125,0,"text"),l(n,134,0,"endpoint"),l(n,137,0,"text"),l(n,146,0,"auto_update"),l(n,158,0,"android_link"),l(n,161,0,"text"),l(n,170,0,"ios_link"),l(n,173,0,"text"),l(n,175,0,"submit")},function(l,n){l(n,1,0,e.xb(n,5).ngClassUntouched,e.xb(n,5).ngClassTouched,e.xb(n,5).ngClassPristine,e.xb(n,5).ngClassDirty,e.xb(n,5).ngClassValid,e.xb(n,5).ngClassInvalid,e.xb(n,5).ngClassPending),l(n,11,0,e.xb(n,16).ngClassUntouched,e.xb(n,16).ngClassTouched,e.xb(n,16).ngClassPristine,e.xb(n,16).ngClassDirty,e.xb(n,16).ngClassValid,e.xb(n,16).ngClassInvalid,e.xb(n,16).ngClassPending),l(n,23,0,e.xb(n,28).ngClassUntouched,e.xb(n,28).ngClassTouched,e.xb(n,28).ngClassPristine,e.xb(n,28).ngClassDirty,e.xb(n,28).ngClassValid,e.xb(n,28).ngClassInvalid,e.xb(n,28).ngClassPending),l(n,35,0,e.xb(n,40).ngClassUntouched,e.xb(n,40).ngClassTouched,e.xb(n,40).ngClassPristine,e.xb(n,40).ngClassDirty,e.xb(n,40).ngClassValid,e.xb(n,40).ngClassInvalid,e.xb(n,40).ngClassPending),l(n,47,0,e.xb(n,52).ngClassUntouched,e.xb(n,52).ngClassTouched,e.xb(n,52).ngClassPristine,e.xb(n,52).ngClassDirty,e.xb(n,52).ngClassValid,e.xb(n,52).ngClassInvalid,e.xb(n,52).ngClassPending),l(n,59,0,e.xb(n,64).ngClassUntouched,e.xb(n,64).ngClassTouched,e.xb(n,64).ngClassPristine,e.xb(n,64).ngClassDirty,e.xb(n,64).ngClassValid,e.xb(n,64).ngClassInvalid,e.xb(n,64).ngClassPending),l(n,71,0,e.xb(n,76).ngClassUntouched,e.xb(n,76).ngClassTouched,e.xb(n,76).ngClassPristine,e.xb(n,76).ngClassDirty,e.xb(n,76).ngClassValid,e.xb(n,76).ngClassInvalid,e.xb(n,76).ngClassPending),l(n,83,0,e.xb(n,88).ngClassUntouched,e.xb(n,88).ngClassTouched,e.xb(n,88).ngClassPristine,e.xb(n,88).ngClassDirty,e.xb(n,88).ngClassValid,e.xb(n,88).ngClassInvalid,e.xb(n,88).ngClassPending),l(n,95,0,e.xb(n,100).ngClassUntouched,e.xb(n,100).ngClassTouched,e.xb(n,100).ngClassPristine,e.xb(n,100).ngClassDirty,e.xb(n,100).ngClassValid,e.xb(n,100).ngClassInvalid,e.xb(n,100).ngClassPending),l(n,107,0,e.xb(n,112).ngClassUntouched,e.xb(n,112).ngClassTouched,e.xb(n,112).ngClassPristine,e.xb(n,112).ngClassDirty,e.xb(n,112).ngClassValid,e.xb(n,112).ngClassInvalid,e.xb(n,112).ngClassPending),l(n,119,0,e.xb(n,124).ngClassUntouched,e.xb(n,124).ngClassTouched,e.xb(n,124).ngClassPristine,e.xb(n,124).ngClassDirty,e.xb(n,124).ngClassValid,e.xb(n,124).ngClassInvalid,e.xb(n,124).ngClassPending),l(n,131,0,e.xb(n,136).ngClassUntouched,e.xb(n,136).ngClassTouched,e.xb(n,136).ngClassPristine,e.xb(n,136).ngClassDirty,e.xb(n,136).ngClassValid,e.xb(n,136).ngClassInvalid,e.xb(n,136).ngClassPending),l(n,143,0,e.xb(n,148).ngClassUntouched,e.xb(n,148).ngClassTouched,e.xb(n,148).ngClassPristine,e.xb(n,148).ngClassDirty,e.xb(n,148).ngClassValid,e.xb(n,148).ngClassInvalid,e.xb(n,148).ngClassPending),l(n,155,0,e.xb(n,160).ngClassUntouched,e.xb(n,160).ngClassTouched,e.xb(n,160).ngClassPristine,e.xb(n,160).ngClassDirty,e.xb(n,160).ngClassValid,e.xb(n,160).ngClassInvalid,e.xb(n,160).ngClassPending),l(n,167,0,e.xb(n,172).ngClassUntouched,e.xb(n,172).ngClassTouched,e.xb(n,172).ngClassPristine,e.xb(n,172).ngClassDirty,e.xb(n,172).ngClassValid,e.xb(n,172).ngClassInvalid,e.xb(n,172).ngClassPending)})}function x(l){return e.Cb(0,[(l()(),e.ob(0,0,null,null,6,"ion-header",[],null,null,null,s.o,s.e)),e.nb(1,49152,null,0,g.B,[e.h,e.k],null,null),(l()(),e.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,s.t,s.j)),e.nb(3,49152,null,0,g.Bb,[e.h,e.k],null,null),(l()(),e.ob(4,0,null,0,2,"ion-title",[],null,null,null,s.s,s.i)),e.nb(5,49152,null,0,g.zb,[e.h,e.k],null,null),(l()(),e.Bb(-1,0,["new-app"])),(l()(),e.ob(7,0,null,null,3,"ion-content",[],null,null,null,s.n,s.d)),e.nb(8,49152,null,0,g.u,[e.h,e.k],null,null),(l()(),e.fb(16777216,null,0,1,null,c)),e.nb(10,16384,null,0,d.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,10,0,n.component.readyToRender)},null)}function _(l){return e.Cb(0,[(l()(),e.ob(0,0,null,null,1,"app-new-app",[],null,null,null,x,p)),e.nb(1,114688,null,0,b,[a.a,i.b,h.a],null,null)],function(l,n){l(n,1,0)},null)}var C=e.kb("app-new-app",b,_,{},{},[]);u.d(n,"NewAppPageModuleNgFactory",function(){return v});var v=e.lb(o,[],function(l){return e.ub([e.vb(512,e.j,e.ab,[[8,[r.a,C]],[3,e.j],e.x]),e.vb(4608,d.k,d.j,[e.u,[2,d.q]]),e.vb(4608,i.p,i.p,[]),e.vb(4608,i.b,i.b,[]),e.vb(4608,g.c,g.c,[e.z,e.g]),e.vb(4608,g.Gb,g.Gb,[g.c,e.j,e.q,d.c]),e.vb(4608,g.Jb,g.Jb,[g.c,e.j,e.q,d.c]),e.vb(1073742336,d.b,d.b,[]),e.vb(1073742336,i.n,i.n,[]),e.vb(1073742336,i.g,i.g,[]),e.vb(1073742336,i.l,i.l,[]),e.vb(1073742336,g.Db,g.Db,[]),e.vb(1073742336,h.n,h.n,[[2,h.t],[2,h.m]]),e.vb(1073742336,o,o,[]),e.vb(1024,h.k,function(){return[[{path:"",component:b}]]},[])])})}}]);