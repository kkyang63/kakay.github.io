webpackJsonp([1],{"GXL/":function(e,i){},JWf0:function(e,i){},NHnr:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=n("kV13"),l={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var a=n("C7Lr")({name:"App"},l,!1,function(e){n("JWf0")},null,null).exports,o=n("5inH"),p=n("jkKj"),s=n.n(p),m=n("ZaRD"),r=n.n(m),T=n("VVHY"),u=n.n(T),c={data:function(){return{gpsArr:[],currentSpeed:0,speed:10,lushu:{},mycaiId:"陕D7356T",moveArrpois:[],startDistance:0,endDistance:0,lenPoint:u.a.length,map:{}}},mounted:function(){this.initMap(u.a)},methods:{initMap:function(e){var i=this;this.map=new s.a.Map("mymap"),this.map.centerAndZoom(new s.a.Point(117.878965,28.385631),18),this.map.enableScrollWheelZoom(),console.log(e[e.length-1]),this.drawLine(e),this.drawLabel(e[0],"https://api.map.baidu.com/img/markers.png"),this.drawLabel(e[e.length-1],"https://api.map.baidu.com/img/markers.png"),r.a.LuShu.prototype._moveNext=function(e){i.startDistance=e+1,e<this._path.length-1&&this._move(this._path[e],this._path[e+1],this._tween.linear)},r.a.LuShu.prototype._move=function(e,n,t){i.currentSpeed=e.speed;var l=this,a=0,o=e.speed*this._opts.speed/200,p=this._projection.lngLatToPoint(e),m=this._projection.lngLatToPoint(n),r=Math.round(l._getDistance(p,m)/o);r<1?l._moveNext(++l.i):l._intervalFlag=setInterval(function(){if(a>=r){if(clearInterval(l._intervalFlag),l.i>l._path.length)return;l._moveNext(++l.i)}else{a++;var i=t(p.x,m.x,a,r),o=t(p.y,m.y,a,r),T=l._projection.pointToLngLat(new s.a.Pixel(i,o));if(1===a){var u=null;l.i-1>=0&&(u=l._path[l.i-1]),!0===l._opts.enableRotation&&l.setRotation(u,e,n,l)}l._opts.autoView&&(l._map.getBounds().containsPoint(T)||l._map.setCenter(T)),l._marker.setPosition(T),l._setInfoWin(T)}},5)},this.initLushu(this.map,this.moveArrpois)},drawLineColor:function(e){var i="";return e<30?i="#6edc46":e>30&&e<=60?i="#ffbe1e":e>60&&e<=90?i="#ff8732":e>90&&e<=120?i="#ff4027":e>120&&(i="#f00055"),i},drawLine:function(e){for(var i=[],n=[],t=0;t<e.length;t++){i.splice(0,i.length),n.push({lng:e[t].lon,lat:e[t].lat,speed:e[t].speed}),this.moveArrpois=n;var l=e[t].lon,a=e[t].lat;if(t+1<e.length)var o=e[t+1].lon,p=e[t+1].lat;i.push(new s.a.Point(l,a)),i.push(new s.a.Point(o,p));var m=new s.a.Polyline(i,{strokeColor:this.drawLineColor(e[t].speed),strokeWeight:5,strokeOpacity:.8});this.map.addOverlay(m)}},drawLabel:function(e,i){var n=new s.a.Icon(i,new s.a.Size(23,25),{offset:new s.a.Size(10,25),imageOffset:new s.a.Size(0,-250)}),t=new s.a.Marker({lng:e.lon,lat:e.lat},{icon:n});this.map.addOverlay(t)},initLushu:function(e,i){this.lushu=new r.a.LuShu(e,i,{defaultContent:this.mycaiId,autoView:!0,icon:new s.a.Icon("https://developer.baidu.com/map/jsdemo/img/car.png",new s.a.Size(52,26),{anchor:new s.a.Size(27,13)}),speed:this.speed,landmarkPois:[],enableRotation:!0}),this.endDistance=this.lushu._path.length},controlProgress:function(e){var i=this.lushu;i.pause(),i.i=e,i._moveNext(e)},setlushuType:function(e){var i=this.lushu;switch(e){case 0:i.start();break;case 1:i.pause();break;case 2:i.stop(),i=""}},handleCommand:function(e){this.lushu._opts.speed=Number(e)},format:function(e){return e+"km/h"}}},g={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",[n("div",{attrs:{id:"mymap"}}),e._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"map-control"},[n("el-slider",{attrs:{"show-tooltip":!1,max:e.lenPoint},on:{change:e.controlProgress},model:{value:e.startDistance,callback:function(i){e.startDistance=i},expression:"startDistance"}})],1),e._v(" "),n("div",{staticClass:"map-speed"},[n("el-progress",{attrs:{width:120,type:"dashboard",percentage:e.currentSpeed,format:e.format}})],1),e._v(" "),n("div",{staticClass:"btn-operate"},[n("el-button",{attrs:{icon:"el-icon-video-pause"},on:{click:function(i){return e.setlushuType(1)}}}),e._v(" "),n("el-button",{attrs:{icon:"el-icon-video-play"},on:{click:function(i){return e.setlushuType(0)}}}),e._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(i){return e.setlushuType(2)}}}),e._v(" "),n("el-dropdown",{attrs:{size:"medium","split-button":"",type:"primary"},on:{command:e.handleCommand}},[e._v("\n          播放速度\n          "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"10"}},[e._v("慢")]),e._v(" "),n("el-dropdown-item",{attrs:{command:"50"}},[e._v("中")]),e._v(" "),n("el-dropdown-item",{attrs:{command:"100"}},[e._v("快")])],1)],1)],1)])])},staticRenderFns:[]};var d=n("C7Lr")(c,g,!1,function(e){n("VPyF")},"data-v-b80b8758",null).exports;t.default.use(o.a);var h=new o.a({routes:[{path:"/",name:"HelloWorld",component:d}]}),y=n("c+XW"),f=n.n(y);n("GXL/");t.default.use(f.a),t.default.config.productionTip=!1,new t.default({el:"#app",router:h,components:{App:a},template:"<App/>"})},VPyF:function(e,i){},VVHY:function(e,i){e.exports=[{lon:117.878913,lat:28.38622,speed:33,precision:0,lType:0,uTime:1587365086626,gTime:1587365086e3,etime:1587365086e3,angle:0},{lon:117.878853,lat:28.386167,speed:3.4,precision:0,lType:0,uTime:1587365096891,gTime:1587365096e3,etime:1587365096e3,angle:0},{lon:117.878894,lat:28.386196,speed:2.2,precision:0,lType:0,uTime:1587365106603,gTime:1587365106e3,etime:1587365106e3,angle:0},{lon:117.878701,lat:28.386183,speed:17.6,precision:0,lType:0,uTime:1587365117132,gTime:1587365116e3,etime:1587365116e3,angle:0},{lon:117.876752,lat:28.387251,speed:5.3,precision:0,lType:0,uTime:1587365176676,gTime:1587365176e3,etime:1587365176e3,angle:0},{lon:117.876266,lat:28.387571,speed:11.1,precision:0,lType:0,uTime:1587365208179,gTime:1587365206e3,etime:1587365206e3,angle:0},{lon:117.876627,lat:28.387504,speed:16.6,precision:0,lType:0,uTime:1587365216820,gTime:1587365216e3,etime:1587365216e3,angle:0},{lon:117.878925,lat:28.386255,speed:13.6,precision:0,lType:0,uTime:1587365266655,gTime:1587365266e3,etime:1587365266e3,angle:0},{lon:117.8785,lat:28.386584,speed:28.1,precision:0,lType:0,uTime:1587365277129,gTime:1587365276e3,etime:1587365276e3,angle:0},{lon:117.876354,lat:28.387784,speed:16.1,precision:0,lType:0,uTime:1587365307141,gTime:1587365306e3,etime:1587365306e3,angle:0},{lon:117.876439,lat:28.388038,speed:4.6,precision:0,lType:0,uTime:1587365336599,gTime:1587365336e3,etime:1587365336e3,angle:0},{lon:117.876579,lat:28.388203,speed:10.6,precision:0,lType:0,uTime:1587365346599,gTime:1587365346e3,etime:1587365346e3,angle:0},{lon:117.876908,lat:28.388182,speed:29,precision:0,lType:0,uTime:1587365357107,gTime:1587365356e3,etime:1587365356e3,angle:0},{lon:117.884846,lat:28.385569,speed:34.7,precision:0,lType:0,uTime:1587365396643,gTime:1587365396e3,etime:1587365396e3,angle:0},{lon:117.885057,lat:28.385136,speed:26.4,precision:0,lType:0,uTime:1587365406627,gTime:1587365406e3,etime:1587365406e3,angle:0},{lon:117.884541,lat:28.385587,speed:34,precision:0,lType:0,uTime:1587365416609,gTime:1587365416e3,etime:1587365416e3,angle:0},{lon:117.883017,lat:28.386157,speed:60.3,precision:0,lType:0,uTime:1587365426597,gTime:1587365426e3,etime:1587365426e3,angle:0},{lon:117.877019,lat:28.388159,speed:27.5,precision:0,lType:0,uTime:1587365446627,gTime:1587365446e3,etime:1587365446e3,angle:0},{lon:117.876603,lat:28.388209,speed:12.8,precision:0,lType:0,uTime:1587365457123,gTime:1587365456e3,etime:1587365456e3,angle:0},{lon:117.877549,lat:28.387969,speed:63.2,precision:0,lType:0,uTime:1587365466599,gTime:1587365466e3,etime:1587365466e3,angle:0},{lon:117.885085,lat:28.385479,speed:31.4,precision:0,lType:0,uTime:1587365517104,gTime:1587365516e3,etime:1587365516e3,angle:0},{lon:117.884961,lat:28.385123,speed:26.2,precision:0,lType:0,uTime:1587365526607,gTime:1587365526e3,etime:1587365526e3,angle:0},{lon:117.884405,lat:28.385571,speed:29.2,precision:0,lType:0,uTime:1587365536630,gTime:1587365536e3,etime:1587365536e3,angle:0},{lon:117.883609,lat:28.385882,speed:40.7,precision:0,lType:0,uTime:1587365546614,gTime:1587365546e3,etime:1587365546e3,angle:0},{lon:117.876816,lat:28.388144,speed:16,precision:0,lType:0,uTime:1587365616598,gTime:1587365616e3,etime:1587365616e3,angle:0},{lon:117.876603,lat:28.387975,speed:3.6,precision:0,lType:0,uTime:1587365626601,gTime:1587365626e3,etime:1587365626e3,angle:0},{lon:117.876557,lat:28.387653,speed:25,precision:0,lType:0,uTime:1587365646805,gTime:1587365646e3,etime:1587365646e3,angle:0},{lon:117.879152,lat:28.386228,speed:13.7,precision:0,lType:0,uTime:1587365676655,gTime:1587365676e3,etime:1587365676e3,angle:0},{lon:117.879026,lat:28.385825,speed:21.2,precision:0,lType:0,uTime:1587365686650,gTime:1587365686e3,etime:1587365686e3,angle:0},{lon:117.878824,lat:28.385498,speed:100,precision:0,lType:0,uTime:1587365856735,gTime:1587365856e3,etime:1587365856e3,angle:0},{lon:117.87719,lat:28.384869,speed:100,precision:0,lType:0,uTime:1587365867219,gTime:1587365866e3,etime:1587365866e3,angle:0},{lon:117.877219,lat:28.385184,speed:100,precision:0,lType:0,uTime:1587365876716,gTime:1587365876e3,etime:1587365876e3,angle:0},{lon:117.878054,lat:28.385593,speed:100,precision:0,lType:0,uTime:1587365906642,gTime:1587365906e3,etime:1587365906e3,angle:0},{lon:117.878241,lat:28.385456,speed:80,precision:0,lType:0,uTime:1587365916707,gTime:1587365916e3,etime:1587365916e3,angle:0},{lon:117.878418,lat:28.385745,speed:80,precision:0,lType:0,uTime:1587365936737,gTime:1587365936e3,etime:1587365936e3,angle:0},{lon:117.878639,lat:28.385939,speed:80,precision:0,lType:0,uTime:1587365946718,gTime:1587365946e3,etime:1587365946e3,angle:0},{lon:117.878693,lat:28.386381,speed:80,precision:0,lType:0,uTime:1587365987267,gTime:1587365986e3,etime:1587365986e3,angle:0},{lon:117.878525,lat:28.38599,speed:3.7,precision:0,lType:0,uTime:1587430224772,gTime:1587430223e3,etime:1587430223e3,angle:0},{lon:117.879196,lat:28.386173,speed:6.4,precision:0,lType:0,uTime:1587430234973,gTime:1587430234e3,etime:1587430234e3,angle:0},{lon:117.879047,lat:28.386268,speed:2.5,precision:0,lType:0,uTime:1587430244781,gTime:1587430244e3,etime:1587430244e3,angle:0},{lon:117.87908,lat:28.386313,speed:40,precision:0,lType:0,uTime:1587430265774,gTime:1587430264e3,etime:1587430264e3,angle:0},{lon:117.87881,lat:28.386389,speed:15.4,precision:0,lType:0,uTime:1587430334774,gTime:1587430334e3,etime:1587430334e3,angle:0},{lon:117.878718,lat:28.386523,speed:80,precision:0,lType:0,uTime:1587430415273,gTime:1587430414e3,etime:1587430414e3,angle:0},{lon:117.878745,lat:28.386547,speed:80,precision:0,lType:0,uTime:1587430425157,gTime:1587430424e3,etime:1587430424e3,angle:0},{lon:117.878701,lat:28.386489,speed:80,precision:0,lType:0,uTime:1587431034782,gTime:1587431034e3,etime:1587431034e3,angle:0},{lon:117.87873,lat:28.386523,speed:80,precision:0,lType:0,uTime:1587431276290,gTime:1587431274e3,etime:1587431274e3,angle:0},{lon:117.878853,lat:28.386455,speed:4,precision:0,lType:0,uTime:1587431725425,gTime:1587431724e3,etime:1587431724e3,angle:0},{lon:117.878932,lat:28.386486,speed:6.6,precision:0,lType:0,uTime:1587431734804,gTime:1587431734e3,etime:1587431734e3,angle:0},{lon:117.879016,lat:28.38667,speed:3.1,precision:0,lType:0,uTime:1587431764776,gTime:1587431764e3,etime:1587431764e3,angle:0},{lon:117.878999,lat:28.386773,speed:2.5,precision:0,lType:0,uTime:1587431784836,gTime:1587431784e3,etime:1587431784e3,angle:0},{lon:117.878862,lat:28.386877,speed:80,precision:0,lType:0,uTime:1587431864779,gTime:1587431864e3,etime:1587431864e3,angle:0},{lon:117.878905,lat:28.386902,speed:80,precision:0,lType:0,uTime:1587431934804,gTime:1587431934e3,etime:1587431934e3,angle:0},{lon:117.878885,lat:28.386956,speed:80,precision:0,lType:0,uTime:1587431964966,gTime:1587431964e3,etime:1587431964e3,angle:0},{lon:117.87899,lat:28.386802,speed:80,precision:0,lType:0,uTime:1587432105079,gTime:1587432104e3,etime:1587432104e3,angle:0},{lon:117.878989,lat:28.386875,speed:80,precision:0,lType:0,uTime:1587432125785,gTime:1587432124e3,etime:1587432124e3,angle:0},{lon:117.878926,lat:28.386853,speed:80,precision:0,lType:0,uTime:1587432155286,gTime:1587432154e3,etime:1587432154e3,angle:0},{lon:117.879087,lat:28.386605,speed:80,precision:0,lType:0,uTime:1587432335288,gTime:1587432334e3,etime:1587432334e3,angle:0},{lon:117.879096,lat:28.386704,speed:80,precision:0,lType:0,uTime:1587432394786,gTime:1587432394e3,etime:1587432394e3,angle:0},{lon:117.878887,lat:28.386897,speed:80,precision:0,lType:0,uTime:1587432404803,gTime:1587432404e3,etime:1587432404e3,angle:0},{lon:117.877113,lat:28.387862,speed:80,precision:0,lType:0,uTime:1587432434802,gTime:1587432434e3,etime:1587432434e3,angle:0},{lon:117.876755,lat:28.387943,speed:80,precision:0,lType:0,uTime:1587548694777,gTime:1587548694e3,etime:1587548694e3,angle:0},{lon:117.876755,lat:28.387943,speed:80,precision:0,lType:0,uTime:1587548694777,gTime:1587548694e3,etime:1587548694e3,angle:0}]},ZaRD:function(e,i){e.exports=BMapLib},jkKj:function(e,i){e.exports=BMap}},["NHnr"]);
//# sourceMappingURL=app.d5e1b9d6384291ea4d06.js.map