System.register("instructions/main",["flarum/app","instructions/components/InstructionsSettingsModal"],function(t){"use strict";var n,e;return{setters:[function(t){n=t["default"]},function(t){e=t["default"]}],execute:function(){n.initializers.add("instructions",function(){n.extensionSettings.instructions=function(){return n.modal.show(new e)}})}}}),System.register("instructions/components/InstructionsSettingsModal",["flarum/components/SettingsModal"],function(t){"use strict";function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var r,i,o=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),s=function(t,n,e){for(var r=!0;r;){var i=t,o=n,s=e;u=a=c=void 0,r=!1,null===i&&(i=Function.prototype);var u=Object.getOwnPropertyDescriptor(i,o);if(void 0!==u){if("value"in u)return u.value;var c=u.get;return void 0===c?void 0:c.call(s)}var a=Object.getPrototypeOf(i);if(null===a)return void 0;t=a,n=o,e=s,r=!0}};return{setters:[function(t){r=t["default"]}],execute:function(){i=function(t){function r(){n(this,r),s(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}return e(r,t),o(r,[{key:"className",value:function(){return"InstructionsSettingsModal"}},{key:"title",value:function(){return"Instructions Settings"}},{key:"form",value:function(){return[m("div",{className:"Form-group"},m("label",null,"Start a Discussion Instructions"),m("textarea",{className:"FormControl",bidi:this.setting("instructions.start_instructions")}),"Hide for users with more than",m("input",{className:"FormControl",type:"number",min:"0",bidi:this.setting("instructions.start_instructions_max_discussions")}),"discussions"),m("div",{className:"Form-group"},m("label",null,"Reply Instructions"),m("textarea",{className:"FormControl",bidi:this.setting("instructions.reply_instructions")}),"Hide for users with more than",m("input",{className:"FormControl",type:"number",min:"0",bidi:this.setting("instructions.reply_instructions_max_posts")}),"posts")]}}]),r}(r),t("default",i)}}});