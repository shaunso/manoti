!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).d3={})}(this,(function(t){"use strict";function n(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function e(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function r(t){let r,o,u;function a(t,n,e=0,i=t.length){if(e<i){if(0!==r(n,n))return i;do{const r=e+i>>>1;o(t[r],n)<0?e=r+1:i=r}while(e<i)}return e}return 2!==t.length?(r=n,o=(e,r)=>n(t(e),r),u=(n,e)=>t(n)-e):(r=t===n||t===e?t:i,o=t,u=t),{left:a,center:function(t,n,e=0,r=t.length){const i=a(t,n,e,r-1);return i>e&&u(t[i-1],n)>-u(t[i],n)?i-1:i},right:function(t,n,e=0,i=t.length){if(e<i){if(0!==r(n,n))return i;do{const r=e+i>>>1;o(t[r],n)<=0?e=r+1:i=r}while(e<i)}return e}}}function i(){return 0}const o=r(n),u=o.right;o.left,r((function(t){return null===t?NaN:+t})).center;const a=Math.sqrt(50),c=Math.sqrt(10),s=Math.sqrt(2);function l(t,n,e){const r=(n-t)/Math.max(0,e),i=Math.floor(Math.log10(r)),o=r/Math.pow(10,i),u=o>=a?10:o>=c?5:o>=s?2:1;let f,h,g;return i<0?(g=Math.pow(10,-i)/u,f=Math.round(t*g),h=Math.round(n*g),f/g<t&&++f,h/g>n&&--h,g=-g):(g=Math.pow(10,i)*u,f=Math.round(t/g),h=Math.round(n/g),f*g<t&&++f,h*g>n&&--h),h<f&&.5<=e&&e<2?l(t,n,2*e):[f,h,g]}function f(t,n,e){return l(t=+t,n=+n,e=+e)[2]}function h(t,n,e){e=+e;const r=(n=+n)<(t=+t),i=r?f(n,t,e):f(t,n,e);return(r?-1:1)*(i<0?1/-i:i)}function g(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function p(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function d(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function m(){}var y=.7,v=1/y,w="\\s*([+-]?\\d+)\\s*",M="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",b="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",x=/^#([0-9a-f]{3,8})$/,_=new RegExp(`^rgb\\(${w},${w},${w}\\)$`),T=new RegExp(`^rgb\\(${b},${b},${b}\\)$`),C=new RegExp(`^rgba\\(${w},${w},${w},${M}\\)$`),D=new RegExp(`^rgba\\(${b},${b},${b},${M}\\)$`),N=new RegExp(`^hsl\\(${M},${b},${b}\\)$`),U=new RegExp(`^hsla\\(${M},${b},${b},${M}\\)$`),A={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function S(){return this.rgb().formatHex()}function k(){return this.rgb().formatRgb()}function $(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=x.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?F(n):3===e?new L(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?H(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?H(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=_.exec(t))?new L(n[1],n[2],n[3],1):(n=T.exec(t))?new L(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=C.exec(t))?H(n[1],n[2],n[3],n[4]):(n=D.exec(t))?H(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=N.exec(t))?R(n[1],n[2]/100,n[3]/100,1):(n=U.exec(t))?R(n[1],n[2]/100,n[3]/100,n[4]):A.hasOwnProperty(t)?F(A[t]):"transparent"===t?new L(NaN,NaN,NaN,0):null}function F(t){return new L(t>>16&255,t>>8&255,255&t,1)}function H(t,n,e,r){return r<=0&&(t=n=e=NaN),new L(t,n,e,r)}function Y(t,n,e,r){return 1===arguments.length?((i=t)instanceof m||(i=$(i)),i?new L((i=i.rgb()).r,i.g,i.b,i.opacity):new L):new L(t,n,e,null==r?1:r);var i}function L(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function E(){return`#${P(this.r)}${P(this.g)}${P(this.b)}`}function q(){const t=j(this.opacity);return`${1===t?"rgb(":"rgba("}${O(this.r)}, ${O(this.g)}, ${O(this.b)}${1===t?")":`, ${t})`}`}function j(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function O(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function P(t){return((t=O(t))<16?"0":"")+t.toString(16)}function R(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new B(t,n,e,r)}function V(t){if(t instanceof B)return new B(t.h,t.s,t.l,t.opacity);if(t instanceof m||(t=$(t)),!t)return new B;if(t instanceof B)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,c=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=c<.5?o+i:2-o-i,u*=60):a=c>0&&c<1?0:u,new B(u,a,c,t.opacity)}function B(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function I(t){return(t=(t||0)%360)<0?t+360:t}function Z(t){return Math.max(0,Math.min(1,t||0))}function z(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}p(m,$,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:S,formatHex:S,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return V(this).formatHsl()},formatRgb:k,toString:k}),p(L,Y,d(m,{brighter(t){return t=null==t?v:Math.pow(v,t),new L(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?y:Math.pow(y,t),new L(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new L(O(this.r),O(this.g),O(this.b),j(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:E,formatHex:E,formatHex8:function(){return`#${P(this.r)}${P(this.g)}${P(this.b)}${P(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:q,toString:q})),p(B,(function(t,n,e,r){return 1===arguments.length?V(t):new B(t,n,e,null==r?1:r)}),d(m,{brighter(t){return t=null==t?v:Math.pow(v,t),new B(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?y:Math.pow(y,t),new B(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new L(z(t>=240?t-240:t+120,i,r),z(t,i,r),z(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new B(I(this.h),Z(this.s),Z(this.l),j(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=j(this.opacity);return`${1===t?"hsl(":"hsla("}${I(this.h)}, ${100*Z(this.s)}%, ${100*Z(this.l)}%${1===t?")":`, ${t})`}`}}));var X=t=>()=>t;function W(t){return 1==(t=+t)?G:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):X(isNaN(n)?e:n)}}function G(t,n){var e=n-t;return e?function(t,n){return function(e){return t+e*n}}(t,e):X(isNaN(t)?n:t)}var J=function t(n){var e=W(n);function r(t,n){var r=e((t=Y(t)).r,(n=Y(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),u=G(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}return r.gamma=t,r}(1);function Q(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o;return i}}function K(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),u=new Array(r);for(e=0;e<i;++e)o[e]=ut(t[e],n[e]);for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}}function tt(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function nt(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function et(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=ut(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var rt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,it=new RegExp(rt.source,"g");function ot(t,n){var e,r,i,o=rt.lastIndex=it.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(e=rt.exec(t))&&(r=it.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,c.push({i:u,x:nt(e,r)})),o=it.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)a[(e=c[r]).i]=e.x(t);return a.join("")})}function ut(t,n){var e,r,i=typeof n;return null==n||"boolean"===i?X(n):("number"===i?nt:"string"===i?(e=$(n))?(n=e,J):ot:n instanceof $?J:n instanceof Date?tt:(r=n,!ArrayBuffer.isView(r)||r instanceof DataView?Array.isArray(n)?K:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?et:nt:Q))(t,n)}function at(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}function ct(t){return+t}var st=[0,1];function lt(t){return t}function ft(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e});var e}function ht(t,n,e){var r=t[0],i=t[1],o=n[0],u=n[1];return i<r?(r=ft(i,r),o=e(u,o)):(r=ft(r,i),o=e(o,u)),function(t){return o(r(t))}}function gt(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),o=new Array(r),a=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<r;)i[a]=ft(t[a],t[a+1]),o[a]=e(n[a],n[a+1]);return function(n){var e=u(t,n,1,r)-1;return o[e](i[e](n))}}function pt(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function dt(){var t,n,e,r,i,o,u=st,a=st,c=ut,s=lt;function l(){var t,n,e,c=Math.min(u.length,a.length);return s!==lt&&(t=u[0],n=u[c-1],t>n&&(e=t,t=n,n=e),s=function(e){return Math.max(t,Math.min(n,e))}),r=c>2?gt:ht,i=o=null,f}function f(n){return null==n||isNaN(n=+n)?e:(i||(i=r(u.map(t),a,c)))(t(s(n)))}return f.invert=function(e){return s(n((o||(o=r(a,u.map(t),nt)))(e)))},f.domain=function(t){return arguments.length?(u=Array.from(t,ct),l()):u.slice()},f.range=function(t){return arguments.length?(a=Array.from(t),l()):a.slice()},f.rangeRound=function(t){return a=Array.from(t),c=at,l()},f.clamp=function(t){return arguments.length?(s=!!t||lt,l()):s!==lt},f.interpolate=function(t){return arguments.length?(c=t,l()):c},f.unknown=function(t){return arguments.length?(e=t,f):e},function(e,r){return t=e,n=r,l()}}function mt(){return dt()(lt,lt)}function yt(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function vt(t){return(t=yt(Math.abs(t)))?t[1]:NaN}var wt,Mt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function bt(t){if(!(n=Mt.exec(t)))throw new Error("invalid format: "+t);var n;return new xt({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function xt(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function _t(t,n){var e=yt(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}bt.prototype=xt.prototype,xt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Tt={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>_t(100*t,n),r:_t,s:function(t,n){var e=yt(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(wt=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=r.length;return o===u?r:o>u?r+new Array(o-u+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+yt(t,Math.max(0,n+o-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Ct(t){return t}var Dt,Nt,Ut,At=Array.prototype.map,St=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function kt(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?Ct:(n=At.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],u=0,a=n[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(t.substring(i-=a,i+a)),!((c+=a+1)>r));)a=n[u=(u+1)%n.length];return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",u=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?Ct:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(At.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",s=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+"";function f(t){var n=(t=bt(t)).fill,e=t.align,f=t.sign,h=t.symbol,g=t.zero,p=t.width,d=t.comma,m=t.precision,y=t.trim,v=t.type;"n"===v?(d=!0,v="g"):Tt[v]||(void 0===m&&(m=12),y=!0,v="g"),(g||"0"===n&&"="===e)&&(g=!0,n="0",e="=");var w="$"===h?i:"#"===h&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",M="$"===h?o:/[%p]/.test(v)?c:"",b=Tt[v],x=/[defgprs%]/.test(v);function _(t){var i,o,c,h=w,_=M;if("c"===v)_=b(t)+_,t="";else{var T=(t=+t)<0||1/t<0;if(t=isNaN(t)?l:b(Math.abs(t),m),y&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),T&&0==+t&&"+"!==f&&(T=!1),h=(T?"("===f?f:s:"-"===f||"("===f?"":f)+h,_=("s"===v?St[8+wt/3]:"")+_+(T&&"("===f?")":""),x)for(i=-1,o=t.length;++i<o;)if(48>(c=t.charCodeAt(i))||c>57){_=(46===c?u+t.slice(i+1):t.slice(i))+_,t=t.slice(0,i);break}}d&&!g&&(t=r(t,1/0));var C=h.length+t.length+_.length,D=C<p?new Array(p-C+1).join(n):"";switch(d&&g&&(t=r(D+t,D.length?p-_.length:1/0),D=""),e){case"<":t=h+t+_+D;break;case"=":t=h+D+t+_;break;case"^":t=D.slice(0,C=D.length>>1)+h+t+_+D.slice(C);break;default:t=D+h+t+_}return a(t)}return m=void 0===m?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),_.toString=function(){return t+""},_}return{format:f,formatPrefix:function(t,n){var e=f(((t=bt(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(vt(n)/3))),i=Math.pow(10,-r),o=St[8+r/3];return function(t){return e(i*t)+o}}}}function $t(t,n,e,r){var i,o=h(t,n,e);switch((r=bt(null==r?",f":r)).type){case"s":var u=Math.max(Math.abs(t),Math.abs(n));return null!=r.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(vt(n)/3)))-vt(Math.abs(t)))}(o,u))||(r.precision=i),Ut(r,u);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,vt(n)-vt(t))+1}(o,Math.max(Math.abs(t),Math.abs(n))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=function(t){return Math.max(0,-vt(Math.abs(t)))}(o))||(r.precision=i-2*("%"===r.type))}return Nt(r)}function Ft(t){var n=t.domain;return t.ticks=function(t){var e=n();return function(t,n,e){if(!((e=+e)>0))return[];if((t=+t)==(n=+n))return[t];const r=n<t,[i,o,u]=r?l(n,t,e):l(t,n,e);if(!(o>=i))return[];const a=o-i+1,c=new Array(a);if(r)if(u<0)for(let t=0;t<a;++t)c[t]=(o-t)/-u;else for(let t=0;t<a;++t)c[t]=(o-t)*u;else if(u<0)for(let t=0;t<a;++t)c[t]=(i+t)/-u;else for(let t=0;t<a;++t)c[t]=(i+t)*u;return c}(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return $t(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i,o=n(),u=0,a=o.length-1,c=o[u],s=o[a],l=10;for(s<c&&(i=c,c=s,s=i,i=u,u=a,a=i);l-- >0;){if((i=f(c,s,e))===r)return o[u]=c,o[a]=s,n(o);if(i>0)c=Math.floor(c/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;c=Math.ceil(c*i)/i,s=Math.floor(s*i)/i}r=i}return t},t}Dt=kt({thousands:",",grouping:[3],currency:["$",""]}),Nt=Dt.format,Ut=Dt.formatPrefix;const Ht=new Date,Yt=new Date;function Lt(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=n=>(t(n=new Date(+n)),n),i.ceil=e=>(t(e=new Date(e-1)),n(e,1),t(e),e),i.round=t=>{const n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=(t,e)=>(n(t=new Date(+t),null==e?1:Math.floor(e)),t),i.range=(e,r,o)=>{const u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;let a;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=e=>Lt((n=>{if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),((t,r)=>{if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})),e&&(i.count=(n,r)=>(Ht.setTime(+n),Yt.setTime(+r),t(Ht),t(Yt),Math.floor(e(Ht,Yt))),i.every=t=>(t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?n=>r(n)%t==0:n=>i.count(0,n)%t==0):i:null)),i}const Et=Lt((()=>{}),((t,n)=>{t.setTime(+t+n)}),((t,n)=>n-t));Et.every=t=>(t=Math.floor(t),isFinite(t)&&t>0?t>1?Lt((n=>{n.setTime(Math.floor(n/t)*t)}),((n,e)=>{n.setTime(+n+e*t)}),((n,e)=>(e-n)/t)):Et:null),Et.range;const qt=1e3,jt=6e4,Ot=36e5,Pt=864e5,Rt=6048e5,Vt=2592e6,Bt=31536e6,It=Lt((t=>{t.setTime(t-t.getMilliseconds())}),((t,n)=>{t.setTime(+t+n*qt)}),((t,n)=>(n-t)/qt),(t=>t.getUTCSeconds()));It.range;const Zt=Lt((t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*qt)}),((t,n)=>{t.setTime(+t+n*jt)}),((t,n)=>(n-t)/jt),(t=>t.getMinutes()));Zt.range;const zt=Lt((t=>{t.setUTCSeconds(0,0)}),((t,n)=>{t.setTime(+t+n*jt)}),((t,n)=>(n-t)/jt),(t=>t.getUTCMinutes()));zt.range;const Xt=Lt((t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*qt-t.getMinutes()*jt)}),((t,n)=>{t.setTime(+t+n*Ot)}),((t,n)=>(n-t)/Ot),(t=>t.getHours()));Xt.range;const Wt=Lt((t=>{t.setUTCMinutes(0,0,0)}),((t,n)=>{t.setTime(+t+n*Ot)}),((t,n)=>(n-t)/Ot),(t=>t.getUTCHours()));Wt.range;const Gt=Lt((t=>t.setHours(0,0,0,0)),((t,n)=>t.setDate(t.getDate()+n)),((t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*jt)/Pt),(t=>t.getDate()-1));Gt.range;const Jt=Lt((t=>{t.setUTCHours(0,0,0,0)}),((t,n)=>{t.setUTCDate(t.getUTCDate()+n)}),((t,n)=>(n-t)/Pt),(t=>t.getUTCDate()-1));Jt.range;const Qt=Lt((t=>{t.setUTCHours(0,0,0,0)}),((t,n)=>{t.setUTCDate(t.getUTCDate()+n)}),((t,n)=>(n-t)/Pt),(t=>Math.floor(t/Pt)));function Kt(t){return Lt((n=>{n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),((t,n)=>{t.setDate(t.getDate()+7*n)}),((t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*jt)/Rt))}Qt.range;const tn=Kt(0),nn=Kt(1),en=Kt(2),rn=Kt(3),on=Kt(4),un=Kt(5),an=Kt(6);function cn(t){return Lt((n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),((t,n)=>{t.setUTCDate(t.getUTCDate()+7*n)}),((t,n)=>(n-t)/Rt))}tn.range,nn.range,en.range,rn.range,on.range,un.range,an.range;const sn=cn(0),ln=cn(1),fn=cn(2),hn=cn(3),gn=cn(4),pn=cn(5),dn=cn(6);sn.range,ln.range,fn.range,hn.range,gn.range,pn.range,dn.range;const mn=Lt((t=>{t.setDate(1),t.setHours(0,0,0,0)}),((t,n)=>{t.setMonth(t.getMonth()+n)}),((t,n)=>n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())),(t=>t.getMonth()));mn.range;const yn=Lt((t=>{t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),((t,n)=>{t.setUTCMonth(t.getUTCMonth()+n)}),((t,n)=>n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())),(t=>t.getUTCMonth()));yn.range;const vn=Lt((t=>{t.setMonth(0,1),t.setHours(0,0,0,0)}),((t,n)=>{t.setFullYear(t.getFullYear()+n)}),((t,n)=>n.getFullYear()-t.getFullYear()),(t=>t.getFullYear()));vn.every=t=>isFinite(t=Math.floor(t))&&t>0?Lt((n=>{n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),((n,e)=>{n.setFullYear(n.getFullYear()+e*t)})):null,vn.range;const wn=Lt((t=>{t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),((t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n)}),((t,n)=>n.getUTCFullYear()-t.getUTCFullYear()),(t=>t.getUTCFullYear()));wn.every=t=>isFinite(t=Math.floor(t))&&t>0?Lt((n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),((n,e)=>{n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null,wn.range;const[Mn,bn]=function(t,n,e,i,o,u){const a=[[It,1,qt],[It,5,5e3],[It,15,15e3],[It,30,3e4],[u,1,jt],[u,5,3e5],[u,15,9e5],[u,30,18e5],[o,1,Ot],[o,3,108e5],[o,6,216e5],[o,12,432e5],[i,1,Pt],[i,2,1728e5],[e,1,Rt],[n,1,Vt],[n,3,7776e6],[t,1,Bt]];function c(n,e,i){const o=Math.abs(e-n)/i,u=r((([,,t])=>t)).right(a,o);if(u===a.length)return t.every(h(n/Bt,e/Bt,i));if(0===u)return Et.every(Math.max(h(n,e,i),1));const[c,s]=a[o/a[u-1][2]<a[u][2]/o?u-1:u];return c.every(s)}return[function(t,n,e){const r=n<t;r&&([t,n]=[n,t]);const i=e&&"function"==typeof e.range?e:c(t,n,e),o=i?i.range(t,+n+1):[];return r?o.reverse():o},c]}(vn,mn,tn,Gt,Xt,Zt);function xn(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function _n(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Tn(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}var Cn,Dn,Nn,Un={"-":"",_:" ",0:"0"},An=/^\s*\d+/,Sn=/^%/,kn=/[\\^$*+?|[\]().{}]/g;function $n(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Fn(t){return t.replace(kn,"\\$&")}function Hn(t){return new RegExp("^(?:"+t.map(Fn).join("|")+")","i")}function Yn(t){return new Map(t.map(((t,n)=>[t.toLowerCase(),n])))}function Ln(t,n,e){var r=An.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function En(t,n,e){var r=An.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function qn(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function jn(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function On(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function Pn(t,n,e){var r=An.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function Rn(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Vn(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function Bn(t,n,e){var r=An.exec(n.slice(e,e+1));return r?(t.q=3*r[0]-3,e+r[0].length):-1}function In(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Zn(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function zn(t,n,e){var r=An.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Xn(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Wn(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function Gn(t,n,e){var r=An.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function Jn(t,n,e){var r=An.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Qn(t,n,e){var r=An.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Kn(t,n,e){var r=Sn.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function te(t,n,e){var r=An.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function ne(t,n,e){var r=An.exec(n.slice(e));return r?(t.s=+r[0],e+r[0].length):-1}function ee(t,n){return $n(t.getDate(),n,2)}function re(t,n){return $n(t.getHours(),n,2)}function ie(t,n){return $n(t.getHours()%12||12,n,2)}function oe(t,n){return $n(1+Gt.count(vn(t),t),n,3)}function ue(t,n){return $n(t.getMilliseconds(),n,3)}function ae(t,n){return ue(t,n)+"000"}function ce(t,n){return $n(t.getMonth()+1,n,2)}function se(t,n){return $n(t.getMinutes(),n,2)}function le(t,n){return $n(t.getSeconds(),n,2)}function fe(t){var n=t.getDay();return 0===n?7:n}function he(t,n){return $n(tn.count(vn(t)-1,t),n,2)}function ge(t){var n=t.getDay();return n>=4||0===n?on(t):on.ceil(t)}function pe(t,n){return t=ge(t),$n(on.count(vn(t),t)+(4===vn(t).getDay()),n,2)}function de(t){return t.getDay()}function me(t,n){return $n(nn.count(vn(t)-1,t),n,2)}function ye(t,n){return $n(t.getFullYear()%100,n,2)}function ve(t,n){return $n((t=ge(t)).getFullYear()%100,n,2)}function we(t,n){return $n(t.getFullYear()%1e4,n,4)}function Me(t,n){var e=t.getDay();return $n((t=e>=4||0===e?on(t):on.ceil(t)).getFullYear()%1e4,n,4)}function be(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+$n(n/60|0,"0",2)+$n(n%60,"0",2)}function xe(t,n){return $n(t.getUTCDate(),n,2)}function _e(t,n){return $n(t.getUTCHours(),n,2)}function Te(t,n){return $n(t.getUTCHours()%12||12,n,2)}function Ce(t,n){return $n(1+Jt.count(wn(t),t),n,3)}function De(t,n){return $n(t.getUTCMilliseconds(),n,3)}function Ne(t,n){return De(t,n)+"000"}function Ue(t,n){return $n(t.getUTCMonth()+1,n,2)}function Ae(t,n){return $n(t.getUTCMinutes(),n,2)}function Se(t,n){return $n(t.getUTCSeconds(),n,2)}function ke(t){var n=t.getUTCDay();return 0===n?7:n}function $e(t,n){return $n(sn.count(wn(t)-1,t),n,2)}function Fe(t){var n=t.getUTCDay();return n>=4||0===n?gn(t):gn.ceil(t)}function He(t,n){return t=Fe(t),$n(gn.count(wn(t),t)+(4===wn(t).getUTCDay()),n,2)}function Ye(t){return t.getUTCDay()}function Le(t,n){return $n(ln.count(wn(t)-1,t),n,2)}function Ee(t,n){return $n(t.getUTCFullYear()%100,n,2)}function qe(t,n){return $n((t=Fe(t)).getUTCFullYear()%100,n,2)}function je(t,n){return $n(t.getUTCFullYear()%1e4,n,4)}function Oe(t,n){var e=t.getUTCDay();return $n((t=e>=4||0===e?gn(t):gn.ceil(t)).getUTCFullYear()%1e4,n,4)}function Pe(){return"+0000"}function Re(){return"%"}function Ve(t){return+t}function Be(t){return Math.floor(+t/1e3)}t.timeFormat=void 0,function(n){Cn=function(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,u=t.shortDays,a=t.months,c=t.shortMonths,s=Hn(i),l=Yn(i),f=Hn(o),h=Yn(o),g=Hn(u),p=Yn(u),d=Hn(a),m=Yn(a),y=Hn(c),v=Yn(c),w={a:function(t){return u[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return a[t.getMonth()]},c:null,d:ee,e:ee,f:ae,g:ve,G:Me,H:re,I:ie,j:oe,L:ue,m:ce,M:se,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:Ve,s:Be,S:le,u:fe,U:he,V:pe,w:de,W:me,x:null,X:null,y:ye,Y:we,Z:be,"%":Re},M={a:function(t){return u[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return a[t.getUTCMonth()]},c:null,d:xe,e:xe,f:Ne,g:qe,G:Oe,H:_e,I:Te,j:Ce,L:De,m:Ue,M:Ae,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:Ve,s:Be,S:Se,u:ke,U:$e,V:He,w:Ye,W:Le,x:null,X:null,y:Ee,Y:je,Z:Pe,"%":Re},b={a:function(t,n,e){var r=g.exec(n.slice(e));return r?(t.w=p.get(r[0].toLowerCase()),e+r[0].length):-1},A:function(t,n,e){var r=f.exec(n.slice(e));return r?(t.w=h.get(r[0].toLowerCase()),e+r[0].length):-1},b:function(t,n,e){var r=y.exec(n.slice(e));return r?(t.m=v.get(r[0].toLowerCase()),e+r[0].length):-1},B:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.m=m.get(r[0].toLowerCase()),e+r[0].length):-1},c:function(t,e,r){return T(t,n,e,r)},d:Zn,e:Zn,f:Qn,g:Rn,G:Pn,H:Xn,I:Xn,j:zn,L:Jn,m:In,M:Wn,p:function(t,n,e){var r=s.exec(n.slice(e));return r?(t.p=l.get(r[0].toLowerCase()),e+r[0].length):-1},q:Bn,Q:te,s:ne,S:Gn,u:En,U:qn,V:jn,w:Ln,W:On,x:function(t,n,r){return T(t,e,n,r)},X:function(t,n,e){return T(t,r,n,e)},y:Rn,Y:Pn,Z:Vn,"%":Kn};function x(t,n){return function(e){var r,i,o,u=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++a<s;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=Un[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),u.push(r),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function _(t,n){return function(e){var r,i,o=Tn(1900,void 0,1);if(T(o,t,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(n&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=_n(Tn(o.y,0,1))).getUTCDay(),r=i>4||0===i?ln.ceil(r):ln(r),r=Jt.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=xn(Tn(o.y,0,1))).getDay(),r=i>4||0===i?nn.ceil(r):nn(r),r=Gt.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?_n(Tn(o.y,0,1)).getUTCDay():xn(Tn(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,_n(o)):xn(o)}}function T(t,n,e,r){for(var i,o,u=0,a=n.length,c=e.length;u<a;){if(r>=c)return-1;if(37===(i=n.charCodeAt(u++))){if(i=n.charAt(u++),!(o=b[i in Un?n.charAt(u++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return w.x=x(e,w),w.X=x(r,w),w.c=x(n,w),M.x=x(e,M),M.X=x(r,M),M.c=x(n,M),{format:function(t){var n=x(t+="",w);return n.toString=function(){return t},n},parse:function(t){var n=_(t+="",!1);return n.toString=function(){return t},n},utcFormat:function(t){var n=x(t+="",M);return n.toString=function(){return t},n},utcParse:function(t){var n=_(t+="",!0);return n.toString=function(){return t},n}}}(n),t.timeFormat=Cn.format,Cn.parse,Dn=Cn.utcFormat,Nn=Cn.utcParse}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Ie="%Y-%m-%dT%H:%M:%S.%LZ";Date.prototype.toISOString||Dn(Ie);var Ze=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:Nn(Ie);function ze(t){return new Date(t)}function Xe(t){return t instanceof Date?+t:+new Date(+t)}function We(t,n,e,r,i,o,u,a,c,s){var l=mt(),f=l.invert,h=l.domain,g=s(".%L"),p=s(":%S"),d=s("%I:%M"),m=s("%I %p"),y=s("%a %d"),v=s("%b %d"),w=s("%B"),M=s("%Y");function b(t){return(c(t)<t?g:a(t)<t?p:u(t)<t?d:o(t)<t?m:r(t)<t?i(t)<t?y:v:e(t)<t?w:M)(t)}return l.invert=function(t){return new Date(f(t))},l.domain=function(t){return arguments.length?h(Array.from(t,Xe)):h().map(ze)},l.ticks=function(n){var e=h();return t(e[0],e[e.length-1],null==n?10:n)},l.tickFormat=function(t,n){return null==n?b:s(n)},l.nice=function(t){var e=h();return t&&"function"==typeof t.range||(t=n(e[0],e[e.length-1],null==t?10:t)),t?h(function(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t}(e,t)):l},l.copy=function(){return pt(l,We(t,n,e,r,i,o,u,a,c,s))},l}var Ge="http://www.w3.org/1999/xhtml",Je={svg:"http://www.w3.org/2000/svg",xhtml:Ge,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Qe(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),Je.hasOwnProperty(n)?{space:Je[n],local:t}:t}function Ke(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===Ge&&n.documentElement.namespaceURI===Ge?n.createElement(t):n.createElementNS(e,t)}}function tr(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function nr(t){var n=Qe(t);return(n.local?tr:Ke)(n)}function er(){}function rr(t){return null==t?er:function(){return this.querySelector(t)}}function ir(){return[]}function or(t){return function(){return null==(n=t.apply(this,arguments))?[]:Array.isArray(n)?n:Array.from(n);var n}}function ur(t){return function(n){return n.matches(t)}}var ar=Array.prototype.find;function cr(){return this.firstElementChild}var sr=Array.prototype.filter;function lr(){return Array.from(this.children)}function fr(t){return new Array(t.length)}function hr(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function gr(t,n,e,r,i,o){for(var u,a=0,c=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new hr(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function pr(t,n,e,r,i,o,u){var a,c,s,l=new Map,f=n.length,h=o.length,g=new Array(f);for(a=0;a<f;++a)(c=n[a])&&(g[a]=s=u.call(c,c.__data__,a,n)+"",l.has(s)?i[a]=c:l.set(s,c));for(a=0;a<h;++a)s=u.call(t,o[a],a,o)+"",(c=l.get(s))?(r[a]=c,c.__data__=o[a],l.delete(s)):e[a]=new hr(t,o[a]);for(a=0;a<f;++a)(c=n[a])&&l.get(g[a])===c&&(i[a]=c)}function dr(t){return t.__data__}function mr(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function yr(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function vr(t){return function(){this.removeAttribute(t)}}function wr(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Mr(t,n){return function(){this.setAttribute(t,n)}}function br(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function xr(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function _r(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Tr(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Cr(t){return function(){this.style.removeProperty(t)}}function Dr(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Nr(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Ur(t){return function(){delete this[t]}}function Ar(t,n){return function(){this[t]=n}}function Sr(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function kr(t){return t.trim().split(/^|\s+/)}function $r(t){return t.classList||new Fr(t)}function Fr(t){this._node=t,this._names=kr(t.getAttribute("class")||"")}function Hr(t,n){for(var e=$r(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Yr(t,n){for(var e=$r(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Lr(t){return function(){Hr(this,t)}}function Er(t){return function(){Yr(this,t)}}function qr(t,n){return function(){(n.apply(this,arguments)?Hr:Yr)(this,t)}}function jr(){this.textContent=""}function Or(t){return function(){this.textContent=t}}function Pr(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function Rr(){this.innerHTML=""}function Vr(t){return function(){this.innerHTML=t}}function Br(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function Ir(){this.nextSibling&&this.parentNode.appendChild(this)}function Zr(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function zr(){return null}function Xr(){var t=this.parentNode;t&&t.removeChild(this)}function Wr(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Gr(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Jr(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function Qr(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var u=0,a=i.length;u<a;++u)if((r=i[u]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function Kr(t,n,e){var r=Tr(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ti(t,n){return function(){return Kr(this,t,n)}}function ni(t,n){return function(){return Kr(this,t,n.apply(this,arguments))}}hr.prototype={constructor:hr,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},Fr.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var ei=[null];function ri(t,n){this._groups=t,this._parents=n}ri.prototype={constructor:ri,select:function(t){"function"!=typeof t&&(t=rr(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],c=a.length,s=r[i]=new Array(c),l=0;l<c;++l)(o=a[l])&&(u=t.call(o,o.__data__,l,a))&&("__data__"in o&&(u.__data__=o.__data__),s[l]=u);return new ri(r,this._parents)},selectAll:function(t){t="function"==typeof t?or(t):function(t){return null==t?ir:function(){return this.querySelectorAll(t)}}(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,s=0;s<c;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new ri(r,i)},selectChild:function(t){return this.select(null==t?cr:function(t){return function(){return ar.call(this.children,t)}}("function"==typeof t?t:ur(t)))},selectChildren:function(t){return this.selectAll(null==t?lr:function(t){return function(){return sr.call(this.children,t)}}("function"==typeof t?t:ur(t)))},filter:function(t){"function"!=typeof t&&(t=function(t){return function(){return this.matches(t)}}(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new ri(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,dr);var e,r=n?pr:gr,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,a=new Array(u),c=new Array(u),s=new Array(u),l=0;l<u;++l){var f=i[l],h=o[l],g=h.length,p=mr(t.call(f,f&&f.__data__,l,i)),d=p.length,m=c[l]=new Array(d),y=a[l]=new Array(d);r(f,h,m,y,s[l]=new Array(g),p,n);for(var v,w,M=0,b=0;M<d;++M)if(v=m[M]){for(M>=b&&(b=M+1);!(w=y[b])&&++b<d;);v._next=w||null}}return(a=new ri(a,i))._enter=c,a._exit=s,a},enter:function(){return new ri(this._enter||this._groups.map(fr),this._parents)},exit:function(){return new ri(this._exit||this._groups.map(fr),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,u=Math.min(i,o),a=new Array(i),c=0;c<u;++c)for(var s,l=e[c],f=r[c],h=l.length,g=a[c]=new Array(h),p=0;p<h;++p)(s=l[p]||f[p])&&(g[p]=s);for(;c<i;++c)a[c]=e[c];return new ri(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=yr);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],c=a.length,s=i[o]=new Array(c),l=0;l<c;++l)(u=a[l])&&(s[l]=u);s.sort(n)}return new ri(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=Qe(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?wr:vr:"function"==typeof n?e.local?_r:xr:e.local?br:Mr)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?Cr:"function"==typeof n?Nr:Dr)(t,n,null==e?"":e)):function(t,n){return t.style.getPropertyValue(n)||Tr(t).getComputedStyle(t,null).getPropertyValue(n)}(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?Ur:"function"==typeof n?Sr:Ar)(t,n)):this.node()[t]},classed:function(t,n){var e=kr(t+"");if(arguments.length<2){for(var r=$r(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?qr:n?Lr:Er)(e,n))},text:function(t){return arguments.length?this.each(null==t?jr:("function"==typeof t?Pr:Or)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Rr:("function"==typeof t?Br:Vr)(t)):this.node().innerHTML},raise:function(){return this.each(Ir)},lower:function(){return this.each(Zr)},append:function(t){var n="function"==typeof t?t:nr(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:nr(t),r=null==n?zr:"function"==typeof n?n:rr(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(Xr)},clone:function(t){return this.select(t?Gr:Wr)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?Qr:Jr,r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var c,s=0,l=a.length;s<l;++s)for(r=0,c=a[s];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?ni:ti)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,u=i.length;o<u;++o)(r=i[o])&&(yield r)}},t.bisector=r,t.extent=function(t,n){let e,r;if(void 0===n)for(const n of t)null!=n&&(void 0===e?n>=n&&(e=r=n):(e>n&&(e=n),r<n&&(r=n)));else{let i=-1;for(let o of t)null!=(o=n(o,++i,t))&&(void 0===e?o>=o&&(e=r=o):(e>o&&(e=o),r<o&&(r=o)))}return[e,r]},t.isoParse=Ze,t.max=function(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e<n||void 0===e&&n>=n)&&(e=n);else{let r=-1;for(let i of t)null!=(i=n(i,++r,t))&&(e<i||void 0===e&&i>=i)&&(e=i)}return e},t.pointer=function(t,n){if(t=function(t){let n;for(;n=t.sourceEvent;)t=n;return t}(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(n.getScreenCTM().inverse())).x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}}return[t.pageX,t.pageY]},t.scaleLinear=function t(){var n=mt();return n.copy=function(){return pt(n,t())},g.apply(n,arguments),Ft(n)},t.scaleTime=function(){return g.apply(We(Mn,bn,vn,mn,tn,Gt,Xt,Zt,It,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},t.select=function(t){return"string"==typeof t?new ri([[document.querySelector(t)]],[document.documentElement]):new ri([[t]],ei)},t.utcDay=Jt}));
// grid carousel
const container = document.querySelectorAll('.carousel-grid-container');
const track = document.querySelectorAll('.carousel__track-grid-container');
let i = 0;

track.forEach( d => {
  const slides = Array.from( d.children );
  const slideWidth = slides[0].getBoundingClientRect().width;
  const slideHeight = slides[0].getBoundingClientRect().height;
  
  const carouselNavDotsIndicators = container[i].querySelector('.carousel__nav');
  const carouselPositionIndicatorDots = Array.from( carouselNavDotsIndicators.children );

  // arrange the slides next to each other
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach( setSlidePosition );

  const moveToSlide = (d, currentSlide, targetSlide) => {
    if (!targetSlide) return;
    
    currentSlide.classList.remove('current-slide');
    currentSlide.classList.add('is-hidden');
    targetSlide.classList.add('current-slide');
    targetSlide.classList.remove('is-hidden');
  };

  const updateDotIndicatorPosition = ( currentDot, targetDot ) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  const displayArrows = (slides, previousButton, nextButton, targetDotIndex) => {
    if (targetDotIndex === 0) {
      previousButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden')
    } else if (targetDotIndex === slides.length - 1) {
      previousButton.classList.remove('is-hidden');
      nextButton.classList.add('is-hidden');
    } else {
      previousButton.classList.remove('is-hidden');
      nextButton.classList.remove('is-hidden');
    }
  }

  const nextButton = container[i].querySelector('.carousel__button--right');
  const previousButton = container[i].querySelector('.carousel__button--left');

  // when user clicks left, move slide to the left
  previousButton.addEventListener('click', (e) => {
    const currentSlide = d.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const previousIndex = slides.findIndex(slide => slide === previousSlide);
    const currentDot = carouselNavDotsIndicators.querySelector('.current-slide');
    const previousDot = currentDot.previousElementSibling;

    moveToSlide(d, currentSlide, previousSlide);
    updateDotIndicatorPosition(currentDot, previousDot);
    displayArrows(slides, previousButton, nextButton, previousIndex);
  });
  // when user clicks left, move slide to the right
  nextButton.addEventListener('click', (e) => {
    const currentSlide = d.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    const currentDot = carouselNavDotsIndicators.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(d, currentSlide, nextSlide);
    updateDotIndicatorPosition(currentDot, nextDot);
    displayArrows(slides, previousButton, nextButton, nextIndex);
  });

  // when user clicks the nav indicators, move to the clicked slide
  carouselNavDotsIndicators.addEventListener('click', (e) => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = d.querySelector('.current-slide');
    const currentDot = carouselNavDotsIndicators.querySelector('.current-slide');
    const targetDotIndex = carouselPositionIndicatorDots.findIndex( el => el === targetDot );
    const targetSlide  = slides[targetDotIndex];
    
    moveToSlide(d, currentSlide, targetSlide);
    updateDotIndicatorPosition(currentDot, targetDot);
    displayArrows(slides, previousButton, nextButton, targetDotIndex);
  })
  i++;
})
// search function
const body = document.querySelector('body');
const icon = document.querySelector('#search-icon');
const searchBox = document.querySelector('#search-box');
const searchBoxTextBox = document.querySelector('#search-text-box');
const searchResultsBox = document.querySelector('#search-results');
const closeSearchBox = document.querySelector('svg.lucide-x');

searchResultsBox.replaceChildren();

const userSearchList = ["asun - african sun limited","axia - axia corporation limited","cmcl - caledonia mining corporation plc, zimbabwe depository receipts","edgr - edgars stores limited","fca - first capital bank limited","inn - innscor africa limited","inv - invictus energy limited, zimbabwe depository receipts","ned - nedbank zimbabwe limited, zimbabwe depository receipts","phl - padenga holdings limited","scil - seed co international limited","sim - simbisa brands limited","wphl - westprop holdings limited","zimw - zimplow holdings limited"];

const searchListReturnedResultArray = ["ASUN - African Sun Limited","AXIA - Axia Corporation Limited","CMCL - Caledonia Mining Corporation Plc, Zimbabwe Depository Receipts","EDGR - Edgars Stores Limited","FCA - First Capital Bank Limited","INN - Innscor Africa Limited","INV - Invictus Energy Limited, Zimbabwe Depository Receipts","NED - Nedbank Zimbabwe Limited, Zimbabwe Depository Receipts","PHL - Padenga Holdings Limited","SCIL - Seed Co International Limited","SIM - Simbisa Brands Limited","WPHL - Westprop Holdings Limited","ZIMW - Zimplow Holdings Limited"];

const linksList = ["/asun","/axia","/cmcl","/edgr","/fca","/inn","/inv","/ned","/phl","/scil","/sim","/wphl","/zimw"];

icon.addEventListener('click', () => {
  searchBox.style.display = 'block';
  closeSearchBox.style.display = 'block';
  icon.style.display = 'none';
  searchBoxTextBox.value = '';
})

searchBoxTextBox.addEventListener('input', (e) => {
  if ( e.target.value.length > 1 ) {
    const userTextInput = e.target.value.toLowerCase();
    const searchResults = userSearchList.filter( x => x.includes(userTextInput) );
  
    ( searchResults.length === 0 ) ? noMatchFound() : displaySearchResults(searchResults);    
  } else {
    searchResultsBox.replaceChildren();
  }
});

closeSearchBox.addEventListener('click', () => {
  searchBox.style.display = 'none';
  closeSearchBox.style.display = 'none';
  icon.style.display = 'block';
});

body.addEventListener( 'click', (e) => {
    searchResultsBox.replaceChildren();
});

// functions
function displaySearchResults(data) { 
  const searchResultsArray = [];

  data.forEach( d => {
    const listElement = document.createElement('li');
    const a = document.createElement('a');
    const arrayPosition = userSearchList.indexOf(d);

    a.textContent = searchListReturnedResultArray[arrayPosition];
    a.href = `/data/vfex/equities${ linksList[arrayPosition] }`;
    listElement.classList.add('search-result-item');

    listElement.appendChild(a);
    searchResultsArray.push(listElement);
  })

  searchResultsBox.replaceChildren(...searchResultsArray);
};

function noMatchFound() { 
  const listElement = document.createElement('li');

  listElement.textContent = 'No match found';
  listElement.style.cursor = 'default';
  listElement.classList.add('no-match-text');
  listElement.addEventListener( 'click' , e => e.stopPropagation() )

  searchResultsBox.replaceChildren(listElement);
};
// heatmap
function heatMap(data) {
  const numberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', signDisplay: 'exceptZero', minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const squares = Array.from( document.querySelectorAll('#heat-map rect') );
  const tooltip = document.querySelector('.tooltip__heat-map');

  let m = 0;
  squares.forEach( square => {
    const equity = data[m].name;
    const value = data[m].priceDifference;
    const price = data[m].price;
    
    square.addEventListener('pointermove', (e) => {
      const heatMapContainerYposition = document.querySelector('svg#heat-map').getBoundingClientRect().top;
      const pointerPosition = e.clientY;
      const tooltipYaxisPosition = pointerPosition - heatMapContainerYposition;

      tooltip.style.display = 'block';
      tooltip.style.top = ( tooltipYaxisPosition - 50 ) + 'px';
      tooltip.style.left = ( e.clientX + 7.5 )  + 'px';
      tooltip.querySelector('.name').textContent = equity;
      tooltip.querySelector('.price-change').textContent = !value ? '---' : numberFormatterObject.format(value);
      tooltip.querySelector('.heatmap-price').textContent = price;
    });

    square.addEventListener('pointerleave', () => {
      tooltip.style.display = 'none';
    });

    square.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });

    m++;
  })
}
// line chart
function tooltipFunction(data) {
  const tooltipRectangles = document.querySelectorAll('.tooltip-listening-rectangle');

  const closingPriceNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits:4});
  const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');

  const dateFormatter = date => { return timeFormat("%d-%b-%Y")( (new Date().getTimezoneOffset() < 0) ? date : utcDay.offset(date, 1) )};

  let n = 0;
  tooltipRectangles.forEach( (rectangle) => {
    const price = data[n].closingPriceData;
    const volume = data[n].tradingVolumeData;

    const tooltip = document.querySelectorAll('.tooltip')[n];
    const tooltipDot = document.querySelectorAll('svg#linechart circle')[n];
    const tooltipLineX = document.querySelectorAll('.tooltip-line-x')[n];

    const xAccessor = d => isoParse(d[0]);
    const yAccessor = d => +d[1];

    const xScale = scaleTime()
      .domain( extent(price, xAccessor) )
      .range([0, 400 - 80]);

    const yScale = scaleLinear()
      .domain( [0, max(price, yAccessor)] )
      .range([80 - 55 + 15, 0])
      .nice();

    rectangle.addEventListener('pointermove', (e) => {
      const userScreenWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1599) return (xPos ) + 'px'
        if (screenWidth > 1499) return (xPos ) + 'px'
        if (screenWidth > 1399) return (xPos ) + 'px'
        if (screenWidth > 1299) return (xPos / 2) + 'px'
        if (screenWidth > 1099) return (xPos / 2) + 'px'
        if (screenWidth > 999) return (xPos / 4) + 'px'
        if (screenWidth > 890) return (xPos/ 4) + 'px'
        if (screenWidth > 800) return (xPos / 4) + 'px'
        if (screenWidth > 680) return (xPos  / 4) + 'px'
        if (screenWidth > 599) return (xPos  / 4) + 'px'
        if (screenWidth > 524) return (xPos / 4) + 'px'
        if (screenWidth > 479) return (xPos / 4) + 'px'
        if (screenWidth > 419) return (xPos - 30) + 'px'
        return (xPos / 1.75 ) + 'px'
      };

      const [xCord] = pointer(e);
      const bisectDate = bisector(xAccessor).center;
      const x0 = xScale.invert(xCord);

      const i = bisectDate(price, x0);
      const d = price[i];
      const xPos = xScale(xAccessor(d));
      const yPos = yScale(yAccessor(d));

      const h = bisectDate(volume, x0);
      const vol = volume[h][1];

      tooltipDot.style.opacity = 1;
      tooltipDot.setAttribute('cx', (xPos) + 'px');
      tooltipDot.setAttribute('cy', (yPos) + 'px');

      tooltip.style.display = 'block';
      tooltip.style.left = userScreenWidth();
      tooltip.style.top = '-40' + 'px';
      tooltip.querySelector('.price').textContent = `${closingPriceNumberFormatterObject.format(yAccessor(d))}`;
      tooltip.querySelector('.date').textContent = dateFormatter(xAccessor(d));
      tooltip.querySelector('.volume').textContent = `${thousandsSeparandNumberFormatterObject.format(vol)}`;

      tooltipLineX.style.display = 'block';
      tooltipLineX.setAttribute('x1', (xPos) + 'px');
      tooltipLineX.setAttribute('x2', (xPos) + 'px');
      tooltipLineX.setAttribute('y1', -5);
      tooltipLineX.setAttribute('y2', 80 -52 +15);
    });

    rectangle.addEventListener('pointerleave', (e) => {
      tooltipDot.style.opacity = 0;
      tooltip.style.display = 'none';
      tooltipLineX.style.display = 'none';
    });

    rectangle.addEventListener('pointercancel', (e) => {
      tooltipDot.style.opacity = 0;
      tooltip.style.display = 'none';
      tooltipLineX.style.display = 'none';
    });

    rectangle.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });
    n++;
  })
}
// pie chart
function pieChart(data) {
  const numberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits:0});

  const arcs = Array.from( document.querySelectorAll('#pie-chart path') );
  const tooltip = document.querySelector('.tooltip__pie-chart');

  let m = 0;
  arcs.forEach( arc => {
    const equity = data[m].name;
    const value = data[m].marketCap;
    
    arc.addEventListener('pointermove', (e) => {
      const pieChartContainerYposition = document.querySelector('svg#pie-chart').getBoundingClientRect().top;
      const pointerPosition = e.clientY;
      const tooltipYaxisPosition = pointerPosition - pieChartContainerYposition;

      tooltip.style.display = 'block';
      tooltip.style.top = ( tooltipYaxisPosition - 37.5 ) + 'px';
      tooltip.style.left = ( e.clientX + 7.5 )  + 'px';
      tooltip.querySelector('.equity').textContent = equity;
      tooltip.querySelector('.value').textContent = numberFormatterObject.format(value);
    });

    arc.addEventListener('pointerleave', () => {
      tooltip.style.display = 'none';
    });

    arc.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });

    m++;
  })
}
//  treemap
function treemap(data) {
  // sort data by market cap
  data.sort( (a,b) => a.market_cap - b.market_cap ).reverse()
  const currencyOneDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 1});
  const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');

  const leaves = Array.from(document.querySelectorAll('.treemap-leaves g')).slice(0,13);
  const tooltip =document.querySelector('.tooltip__treemap');

  leaves.forEach( (d,i) => {
    const name = data[i].short_name;
    const ticker = data[i].ticker;
    const marketCap = data[i].market_cap;
    const peRatio = data[i].pe_ratio;
    const tradeVolume30days = data[i].volume_30_day_avg;

    d.addEventListener('pointermove', (e) => {
      e.preventDefault();
      const pieChartContainerYposition = document.querySelector('svg#treemap').getBoundingClientRect().top;
      const pointerPosition = e.clientY;
      const tooltipYaxisPosition = pointerPosition - pieChartContainerYposition;

      tooltip.style.display = 'block';
      tooltip.style.top = ( tooltipYaxisPosition - 82.5 ) + 'px';
      tooltip.style.left = ( e.clientX + 7.5 )  + 'px';
      tooltip.querySelector('.name').textContent = `${name}  (${ticker})`;
      tooltip.querySelector('.market-cap').textContent = 'market cap: ' + currencyOneDecimalPointsNumberFormatterObject.format(marketCap);
      tooltip.querySelector('.pe-ratio').textContent = 'p/e-ratio: ' +  ( !peRatio ? '---' : `${peRatio}x` );
      tooltip.querySelector('.trade-volume-30-days').textContent = '30 day avg volume: ' + thousandsSeparandNumberFormatterObject.format(tradeVolume30days);
    })

    d.addEventListener('pointerleave', () => {
      tooltip.style.display = 'none';
    });

    d.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });    
  })
}
