(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Rd={exports:{}},Ba={},Ad={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function NT(){if(Pg)return Ce;Pg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,H={};function V(b,G,fe){this.props=b,this.context=G,this.refs=H,this.updater=fe||x}V.prototype.isReactComponent={},V.prototype.setState=function(b,G){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,G,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function W(){}W.prototype=V.prototype;function te(b,G,fe){this.props=b,this.context=G,this.refs=H,this.updater=fe||x}var Y=te.prototype=new W;Y.constructor=te,M(Y,V.prototype),Y.isPureReactComponent=!0;var ie=Array.isArray,Ee=Object.prototype.hasOwnProperty,ge={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(b,G,fe){var Re,Ae={},De=null,Me=null;if(G!=null)for(Re in G.ref!==void 0&&(Me=G.ref),G.key!==void 0&&(De=""+G.key),G)Ee.call(G,Re)&&!N.hasOwnProperty(Re)&&(Ae[Re]=G[Re]);var Fe=arguments.length-2;if(Fe===1)Ae.children=fe;else if(1<Fe){for(var qe=Array(Fe),vt=0;vt<Fe;vt++)qe[vt]=arguments[vt+2];Ae.children=qe}if(b&&b.defaultProps)for(Re in Fe=b.defaultProps,Fe)Ae[Re]===void 0&&(Ae[Re]=Fe[Re]);return{$$typeof:n,type:b,key:De,ref:Me,props:Ae,_owner:ge.current}}function A(b,G){return{$$typeof:n,type:b.type,key:G,ref:b.ref,props:b.props,_owner:b._owner}}function P(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function L(b){var G={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(fe){return G[fe]})}var O=/\/+/g;function C(b,G){return typeof b=="object"&&b!==null&&b.key!=null?L(""+b.key):G.toString(36)}function $e(b,G,fe,Re,Ae){var De=typeof b;(De==="undefined"||De==="boolean")&&(b=null);var Me=!1;if(b===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(b.$$typeof){case n:case e:Me=!0}}if(Me)return Me=b,Ae=Ae(Me),b=Re===""?"."+C(Me,0):Re,ie(Ae)?(fe="",b!=null&&(fe=b.replace(O,"$&/")+"/"),$e(Ae,G,fe,"",function(vt){return vt})):Ae!=null&&(P(Ae)&&(Ae=A(Ae,fe+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+b)),G.push(Ae)),1;if(Me=0,Re=Re===""?".":Re+":",ie(b))for(var Fe=0;Fe<b.length;Fe++){De=b[Fe];var qe=Re+C(De,Fe);Me+=$e(De,G,fe,qe,Ae)}else if(qe=I(b),typeof qe=="function")for(b=qe.call(b),Fe=0;!(De=b.next()).done;)De=De.value,qe=Re+C(De,Fe++),Me+=$e(De,G,fe,qe,Ae);else if(De==="object")throw G=String(b),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Me}function _t(b,G,fe){if(b==null)return b;var Re=[],Ae=0;return $e(b,Re,"","",function(De){return G.call(fe,De,Ae++)}),Re}function Dt(b){if(b._status===-1){var G=b._result;G=G(),G.then(function(fe){(b._status===0||b._status===-1)&&(b._status=1,b._result=fe)},function(fe){(b._status===0||b._status===-1)&&(b._status=2,b._result=fe)}),b._status===-1&&(b._status=0,b._result=G)}if(b._status===1)return b._result.default;throw b._result}var Be={current:null},re={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:re,ReactCurrentOwner:ge};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:_t,forEach:function(b,G,fe){_t(b,function(){G.apply(this,arguments)},fe)},count:function(b){var G=0;return _t(b,function(){G++}),G},toArray:function(b){return _t(b,function(G){return G})||[]},only:function(b){if(!P(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ce.Component=V,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=te,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(b,G,fe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Re=M({},b.props),Ae=b.key,De=b.ref,Me=b._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Me=ge.current),G.key!==void 0&&(Ae=""+G.key),b.type&&b.type.defaultProps)var Fe=b.type.defaultProps;for(qe in G)Ee.call(G,qe)&&!N.hasOwnProperty(qe)&&(Re[qe]=G[qe]===void 0&&Fe!==void 0?Fe[qe]:G[qe])}var qe=arguments.length-2;if(qe===1)Re.children=fe;else if(1<qe){Fe=Array(qe);for(var vt=0;vt<qe;vt++)Fe[vt]=arguments[vt+2];Re.children=Fe}return{$$typeof:n,type:b.type,key:Ae,ref:De,props:Re,_owner:Me}},Ce.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Ce.createElement=S,Ce.createFactory=function(b){var G=S.bind(null,b);return G.type=b,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(b){return{$$typeof:d,render:b}},Ce.isValidElement=P,Ce.lazy=function(b){return{$$typeof:E,_payload:{_status:-1,_result:b},_init:Dt}},Ce.memo=function(b,G){return{$$typeof:y,type:b,compare:G===void 0?null:G}},Ce.startTransition=function(b){var G=re.transition;re.transition={};try{b()}finally{re.transition=G}},Ce.unstable_act=oe,Ce.useCallback=function(b,G){return Be.current.useCallback(b,G)},Ce.useContext=function(b){return Be.current.useContext(b)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(b){return Be.current.useDeferredValue(b)},Ce.useEffect=function(b,G){return Be.current.useEffect(b,G)},Ce.useId=function(){return Be.current.useId()},Ce.useImperativeHandle=function(b,G,fe){return Be.current.useImperativeHandle(b,G,fe)},Ce.useInsertionEffect=function(b,G){return Be.current.useInsertionEffect(b,G)},Ce.useLayoutEffect=function(b,G){return Be.current.useLayoutEffect(b,G)},Ce.useMemo=function(b,G){return Be.current.useMemo(b,G)},Ce.useReducer=function(b,G,fe){return Be.current.useReducer(b,G,fe)},Ce.useRef=function(b){return Be.current.useRef(b)},Ce.useState=function(b){return Be.current.useState(b)},Ce.useSyncExternalStore=function(b,G,fe){return Be.current.useSyncExternalStore(b,G,fe)},Ce.useTransition=function(){return Be.current.useTransition()},Ce.version="18.3.1",Ce}var Ng;function Ef(){return Ng||(Ng=1,Ad.exports=NT()),Ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function xT(){if(xg)return Ba;xg=1;var n=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var E,T={},I=null,x=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(x=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(d&&d.defaultProps)for(E in p=d.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:d,key:I,ref:x,props:T,_owner:o.current}}return Ba.Fragment=t,Ba.jsx=c,Ba.jsxs=c,Ba}var Dg;function DT(){return Dg||(Dg=1,Rd.exports=xT()),Rd.exports}var q=DT(),B=Ef(),Fu={},Cd={exports:{}},Jt={},kd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function OT(){return Og||(Og=1,function(n){function e(re,me){var oe=re.length;re.push(me);e:for(;0<oe;){var b=oe-1>>>1,G=re[b];if(0<o(G,me))re[b]=me,re[oe]=G,oe=b;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],oe=re.pop();if(oe!==me){re[0]=oe;e:for(var b=0,G=re.length,fe=G>>>1;b<fe;){var Re=2*(b+1)-1,Ae=re[Re],De=Re+1,Me=re[De];if(0>o(Ae,oe))De<G&&0>o(Me,Ae)?(re[b]=Me,re[De]=oe,b=De):(re[b]=Ae,re[Re]=oe,b=Re);else if(De<G&&0>o(Me,oe))re[b]=Me,re[De]=oe,b=De;else break e}}return me}function o(re,me){var oe=re.sortIndex-me.sortIndex;return oe!==0?oe:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],E=1,T=null,I=3,x=!1,M=!1,H=!1,V=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ie(re){if(H=!1,Y(re),!M)if(t(p)!==null)M=!0,Dt(Ee);else{var me=t(y);me!==null&&Be(ie,me.startTime-re)}}function Ee(re,me){M=!1,H&&(H=!1,W(S),S=-1),x=!0;var oe=I;try{for(Y(me),T=t(p);T!==null&&(!(T.expirationTime>me)||re&&!L());){var b=T.callback;if(typeof b=="function"){T.callback=null,I=T.priorityLevel;var G=b(T.expirationTime<=me);me=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),Y(me)}else i(p);T=t(p)}if(T!==null)var fe=!0;else{var Re=t(y);Re!==null&&Be(ie,Re.startTime-me),fe=!1}return fe}finally{T=null,I=oe,x=!1}}var ge=!1,N=null,S=-1,A=5,P=-1;function L(){return!(n.unstable_now()-P<A)}function O(){if(N!==null){var re=n.unstable_now();P=re;var me=!0;try{me=N(!0,re)}finally{me?C():(ge=!1,N=null)}}else ge=!1}var C;if(typeof te=="function")C=function(){te(O)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,_t=$e.port2;$e.port1.onmessage=O,C=function(){_t.postMessage(null)}}else C=function(){V(O,0)};function Dt(re){N=re,ge||(ge=!0,C())}function Be(re,me){S=V(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,Dt(Ee))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var oe=I;I=me;try{return re()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var oe=I;I=re;try{return me()}finally{I=oe}},n.unstable_scheduleCallback=function(re,me,oe){var b=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?b+oe:b):oe=b,re){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,re={id:E++,callback:me,priorityLevel:re,startTime:oe,expirationTime:G,sortIndex:-1},oe>b?(re.sortIndex=oe,e(y,re),t(p)===null&&re===t(y)&&(H?(W(S),S=-1):H=!0,Be(ie,oe-b))):(re.sortIndex=G,e(p,re),M||x||(M=!0,Dt(Ee))),re},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(re){var me=I;return function(){var oe=I;I=me;try{return re.apply(this,arguments)}finally{I=oe}}}}(Pd)),Pd}var Lg;function LT(){return Lg||(Lg=1,kd.exports=OT()),kd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function VT(){if(Vg)return Jt;Vg=1;var n=Ef(),e=LT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function x(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,a,h){if(s===null||typeof s>"u"||x(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(r,s,a,h,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){V[r]=new H(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];V[s]=new H(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){V[r]=new H(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){V[r]=new H(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){V[r]=new H(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){V[r]=new H(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){V[r]=new H(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){V[r]=new H(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){V[r]=new H(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function te(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(W,te);V[s]=new H(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(W,te);V[s]=new H(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(W,te);V[s]=new H(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){V[r]=new H(r,1,!1,r.toLowerCase(),null,!1,!1)}),V.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){V[r]=new H(r,1,!1,r.toLowerCase(),null,!0,!0)});function Y(r,s,a,h){var f=V.hasOwnProperty(s)?V[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,f,h)&&(a=null),h||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var ie=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),ge=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,b;function G(r){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+r}var fe=!1;function Re(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){h=z}r.call(s.prototype)}else{try{throw Error()}catch(z){h=z}r()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=h.stack.split(`
`),v=f.length-1,R=g.length-1;1<=v&&0<=R&&f[v]!==g[R];)R--;for(;1<=v&&0<=R;v--,R--)if(f[v]!==g[R]){if(v!==1||R!==1)do if(v--,R--,0>R||f[v]!==g[R]){var k=`
`+f[v].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=v&&0<=R);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Ae(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case ge:return"Portal";case A:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case $e:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case L:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case O:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case _t:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Dt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){h=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(v){h=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function mr(r){r._valueTracker||(r._valueTracker=vt(r))}function Cs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=qe(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Wr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Fi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function ks(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ko(r,s){s=s.checked,s!=null&&Y(r,"checked",s,!1)}function Go(r,s){Ko(r,s);var a=Fe(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ps(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ps(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Il(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ps(r,s,a){(s!=="number"||Wr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var gr=Array.isArray;function yr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Qo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ns(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function xs(r,s){var a=Fe(s.value),h=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function Yo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ct(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ct(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var _r,Xo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=_r.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Kr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ji=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(r){ji.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ui[s]=Ui[r]})});function Jo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ui.hasOwnProperty(r)&&Ui[r]?(""+s).trim():s+"px"}function Zo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=Jo(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var ea=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(r,s){if(s){if(ea[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function na(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Ds(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Os=null,hn=null,Qn=null;function Ls(r){if(r=Aa(r)){if(typeof Os!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Zl(s),Os(r.stateNode,r.type,s))}}function Yn(r){hn?Qn?Qn.push(r):Qn=[r]:hn=r}function ra(){if(hn){var r=hn,s=Qn;if(Qn=hn=null,Ls(r),s)for(r=0;r<s.length;r++)Ls(s[r])}}function zi(r,s){return r(s)}function ia(){}var vr=!1;function sa(r,s,a){if(vr)return r(s,a);vr=!0;try{return zi(r,s,a)}finally{vr=!1,(hn!==null||Qn!==null)&&(ia(),ra())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var h=Zl(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Vs=!1;if(d)try{var An={};Object.defineProperty(An,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Vs=!1}function $i(r,s,a,h,f,g,v,R,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(J){this.onError(J)}}var qi=!1,bs=null,Cn=!1,oa=null,Zc={onError:function(r){qi=!0,bs=r}};function Ms(r,s,a,h,f,g,v,R,k){qi=!1,bs=null,$i.apply(Zc,arguments)}function Sl(r,s,a,h,f,g,v,R,k){if(Ms.apply(this,arguments),qi){if(qi){var z=bs;qi=!1,bs=null}else throw Error(t(198));Cn||(Cn=!0,oa=z)}}function kn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Hi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(r){if(kn(r)!==r)throw Error(t(188))}function Rl(r){var s=r.alternate;if(!s){if(s=kn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Pn(f),r;if(g===h)return Pn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var v=!1,R=f.child;R;){if(R===a){v=!0,a=f,h=g;break}if(R===h){v=!0,h=f,a=g;break}R=R.sibling}if(!v){for(R=g.child;R;){if(R===a){v=!0,a=g,h=f;break}if(R===h){v=!0,h=g,a=f;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function aa(r){return r=Rl(r),r!==null?Fs(r):null}function Fs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Fs(r);if(s!==null)return s;r=r.sibling}return null}var Us=e.unstable_scheduleCallback,la=e.unstable_cancelCallback,Al=e.unstable_shouldYield,eh=e.unstable_requestPaint,He=e.unstable_now,Cl=e.unstable_getCurrentPriorityLevel,Wi=e.unstable_ImmediatePriority,Gr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,ua=e.unstable_LowPriority,kl=e.unstable_IdlePriority,Ki=null,nn=null;function Pl(r){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ki,r,void 0,(r.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:xl,ca=Math.log,Nl=Math.LN2;function xl(r){return r>>>=0,r===0?32:31-(ca(r)/Nl|0)|0}var js=64,Bs=4194304;function Qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Gi(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var R=v&~f;R!==0?h=Qr(R):(g&=v,g!==0&&(h=Qr(g)))}else v=a&~f,v!==0?h=Qr(v):g!==0&&(h=Qr(g));if(h===0)return 0;if(s!==0&&s!==h&&!(s&f)&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(h&4&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Bt(s),f=1<<a,h|=r[a],s&=~f;return h}function th(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Er(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Bt(g),R=1<<v,k=f[v];k===-1?(!(R&a)||R&h)&&(f[v]=th(R,s)):k<=s&&(r.expiredLanes|=R),g&=~R}}function rn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Qi(){var r=js;return js<<=1,!(js&4194240)&&(js=64),r}function Yr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Xr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Bt(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Bt(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function Jr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Bt(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Ne=0;function Zr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Dl,zs,Ol,Ll,Vl,ha=!1,Xn=[],Rt=null,Nn=null,xn=null,ei=new Map,fn=new Map,Jn=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":ei.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(s.pointerId)}}function Ht(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Aa(s),s!==null&&zs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function rh(r,s,a,h,f){switch(s){case"focusin":return Rt=Ht(Rt,r,s,a,h,f),!0;case"dragenter":return Nn=Ht(Nn,r,s,a,h,f),!0;case"mouseover":return xn=Ht(xn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return ei.set(g,Ht(ei.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,fn.set(g,Ht(fn.get(g)||null,r,s,a,h,f)),!0}return!1}function Ml(r){var s=es(r.target);if(s!==null){var a=kn(s);if(a!==null){if(s=a.tag,s===13){if(s=Hi(a),s!==null){r.blockedOn=s,Vl(r.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function wr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=$s(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Bi=h,a.target.dispatchEvent(h),Bi=null}else return s=Aa(a),s!==null&&zs(s),r.blockedOn=a,!1;s.shift()}return!0}function Yi(r,s,a){wr(r)&&a.delete(s)}function Fl(){ha=!1,Rt!==null&&wr(Rt)&&(Rt=null),Nn!==null&&wr(Nn)&&(Nn=null),xn!==null&&wr(xn)&&(xn=null),ei.forEach(Yi),fn.forEach(Yi)}function Dn(r,s){r.blockedOn===s&&(r.blockedOn=null,ha||(ha=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fl)))}function On(r){function s(f){return Dn(f,r)}if(0<Xn.length){Dn(Xn[0],r);for(var a=1;a<Xn.length;a++){var h=Xn[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Rt!==null&&Dn(Rt,r),Nn!==null&&Dn(Nn,r),xn!==null&&Dn(xn,r),ei.forEach(s),fn.forEach(s),a=0;a<Jn.length;a++)h=Jn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&Jn.shift()}var Tr=ie.ReactCurrentBatchConfig,ti=!0;function Ye(r,s,a,h){var f=Ne,g=Tr.transition;Tr.transition=null;try{Ne=1,da(r,s,a,h)}finally{Ne=f,Tr.transition=g}}function ih(r,s,a,h){var f=Ne,g=Tr.transition;Tr.transition=null;try{Ne=4,da(r,s,a,h)}finally{Ne=f,Tr.transition=g}}function da(r,s,a,h){if(ti){var f=$s(r,s,a,h);if(f===null)mh(r,s,h,Xi,a),bl(r,h);else if(rh(f,r,s,a,h))h.stopPropagation();else if(bl(r,h),s&4&&-1<nh.indexOf(r)){for(;f!==null;){var g=Aa(f);if(g!==null&&Dl(g),g=$s(r,s,a,h),g===null&&mh(r,s,h,Xi,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else mh(r,s,h,null,a)}}var Xi=null;function $s(r,s,a,h){if(Xi=null,r=Ds(h),r=es(r),r!==null)if(s=kn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Hi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Xi=r,null}function fa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cl()){case Wi:return 1;case Gr:return 4;case dn:case ua:return 16;case kl:return 536870912;default:return 16}default:return 16}}var sn=null,qs=null,Wt=null;function pa(){if(Wt)return Wt;var r,s=qs,a=s.length,h,f="value"in sn?sn.value:sn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(h=1;h<=v&&s[a-h]===f[g-h];h++);return Wt=f.slice(r,1<h?1-h:void 0)}function Hs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Zn(){return!0}function ma(){return!1}function At(r){function s(a,h,f,g,v){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Zn:ma,this.isPropagationStopped=ma,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=At(Ln),er=oe({},Ln,{view:0,detail:0}),sh=At(er),Ks,Ir,ni,Ji=oe({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ni&&(ni&&r.type==="mousemove"?(Ks=r.screenX-ni.screenX,Ir=r.screenY-ni.screenY):Ir=Ks=0,ni=r),Ks)},movementY:function(r){return"movementY"in r?r.movementY:Ir}}),Gs=At(Ji),ga=oe({},Ji,{dataTransfer:0}),Ul=At(ga),Qs=oe({},er,{relatedTarget:0}),Ys=At(Qs),jl=oe({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=At(jl),Bl=oe({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),zl=At(Bl),$l=oe({},Ln,{data:0}),ya=At($l),Xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ql={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ql[r])?!!s[r]:!1}function tr(){return Hl}var u=oe({},er,{key:function(r){if(r.key){var s=Xs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Hs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?zt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(r){return r.type==="keypress"?Hs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Hs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),_=oe({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(_),F=oe({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),$=At(F),ne=oe({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=At(ne),dt=oe({},Ji,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(dt),Et=[9,13,27,32],ot=d&&"CompositionEvent"in window,pn=null;d&&"documentMode"in document&&(pn=document.documentMode);var on=d&&"TextEvent"in window&&!pn,Zi=d&&(!ot||pn&&8<pn&&11>=pn),Js=" ",Ip=!1;function Sp(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Zs=!1;function Cw(r,s){switch(r){case"compositionend":return Rp(s);case"keypress":return s.which!==32?null:(Ip=!0,Js);case"textInput":return r=s.data,r===Js&&Ip?null:r;default:return null}}function kw(r,s){if(Zs)return r==="compositionend"||!ot&&Sp(r,s)?(r=pa(),Wt=qs=sn=null,Zs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Zi&&s.locale!=="ko"?null:s.data;default:return null}}var Pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Pw[r.type]:s==="textarea"}function Cp(r,s,a,h){Yn(h),s=Yl(s,"onChange"),0<s.length&&(a=new Ws("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var _a=null,va=null;function Nw(r){Hp(r,0)}function Wl(r){var s=io(r);if(Cs(s))return r}function xw(r,s){if(r==="change")return s}var kp=!1;if(d){var oh;if(d){var ah="oninput"in document;if(!ah){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),ah=typeof Pp.oninput=="function"}oh=ah}else oh=!1;kp=oh&&(!document.documentMode||9<document.documentMode)}function Np(){_a&&(_a.detachEvent("onpropertychange",xp),va=_a=null)}function xp(r){if(r.propertyName==="value"&&Wl(va)){var s=[];Cp(s,va,r,Ds(r)),sa(Nw,s)}}function Dw(r,s,a){r==="focusin"?(Np(),_a=s,va=a,_a.attachEvent("onpropertychange",xp)):r==="focusout"&&Np()}function Ow(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Wl(va)}function Lw(r,s){if(r==="click")return Wl(s)}function Vw(r,s){if(r==="input"||r==="change")return Wl(s)}function bw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Vn=typeof Object.is=="function"?Object.is:bw;function Ea(r,s){if(Vn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!Vn(r[f],s[f]))return!1}return!0}function Dp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Op(r,s){var a=Dp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Lp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Lp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Vp(){for(var r=window,s=Wr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Wr(r.document)}return s}function lh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Mw(r){var s=Vp(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Lp(a.ownerDocument.documentElement,a)){if(h!==null&&lh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=Op(a,g);var v=Op(a,h);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Fw=d&&"documentMode"in document&&11>=document.documentMode,eo=null,uh=null,wa=null,ch=!1;function bp(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ch||eo==null||eo!==Wr(h)||(h=eo,"selectionStart"in h&&lh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),wa&&Ea(wa,h)||(wa=h,h=Yl(uh,"onSelect"),0<h.length&&(s=new Ws("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=eo)))}function Kl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var to={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},hh={},Mp={};d&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Gl(r){if(hh[r])return hh[r];if(!to[r])return r;var s=to[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Mp)return hh[r]=s[a];return r}var Fp=Gl("animationend"),Up=Gl("animationiteration"),jp=Gl("animationstart"),Bp=Gl("transitionend"),zp=new Map,$p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(r,s){zp.set(r,s),l(s,[r])}for(var dh=0;dh<$p.length;dh++){var fh=$p[dh],Uw=fh.toLowerCase(),jw=fh[0].toUpperCase()+fh.slice(1);ri(Uw,"on"+jw)}ri(Fp,"onAnimationEnd"),ri(Up,"onAnimationIteration"),ri(jp,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(Bp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function qp(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Sl(h,s,void 0,r),r.currentTarget=null}function Hp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var v=h.length-1;0<=v;v--){var R=h[v],k=R.instance,z=R.currentTarget;if(R=R.listener,k!==g&&f.isPropagationStopped())break e;qp(f,R,z),g=k}else for(v=0;v<h.length;v++){if(R=h[v],k=R.instance,z=R.currentTarget,R=R.listener,k!==g&&f.isPropagationStopped())break e;qp(f,R,z),g=k}}}if(Cn)throw r=oa,Cn=!1,oa=null,r}function Ke(r,s){var a=s[wh];a===void 0&&(a=s[wh]=new Set);var h=r+"__bubble";a.has(h)||(Wp(s,r,2,!1),a.add(h))}function ph(r,s,a){var h=0;s&&(h|=4),Wp(a,r,h,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Ia(r){if(!r[Ql]){r[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(Bw.has(a)||ph(a,!1,r),ph(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,ph("selectionchange",!1,s))}}function Wp(r,s,a,h){switch(fa(s)){case 1:var f=Ye;break;case 4:f=ih;break;default:f=da}a=f.bind(null,s,a,r),f=void 0,!Vs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function mh(r,s,a,h,f){var g=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var v=h.tag;if(v===3||v===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(v===4)for(v=h.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;v=v.return}for(;R!==null;){if(v=es(R),v===null)return;if(k=v.tag,k===5||k===6){h=g=v;continue e}R=R.parentNode}}h=h.return}sa(function(){var z=g,J=Ds(a),Z=[];e:{var X=zp.get(r);if(X!==void 0){var se=Ws,ce=r;switch(r){case"keypress":if(Hs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=Ys;break;case"focusout":ce="blur",se=Ys;break;case"beforeblur":case"afterblur":se=Ys;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case Fp:case Up:case jp:se=Sr;break;case Bp:se=je;break;case"scroll":se=sh;break;case"wheel":se=Oe;break;case"copy":case"cut":case"paste":se=zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var he=(s&4)!==0,it=!he&&r==="scroll",U=he?X!==null?X+"Capture":null:X;he=[];for(var D=z,j;D!==null;){j=D;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,U!==null&&(ee=rt(D,U),ee!=null&&he.push(Sa(D,ee,j)))),it)break;D=D.return}0<he.length&&(X=new se(X,ce,null,a,J),Z.push({event:X,listeners:he}))}}if(!(s&7)){e:{if(X=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",X&&a!==Bi&&(ce=a.relatedTarget||a.fromElement)&&(es(ce)||ce[Rr]))break e;if((se||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=z,ce=ce?es(ce):null,ce!==null&&(it=kn(ce),ce!==it||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=z),se!==ce)){if(he=Gs,ee="onMouseLeave",U="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(he=w,ee="onPointerLeave",U="onPointerEnter",D="pointer"),it=se==null?X:io(se),j=ce==null?X:io(ce),X=new he(ee,D+"leave",se,a,J),X.target=it,X.relatedTarget=j,ee=null,es(J)===z&&(he=new he(U,D+"enter",ce,a,J),he.target=j,he.relatedTarget=it,ee=he),it=ee,se&&ce)t:{for(he=se,U=ce,D=0,j=he;j;j=no(j))D++;for(j=0,ee=U;ee;ee=no(ee))j++;for(;0<D-j;)he=no(he),D--;for(;0<j-D;)U=no(U),j--;for(;D--;){if(he===U||U!==null&&he===U.alternate)break t;he=no(he),U=no(U)}he=null}else he=null;se!==null&&Kp(Z,X,se,he,!1),ce!==null&&it!==null&&Kp(Z,it,ce,he,!0)}}e:{if(X=z?io(z):window,se=X.nodeName&&X.nodeName.toLowerCase(),se==="select"||se==="input"&&X.type==="file")var de=xw;else if(Ap(X))if(kp)de=Vw;else{de=Ow;var ye=Dw}else(se=X.nodeName)&&se.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(de=Lw);if(de&&(de=de(r,z))){Cp(Z,de,a,J);break e}ye&&ye(r,X,z),r==="focusout"&&(ye=X._wrapperState)&&ye.controlled&&X.type==="number"&&Ps(X,"number",X.value)}switch(ye=z?io(z):window,r){case"focusin":(Ap(ye)||ye.contentEditable==="true")&&(eo=ye,uh=z,wa=null);break;case"focusout":wa=uh=eo=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,bp(Z,a,J);break;case"selectionchange":if(Fw)break;case"keydown":case"keyup":bp(Z,a,J)}var _e;if(ot)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Zs?Sp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Zi&&a.locale!=="ko"&&(Zs||we!=="onCompositionStart"?we==="onCompositionEnd"&&Zs&&(_e=pa()):(sn=J,qs="value"in sn?sn.value:sn.textContent,Zs=!0)),ye=Yl(z,we),0<ye.length&&(we=new ya(we,r,null,a,J),Z.push({event:we,listeners:ye}),_e?we.data=_e:(_e=Rp(a),_e!==null&&(we.data=_e)))),(_e=on?Cw(r,a):kw(r,a))&&(z=Yl(z,"onBeforeInput"),0<z.length&&(J=new ya("onBeforeInput","beforeinput",null,a,J),Z.push({event:J,listeners:z}),J.data=_e))}Hp(Z,s)})}function Sa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Yl(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=rt(r,a),g!=null&&h.unshift(Sa(r,g,f)),g=rt(r,s),g!=null&&h.push(Sa(r,g,f))),r=r.return}return h}function no(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Kp(r,s,a,h,f){for(var g=s._reactName,v=[];a!==null&&a!==h;){var R=a,k=R.alternate,z=R.stateNode;if(k!==null&&k===h)break;R.tag===5&&z!==null&&(R=z,f?(k=rt(a,g),k!=null&&v.unshift(Sa(a,k,R))):f||(k=rt(a,g),k!=null&&v.push(Sa(a,k,R)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var zw=/\r\n?/g,$w=/\u0000|\uFFFD/g;function Gp(r){return(typeof r=="string"?r:""+r).replace(zw,`
`).replace($w,"")}function Xl(r,s,a){if(s=Gp(s),Gp(r)!==s&&a)throw Error(t(425))}function Jl(){}var gh=null,yh=null;function _h(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vh=typeof setTimeout=="function"?setTimeout:void 0,qw=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,Hw=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(r){return Qp.resolve(null).then(r).catch(Ww)}:vh;function Ww(r){setTimeout(function(){throw r})}function Eh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),On(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);On(s)}function ii(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Yp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ro=Math.random().toString(36).slice(2),nr="__reactFiber$"+ro,Ra="__reactProps$"+ro,Rr="__reactContainer$"+ro,wh="__reactEvents$"+ro,Kw="__reactListeners$"+ro,Gw="__reactHandles$"+ro;function es(r){var s=r[nr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Rr]||a[nr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Yp(r);r!==null;){if(a=r[nr])return a;r=Yp(r)}return s}r=a,a=r.parentNode}return null}function Aa(r){return r=r[nr]||r[Rr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function io(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Zl(r){return r[Ra]||null}var Th=[],so=-1;function si(r){return{current:r}}function Ge(r){0>so||(r.current=Th[so],Th[so]=null,so--)}function We(r,s){so++,Th[so]=r.current,r.current=s}var oi={},Ot=si(oi),Kt=si(!1),ts=oi;function oo(r,s){var a=r.type.contextTypes;if(!a)return oi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Gt(r){return r=r.childContextTypes,r!=null}function eu(){Ge(Kt),Ge(Ot)}function Xp(r,s,a){if(Ot.current!==oi)throw Error(t(168));We(Ot,s),We(Kt,a)}function Jp(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return oe({},a,h)}function tu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||oi,ts=Ot.current,We(Ot,r),We(Kt,Kt.current),!0}function Zp(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Jp(r,s,ts),h.__reactInternalMemoizedMergedChildContext=r,Ge(Kt),Ge(Ot),We(Ot,r)):Ge(Kt),We(Kt,a)}var Ar=null,nu=!1,Ih=!1;function em(r){Ar===null?Ar=[r]:Ar.push(r)}function Qw(r){nu=!0,em(r)}function ai(){if(!Ih&&Ar!==null){Ih=!0;var r=0,s=Ne;try{var a=Ar;for(Ne=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Ar=null,nu=!1}catch(f){throw Ar!==null&&(Ar=Ar.slice(r+1)),Us(Wi,ai),f}finally{Ne=s,Ih=!1}}return null}var ao=[],lo=0,ru=null,iu=0,mn=[],gn=0,ns=null,Cr=1,kr="";function rs(r,s){ao[lo++]=iu,ao[lo++]=ru,ru=r,iu=s}function tm(r,s,a){mn[gn++]=Cr,mn[gn++]=kr,mn[gn++]=ns,ns=r;var h=Cr;r=kr;var f=32-Bt(h)-1;h&=~(1<<f),a+=1;var g=32-Bt(s)+f;if(30<g){var v=f-f%5;g=(h&(1<<v)-1).toString(32),h>>=v,f-=v,Cr=1<<32-Bt(s)+f|a<<f|h,kr=g+r}else Cr=1<<g|a<<f|h,kr=r}function Sh(r){r.return!==null&&(rs(r,1),tm(r,1,0))}function Rh(r){for(;r===ru;)ru=ao[--lo],ao[lo]=null,iu=ao[--lo],ao[lo]=null;for(;r===ns;)ns=mn[--gn],mn[gn]=null,kr=mn[--gn],mn[gn]=null,Cr=mn[--gn],mn[gn]=null}var an=null,ln=null,Xe=!1,bn=null;function nm(r,s){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function rm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,an=r,ln=ii(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,an=r,ln=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ns!==null?{id:Cr,overflow:kr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,an=r,ln=null,!0):!1;default:return!1}}function Ah(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ch(r){if(Xe){var s=ln;if(s){var a=s;if(!rm(r,s)){if(Ah(r))throw Error(t(418));s=ii(a.nextSibling);var h=an;s&&rm(r,s)?nm(h,a):(r.flags=r.flags&-4097|2,Xe=!1,an=r)}}else{if(Ah(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,an=r}}}function im(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;an=r}function su(r){if(r!==an)return!1;if(!Xe)return im(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!_h(r.type,r.memoizedProps)),s&&(s=ln)){if(Ah(r))throw sm(),Error(t(418));for(;s;)nm(r,s),s=ii(s.nextSibling)}if(im(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){ln=ii(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}ln=null}}else ln=an?ii(r.stateNode.nextSibling):null;return!0}function sm(){for(var r=ln;r;)r=ii(r.nextSibling)}function uo(){ln=an=null,Xe=!1}function kh(r){bn===null?bn=[r]:bn.push(r)}var Yw=ie.ReactCurrentBatchConfig;function Ca(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var R=f.refs;v===null?delete R[g]:R[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function om(r){var s=r._init;return s(r._payload)}function am(r){function s(U,D){if(r){var j=U.deletions;j===null?(U.deletions=[D],U.flags|=16):j.push(D)}}function a(U,D){if(!r)return null;for(;D!==null;)s(U,D),D=D.sibling;return null}function h(U,D){for(U=new Map;D!==null;)D.key!==null?U.set(D.key,D):U.set(D.index,D),D=D.sibling;return U}function f(U,D){return U=mi(U,D),U.index=0,U.sibling=null,U}function g(U,D,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<D?(U.flags|=2,D):j):(U.flags|=2,D)):(U.flags|=1048576,D)}function v(U){return r&&U.alternate===null&&(U.flags|=2),U}function R(U,D,j,ee){return D===null||D.tag!==6?(D=vd(j,U.mode,ee),D.return=U,D):(D=f(D,j),D.return=U,D)}function k(U,D,j,ee){var de=j.type;return de===N?J(U,D,j.props.children,ee,j.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Dt&&om(de)===D.type)?(ee=f(D,j.props),ee.ref=Ca(U,D,j),ee.return=U,ee):(ee=Nu(j.type,j.key,j.props,null,U.mode,ee),ee.ref=Ca(U,D,j),ee.return=U,ee)}function z(U,D,j,ee){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=Ed(j,U.mode,ee),D.return=U,D):(D=f(D,j.children||[]),D.return=U,D)}function J(U,D,j,ee,de){return D===null||D.tag!==7?(D=hs(j,U.mode,ee,de),D.return=U,D):(D=f(D,j),D.return=U,D)}function Z(U,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=vd(""+D,U.mode,j),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ee:return j=Nu(D.type,D.key,D.props,null,U.mode,j),j.ref=Ca(U,null,D),j.return=U,j;case ge:return D=Ed(D,U.mode,j),D.return=U,D;case Dt:var ee=D._init;return Z(U,ee(D._payload),j)}if(gr(D)||me(D))return D=hs(D,U.mode,j,null),D.return=U,D;ou(U,D)}return null}function X(U,D,j,ee){var de=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:R(U,D,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ee:return j.key===de?k(U,D,j,ee):null;case ge:return j.key===de?z(U,D,j,ee):null;case Dt:return de=j._init,X(U,D,de(j._payload),ee)}if(gr(j)||me(j))return de!==null?null:J(U,D,j,ee,null);ou(U,j)}return null}function se(U,D,j,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(j)||null,R(D,U,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ee:return U=U.get(ee.key===null?j:ee.key)||null,k(D,U,ee,de);case ge:return U=U.get(ee.key===null?j:ee.key)||null,z(D,U,ee,de);case Dt:var ye=ee._init;return se(U,D,j,ye(ee._payload),de)}if(gr(ee)||me(ee))return U=U.get(j)||null,J(D,U,ee,de,null);ou(D,ee)}return null}function ce(U,D,j,ee){for(var de=null,ye=null,_e=D,we=D=0,It=null;_e!==null&&we<j.length;we++){_e.index>we?(It=_e,_e=null):It=_e.sibling;var be=X(U,_e,j[we],ee);if(be===null){_e===null&&(_e=It);break}r&&_e&&be.alternate===null&&s(U,_e),D=g(be,D,we),ye===null?de=be:ye.sibling=be,ye=be,_e=It}if(we===j.length)return a(U,_e),Xe&&rs(U,we),de;if(_e===null){for(;we<j.length;we++)_e=Z(U,j[we],ee),_e!==null&&(D=g(_e,D,we),ye===null?de=_e:ye.sibling=_e,ye=_e);return Xe&&rs(U,we),de}for(_e=h(U,_e);we<j.length;we++)It=se(_e,U,we,j[we],ee),It!==null&&(r&&It.alternate!==null&&_e.delete(It.key===null?we:It.key),D=g(It,D,we),ye===null?de=It:ye.sibling=It,ye=It);return r&&_e.forEach(function(gi){return s(U,gi)}),Xe&&rs(U,we),de}function he(U,D,j,ee){var de=me(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var ye=de=null,_e=D,we=D=0,It=null,be=j.next();_e!==null&&!be.done;we++,be=j.next()){_e.index>we?(It=_e,_e=null):It=_e.sibling;var gi=X(U,_e,be.value,ee);if(gi===null){_e===null&&(_e=It);break}r&&_e&&gi.alternate===null&&s(U,_e),D=g(gi,D,we),ye===null?de=gi:ye.sibling=gi,ye=gi,_e=It}if(be.done)return a(U,_e),Xe&&rs(U,we),de;if(_e===null){for(;!be.done;we++,be=j.next())be=Z(U,be.value,ee),be!==null&&(D=g(be,D,we),ye===null?de=be:ye.sibling=be,ye=be);return Xe&&rs(U,we),de}for(_e=h(U,_e);!be.done;we++,be=j.next())be=se(_e,U,we,be.value,ee),be!==null&&(r&&be.alternate!==null&&_e.delete(be.key===null?we:be.key),D=g(be,D,we),ye===null?de=be:ye.sibling=be,ye=be);return r&&_e.forEach(function(PT){return s(U,PT)}),Xe&&rs(U,we),de}function it(U,D,j,ee){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ee:e:{for(var de=j.key,ye=D;ye!==null;){if(ye.key===de){if(de=j.type,de===N){if(ye.tag===7){a(U,ye.sibling),D=f(ye,j.props.children),D.return=U,U=D;break e}}else if(ye.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Dt&&om(de)===ye.type){a(U,ye.sibling),D=f(ye,j.props),D.ref=Ca(U,ye,j),D.return=U,U=D;break e}a(U,ye);break}else s(U,ye);ye=ye.sibling}j.type===N?(D=hs(j.props.children,U.mode,ee,j.key),D.return=U,U=D):(ee=Nu(j.type,j.key,j.props,null,U.mode,ee),ee.ref=Ca(U,D,j),ee.return=U,U=ee)}return v(U);case ge:e:{for(ye=j.key;D!==null;){if(D.key===ye)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(U,D.sibling),D=f(D,j.children||[]),D.return=U,U=D;break e}else{a(U,D);break}else s(U,D);D=D.sibling}D=Ed(j,U.mode,ee),D.return=U,U=D}return v(U);case Dt:return ye=j._init,it(U,D,ye(j._payload),ee)}if(gr(j))return ce(U,D,j,ee);if(me(j))return he(U,D,j,ee);ou(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(U,D.sibling),D=f(D,j),D.return=U,U=D):(a(U,D),D=vd(j,U.mode,ee),D.return=U,U=D),v(U)):a(U,D)}return it}var co=am(!0),lm=am(!1),au=si(null),lu=null,ho=null,Ph=null;function Nh(){Ph=ho=lu=null}function xh(r){var s=au.current;Ge(au),r._currentValue=s}function Dh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function fo(r,s){lu=r,Ph=ho=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Qt=!0),r.firstContext=null)}function yn(r){var s=r._currentValue;if(Ph!==r)if(r={context:r,memoizedValue:s,next:null},ho===null){if(lu===null)throw Error(t(308));ho=r,lu.dependencies={lanes:0,firstContext:r}}else ho=ho.next=r;return s}var is=null;function Oh(r){is===null?is=[r]:is.push(r)}function um(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Oh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Pr(r,h)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var li=!1;function Lh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Nr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ui(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Ve&2){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Pr(r,a)}return f=h.interleaved,f===null?(s.next=s,Oh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Pr(r,a)}function uu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Jr(r,a)}}function hm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function cu(r,s,a,h){var f=r.updateQueue;li=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var k=R,z=k.next;k.next=null,v===null?g=z:v.next=z,v=k;var J=r.alternate;J!==null&&(J=J.updateQueue,R=J.lastBaseUpdate,R!==v&&(R===null?J.firstBaseUpdate=z:R.next=z,J.lastBaseUpdate=k))}if(g!==null){var Z=f.baseState;v=0,J=z=k=null,R=g;do{var X=R.lane,se=R.eventTime;if((h&X)===X){J!==null&&(J=J.next={eventTime:se,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ce=r,he=R;switch(X=s,se=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){Z=ce.call(se,Z,X);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,X=typeof ce=="function"?ce.call(se,Z,X):ce,X==null)break e;Z=oe({},Z,X);break e;case 2:li=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,X=f.effects,X===null?f.effects=[R]:X.push(R))}else se={eventTime:se,lane:X,tag:R.tag,payload:R.payload,callback:R.callback,next:null},J===null?(z=J=se,k=Z):J=J.next=se,v|=X;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;X=R,R=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);if(J===null&&(k=Z),f.baseState=k,f.firstBaseUpdate=z,f.lastBaseUpdate=J,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);as|=v,r.lanes=v,r.memoizedState=Z}}function dm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var ka={},rr=si(ka),Pa=si(ka),Na=si(ka);function ss(r){if(r===ka)throw Error(t(174));return r}function Vh(r,s){switch(We(Na,s),We(Pa,r),We(rr,ka),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ht(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ht(s,r)}Ge(rr),We(rr,s)}function po(){Ge(rr),Ge(Pa),Ge(Na)}function fm(r){ss(Na.current);var s=ss(rr.current),a=ht(s,r.type);s!==a&&(We(Pa,r),We(rr,a))}function bh(r){Pa.current===r&&(Ge(rr),Ge(Pa))}var Ze=si(0);function hu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Mh=[];function Fh(){for(var r=0;r<Mh.length;r++)Mh[r]._workInProgressVersionPrimary=null;Mh.length=0}var du=ie.ReactCurrentDispatcher,Uh=ie.ReactCurrentBatchConfig,os=0,et=null,ft=null,wt=null,fu=!1,xa=!1,Da=0,Xw=0;function Lt(){throw Error(t(321))}function jh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Vn(r[a],s[a]))return!1;return!0}function Bh(r,s,a,h,f,g){if(os=g,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=r===null||r.memoizedState===null?tT:nT,r=a(h,f),xa){g=0;do{if(xa=!1,Da=0,25<=g)throw Error(t(301));g+=1,wt=ft=null,s.updateQueue=null,du.current=rT,r=a(h,f)}while(xa)}if(du.current=gu,s=ft!==null&&ft.next!==null,os=0,wt=ft=et=null,fu=!1,s)throw Error(t(300));return r}function zh(){var r=Da!==0;return Da=0,r}function ir(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?et.memoizedState=wt=r:wt=wt.next=r,wt}function _n(){if(ft===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=ft.next;var s=wt===null?et.memoizedState:wt.next;if(s!==null)wt=s,ft=r;else{if(r===null)throw Error(t(310));ft=r,r={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},wt===null?et.memoizedState=wt=r:wt=wt.next=r}return wt}function Oa(r,s){return typeof s=="function"?s(r):s}function $h(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=ft,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=v=null,k=null,z=g;do{var J=z.lane;if((os&J)===J)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:r(h,z.action);else{var Z={lane:J,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(R=k=Z,v=h):k=k.next=Z,et.lanes|=J,as|=J}z=z.next}while(z!==null&&z!==g);k===null?v=h:k.next=R,Vn(h,s.memoizedState)||(Qt=!0),s.memoizedState=h,s.baseState=v,s.baseQueue=k,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,et.lanes|=g,as|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function qh(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);Vn(g,s.memoizedState)||(Qt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function pm(){}function mm(r,s){var a=et,h=_n(),f=s(),g=!Vn(h.memoizedState,f);if(g&&(h.memoizedState=f,Qt=!0),h=h.queue,Hh(_m.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,La(9,ym.bind(null,a,h,f,s),void 0,null),Tt===null)throw Error(t(349));os&30||gm(a,s,f)}return f}function gm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function ym(r,s,a,h){s.value=a,s.getSnapshot=h,vm(s)&&Em(r)}function _m(r,s,a){return a(function(){vm(s)&&Em(r)})}function vm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Vn(r,a)}catch{return!0}}function Em(r){var s=Pr(r,1);s!==null&&jn(s,r,1,-1)}function wm(r){var s=ir();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:r},s.queue=r,r=r.dispatch=eT.bind(null,et,r),[s.memoizedState,r]}function La(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Tm(){return _n().memoizedState}function pu(r,s,a,h){var f=ir();et.flags|=r,f.memoizedState=La(1|s,a,void 0,h===void 0?null:h)}function mu(r,s,a,h){var f=_n();h=h===void 0?null:h;var g=void 0;if(ft!==null){var v=ft.memoizedState;if(g=v.destroy,h!==null&&jh(h,v.deps)){f.memoizedState=La(s,a,g,h);return}}et.flags|=r,f.memoizedState=La(1|s,a,g,h)}function Im(r,s){return pu(8390656,8,r,s)}function Hh(r,s){return mu(2048,8,r,s)}function Sm(r,s){return mu(4,2,r,s)}function Rm(r,s){return mu(4,4,r,s)}function Am(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Cm(r,s,a){return a=a!=null?a.concat([r]):null,mu(4,4,Am.bind(null,s,r),a)}function Wh(){}function km(r,s){var a=_n();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&jh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Pm(r,s){var a=_n();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&jh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Nm(r,s,a){return os&21?(Vn(a,s)||(a=Qi(),et.lanes|=a,as|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Qt=!0),r.memoizedState=a)}function Jw(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var h=Uh.transition;Uh.transition={};try{r(!1),s()}finally{Ne=a,Uh.transition=h}}function xm(){return _n().memoizedState}function Zw(r,s,a){var h=fi(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Dm(r))Om(s,a);else if(a=um(r,s,a,h),a!==null){var f=qt();jn(a,r,h,f),Lm(a,s,h)}}function eT(r,s,a){var h=fi(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dm(r))Om(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,R=g(v,a);if(f.hasEagerState=!0,f.eagerState=R,Vn(R,v)){var k=s.interleaved;k===null?(f.next=f,Oh(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}a=um(r,s,f,h),a!==null&&(f=qt(),jn(a,r,h,f),Lm(a,s,h))}}function Dm(r){var s=r.alternate;return r===et||s!==null&&s===et}function Om(r,s){xa=fu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Lm(r,s,a){if(a&4194240){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Jr(r,a)}}var gu={readContext:yn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},tT={readContext:yn,useCallback:function(r,s){return ir().memoizedState=[r,s===void 0?null:s],r},useContext:yn,useEffect:Im,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,pu(4194308,4,Am.bind(null,s,r),a)},useLayoutEffect:function(r,s){return pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return pu(4,2,r,s)},useMemo:function(r,s){var a=ir();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=ir();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=Zw.bind(null,et,r),[h.memoizedState,r]},useRef:function(r){var s=ir();return r={current:r},s.memoizedState=r},useState:wm,useDebugValue:Wh,useDeferredValue:function(r){return ir().memoizedState=r},useTransition:function(){var r=wm(!1),s=r[0];return r=Jw.bind(null,r[1]),ir().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=et,f=ir();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));os&30||gm(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Im(_m.bind(null,h,g,r),[r]),h.flags|=2048,La(9,ym.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=ir(),s=Tt.identifierPrefix;if(Xe){var a=kr,h=Cr;a=(h&~(1<<32-Bt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Da++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Xw++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},nT={readContext:yn,useCallback:km,useContext:yn,useEffect:Hh,useImperativeHandle:Cm,useInsertionEffect:Sm,useLayoutEffect:Rm,useMemo:Pm,useReducer:$h,useRef:Tm,useState:function(){return $h(Oa)},useDebugValue:Wh,useDeferredValue:function(r){var s=_n();return Nm(s,ft.memoizedState,r)},useTransition:function(){var r=$h(Oa)[0],s=_n().memoizedState;return[r,s]},useMutableSource:pm,useSyncExternalStore:mm,useId:xm,unstable_isNewReconciler:!1},rT={readContext:yn,useCallback:km,useContext:yn,useEffect:Hh,useImperativeHandle:Cm,useInsertionEffect:Sm,useLayoutEffect:Rm,useMemo:Pm,useReducer:qh,useRef:Tm,useState:function(){return qh(Oa)},useDebugValue:Wh,useDeferredValue:function(r){var s=_n();return ft===null?s.memoizedState=r:Nm(s,ft.memoizedState,r)},useTransition:function(){var r=qh(Oa)[0],s=_n().memoizedState;return[r,s]},useMutableSource:pm,useSyncExternalStore:mm,useId:xm,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Kh(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var yu={isMounted:function(r){return(r=r._reactInternals)?kn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=qt(),f=fi(r),g=Nr(h,f);g.payload=s,a!=null&&(g.callback=a),s=ui(r,g,f),s!==null&&(jn(s,r,f,h),uu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=qt(),f=fi(r),g=Nr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ui(r,g,f),s!==null&&(jn(s,r,f,h),uu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=qt(),h=fi(r),f=Nr(a,h);f.tag=2,s!=null&&(f.callback=s),s=ui(r,f,h),s!==null&&(jn(s,r,h,a),uu(s,r,h))}};function Vm(r,s,a,h,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,v):s.prototype&&s.prototype.isPureReactComponent?!Ea(a,h)||!Ea(f,g):!0}function bm(r,s,a){var h=!1,f=oi,g=s.contextType;return typeof g=="object"&&g!==null?g=yn(g):(f=Gt(s)?ts:Ot.current,h=s.contextTypes,g=(h=h!=null)?oo(r,f):oi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Mm(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&yu.enqueueReplaceState(s,s.state,null)}function Gh(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Lh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=yn(g):(g=Gt(s)?ts:Ot.current,f.context=oo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Kh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&yu.enqueueReplaceState(f,f.state,null),cu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function mo(r,s){try{var a="",h=s;do a+=Ae(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Qh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Yh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var iT=typeof WeakMap=="function"?WeakMap:Map;function Fm(r,s,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Su||(Su=!0,hd=h),Yh(r,s)},a}function Um(r,s,a){a=Nr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){Yh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Yh(r,s),typeof h!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function jm(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new iT;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=_T.bind(null,r,s,a),s.then(r,r))}function Bm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function zm(r,s,a,h,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Nr(-1,1),s.tag=2,ui(a,s,1))),a.lanes|=1),r)}var sT=ie.ReactCurrentOwner,Qt=!1;function $t(r,s,a,h){s.child=r===null?lm(s,null,a,h):co(s,r.child,a,h)}function $m(r,s,a,h,f){a=a.render;var g=s.ref;return fo(s,f),h=Bh(r,s,a,h,g,f),a=zh(),r!==null&&!Qt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,xr(r,s,f)):(Xe&&a&&Sh(s),s.flags|=1,$t(r,s,h,f),s.child)}function qm(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!_d(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Hm(r,s,g,h,f)):(r=Nu(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(v,h)&&r.ref===s.ref)return xr(r,s,f)}return s.flags|=1,r=mi(g,h),r.ref=s.ref,r.return=s,s.child=r}function Hm(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(Ea(g,h)&&r.ref===s.ref)if(Qt=!1,s.pendingProps=h=g,(r.lanes&f)!==0)r.flags&131072&&(Qt=!0);else return s.lanes=r.lanes,xr(r,s,f)}return Xh(r,s,a,h,f)}function Wm(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(yo,un),un|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(yo,un),un|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,We(yo,un),un|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,We(yo,un),un|=h;return $t(r,s,f,a),s.child}function Km(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Xh(r,s,a,h,f){var g=Gt(a)?ts:Ot.current;return g=oo(s,g),fo(s,f),a=Bh(r,s,a,h,g,f),h=zh(),r!==null&&!Qt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,xr(r,s,f)):(Xe&&h&&Sh(s),s.flags|=1,$t(r,s,a,f),s.child)}function Gm(r,s,a,h,f){if(Gt(a)){var g=!0;tu(s)}else g=!1;if(fo(s,f),s.stateNode===null)vu(r,s),bm(s,a,h),Gh(s,a,h,f),h=!0;else if(r===null){var v=s.stateNode,R=s.memoizedProps;v.props=R;var k=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=yn(z):(z=Gt(a)?ts:Ot.current,z=oo(s,z));var J=a.getDerivedStateFromProps,Z=typeof J=="function"||typeof v.getSnapshotBeforeUpdate=="function";Z||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==h||k!==z)&&Mm(s,v,h,z),li=!1;var X=s.memoizedState;v.state=X,cu(s,h,v,f),k=s.memoizedState,R!==h||X!==k||Kt.current||li?(typeof J=="function"&&(Kh(s,a,J,h),k=s.memoizedState),(R=li||Vm(s,a,R,h,X,k,z))?(Z||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),v.props=h,v.state=k,v.context=z,h=R):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{v=s.stateNode,cm(r,s),R=s.memoizedProps,z=s.type===s.elementType?R:Mn(s.type,R),v.props=z,Z=s.pendingProps,X=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=yn(k):(k=Gt(a)?ts:Ot.current,k=oo(s,k));var se=a.getDerivedStateFromProps;(J=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==Z||X!==k)&&Mm(s,v,h,k),li=!1,X=s.memoizedState,v.state=X,cu(s,h,v,f);var ce=s.memoizedState;R!==Z||X!==ce||Kt.current||li?(typeof se=="function"&&(Kh(s,a,se,h),ce=s.memoizedState),(z=li||Vm(s,a,z,h,X,ce,k)||!1)?(J||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(h,ce,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(h,ce,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),v.props=h,v.state=ce,v.context=k,h=z):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),h=!1)}return Jh(r,s,a,h,g,f)}function Jh(r,s,a,h,f,g){Km(r,s);var v=(s.flags&128)!==0;if(!h&&!v)return f&&Zp(s,a,!1),xr(r,s,g);h=s.stateNode,sT.current=s;var R=v&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&v?(s.child=co(s,r.child,null,g),s.child=co(s,null,R,g)):$t(r,s,R,g),s.memoizedState=h.state,f&&Zp(s,a,!0),s.child}function Qm(r){var s=r.stateNode;s.pendingContext?Xp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Xp(r,s.context,!1),Vh(r,s.containerInfo)}function Ym(r,s,a,h,f){return uo(),kh(f),s.flags|=256,$t(r,s,a,h),s.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function ed(r){return{baseLanes:r,cachePool:null,transitions:null}}function Xm(r,s,a){var h=s.pendingProps,f=Ze.current,g=!1,v=(s.flags&128)!==0,R;if((R=v)||(R=r!==null&&r.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(Ze,f&1),r===null)return Ch(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=h.children,r=h.fallback,g?(h=s.mode,g=s.child,v={mode:"hidden",children:v},!(h&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=xu(v,h,0,null),r=hs(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=ed(a),s.memoizedState=Zh,r):td(s,v));if(f=r.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return oT(r,s,v,h,R,f,a);if(g){g=h.fallback,v=s.mode,f=r.child,R=f.sibling;var k={mode:"hidden",children:h.children};return!(v&1)&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=mi(f,k),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=mi(R,g):(g=hs(g,v,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,v=r.child.memoizedState,v=v===null?ed(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Zh,h}return g=r.child,r=g.sibling,h=mi(g,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function td(r,s){return s=xu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function _u(r,s,a,h){return h!==null&&kh(h),co(s,r.child,null,a),r=td(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function oT(r,s,a,h,f,g,v){if(a)return s.flags&256?(s.flags&=-257,h=Qh(Error(t(422))),_u(r,s,v,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=xu({mode:"visible",children:h.children},f,0,null),g=hs(g,f,v,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,s.mode&1&&co(s,r.child,null,v),s.child.memoizedState=ed(v),s.memoizedState=Zh,g);if(!(s.mode&1))return _u(r,s,v,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=Qh(g,h,void 0),_u(r,s,v,h)}if(R=(v&r.childLanes)!==0,Qt||R){if(h=Tt,h!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(h.suspendedLanes|v)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Pr(r,f),jn(h,r,f,-1))}return yd(),h=Qh(Error(t(421))),_u(r,s,v,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=vT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,ln=ii(f.nextSibling),an=s,Xe=!0,bn=null,r!==null&&(mn[gn++]=Cr,mn[gn++]=kr,mn[gn++]=ns,Cr=r.id,kr=r.overflow,ns=s),s=td(s,h.children),s.flags|=4096,s)}function Jm(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Dh(r.return,s,a)}function nd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function Zm(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if($t(r,s,h.children,a),h=Ze.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Jm(r,a,s);else if(r.tag===19)Jm(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(Ze,h),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&hu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),nd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&hu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}nd(s,!0,a,null,g);break;case"together":nd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function xr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),as|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=mi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=mi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function aT(r,s,a){switch(s.tag){case 3:Qm(s),uo();break;case 5:fm(s);break;case 1:Gt(s.type)&&tu(s);break;case 4:Vh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;We(au,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Ze,Ze.current&1),s.flags|=128,null):a&s.child.childLanes?Xm(r,s,a):(We(Ze,Ze.current&1),r=xr(r,s,a),r!==null?r.sibling:null);We(Ze,Ze.current&1);break;case 19:if(h=(a&s.childLanes)!==0,r.flags&128){if(h)return Zm(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(Ze,Ze.current),h)break;return null;case 22:case 23:return s.lanes=0,Wm(r,s,a)}return xr(r,s,a)}var eg,rd,tg,ng;eg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},rd=function(){},tg=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,ss(rr.current);var g=null;switch(a){case"input":f=Fi(r,f),h=Fi(r,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=Qo(r,f),h=Qo(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Jl)}ta(a,h);var v;a=null;for(z in f)if(!h.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var R=f[z];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var k=h[z];if(R=f!=null?f[z]:void 0,h.hasOwnProperty(z)&&k!==R&&(k!=null||R!=null))if(z==="style")if(R){for(v in R)!R.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&R[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(g||(g=[]),g.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,R=R?R.__html:void 0,k!=null&&R!==k&&(g=g||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&Ke("scroll",r),g||R===k||(g=[])):(g=g||[]).push(z,k))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},ng=function(r,s,a,h){a!==h&&(s.flags|=4)};function Va(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function lT(r,s,a){var h=s.pendingProps;switch(Rh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Gt(s.type)&&eu(),Vt(s),null;case 3:return h=s.stateNode,po(),Ge(Kt),Ge(Ot),Fh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(su(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,bn!==null&&(pd(bn),bn=null))),rd(r,s),Vt(s),null;case 5:bh(s);var f=ss(Na.current);if(a=s.type,r!==null&&s.stateNode!=null)tg(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=ss(rr.current),su(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[nr]=s,h[Ra]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",h),Ke("close",h);break;case"iframe":case"object":case"embed":Ke("load",h);break;case"video":case"audio":for(f=0;f<Ta.length;f++)Ke(Ta[f],h);break;case"source":Ke("error",h);break;case"img":case"image":case"link":Ke("error",h),Ke("load",h);break;case"details":Ke("toggle",h);break;case"input":ks(h,g),Ke("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",h);break;case"textarea":Ns(h,g),Ke("invalid",h)}ta(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var R=g[v];v==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&Xl(h.textContent,R,r),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&Xl(h.textContent,R,r),f=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&Ke("scroll",h)}switch(a){case"input":mr(h),Il(h,g,!0);break;case"textarea":mr(h),Yo(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Jl)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ct(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=v.createElement(a,{is:h.is}):(r=v.createElement(a),a==="select"&&(v=r,h.multiple?v.multiple=!0:h.size&&(v.size=h.size))):r=v.createElementNS(r,a),r[nr]=s,r[Ra]=h,eg(r,s,!1,!1),s.stateNode=r;e:{switch(v=na(a,h),a){case"dialog":Ke("cancel",r),Ke("close",r),f=h;break;case"iframe":case"object":case"embed":Ke("load",r),f=h;break;case"video":case"audio":for(f=0;f<Ta.length;f++)Ke(Ta[f],r);f=h;break;case"source":Ke("error",r),f=h;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=h;break;case"details":Ke("toggle",r),f=h;break;case"input":ks(r,h),f=Fi(r,h),Ke("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),Ke("invalid",r);break;case"textarea":Ns(r,h),f=Qo(r,h),Ke("invalid",r);break;default:f=h}ta(a,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var k=R[g];g==="style"?Zo(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Xo(r,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Kr(r,k):typeof k=="number"&&Kr(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Ke("scroll",r):k!=null&&Y(r,g,k,v))}switch(a){case"input":mr(r),Il(r,h,!1);break;case"textarea":mr(r),Yo(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Fe(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?yr(r,!!h.multiple,g,!1):h.defaultValue!=null&&yr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)ng(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=ss(Na.current),ss(rr.current),su(s)){if(h=s.stateNode,a=s.memoizedProps,h[nr]=s,(g=h.nodeValue!==a)&&(r=an,r!==null))switch(r.tag){case 3:Xl(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Xl(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[nr]=s,s.stateNode=h}return Vt(s),null;case 13:if(Ge(Ze),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&ln!==null&&s.mode&1&&!(s.flags&128))sm(),uo(),s.flags|=98560,g=!1;else if(g=su(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[nr]=s}else uo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Vt(s),g=!1}else bn!==null&&(pd(bn),bn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||Ze.current&1?pt===0&&(pt=3):yd())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return po(),rd(r,s),r===null&&Ia(s.stateNode.containerInfo),Vt(s),null;case 10:return xh(s.type._context),Vt(s),null;case 17:return Gt(s.type)&&eu(),Vt(s),null;case 19:if(Ge(Ze),g=s.memoizedState,g===null)return Vt(s),null;if(h=(s.flags&128)!==0,v=g.rendering,v===null)if(h)Va(g,!1);else{if(pt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=hu(r),v!==null){for(s.flags|=128,Va(g,!1),h=v.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>_o&&(s.flags|=128,h=!0,Va(g,!1),s.lanes=4194304)}else{if(!h)if(r=hu(v),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Va(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Xe)return Vt(s),null}else 2*He()-g.renderingStartTime>_o&&a!==1073741824&&(s.flags|=128,h=!0,Va(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Ze.current,We(Ze,h?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return gd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?un&1073741824&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function uT(r,s){switch(Rh(s),s.tag){case 1:return Gt(s.type)&&eu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return po(),Ge(Kt),Ge(Ot),Fh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return bh(s),null;case 13:if(Ge(Ze),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Ze),null;case 4:return po(),null;case 10:return xh(s.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var Eu=!1,bt=!1,cT=typeof WeakSet=="function"?WeakSet:Set,le=null;function go(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){nt(r,s,h)}else a.current=null}function id(r,s,a){try{a()}catch(h){nt(r,s,h)}}var rg=!1;function hT(r,s){if(gh=ti,r=Vp(),lh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,R=-1,k=-1,z=0,J=0,Z=r,X=null;t:for(;;){for(var se;Z!==a||f!==0&&Z.nodeType!==3||(R=v+f),Z!==g||h!==0&&Z.nodeType!==3||(k=v+h),Z.nodeType===3&&(v+=Z.nodeValue.length),(se=Z.firstChild)!==null;)X=Z,Z=se;for(;;){if(Z===r)break t;if(X===a&&++z===f&&(R=v),X===g&&++J===h&&(k=v),(se=Z.nextSibling)!==null)break;Z=X,X=Z.parentNode}Z=se}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(yh={focusedElem:r,selectionRange:a},ti=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,it=ce.memoizedState,U=s.stateNode,D=U.getSnapshotBeforeUpdate(s.elementType===s.type?he:Mn(s.type,he),it);U.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){nt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ce=rg,rg=!1,ce}function ba(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&id(s,a,g)}f=f.next}while(f!==h)}}function wu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function sd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function ig(r){var s=r.alternate;s!==null&&(r.alternate=null,ig(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[nr],delete s[Ra],delete s[wh],delete s[Kw],delete s[Gw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function sg(r){return r.tag===5||r.tag===3||r.tag===4}function og(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||sg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function od(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Jl));else if(h!==4&&(r=r.child,r!==null))for(od(r,s,a),r=r.sibling;r!==null;)od(r,s,a),r=r.sibling}function ad(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(ad(r,s,a),r=r.sibling;r!==null;)ad(r,s,a),r=r.sibling}var Ct=null,Fn=!1;function ci(r,s,a){for(a=a.child;a!==null;)ag(r,s,a),a=a.sibling}function ag(r,s,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ki,a)}catch{}switch(a.tag){case 5:bt||go(a,s);case 6:var h=Ct,f=Fn;Ct=null,ci(r,s,a),Ct=h,Fn=f,Ct!==null&&(Fn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Fn?(r=Ct,a=a.stateNode,r.nodeType===8?Eh(r.parentNode,a):r.nodeType===1&&Eh(r,a),On(r)):Eh(Ct,a.stateNode));break;case 4:h=Ct,f=Fn,Ct=a.stateNode.containerInfo,Fn=!0,ci(r,s,a),Ct=h,Fn=f;break;case 0:case 11:case 14:case 15:if(!bt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&id(a,s,v),f=f.next}while(f!==h)}ci(r,s,a);break;case 1:if(!bt&&(go(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(R){nt(a,s,R)}ci(r,s,a);break;case 21:ci(r,s,a);break;case 22:a.mode&1?(bt=(h=bt)||a.memoizedState!==null,ci(r,s,a),bt=h):ci(r,s,a);break;default:ci(r,s,a)}}function lg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new cT),s.forEach(function(h){var f=ET.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Un(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,v=s,R=v;e:for(;R!==null;){switch(R.tag){case 5:Ct=R.stateNode,Fn=!1;break e;case 3:Ct=R.stateNode.containerInfo,Fn=!0;break e;case 4:Ct=R.stateNode.containerInfo,Fn=!0;break e}R=R.return}if(Ct===null)throw Error(t(160));ag(g,v,f),Ct=null,Fn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(z){nt(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ug(s,r),s=s.sibling}function ug(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Un(s,r),sr(r),h&4){try{ba(3,r,r.return),wu(3,r)}catch(he){nt(r,r.return,he)}try{ba(5,r,r.return)}catch(he){nt(r,r.return,he)}}break;case 1:Un(s,r),sr(r),h&512&&a!==null&&go(a,a.return);break;case 5:if(Un(s,r),sr(r),h&512&&a!==null&&go(a,a.return),r.flags&32){var f=r.stateNode;try{Kr(f,"")}catch(he){nt(r,r.return,he)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,R=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&Ko(f,g),na(R,v);var z=na(R,g);for(v=0;v<k.length;v+=2){var J=k[v],Z=k[v+1];J==="style"?Zo(f,Z):J==="dangerouslySetInnerHTML"?Xo(f,Z):J==="children"?Kr(f,Z):Y(f,J,Z,z)}switch(R){case"input":Go(f,g);break;case"textarea":xs(f,g);break;case"select":var X=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?yr(f,!!g.multiple,se,!1):X!==!!g.multiple&&(g.defaultValue!=null?yr(f,!!g.multiple,g.defaultValue,!0):yr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ra]=g}catch(he){nt(r,r.return,he)}}break;case 6:if(Un(s,r),sr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(he){nt(r,r.return,he)}}break;case 3:if(Un(s,r),sr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{On(s.containerInfo)}catch(he){nt(r,r.return,he)}break;case 4:Un(s,r),sr(r);break;case 13:Un(s,r),sr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(cd=He())),h&4&&lg(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(bt=(z=bt)||J,Un(s,r),bt=z):Un(s,r),sr(r),h&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!J&&r.mode&1)for(le=r,J=r.child;J!==null;){for(Z=le=J;le!==null;){switch(X=le,se=X.child,X.tag){case 0:case 11:case 14:case 15:ba(4,X,X.return);break;case 1:go(X,X.return);var ce=X.stateNode;if(typeof ce.componentWillUnmount=="function"){h=X,a=X.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){nt(h,a,he)}}break;case 5:go(X,X.return);break;case 22:if(X.memoizedState!==null){dg(Z);continue}}se!==null?(se.return=X,le=se):dg(Z)}J=J.sibling}e:for(J=null,Z=r;;){if(Z.tag===5){if(J===null){J=Z;try{f=Z.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=Z.stateNode,k=Z.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,R.style.display=Jo("display",v))}catch(he){nt(r,r.return,he)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(he){nt(r,r.return,he)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Un(s,r),sr(r),h&4&&lg(r);break;case 21:break;default:Un(s,r),sr(r)}}function sr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(sg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Kr(f,""),h.flags&=-33);var g=og(r);ad(r,g,f);break;case 3:case 4:var v=h.stateNode.containerInfo,R=og(r);od(r,R,v);break;default:throw Error(t(161))}}catch(k){nt(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function dT(r,s,a){le=r,cg(r)}function cg(r,s,a){for(var h=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&h){var v=f.memoizedState!==null||Eu;if(!v){var R=f.alternate,k=R!==null&&R.memoizedState!==null||bt;R=Eu;var z=bt;if(Eu=v,(bt=k)&&!z)for(le=f;le!==null;)v=le,k=v.child,v.tag===22&&v.memoizedState!==null?fg(f):k!==null?(k.return=v,le=k):fg(f);for(;g!==null;)le=g,cg(g),g=g.sibling;le=f,Eu=R,bt=z}hg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,le=g):hg(r)}}function hg(r){for(;le!==null;){var s=le;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:bt||wu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!bt)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&dm(s,g,h);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}dm(s,v,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var J=z.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&On(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||s.flags&512&&sd(s)}catch(X){nt(s,s.return,X)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function dg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function fg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{wu(4,s)}catch(k){nt(s,a,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){nt(s,f,k)}}var g=s.return;try{sd(s)}catch(k){nt(s,g,k)}break;case 5:var v=s.return;try{sd(s)}catch(k){nt(s,v,k)}}}catch(k){nt(s,s.return,k)}if(s===r){le=null;break}var R=s.sibling;if(R!==null){R.return=s.return,le=R;break}le=s.return}}var fT=Math.ceil,Tu=ie.ReactCurrentDispatcher,ld=ie.ReactCurrentOwner,vn=ie.ReactCurrentBatchConfig,Ve=0,Tt=null,at=null,kt=0,un=0,yo=si(0),pt=0,Ma=null,as=0,Iu=0,ud=0,Fa=null,Yt=null,cd=0,_o=1/0,Dr=null,Su=!1,hd=null,hi=null,Ru=!1,di=null,Au=0,Ua=0,dd=null,Cu=-1,ku=0;function qt(){return Ve&6?He():Cu!==-1?Cu:Cu=He()}function fi(r){return r.mode&1?Ve&2&&kt!==0?kt&-kt:Yw.transition!==null?(ku===0&&(ku=Qi()),ku):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:fa(r.type)),r):1}function jn(r,s,a,h){if(50<Ua)throw Ua=0,dd=null,Error(t(185));Xr(r,a,h),(!(Ve&2)||r!==Tt)&&(r===Tt&&(!(Ve&2)&&(Iu|=a),pt===4&&pi(r,kt)),Xt(r,h),a===1&&Ve===0&&!(s.mode&1)&&(_o=He()+500,nu&&ai()))}function Xt(r,s){var a=r.callbackNode;Er(r,s);var h=Gi(r,r===Tt?kt:0);if(h===0)a!==null&&la(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&la(a),s===1)r.tag===0?Qw(mg.bind(null,r)):em(mg.bind(null,r)),Hw(function(){!(Ve&6)&&ai()}),a=null;else{switch(Zr(h)){case 1:a=Wi;break;case 4:a=Gr;break;case 16:a=dn;break;case 536870912:a=kl;break;default:a=dn}a=Ig(a,pg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function pg(r,s){if(Cu=-1,ku=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(vo()&&r.callbackNode!==a)return null;var h=Gi(r,r===Tt?kt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=Pu(r,h);else{s=h;var f=Ve;Ve|=2;var g=yg();(Tt!==r||kt!==s)&&(Dr=null,_o=He()+500,us(r,s));do try{gT();break}catch(R){gg(r,R)}while(!0);Nh(),Tu.current=g,Ve=f,at!==null?s=0:(Tt=null,kt=0,s=pt)}if(s!==0){if(s===2&&(f=rn(r),f!==0&&(h=f,s=fd(r,f))),s===1)throw a=Ma,us(r,0),pi(r,h),Xt(r,He()),a;if(s===6)pi(r,h);else{if(f=r.current.alternate,!(h&30)&&!pT(f)&&(s=Pu(r,h),s===2&&(g=rn(r),g!==0&&(h=g,s=fd(r,g))),s===1))throw a=Ma,us(r,0),pi(r,h),Xt(r,He()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:cs(r,Yt,Dr);break;case 3:if(pi(r,h),(h&130023424)===h&&(s=cd+500-He(),10<s)){if(Gi(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=vh(cs.bind(null,r,Yt,Dr),s);break}cs(r,Yt,Dr);break;case 4:if(pi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var v=31-Bt(h);g=1<<v,v=s[v],v>f&&(f=v),h&=~g}if(h=f,h=He()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*fT(h/1960))-h,10<h){r.timeoutHandle=vh(cs.bind(null,r,Yt,Dr),h);break}cs(r,Yt,Dr);break;case 5:cs(r,Yt,Dr);break;default:throw Error(t(329))}}}return Xt(r,He()),r.callbackNode===a?pg.bind(null,r):null}function fd(r,s){var a=Fa;return r.current.memoizedState.isDehydrated&&(us(r,s).flags|=256),r=Pu(r,s),r!==2&&(s=Yt,Yt=a,s!==null&&pd(s)),r}function pd(r){Yt===null?Yt=r:Yt.push.apply(Yt,r)}function pT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!Vn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function pi(r,s){for(s&=~ud,s&=~Iu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Bt(s),h=1<<a;r[a]=-1,s&=~h}}function mg(r){if(Ve&6)throw Error(t(327));vo();var s=Gi(r,0);if(!(s&1))return Xt(r,He()),null;var a=Pu(r,s);if(r.tag!==0&&a===2){var h=rn(r);h!==0&&(s=h,a=fd(r,h))}if(a===1)throw a=Ma,us(r,0),pi(r,s),Xt(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,cs(r,Yt,Dr),Xt(r,He()),null}function md(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(_o=He()+500,nu&&ai())}}function ls(r){di!==null&&di.tag===0&&!(Ve&6)&&vo();var s=Ve;Ve|=1;var a=vn.transition,h=Ne;try{if(vn.transition=null,Ne=1,r)return r()}finally{Ne=h,vn.transition=a,Ve=s,!(Ve&6)&&ai()}}function gd(){un=yo.current,Ge(yo)}function us(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,qw(a)),at!==null)for(a=at.return;a!==null;){var h=a;switch(Rh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&eu();break;case 3:po(),Ge(Kt),Ge(Ot),Fh();break;case 5:bh(h);break;case 4:po();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:xh(h.type._context);break;case 22:case 23:gd()}a=a.return}if(Tt=r,at=r=mi(r.current,null),kt=un=s,pt=0,Ma=null,ud=Iu=as=0,Yt=Fa=null,is!==null){for(s=0;s<is.length;s++)if(a=is[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,h.next=v}a.pending=h}is=null}return r}function gg(r,s){do{var a=at;try{if(Nh(),du.current=gu,fu){for(var h=et.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}fu=!1}if(os=0,wt=ft=et=null,xa=!1,Da=0,ld.current=null,a===null||a.return===null){pt=1,Ma=s,at=null;break}e:{var g=r,v=a.return,R=a,k=s;if(s=kt,R.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,J=R,Z=J.tag;if(!(J.mode&1)&&(Z===0||Z===11||Z===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var se=Bm(v);if(se!==null){se.flags&=-257,zm(se,v,R,g,s),se.mode&1&&jm(g,z,s),s=se,k=z;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(k),s.updateQueue=he}else ce.add(k);break e}else{if(!(s&1)){jm(g,z,s),yd();break e}k=Error(t(426))}}else if(Xe&&R.mode&1){var it=Bm(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),zm(it,v,R,g,s),kh(mo(k,R));break e}}g=k=mo(k,R),pt!==4&&(pt=2),Fa===null?Fa=[g]:Fa.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Fm(g,k,s);hm(g,U);break e;case 1:R=k;var D=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(hi===null||!hi.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=Um(g,R,s);hm(g,ee);break e}}g=g.return}while(g!==null)}vg(a)}catch(de){s=de,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function yg(){var r=Tu.current;return Tu.current=gu,r===null?gu:r}function yd(){(pt===0||pt===3||pt===2)&&(pt=4),Tt===null||!(as&268435455)&&!(Iu&268435455)||pi(Tt,kt)}function Pu(r,s){var a=Ve;Ve|=2;var h=yg();(Tt!==r||kt!==s)&&(Dr=null,us(r,s));do try{mT();break}catch(f){gg(r,f)}while(!0);if(Nh(),Ve=a,Tu.current=h,at!==null)throw Error(t(261));return Tt=null,kt=0,pt}function mT(){for(;at!==null;)_g(at)}function gT(){for(;at!==null&&!Al();)_g(at)}function _g(r){var s=Tg(r.alternate,r,un);r.memoizedProps=r.pendingProps,s===null?vg(r):at=s,ld.current=null}function vg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=uT(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{pt=6,at=null;return}}else if(a=lT(a,s,un),a!==null){at=a;return}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);pt===0&&(pt=5)}function cs(r,s,a){var h=Ne,f=vn.transition;try{vn.transition=null,Ne=1,yT(r,s,a,h)}finally{vn.transition=f,Ne=h}return null}function yT(r,s,a,h){do vo();while(di!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===Tt&&(at=Tt=null,kt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ru||(Ru=!0,Ig(dn,function(){return vo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=vn.transition,vn.transition=null;var v=Ne;Ne=1;var R=Ve;Ve|=4,ld.current=null,hT(r,a),ug(a,r),Mw(yh),ti=!!gh,yh=gh=null,r.current=a,dT(a),eh(),Ve=R,Ne=v,vn.transition=g}else r.current=a;if(Ru&&(Ru=!1,di=r,Au=f),g=r.pendingLanes,g===0&&(hi=null),Pl(a.stateNode),Xt(r,He()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Su)throw Su=!1,r=hd,hd=null,r;return Au&1&&r.tag!==0&&vo(),g=r.pendingLanes,g&1?r===dd?Ua++:(Ua=0,dd=r):Ua=0,ai(),null}function vo(){if(di!==null){var r=Zr(Au),s=vn.transition,a=Ne;try{if(vn.transition=null,Ne=16>r?16:r,di===null)var h=!1;else{if(r=di,di=null,Au=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,le=r.current;le!==null;){var g=le,v=g.child;if(le.flags&16){var R=g.deletions;if(R!==null){for(var k=0;k<R.length;k++){var z=R[k];for(le=z;le!==null;){var J=le;switch(J.tag){case 0:case 11:case 15:ba(8,J,g)}var Z=J.child;if(Z!==null)Z.return=J,le=Z;else for(;le!==null;){J=le;var X=J.sibling,se=J.return;if(ig(J),J===z){le=null;break}if(X!==null){X.return=se,le=X;break}le=se}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var it=he.sibling;he.sibling=null,he=it}while(he!==null)}}le=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,le=v;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:ba(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,le=U;break e}le=g.return}}var D=r.current;for(le=D;le!==null;){v=le;var j=v.child;if(v.subtreeFlags&2064&&j!==null)j.return=v,le=j;else e:for(v=D;le!==null;){if(R=le,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:wu(9,R)}}catch(de){nt(R,R.return,de)}if(R===v){le=null;break e}var ee=R.sibling;if(ee!==null){ee.return=R.return,le=ee;break e}le=R.return}}if(Ve=f,ai(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ki,r)}catch{}h=!0}return h}finally{Ne=a,vn.transition=s}}return!1}function Eg(r,s,a){s=mo(a,s),s=Fm(r,s,1),r=ui(r,s,1),s=qt(),r!==null&&(Xr(r,1,s),Xt(r,s))}function nt(r,s,a){if(r.tag===3)Eg(r,r,a);else for(;s!==null;){if(s.tag===3){Eg(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(hi===null||!hi.has(h))){r=mo(a,r),r=Um(s,r,1),s=ui(s,r,1),r=qt(),s!==null&&(Xr(s,1,r),Xt(s,r));break}}s=s.return}}function _T(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=qt(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(kt&a)===a&&(pt===4||pt===3&&(kt&130023424)===kt&&500>He()-cd?us(r,0):ud|=a),Xt(r,s)}function wg(r,s){s===0&&(r.mode&1?(s=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):s=1);var a=qt();r=Pr(r,s),r!==null&&(Xr(r,s,a),Xt(r,a))}function vT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),wg(r,a)}function ET(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),wg(r,a)}var Tg;Tg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Kt.current)Qt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Qt=!1,aT(r,s,a);Qt=!!(r.flags&131072)}else Qt=!1,Xe&&s.flags&1048576&&tm(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;vu(r,s),r=s.pendingProps;var f=oo(s,Ot.current);fo(s,a),f=Bh(null,s,h,r,f,a);var g=zh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gt(h)?(g=!0,tu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Lh(s),f.updater=yu,s.stateNode=f,f._reactInternals=s,Gh(s,h,r,a),s=Jh(null,s,h,!0,g,a)):(s.tag=0,Xe&&g&&Sh(s),$t(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(vu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=TT(h),r=Mn(h,r),f){case 0:s=Xh(null,s,h,r,a);break e;case 1:s=Gm(null,s,h,r,a);break e;case 11:s=$m(null,s,h,r,a);break e;case 14:s=qm(null,s,h,Mn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Mn(h,f),Xh(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Mn(h,f),Gm(r,s,h,f,a);case 3:e:{if(Qm(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,cm(r,s),cu(s,h,null,a);var v=s.memoizedState;if(h=v.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=mo(Error(t(423)),s),s=Ym(r,s,h,a,f);break e}else if(h!==f){f=mo(Error(t(424)),s),s=Ym(r,s,h,a,f);break e}else for(ln=ii(s.stateNode.containerInfo.firstChild),an=s,Xe=!0,bn=null,a=lm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),h===f){s=xr(r,s,a);break e}$t(r,s,h,a)}s=s.child}return s;case 5:return fm(s),r===null&&Ch(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,_h(h,f)?v=null:g!==null&&_h(h,g)&&(s.flags|=32),Km(r,s),$t(r,s,v,a),s.child;case 6:return r===null&&Ch(s),null;case 13:return Xm(r,s,a);case 4:return Vh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=co(s,null,h,a):$t(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Mn(h,f),$m(r,s,h,f,a);case 7:return $t(r,s,s.pendingProps,a),s.child;case 8:return $t(r,s,s.pendingProps.children,a),s.child;case 12:return $t(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,We(au,h._currentValue),h._currentValue=v,g!==null)if(Vn(g.value,v)){if(g.children===f.children&&!Kt.current){s=xr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){v=g.child;for(var k=R.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=Nr(-1,a&-a),k.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var J=z.pending;J===null?k.next=k:(k.next=J.next,J.next=k),z.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Dh(g.return,a,s),R.lanes|=a;break}k=k.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),Dh(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}$t(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,fo(s,a),f=yn(f),h=h(f),s.flags|=1,$t(r,s,h,a),s.child;case 14:return h=s.type,f=Mn(h,s.pendingProps),f=Mn(h.type,f),qm(r,s,h,f,a);case 15:return Hm(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Mn(h,f),vu(r,s),s.tag=1,Gt(h)?(r=!0,tu(s)):r=!1,fo(s,a),bm(s,h,f),Gh(s,h,f,a),Jh(null,s,h,!0,r,a);case 19:return Zm(r,s,a);case 22:return Wm(r,s,a)}throw Error(t(156,s.tag))};function Ig(r,s){return Us(r,s)}function wT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(r,s,a,h){return new wT(r,s,a,h)}function _d(r){return r=r.prototype,!(!r||!r.isReactComponent)}function TT(r){if(typeof r=="function")return _d(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===_t)return 14}return 2}function mi(r,s){var a=r.alternate;return a===null?(a=En(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Nu(r,s,a,h,f,g){var v=2;if(h=r,typeof r=="function")_d(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case N:return hs(a.children,f,g,s);case S:v=8,f|=8;break;case A:return r=En(12,a,s,f|2),r.elementType=A,r.lanes=g,r;case C:return r=En(13,a,s,f),r.elementType=C,r.lanes=g,r;case $e:return r=En(19,a,s,f),r.elementType=$e,r.lanes=g,r;case Be:return xu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:v=10;break e;case L:v=9;break e;case O:v=11;break e;case _t:v=14;break e;case Dt:v=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=En(v,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function hs(r,s,a,h){return r=En(7,r,h,s),r.lanes=a,r}function xu(r,s,a,h){return r=En(22,r,h,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function vd(r,s,a){return r=En(6,r,null,s),r.lanes=a,r}function Ed(r,s,a){return s=En(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function IT(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yr(0),this.expirationTimes=Yr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yr(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wd(r,s,a,h,f,g,v,R,k){return r=new IT(r,s,a,R,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=En(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(g),r}function ST(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Sg(r){if(!r)return oi;r=r._reactInternals;e:{if(kn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Gt(a))return Jp(r,a,s)}return s}function Rg(r,s,a,h,f,g,v,R,k){return r=wd(a,h,!0,r,f,g,v,R,k),r.context=Sg(null),a=r.current,h=qt(),f=fi(a),g=Nr(h,f),g.callback=s??null,ui(a,g,f),r.current.lanes=f,Xr(r,f,h),Xt(r,h),r}function Du(r,s,a,h){var f=s.current,g=qt(),v=fi(f);return a=Sg(a),s.context===null?s.context=a:s.pendingContext=a,s=Nr(g,v),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=ui(f,s,v),r!==null&&(jn(r,f,v,g),uu(r,f,v)),v}function Ou(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Ag(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Td(r,s){Ag(r,s),(r=r.alternate)&&Ag(r,s)}function RT(){return null}var Cg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Id(r){this._internalRoot=r}Lu.prototype.render=Id.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Du(r,s,null,null)},Lu.prototype.unmount=Id.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ls(function(){Du(null,r,null,null)}),s[Rr]=null}};function Lu(r){this._internalRoot=r}Lu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ll();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Jn.length&&s!==0&&s<Jn[a].priority;a++);Jn.splice(a,0,r),a===0&&Ml(r)}};function Sd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Vu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function kg(){}function AT(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var z=Ou(v);g.call(z)}}var v=Rg(s,h,r,0,null,!1,!1,"",kg);return r._reactRootContainer=v,r[Rr]=v.current,Ia(r.nodeType===8?r.parentNode:r),ls(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var z=Ou(k);R.call(z)}}var k=wd(r,0,!1,null,null,!1,!1,"",kg);return r._reactRootContainer=k,r[Rr]=k.current,Ia(r.nodeType===8?r.parentNode:r),ls(function(){Du(s,k,a,h)}),k}function bu(r,s,a,h,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var R=f;f=function(){var k=Ou(v);R.call(k)}}Du(s,v,r,f)}else v=AT(a,s,r,f,h);return Ou(v)}Dl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Qr(s.pendingLanes);a!==0&&(Jr(s,a|1),Xt(s,He()),!(Ve&6)&&(_o=He()+500,ai()))}break;case 13:ls(function(){var h=Pr(r,1);if(h!==null){var f=qt();jn(h,r,1,f)}}),Td(r,1)}},zs=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=qt();jn(s,r,134217728,a)}Td(r,134217728)}},Ol=function(r){if(r.tag===13){var s=fi(r),a=Pr(r,s);if(a!==null){var h=qt();jn(a,r,s,h)}Td(r,s)}},Ll=function(){return Ne},Vl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Os=function(r,s,a){switch(s){case"input":if(Go(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=Zl(h);if(!f)throw Error(t(90));Cs(h),Go(h,f)}}}break;case"textarea":xs(r,a);break;case"select":s=a.value,s!=null&&yr(r,!!a.multiple,s,!1)}},zi=md,ia=ls;var CT={usingClientEntryPoint:!1,Events:[Aa,io,Zl,Yn,ra,md]},ja={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kT={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=aa(r),r===null?null:r.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||RT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Ki=Mu.inject(kT),nn=Mu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CT,Jt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(s))throw Error(t(200));return ST(r,s,null,a)},Jt.createRoot=function(r,s){if(!Sd(r))throw Error(t(299));var a=!1,h="",f=Cg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=wd(r,1,!1,null,null,a,!1,h,f),r[Rr]=s.current,Ia(r.nodeType===8?r.parentNode:r),new Id(s)},Jt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=aa(s),r=r===null?null:r.stateNode,r},Jt.flushSync=function(r){return ls(r)},Jt.hydrate=function(r,s,a){if(!Vu(s))throw Error(t(200));return bu(null,r,s,!0,a)},Jt.hydrateRoot=function(r,s,a){if(!Sd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",v=Cg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Rg(s,null,r,1,a??null,f,!1,g,v),r[Rr]=s.current,Ia(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Lu(s)},Jt.render=function(r,s,a){if(!Vu(s))throw Error(t(200));return bu(null,r,s,!1,a)},Jt.unmountComponentAtNode=function(r){if(!Vu(r))throw Error(t(40));return r._reactRootContainer?(ls(function(){bu(null,null,r,!1,function(){r._reactRootContainer=null,r[Rr]=null})}),!0):!1},Jt.unstable_batchedUpdates=md,Jt.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Vu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return bu(r,s,a,!1,h)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var bg;function bT(){if(bg)return Cd.exports;bg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Cd.exports=VT(),Cd.exports}var Mg;function MT(){if(Mg)return Fu;Mg=1;var n=bT();return Fu.createRoot=n.createRoot,Fu.hydrateRoot=n.hydrateRoot,Fu}var FT=MT(),za={},Fg;function UT(){if(Fg)return za;Fg=1,Object.defineProperty(za,"__esModule",{value:!0}),za.parse=c,za.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function c(I,x){const M=new l,H=I.length;if(H<2)return M;const V=(x==null?void 0:x.decode)||E;let W=0;do{const te=I.indexOf("=",W);if(te===-1)break;const Y=I.indexOf(";",W),ie=Y===-1?H:Y;if(te>ie){W=I.lastIndexOf(";",te-1)+1;continue}const Ee=d(I,W,te),ge=p(I,te,Ee),N=I.slice(Ee,ge);if(M[N]===void 0){let S=d(I,te+1,ie),A=p(I,ie,S);const P=V(I.slice(S,A));M[N]=P}W=ie+1}while(W<H);return M}function d(I,x,M){do{const H=I.charCodeAt(x);if(H!==32&&H!==9)return x}while(++x<M);return M}function p(I,x,M){for(;x>M;){const H=I.charCodeAt(--x);if(H!==32&&H!==9)return x+1}return M}function y(I,x,M){const H=(M==null?void 0:M.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const V=H(x);if(!e.test(V))throw new TypeError(`argument val is invalid: ${x}`);let W=I+"="+V;if(!M)return W;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);W+="; Max-Age="+M.maxAge}if(M.domain){if(!t.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);W+="; Domain="+M.domain}if(M.path){if(!i.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);W+="; Path="+M.path}if(M.expires){if(!T(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);W+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(W+="; HttpOnly"),M.secure&&(W+="; Secure"),M.partitioned&&(W+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return W}function E(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return za}UT();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ug="popstate";function jT(n={}){function e(i,o){let{pathname:l,search:c,hash:d}=i.location;return Kd("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:tl(o)}return zT(e,t,null,n)}function Je(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function qn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BT(){return Math.random().toString(36).substring(2,10)}function jg(n,e){return{usr:n.state,key:n.key,idx:e}}function Kd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Mo(e):e,state:t,key:e&&e.key||i||BT()}}function tl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Mo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function zT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d="POP",p=null,y=E();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function E(){return(c.state||{idx:null}).idx}function T(){d="POP";let V=E(),W=V==null?null:V-y;y=V,p&&p({action:d,location:H.location,delta:W})}function I(V,W){d="PUSH";let te=Kd(H.location,V,W);y=E()+1;let Y=jg(te,y),ie=H.createHref(te);try{c.pushState(Y,"",ie)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;o.location.assign(ie)}l&&p&&p({action:d,location:H.location,delta:1})}function x(V,W){d="REPLACE";let te=Kd(H.location,V,W);y=E();let Y=jg(te,y),ie=H.createHref(te);c.replaceState(Y,"",ie),l&&p&&p({action:d,location:H.location,delta:0})}function M(V){let W=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof V=="string"?V:tl(V);return te=te.replace(/ $/,"%20"),Je(W,`No window.location.(origin|href) available to create URL for href: ${te}`),new URL(te,W)}let H={get action(){return d},get location(){return n(o,c)},listen(V){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ug,T),p=V,()=>{o.removeEventListener(Ug,T),p=null}},createHref(V){return e(o,V)},createURL:M,encodeLocation(V){let W=M(V);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:I,replace:x,go(V){return c.go(V)}};return H}function T_(n,e,t="/"){return $T(n,e,t,!1)}function $T(n,e,t,i){let o=typeof e=="string"?Mo(e):e,l=ki(o.pathname||"/",t);if(l==null)return null;let c=I_(n);qT(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=tI(l);d=ZT(c[p],y,i)}return d}function I_(n,e=[],t=[],i=""){let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Fr([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(Je(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),I_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:XT(y,l.index),routesMeta:E})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of S_(l.path))o(l,c,p)}),e}function S_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=S_(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function qT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:JT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var HT=/^:[\w-]+$/,WT=3,KT=2,GT=1,QT=10,YT=-2,Bg=n=>n==="*";function XT(n,e){let t=n.split("/"),i=t.length;return t.some(Bg)&&(i+=YT),e&&(i+=KT),t.filter(o=>!Bg(o)).reduce((o,l)=>o+(HT.test(l)?WT:l===""?GT:QT),i)}function JT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function ZT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=oc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=oc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Fr([l,T.pathname]),pathnameBase:sI(Fr([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Fr([l,T.pathnameBase]))}return c}function oc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=eI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},I)=>{if(E==="*"){let M=d[I]||"";c=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const x=d[I];return T&&!x?y[E]=void 0:y[E]=(x||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function eI(n,e=!1,t=!0){qn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function tI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function ki(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function nI(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Mo(n):n;return{pathname:t?t.startsWith("/")?t:rI(t,e):e,search:oI(i),hash:aI(o)}}function rI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Nd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function wf(n){let e=iI(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Tf(n,e,t,i=!1){let o;typeof n=="string"?o=Mo(n):(o={...n},Je(!o.pathname||!o.pathname.includes("?"),Nd("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),Nd("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),Nd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}d=T>=0?e[T]:"/"}let p=nI(o,d),y=c&&c!=="/"&&c.endsWith("/"),E=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Fr=n=>n.join("/").replace(/\/\/+/g,"/"),sI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),oI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,aI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var R_=["POST","PUT","PATCH","DELETE"];new Set(R_);var uI=["GET",...R_];new Set(uI);var Fo=B.createContext(null);Fo.displayName="DataRouter";var Pc=B.createContext(null);Pc.displayName="DataRouterState";var A_=B.createContext({isTransitioning:!1});A_.displayName="ViewTransition";var cI=B.createContext(new Map);cI.displayName="Fetchers";var hI=B.createContext(null);hI.displayName="Await";var Gn=B.createContext(null);Gn.displayName="Navigation";var dl=B.createContext(null);dl.displayName="Location";var Sn=B.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var If=B.createContext(null);If.displayName="RouteError";function dI(n,{relative:e}={}){Je(Uo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=B.useContext(Gn),{hash:o,pathname:l,search:c}=fl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Fr([t,l])),i.createHref({pathname:d,search:c,hash:o})}function Uo(){return B.useContext(dl)!=null}function Li(){return Je(Uo(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(dl).location}var C_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k_(n){B.useContext(Gn).static||B.useLayoutEffect(n)}function jo(){let{isDataRoute:n}=B.useContext(Sn);return n?kI():fI()}function fI(){Je(Uo(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(Fo),{basename:e,navigator:t}=B.useContext(Gn),{matches:i}=B.useContext(Sn),{pathname:o}=Li(),l=JSON.stringify(wf(i)),c=B.useRef(!1);return k_(()=>{c.current=!0}),B.useCallback((p,y={})=>{if(qn(c.current,C_),!c.current)return;if(typeof p=="number"){t.go(p);return}let E=Tf(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Fr([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}var pI=B.createContext(null);function mI(n){let e=B.useContext(Sn).outlet;return e&&B.createElement(pI.Provider,{value:n},e)}function gI(){let{matches:n}=B.useContext(Sn),e=n[n.length-1];return e?e.params:{}}function fl(n,{relative:e}={}){let{matches:t}=B.useContext(Sn),{pathname:i}=Li(),o=JSON.stringify(wf(t));return B.useMemo(()=>Tf(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function yI(n,e){return P_(n,e)}function P_(n,e,t,i){var te;Je(Uo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=B.useContext(Gn),{matches:c}=B.useContext(Sn),d=c[c.length-1],p=d?d.params:{},y=d?d.pathname:"/",E=d?d.pathnameBase:"/",T=d&&d.route;{let Y=T&&T.path||"";N_(y,!T||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let I=Li(),x;if(e){let Y=typeof e=="string"?Mo(e):e;Je(E==="/"||((te=Y.pathname)==null?void 0:te.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),x=Y}else x=I;let M=x.pathname||"/",H=M;if(E!=="/"){let Y=E.replace(/^\//,"").split("/");H="/"+M.replace(/^\//,"").split("/").slice(Y.length).join("/")}let V=!l&&t&&t.matches&&t.matches.length>0?t.matches:T_(n,{pathname:H});qn(T||V!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),qn(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let W=TI(V&&V.map(Y=>Object.assign({},Y,{params:Object.assign({},p,Y.params),pathname:Fr([E,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?E:Fr([E,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),c,t,i);return e&&W?B.createElement(dl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},W):W}function _I(){let n=CI(),e=lI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:l},"ErrorBoundary")," or"," ",B.createElement("code",{style:l},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),t?B.createElement("pre",{style:o},t):null,c)}var vI=B.createElement(_I,null),EI=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?B.createElement(Sn.Provider,{value:this.props.routeContext},B.createElement(If.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wI({routeContext:n,match:e,children:t}){let i=B.useContext(Fo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(Sn.Provider,{value:n},t)}function TI(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:E,errors:T}=t,I=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,I=!1,x=null,M=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,x=y.route.errorElement||vI,c&&(d<0&&E===0?(N_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,M=null):d===E&&(I=!0,M=y.route.hydrateFallbackElement||null)));let H=e.concat(o.slice(0,E+1)),V=()=>{let W;return T?W=x:I?W=M:y.route.Component?W=B.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=p,B.createElement(wI,{match:y,routeContext:{outlet:p,matches:H,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?B.createElement(EI,{location:t.location,revalidation:t.revalidation,component:x,error:T,children:V(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):V()},null)}function Sf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function II(n){let e=B.useContext(Fo);return Je(e,Sf(n)),e}function SI(n){let e=B.useContext(Pc);return Je(e,Sf(n)),e}function RI(n){let e=B.useContext(Sn);return Je(e,Sf(n)),e}function Rf(n){let e=RI(n),t=e.matches[e.matches.length-1];return Je(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function AI(){return Rf("useRouteId")}function CI(){var i;let n=B.useContext(If),e=SI("useRouteError"),t=Rf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function kI(){let{router:n}=II("useNavigate"),e=Rf("useNavigate"),t=B.useRef(!1);return k_(()=>{t.current=!0}),B.useCallback(async(o,l={})=>{qn(t.current,C_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var zg={};function N_(n,e,t){!e&&!zg[n]&&(zg[n]=!0,qn(!1,t))}B.memo(PI);function PI({routes:n,future:e,state:t}){return P_(n,void 0,t,e)}function NI({to:n,replace:e,state:t,relative:i}){Je(Uo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=B.useContext(Gn);qn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=B.useContext(Sn),{pathname:c}=Li(),d=jo(),p=Tf(n,wf(l),c,i==="path"),y=JSON.stringify(p);return B.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function xI(n){return mI(n.context)}function Bn(n){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Je(!Uo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=B.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=Mo(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:I="default"}=t,x=B.useMemo(()=>{let M=ki(p,c);return M==null?null:{location:{pathname:M,search:y,hash:E,state:T,key:I},navigationType:i}},[c,p,y,E,T,I,i]);return qn(x!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:B.createElement(Gn.Provider,{value:d},B.createElement(dl.Provider,{children:e,value:x}))}function OI({children:n,location:e}){return yI(Gd(n),e)}function Gd(n,e=[]){let t=[];return B.Children.forEach(n,(i,o)=>{if(!B.isValidElement(i))return;let l=[...e,o];if(i.type===B.Fragment){t.push.apply(t,Gd(i.props.children,l));return}Je(i.type===Bn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Gd(i.props.children,l)),t.push(c)}),t}var Gu="get",Qu="application/x-www-form-urlencoded";function Nc(n){return n!=null&&typeof n.tagName=="string"}function LI(n){return Nc(n)&&n.tagName.toLowerCase()==="button"}function VI(n){return Nc(n)&&n.tagName.toLowerCase()==="form"}function bI(n){return Nc(n)&&n.tagName.toLowerCase()==="input"}function MI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function FI(n,e){return n.button===0&&(!e||e==="_self")&&!MI(n)}var Uu=null;function UI(){if(Uu===null)try{new FormData(document.createElement("form"),0),Uu=!1}catch{Uu=!0}return Uu}var jI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xd(n){return n!=null&&!jI.has(n)?(qn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qu}"`),null):n}function BI(n,e){let t,i,o,l,c;if(VI(n)){let d=n.getAttribute("action");i=d?ki(d,e):null,t=n.getAttribute("method")||Gu,o=xd(n.getAttribute("enctype"))||Qu,l=new FormData(n)}else if(LI(n)||bI(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?ki(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Gu,o=xd(n.getAttribute("formenctype"))||xd(d.getAttribute("enctype"))||Qu,l=new FormData(d,n),!UI()){let{name:y,type:E,value:T}=n;if(E==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(Nc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Gu,i=null,o=Qu,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:c}}function Af(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function zI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $I(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function qI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await zI(l,t);return c.links?c.links():[]}return[]}));return GI(i.flat(1).filter($I).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $g(n,e,t,i,o,l){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function HI(n,e){return WI(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function WI(n){return[...new Set(n)]}function KI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function GI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(KI(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function QI(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function YI(){let n=B.useContext(Fo);return Af(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function XI(){let n=B.useContext(Pc);return Af(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Cf=B.createContext(void 0);Cf.displayName="FrameworkContext";function x_(){let n=B.useContext(Cf);return Af(n,"You must render this element inside a <HydratedRouter> element"),n}function JI(n,e){let t=B.useContext(Cf),[i,o]=B.useState(!1),[l,c]=B.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,I=B.useRef(null);B.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let H=W=>{W.forEach(te=>{c(te.isIntersecting)})},V=new IntersectionObserver(H,{threshold:.5});return I.current&&V.observe(I.current),()=>{V.disconnect()}}},[n]),B.useEffect(()=>{if(i){let H=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(H)}}},[i]);let x=()=>{o(!0)},M=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:$a(d,x),onBlur:$a(p,M),onMouseEnter:$a(y,x),onMouseLeave:$a(E,M),onTouchStart:$a(T,x)}]:[!1,I,{}]}function $a(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function ZI({page:n,...e}){let{router:t}=YI(),i=B.useMemo(()=>T_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?B.createElement(tS,{page:n,matches:i,...e}):null}function eS(n){let{manifest:e,routeModules:t}=x_(),[i,o]=B.useState([]);return B.useEffect(()=>{let l=!1;return qI(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),i}function tS({page:n,matches:e,...t}){let i=Li(),{manifest:o,routeModules:l}=x_(),{loaderData:c,matches:d}=XI(),p=B.useMemo(()=>$g(n,e,d,o,i,"data"),[n,e,d,o,i]),y=B.useMemo(()=>$g(n,e,d,o,i,"assets"),[n,e,d,o,i]),E=B.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,M=!1;if(e.forEach(V=>{var te;let W=o.routes[V.route.id];!W||!W.hasLoader||(!p.some(Y=>Y.route.id===V.route.id)&&V.route.id in c&&((te=l[V.route.id])!=null&&te.shouldRevalidate)||W.hasClientLoader?M=!0:x.add(V.route.id))}),x.size===0)return[];let H=QI(n);return M&&x.size>0&&H.searchParams.set("_routes",e.filter(V=>x.has(V.route.id)).map(V=>V.route.id).join(",")),[H.pathname+H.search]},[c,i,o,p,e,n,l]),T=B.useMemo(()=>HI(y,o),[y,o]),I=eS(y);return B.createElement(B.Fragment,null,E.map(x=>B.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),T.map(x=>B.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),I.map(({key:x,link:M})=>B.createElement("link",{key:x,...M})))}function nS(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var D_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{D_&&(window.__reactRouterVersion="7.1.5")}catch{}function rS({basename:n,children:e,window:t}){let i=B.useRef();i.current==null&&(i.current=jT({window:t,v5Compat:!0}));let o=i.current,[l,c]=B.useState({action:o.action,location:o.location}),d=B.useCallback(p=>{B.startTransition(()=>c(p))},[c]);return B.useLayoutEffect(()=>o.listen(d),[o,d]),B.createElement(DI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var O_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lr=B.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:E,viewTransition:T,...I},x){let{basename:M}=B.useContext(Gn),H=typeof y=="string"&&O_.test(y),V,W=!1;if(typeof y=="string"&&H&&(V=y,D_))try{let A=new URL(window.location.href),P=y.startsWith("//")?new URL(A.protocol+y):new URL(y),L=ki(P.pathname,M);P.origin===A.origin&&L!=null?y=L+P.search+P.hash:W=!0}catch{qn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=dI(y,{relative:o}),[Y,ie,Ee]=JI(i,I),ge=aS(y,{replace:c,state:d,target:p,preventScrollReset:E,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||ge(A)}let S=B.createElement("a",{...I,...Ee,href:V||te,onClick:W||l?e:N,ref:nS(x,ie),target:p,"data-discover":!H&&t==="render"?"true":void 0});return Y&&!H?B.createElement(B.Fragment,null,S,B.createElement(ZI,{page:te})):S});Lr.displayName="Link";var iS=B.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...y},E){let T=fl(c,{relative:y.relative}),I=Li(),x=B.useContext(Pc),{navigator:M,basename:H}=B.useContext(Gn),V=x!=null&&dS(T)&&d===!0,W=M.encodeLocation?M.encodeLocation(T).pathname:T.pathname,te=I.pathname,Y=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(te=te.toLowerCase(),Y=Y?Y.toLowerCase():null,W=W.toLowerCase()),Y&&H&&(Y=ki(Y,H)||Y);const ie=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Ee=te===W||!o&&te.startsWith(W)&&te.charAt(ie)==="/",ge=Y!=null&&(Y===W||!o&&Y.startsWith(W)&&Y.charAt(W.length)==="/"),N={isActive:Ee,isPending:ge,isTransitioning:V},S=Ee?e:void 0,A;typeof i=="function"?A=i(N):A=[i,Ee?"active":null,ge?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(N):l;return B.createElement(Lr,{...y,"aria-current":S,className:A,ref:E,style:P,to:c,viewTransition:d},typeof p=="function"?p(N):p)});iS.displayName="NavLink";var sS=B.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:c=Gu,action:d,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...I},x)=>{let M=cS(),H=hS(d,{relative:y}),V=c.toLowerCase()==="get"?"get":"post",W=typeof d=="string"&&O_.test(d),te=Y=>{if(p&&p(Y),Y.defaultPrevented)return;Y.preventDefault();let ie=Y.nativeEvent.submitter,Ee=(ie==null?void 0:ie.getAttribute("formmethod"))||c;M(ie||Y.currentTarget,{fetcherKey:e,method:Ee,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return B.createElement("form",{ref:x,method:V,action:H,onSubmit:i?p:te,...I,"data-discover":!W&&n==="render"?"true":void 0})});sS.displayName="Form";function oS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function L_(n){let e=B.useContext(Fo);return Je(e,oS(n)),e}function aS(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:c}={}){let d=jo(),p=Li(),y=fl(n,{relative:l});return B.useCallback(E=>{if(FI(E,e)){E.preventDefault();let T=t!==void 0?t:tl(p)===tl(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[p,d,y,t,i,e,n,o,l,c])}var lS=0,uS=()=>`__${String(++lS)}__`;function cS(){let{router:n}=L_("useSubmit"),{basename:e}=B.useContext(Gn),t=AI();return B.useCallback(async(i,o={})=>{let{action:l,method:c,encType:d,formData:p,body:y}=BI(i,e);if(o.navigate===!1){let E=o.fetcherKey||uS();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function hS(n,{relative:e}={}){let{basename:t}=B.useContext(Gn),i=B.useContext(Sn);Je(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...fl(n||".",{relative:e})},c=Li();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(E=>E==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let E=d.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Fr([t,l.pathname])),tl(l)}function dS(n,e={}){let t=B.useContext(A_);Je(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=L_("useViewTransitionState"),o=fl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=ki(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=ki(t.nextLocation.pathname,i)||t.nextLocation.pathname;return oc(o.pathname,c)!=null||oc(o.pathname,l)!=null}new TextEncoder;var qg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},fS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},b_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,x=y&63;p||(x=64,c||(I=64)),i.push(t[E],t[T],t[I],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(V_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new pS;const I=l<<2|d>>4;if(i.push(I),y!==64){const x=d<<4&240|y>>2;if(i.push(x),T!==64){const M=y<<6&192|T;i.push(M)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mS=function(n){const e=V_(n);return b_.encodeByteArray(e,!0)},ac=function(n){return mS(n).replace(/\./g,"")},M_=function(n){try{return b_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=()=>gS().__FIREBASE_DEFAULTS__,_S=()=>{if(typeof process>"u"||typeof qg>"u")return;const n=qg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&M_(n[1]);return e&&JSON.parse(e)},xc=()=>{try{return yS()||_S()||vS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},F_=n=>{var e,t;return(t=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},U_=n=>{const e=F_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},j_=()=>{var n;return(n=xc())===null||n===void 0?void 0:n.config},B_=n=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ac(JSON.stringify(t)),ac(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function TS(){var n;const e=(n=xc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function SS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RS(){const n=jt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function AS(){return!TS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function q_(){try{return typeof indexedDB=="object"}catch{return!1}}function H_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function CS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="FirebaseError";class Rn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=kS,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Es.prototype.create)}}class Es{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?PS(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Rn(o,d,i)}}function PS(n,e){return n.replace(NS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const NS=/\{\$([^}]+)}/g;function xS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Hg(l)&&Hg(c)){if(!nl(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Hg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function qa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ha(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function DS(n,e){const t=new OS(n,e);return t.subscribe.bind(t)}class OS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");LS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Dd),o.error===void 0&&(o.error=Dd),o.complete===void 0&&(o.complete=Dd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Dd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=1e3,bS=2,MS=4*60*60*1e3,FS=.5;function Wg(n,e=VS,t=bS){const i=e*Math.pow(t,n),o=Math.round(FS*i*(Math.random()-.5)*2);return Math.min(MS,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n){return n&&n._delegate?n._delegate:n}class In{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ES;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BS(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jS(n){return n===ds?void 0:n}function BS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new US(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const $S={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},qS=ke.INFO,HS={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},WS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=HS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=qS,this._logHandler=WS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$S[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const KS=(n,e)=>e.some(t=>n instanceof t);let Kg,Gg;function GS(){return Kg||(Kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QS(){return Gg||(Gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W_=new WeakMap,Qd=new WeakMap,K_=new WeakMap,Od=new WeakMap,kf=new WeakMap;function YS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ii(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&W_.set(t,n)}).catch(()=>{}),kf.set(e,n),e}function XS(n){if(Qd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Qd.set(n,e)}let Yd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||K_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ii(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function JS(n){Yd=n(Yd)}function ZS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ld(this),e,...t);return K_.set(i,e.sort?e.sort():[e]),Ii(i)}:QS().includes(n)?function(...e){return n.apply(Ld(this),e),Ii(W_.get(this))}:function(...e){return Ii(n.apply(Ld(this),e))}}function eR(n){return typeof n=="function"?ZS(n):(n instanceof IDBTransaction&&XS(n),KS(n,GS())?new Proxy(n,Yd):n)}function Ii(n){if(n instanceof IDBRequest)return YS(n);if(Od.has(n))return Od.get(n);const e=eR(n);return e!==n&&(Od.set(n,e),kf.set(e,n)),e}const Ld=n=>kf.get(n);function G_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Ii(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ii(c.result),p.oldVersion,p.newVersion,Ii(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const tR=["get","getKey","getAll","getAllKeys","count"],nR=["put","add","delete","clear"],Vd=new Map;function Qg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vd.get(e))return Vd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=nR.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||tR.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Vd.set(e,l),l}JS(n=>({...n,get:(e,t,i)=>Qg(e,t)||n.get(e,t,i),has:(e,t)=>!!Qg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iR(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function iR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xd="@firebase/app",Yg="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Dc("@firebase/app"),sR="@firebase/app-compat",oR="@firebase/analytics-compat",aR="@firebase/analytics",lR="@firebase/app-check-compat",uR="@firebase/app-check",cR="@firebase/auth",hR="@firebase/auth-compat",dR="@firebase/database",fR="@firebase/data-connect",pR="@firebase/database-compat",mR="@firebase/functions",gR="@firebase/functions-compat",yR="@firebase/installations",_R="@firebase/installations-compat",vR="@firebase/messaging",ER="@firebase/messaging-compat",wR="@firebase/performance",TR="@firebase/performance-compat",IR="@firebase/remote-config",SR="@firebase/remote-config-compat",RR="@firebase/storage",AR="@firebase/storage-compat",CR="@firebase/firestore",kR="@firebase/vertexai",PR="@firebase/firestore-compat",NR="firebase",xR="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="[DEFAULT]",DR={[Xd]:"fire-core",[sR]:"fire-core-compat",[aR]:"fire-analytics",[oR]:"fire-analytics-compat",[uR]:"fire-app-check",[lR]:"fire-app-check-compat",[cR]:"fire-auth",[hR]:"fire-auth-compat",[dR]:"fire-rtdb",[fR]:"fire-data-connect",[pR]:"fire-rtdb-compat",[mR]:"fire-fn",[gR]:"fire-fn-compat",[yR]:"fire-iid",[_R]:"fire-iid-compat",[vR]:"fire-fcm",[ER]:"fire-fcm-compat",[wR]:"fire-perf",[TR]:"fire-perf-compat",[IR]:"fire-rc",[SR]:"fire-rc-compat",[RR]:"fire-gcs",[AR]:"fire-gcs-compat",[CR]:"fire-fst",[PR]:"fire-fst-compat",[kR]:"fire-vertex","fire-js":"fire-js",[NR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map,OR=new Map,Zd=new Map;function Xg(n,e){try{n.container.addComponent(e)}catch(t){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hn(n){const e=n.name;if(Zd.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;Zd.set(e,n);for(const t of lc.values())Xg(t,n);for(const t of OR.values())Xg(t,n);return!0}function Vi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ar(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new Es("app","Firebase",LR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=xR;function Q_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Jd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Si.create("bad-app-name",{appName:String(o)});if(t||(t=j_()),!t)throw Si.create("no-options");const l=lc.get(o);if(l){if(nl(t,l.options)&&nl(i,l.config))return l;throw Si.create("duplicate-app",{appName:o})}const c=new zS(o);for(const p of Zd.values())c.addComponent(p);const d=new VR(t,i,c);return lc.set(o,d),d}function Oc(n=Jd){const e=lc.get(n);if(!e&&n===Jd&&j_())return Q_();if(!e)throw Si.create("no-app",{appName:n});return e}function en(n,e,t){var i;let o=(i=DR[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(d.join(" "));return}Hn(new In(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="firebase-heartbeat-database",MR=1,rl="firebase-heartbeat-store";let bd=null;function Y_(){return bd||(bd=G_(bR,MR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Si.create("idb-open",{originalErrorMessage:n.message})})),bd}async function FR(n){try{const t=(await Y_()).transaction(rl),i=await t.objectStore(rl).get(X_(n));return await t.done,i}catch(e){if(e instanceof Rn)Br.warn(e.message);else{const t=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Br.warn(t.message)}}}async function Jg(n,e){try{const i=(await Y_()).transaction(rl,"readwrite");await i.objectStore(rl).put(e,X_(n)),await i.done}catch(t){if(t instanceof Rn)Br.warn(t.message);else{const i=Si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Br.warn(i.message)}}}function X_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=1024,jR=30*24*60*60*1e3;class BR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $R(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Zg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=jR}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Br.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zg(),{heartbeatsToSend:i,unsentEntries:o}=zR(this._heartbeatsCache.heartbeats),l=ac(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Br.warn(t),""}}}function Zg(){return new Date().toISOString().substring(0,10)}function zR(n,e=UR){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),ey(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ey(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class $R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q_()?H_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await FR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ey(n){return ac(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(n){Hn(new In("platform-logger",e=>new rR(e),"PRIVATE")),Hn(new In("heartbeat",e=>new BR(e),"PRIVATE")),en(Xd,Yg,n),en(Xd,Yg,"esm2017"),en("fire-js","")}qR("");function Pf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function J_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HR=J_,Z_=new Es("auth","Firebase",J_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Dc("@firebase/auth");function WR(n,...e){uc.logLevel<=ke.WARN&&uc.warn(`Auth (${ws}): ${n}`,...e)}function Yu(n,...e){uc.logLevel<=ke.ERROR&&uc.error(`Auth (${ws}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,...e){throw Nf(n,...e)}function lr(n,...e){return Nf(n,...e)}function ev(n,e,t){const i=Object.assign(Object.assign({},HR()),{[e]:t});return new Es("auth","Firebase",i).create(e,{appName:n.name})}function Ur(n){return ev(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Z_.create(n,...e)}function ve(n,e,...t){if(!n)throw Nf(e,...t)}function Vr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yu(e),new Error(e)}function zr(n,e){n||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function KR(){return ty()==="http:"||ty()==="https:"}function ty(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KR()||$_()||"connection"in navigator)?navigator.onLine:!0}function QR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=wS()||SS()}get(){return GR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=new ml(3e4,6e4);function bi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Hr(n,e,t,i,o={}){return nv(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=pl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return IS()||(y.referrerPolicy="no-referrer"),tv.fetch()(rv(n,n.config.apiHost,t,d),y)})}async function nv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},YR),e);try{const o=new ZR(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw ju(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ju(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw ju(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw ju(n,"user-disabled",c);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw ev(n,E,y);Wn(n,E)}}catch(o){if(o instanceof Rn)throw o;Wn(n,"network-request-failed",{message:String(o)})}}async function gl(n,e,t,i,o={}){const l=await Hr(n,e,t,i,o);return"mfaPendingCredential"in l&&Wn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function rv(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?xf(n.config,o):`${n.config.apiScheme}://${o}`}function JR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(lr(this.auth,"network-request-failed")),XR.get())})}}function ju(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=lr(n,e,i);return o.customData._tokenResponse=t,o}function ny(n){return n!==void 0&&n.enterprise!==void 0}class e0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return JR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function t0(n,e){return Hr(n,"GET","/v2/recaptchaConfig",bi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(n,e){return Hr(n,"POST","/v1/accounts:delete",e)}async function iv(n,e){return Hr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r0(n,e=!1){const t=yt(n),i=await t.getIdToken(e),o=Df(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Qa(Md(o.auth_time)),issuedAtTime:Qa(Md(o.iat)),expirationTime:Qa(Md(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Md(n){return Number(n)*1e3}function Df(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Yu("JWT malformed, contained fewer than 3 sections"),null;try{const o=M_(t);return o?JSON.parse(o):(Yu("Failed to decode base64 JWT payload"),null)}catch(o){return Yu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ry(n){const e=Df(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Rn&&i0(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function i0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Po(n,iv(t,{idToken:i}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?sv(l.providerUserInfo):[],d=a0(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new tf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function o0(n){const e=yt(n);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a0(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function sv(n){return n.map(e=>{var{providerId:t}=e,i=Pf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(n,e){const t=await nv(n,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=rv(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",tv.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function u0(n,e){return Hr(n,"POST","/v2/accounts:revokeToken",bi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ry(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=ry(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await l0(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Ro;return i&&(ve(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class br{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new tf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Po(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return r0(this,e)}reload(){return o0(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ar(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await Po(this,n0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,M=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,te=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Y,emailVerified:ie,isAnonymous:Ee,providerData:ge,stsTokenManager:N}=t;ve(Y&&N,e,"internal-error");const S=Ro.fromJSON(this.name,N);ve(typeof Y=="string",e,"internal-error"),yi(T,e.name),yi(I,e.name),ve(typeof ie=="boolean",e,"internal-error"),ve(typeof Ee=="boolean",e,"internal-error"),yi(x,e.name),yi(M,e.name),yi(H,e.name),yi(V,e.name),yi(W,e.name),yi(te,e.name);const A=new br({uid:Y,auth:e,email:I,emailVerified:ie,displayName:T,isAnonymous:Ee,photoURL:M,phoneNumber:x,tenantId:H,stsTokenManager:S,createdAt:W,lastLoginAt:te});return ge&&Array.isArray(ge)&&(A.providerData=ge.map(P=>Object.assign({},P))),V&&(A._redirectEventId=V),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Ro;o.updateFromServerResponse(t);const l=new br({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await cc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?sv(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new Ro;d.updateFromIdToken(i);const p=new br({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new tf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Map;function Mr(n){zr(n instanceof Function,"Expected a class definition");let e=iy.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,iy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ov.type="NONE";const sy=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n,e,t){return`firebase:${n}:${e}:${t}`}class Ao{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ao(Mr(sy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Mr(sy);const c=Xu(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const E=await y._get(c);if(E){const T=br._fromJSON(e,E);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ao(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Ao(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(av(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dv(e))return"Blackberry";if(fv(e))return"Webos";if(lv(e))return"Safari";if((e.includes("chrome/")||uv(e))&&!e.includes("edge/"))return"Chrome";if(hv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function av(n=jt()){return/firefox\//i.test(n)}function lv(n=jt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uv(n=jt()){return/crios\//i.test(n)}function cv(n=jt()){return/iemobile/i.test(n)}function hv(n=jt()){return/android/i.test(n)}function dv(n=jt()){return/blackberry/i.test(n)}function fv(n=jt()){return/webos/i.test(n)}function Of(n=jt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function c0(n=jt()){var e;return Of(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h0(){return RS()&&document.documentMode===10}function pv(n=jt()){return Of(n)||hv(n)||fv(n)||dv(n)||/windows phone/i.test(n)||cv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e=[]){let t;switch(n){case"Browser":t=oy(jt());break;case"Worker":t=`${oy(jt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ws}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(n,e={}){return Hr(n,"GET","/v2/passwordPolicy",bi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=6;class m0{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:p0,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ay(this),this.idTokenSubscription=new ay(this),this.beforeStateQueue=new d0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await iv(this,{idToken:e}),i=await br._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ar(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ar(this.app))return Promise.reject(Ur(this));const t=e?yt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ar(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ar(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f0(this),t=new m0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Es("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await u0(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&WR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ts(n){return yt(n)}class ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=DS(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y0(n){Lc=n}function gv(n){return Lc.loadJS(n)}function _0(){return Lc.recaptchaEnterpriseScript}function v0(){return Lc.gapiScript}function E0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class w0{constructor(){this.enterprise=new T0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class T0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const I0="recaptcha-enterprise",yv="NO_RECAPTCHA";class S0{constructor(e){this.type=I0,this.auth=Ts(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{t0(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new e0(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;ny(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(yv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new w0().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&ny(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=_0();p.length!==0&&(p+=d),gv(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function ly(n,e,t,i=!1,o=!1){const l=new S0(n);let c;if(o)c=yv;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function nf(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ly(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await ly(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(n,e){const t=Vi(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(nl(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function A0(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function C0(n,e,t){const i=Ts(n);ve(i._canInitEmulator,i,"emulator-config-failed"),ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=_v(e),{host:c,port:d}=k0(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),P0()}function _v(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function k0(n){const e=_v(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:uy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:uy(c)}}}function uy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function P0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function N0(n,e){return Hr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(n,e){return gl(n,"POST","/v1/accounts:signInWithPassword",bi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(n,e){return gl(n,"POST","/v1/accounts:signInWithEmailLink",bi(n,e))}async function O0(n,e){return gl(n,"POST","/v1/accounts:signInWithEmailLink",bi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Lf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nf(e,t,"signInWithPassword",x0);case"emailLink":return D0(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nf(e,i,"signUpPassword",N0);case"emailLink":return O0(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n,e){return gl(n,"POST","/v1/accounts:signInWithIdp",bi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="http://localhost";class ms extends Lf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Pf(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new ms(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Co(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Co(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Co(e,t)}buildRequest(){const e={requestUri:L0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function b0(n){const e=qa(Ha(n)).link,t=e?qa(Ha(e)).deep_link_id:null,i=qa(Ha(n)).deep_link_id;return(i?qa(Ha(i)).link:null)||i||t||e||n}class Vf{constructor(e){var t,i,o,l,c,d;const p=qa(Ha(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=V0((o=p.mode)!==null&&o!==void 0?o:null);ve(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=b0(e);try{return new Vf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.providerId=Bo.PROVIDER_ID}static credential(e,t){return il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Vf.parseLink(t);return ve(i,"argument-error"),il._fromEmailAndCode(e,i.code,i.tenantId)}}Bo.PROVIDER_ID="password";Bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends vv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends yl{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.FACEBOOK_SIGN_IN_METHOD="facebook.com";_i.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ms._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.GOOGLE_SIGN_IN_METHOD="google.com";vi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends yl{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.GITHUB_SIGN_IN_METHOD="github.com";Ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends yl{constructor(){super("twitter.com")}static credential(e,t){return ms._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return wi.credential(t,i)}catch{return null}}}wi.TWITTER_SIGN_IN_METHOD="twitter.com";wi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(n,e){return gl(n,"POST","/v1/accounts:signUp",bi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await br._fromIdTokenResponse(e,i,o),c=cy(i);return new gs({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=cy(i);return new gs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function cy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Rn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new hc(e,t,i,o)}}function Ev(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(n,l,e,i):l})}async function F0(n,e,t=!1){const i=await Po(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(n,e,t=!1){const{auth:i}=n;if(ar(i.app))return Promise.reject(Ur(i));const o="reauthenticate";try{const l=await Po(n,Ev(i,o,e,n),t);ve(l.idToken,i,"internal-error");const c=Df(l.idToken);ve(c,i,"internal-error");const{sub:d}=c;return ve(n.uid===d,i,"user-mismatch"),gs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Wn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(n,e,t=!1){if(ar(n.app))return Promise.reject(Ur(n));const i="signIn",o=await Ev(n,i,e),l=await gs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function j0(n,e){return wv(Ts(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(n){const e=Ts(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function B0(n,e,t){if(ar(n.app))return Promise.reject(Ur(n));const i=Ts(n),c=await nf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",M0).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Tv(n),p}),d=await gs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function z0(n,e,t){return ar(n.app)?Promise.reject(Ur(n)):j0(yt(n),Bo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Tv(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(n,e){return Hr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=yt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Po(i,$0(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function H0(n,e,t,i){return yt(n).onIdTokenChanged(e,t,i)}function W0(n,e,t){return yt(n).beforeAuthStateChanged(e,t)}function Iv(n,e,t,i){return yt(n).onAuthStateChanged(e,t,i)}function K0(n){return yt(n).signOut()}const dc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=1e3,Q0=10;class Rv extends Sv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);h0()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Q0):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},G0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rv.type="LOCAL";const Y0=Rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends Sv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Av.type="SESSION";const Cv=Av;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Vc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await X0(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=bf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){return window}function Z0(n){ur().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function eA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nA(){return kv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="firebaseLocalStorageDb",rA=1,fc="firebaseLocalStorage",Nv="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bc(n,e){return n.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function iA(){const n=indexedDB.deleteDatabase(Pv);return new _l(n).toPromise()}function rf(){const n=indexedDB.open(Pv,rA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(fc,{keyPath:Nv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(fc)?e(i):(i.close(),await iA(),e(await rf()))})})}async function hy(n,e,t){const i=bc(n,!0).put({[Nv]:e,value:t});return new _l(i).toPromise()}async function sA(n,e){const t=bc(n,!1).get(e),i=await new _l(t).toPromise();return i===void 0?null:i.value}function dy(n,e){const t=bc(n,!0).delete(e);return new _l(t).toPromise()}const oA=800,aA=3;class xv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>aA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(nA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eA(),!this.activeServiceWorker)return;this.sender=new J0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rf();return await hy(e,dc,"1"),await dy(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>hy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>sA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=bc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xv.type="LOCAL";const lA=xv;new ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(n,e){return e?Mr(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends Lf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cA(n){return wv(n.auth,new Mf(n),n.bypassAuthState)}function hA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),U0(t,new Mf(n),n.bypassAuthState)}async function dA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),F0(t,new Mf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cA;case"linkViaPopup":case"linkViaRedirect":return dA;case"reauthViaPopup":case"reauthViaRedirect":return hA;default:Wn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new ml(2e3,1e4);class So extends Dv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fA.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="pendingRedirect",Ju=new Map;class mA extends Dv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ju.get(this.auth._key());if(!e){try{const i=await gA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ju.set(this.auth._key(),e)}return this.bypassAuthState||Ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gA(n,e){const t=vA(e),i=_A(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function yA(n,e){Ju.set(n._key(),e)}function _A(n){return Mr(n._redirectPersistence)}function vA(n){return Xu(pA,n.config.apiKey,n.name)}async function EA(n,e,t=!1){if(ar(n.app))return Promise.reject(Ur(n));const i=Ts(n),o=uA(i,e),c=await new mA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=10*60*1e3;class TA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ov(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wA&&this.cachedEventUids.clear(),this.cachedEventUids.has(fy(e))}saveEventToCache(e){this.cachedEventUids.add(fy(e)),this.lastProcessedEventTime=Date.now()}}function fy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ov({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ov(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(n,e={}){return Hr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AA=/^https?/;async function CA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await SA(n);for(const t of e)try{if(kA(t))return}catch{}Wn(n,"unauthorized-domain")}function kA(n){const e=ef(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!AA.test(t))return!1;if(RA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new ml(3e4,6e4);function py(){const n=ur().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function NA(n){return new Promise((e,t)=>{var i,o,l;function c(){py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{py(),t(lr(n,"network-request-failed"))},timeout:PA.get()})}if(!((o=(i=ur().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ur().gapi)===null||l===void 0)&&l.load)c();else{const d=E0("iframefcb");return ur()[d]=()=>{gapi.load?c():t(lr(n,"network-request-failed"))},gv(`${v0()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Zu=null,e})}let Zu=null;function xA(n){return Zu=Zu||NA(n),Zu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new ml(5e3,15e3),OA="__/auth/iframe",LA="emulator/auth/iframe",VA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MA(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xf(e,LA):`https://${n.config.authDomain}/${OA}`,i={apiKey:e.apiKey,appName:n.name,v:ws},o=bA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function FA(n){const e=await xA(n),t=ur().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:MA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=lr(n,"network-request-failed"),d=ur().setTimeout(()=>{l(c)},DA.get());function p(){ur().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jA=500,BA=600,zA="_blank",$A="http://localhost";class my{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qA(n,e,t,i=jA,o=BA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},UA),{width:i.toString(),height:o.toString(),top:l,left:c}),y=jt().toLowerCase();t&&(d=uv(y)?zA:t),av(y)&&(e=e||$A,p.scrollbars="yes");const E=Object.entries(p).reduce((I,[x,M])=>`${I}${x}=${M},`,"");if(c0(y)&&d!=="_self")return HA(e||"",d),new my(null);const T=window.open(e||"",d,E);ve(T,n,"popup-blocked");try{T.focus()}catch{}return new my(T)}function HA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="__/auth/handler",KA="emulator/auth/handler",GA=encodeURIComponent("fac");async function gy(n,e,t,i,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ws,eventId:o};if(e instanceof vv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",xS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))c[E]=T}if(e instanceof yl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(c.scopes=E.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await n._getAppCheckToken(),y=p?`#${GA}=${encodeURIComponent(p)}`:"";return`${QA(n)}?${pl(d).slice(1)}${y}`}function QA({config:n}){return n.emulator?xf(n,KA):`https://${n.authDomain}/${WA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="webStorageSupport";class YA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cv,this._completeRedirectFn=EA,this._overrideRedirectResult=yA}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await gy(e,t,i,ef(),o);return qA(e,c,bf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await gy(e,t,i,ef(),o);return Z0(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await FA(e),i=new TA(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fd,{type:Fd},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Fd];c!==void 0&&t(!!c),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pv()||lv()||Of()}}const XA=YA;var yy="@firebase/auth",_y="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eC(n){Hn(new In("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;ve(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mv(n)},y=new g0(i,o,l,p);return A0(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Hn(new In("auth-internal",e=>{const t=Ts(e.getProvider("auth").getImmediate());return(i=>new JA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(yy,_y,ZA(n)),en(yy,_y,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=5*60,nC=B_("authIdTokenMaxAge")||tC;let vy=null;const rC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>nC)return;const o=t==null?void 0:t.token;vy!==o&&(vy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sl(n=Oc()){const e=Vi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=R0(n,{popupRedirectResolver:XA,persistence:[lA,Y0,Cv]}),i=B_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=rC(l.toString());W0(t,c,()=>c(t.currentUser)),H0(t,d=>c(d))}}const o=F_("auth");return o&&C0(t,`http://${o}`),t}function iC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}y0({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",iC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eC("Browser");function sC(){const[n,e]=B.useState(null),[t,i]=B.useState(!0);return B.useEffect(()=>{const o=sl(),l=Iv(o,c=>{console.log("Usuario:",c),c?(e(c.uid),console.log("Usuario activo:",c.displayName)):(e(null),console.log("CIERRA SESIÓN")),i(!1)});return()=>l()},[]),t?q.jsx("p",{children:"Cargando..."}):n?q.jsx(xI,{}):q.jsx(NI,{to:"/login"})}function oC(){return q.jsxs("div",{className:"landing-container",style:{backgroundImage:'url("/path/to/background-image.jpg")'},children:[q.jsxs("header",{className:"landing-header",children:[q.jsx("h1",{className:"landing-title",children:"¡Bienvenido a la PokeApi !"}),q.jsx("p",{className:"landing-subtitle",children:"Regístrate y prueba nuestro juego interactivo de Adivinar Pokémons con pistas y sonidos."})]}),q.jsx("div",{className:"video-container",children:q.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,className:"wallpaper",children:[q.jsx("source",{src:"/videos/wallpaper.mp4",type:"video/mp4"}),"Tu navegador no soporta el elemento de video."]})}),q.jsx("section",{className:"landing-content",children:q.jsxs("div",{className:"landing-feature",children:[q.jsx("h3",{children:"Explora la Pokedex"}),q.jsx("p",{children:"Descubre las características de todos los Pokemons hasta la novena generacion."}),q.jsx("button",{className:"cta-button",onClick:()=>window.location.href="/pokemons",children:"Pokedex"})]})}),q.jsx("footer",{className:"landing-footer"})]})}var aC="firebase",lC="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(aC,lC,"app");const Lv="@firebase/installations",Ff="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=1e4,bv=`w:${Ff}`,Mv="FIS_v2",uC="https://firebaseinstallations.googleapis.com/v1",cC=60*60*1e3,hC="installations",dC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ys=new Es(hC,dC,fC);function Fv(n){return n instanceof Rn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv({projectId:n}){return`${uC}/projects/${n}/installations`}function jv(n){return{token:n.token,requestStatus:2,expiresIn:mC(n.expiresIn),creationTime:Date.now()}}async function Bv(n,e){const i=(await e.json()).error;return ys.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function zv({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function pC(n,{refreshToken:e}){const t=zv(n);return t.append("Authorization",gC(e)),t}async function $v(n){const e=await n();return e.status>=500&&e.status<600?n():e}function mC(n){return Number(n.replace("s","000"))}function gC(n){return`${Mv} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Uv(n),o=zv(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:Mv,appId:n.appId,sdkVersion:bv},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await $v(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:jv(y.authToken)}}else throw await Bv("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=/^[cdef][\w-]{21}$/,sf="";function EC(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=wC(n);return vC.test(t)?t:sf}catch{return sf}}function wC(n){return _C(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Map;function Wv(n,e){const t=Mc(n);Kv(t,e),TC(t,e)}function Kv(n,e){const t=Hv.get(n);if(t)for(const i of t)i(e)}function TC(n,e){const t=IC();t&&t.postMessage({key:n,fid:e}),SC()}let fs=null;function IC(){return!fs&&"BroadcastChannel"in self&&(fs=new BroadcastChannel("[Firebase] FID Change"),fs.onmessage=n=>{Kv(n.data.key,n.data.fid)}),fs}function SC(){Hv.size===0&&fs&&(fs.close(),fs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="firebase-installations-database",AC=1,_s="firebase-installations-store";let Ud=null;function Uf(){return Ud||(Ud=G_(RC,AC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_s)}}})),Ud}async function pc(n,e){const t=Mc(n),o=(await Uf()).transaction(_s,"readwrite"),l=o.objectStore(_s),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&Wv(n,e.fid),e}async function Gv(n){const e=Mc(n),i=(await Uf()).transaction(_s,"readwrite");await i.objectStore(_s).delete(e),await i.done}async function Fc(n,e){const t=Mc(n),o=(await Uf()).transaction(_s,"readwrite"),l=o.objectStore(_s),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&Wv(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(n){let e;const t=await Fc(n.appConfig,i=>{const o=CC(i),l=kC(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===sf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function CC(n){const e=n||{fid:EC(),registrationStatus:0};return Qv(e)}function kC(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ys.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=PC(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:NC(n)}:{installationEntry:e}}async function PC(n,e){try{const t=await yC(n,e);return pc(n.appConfig,t)}catch(t){throw Fv(t)&&t.customData.serverCode===409?await Gv(n.appConfig):await pc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function NC(n){let e=await Ey(n.appConfig);for(;e.registrationStatus===1;)await qv(100),e=await Ey(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await jf(n);return i||t}return e}function Ey(n){return Fc(n,e=>{if(!e)throw ys.create("installation-not-found");return Qv(e)})}function Qv(n){return xC(n)?{fid:n.fid,registrationStatus:0}:n}function xC(n){return n.registrationStatus===1&&n.registrationTime+Vv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC({appConfig:n,heartbeatServiceProvider:e},t){const i=OC(n,t),o=pC(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:bv,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await $v(()=>fetch(i,d));if(p.ok){const y=await p.json();return jv(y)}else throw await Bv("Generate Auth Token",p)}function OC(n,{fid:e}){return`${Uv(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(n,e=!1){let t;const i=await Fc(n.appConfig,l=>{if(!Yv(l))throw ys.create("not-registered");const c=l.authToken;if(!e&&bC(c))return l;if(c.requestStatus===1)return t=LC(n,e),l;{if(!navigator.onLine)throw ys.create("app-offline");const d=FC(l);return t=VC(n,d),d}});return t?await t:i.authToken}async function LC(n,e){let t=await wy(n.appConfig);for(;t.authToken.requestStatus===1;)await qv(100),t=await wy(n.appConfig);const i=t.authToken;return i.requestStatus===0?Bf(n,e):i}function wy(n){return Fc(n,e=>{if(!Yv(e))throw ys.create("not-registered");const t=e.authToken;return UC(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VC(n,e){try{const t=await DC(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await pc(n.appConfig,i),t}catch(t){if(Fv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Gv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pc(n.appConfig,i)}throw t}}function Yv(n){return n!==void 0&&n.registrationStatus===2}function bC(n){return n.requestStatus===2&&!MC(n)}function MC(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+cC}function FC(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function UC(n){return n.requestStatus===1&&n.requestTime+Vv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(n){const e=n,{installationEntry:t,registrationPromise:i}=await jf(e);return i?i.catch(console.error):Bf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(n,e=!1){const t=n;return await zC(t),(await Bf(t,e)).token}async function zC(n){const{registrationPromise:e}=await jf(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(n){if(!n||!n.options)throw jd("App Configuration");if(!n.name)throw jd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw jd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function jd(n){return ys.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="installations",qC="installations-internal",HC=n=>{const e=n.getProvider("app").getImmediate(),t=$C(e),i=Vi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},WC=n=>{const e=n.getProvider("app").getImmediate(),t=Vi(e,Xv).getImmediate();return{getId:()=>jC(t),getToken:o=>BC(t,o)}};function KC(){Hn(new In(Xv,HC,"PUBLIC")),Hn(new In(qC,WC,"PRIVATE"))}KC();en(Lv,Ff);en(Lv,Ff,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="analytics",GC="firebase_id",QC="origin",YC=60*1e3,XC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Dc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new Es("analytics","Analytics",JC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(n){if(!n.startsWith(zf)){const e=cn.create("invalid-gtag-resource",{gtagURL:n});return tn.warn(e.message),""}return n}function Jv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ek(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function tk(n,e){const t=ek("firebase-js-sdk-policy",{createScriptURL:ZC}),i=document.createElement("script"),o=`${zf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function nk(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function rk(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const p=(await Jv(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){tn.error(d)}n("config",o,l)}async function ik(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const d=await Jv(t);for(const p of c){const y=d.find(T=>T.measurementId===p),E=y&&e[y.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){tn.error(l)}}function sk(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[d,p]=c;await ik(n,e,t,d,p)}else if(l==="config"){const[d,p]=c;await rk(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=c;n("consent",d,p)}else if(l==="get"){const[d,p,y]=c;n("get",d,p,y)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){tn.error(d)}}return o}function ok(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=sk(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function ak(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(zf)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=30,uk=1e3;class ck{constructor(e={},t=uk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Zv=new ck;function hk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function dk(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:hk(i)},l=XC.replace("{app-id}",t),c=await fetch(l,o);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function fk(n,e=Zv,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw cn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw cn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new gk;return setTimeout(async()=>{d.abort()},YC),eE({appId:i,apiKey:o,measurementId:l},c,d,e)}async function eE(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=Zv){var l;const{appId:c,measurementId:d}=n;try{await pk(i,e)}catch(p){if(d)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:d};throw p}try{const p=await dk(n);return o.deleteThrottleMetadata(c),p}catch(p){const y=p;if(!mk(y)){if(o.deleteThrottleMetadata(c),d)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:c,measurementId:d};throw p}const E=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Wg(t,o.intervalMillis,lk):Wg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(c,T),tn.debug(`Calling attemptFetch again in ${E} millis`),eE(n,T,i,o)}}function pk(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mk(n){if(!(n instanceof Rn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class gk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yk(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c=Object.assign(Object.assign({},i),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(){if(q_())try{await H_()}catch(n){return tn.warn(cn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return tn.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vk(n,e,t,i,o,l,c){var d;const p=fk(n);p.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>tn.error(x)),e.push(p);const y=_k().then(x=>{if(x)return i.getId()}),[E,T]=await Promise.all([p,y]);ak(l)||tk(l,E.measurementId),o("js",new Date);const I=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return I[QC]="firebase",I.update=!0,T!=null&&(I[GC]=T),o("config",E.measurementId,I),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.app=e}_delete(){return delete Ya[this.app.options.appId],Promise.resolve()}}let Ya={},Ty=[];const Iy={};let Bd="dataLayer",wk="gtag",Sy,tE,Ry=!1;function Tk(){const n=[];if($_()&&n.push("This is a browser extension environment."),CS()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=cn.create("invalid-analytics-context",{errorInfo:e});tn.warn(t.message)}}function Ik(n,e,t){Tk();const i=n.options.appId;if(!i)throw cn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(Ya[i]!=null)throw cn.create("already-exists",{id:i});if(!Ry){nk(Bd);const{wrappedGtag:l,gtagCore:c}=ok(Ya,Ty,Iy,Bd,wk);tE=l,Sy=c,Ry=!0}return Ya[i]=vk(n,Ty,Iy,e,Sy,Bd,t),new Ek(n)}function Sk(n=Oc()){n=yt(n);const e=Vi(n,mc);return e.isInitialized()?e.getImmediate():Rk(n)}function Rk(n,e={}){const t=Vi(n,mc);if(t.isInitialized()){const o=t.getImmediate();if(nl(e,t.getOptions()))return o;throw cn.create("already-initialized")}return t.initialize({options:e})}function Ak(n,e,t,i){n=yt(n),yk(tE,Ya[n.app.options.appId],e,t,i).catch(o=>tn.error(o))}const Ay="@firebase/analytics",Cy="0.10.11";function Ck(){Hn(new In(mc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Ik(i,o,t)},"PUBLIC")),Hn(new In("analytics-internal",n,"PRIVATE")),en(Ay,Cy),en(Ay,Cy,"esm2017");function n(e){try{const t=e.getProvider(mc).getImmediate();return{logEvent:(i,o,l)=>Ak(t,i,o,l)}}catch(t){throw cn.create("interop-component-reg-failed",{reason:t})}}}Ck();var ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,nE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function A(){}A.prototype=S.prototype,N.D=S.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(P,L,O){for(var C=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)C[$e-2]=arguments[$e];return S.prototype[L].apply(P,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,A){A||(A=0);var P=Array(16);if(typeof S=="string")for(var L=0;16>L;++L)P[L]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(L=0;16>L;++L)P[L]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=N.g[0],A=N.g[1],L=N.g[2];var O=N.g[3],C=S+(O^A&(L^O))+P[0]+3614090360&4294967295;S=A+(C<<7&4294967295|C>>>25),C=O+(L^S&(A^L))+P[1]+3905402710&4294967295,O=S+(C<<12&4294967295|C>>>20),C=L+(A^O&(S^A))+P[2]+606105819&4294967295,L=O+(C<<17&4294967295|C>>>15),C=A+(S^L&(O^S))+P[3]+3250441966&4294967295,A=L+(C<<22&4294967295|C>>>10),C=S+(O^A&(L^O))+P[4]+4118548399&4294967295,S=A+(C<<7&4294967295|C>>>25),C=O+(L^S&(A^L))+P[5]+1200080426&4294967295,O=S+(C<<12&4294967295|C>>>20),C=L+(A^O&(S^A))+P[6]+2821735955&4294967295,L=O+(C<<17&4294967295|C>>>15),C=A+(S^L&(O^S))+P[7]+4249261313&4294967295,A=L+(C<<22&4294967295|C>>>10),C=S+(O^A&(L^O))+P[8]+1770035416&4294967295,S=A+(C<<7&4294967295|C>>>25),C=O+(L^S&(A^L))+P[9]+2336552879&4294967295,O=S+(C<<12&4294967295|C>>>20),C=L+(A^O&(S^A))+P[10]+4294925233&4294967295,L=O+(C<<17&4294967295|C>>>15),C=A+(S^L&(O^S))+P[11]+2304563134&4294967295,A=L+(C<<22&4294967295|C>>>10),C=S+(O^A&(L^O))+P[12]+1804603682&4294967295,S=A+(C<<7&4294967295|C>>>25),C=O+(L^S&(A^L))+P[13]+4254626195&4294967295,O=S+(C<<12&4294967295|C>>>20),C=L+(A^O&(S^A))+P[14]+2792965006&4294967295,L=O+(C<<17&4294967295|C>>>15),C=A+(S^L&(O^S))+P[15]+1236535329&4294967295,A=L+(C<<22&4294967295|C>>>10),C=S+(L^O&(A^L))+P[1]+4129170786&4294967295,S=A+(C<<5&4294967295|C>>>27),C=O+(A^L&(S^A))+P[6]+3225465664&4294967295,O=S+(C<<9&4294967295|C>>>23),C=L+(S^A&(O^S))+P[11]+643717713&4294967295,L=O+(C<<14&4294967295|C>>>18),C=A+(O^S&(L^O))+P[0]+3921069994&4294967295,A=L+(C<<20&4294967295|C>>>12),C=S+(L^O&(A^L))+P[5]+3593408605&4294967295,S=A+(C<<5&4294967295|C>>>27),C=O+(A^L&(S^A))+P[10]+38016083&4294967295,O=S+(C<<9&4294967295|C>>>23),C=L+(S^A&(O^S))+P[15]+3634488961&4294967295,L=O+(C<<14&4294967295|C>>>18),C=A+(O^S&(L^O))+P[4]+3889429448&4294967295,A=L+(C<<20&4294967295|C>>>12),C=S+(L^O&(A^L))+P[9]+568446438&4294967295,S=A+(C<<5&4294967295|C>>>27),C=O+(A^L&(S^A))+P[14]+3275163606&4294967295,O=S+(C<<9&4294967295|C>>>23),C=L+(S^A&(O^S))+P[3]+4107603335&4294967295,L=O+(C<<14&4294967295|C>>>18),C=A+(O^S&(L^O))+P[8]+1163531501&4294967295,A=L+(C<<20&4294967295|C>>>12),C=S+(L^O&(A^L))+P[13]+2850285829&4294967295,S=A+(C<<5&4294967295|C>>>27),C=O+(A^L&(S^A))+P[2]+4243563512&4294967295,O=S+(C<<9&4294967295|C>>>23),C=L+(S^A&(O^S))+P[7]+1735328473&4294967295,L=O+(C<<14&4294967295|C>>>18),C=A+(O^S&(L^O))+P[12]+2368359562&4294967295,A=L+(C<<20&4294967295|C>>>12),C=S+(A^L^O)+P[5]+4294588738&4294967295,S=A+(C<<4&4294967295|C>>>28),C=O+(S^A^L)+P[8]+2272392833&4294967295,O=S+(C<<11&4294967295|C>>>21),C=L+(O^S^A)+P[11]+1839030562&4294967295,L=O+(C<<16&4294967295|C>>>16),C=A+(L^O^S)+P[14]+4259657740&4294967295,A=L+(C<<23&4294967295|C>>>9),C=S+(A^L^O)+P[1]+2763975236&4294967295,S=A+(C<<4&4294967295|C>>>28),C=O+(S^A^L)+P[4]+1272893353&4294967295,O=S+(C<<11&4294967295|C>>>21),C=L+(O^S^A)+P[7]+4139469664&4294967295,L=O+(C<<16&4294967295|C>>>16),C=A+(L^O^S)+P[10]+3200236656&4294967295,A=L+(C<<23&4294967295|C>>>9),C=S+(A^L^O)+P[13]+681279174&4294967295,S=A+(C<<4&4294967295|C>>>28),C=O+(S^A^L)+P[0]+3936430074&4294967295,O=S+(C<<11&4294967295|C>>>21),C=L+(O^S^A)+P[3]+3572445317&4294967295,L=O+(C<<16&4294967295|C>>>16),C=A+(L^O^S)+P[6]+76029189&4294967295,A=L+(C<<23&4294967295|C>>>9),C=S+(A^L^O)+P[9]+3654602809&4294967295,S=A+(C<<4&4294967295|C>>>28),C=O+(S^A^L)+P[12]+3873151461&4294967295,O=S+(C<<11&4294967295|C>>>21),C=L+(O^S^A)+P[15]+530742520&4294967295,L=O+(C<<16&4294967295|C>>>16),C=A+(L^O^S)+P[2]+3299628645&4294967295,A=L+(C<<23&4294967295|C>>>9),C=S+(L^(A|~O))+P[0]+4096336452&4294967295,S=A+(C<<6&4294967295|C>>>26),C=O+(A^(S|~L))+P[7]+1126891415&4294967295,O=S+(C<<10&4294967295|C>>>22),C=L+(S^(O|~A))+P[14]+2878612391&4294967295,L=O+(C<<15&4294967295|C>>>17),C=A+(O^(L|~S))+P[5]+4237533241&4294967295,A=L+(C<<21&4294967295|C>>>11),C=S+(L^(A|~O))+P[12]+1700485571&4294967295,S=A+(C<<6&4294967295|C>>>26),C=O+(A^(S|~L))+P[3]+2399980690&4294967295,O=S+(C<<10&4294967295|C>>>22),C=L+(S^(O|~A))+P[10]+4293915773&4294967295,L=O+(C<<15&4294967295|C>>>17),C=A+(O^(L|~S))+P[1]+2240044497&4294967295,A=L+(C<<21&4294967295|C>>>11),C=S+(L^(A|~O))+P[8]+1873313359&4294967295,S=A+(C<<6&4294967295|C>>>26),C=O+(A^(S|~L))+P[15]+4264355552&4294967295,O=S+(C<<10&4294967295|C>>>22),C=L+(S^(O|~A))+P[6]+2734768916&4294967295,L=O+(C<<15&4294967295|C>>>17),C=A+(O^(L|~S))+P[13]+1309151649&4294967295,A=L+(C<<21&4294967295|C>>>11),C=S+(L^(A|~O))+P[4]+4149444226&4294967295,S=A+(C<<6&4294967295|C>>>26),C=O+(A^(S|~L))+P[11]+3174756917&4294967295,O=S+(C<<10&4294967295|C>>>22),C=L+(S^(O|~A))+P[2]+718787259&4294967295,L=O+(C<<15&4294967295|C>>>17),C=A+(O^(L|~S))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(L+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+L&4294967295,N.g[3]=N.g[3]+O&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var A=S-this.blockSize,P=this.B,L=this.h,O=0;O<S;){if(L==0)for(;O<=A;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<S;)if(P[L++]=N.charCodeAt(O++),L==this.blockSize){o(this,P),L=0;break}}else for(;O<S;)if(P[L++]=N[O++],L==this.blockSize){o(this,P),L=0;break}}this.h=L,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var A=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=A&255,A/=256;for(this.u(N),N=Array(16),S=A=0;4>S;++S)for(var P=0;32>P;P+=8)N[A++]=this.g[S]>>>P&255;return N};function l(N,S){var A=d;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=S(N)}function c(N,S){this.h=S;for(var A=[],P=!0,L=N.length-1;0<=L;L--){var O=N[L]|0;P&&O==S||(A[L]=O,P=!1)}this.g=A}var d={};function p(N){return-128<=N&&128>N?l(N,function(S){return new c([S|0],0>S?-1:0)}):new c([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return V(y(-N));for(var S=[],A=1,P=0;N>=A;P++)S[P]=N/A|0,A*=4294967296;return new c(S,0)}function E(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return V(E(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(S,8)),P=T,L=0;L<N.length;L+=8){var O=Math.min(8,N.length-L),C=parseInt(N.substring(L,L+O),S);8>O?(O=y(Math.pow(S,O)),P=P.j(O).add(y(C))):(P=P.j(A),P=P.add(y(C)))}return P}var T=p(0),I=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(H(this))return-V(this).m();for(var N=0,S=1,A=0;A<this.g.length;A++){var P=this.i(A);N+=(0<=P?P:4294967296+P)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(M(this))return"0";if(H(this))return"-"+V(this).toString(N);for(var S=y(Math.pow(N,6)),A=this,P="";;){var L=ie(A,S).g;A=W(A,L.j(S));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=L,M(A))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function M(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function H(N){return N.h==-1}n.l=function(N){return N=W(this,N),H(N)?-1:M(N)?0:1};function V(N){for(var S=N.g.length,A=[],P=0;P<S;P++)A[P]=~N.g[P];return new c(A,~N.h).add(I)}n.abs=function(){return H(this)?V(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],P=0,L=0;L<=S;L++){var O=P+(this.i(L)&65535)+(N.i(L)&65535),C=(O>>>16)+(this.i(L)>>>16)+(N.i(L)>>>16);P=C>>>16,O&=65535,C&=65535,A[L]=C<<16|O}return new c(A,A[A.length-1]&-2147483648?-1:0)};function W(N,S){return N.add(V(S))}n.j=function(N){if(M(this)||M(N))return T;if(H(this))return H(N)?V(this).j(V(N)):V(V(this).j(N));if(H(N))return V(this.j(V(N)));if(0>this.l(x)&&0>N.l(x))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,A=[],P=0;P<2*S;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var L=0;L<N.g.length;L++){var O=this.i(P)>>>16,C=this.i(P)&65535,$e=N.i(L)>>>16,_t=N.i(L)&65535;A[2*P+2*L]+=C*_t,te(A,2*P+2*L),A[2*P+2*L+1]+=O*_t,te(A,2*P+2*L+1),A[2*P+2*L+1]+=C*$e,te(A,2*P+2*L+1),A[2*P+2*L+2]+=O*$e,te(A,2*P+2*L+2)}for(P=0;P<S;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=S;P<2*S;P++)A[P]=0;return new c(A,0)};function te(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function Y(N,S){this.g=N,this.h=S}function ie(N,S){if(M(S))throw Error("division by zero");if(M(N))return new Y(T,T);if(H(N))return S=ie(V(N),S),new Y(V(S.g),V(S.h));if(H(S))return S=ie(N,V(S)),new Y(V(S.g),S.h);if(30<N.g.length){if(H(N)||H(S))throw Error("slowDivide_ only works with positive integers.");for(var A=I,P=S;0>=P.l(N);)A=Ee(A),P=Ee(P);var L=ge(A,1),O=ge(P,1);for(P=ge(P,2),A=ge(A,2);!M(P);){var C=O.add(P);0>=C.l(N)&&(L=L.add(A),O=C),P=ge(P,1),A=ge(A,1)}return S=W(N,L.j(S)),new Y(L,S)}for(L=T;0<=N.l(S);){for(A=Math.max(1,Math.floor(N.m()/S.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=y(A),C=O.j(S);H(C)||0<C.l(N);)A-=P,O=y(A),C=O.j(S);M(O)&&(O=I),L=L.add(O),N=W(N,C)}return new Y(L,N)}n.A=function(N){return ie(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)&N.i(P);return new c(A,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)|N.i(P);return new c(A,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)^N.i(P);return new c(A,this.h^N.h)};function Ee(N){for(var S=N.g.length+1,A=[],P=0;P<S;P++)A[P]=N.i(P)<<1|N.i(P-1)>>>31;return new c(A,N.h)}function ge(N,S){var A=S>>5;S%=32;for(var P=N.g.length-A,L=[],O=0;O<P;O++)L[O]=0<S?N.i(O+A)>>>S|N.i(O+A+1)<<32-S:N.i(O+A);return new c(L,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,nE=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=E,Ri=c}).apply(typeof ky<"u"?ky:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rE,Wa,iE,ec,of,sE,oE,aE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var F=u[w];if(!(F in _))break e;_=_[F]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,F={next:function(){if(!w&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,w),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function M(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,F,$){for(var ne=Array(arguments.length-2),je=2;je<arguments.length;je++)ne[je-2]=arguments[je];return m.prototype[F].apply(w,ne)}}function H(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function V(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const F=u.length||0,$=w.length||0;u.length=F+$;for(let ne=0;ne<$;ne++)u[F+ne]=w[ne]}else u.push(w)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function te(u){return/^[\s\xa0]*$/.test(u)}function Y(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ie(u){return ie[" "](u),u}ie[" "]=function(){};var Ee=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ge(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let _,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(_ in w)u[_]=w[_];for(let $=0;$<A.length;$++)_=A[$],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function L(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function O(u){d.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class $e{constructor(){this.h=this.g=null}add(m,_){const w=_t.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var _t=new W(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,re=!1,me=new $e,oe=()=>{const u=d.Promise.resolve(void 0);Be=()=>{u.then(b)}};var b=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){O(_)}var m=_t;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ee){e:{try{ie(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}M(Ae,fe);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function qe(u,m,_,w,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=F,this.key=++Fe,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,m,_,w,F){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var ne=Wr(u,m,w,F);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new qe(m,this.src,$,!!w,F),m.fa=_,u.push(m)),m};function Cs(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],F=Array.prototype.indexOf.call(w,m,void 0),$;($=0<=F)&&Array.prototype.splice.call(w,F,1),$&&(vt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Wr(u,m,_,w){for(var F=0;F<u.length;++F){var $=u[F];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==w)return F}return-1}var Fi="closure_lm_"+(1e6*Math.random()|0),ks={};function Ko(u,m,_,w,F){if(Array.isArray(m)){for(var $=0;$<m.length;$++)Ko(u,m[$],_,w,F);return null}return _=Yo(_),u&&u[Me]?u.K(m,_,y(w)?!!w.capture:!1,F):Go(u,m,_,!1,w,F)}function Go(u,m,_,w,F,$){if(!m)throw Error("Invalid event type");var ne=y(F)?!!F.capture:!!F,je=Ns(u);if(je||(u[Fi]=je=new mr(u)),_=je.add(m,_,w,ne,$),_.proxy)return _;if(w=Il(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(F=ne),F===void 0&&(F=!1),u.addEventListener(m.toString(),w,F);else if(u.attachEvent)u.attachEvent(yr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Il(){function u(_){return m.call(u.src,u.listener,_)}const m=Qo;return u}function Ps(u,m,_,w,F){if(Array.isArray(m))for(var $=0;$<m.length;$++)Ps(u,m[$],_,w,F);else w=y(w)?!!w.capture:!!w,_=Yo(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=Wr($,_,w,F),-1<_&&(vt($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ns(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Wr(m,_,w,F)),(_=-1<u?m[u]:null)&&gr(_))}function gr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Cs(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(yr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Ns(m))?(Cs(_,u),_.h==0&&(_.src=null,m[Fi]=null)):vt(u)}}}function yr(u){return u in ks?ks[u]:ks[u]="on"+u}function Qo(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&gr(u),u=_.call(w,m)}return u}function Ns(u){return u=u[Fi],u instanceof mr?u:null}var xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yo(u){return typeof u=="function"?u:(u[xs]||(u[xs]=function(m){return u.handleEvent(m)}),u[xs])}function ct(){G.call(this),this.i=new mr(this),this.M=this,this.F=null}M(ct,G),ct.prototype[Me]=!0,ct.prototype.removeEventListener=function(u,m,_,w){Ps(this,u,m,_,w)};function ht(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var F=m;m=new fe(w,u),P(m,F)}if(F=!0,_)for(var $=_.length-1;0<=$;$--){var ne=m.g=_[$];F=_r(ne,w,!0,m)&&F}if(ne=m.g=u,F=_r(ne,w,!0,m)&&F,F=_r(ne,w,!1,m)&&F,_)for($=0;$<_.length;$++)ne=m.g=_[$],F=_r(ne,w,!1,m)&&F}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)vt(_[w]);delete u.g[m],u.h--}}this.F=null},ct.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ct.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function _r(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,$=0;$<m.length;++$){var ne=m[$];if(ne&&!ne.da&&ne.capture==_){var je=ne.listener,dt=ne.ha||ne.src;ne.fa&&Cs(u.i,ne),F=je.call(dt,w)!==!1&&F}}return F&&!w.defaultPrevented}function Xo(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Kr(u){u.g=Xo(()=>{u.g=null,u.i&&(u.i=!1,Kr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ui extends G{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Kr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(u){G.call(this),this.h=u,this.g={}}M(ji,G);var Jo=[];function Zo(u){ge(u.g,function(m,_){this.g.hasOwnProperty(_)&&gr(m)},u),u.g={}}ji.prototype.N=function(){ji.aa.N.call(this),Zo(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ea=d.JSON.stringify,ta=d.JSON.parse,na=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Bi(){}Bi.prototype.h=null;function Ds(u){return u.h||(u.h=u.i())}function Os(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){fe.call(this,"d")}M(Qn,fe);function Ls(){fe.call(this,"c")}M(Ls,fe);var Yn={},ra=null;function zi(){return ra=ra||new ct}Yn.La="serverreachability";function ia(u){fe.call(this,Yn.La,u)}M(ia,fe);function vr(u){const m=zi();ht(m,new ia(m))}Yn.STAT_EVENT="statevent";function sa(u,m){fe.call(this,Yn.STAT_EVENT,u),this.stat=m}M(sa,fe);function rt(u){const m=zi();ht(m,new sa(m,u))}Yn.Ma="timingevent";function Vs(u,m){fe.call(this,Yn.Ma,u),this.size=m}M(Vs,fe);function An(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function qi(u,m,_,w,F,$){u.info(function(){if(u.g)if($)for(var ne="",je=$.split("&"),dt=0;dt<je.length;dt++){var Oe=je[dt].split("=");if(1<Oe.length){var Et=Oe[0];Oe=Oe[1];var ot=Et.split("_");ne=2<=ot.length&&ot[1]=="type"?ne+(Et+"="+Oe+"&"):ne+(Et+"=redacted&")}}else ne=null;else ne=$;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+m+`
`+_+`
`+ne})}function bs(u,m,_,w,F,$,ne){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+m+`
`+_+`
`+$+" "+ne})}function Cn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Zc(u,_)+(w?" "+w:"")})}function oa(u,m){u.info(function(){return"TIMEOUT: "+m})}$i.prototype.info=function(){};function Zc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var F=w[1];if(Array.isArray(F)&&!(1>F.length)){var $=F[0];if($!="noop"&&$!="stop"&&$!="close")for(var ne=1;ne<F.length;ne++)F[ne]=""}}}}return ea(_)}catch{return m}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function Hi(){}M(Hi,Bi),Hi.prototype.g=function(){return new XMLHttpRequest},Hi.prototype.i=function(){return{}},kn=new Hi;function Pn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var aa={},Fs={};function Us(u,m,_){u.L=1,u.v=Jr(rn(m)),u.m=_,u.P=!0,la(u,null)}function la(u,m){u.F=Date.now(),He(u),u.A=rn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ei(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Rl,u.g=$l(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Ui(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(Jo[0]=F.toString()),F=Jo);for(var $=0;$<F.length;$++){var ne=Ko(_,F[$],w||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),vr(),qi(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Wt(u)==3?m.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Wt(this.g);var m=this.g.Ba();const pn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||pa(this.g)))){this.J||ot!=4||m==7||(m==8||0>=pn?vr(3):vr(2)),Wi(this);var _=this.g.Z();this.X=_;t:if(Al(this)){var w=pa(this.g);u="";var F=w.length,$=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),Gr(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!($&&m==F-1)});w.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,bs(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,dt=this.g;if((je=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(je)){var Oe=je;break t}}Oe=null}if(_=Oe)Cn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ua(this,_);else{this.o=!1,this.s=3,rt(12),dn(this),Gr(this);break e}}if(this.P){_=!0;let on;for(;!this.J&&this.C<ne.length;)if(on=eh(this,ne),on==Fs){ot==4&&(this.s=4,rt(14),_=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(on==aa){this.s=4,rt(15),Cn(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else Cn(this.i,this.l,on,null),ua(this,on);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||ne.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)Cn(this.i,this.l,ne,"[Invalid Chunked Response]"),dn(this),Gr(this);else if(0<ne.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ga(Et),Et.M=!0,rt(11))}}else Cn(this.i,this.l,ne,null),ua(this,ne);ot==4&&dn(this),this.o&&!this.J&&(ot==4?Ys(this.j,this):(this.o=!1,He(this)))}else Hs(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),dn(this),Gr(this)}}}catch{}finally{}};function Al(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function eh(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Fs:(_=Number(m.substring(_,w)),isNaN(_)?aa:(w+=1,w+_>m.length?Fs:(m=m.slice(w,w+_),u.C=w+_,m)))}Pn.prototype.cancel=function(){this.J=!0,dn(this)};function He(u){u.S=Date.now()+u.I,Cl(u,u.I)}function Cl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(I(u.ba,u),m)}function Wi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(oa(this.i,this.A),this.L!=2&&(vr(),rt(17)),dn(this),this.s=2,Gr(this)):Cl(this,this.S-u)};function Gr(u){u.j.G==0||u.J||Ys(u.j,u)}function dn(u){Wi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Zo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ua(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Bt(_.h,u))){if(!u.K&&Bt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Qs(_),Ln(_);else break e;Gs(_),rt(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=An(I(_.Za,_),6e3));if(1>=Pl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Sr(_,11)}else if((u.K||_.g==u)&&Qs(_),!te(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Oe=F[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const Et=Oe[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const ot=Oe[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const pn=Oe[5];pn!=null&&typeof pn=="number"&&0<pn&&(w=1.5*pn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const on=u.g;if(on){const Zi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var $=w.h;$.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ca($,$.h),$.h=null))}if(w.D){const Js=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Js&&(w.ya=Js,ze(w.I,w.D,Js))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ne=u;if(w.qa=zl(w,w.J?w.ia:null,w.W),ne.K){Nl(w.h,ne);var je=ne,dt=w.L;dt&&(je.I=dt),je.B&&(Wi(je),He(je)),w.g=ne}else Ji(w);0<_.i.length&&er(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Sr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Sr(_,7):At(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}vr(4)}catch{}}var kl=class{constructor(u,m){this.g=u,this.map=m}};function Ki(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Pl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ca(u,m){u.g?u.g.add(m):u.h=m}function Nl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ki.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return H(u.i)}function js(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Bs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function Qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Bs(u),w=js(u),F=w.length,$=0;$<F;$++)m.call(void 0,w[$],_&&_[$],u)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function th(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),F=null;if(0<=w){var $=u[_].substring(0,w);F=u[_].substring(w+1)}else $=u[_];m($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Er(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Er){this.h=u.h,Qi(this,u.j),this.o=u.o,this.g=u.g,Yr(this,u.s),this.l=u.l;var m=u.i,_=new Xn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Xr(this,_),this.m=u.m}else u&&(m=String(u).match(Gi))?(this.h=!1,Qi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Yr(this,m[4]),this.l=Ne(m[5]||"",!0),Xr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Er.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Zr(m,zs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Zr(m,zs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Zr(_,_.charAt(0)=="/"?Ll:Ol,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Zr(_,ha)),u.join("")};function rn(u){return new Er(u)}function Qi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Yr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Xr(u,m,_){m instanceof Xn?(u.i=m,Jn(u.i,u.h)):(_||(m=Zr(m,Vl)),u.i=new Xn(m,u.h))}function ze(u,m,_){u.i.set(m,_)}function Jr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Zr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Dl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Dl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zs=/[#\/\?@]/g,Ol=/[#\?:]/g,Ll=/[#\?]/g,Vl=/[#\?@]/g,ha=/#/g;function Xn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&th(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Xn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=fn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Nn(u,m){Rt(u),m=fn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function xn(u,m){return Rt(u),m=fn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(_,w){_.forEach(function(F){u.call(m,F,w,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const F=u[w];for(let $=0;$<F.length;$++)_.push(m[w])}return _},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")xn(this,u)&&(m=m.concat(this.g.get(fn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=fn(this,u),xn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ei(u,m,_){Nn(u,m),0<_.length&&(u.i=null,u.g.set(fn(u,m),H(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const $=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var F=$;ne[w]!==""&&(F+="="+encodeURIComponent(String(ne[w]))),u.push(F)}}return this.i=u.join("&")};function fn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Jn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(_,w){var F=w.toLowerCase();w!=F&&(Nn(this,w),ei(this,F,_))},u)),u.j=m}function nh(u,m){const _=new $i;if(d.Image){const w=new Image;w.onload=x(Ht,_,"TestLoadImage: loaded",!0,m,w),w.onerror=x(Ht,_,"TestLoadImage: error",!1,m,w),w.onabort=x(Ht,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=x(Ht,_,"TestLoadImage: timeout",!1,m,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function bl(u,m){const _=new $i,w=new AbortController,F=setTimeout(()=>{w.abort(),Ht(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then($=>{clearTimeout(F),$.ok?Ht(_,"TestPingServer: ok",!0,m):Ht(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Ht(_,"TestPingServer: error",!1,m)})}function Ht(u,m,_,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(_)}catch{}}function rh(){this.g=new na}function Ml(u,m,_){const w=_||"";try{Qr(u,function(F,$){let ne=F;y(F)&&(ne=ea(F)),m.push(w+$+"="+encodeURIComponent(ne))})}catch(F){throw m.push(w+"type="+encodeURIComponent("_badmap")),F}}function wr(u){this.l=u.Ub||null,this.j=u.eb||!1}M(wr,Bi),wr.prototype.g=function(){return new Yi(this.l,this.j)},wr.prototype.i=function(u){return function(){return u}}({});function Yi(u,m){ct.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Yi,ct),n=Yi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,On(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Dn(this):On(this),this.readyState==3&&Fl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},n.Qa=function(u){this.g&&(this.response=u,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,On(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function On(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let m="";return ge(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function ti(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Tr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,m,_))}function Ye(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(Ye,ct);var ih=/^https?$/i,da=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?Ds(this.o):Ds(kn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){Xi(this,$);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)_.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const $ of w.keys())_.set($,w.get($));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),F=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(da,m,void 0))||w||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of _)this.g.setRequestHeader($,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qs(this),this.u=!0,this.g.send(u),this.u=!1}catch($){Xi(this,$)}};function Xi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,$s(u),sn(u)}function $s(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fa(this):this.bb())},n.bb=function(){fa(this)};function fa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Wt(u)!=4||u.Z()!=2)){if(u.u&&Wt(u)==4)Xo(u.Ea,0,u);else if(ht(u,"readystatechange"),Wt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=ne===0){var F=String(u.D).match(Gi)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),w=!ih.test(F?F.toLowerCase():"")}_=w}if(_)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var $=2<Wt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",$s(u)}}finally{sn(u)}}}}function sn(u,m){if(u.g){qs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ht(u,"ready");try{_.onreadystatechange=w}catch{}}}function qs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Wt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ta(m)}};function pa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Hs(u){const m={};u=(u.g&&2<=Wt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(te(u[w]))continue;var _=L(u[w]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[F]||[];m[F]=$,$.push(_)}N(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ma(u){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,u),this.cb=Zn("retryDelaySeedMs",1e4,u),this.Wa=Zn("forwardChannelMaxRetries",2,u),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ki(u&&u.concurrentRequestLimit),this.Da=new rh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ma.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){rt(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=zl(this,null,this.W),er(this)};function At(u){if(Ws(u),u.G==3){var m=u.U++,_=rn(u.I);if(ze(_,"SID",u.K),ze(_,"RID",m),ze(_,"TYPE","terminate"),Ir(u,_),m=new Pn(u,u.j,m),m.L=2,m.v=Jr(rn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=$l(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}Bl(u)}function Ln(u){u.g&&(ga(u),u.g.cancel(),u.g=null)}function Ws(u){Ln(u),u.u&&(d.clearTimeout(u.u),u.u=null),Qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function er(u){if(!nn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||oe(),re||(Be(),re=!0),me.add(m,u),u.B=0}}function sh(u,m){return Pl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(I(u.Ga,u,m),jl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Pn(this,this.j,u);let $=this.o;if(this.S&&($?($=S($),P($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ni(this,F,m),_=rn(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Ir(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(Tr($)))+"&"+m:this.m&&ti(_,this.m,$)),ca(this.h,F),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",m),ze(_,"SID","null"),F.T=!0,Us(F,_,null)):Us(F,_,m),this.G=2}}else this.G==3&&(u?Ks(this,u):this.i.length==0||nn(this.h)||Ks(this))};function Ks(u,m){var _;m?_=m.l:_=u.U++;const w=rn(u.I);ze(w,"SID",u.K),ze(w,"RID",_),ze(w,"AID",u.T),Ir(u,w),u.m&&u.o&&ti(w,u.m,u.o),_=new Pn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ni(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ca(u.h,_),Us(_,w,m)}function Ir(u,m){u.H&&ge(u.H,function(_,w){ze(m,w,_)}),u.l&&Qr({},function(_,w){ze(m,w,_)})}function ni(u,m,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var F=u.i;let $=-1;for(;;){const ne=["count="+_];$==-1?0<_?($=F[0].g,ne.push("ofs="+$)):$=0:ne.push("ofs="+$);let je=!0;for(let dt=0;dt<_;dt++){let Oe=F[dt].g;const Et=F[dt].map;if(Oe-=$,0>Oe)$=Math.max(0,F[dt].g-100),je=!1;else try{Ml(Et,ne,"req"+Oe+"_")}catch{w&&w(Et)}}if(je){w=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Ji(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||oe(),re||(Be(),re=!0),me.add(m,u),u.v=0}}function Gs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(I(u.Fa,u),jl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Ln(this),Ul(this))};function ga(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Ul(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=rn(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),Ir(u,m),u.m&&u.o&&ti(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Jr(rn(m)),_.m=null,_.P=!0,la(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),Gs(this),rt(19))};function Qs(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Ys(u,m){var _=null;if(u.g==m){Qs(u),ga(u),u.g=null;var w=2}else if(Bt(u.h,m))_=m.D,Nl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;w=zi(),ht(w,new Vs(w,_)),er(u)}else Ji(u);else if(F=m.s,F==3||F==0&&0<m.X||!(w==1&&sh(u,m)||w==2&&Gs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function jl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Sr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),w=u.Xa;const F=!w;w=new Er(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Qi(w,"https"),Jr(w),F?nh(w.toString(),_):bl(w.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),Bl(u),Ws(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Bl(u){if(u.G=0,u.ka=[],u.l){const m=xl(u.h);(m.length!=0||u.i.length!=0)&&(V(u.ka,m),V(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function zl(u,m,_){var w=_ instanceof Er?rn(_):new Er(_);if(w.g!="")m&&(w.g=m+"."+w.g),Yr(w,w.s);else{var F=d.location;w=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var $=new Er(null);w&&Qi($,w),m&&($.g=m),F&&Yr($,F),_&&($.l=_),w=$}return _=u.D,m=u.ya,_&&m&&ze(w,_,m),ze(w,"VER",u.la),Ir(u,w),w}function $l(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ye(new wr({eb:_})):new Ye(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ya(){}n=ya.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xs(){}Xs.prototype.g=function(u,m){return new zt(u,m)};function zt(u,m){ct.call(this),this.g=new ma(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!te(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!te(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new tr(this)}M(zt,ct),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){At(this.g)},zt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ea(u),u=_);m.i.push(new kl(m.Ya++,u)),m.G==3&&er(m)},zt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,zt.aa.N.call(this)};function ql(u){Qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}M(ql,Qn);function Hl(){Ls.call(this),this.status=1}M(Hl,Ls);function tr(u){this.g=u}M(tr,ya),tr.prototype.ua=function(){ht(this.g,"a")},tr.prototype.ta=function(u){ht(this.g,new ql(u))},tr.prototype.sa=function(u){ht(this.g,new Hl)},tr.prototype.ra=function(){ht(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,aE=function(){return new Xs},oE=function(){return zi()},sE=Yn,of={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,ec=Ms,Sl.COMPLETE="complete",iE=Sl,Os.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Wa=Os,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,rE=Ye}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});const Py="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Dc("@firebase/firestore");function Eo(){return vs.logLevel}function ae(n,...e){if(vs.logLevel<=ke.DEBUG){const t=e.map($f);vs.debug(`Firestore (${zo}): ${n}`,...t)}}function $r(n,...e){if(vs.logLevel<=ke.ERROR){const t=e.map($f);vs.error(`Firestore (${zo}): ${n}`,...t)}}function No(n,...e){if(vs.logLevel<=ke.WARN){const t=e.map($f);vs.warn(`Firestore (${zo}): ${n}`,...t)}}function $f(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+n;throw $r(e),new Error(e)}function Ue(n,e){n||Te()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class Pk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Nk{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ai;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ai,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ai)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new lE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ft(e)}}class xk{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Dk{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new xk(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ok{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new Ok(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=Vk(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function xe(n,e){return n<e?-1:n>e?1:0}function xo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new mt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new mt(0,0))}static max(){return new Ie(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=or.isNumericId(e),o=or.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class Qe extends or{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(Q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const bk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends or{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return bk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ue(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new ue(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Qe.fromString(e))}static fromName(e){return new pe(Qe.fromString(e).popFirst(5))}static empty(){return new pe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Qe(e.slice()))}}function Mk(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new mt(t+1,0):new mt(t,i));return new Pi(o,pe.empty(),e)}function Fk(n){return new Pi(n.readTime,n.key,-1)}class Pi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Pi(Ie.min(),pe.empty(),-1)}static max(){return new Pi(Ie.max(),pe.empty(),-1)}}function Uk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==jk)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(o=>o?K.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new K((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{c[y]=E,++d,d===l&&i(c)},E=>o(E))}})}static doWhile(e,t){return new K((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function zk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Uc.oe=-1;function jc(n){return n==null}function gc(n){return n===0&&1/n==-1/0}function $k(n){return typeof n=="number"&&Number.isInteger(n)&&!gc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ny(e)),e=Hk(n.get(t),e);return Ny(e)}function Hk(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Ny(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Is(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function cE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zu(this.root,e,this.comparator,!0)}}class zu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new gt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new hE("Invalid base64 string: "+l):l}}(e);return new xt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const Wk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=Wk.exec(n);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xi(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Bc(n){const e=n.mapValue.fields.__previous_value__;return qf(e)?Bc(e):e}function ol(n){const e=Ni(n.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class al{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={mapValue:{}};function Di(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qf(n)?4:Qk(n)?9007199254740991:Gk(n)?10:11:Te()}function dr(n,e){if(n===e)return!0;const t=Di(n);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ol(n).isEqual(ol(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ni(o.timestampValue),d=Ni(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return xi(o.bytesValue).isEqual(xi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=st(o.doubleValue),d=st(l.doubleValue);return c===d?gc(c)===gc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return xo(n.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(xy(c)!==xy(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!dr(c[p],d[p])))return!1;return!0}(n,e);default:return Te()}}function ll(n,e){return(n.values||[]).find(t=>dr(t,e))!==void 0}function Do(n,e){if(n===e)return 0;const t=Di(n),i=Di(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=st(l.integerValue||l.doubleValue),p=st(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Oy(n.timestampValue,e.timestampValue);case 4:return Oy(ol(n),ol(e));case 5:return xe(n.stringValue,e.stringValue);case 6:return function(l,c){const d=xi(l),p=xi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const E=xe(d[y],p[y]);if(E!==0)return E}return xe(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=xe(st(l.latitude),st(c.latitude));return d!==0?d:xe(st(l.longitude),st(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ly(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,E;const T=l.fields||{},I=c.fields||{},x=(d=T.value)===null||d===void 0?void 0:d.arrayValue,M=(p=I.value)===null||p===void 0?void 0:p.arrayValue,H=xe(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((E=M==null?void 0:M.values)===null||E===void 0?void 0:E.length)||0);return H!==0?H:Ly(x,M)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===$u.mapValue&&c===$u.mapValue)return 0;if(l===$u.mapValue)return 1;if(c===$u.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const I=xe(p[T],E[T]);if(I!==0)return I;const x=Do(d[p[T]],y[E[T]]);if(x!==0)return x}return xe(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Te()}}function Oy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=Ni(n),i=Ni(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function Ly(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Do(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function Oo(n){return af(n)}function af(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ni(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=af(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${af(t.fields[c])}`;return o+"}"}(n.mapValue):Te()}function tc(n){switch(Di(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bc(n);return e?16+tc(e):16;case 5:return 2*n.stringValue.length;case 6:return xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+tc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Is(i.fields,(l,c)=>{o+=l.length+tc(c)}),o}(n.mapValue);default:throw Te()}}function Vy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function lf(n){return!!n&&"integerValue"in n}function Hf(n){return!!n&&"arrayValue"in n}function by(n){return!!n&&"nullValue"in n}function My(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nc(n){return!!n&&"mapValue"in n}function Gk(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Xa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Is(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Xa(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Qk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=Xa(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Is(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new wn(Xa(this.value))}}function dE(n){const e=[];return Is(n.fields,(t,i)=>{const o=new Nt([t]);if(nc(i)){const l=dE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Ut(e,0,Ie.min(),Ie.min(),Ie.min(),wn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Ie.min(),Ie.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Ie.min(),Ie.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.position=e,this.inclusive=t}}function Fy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(c.referenceValue),t.key):i=Do(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Uy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{}class ut extends fE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Jk(e,t,i):t==="array-contains"?new tP(e,i):t==="in"?new nP(e,i):t==="not-in"?new rP(e,i):t==="array-contains-any"?new iP(e,i):new ut(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Zk(e,i):new eP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Do(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(Do(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends fE{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Kn(e,t)}matches(e){return pE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pE(n){return n.op==="and"}function mE(n){return Xk(n)&&pE(n)}function Xk(n){for(const e of n.filters)if(e instanceof Kn)return!1;return!0}function uf(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+Oo(n.value);if(mE(n))return n.filters.map(e=>uf(e)).join(",");{const e=n.filters.map(t=>uf(t)).join(",");return`${n.op}(${e})`}}function gE(n,e){return n instanceof ut?function(i,o){return o instanceof ut&&i.op===o.op&&i.field.isEqual(o.field)&&dr(i.value,o.value)}(n,e):n instanceof Kn?function(i,o){return o instanceof Kn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&gE(c,o.filters[d]),!0):!1}(n,e):void Te()}function yE(n){return n instanceof ut?function(t){return`${t.field.canonicalString()} ${t.op} ${Oo(t.value)}`}(n):n instanceof Kn?function(t){return t.op.toString()+" {"+t.getFilters().map(yE).join(" ,")+"}"}(n):"Filter"}class Jk extends ut{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zk extends ut{constructor(e,t){super(e,"in",t),this.keys=_E("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eP extends ut{constructor(e,t){super(e,"not-in",t),this.keys=_E("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function _E(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>pe.fromName(i.referenceValue))}class tP extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hf(t)&&ll(t.arrayValue,this.value)}}class nP extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ll(this.value.arrayValue,t)}}class rP extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ll(this.value.arrayValue,t)}}class iP extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ll(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function jy(n,e=null,t=[],i=[],o=null,l=null,c=null){return new sP(n,e,t,i,o,l,c)}function Wf(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>uf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),jc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Oo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Oo(i)).join(",")),e.ue=t}return e.ue}function Kf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uy(n.startAt,e.startAt)&&Uy(n.endAt,e.endAt)}function cf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oP(n,e,t,i,o,l,c,d){return new Ho(n,e,t,i,o,l,c,d)}function vE(n){return new Ho(n)}function By(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function EE(n){return n.collectionGroup!==null}function Ja(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new gt(Nt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new ul(l,i))}),t.has(Nt.keyField().canonicalString())||e.ce.push(new ul(Nt.keyField(),i))}return e.ce}function cr(n){const e=Se(n);return e.le||(e.le=aP(e,Ja(n))),e.le}function aP(n,e){if(n.limitType==="F")return jy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new ul(o.field,l)});const t=n.endAt?new yc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new yc(n.startAt.position,n.startAt.inclusive):null;return jy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function hf(n,e){const t=n.filters.concat([e]);return new Ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function _c(n,e,t){return new Ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zc(n,e){return Kf(cr(n),cr(e))&&n.limitType===e.limitType}function wE(n){return`${Wf(cr(n))}|lt:${n.limitType}`}function wo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>yE(o)).join(", ")}]`),jc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Oo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Oo(o)).join(",")),`Target(${i})`}(cr(n))}; limitType=${n.limitType})`}function $c(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Ja(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=Fy(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,Ja(i),o)||i.endAt&&!function(c,d,p){const y=Fy(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,Ja(i),o))}(n,e)}function lP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function TE(n){return(e,t)=>{let i=!1;for(const o of Ja(n)){const l=uP(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function uP(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Do(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return cE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=new tt(pe.comparator);function qr(){return cP}const IE=new tt(pe.comparator);function Ka(...n){let e=IE;for(const t of n)e=e.insert(t.key,t);return e}function SE(n){let e=IE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ps(){return Za()}function RE(){return Za()}function Za(){return new Ss(n=>n.toString(),(n,e)=>n.isEqual(e))}const hP=new tt(pe.comparator),dP=new gt(pe.comparator);function Pe(...n){let e=dP;for(const t of n)e=e.add(t);return e}const fP=new gt(xe);function pP(){return fP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function AE(n){return{integerValue:""+n}}function mP(n,e){return $k(e)?AE(e):Gf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this._=void 0}}function gP(n,e,t){return n instanceof vc?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&qf(l)&&(l=Bc(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof cl?kE(n,e):n instanceof hl?PE(n,e):function(o,l){const c=CE(o,l),d=zy(c)+zy(o.Pe);return lf(c)&&lf(o.Pe)?AE(d):Gf(o.serializer,d)}(n,e)}function yP(n,e,t){return n instanceof cl?kE(n,e):n instanceof hl?PE(n,e):t}function CE(n,e){return n instanceof Ec?function(i){return lf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class vc extends qc{}class cl extends qc{constructor(e){super(),this.elements=e}}function kE(n,e){const t=NE(e);for(const i of n.elements)t.some(o=>dr(o,i))||t.push(i);return{arrayValue:{values:t}}}class hl extends qc{constructor(e){super(),this.elements=e}}function PE(n,e){let t=NE(e);for(const i of n.elements)t=t.filter(o=>!dr(o,i));return{arrayValue:{values:t}}}class Ec extends qc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function zy(n){return st(n.integerValue||n.doubleValue)}function NE(n){return Hf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function _P(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof cl&&o instanceof cl||i instanceof hl&&o instanceof hl?xo(i.elements,o.elements,dr):i instanceof Ec&&o instanceof Ec?dr(i.Pe,o.Pe):i instanceof vc&&o instanceof vc}(n.transform,e.transform)}class vP{constructor(e,t){this.version=e,this.transformResults=t}}class jr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jr}static exists(e){return new jr(void 0,e)}static updateTime(e){return new jr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hc{}function xE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new OE(n.key,jr.none()):new vl(n.key,n.data,jr.none());{const t=n.data,i=wn.empty();let o=new gt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Rs(n.key,i,new zn(o.toArray()),jr.none())}}function EP(n,e,t){n instanceof vl?function(o,l,c){const d=o.value.clone(),p=qy(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Rs?function(o,l,c){if(!rc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=qy(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(DE(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function el(n,e,t,i){return n instanceof vl?function(l,c,d,p){if(!rc(l.precondition,c))return d;const y=l.value.clone(),E=Hy(l.fieldTransforms,p,c);return y.setAll(E),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Rs?function(l,c,d,p){if(!rc(l.precondition,c))return d;const y=Hy(l.fieldTransforms,p,c),E=c.data;return E.setAll(DE(l)),E.setAll(y),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return rc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function wP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=CE(i.transform,o||null);l!=null&&(t===null&&(t=wn.empty()),t.set(i.field,l))}return t||null}function $y(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&xo(i,o,(l,c)=>_P(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vl extends Hc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Rs extends Hc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function DE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function qy(n,e,t){const i=new Map;Ue(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,yP(c,d,t[o]))}return i}function Hy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,gP(l,c,e))}return i}class OE extends Hc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TP extends Hc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&EP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=el(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=el(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=RE();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=xE(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,(t,i)=>$y(t,i))&&xo(this.baseMutations,e.baseMutations,(t,i)=>$y(t,i))}}class Qf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length);let o=function(){return hP}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Qf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Le;function AP(n){switch(n){default:return Te();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0}}function LE(n){if(n===void 0)return $r("GRPC error has no .code"),Q.UNKNOWN;switch(n){case lt.OK:return Q.OK;case lt.CANCELLED:return Q.CANCELLED;case lt.UNKNOWN:return Q.UNKNOWN;case lt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case lt.INTERNAL:return Q.INTERNAL;case lt.UNAVAILABLE:return Q.UNAVAILABLE;case lt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case lt.NOT_FOUND:return Q.NOT_FOUND;case lt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case lt.ABORTED:return Q.ABORTED;case lt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case lt.DATA_LOSS:return Q.DATA_LOSS;default:return Te()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=new Ri([4294967295,4294967295],0);function Wy(n){const e=CP().encode(n),t=new nE;return t.update(e),new Uint8Array(t.digest())}function Ky(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ri([t,i],0),new Ri([o,l],0)]}class Yf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ga(`Invalid padding: ${t}`);if(i<0)throw new Ga(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ga(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ga(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ri.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ri.fromNumber(i)));return o.compare(kP)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Wy(e),[i,o]=Ky(t);for(let l=0;l<this.hashCount;l++){const c=this.de(i,o,l);if(!this.Ee(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Yf(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;const t=Wy(e),[i,o]=Ky(t);for(let l=0;l<this.hashCount;l++){const c=this.de(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ga extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Wc(Ie.min(),o,new tt(xe),qr(),Pe())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class VE{constructor(e,t){this.targetId=e,this.me=t}}class bE{constructor(e,t,i=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Gy{constructor(){this.fe=0,this.ge=Qy(),this.pe=xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new El(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Qy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PP{constructor(e){this.Be=e,this.Le=new Map,this.ke=qr(),this.qe=qu(),this.Qe=qu(),this.Ke=new tt(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(cf(l))if(i===0){const c=new pe(l.path);this.We(t,c,Ut.newNoDocument(c,Ie.min()))}else Ue(i===1);else{const c=this.Ze(t);if(c!==i){const d=this.Xe(e),p=d?this.et(d,e,c):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=xi(i).toUint8Array()}catch(p){if(p instanceof hE)return No("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Yf(c,o,l)}catch(p){return No(p instanceof Ga?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Be.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,c)=>{const d=this.Ye(c);if(d){if(l.current&&cf(d.target)){const p=new pe(d.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,Ut.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=Pe();this.Qe.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new Wc(e,t,this.Ke,this.ke,i);return this.ke=qr(),this.qe=qu(),this.Qe=qu(),this.Ke=new tt(xe),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Gy,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new gt(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new gt(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Gy),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function qu(){return new tt(pe.comparator)}function Qy(){return new tt(pe.comparator)}const NP={asc:"ASCENDING",desc:"DESCENDING"},xP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DP={and:"AND",or:"OR"};class OP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function df(n,e){return n.useProto3Json||jc(e)?e:{value:e}}function wc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ME(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function LP(n,e){return wc(n,e.toTimestamp())}function hr(n){return Ue(!!n),Ie.fromTimestamp(function(t){const i=Ni(t);return new mt(i.seconds,i.nanos)}(n))}function Xf(n,e){return ff(n,e).canonicalString()}function ff(n,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function FE(n){const e=Qe.fromString(n);return Ue($E(e)),e}function pf(n,e){return Xf(n.databaseId,e.path)}function zd(n,e){const t=FE(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(jE(t))}function UE(n,e){return Xf(n.databaseId,e)}function VP(n){const e=FE(n);return e.length===4?Qe.emptyPath():jE(e)}function mf(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function jE(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yy(n,e,t){return{name:pf(n,e),fields:t.value.mapValue.fields}}function bP(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Ue(E===void 0||typeof E=="string"),xt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array),xt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const E=y.code===void 0?Q.UNKNOWN:LE(y.code);return new ue(E,y.message||"")}(c);t=new bE(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=zd(n,i.document.name),l=hr(i.document.updateTime),c=i.document.createTime?hr(i.document.createTime):Ie.min(),d=new wn({mapValue:{fields:i.document.fields}}),p=Ut.newFoundDocument(o,l,c,d),y=i.targetIds||[],E=i.removedTargetIds||[];t=new ic(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=zd(n,i.document),l=i.readTime?hr(i.readTime):Ie.min(),c=Ut.newNoDocument(o,l),d=i.removedTargetIds||[];t=new ic([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=zd(n,i.document),l=i.removedTargetIds||[];t=new ic([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new RP(o,l),d=i.targetId;t=new VE(d,c)}}return t}function MP(n,e){let t;if(e instanceof vl)t={update:Yy(n,e.key,e.value)};else if(e instanceof OE)t={delete:pf(n,e.key)};else if(e instanceof Rs)t={update:Yy(n,e.key,e.data),updateMask:WP(e.fieldMask)};else{if(!(e instanceof TP))return Te();t={verify:pf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof vc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof cl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof hl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Ec)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:LP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function FP(n,e){return n&&n.length>0?(Ue(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?hr(o.updateTime):hr(l);return c.isEqual(Ie.min())&&(c=hr(l)),new vP(c,o.transformResults||[])}(t,e))):[]}function UP(n,e){return{documents:[UE(n,e.path)]}}function jP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=UE(n,o);const l=function(y){if(y.length!==0)return zE(Kn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(E=>function(I){return{field:To(I.field),direction:$P(I.dir)}}(E))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=df(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function BP(n){let e=VP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const I=BE(T);return I instanceof Kn&&mE(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(I=>function(M){return new ul(Io(M.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,jc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,x=T.values||[];return new yc(x,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,x=T.values||[];return new yc(x,I)}(t.endAt)),oP(e,o,c,l,d,"F",p,y)}function zP(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function BE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Io(t.unaryFilter.field);return ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Io(t.unaryFilter.field);return ut.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Io(t.unaryFilter.field);return ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Io(t.unaryFilter.field);return ut.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return ut.create(Io(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Kn.create(t.compositeFilter.filters.map(i=>BE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function $P(n){return NP[n]}function qP(n){return xP[n]}function HP(n){return DP[n]}function To(n){return{fieldPath:n.canonicalString()}}function Io(n){return Nt.fromServerFormat(n.fieldPath)}function zE(n){return n instanceof ut?function(t){if(t.op==="=="){if(My(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NAN"}};if(by(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(My(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NAN"}};if(by(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(t.field),op:qP(t.op),value:t.value}}}(n):n instanceof Kn?function(t){const i=t.getFilters().map(o=>zE(o));return i.length===1?i[0]:{compositeFilter:{op:HP(t.op),filters:i}}}(n):Te()}function WP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $E(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,i,o,l=Ie.min(),c=Ie.min(),d=xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.ht=e}}function GP(n){const e=BP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_c(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.ln=new YP}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Pi.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class YP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new gt(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new gt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(41943040,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Lo(0)}static Qn(){return new Lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy([n,e],[t,i]){const o=xe(n,t);return o===0?xe(e,i):o}class XP{constructor(e){this.Gn=e,this.buffer=new gt(Jy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Jy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class JP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await $o(t)}await this.Yn(3e5)})}}class ZP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Uc.oe);const i=new XP(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Xy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,c,d,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),Eo()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function e1(n,e){return new ZP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.changes=new Ss(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&el(i.mutation,o,zn.empty(),mt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=ps();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=Ka();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=ps();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=qr();const c=Za(),d=function(){return Za()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Rs)?l=l.insert(y.key,y):E!==void 0?(c.set(y.key,E.mutation.getFieldMask()),el(E.mutation,y,E.mutation.getFieldMask(),mt.now())):c.set(y.key,zn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>c.set(y,E)),t.forEach((y,E)=>{var T;return d.set(y,new n1(E,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Za();let o=new tt((c,d)=>c-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||zn.empty();E=d.applyToLocalView(y,E),i.set(p,E);const T=(o.get(d.batchId)||Pe()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,E=p.value,T=RE();E.forEach(I=>{if(!l.has(I)){const x=xE(t.get(I),i.get(I));x!==null&&T.set(I,x),l=l.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return K.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return pe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):EE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(ps());let d=-1,p=l;return c.next(y=>K.forEach(y,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(I=>{p=p.insert(E,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Pe())).next(E=>({batchId:d,changes:SE(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(i=>{let o=Ka();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Ka();return this.indexManager.getCollectionParents(e,l).next(d=>K.forEach(d,p=>{const y=function(T,I){return new Ho(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,I)=>{c=c.insert(T,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const E=y.getKey();c.get(E)===null&&(c=c.insert(E,Ut.newInvalidDocument(E)))});let d=Ka();return c.forEach((p,y)=>{const E=l.get(p);E!==void 0&&el(E.mutation,y,zn.empty(),mt.now()),$c(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:GP(o.bundledQuery),readTime:hr(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.overlays=new tt(pe.comparator),this.dr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ps();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=ps(),l=t.length+1,c=new pe(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt((y,E)=>y-E);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ps(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const d=ps(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>d.set(y,E)),!(d.size()>=o)););return K.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new SP(t,i));let l=this.dr.get(t);l===void 0&&(l=Pe(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.Er=new gt(St.Ar),this.Rr=new gt(St.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new St(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new St(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new pe(new Qe([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Rr.forEachInRange([i,o],c=>{this.gr(c),l.push(c.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new pe(new Qe([])),i=new St(t,e),o=new St(t,e+1);let l=Pe();return this.Rr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new St(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return pe.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new gt(St.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new IP(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.vr=this.vr.add(new St(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],c=>{const d=this.Cr(c.br);l.push(d)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new gt(xe);return t.forEach(o=>{const l=new St(o,0),c=new St(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,c],d=>{i=i.add(d.br)})}),K.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const c=new St(new pe(l),0);let d=new gt(xe);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},c),K.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return K.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new St(t,0),o=this.vr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.Nr=e,this.docs=function(){return new tt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=qr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=qr();const c=t.path,d=new pe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||Uk(Fk(E),i)<=0||(o.has(E.key)||$c(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Br(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new u1(this)}getSize(e){return K.resolve(this.size)}}class u1 extends t1{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.persistence=e,this.Lr=new Ss(t=>Wf(t),Kf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new Jf,this.targetCount=0,this.Qr=Lo.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Lo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Lr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Uc(0),this.Ur=!1,this.Ur=!0,this.Wr=new o1,this.referenceDelegate=e(this),this.Gr=new c1(this),this.indexManager=new QP,this.remoteDocumentCache=function(o){return new l1(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new KP(t),this.jr=new i1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new a1(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new h1(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return K.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class h1 extends Bk{constructor(e){super(),this.currentSequenceNumber=e}}class Zf{constructor(e){this.persistence=e,this.Zr=new Jf,this.Xr=null}static ei(e){return new Zf(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,i=>{const o=pe.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Tc{constructor(e,t){this.persistence=e,this.ri=new Ss(i=>qk(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=e1(this,t)}static ei(e,t){return new Tc(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,c=>this.ir(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=tc(e.data.value)),t}ir(e,t,i){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new ep(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return AS()?8:zk(jt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new d1;return this.ts(e,t,c).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(Eo()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(Eo()<=ke.DEBUG&&ae("QueryEngine","Query:",wo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(Eo()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):K.resolve())}Xi(e,t){if(By(t))return K.resolve(null);let i=cr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=_c(t,null,"F"),i=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Pe(...l);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,c,p.readTime)?this.Xi(e,_c(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return By(t)||o.isEqual(Ie.min())?K.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const c=this.rs(t,l);return this.ss(t,c,i,o)?K.resolve(null):(Eo()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),wo(t)),this.os(e,c,t,Mk(o,-1)).next(d=>d))})}rs(e,t){let i=new gt(TE(e));return t.forEach((o,l)=>{$c(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return Eo()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",wo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Pi.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new tt(xe),this.cs=new Ss(l=>Wf(l),Kf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r1(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function m1(n,e,t,i){return new p1(n,e,t,i)}async function HE(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Pe();for(const y of o){c.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){d.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:c,addedBatchIds:d}))})})}function g1(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,E){const T=y.batch,I=T.keys();let x=K.resolve();return I.forEach(M=>{x=x.next(()=>E.getEntry(p,M)).next(H=>{const V=y.docVersions.get(M);Ue(V!==null),H.version.compareTo(V)<0&&(T.applyToRemoteDocument(H,y),H.isValidDocument()&&(H.setReadTime(y.commitVersion),E.addEntry(H)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Pe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function WE(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function y1(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((E,T)=>{const I=o.get(T);if(!I)return;d.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let x=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(xt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(E.resumeToken,i)),o=o.insert(T,x),function(H,V,W){return H.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(I,x,E)&&d.push(t.Gr.updateTargetData(l,x))});let p=qr(),y=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(_1(l,c,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!i.isEqual(Ie.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(E)}return K.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function _1(n,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=qr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:c,ds:o}})}function v1(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function E1(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,K.resolve(o)):t.Gr.allocateTargetId(i).next(c=>(o=new Ti(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function gf(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!qo(c))throw c;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function Zy(n,e,t){const i=Se(n);let o=Ie.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,E){const T=Se(p),I=T.cs.get(E);return I!==void 0?K.resolve(T.us.get(I)):T.Gr.getTargetData(y,E)}(i,c,cr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:Pe())).next(d=>(w1(i,lP(e),d),{documents:d,Es:l})))}function w1(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class e_{constructor(){this.activeTargetIds=pP()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T1{constructor(){this._o=new e_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new e_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu=null;function $d(){return Hu===null?Hu=function(){return 268435456+Math.round(2147483648*Math.random())}():Hu++,"0x"+Hu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class A1 extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,c){const d=$d(),p=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,c),this.Lo(t,p,y,o).then(E=>(ae("RestConnection",`Received RPC '${t}' ${d}: `,E),E),E=>{throw No("RestConnection",`RPC '${t}' ${d} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,c,d){return this.Oo(t,i,o,l,c)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}No(t,i){const o=S1[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=$d();return new Promise((c,d)=>{const p=new rE;p.setWithCredentials(!0),p.listenOnce(iE.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case ec.NO_ERROR:const E=p.getResponseJson();ae(Mt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),c(E);break;case ec.TIMEOUT:ae(Mt,`RPC '${e}' ${l} timed out`),d(new ue(Q.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const T=p.getStatus();if(ae(Mt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const M=function(V){const W=V.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(W)>=0?W:Q.UNKNOWN}(x.status);d(new ue(M,x.message))}else d(new ue(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ue(Q.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ae(Mt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ae(Mt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=$d(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=aE(),d=oE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");ae(Mt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=c.createWebChannel(E,p);let I=!1,x=!1;const M=new R1({Eo:V=>{x?ae(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(I||(ae(Mt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ae(Mt,`RPC '${e}' stream ${o} sending:`,V),T.send(V))},Ao:()=>T.close()}),H=(V,W,te)=>{V.listen(W,Y=>{try{te(Y)}catch(ie){setTimeout(()=>{throw ie},0)}})};return H(T,Wa.EventType.OPEN,()=>{x||(ae(Mt,`RPC '${e}' stream ${o} transport opened.`),M.So())}),H(T,Wa.EventType.CLOSE,()=>{x||(x=!0,ae(Mt,`RPC '${e}' stream ${o} transport closed`),M.Do())}),H(T,Wa.EventType.ERROR,V=>{x||(x=!0,No(Mt,`RPC '${e}' stream ${o} transport errored:`,V),M.Do(new ue(Q.UNAVAILABLE,"The operation could not be completed")))}),H(T,Wa.EventType.MESSAGE,V=>{var W;if(!x){const te=V.data[0];Ue(!!te);const Y=te,ie=(Y==null?void 0:Y.error)||((W=Y[0])===null||W===void 0?void 0:W.error);if(ie){ae(Mt,`RPC '${e}' stream ${o} received error:`,ie);const Ee=ie.status;let ge=function(A){const P=lt[A];if(P!==void 0)return LE(P)}(Ee),N=ie.message;ge===void 0&&(ge=Q.INTERNAL,N="Unknown error status: "+Ee+" with message "+ie.message),x=!0,M.Do(new ue(ge,N)),T.close()}else ae(Mt,`RPC '${e}' stream ${o} received:`,te),M.vo(te)}}),H(d,sE.STAT_EVENT,V=>{V.stat===of.PROXY?ae(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===of.NOPROXY&&ae(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{M.bo()},0),M}}function qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n){return new OP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t,i,o,l,c,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new KE(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?($r(t.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ue(Q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C1 extends GE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=bP(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?hr(c.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=mf(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=cf(p)?{documents:UP(l,p)}:{query:jP(l,p).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=ME(l,c.resumeToken);const y=df(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=wc(l,c.snapshotVersion.toTimestamp());const y=df(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=zP(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=mf(this.serializer),t.removeTarget=e,this.c_(t)}}class k1 extends GE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=FP(e.writeResults,e.commitTime),i=hr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=mf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>MP(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1 extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Oo(e,ff(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(Q.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,ff(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Q.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class N1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?($r(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(c=>{i.enqueueAndForget(async()=>{As(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await wl(y),y.K_.set("Unknown"),y.k_.delete(4),await Gc(y)}(this))})}),this.K_=new N1(i,o)}}async function Gc(n){if(As(n))for(const e of n.q_)await e(!0)}async function wl(n){for(const e of n.q_)await e(!1)}function QE(n,e){const t=Se(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),ip(t)?rp(t):Wo(t).s_()&&np(t,e))}function tp(n,e){const t=Se(n),i=Wo(t);t.L_.delete(e),i.s_()&&YE(t,e),t.L_.size===0&&(i.s_()?i.a_():As(t)&&t.K_.set("Unknown"))}function np(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wo(n).V_(e)}function YE(n,e){n.U_.xe(e),Wo(n).m_(e)}function rp(n){n.U_=new PP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Wo(n).start(),n.K_.F_()}function ip(n){return As(n)&&!Wo(n).i_()&&n.L_.size>0}function As(n){return Se(n).k_.size===0}function XE(n){n.U_=void 0}async function D1(n){n.K_.set("Online")}async function O1(n){n.L_.forEach((e,t)=>{np(n,e)})}async function L1(n,e){XE(n),ip(n)?(n.K_.O_(e),rp(n)):n.K_.set("Unknown")}async function V1(n,e,t){if(n.K_.set("Online"),e instanceof bE&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.L_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.L_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ic(n,i)}else if(e instanceof ic?n.U_.$e(e):e instanceof VE?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await WE(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.U_.it(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.L_.get(y);E&&l.L_.set(y,E.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const E=l.L_.get(p);if(!E)return;l.L_.set(p,E.withResumeToken(xt.EMPTY_BYTE_STRING,E.snapshotVersion)),YE(l,p);const T=new Ti(E.target,p,y,E.sequenceNumber);np(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await Ic(n,i)}}async function Ic(n,e,t){if(!qo(e))throw e;n.k_.add(1),await wl(n),n.K_.set("Offline"),t||(t=()=>WE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Gc(n)})}function JE(n,e){return e().catch(t=>Ic(n,t,e))}async function Qc(n){const e=Se(n),t=Oi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;b1(e);)try{const o=await v1(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,M1(e,o)}catch(o){await Ic(e,o)}ZE(e)&&ew(e)}function b1(n){return As(n)&&n.B_.length<10}function M1(n,e){n.B_.push(e);const t=Oi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function ZE(n){return As(n)&&!Oi(n).i_()&&n.B_.length>0}function ew(n){Oi(n).start()}async function F1(n){Oi(n).w_()}async function U1(n){const e=Oi(n);for(const t of n.B_)e.g_(t.mutations)}async function j1(n,e,t){const i=n.B_.shift(),o=Qf.from(i,e,t);await JE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Qc(n)}async function B1(n,e){e&&Oi(n).f_&&await async function(i,o){if(function(c){return AP(c)&&c!==Q.ABORTED}(o.code)){const l=i.B_.shift();Oi(i).__(),await JE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Qc(i)}}(n,e),ZE(n)&&ew(n)}async function n_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=As(t);t.k_.add(3),await wl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Gc(t)}async function z1(n,e){const t=Se(n);e?(t.k_.delete(2),await Gc(t)):e||(t.k_.add(2),await wl(t),t.K_.set("Unknown"))}function Wo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new C1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:D1.bind(null,n),mo:O1.bind(null,n),po:L1.bind(null,n),R_:V1.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),ip(n)?rp(n):n.K_.set("Unknown")):(await n.W_.stop(),XE(n))})),n.W_}function Oi(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new k1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:F1.bind(null,n),po:B1.bind(null,n),p_:U1.bind(null,n),y_:j1.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Qc(n)):(await n.G_.stop(),n.B_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new sp(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(n,e){if($r("AsyncQueue",`${e}: ${n}`),qo(n))return new ue(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static emptySet(e){return new ko(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=Ka(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new ko;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.z_=new tt(pe.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Vo{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Vo(e,t,ko.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class q1{constructor(){this.queries=i_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=i_(),l.forEach((c,d)=>{for(const p of d.J_)p.onError(i)})})(this,new ue(Q.ABORTED,"Firestore shutting down"))}}function i_(){return new Ss(n=>wE(n),zc)}async function H1(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new $1,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=op(c,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&ap(t)}async function W1(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.J_.indexOf(e);c>=0&&(l.J_.splice(c,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function K1(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.J_)d.ta(o)&&(i=!0);c.H_=o}}i&&ap(t)}function G1(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function ap(n){n.X_.forEach(e=>{e.next()})}var yf,s_;(s_=yf||(yf={})).na="default",s_.Cache="cache";class Q1{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Vo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==yf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.key=e}}class nw{constructor(e){this.key=e}}class Y1{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=TE(e),this.ma=new ko(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new r_,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const I=o.get(E),x=$c(this.query,T)?T:null,M=!!I&&this.mutatedKeys.has(I.key),H=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let V=!1;I&&x?I.data.isEqual(x.data)?M!==H&&(i.track({type:3,doc:x}),V=!0):this.ya(I,x)||(i.track({type:2,doc:x}),V=!0,(p&&this.Va(x,p)>0||y&&this.Va(x,y)<0)&&(d=!0)):!I&&x?(i.track({type:0,doc:x}),V=!0):I&&!x&&(i.track({type:1,doc:I}),V=!0,(p||y)&&(d=!0)),V&&(x?(c=c.add(x),l=H?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:c,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((E,T)=>function(x,M){const H=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return H(x)-H(M)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,c.length!==0||y?{snapshot:new Vo(this.query,e.ma,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new r_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new nw(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new tw(i))}),t}va(e){this.Ea=e.Es,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Vo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class X1{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class J1{constructor(e){this.key=e,this.Fa=!1}}class Z1{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new Ss(d=>wE(d),zc),this.Oa=new Map,this.Na=new Set,this.Ba=new tt(pe.comparator),this.La=new Map,this.ka=new Jf,this.qa={},this.Qa=new Map,this.Ka=Lo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function eN(n,e,t=!0){const i=lw(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await rw(i,e,t,!0),o}async function tN(n,e){const t=lw(n);await rw(t,e,!0,!1)}async function rw(n,e,t,i){const o=await E1(n.localStore,cr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await nN(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&QE(n.remoteStore,o),d}async function nN(n,e,t,i,o){n.Ua=(T,I,x)=>async function(H,V,W,te){let Y=V.view.ga(W);Y.ss&&(Y=await Zy(H.localStore,V.query,!1).then(({documents:N})=>V.view.ga(N,Y)));const ie=te&&te.targetChanges.get(V.targetId),Ee=te&&te.targetMismatches.get(V.targetId)!=null,ge=V.view.applyChanges(Y,H.isPrimaryClient,ie,Ee);return a_(H,V.targetId,ge.ba),ge.snapshot}(n,T,I,x);const l=await Zy(n.localStore,e,!0),c=new Y1(e,l.Es),d=c.ga(l.documents),p=El.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);a_(n,t,y.ba);const E=new X1(e,t,c);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function rN(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(c=>!zc(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await gf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&tp(i.remoteStore,o.targetId),_f(i,o.targetId)}).catch($o)):(_f(i,o.targetId),await gf(i.localStore,o.targetId,!0))}async function iN(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),tp(t.remoteStore,i.targetId))}async function sN(n,e,t){const i=dN(n);try{const o=await function(c,d){const p=Se(c),y=mt.now(),E=d.reduce((x,M)=>x.add(M.key),Pe());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let M=qr(),H=Pe();return p.hs.getEntries(x,E).next(V=>{M=V,M.forEach((W,te)=>{te.isValidDocument()||(H=H.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,M)).next(V=>{T=V;const W=[];for(const te of d){const Y=wP(te,T.get(te.key).overlayedDocument);Y!=null&&W.push(new Rs(te.key,Y,dE(Y.value.mapValue),jr.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,W,d)}).next(V=>{I=V;const W=V.applyToLocalDocumentSet(T,H);return p.documentOverlayCache.saveOverlays(x,V.batchId,W)})}).then(()=>({batchId:I.batchId,changes:SE(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.qa[c.currentUser.toKey()];y||(y=new tt(xe)),y=y.insert(d,p),c.qa[c.currentUser.toKey()]=y}(i,o.batchId,t),await Tl(i,o.changes),await Qc(i.remoteStore)}catch(o){const l=op(o,"Failed to persist write");t.reject(l)}}async function iw(n,e){const t=Se(n);try{const i=await y1(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.La.get(l);c&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?Ue(c.Fa):o.removedDocuments.size>0&&(Ue(c.Fa),c.Fa=!1))}),await Tl(t,i,e)}catch(i){await $o(i)}}function o_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,c)=>{const d=c.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach((E,T)=>{for(const I of T.J_)I.ea(d)&&(y=!0)}),y&&ap(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function oN(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let c=new tt(pe.comparator);c=c.insert(l,Ut.newNoDocument(l,Ie.min()));const d=Pe().add(l),p=new Wc(Ie.min(),new Map,new tt(xe),c,d);await iw(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),lp(i)}else await gf(i.localStore,e,!1).then(()=>_f(i,e,t)).catch($o)}async function aN(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await g1(t.localStore,e);ow(t,i,null),sw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Tl(t,o)}catch(o){await $o(o)}}async function lN(n,e,t){const i=Se(n);try{const o=await function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Ue(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);ow(i,e,t),sw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Tl(i,o)}catch(o){await $o(o)}}function sw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function ow(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function _f(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||aw(n,i)})}function aw(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(tp(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),lp(n))}function a_(n,e,t){for(const i of t)i instanceof tw?(n.ka.addReference(i.key,e),uN(n,i)):i instanceof nw?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||aw(n,i.key)):Te()}function uN(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(i),lp(n))}function lp(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new pe(Qe.fromString(e)),i=n.Ka.next();n.La.set(i,new J1(t)),n.Ba=n.Ba.insert(t,i),QE(n.remoteStore,new Ti(cr(vE(t.path)),i,"TargetPurposeLimboResolution",Uc.oe))}}async function Tl(n,e,t){const i=Se(n),o=[],l=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{c.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=ep.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(c),i.Ma.R_(o),await async function(p,y){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>K.forEach(y,I=>K.forEach(I.Wi,x=>E.persistence.referenceDelegate.addReference(T,I.targetId,x)).next(()=>K.forEach(I.Gi,x=>E.persistence.referenceDelegate.removeReference(T,I.targetId,x)))))}catch(T){if(!qo(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const x=E.us.get(I),M=x.snapshotVersion,H=x.withLastLimboFreeSnapshotVersion(M);E.us=E.us.insert(I,H)}}}(i.localStore,l))}async function cN(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await HE(t.localStore,e);t.currentUser=e,function(l,c){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new ue(Q.CANCELLED,c))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Tl(t,i.Ts)}}function hN(n,e){const t=Se(n),i=t.La.get(e);if(i&&i.Fa)return Pe().add(i.key);{let o=Pe();const l=t.Oa.get(e);if(!l)return o;for(const c of l){const d=t.xa.get(c);o=o.unionWith(d.view.fa)}return o}}function lw(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oN.bind(null,e),e.Ma.R_=K1.bind(null,e.eventManager),e.Ma.Wa=G1.bind(null,e.eventManager),e}function dN(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lN.bind(null,e),e}class Sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return m1(this.persistence,new f1,e.initialUser,this.serializer)}ja(e){return new qE(Zf.ei,this.serializer)}za(e){return new T1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sc.provider={build:()=>new Sc};class fN extends Sc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof Tc);const i=this.persistence.referenceDelegate.garbageCollector;return new JP(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new qE(i=>Tc.ei(i,t),this.serializer)}}class vf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>o_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=cN.bind(null,this.syncEngine),await z1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new q1}()}createDatastore(e){const t=Kc(e.databaseInfo.databaseId),i=function(l){return new A1(l)}(e.databaseInfo);return function(l,c,d,p){return new P1(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new x1(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>o_(this.syncEngine,t,0),function(){return t_.p()?new t_:new I1}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,E){const T=new Z1(o,l,c,d,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await wl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vf.provider={build:()=>new vf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=uE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ae("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ae("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=op(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Hd(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await HE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function l_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gN(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>n_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>n_(e.remoteStore,o)),n._onlineComponents=e}async function gN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;No("Error using user provided cache. Falling back to memory cache: "+t),await Hd(n,new Sc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Hd(n,new fN(void 0));return n._offlineComponents}async function uw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await l_(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await l_(n,new vf))),n._onlineComponents}function yN(n){return uw(n).then(e=>e.syncEngine)}async function _N(n){const e=await uw(n),t=e.eventManager;return t.onListen=eN.bind(null,e.syncEngine),t.onUnlisten=rN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iN.bind(null,e.syncEngine),t}function vN(n,e,t={}){const i=new Ai;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const E=new pN({next:I=>{E.eu(),c.enqueueAndForget(()=>W1(l,T)),I.fromCache&&p.source==="server"?y.reject(new ue(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Q1(d,E,{includeMetadataChanges:!0,ua:!0});return H1(l,T)}(await _N(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n,e,t){if(!t)throw new ue(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function EN(n,e,t,i){if(e===!0&&i===!0)throw new ue(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function c_(n){if(!pe.isDocumentKey(n))throw new ue(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function h_(n){if(pe.isDocumentKey(n))throw new ue(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function Rc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yc(n);throw new ue(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new kk;switch(i.type){case"firstParty":return new Dk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=u_.get(t);i&&(ae("ComponentProvider","Removing Datastore"),u_.delete(t),i.terminate())}(this),Promise.resolve()}}function wN(n,e,t,i={}){var o;const l=(n=Rc(n,Xc))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&No("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ft.MOCK_USER;else{d=z_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ue(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}n._authCredentials=new Pk(new lE(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mi(this.firestore,e,this._query)}}class Tn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}}class Ci extends Mi{constructor(e,t,i){super(e,t,vE(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new pe(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function dw(n,e,...t){if(n=yt(n),hw("collection","path",e),n instanceof Xc){const i=Qe.fromString(e,...t);return h_(i),new Ci(n,null,i)}{if(!(n instanceof Tn||n instanceof Ci))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return h_(i),new Ci(n.firestore,null,i)}}function TN(n,e,...t){if(n=yt(n),arguments.length===1&&(e=uE.newId()),hw("doc","path",e),n instanceof Xc){const i=Qe.fromString(e,...t);return c_(i),new Tn(n,null,new pe(i))}{if(!(n instanceof Tn||n instanceof Ci))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return c_(i),new Tn(n.firestore,n instanceof Ci?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new KE(this,"async_queue_retry"),this.fu=()=>{const i=qd();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=qd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=qd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Ai;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!qo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw $r("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=sp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class up extends Xc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new f_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new f_(e),this._firestoreClient=void 0,await e}}}function IN(n,e){const t=typeof n=="object"?n:Oc(),i=typeof n=="string"?n:"(default)",o=Vi(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=U_("firestore");l&&wN(o,...l)}return o}function fw(n){if(n._terminated)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SN(n),n._firestoreClient}function SN(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,E){return new Kk(d,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,cw(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new mN(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bo(xt.fromBase64String(e))}catch(t){throw new ue(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bo(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=/^__.*__$/;class AN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,t,this.fieldTransforms):new vl(e,this.data,t,this.fieldTransforms)}}function mw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class fp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new fp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ac(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(mw(this.Mu)&&RN.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class CN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Kc(e)}$u(e,t,i,o=!1){return new fp({Mu:e,methodName:t,Ku:i,path:Nt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gw(n){const e=n._freezeSettings(),t=Kc(n._databaseId);return new CN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kN(n,e,t,i,o,l={}){const c=n.$u(l.merge||l.mergeFields?2:0,e,t,o);vw("Data must be an object, but it was:",c,i);const d=yw(i,c);let p,y;if(l.merge)p=new zn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=NN(e,T,t);if(!c.contains(I))throw new ue(Q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);DN(E,I)||E.push(I)}p=new zn(E),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new AN(new wn(d),p,y)}function PN(n,e,t,i=!1){return pp(t,n.$u(i?4:3,e))}function pp(n,e){if(_w(n=yt(n)))return vw("Unsupported field value:",e,n),yw(n,e);if(n instanceof pw)return function(i,o){if(!mw(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=pp(d,o.ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=yt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return mP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=mt.fromDate(i);return{timestampValue:wc(o.serializer,l)}}if(i instanceof mt){const l=new mt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:wc(o.serializer,l)}}if(i instanceof hp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof bo)return{bytesValue:ME(o.serializer,i._byteString)};if(i instanceof Tn){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Xf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof dp)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return Gf(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Yc(i)}`)}(n,e)}function yw(n,e){const t={};return cE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(n,(i,o)=>{const l=pp(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function _w(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof hp||n instanceof bo||n instanceof Tn||n instanceof pw||n instanceof dp)}function vw(n,e,t){if(!_w(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Yc(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function NN(n,e,t){if((e=yt(e))instanceof cp)return e._internalPath;if(typeof e=="string")return Ew(n,e);throw Ac("Field path arguments must be of type string or ",n,!1,void 0,t)}const xN=new RegExp("[~\\*/\\[\\]]");function Ew(n,e,t){if(e.search(xN)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new cp(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ac(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ue(Q.INVALID_ARGUMENT,d+n+p)}function DN(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ON(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ON extends ww{data(){return super.data()}}function mp(n,e){return typeof e=="string"?Ew(n,e):e instanceof cp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gp{}class yp extends gp{}function VN(n,e,...t){let i=[];e instanceof gp&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof vp).length,d=l.filter(p=>p instanceof _p).length;if(c>1||c>0&&d>0)throw new ue(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class _p extends yp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new _p(e,t,i)}_apply(e){const t=this._parse(e);return Tw(e._query,t),new Mi(e.firestore,e.converter,hf(e._query,t))}_parse(e){const t=gw(e.firestore);return function(l,c,d,p,y,E,T){let I;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){m_(T,E);const x=[];for(const M of T)x.push(p_(p,l,M));I={arrayValue:{values:x}}}else I=p_(p,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||m_(T,E),I=PN(d,c,T,E==="in"||E==="not-in");return ut.create(y,E,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class vp extends gp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)Tw(c,p),c=hf(c,p)}(e._query,t),new Mi(e.firestore,e.converter,hf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ep extends yp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ep(e,t)}_apply(e){const t=function(o,l,c){if(o.startAt!==null)throw new ue(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ul(l,c)}(e._query,this._field,this._direction);return new Mi(e.firestore,e.converter,function(o,l){const c=o.explicitOrderBy.concat([l]);return new Ho(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function bN(n,e="asc"){const t=e,i=mp("orderBy",n);return Ep._create(i,t)}class wp extends yp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new wp(e,t,i)}_apply(e){return new Mi(e.firestore,e.converter,_c(e._query,this._limit,this._limitType))}}function MN(n){return wp._create("limit",n,"F")}function p_(n,e,t){if(typeof(t=yt(t))=="string"){if(t==="")throw new ue(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!EE(e)&&t.indexOf("/")!==-1)throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!pe.isDocumentKey(i))throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Vy(n,new pe(i))}if(t instanceof Tn)return Vy(n,t._key);throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yc(t)}.`)}function m_(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tw(n,e){const t=function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class FN{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Is(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>st(c.doubleValue));return new dp(l)}convertGeoPoint(e){return new hp(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Bc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);Ue($E(i));const o=new al(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||$r(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jN extends ww{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(mp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class sc extends jN{data(e={}){return super.data(e)}}class BN{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Wu(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new sc(this._firestore,this._userDataWriter,i.key,i,new Wu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new sc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Wu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new sc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Wu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),E=c.indexOf(d.doc.key)),{type:zN(d.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class $N extends FN{constructor(e){super(),this.firestore=e}convertBytes(e){return new bo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tn(this.firestore,null,t)}}function qN(n){n=Rc(n,Mi);const e=Rc(n.firestore,up),t=fw(e),i=new $N(e);return LN(n._query),vN(t,n._query).then(o=>new BN(e,i,n,o))}function HN(n,e){const t=Rc(n.firestore,up),i=TN(n),o=UN(n.converter,e);return WN(t,[kN(gw(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,jr.exists(!1))]).then(()=>i)}function WN(n,e){return function(i,o){const l=new Ai;return i.asyncQueue.enqueueAndForget(async()=>sN(await yN(i),o,l)),l.promise}(fw(n),e)}(function(e,t=!0){(function(o){zo=o})(ws),Hn(new In("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new up(new Nk(i.getProvider("auth-internal")),new Lk(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(y.options.projectId,E)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),en(Py,"4.7.6",e),en(Py,"4.7.6","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="firebasestorage.googleapis.com",KN="storageBucket",GN=2*60*1e3,QN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Rn{constructor(e,t,i=0){super(Wd(e),`Firebase Storage: ${t} (${Wd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fr||(fr={}));function Wd(n){return"storage/"+n}function YN(){const n="An unknown error occurred, please check the error payload for server response.";return new pr(fr.UNKNOWN,n)}function XN(){return new pr(fr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JN(){return new pr(fr.CANCELED,"User canceled the upload/download.")}function ZN(n){return new pr(fr.INVALID_URL,"Invalid URL '"+n+"'.")}function ex(n){return new pr(fr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function g_(n){return new pr(fr.INVALID_ARGUMENT,n)}function Sw(){return new pr(fr.APP_DELETED,"The Firebase app was deleted.")}function tx(n){return new pr(fr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=$n.makeFromUrl(e,t)}catch{return new $n(e,"")}if(i.path==="")return i;throw ex(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ie){ie.path.charAt(ie.path.length-1)==="/"&&(ie.path_=ie.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(ie){ie.path_=decodeURIComponent(ie.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",x=new RegExp(`^https?://${T}/${E}/b/${o}/o${I}`,"i"),M={bucket:1,path:3},H=t===Iw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",W=new RegExp(`^https?://${H}/${o}/${V}`,"i"),Y=[{regex:d,indices:p,postModify:l},{regex:x,indices:M,postModify:y},{regex:W,indices:{bucket:1,path:2},postModify:y}];for(let ie=0;ie<Y.length;ie++){const Ee=Y[ie],ge=Ee.regex.exec(e);if(ge){const N=ge[Ee.indices.bucket];let S=ge[Ee.indices.path];S||(S=""),i=new $n(N,S),Ee.postModify(i);break}}if(i==null)throw ZN(e);return i}}class nx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function E(...V){y||(y=!0,e.apply(null,V))}function T(V){o=setTimeout(()=>{o=null,n(x,p())},V)}function I(){l&&clearTimeout(l)}function x(V,...W){if(y){I();return}if(V){I(),E.call(null,V,...W);return}if(p()||c){I(),E.call(null,V,...W);return}i<64&&(i*=2);let Y;d===1?(d=2,Y=0):Y=(i+Math.random())*1e3,T(Y)}let M=!1;function H(V){M||(M=!0,I(),!y&&(o!==null?(V||(d=2),clearTimeout(o),T(0)):V||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,H(!0)},t),H}function ix(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(n){return n!==void 0}function y_(n,e,t,i){if(i<e)throw g_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw g_(`Invalid value for '${n}'. Expected ${t} or less.`)}function ox(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Cc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Cc||(Cc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t,i,o,l,c,d,p,y,E,T,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,M)=>{this.resolve_=x,this.reject_=M,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Ku(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Cc.NO_ERROR,p=l.getStatus();if(!d||ax(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Cc.ABORT;i(!1,new Ku(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new Ku(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());sx(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=YN();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?Sw():JN();c(p)}else{const p=XN();c(p)}};this.canceled_?t(!1,new Ku(!1,null,!0)):this.backoffId_=rx(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ix(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ku{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function ux(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function cx(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function dx(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function fx(n,e,t,i,o,l,c=!0){const d=ox(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return hx(y,e),ux(y,t),cx(y,l),dx(y,i),new lx(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function mx(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this._service=e,t instanceof $n?this._location=t:this._location=$n.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new kc(e,t)}get root(){const e=new $n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mx(this._location.path)}get storage(){return this._service}get parent(){const e=px(this._location.path);if(e===null)return null;const t=new $n(this._location.bucket,e);return new kc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw tx(e)}}function __(n,e){const t=e==null?void 0:e[KN];return t==null?null:$n.makeFromBucketSpec(t,n)}function gx(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:z_(o,n.app.options.projectId))}class yx{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=Iw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GN,this._maxUploadRetryTime=QN,this._requests=new Set,o!=null?this._bucket=$n.makeFromBucketSpec(o,this._host):this._bucket=__(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$n.makeFromBucketSpec(this._url,e):this._bucket=__(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){y_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){y_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new nx(Sw());{const c=fx(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const v_="@firebase/storage",E_="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="storage";function _x(n=Oc(),e){n=yt(n);const i=Vi(n,Rw).getImmediate({identifier:e}),o=U_("storage");return o&&vx(i,...o),i}function vx(n,e,t,i={}){gx(n,e,t,i)}function Ex(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new yx(t,i,o,e,ws)}function wx(){Hn(new In(Rw,Ex,"PUBLIC").setMultipleInstances(!0)),en(v_,E_,""),en(v_,E_,"esm2017")}wx();const Tx={apiKey:"AIzaSyABcde7nM8mLPxXcU0Yw_yvNG8kx_8sFqU",authDomain:"fbclaseprueba.firebaseapp.com",projectId:"fbclaseprueba",storageBucket:"fbclaseprueba.firebasestorage.app",messagingSenderId:"289227959964",appId:"1:289227959964:web:c8648867fb850880c2c759",measurementId:"G-KXHB67QBSN"},Jc=Q_(Tx);Sk(Jc);const Tp=sl(Jc),Aw=IN(Jc);_x(Jc);function Ix(){const[n,e]=B.useState(""),[t,i]=B.useState(""),[o,l]=B.useState(""),[c,d]=B.useState(!1),p=async y=>{y.preventDefault(),d(!0),l("");try{const E=await z0(Tp,n,t);console.log("Inicio de sesión exitoso, usuario:",E.user.email)}catch(E){switch(console.error("Error al iniciar sesión:",E.message),E.code){case"auth/invalid-email":l("El correo electrónico no es válido.");break;case"auth/user-not-found":l("No existe una cuenta con este correo.");break;case"auth/wrong-password":l("Contraseña incorrecta. Inténtalo de nuevo.");break;case"auth/too-many-requests":l("Demasiados intentos fallidos. Inténtalo más tarde.");break;default:l("Error al iniciar sesión. Verifica tus datos.")}}finally{d(!1)}};return q.jsxs("div",{children:[q.jsx("h2",{children:"Iniciar Sesión"}),q.jsxs("form",{onSubmit:p,children:[q.jsxs("div",{children:[q.jsx("label",{htmlFor:"email",children:"Email:"}),q.jsx("input",{id:"email",type:"email",value:n,onChange:y=>e(y.target.value),placeholder:"Ingresa tu email",required:!0})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"password",children:"Contraseña:"}),q.jsx("input",{id:"password",type:"password",value:t,onChange:y=>i(y.target.value),placeholder:"Ingresa tu contraseña",required:!0})]}),q.jsx("button",{type:"submit",disabled:c,children:c?"Ingresando...":"Entrar"})]}),o&&q.jsx("p",{style:{color:"red"},children:o})]})}function Sx(){const[n,e]=B.useState(""),[t,i]=B.useState(""),[o,l]=B.useState(""),[c,d]=B.useState(""),[p,y]=B.useState(""),E=jo(),T=async I=>{I.preventDefault(),d(""),y("");try{const M=(await B0(Tp,n,t)).user;await q0(M,{displayName:o}),y(`¡Bienvenido, ${o}! Registro exitoso.`),setTimeout(()=>E("/"),2e3)}catch(x){switch(console.error("Error al registrar:",x.message),x.code){case"auth/email-already-in-use":d("El correo electrónico ya está registrado.");break;case"auth/invalid-email":d("El correo electrónico no es válido.");break;case"auth/weak-password":d("La contraseña debe tener al menos 6 caracteres.");break;default:d("Error al registrar: "+x.message)}}};return q.jsxs("div",{style:Or.container,children:[q.jsx("h2",{style:Or.title,children:"Registro"}),q.jsxs("form",{onSubmit:T,style:Or.form,children:[q.jsx("input",{type:"text",placeholder:"Nombre",value:o,onChange:I=>l(I.target.value),style:Or.input,required:!0}),q.jsx("input",{type:"email",placeholder:"Correo Electrónico",value:n,onChange:I=>e(I.target.value),style:Or.input,required:!0}),q.jsx("input",{type:"password",placeholder:"Contraseña",value:t,onChange:I=>i(I.target.value),style:Or.input,required:!0}),q.jsx("button",{type:"submit",style:Or.button,children:"Registrarse"})]}),p&&q.jsx("p",{style:Or.success,children:p})," ",c&&q.jsx("p",{style:Or.error,children:c})," "]})}const Or={container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(to bottom, #e0f7fa, #80deea)",padding:"20px"},title:{fontSize:"2rem",fontWeight:"bold",color:"#00796b",marginBottom:"20px"},form:{display:"flex",flexDirection:"column",gap:"10px",width:"300px"},input:{padding:"10px",border:"1px solid #ccc",borderRadius:"5px",fontSize:"1rem"},button:{padding:"10px",backgroundColor:"#00796b",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"1rem",fontWeight:"bold",transition:"background-color 0.3s"},success:{marginTop:"10px",color:"#388e3c",fontWeight:"bold"},error:{marginTop:"10px",color:"#d32f2f",fontWeight:"bold"}};function Rx(){const[n,e]=B.useState([]),[t,i]=B.useState("https://pokeapi.co/api/v2/pokemon?limit=8");B.useEffect(()=>{o()},[]);const o=async()=>{if(t)try{const c=await(await fetch(t)).json();e(d=>[...d,...c.results.filter(p=>!d.some(y=>y.name===p.name))]),i(c.next)}catch(l){console.error("Error al cargar los Pokémon:",l)}};return q.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[q.jsx("h1",{style:{fontSize:"2rem",marginBottom:"20px"},children:"Lista de Pokémons"}),q.jsx("ul",{style:{display:"flex",flexWrap:"wrap",listStyleType:"none",padding:0,justifyContent:"center",gap:"15px"},children:n.map((l,c)=>{const d=l.url.split("/")[l.url.split("/").length-2];return q.jsx("li",{style:{textAlign:"center",width:"12%",background:"#f8f8f8",padding:"10px",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0,0,0,0.2)",transition:"transform 0.2s ease-in-out"},children:q.jsxs(Lr,{to:`/detalle/${d}`,style:{textDecoration:"none",color:"black"},children:[q.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d}.png`,alt:`Imagen de ${l.name}`,style:{width:"120px",height:"120px",transition:"transform 0.3s ease-in-out"}}),q.jsx("p",{style:{fontSize:"1rem",fontWeight:"bold",marginTop:"5px",transition:"color 0.3s ease-in-out"},children:l.name.toUpperCase()})]})},c)})}),t&&q.jsx("button",{onClick:o,style:{marginTop:"20px",padding:"10px 20px",fontSize:"1rem",backgroundColor:"#2a9d8f",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",transition:"background-color 0.3s ease-in-out"},children:"Cargar más"})]})}function Ax(){const[n,e]=B.useState(null),[t,i]=B.useState(""),[o,l]=B.useState(""),[c,d]=B.useState(!1),[p,y]=B.useState(0),[E,T]=B.useState(0),[I,x]=B.useState(localStorage.getItem("recordPuntos")||0),[M,H]=B.useState(""),[V,W]=B.useState(0),[te,Y]=B.useState(3),[ie,Ee]=B.useState(!1);B.useEffect(()=>{ge()},[]),B.useEffect(()=>{if(V>0){const O=setTimeout(()=>{W(V-1)},1e3);return()=>clearTimeout(O)}else if(V===0&&p>=3&&n){const O=n.types.map(C=>C.type.name).join(", ");H(`Pista: Es de tipo ${O}`)}},[V,p,n]);function ge(){const O=Math.floor(Math.random()*1010)+1;fetch(`https://pokeapi.co/api/v2/pokemon/${O}`).then(C=>C.json()).then(C=>{e(C),d(!1),N()}).catch(()=>l("Error al cargar el Pokémon. Inténtalo nuevamente."))}function N(){l(""),i(""),y(0),Y(3),W(0),H(""),Ee(!1)}function S(){n&&n.cries&&n.cries.latest&&new Audio(n.cries.latest).play()}function A(O){const $e=sl().currentUser;$e&&HN(dw(Aw,"rankings"),{userId:$e.uid,nombre:$e.displayName||$e.email,puntos:O,timestamp:new Date}).catch(_t=>console.error("Error al guardar la puntuación:",_t))}function P(){if(!n||t.trim()===""){l("Por favor, escribe una respuesta antes de verificar.");return}if(t.toLowerCase()===n.name.toLowerCase()){l(`¡Correcto! Era ${n.name}`),d(!0);const O=E+1;O>I&&(x(O),localStorage.setItem("recordPuntos",O)),A(O),T(O),setTimeout(ge,1500)}else L()}function L(){const O=p+1;y(O),i(""),Y(3-O),O===3?(l("Fallaste 3 veces. La pista aparecerá en 5 segundos..."),W(5)):O===4?l("Te queda 1 fallo para desbloquear el sonido."):O===5?(l("Se ha desbloqueado el sonido del Pokémon."),Ee(!0)):l("")}return q.jsxs("div",{className:"juego-container",children:[q.jsx("h1",{className:"titulo",children:"Adivina el Pokémon"}),q.jsxs("h2",{className:"record",children:["Puntos: ",E," | Récord: ",I]}),n&&q.jsxs(q.Fragment,{children:[q.jsx("img",{src:n.sprites.other["official-artwork"].front_default,alt:`Silueta de ${n.name}`,className:"pokemon-imagen",style:{filter:c?"none":"grayscale(100%) contrast(0%)"}}),q.jsx("br",{}),q.jsx("input",{type:"text",value:t,onChange:O=>i(O.target.value),placeholder:"Escribe el nombre del Pokémon",className:"input-texto"}),q.jsx("button",{onClick:P,className:"boton",children:"Verificar"}),q.jsx("button",{onClick:ge,className:"boton",children:"Nuevo Pokémon"}),q.jsx("p",{className:"mensaje",children:o}),te>0&&p<3&&q.jsxs("p",{className:"intentos-restantes",children:["Te quedan ",te," intentos antes de la pista."]}),V>0&&q.jsxs("p",{className:"contador-pista",children:["La pista aparecerá en ",V," segundos..."]}),M&&q.jsx("p",{className:"pista",children:M}),ie&&q.jsx("button",{onClick:S,className:"boton boton-sonido",children:"Escuchar sonido del Pokémon"})]})]})}function Cx(){const n=jo();return B.useEffect(()=>{(async()=>{try{await Tp.signOut(),alert("Has cerrado sesión con éxito."),n("/")}catch(t){console.error("Error al cerrar sesión:",t.message),alert("Hubo un error al cerrar sesión. Inténtalo de nuevo.")}})()},[n]),q.jsx("div",{style:w_.container,children:q.jsx("h2",{style:w_.message,children:"Cerrando sesión..."})})}const w_={container:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(to bottom, #e0f7fa, #80deea)"},message:{fontSize:"1.5rem",color:"#00796b",fontWeight:"bold"}};function kx(){const{idPokemon:n}=gI(),e=jo(),[t,i]=B.useState(null),[o,l]=B.useState(!0);if(B.useEffect(()=>{fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then(I=>I.json()).then(I=>i(I)).catch(I=>console.error("Error:",I)).finally(()=>l(!1))},[n]),o)return q.jsx("p",{children:"Cargando detalles..."});if(!t)return q.jsx("p",{children:"No se encontraron detalles para este Pokémon."});const{name:c,height:d,weight:p,types:y,abilities:E,sprites:T}=t;return q.jsx("div",{className:"modal-overlay",children:q.jsxs("div",{className:"modal",children:[q.jsx("button",{className:"cerrar-modal",onClick:()=>e(-1),children:"✖"}),q.jsx("h1",{className:"detalle-nombre",children:c.toUpperCase()}),q.jsx("img",{src:T.other["official-artwork"].front_default,alt:c,className:"detalle-imagen"}),q.jsxs("p",{children:[q.jsx("strong",{children:"Altura:"})," ",d/10," m"]}),q.jsxs("p",{children:[q.jsx("strong",{children:"Peso:"})," ",p/10," kg"]}),q.jsxs("p",{children:[q.jsx("strong",{children:"Tipos:"})," ",y.map(I=>I.type.name).join(", ")]}),q.jsxs("p",{children:[q.jsx("strong",{children:"Habilidades:"})," ",E.map(I=>I.ability.name).join(", ")]})]})})}function Px(){return q.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[q.jsx("h1",{children:"404"}),q.jsx("p",{children:"Página no encontrada"})]})}function Nx(){const[n,e]=B.useState(null),t=jo();B.useEffect(()=>{const o=sl(),l=Iv(o,c=>{e(c?c.displayName||c.email:null)});return()=>l()},[t]);const i=async()=>{const o=sl();await K0(o)};return q.jsx("header",{children:q.jsxs("nav",{className:"navbar",children:[q.jsxs("div",{children:[q.jsx(Lr,{to:"/",children:"Inicio"}),q.jsx(Lr,{to:"/pokemons",children:"Pokemons"}),q.jsx(Lr,{to:"/jugar",children:"Jugar"}),q.jsx(Lr,{to:"/ranking",children:"Ranking"})]}),q.jsx("div",{className:"usuario-container",children:n?q.jsxs(q.Fragment,{children:[q.jsxs("span",{className:"usuario",children:["Bienvenido, ",n,"!"]}),q.jsx("button",{onClick:i,className:"logout-btn",children:"Cerrar Sesión"})]}):q.jsxs(q.Fragment,{children:[q.jsx(Lr,{to:"/login",children:"Iniciar Sesión"}),q.jsx(Lr,{to:"/registro",children:"Registro"})]})})]})})}function xx(){const[n,e]=B.useState([]),[t,i]=B.useState(!0);return B.useEffect(()=>{async function o(){try{console.log("Iniciando consulta a Firestore...");const l=dw(Aw,"rankings"),c=VN(l,bN("puntos","desc"),MN(10)),d=await qN(c);console.log("QuerySnapshot recibido:",d);const p=d.docs.map(y=>(console.log("Documento obtenido:",y.id,y.data()),{id:y.id,...y.data()}));console.log("Datos mapeados:",p),e(p)}catch(l){console.error("Error al cargar los rankings:",l)}finally{i(!1)}}o()},[]),t?q.jsx("p",{children:"Cargando el ranking..."}):q.jsxs("div",{className:"ranking-container",children:[q.jsx("h1",{className:"ranking-titulo",children:"Ranking de Puntuaciones"}),n.length>0?q.jsxs("table",{className:"ranking-tabla",children:[q.jsx("thead",{children:q.jsxs("tr",{children:[q.jsx("th",{children:"Posición"}),q.jsx("th",{children:"Usuario"}),q.jsx("th",{children:"Puntos"})]})}),q.jsx("tbody",{children:n.map((o,l)=>q.jsxs("tr",{children:[q.jsx("td",{children:l+1}),q.jsx("td",{children:o.nombre}),q.jsx("td",{children:o.puntos})]},o.id))})]}):q.jsx("p",{children:"No hay puntuaciones registradas aún."})]})}function Dx(){return q.jsxs(rS,{children:[q.jsx(Nx,{}),q.jsx("main",{children:q.jsxs(OI,{children:[q.jsx(Bn,{path:"/",element:q.jsx(oC,{})}),q.jsx(Bn,{path:"/login",element:q.jsx(Ix,{})}),q.jsx(Bn,{path:"/registro",element:q.jsx(Sx,{})}),q.jsx(Bn,{path:"/pokemons",element:q.jsx(Rx,{})}),q.jsx(Bn,{path:"/detalle/:idPokemon",element:q.jsx(kx,{})}),q.jsx(Bn,{path:"/cerrar-sesion",element:q.jsx(Cx,{})}),q.jsx(Bn,{path:"/ranking",element:q.jsx(xx,{})}),q.jsx(Bn,{element:q.jsx(sC,{}),children:q.jsx(Bn,{path:"/jugar",element:q.jsx(Ax,{})})}),q.jsx(Bn,{path:"*",element:q.jsx(Px,{})})]})})]})}FT.createRoot(document.getElementById("root")).render(q.jsx(B.StrictMode,{children:q.jsx(Dx,{})}));
