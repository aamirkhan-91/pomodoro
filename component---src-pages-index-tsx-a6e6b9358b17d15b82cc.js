"use strict";(self.webpackChunkpomodoro_app=self.webpackChunkpomodoro_app||[]).push([[691],{9302:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(5450),a=n(7294),o=function(){var e=(0,a.useContext)(r.ax),t=e.state,n=e.dispatch,o=t.timerSettings,s=t.isPaused,l=t.isRunning,i=t.selectedOption,c=t.progress,u=(0,a.useCallback)((function(e){n({type:r.L0.SET_TIMER_SETTINGS,payload:e})}),[n]),d=(0,a.useCallback)((function(e){n({type:r.L0.SET_PAUSED,payload:e})}),[n]),m=(0,a.useCallback)((function(e){n({type:r.L0.SET_RUNNING,payload:e})}),[n]),p=(0,a.useCallback)((function(e){n({type:r.L0.SET_OPTION,payload:e})}),[n]),f=(0,a.useCallback)((function(){n({type:r.L0.UPDATE_PROGRES})}),[n]);return{selectedOption:i,progress:c,isPaused:s,isRunning:l,timerSettings:o,restart:(0,a.useCallback)((function(){n({type:r.L0.RESTART})}),[n]),updateProgress:f,setTimerSettings:u,setIsPaused:d,setIsRunning:m,setSelectedOption:p}},s=n(7947),l=function(){var e=(0,a.useContext)(s.Ni),t=e.state,n=e.dispatch;return{selectedFont:t.selectedFont,selectedColor:t.selectedColor,setFont:(0,a.useCallback)((function(e){n({type:s.to.SET_FONT,payload:e})}),[n]),setColor:(0,a.useCallback)((function(e){n({type:s.to.SET_COLOR,payload:e})}),[n])}};function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function c(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}var u=function(e){var t=e.children,n=e.className,r=e.onClick,o=["rounded-r-full","rounded-l-full","py-4","px-11","text-white","transition-all","duration-200"];switch(l().selectedColor){case"blue":o=o.concat("bg-blue");break;case"pink":o=o.concat("bg-pink");break;case"red":o=o.concat("bg-red")}return a.createElement("button",{className:c(n,o),onClick:r},t)},d=function(){return a.createElement("svg",{width:"15",height:"11",viewBox:"0 0 15 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M1 5.5L4.95263 9.45263L13.4053 1",stroke:"#161932",strokeWidth:"2"}))},m=function(){return a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.3639 2.05044L11.9497 0.63623L6.99995 5.58598L2.0502 0.63623L0.635986 2.05044L5.58573 7.00019L0.635986 11.9499L2.0502 13.3642L6.99995 8.4144L11.9497 13.3642L13.3639 11.9499L8.41416 7.00019L13.3639 2.05044Z",fill:"#1E213F"}))},p=function(){return a.createElement("svg",{width:"14",height:"7",viewBox:"0 0 14 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M1 1L7 5L13 1",stroke:"#1E213F",strokeOpacity:"0.25",strokeWidth:"2"}))},f=function(e){var t=e.className,n=void 0===t?"":t;return a.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:n},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.0378 15.365L26.9654 17.682C27.229 17.899 27.3054 18.2771 27.1318 18.578L24.3568 23.429C24.1834 23.73 23.8226 23.849 23.5104 23.73L20.0555 22.323C19.341 22.883 18.557 23.345 17.7106 23.702L17.1903 27.412C17.1348 27.741 16.8504 28 16.5035 28H10.9535C10.6066 28 10.3221 27.741 10.2666 27.412L9.74633 23.702C8.89997 23.345 8.11604 22.8761 7.40145 22.323L3.94654 23.73C3.63435 23.856 3.27364 23.73 3.10018 23.429L0.325132 18.578C0.151671 18.27 0.228028 17.892 0.491634 17.682L3.41927 15.365C3.36379 14.917 3.32216 14.462 3.32216 14C3.32216 13.538 3.36379 13.083 3.41927 12.635L0.491634 10.318C0.228028 10.101 0.151671 9.72302 0.325132 9.42199L3.10025 4.57099C3.27364 4.26996 3.63442 4.15098 3.94661 4.26996L7.40152 5.67697C8.11604 5.11699 8.90003 4.65499 9.74639 4.29799L10.2667 0.588001C10.3222 0.259022 10.6067 0 10.9535 0H16.5036C16.8504 0 17.1348 0.259022 17.1973 0.588001L17.7177 4.29799C18.564 4.65499 19.3479 5.12394 20.0625 5.67697L23.5174 4.26996C23.8296 4.14396 24.1903 4.26996 24.3638 4.57099L27.1389 9.42199C27.3123 9.72997 27.236 10.108 26.9724 10.318L24.0378 12.635C24.0932 13.083 24.1349 13.538 24.1349 14C24.1349 14.462 24.0932 14.917 24.0378 15.365ZM8.8722 14C8.8722 16.709 11.0437 18.9 13.7285 18.9C16.4134 18.9 18.5848 16.7091 18.5848 14.0001C18.5848 11.2911 16.4134 9.10004 13.7285 9.10004C11.0437 9.10004 8.8722 11.291 8.8722 14Z",fill:"#D7E0FF"}))},b=function(){return a.createElement("svg",{width:"14",height:"7",viewBox:"0 0 14 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M1 6L7 2L13 6",stroke:"#1E213F",strokeOpacity:"0.25",strokeWidth:"2"}))},E=function(e){var t=e.value,n=e.onChange,r=e.onIncrement,o=e.onDecrement,s=e.className,l=void 0===s?"":s;return a.createElement("div",{className:c("relative",l)},a.createElement("input",{className:c("rounded-l-xl rounded-r-xl py-2 bg-bg-light indent-4 w-full"),type:"number",min:"0",value:t,onChange:n}),a.createElement("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1"},a.createElement("button",{className:"p-1",onClick:function(){return t<60?r():null}},a.createElement(b,null)),a.createElement("button",{className:"p-1",onClick:function(){return t>1?o():null}},a.createElement(p,null))))},h=function(e){var t=e.variant,n=e.color,r=void 0===n?"primary":n,o=e.align,s=e.className,i=void 0===s?"":s,u=e.children,d=[i];switch(l().selectedFont){case"mono":d=d.concat("font-mono");break;case"sans":d=d.concat("font-sans");break;case"serif":d=d.concat("font-serif")}switch(r){case"primary":d=d.concat("text-primary");break;case"dark":d=d.concat("text-dark");break;case"white":d=d.concat("text-white")}switch(o){case"center":d=d.concat("text-center");break;case"right":d=d.concat("text-right");break;case"left":d=d.concat("text-left")}return"H1"===t?(d=d.concat("text-H1-mobile tablet:text-H1"),a.createElement("h1",{className:c(d)},u)):"H2"===t?(d=d.concat("text-H2"),a.createElement("h2",{className:c(d)},u)):"H3"===t?(d=d.concat("text-H3"),a.createElement("h3",{className:c(d)},u)):"H4"===t?(d=d.concat("text-H14"),a.createElement("h4",{className:c(d)},u)):"Body1"===t?(d=d.concat("text-Body1"),a.createElement("p",{className:c(d)},u)):a.createElement("p",{className:c(d,"text-Body2")},u)},g=function(e){var t,n,r=e.title,o=e.controlOption,s=e.isActive,i=void 0!==s&&s,u=e.onClick;switch(l().selectedColor){case"blue":n="bg-blue";break;case"pink":n="bg-pink";break;case"red":n="bg-red"}return a.createElement("button",{className:c("w-[110px] tablet:w-[120px] py-4 px-5 rounded-l-full rounded-r-full flex-1 transition-colors duration-150 group",(t={},t[n]=i,t)),onClick:function(){return u(o)}},a.createElement(h,{align:"center",color:i?"dark":"primary",className:c("group-hover:text-opacity-100 transition-colors duration-200",{"text-opacity-40":!i}),variant:"Body2"},r))},x=function(e){var t=e.selectedOption,n=e.onOptionChanged;return a.createElement("div",{className:"flex bg-bg-dark rounded-r-full rounded-l-full p-2 overflow-hidden"},a.createElement(g,{isActive:"pomodoro"===t,controlOption:"pomodoro",title:"pomodoro",onClick:function(e){return n(e)}}),a.createElement(g,{isActive:"short_break"===t,controlOption:"short_break",title:"short break",onClick:function(e){return n(e)}}),a.createElement(g,{isActive:"long_break"===t,controlOption:"long_break",title:"long break",onClick:function(e){return n(e)}}))},v=function(e){var t,n,r,s=e.duration,i=e.onStart,u=e.onPause,d=e.onRestart,m=e.onResume,p=o(),f=p.progress,b=p.isRunning,E=p.isPaused,g=l().selectedColor;switch(t=b?s>f?"PAUSE":"RESTART":E?"RESUME":"START",g){case"blue":n="text-blue",r="hover:text-blue";break;case"pink":n="text-pink",r="hover:text-pink";break;case"red":n="text-red",r="hover:text-red"}var x,v,k=a.createElement("button",{onClick:function(){b?s>f?u():d():E?m():i()},className:"w-full"},a.createElement(h,{align:"center",className:"-mr-3 transition-color duration-200 "+r,variant:"H3"},t));return a.createElement("div",{className:"clock-container w-[300px] h-[300px] tablet:w-[410px] tablet:h-[410px]  rounded-full my-auto relative "+n},a.createElement("div",{className:"absolute w-9/10 h-9/10 bg-bg-dark rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},a.createElement("svg",{className:"w-full h-full transition-colors duration-150",viewBox:"0 0 100 100"},a.createElement("circle",{style:{strokeDasharray:295.348,strokeDashoffset:f/s*2*3.142*47},cx:"50",cy:"50",r:"47",fill:"none",strokeWidth:"3",strokeLinecap:"round",className:"stroke-current transform origin-center -rotate-90 transition-stroke"})),a.createElement("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},a.createElement(h,{className:c({"animate-blink":E}),variant:"H1"},(v=(x=s-f)%60,Math.floor(x/60).toString().padStart(2,"0")+":"+v.toString().padStart(2,"0"))),a.createElement("div",{className:"absolute flex flex-col items-center top-full left-1/2 transform -translate-x-1/2"},k))))},k=function(){var e=o(),t=e.selectedOption,n=e.timerSettings,r=e.progress,s=e.isRunning,l=e.updateProgress,i=e.setIsPaused,c=e.setIsRunning,u=e.setSelectedOption,d=e.restart,m=(0,a.useRef)(null),p=60*n[t];(0,a.useEffect)((function(){c(!1),i(!1)}),[i,c,n]),(0,a.useEffect)((function(){if(s)return m.current=setTimeout((function(){r<p&&l()}),1e3),r===p&&clearTimeout(m.current),function(){return clearTimeout(m.current)}}),[p,s,r,l]);return a.createElement("div",{className:"flex flex-col flex-1 justify-between items-center"},a.createElement(x,{selectedOption:t,onOptionChanged:function(e){u(e)}}),a.createElement(v,{duration:p,onStart:function(){c(!0)},onPause:function(){i(!0),c(!1),clearTimeout(m.current)},onRestart:function(){d()},onResume:function(){i(!1),c(!0)}}))},C=n(3935);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var y=n(1721);function S(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var L=!1,O=a.createContext(null),T="unmounted",R="exited",j="entering",A="entered",_="exiting",I=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=R,r.appearStatus=j):a=A:a=t.unmountOnExit||t.mountOnEnter?T:R,r.state={status:a},r.nextCallback=null,r}(0,y.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===T?{status:R}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==j&&n!==A&&(t=j):n!==j&&n!==A||(t=_)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===j?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===R&&this.setState({status:T})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[C.findDOMNode(this),r],o=a[0],s=a[1],l=this.getTimeouts(),i=r?l.appear:l.enter;!e&&!n||L?this.safeSetState({status:A},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:j},(function(){t.props.onEntering(o,s),t.onTransitionEnd(i,(function(){t.safeSetState({status:A},(function(){t.props.onEntered(o,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:C.findDOMNode(this);t&&!L?(this.props.onExit(r),this.safeSetState({status:_},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:R},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:R},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],s=a[1];this.props.addEndListener(o,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===T)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,w(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(O.Provider,{value:null},"function"==typeof n?n(e,r):a.cloneElement(a.Children.only(n),r))},t}(a.Component);function P(){}I.contextType=O,I.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:P,onEntering:P,onEntered:P,onExit:P,onExiting:P,onExited:P},I.UNMOUNTED=T,I.EXITED=R,I.ENTERING=j,I.ENTERED=A,I.EXITING=_;var D=I,H=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=S(n.className,r):n.setAttribute("class",S(n.className&&n.className.baseVal||"",r)));var n,r}))},M=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),a=r[0],o=r[1];t.removeClasses(a,"exit"),t.addClass(a,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),a=r[0],o=r[1]?"appear":"enter";t.addClass(a,o,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),a=r[0],o=r[1]?"appear":"enter";t.removeClasses(a,o),t.addClass(a,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,a=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}(0,y.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(r+=" "+a),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,a=n.active,o=n.done;this.appliedClasses[t]={},r&&H(e,r),a&&H(e,a),o&&H(e,o)},n.render=function(){var e=this.props,t=(e.classNames,w(e,["classNames"]));return a.createElement(D,N({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(a.Component);M.defaultProps={classNames:""};var F=M,B=function(){var e="undefined"!=typeof window,t=(0,a.useState)(!1),n=t[0],r=t[1],s=e&&document.querySelector("#modal-root"),i=(0,a.useState)(null),p=i[0],b=i[1],g=(0,a.useState)(null),x=g[0],v=g[1],k=(0,a.useState)(null),N=k[0],w=k[1],y=l(),S=y.selectedFont,L=y.selectedColor,O=y.setFont,T=y.setColor,R=o(),j=R.timerSettings,A=R.setTimerSettings;(0,a.useEffect)((function(){S&&b(S)}),[S,n]),(0,a.useEffect)((function(){L&&v(L)}),[L,n]),(0,a.useEffect)((function(){j&&w(j)}),[j,n]);var _=null;return s&&(_=(0,C.createPortal)(a.createElement(a.Fragment,null,a.createElement(F,{unmountOnExit:!0,timeout:300,in:n,classNames:"backdrop"},a.createElement("div",{role:"presentation",className:"absolute h-screen w-full top-0 left-0 z-10 flex justify-center items-center",onClick:function(){return r(!1)},onKeyDown:function(e){"27"===e.key&&r(!1)}})),a.createElement(F,{timeout:300,in:n,unmountOnExit:!0,classNames:"dialog"},N&&x&&p?a.createElement("div",{className:"max-w-[327px] tablet:max-w-[540px] absolute w-full bg-white rounded-lg z-20"},a.createElement("div",{className:"p-6 flex justify-between items-center border-b border-divider"},a.createElement(h,{variant:"H2",color:"dark"},"Settings"),a.createElement("button",{className:"rounded-full bg-bg-light bg-opacity-0 hover:bg-opacity-100 transition-colors duration-200 w-8 h-8 flex justify-center items-center",onClick:function(){return r(!1)}},a.createElement(m,null))),a.createElement("div",{className:"px-6"},a.createElement("div",{className:"pb-6 pt-6 border-b border-divider"},a.createElement(h,{variant:"H4",className:"text-center tablet:text-left",color:"dark"},"TIME (MINUTES)"),a.createElement("div",{className:"flex flex-col space-y-5 mt-4 tablet:flex-row tablet:space-y-0 tablet:space-x-4"},a.createElement("div",{className:"flex tablet:flex-col tablet:space-y-2 justify-between items-center tablet:items-start"},a.createElement(h,{variant:"Body2"},"pomodoro"),a.createElement(E,{className:"w-1/2 tablet:w-full",value:N.pomodoro,onChange:function(e){return w(Object.assign({},N,{pomodoro:Number.parseInt(e.target.value,10)}))},onIncrement:function(){return w(Object.assign({},N,{pomodoro:N.pomodoro+1}))},onDecrement:function(){return w(Object.assign({},N,{pomodoro:N.pomodoro-1}))}})),a.createElement("div",{className:"flex tablet:flex-col tablet:space-y-2 justify-between items-center tablet:items-start"},a.createElement(h,{variant:"Body2"},"short break"),a.createElement(E,{className:"w-1/2 tablet:w-full",value:N.short_break,onChange:function(e){return w(Object.assign({},N,{short_break:Number.parseInt(e.target.value,10)}))},onIncrement:function(){return w(Object.assign({},N,{short_break:N.short_break+1}))},onDecrement:function(){return w(Object.assign({},N,{short_break:N.short_break-1}))}})),a.createElement("div",{className:"flex tablet:flex-col tablet:space-y-2 justify-between items-center tablet:items-start"},a.createElement(h,{variant:"Body2"},"long break"),a.createElement(E,{className:"w-1/2 tablet:w-full",value:N.long_break,onChange:function(e){return w(Object.assign({},N,{long_break:Number.parseInt(e.target.value,10)}))},onIncrement:function(){return w(Object.assign({},N,{long_break:N.long_break+1}))},onDecrement:function(){return w(Object.assign({},N,{long_break:N.long_break-1}))}})))),a.createElement("div",{className:"pb-6 pt-6 border-b border-divider tablet:flex tablet:items-center tablet:justify-between"},a.createElement(h,{variant:"H4",align:"center",color:"dark"},"FONT"),a.createElement("div",{className:"mt-4 tablet:mt-0 flex space-x-1 justify-center"},a.createElement("button",{className:c("rounded-full flex justify-center items-center font-sano h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300",{"bg-bg-dark text-white":"sans"===p,"bg-bg-light text-dark":"sans"!==p}),onClick:function(){return b("sans")}},"Aa"),a.createElement("button",{className:c("rounded-full flex justify-center items-center font-serio h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300",{"bg-bg-dark text-white":"serif"===p,"bg-bg-light text-dark":"serif"!==p}),onClick:function(){return b("serif")}},"Aa"),a.createElement("button",{className:c("rounded-full flex justify-center items-center font-mono h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300",{"bg-bg-dark text-white":"mono"===p,"bg-bg-light text-dark":"mono"!==p}),onClick:function(){return b("mono")}},"Aa"))),a.createElement("div",{className:"pb-16 pt-6  tablet:flex tablet:items-center tablet:justify-between"},a.createElement(h,{variant:"H4",align:"center",color:"dark"},"COLOR"),a.createElement("div",{className:"mt-4 tablet:mt-0 flex space-x-1 justify-center"},a.createElement("button",{className:"rounded-full flex justify-center items-center h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300 bg-red p-2",onClick:function(){return v("red")}},"red"===x?a.createElement(d,null):null),a.createElement("button",{className:"rounded-full flex justify-center items-center h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300 bg-blue p-2",onClick:function(){return v("blue")}},"blue"===x?a.createElement(d,null):null),a.createElement("button",{className:"rounded-full flex justify-center items-center h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300 bg-pink p-2",onClick:function(){return v("pink")}},"pink"===x?a.createElement(d,null):null)))),a.createElement(u,{className:"absolute top-full left-1/2 transform -translate-y-1/2 -translate-x-1/2",onClick:function(){null!==N&&null!==x&&null!==p&&null!==A&&(O(p),T(x),function(){var e;if(null!==N)for(e in N)if(N[e]!==j[e])return!0;return!1}()&&A(N)),r(!1)}},"Apply")):null)),s)),a.createElement(a.Fragment,null,_,a.createElement("div",{className:"flex justify-center"},a.createElement("button",{className:"group",onClick:function(){return r(!0)}},a.createElement(f,{className:"transition-opacity duration-200 opacity-50 group-hover:opacity-100"}))))},U=function(){return a.createElement(a.Fragment,null,a.createElement("div",{id:"modal-root"}),a.createElement("div",{className:"bg-bg h-full px-6 py-8 flex flex-col justify-between"},a.createElement("title",null,"Pomodoro"),a.createElement(h,{variant:"H2",align:"center",className:"mb-11 tablet:mb-14"},"pomodoro"),a.createElement(k,null),a.createElement(B,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a6e6b9358b17d15b82cc.js.map