!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-label"),require("react")):"function"==typeof define&&define.amd?define(["dnn-label","react"],t):"object"==typeof exports?exports.Checkbox=t(require("dnn-label"),require("react")):e.Checkbox=t(e["dnn-label"],e.react)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(6),s=o(l),p=n(5),u=o(p);n(4);var d=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.id="checkbox-"+Math.random()+Date.now(),e}return c(t,e),a(t,[{key:"componentWillMount",value:function(){var e=this.props;this.setState({checked:e.value})}},{key:"componentWillReceiveProps",value:function(e){this.setState({checked:e.value})}},{key:"onClick",value:function(){var e=this;"function"==typeof this.props.onChange&&this.props.enabled&&this.setState({checked:!this.state.checked},function(){e.props.onChange(e.state.checked)})}},{key:"render",value:function(){var e="checkbox",t=this.props.label||"",n=this.props,o={width:n.size,height:n.size};return s["default"].createElement("div",{className:"dnn-checkbox-container "+(n.labelPlace?"align-"+n.labelPlace:"")+(this.props.enabled?"":" disabled")},!!t&&"left"===n.labelPlace&&s["default"].createElement(u["default"],{labelFor:this.id,onClick:this.onClick.bind(this),label:t,tooltipMessage:n.tooltipMessage,tooltipPlace:n.tooltipPlace,tooltipStyle:{"float":"none",display:"inline-block"},style:{"float":"none",display:"inline-block",width:"auto"}}),s["default"].createElement("div",{className:e,style:Object.assign(o,n.style)},s["default"].createElement("input",{type:"checkbox",id:this.id,checked:this.state.checked,onChange:function(){},"aria-label":t?"":"Select"}),s["default"].createElement("label",{htmlFor:this.id,onClick:this.onClick.bind(this)},"Check")),!!t&&"right"===n.labelPlace&&s["default"].createElement(u["default"],{labelFor:this.id,onClick:this.onClick.bind(this),label:t,tooltipMessage:n.tooltipMessage,tooltipPlace:n.tooltipPlace,tooltipStyle:{"float":"none",display:"inline-block"},style:{"float":"none",display:"inline-block",width:"auto"}}))}}]),t}(l.Component);t["default"]=d,d.propTypes={value:l.PropTypes.bool.isRequired,labelPlace:l.PropTypes.oneOf(["left","right"]),size:l.PropTypes.number,checkBoxStyle:l.PropTypes.object,label:l.PropTypes.string,onChange:l.PropTypes.func,enabled:l.PropTypes.bool,tooltipMessage:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.array]),tooltipPlace:l.PropTypes.string},d.defaultProps={enabled:!0,size:13,labelPlace:"right"}},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.dnn-checkbox-container .dnn-label label{font-weight:700;cursor:pointer}.dnn-checkbox-container .dnn-label .dnn-ui-common-tooltip .icon{display:inline-block;position:relative;top:5px}.dnn-checkbox-container.align-left .dnn-ui-common-tooltip{margin-right:20px}.dnn-checkbox-container .checkbox{position:relative;display:inline;margin-right:15px}.dnn-checkbox-container .checkbox>label{width:13px;height:13px;text-indent:-100px;overflow:hidden}.dnn-checkbox-container .checkbox input[type=checkbox]{opacity:0;padding:0}.dnn-checkbox-container .checkbox input[type=checkbox]+label{position:absolute;top:0;left:0;background:#fff;border:1px solid #4b4e4f;cursor:pointer;border-radius:0}.dnn-checkbox-container .checkbox input[type=checkbox]+label:after{transform:rotate(-45deg);opacity:0;content:"";position:absolute;width:9px;height:5px;background:0 0;top:5px;left:4px;border:3px solid hsla(0,0%,100%,.25);border-top:none;border-right:none}.dnn-checkbox-container .checkbox input[type=checkbox]+label:hover:after{opacity:.6}.dnn-checkbox-container .checkbox input[type=checkbox]:checked+label{background:#fff!important;border-color:#4b4e4f}.dnn-checkbox-container .checkbox input[type=checkbox]:checked+label:after{border-color:#4b4e4f;width:72%;height:36%;top:1.5px;left:.5px;border-width:2px;opacity:1!important}.dnn-checkbox-container .checkbox.deselect-state input[type=checkbox]:checked+label[for]:after{transform:none;height:0;top:6px;left:2px}.dnn-checkbox-container.disabled{background:#e5e7e6;color:#959695;cursor:default;cursor:not-allowed}.dnn-checkbox-container.disabled *{cursor:default}.dnn-checkbox-container.disabled .checkbox input[type=checkbox]+label{background:#eff0f0;border-color:#c8c8c8;cursor:default}.dnn-checkbox-container.disabled .checkbox input[type=checkbox]+label:after{border-color:#c8c8c8}.dnn-checkbox-container.disabled svg{fill:#959695}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var c=t[r];"number"==typeof c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=f[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(s(o.parts[i],t))}else{for(var c=[],i=0;i<o.parts.length;i++)c.push(s(o.parts[i],t));f[o.id]={id:o.id,refs:1,parts:c}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],c=r[1],a=r[2],l=r[3],s={css:c,media:a,sourceMap:l};n[i]?n[i].parts.push(s):t.push(n[i]={id:i,parts:[s]})}return t}function i(e,t){var n=y(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function c(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var n,o,r;if(t.singleton){var i=k++;n=x||(x=a(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=d.bind(null,n),r=function(){c(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=u.bind(null,n),r=function(){c(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,k=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],c=0;c<n.length;c++){var a=n[c],l=f[a.id];l.refs--,i.push(l)}if(e){var s=r(e);o(s,t)}for(var c=0;c<i.length;c++){var l=i[c];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete f[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t}])});