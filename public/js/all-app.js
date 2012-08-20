
/*
 *	lib/js/lib/jquery/jquery.ui.core.js
 */;(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1];return this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]!==e){var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0}},top:function(b,c){if(c.at[1]!==e){var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];if(!c||!c.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);
/*
 *	lib/js/lib/jquery/jquery.ui.datepicker.min.js
 */
/* jQuery UI Datepicker 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */(function($,undefined){function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);!c.length||c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);!$.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])&&!!d.length&&(d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover"))})}function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend($.ui,{datepicker:{version:"1.8.18"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){extendRemove(this._defaults,a||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);c.hasClass(this.markerClassName)||(this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){$.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]);return!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block"))},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f);return this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})}},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);c&&!c.inline&&this._setDateFromField(c,b);return c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(a){$.datepicker.log(a)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if(!$.datepicker._isDisabledDatepicker(a)&&$.datepicker._lastInput!=a){var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){e|=$(this).css("position")=="fixed";return!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a));var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+$(document).scrollLeft(),i=document.documentElement.clientHeight+$(document).scrollTop();b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0);return b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=$.data(a,PROP_NAME))&&this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=this,f=function(){$.datepicker._tidyDialog(b),e._curInst=null};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,f):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,f),c||f(),this._datepickerShowing=!1;var g=this._get(b,"onClose");g&&g.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!!$.datepicker._curInst){var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);this._isDisabledDatepicker(d[0])||(this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e))},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if(!$(d).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(e[0])){var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();b.setMonth(0),b.setDate(1);return Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;c&&s++;return c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;r+=f[0].length;return parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase()){f=c[0],r+=d.length;return!1}});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;for(;;){var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;c&&m++;return c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;c&&e++;return c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;b.setDate(b.getDate()+a);return b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0));return this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', -"+i+", 'M');\""+' title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', +"+i+", 'M');\""+' title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+a.id+"');\""+">"+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+a.id+"',"+Y.getMonth()+","+Y.getFullYear()+', this);return false;"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),
a._keyEvent=!1;return K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" "+">";for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" "+">";for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>";return l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;e=d&&e>d?d:e;return e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth()));return this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return $.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return $.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b));return this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)})},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.18",window["DP_jQuery_"+dpuuid]=$})(jQuery);

/*
 *	lib/js/lib/jquery/jquery.ui.autocomplete.min.js
 */
/* jQuery UI Autocomplete 1.8.18
*
* Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Autocomplete
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*	jquery.ui.position.js
*/(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!b.options.disabled&&!b.element.propAttr("readOnly")){d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._move("previous",c),c.preventDefault();break;case e.DOWN:b._move("next",c),c.preventDefault();break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){b.options.disabled||(b.selectedItem=null,b.previous=b.element.val())}).bind("blur.autocomplete",function(a){b.options.disabled||(clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150))}),this._initSource(),this.response=function(){return b._response.apply(b,arguments)},this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,d,e;a.isArray(this.options.source)?(d=this.options.source,this.source=function(b,c){c(a.ui.autocomplete.filter(d,b.term))}):typeof this.options.source=="string"?(e=this.options.source,this.source=function(d,f){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:e,data:d,dataType:"json",context:{autocompleteRequest:++c},success:function(a,b){this.autocompleteRequest===c&&f(a)},error:function(){this.autocompleteRequest===c&&f([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==!1)return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this.response)},_response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close(),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){if(b.length&&b[0].label&&b[0].value)return b;return a.map(b,function(b){if(typeof b=="string")return{label:b,value:b};return a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible"))this.search(null,b);else{if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)}},widget:function(){return this.menu.element}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){!a(c.target).closest(".ui-menu-item a").length||(c.preventDefault(),b.select(c))}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){!this.active||(this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null)},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active)this.activate(c,this.element.children(b));else{var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))}},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10}),result.length||(result=this.element.children(".ui-menu-item:first")),this.activate(b,result)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery);

/*
 *	lib/js/lib/mousetrap.min.js
 */
/* mousetrap v1.1.2 craig.is/killing/mice */
window.Mousetrap=function(){function o(a,c,b){if(a.addEventListener)return a.addEventListener(c,b,!1);a.attachEvent("on"+c,b)}function u(a){return"keypress"==a.type?String.fromCharCode(a.which):h[a.which]?h[a.which]:v[a.which]?v[a.which]:String.fromCharCode(a.which).toLowerCase()}function p(a){var a=a||{},c=!1,b;for(b in l)a[b]?c=!0:l[b]=0;c||(n=!1)}function w(a,c,b,d,C){var g,e,f=[];if(!j[a])return[];"keyup"==b&&q(a)&&(c=[a]);for(g=0;g<j[a].length;++g)if(e=j[a][g],!(e.seq&&l[e.seq]!=e.level)&&b==
e.action&&("keypress"==b||c.sort().join(",")===e.modifiers.sort().join(",")))d&&e.combo==C&&j[a].splice(g,1),f.push(e);return f}function r(a,c){!1===a(c)&&(c.preventDefault&&c.preventDefault(),c.stopPropagation&&c.stopPropagation(),c.returnValue=!1,c.cancelBubble=!0)}function s(a){a.which="number"==typeof a.which?a.which:a.keyCode;var c=u(a);if(c)if("keyup"==a.type&&t==c)t=!1;else{var b=a.target||a.srcElement,d=b.tagName;if(!(-1<(" "+b.className+" ").indexOf(" mousetrap ")?0:"INPUT"==d||"SELECT"==
d||"TEXTAREA"==d||b.contentEditable&&"true"==b.contentEditable)){b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");for(var b=w(c,b,a.type),f={},g=!1,d=0;d<b.length;++d)b[d].seq?(g=!0,f[b[d].seq]=1,r(b[d].callback,a)):!g&&!n&&r(b[d].callback,a);a.type==n&&!q(c)&&p(f)}}}function q(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function x(a,c,b){if(!b){if(!k){k={};for(var d in h)95<d&&112>d||h.hasOwnProperty(d)&&(k[h[d]]=d)}b=k[a]?"keydown":
"keypress"}"keypress"==b&&c.length&&(b="keydown");return b}function y(a,c,b,d,f){var a=a.replace(/\s+/g," "),g=a.split(" "),e,h,i=[];if(1<g.length){var k=a,m=b;l[k]=0;m||(m=x(g[0],[]));a=function(){n=m;++l[k];clearTimeout(z);z=setTimeout(p,1E3)};b=function(a){r(c,a);"keyup"!==m&&(t=u(a));setTimeout(p,10)};for(d=0;d<g.length;++d)y(g[d],d<g.length-1?a:b,m,k,d)}else{h="+"===a?["+"]:a.split("+");for(g=0;g<h.length;++g)e=h[g],A[e]&&(e=A[e]),b&&("keypress"!=b&&B[e])&&(e=B[e],i.push("shift")),q(e)&&i.push(e);
b=x(e,i,b);j[e]||(j[e]=[]);w(e,i,b,!d,a);j[e][d?"unshift":"push"]({callback:c,modifiers:i,action:b,seq:d,level:f,combo:a})}}for(var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},v={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B=
{"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",escape:"esc"},k,j={},i={},l={},z,t=!1,n=!1,f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;o(document,"keypress",s);o(document,"keydown",s);o(document,"keyup",s);return{bind:function(a,c,b){for(var d=a instanceof Array?a:[a],f=0;f<d.length;++f)y(d[f],c,b);i[a+":"+b]=c},unbind:function(a,c){i[a+
":"+c]&&(delete i[a+":"+c],this.bind(a,function(){},c))},trigger:function(a,c){i[a+":"+c]()},reset:function(){j={};i={}}}}();


/*
 *	lib/js/lib/bootstrap.min.js
 */
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){"use strict",a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a(function(){a("body").on("click.alert.data-api",b,c.prototype.close)})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.parent('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")},a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a(function(){a("body").on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=c,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},to:function(b){var c=this.$element.find(".active"),d=c.parent().children(),e=d.index(c),f=this;if(b>d.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){f.to(b)}):e==b?this.pause().cycle():this.slide(b>e?"next":"prev",a(d[b]))},pause:function(a){return a||(this.paused=!0),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j=a.Event("slide");this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h]();if(e.hasClass("active"))return;if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}},a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c);e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):typeof c=="string"||(c=f.slide)?e[c]():f.interval&&e.cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a(function(){a("body").on("click.carousel.data-api","[data-slide]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=!e.data("modal")&&a.extend({},e.data(),c.data());e.carousel(f),b.preventDefault()})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning)return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning)return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=typeof c=="object"&&c;e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a(function(){a("body").on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();a(e).collapse(f)})})}(window.jQuery),!function(a){function d(){a(b).parent().removeClass("open")}"use strict";var b='[data-toggle="dropdown"]',c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),e,f,g;if(c.is(".disabled, :disabled"))return;return f=c.attr("data-target"),f||(f=c.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,"")),e=a(f),e.length||(e=c.parent()),g=e.hasClass("open"),d(),g||e.toggleClass("open"),!1}},a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a(function(){a("html").on("click.dropdown.data-api",d),a("body").on("click.dropdown",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle)})}(window.jQuery),!function(a){function c(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),d.call(b)},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),d.call(b)})}function d(a){this.$element.hide().trigger("hidden"),e.call(this)}function e(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,a.proxy(f,this)):f.call(this)):b&&b()}function f(){this.$backdrop.remove(),this.$backdrop=null}function g(){var b=this;this.isShown&&this.options.keyboard?a(document).on("keyup.dismiss.modal",function(a){a.which==27&&b.hide()}):this.isShown||a(document).off("keyup.dismiss.modal")}"use strict";var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this))};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;a("body").addClass("modal-open"),this.isShown=!0,g.call(this),e.call(this,function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in"),c?b.$element.one(a.support.transition.end,function(){b.$element.trigger("shown")}):b.$element.trigger("shown")})},hide:function(b){b&&b.preventDefault();var e=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,a("body").removeClass("modal-open"),g.call(this),this.$element.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?c.call(this):d.call(this)}},a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a(function(){a("body").on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({},e.data(),c.data());b.preventDefault(),e.modal(f)})})}(window.jQuery),!function(a){"use strict";var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();clearTimeout(this.timeout),c.hoverState="in",this.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.css(g).addClass(f).addClass("in")}},isHTML:function(a){return typeof a!="string"||a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3||/^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(a)},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.isHTML(b)?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).remove()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.remove()})}var b=this,c=this.tip();c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.remove()},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0}}(window.jQuery),!function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.isHTML(b)?"html":"text"](b),a.find(".popover-content > *")[this.isHTML(c)?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-content")||(typeof c.content=="function"?c.content.call(b[0]):c.content),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip}}),a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}"use strict",b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var b=a(this),c=b.data("target")||b.attr("href"),d=/^#\w/.test(c)&&a(c);return d&&c.length&&[[d.position().top,c]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu")&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}},a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a(function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active a").last()[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}},a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a(function(){a("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=a(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:b.top+b.height,left:b.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c=this,d,e;return this.query=this.$element.val(),this.query?(d=a.grep(this.source,function(a){return c.matcher(a)}),d=this.sorter(d),d.length?this.render(d.slice(0,this.options.items)).show():this.shown?this.hide():this):this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),(a.browser.webkit||a.browser.msie)&&this.$element.on("keydown",a.proxy(this.keypress,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this))},keyup:function(a){switch(a.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},keypress:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:if(a.type!="keydown")break;a.preventDefault(),this.prev();break;case 40:if(a.type!="keydown")break;a.preventDefault(),this.next()}a.stopPropagation()},blur:function(a){var b=this;setTimeout(function(){b.hide()},150)},click:function(a){a.stopPropagation(),a.preventDefault(),this.select()},mouseenter:function(b){this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")}},a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'},a.fn.typeahead.Constructor=b,a(function(){a("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;b.preventDefault(),c.typeahead(c.data())})})}(window.jQuery);

/*
 *	lib/js/lib/tag-it/tag-it.js
 */
(function($){$.widget('ui.tagit',{options:{itemName:'item',fieldName:'tags',availableTags:[],tagSource:null,removeConfirmation:false,caseSensitive:true,placeholderText:null,allowSpaces:false,animate:true,singleField:false,singleFieldDelimiter:',',singleFieldNode:null,tabIndex:null,onTagAdded:null,onTagRemoved:null,onTagClicked:null},_create:function(){var that=this;if(this.element.is('input')){this.tagList=$('<ul></ul>').insertAfter(this.element);this.options.singleField=true;this.options.singleFieldNode=this.element;this.element.css('display','none');}else{this.tagList=this.element.find('ul, ol').andSelf().last();}
this._tagInput=$('<input type="text" />');if(this.options.tabIndex){this._tagInput.attr('tabindex',this.options.tabIndex);}
if(this.options.placeholderText){this._tagInput.attr('placeholder',this.options.placeholderText);}
this.options.tagSource=this.options.tagSource||function(search,showChoices){var filter=search.term.toLowerCase();var choices=$.grep(this.options.availableTags,function(element){return(element.toLowerCase().indexOf(filter)===0);});showChoices(this._subtractArray(choices,this.assignedTags()));};if($.isFunction(this.options.tagSource)){this.options.tagSource=$.proxy(this.options.tagSource,this);}
this.tagList.addClass('tagit').append($('<li class="tagit-new"></li>').append(this._tagInput)).click(function(e){var target=$(e.target);if(target.hasClass('tagit-label')){that._trigger('onTagClicked',e,target.closest('.tagit-choice'));}else{that._tagInput.focus();}});this.tagList.children('li').each(function(){if(!$(this).hasClass('tagit-new')){that.createTag($(this).html(),$(this).attr('class'));$(this).remove();}});if(this.options.singleField){if(this.options.singleFieldNode){var node=$(this.options.singleFieldNode);var tags=node.val().split(this.options.singleFieldDelimiter);node.val('');$.each(tags,function(index,tag){that.createTag(tag);});}else{this.options.singleFieldNode=this.tagList.after('<input type="hidden" style="display:none;" value="" name="'+this.options.fieldName+'" />');}}
this._tagInput.keydown(function(event){if(event.which==$.ui.keyCode.BACKSPACE&&that._tagInput.val()===''){var tag=that._lastTag();if(!that.options.removeConfirmation||tag.hasClass('remove')){that.removeTag(tag);}else if(that.options.removeConfirmation){tag.addClass('remove ui-state-highlight');}}else if(that.options.removeConfirmation){that._lastTag().removeClass('remove ui-state-highlight');}
if(event.which==$.ui.keyCode.COMMA||event.which==$.ui.keyCode.ENTER||(event.which==$.ui.keyCode.TAB&&that._tagInput.val()!=='')||(event.which==$.ui.keyCode.SPACE&&that.options.allowSpaces!==true&&($.trim(that._tagInput.val()).replace(/^s*/,'').charAt(0)!='"'||($.trim(that._tagInput.val()).charAt(0)=='"'&&$.trim(that._tagInput.val()).charAt($.trim(that._tagInput.val()).length-1)=='"'&&$.trim(that._tagInput.val()).length-1!==0)))){event.preventDefault();that.createTag(that._cleanedInput());that._tagInput.autocomplete('close');}}).blur(function(e){that.createTag(that._cleanedInput());});if(this.options.availableTags||this.options.tagSource){this._tagInput.autocomplete({source:this.options.tagSource,select:function(event,ui){if(that._tagInput.val()===''){that.removeTag(that._lastTag(),false);}
that.createTag(ui.item.value);return false;}});}},_cleanedInput:function(){return $.trim(this._tagInput.val().replace(/^"(.*)"$/,'$1'));},_lastTag:function(){return this.tagList.children('.tagit-choice:last');},assignedTags:function(){var that=this;var tags=[];if(this.options.singleField){tags=$(this.options.singleFieldNode).val().split(this.options.singleFieldDelimiter);if(tags[0]===''){tags=[];}}else{this.tagList.children('.tagit-choice').each(function(){tags.push(that.tagLabel(this));});}
return tags;},_updateSingleTagsField:function(tags){$(this.options.singleFieldNode).val(tags.join(this.options.singleFieldDelimiter));},_subtractArray:function(a1,a2){var result=[];for(var i=0;i<a1.length;i++){if($.inArray(a1[i],a2)==-1){result.push(a1[i]);}}
return result;},tagLabel:function(tag){if(this.options.singleField){return $(tag).children('.tagit-label').text();}else{return $(tag).children('input').val();}},_isNew:function(value){var that=this;var isNew=true;this.tagList.children('.tagit-choice').each(function(i){if(that._formatStr(value)==that._formatStr(that.tagLabel(this))){isNew=false;return false;}});return isNew;},_formatStr:function(str){if(this.options.caseSensitive){return str;}
return $.trim(str.toLowerCase());},createTag:function(value,additionalClass){var that=this;value=$.trim(value);if(!this._isNew(value)||value===''){return false;}
var label=$(this.options.onTagClicked?'<a class="tagit-label"></a>':'<span class="tagit-label"></span>').text(value);var tag=$('<li></li>').addClass('tagit-choice label label-info').addClass(additionalClass).append(label);var removeTagIcon=$('<span></span>').addClass('ui-icon ui-icon-close');var removeTag=$('<a><span class="text-icon">\xd7</span></a>').addClass('tagit-close').append(removeTagIcon).click(function(e){that.removeTag(tag);});tag.append(removeTag);if(this.options.singleField){var tags=this.assignedTags();tags.push(value);this._updateSingleTagsField(tags);}else{var escapedValue=label.html();tag.append('<input type="hidden" style="display:none;" value="'
+escapedValue+'" name="'+this.options.itemName
+'['+this.options.fieldName+'][]" />');}
this._trigger('onTagAdded',null,tag);this._tagInput.val('');this._tagInput.parent().before(tag);},removeTag:function(tag,animate){animate=animate||this.options.animate;tag=$(tag);this._trigger('onTagRemoved',null,tag);if(this.options.singleField){var tags=this.assignedTags();var removedTagLabel=this.tagLabel(tag);tags=$.grep(tags,function(el){return el!=removedTagLabel;});this._updateSingleTagsField(tags);}
if(animate){tag.fadeOut('fast').hide('blind',{direction:'horizontal'},'fast',function(){tag.remove();}).dequeue();}else{tag.remove();}},removeAll:function(){var that=this;this.tagList.children('.tagit-choice').each(function(index,tag){that.removeTag(tag,false);});}});})(jQuery);
/*
 *	lib/js/lib/sprintf.js
 */
var sprintf=(function(){function get_type(variable){return Object.prototype.toString.call(variable).slice(8,-1).toLowerCase();}
function str_repeat(input,multiplier){for(var output=[];multiplier>0;output[--multiplier]=input){}
return output.join('');}
var str_format=function(){if(!str_format.cache.hasOwnProperty(arguments[0])){str_format.cache[arguments[0]]=str_format.parse(arguments[0]);}
return str_format.format.call(null,str_format.cache[arguments[0]],arguments);};str_format.format=function(parse_tree,argv){var cursor=1,tree_length=parse_tree.length,node_type='',arg,output=[],i,k,match,pad,pad_character,pad_length;for(i=0;i<tree_length;i++){node_type=get_type(parse_tree[i]);if(node_type==='string'){output.push(parse_tree[i]);}
else if(node_type==='array'){match=parse_tree[i];if(match[2]){arg=argv[cursor];for(k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k])){arg='';}else{arg=arg[match[2][k]];}}}
else if(match[1]){arg=argv[match[1]];}
else{arg=argv[cursor++];}
if(/[^s]/.test(match[8])&&(get_type(arg)!='number')){throw(sprintf('[sprintf] expecting number but found %s',get_type(arg)));}
switch(match[8]){case'b':arg=arg.toString(2);break;case'c':arg=String.fromCharCode(arg);break;case'd':arg=parseInt(arg,10);break;case'e':arg=match[7]?arg.toExponential(match[7]):arg.toExponential();break;case'f':arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case'o':arg=arg.toString(8);break;case's':arg=((arg=String(arg))&&match[7]?arg.substring(0,match[7]):arg);break;case'u':arg=Math.abs(arg);break;case'x':arg=arg.toString(16);break;case'X':arg=arg.toString(16).toUpperCase();break;}
arg=(/[def]/.test(match[8])&&match[3]&&arg>=0?'+'+arg:arg);pad_character=match[4]?match[4]=='0'?'0':match[4].charAt(1):' ';pad_length=match[6]-String(arg).length;pad=match[6]?str_repeat(pad_character,pad_length):'';output.push(match[5]?arg+pad:pad+arg);}}
return output.join('');};str_format.cache={};str_format.parse=function(fmt){var _fmt=fmt,match=[],parse_tree=[],arg_names=0;while(_fmt){if((match=/^[^\x25]+/.exec(_fmt))!==null){parse_tree.push(match[0]);}
else if((match=/^\x25{2}/.exec(_fmt))!==null){parse_tree.push('%');}
else if((match=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt))!==null){if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if((field_match=/^([a-z_][a-z_\d]*)/i.exec(replacement_field))!==null){field_list.push(field_match[1]);while((replacement_field=replacement_field.substring(field_match[0].length))!==''){if((field_match=/^\.([a-z_][a-z_\d]*)/i.exec(replacement_field))!==null){field_list.push(field_match[1]);}
else if((field_match=/^\[(\d+)\]/.exec(replacement_field))!==null){field_list.push(field_match[1]);}
else{throw('[sprintf] huh?');}}}
else{throw('[sprintf] huh?');}
match[2]=field_list;}
else{arg_names|=2;}
if(arg_names===3){throw('[sprintf] mixing positional and named placeholders is not (yet) supported');}
parse_tree.push(match);}
else{throw('[sprintf] huh?');}
_fmt=_fmt.substring(match[0].length);}
return parse_tree;};return str_format;})();var vsprintf=function(fmt,argv){argv.unshift(fmt);return sprintf.apply(null,argv);};
/*
 *	lib/js/core.min.js
 */

/*
 *	lib/js/wn/class.js
 */;(function(){var initializing=false,fnTest=/xyz/.test(function(){xyz;})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(prop){var _super=this.prototype;initializing=true;var prototype=new this();initializing=false;for(var name in prop){prototype[name]=typeof prop[name]=="function"&&typeof _super[name]=="function"&&fnTest.test(prop[name])?(function(name,fn){return function(){var tmp=this._super;this._super=_super[name];var ret=fn.apply(this,arguments);this._super=tmp;return ret;};})(name,prop[name]):prop[name];}
function Class(){this._observers=new Object();if(!initializing&&this.init)
this.init.apply(this,arguments);}
Class.prototype=prototype;Class.prototype.constructor=Class;Class.prototype.on=function(event_name,handle){if(!this._observers[event_name]){this._observers[event_name]=[];}
this._observers[event_name].push(handle);}
Class.prototype.trigger=function(event_name){var args=[];if(arguments.length>1)args=Array.prototype.slice.call(arguments,1);var observer_list=this._observers[event_name]||[];for(var i=0;i<observer_list.length;i++){observer_list[i].apply(this,args);}}
Class.extend=arguments.callee;return Class;};})();
/*
 *	lib/js/wn/provide.js
 */
if(!window.wn)wn={}
wn.provide=function(namespace){var nsl=namespace.split('.');var l=nsl.length;var parent=window;for(var i=0;i<l;i++){var n=nsl[i];if(!parent[n]){parent[n]={}}
parent=parent[n];}}
wn.provide('wn.settings');wn.provide('wn.ui');
/*
 *	lib/js/wn/versions.js
 */
wn.versions={check:function(){if(window.localStorage){var localversion=localStorage._version_number;localStorage.clear();}}}
/*
 *	lib/js/wn/assets.js
 */
wn.assets={executed_:{},exists:function(src){if('localStorage'in window&&localStorage.getItem(src))
return true},add:function(src,txt){if('localStorage'in window){localStorage.setItem(src,txt);}},get:function(src){return localStorage.getItem(src);},extn:function(src){if(src.indexOf('?')!=-1){src=src.split('?').slice(-1)[0];}
return src.split('.').slice(-1)[0];},load:function(src){var t=src;$.ajax({url:t,data:{q:Math.floor(Math.random()*1000)},dataType:'text',success:function(txt){wn.assets.add(src,txt);},async:false})},execute:function(src){if(wn.assets.executed_[src])
return;if(!wn.assets.exists(src)){wn.assets.load(src);}
var type=wn.assets.extn(src);if(wn.assets.handler[type]){wn.assets.handler[type](wn.assets.get(src),src);wn.assets.executed_[src]=1;}},handler:{js:function(txt,src){wn.dom.eval(txt);},css:function(txt,src){wn.dom.set_style(txt);},cgi:function(txt,src){wn.dom.eval(txt)}}}
/*
 *	lib/js/wn/require.js
 */
wn.require=function(items){if(typeof items==="string"){items=[items];}
var l=items.length;for(var i=0;i<l;i++){var src=items[i];wn.assets.execute(src);}}
wn.provide('wn.lib');wn.lib.import_slickgrid=function(){wn.require('js/lib/slickgrid/slick.grid.css');wn.require('js/lib/slickgrid/slick-default-theme.css');wn.require('js/slickgrid.bundle.js');wn.dom.set_style('.slick-cell { font-size: 12px; }');}
wn.lib.import_wysihtml5=function(){wn.require('js/lib/bootstrap-wysihtml5/bootstrap-wysihtml5.css');wn.require('js/lib/wysihtml5/wysihtml5.min.js');wn.require('js/lib/bootstrap-wysihtml5/bootstrap-wysihtml5.min.js');}
/*
 *	lib/js/wn/dom.js
 */
wn.provide('wn.dom');wn.dom={id_count:0,by_id:function(id){return document.getElementById(id);},set_unique_id:function(ele){var id='unique-'+wn.dom.id_count;if(ele)
ele.setAttribute('id',id);wn.dom.id_count++;return id;},eval:function(txt){if(!txt)return;var el=document.createElement('script');el.appendChild(document.createTextNode(txt));document.getElementsByTagName('head')[0].appendChild(el);},set_style:function(txt){if(!txt)return;var se=document.createElement('style');se.type="text/css";if(se.styleSheet){se.styleSheet.cssText=txt;}else{se.appendChild(document.createTextNode(txt));}
document.getElementsByTagName('head')[0].appendChild(se);},add:function(parent,newtag,className,cs,innerHTML,onclick){if(parent&&parent.substr)parent=wn.dom.by_id(parent);var c=document.createElement(newtag);if(parent)
parent.appendChild(c);if(className){if(newtag.toLowerCase()=='img')
c.src=className
else
c.className=className;}
if(cs)wn.dom.css(c,cs);if(innerHTML)c.innerHTML=innerHTML;if(onclick)c.onclick=onclick;return c;},css:function(ele,s){if(ele&&s){for(var i in s)ele.style[i]=s[i];};return ele;},placeholder:function(dim,letter){function getsinglecol(){return Math.min(Math.round(Math.random()*9)*Math.round(Math.random()*1)+3,9)}
function getcol(){return''+getsinglecol()+getsinglecol()+getsinglecol();}
args={width:Math.round(flt(dim)*0.7)+'px',height:Math.round(flt(dim)*0.7)+'px',padding:Math.round(flt(dim)*0.15)+'px','font-size':Math.round(flt(dim)*0.6)+'px',col1:getcol(),col2:getcol(),letter:letter.substr(0,1).toUpperCase()}
return repl('<div style="\
   height: %(height)s; \
   width: %(width)s; \
   font-size: %(font-size)s; \
   color: #fff; \
   text-align: center; \
   padding: %(padding)s; \
   background: -moz-linear-gradient(top,  #%(col1)s 0%, #%(col2)s 99%); /* FF3.6+ */\
   background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#%(col1)s), color-stop(99%,#%(col2)s)); /* Chrome,Safari4+ */\
   background: -webkit-linear-gradient(top,  #%(col1)s 0%,#%(col2)s 99%); /* Chrome10+,Safari5.1+ */\
   background: -o-linear-gradient(top,  #%(col1)s 0%,#%(col2)s 99%); /* Opera 11.10+ */\
   background: -ms-linear-gradient(top,  #%(col1)s 0%,#%(col2)s 99%); /* IE10+ */\
   background: linear-gradient(top,  #%(col1)s 0%,#%(col2)s 99%); /* W3C */\
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#%(col1)s\', endColorstr=\'#%(col2)s\',GradientType=0 ); /* IE6-9 */\
   ">%(letter)s</div>',args);}}
wn.get_cookie=function(c){var clist=(document.cookie+'').split(';');var cookies={};for(var i=0;i<clist.length;i++){var tmp=clist[i].split('=');cookies[strip(tmp[0])]=strip(tmp[1]);}
return cookies[c];}
wn.dom.set_box_shadow=function(ele,spread){$(ele).css('-moz-box-shadow','0px 0px '+spread+'px rgba(0,0,0,0.3);')
$(ele).css('-webkit-box-shadow','0px 0px '+spread+'px rgba(0,0,0,0.3);')
$(ele).css('-box-shadow','0px 0px '+spread+'px rgba(0,0,0,0.3);')};(function($){$.fn.add_options=function(options_list){for(var i=0;i<options_list.length;i++){var v=options_list[i];value=v.value||v;label=v.label||v;$('<option>').html(label).attr('value',value).appendTo(this);}
$(this).val(options_list[0].value||options_list[0]);}
$.fn.set_working=function(){var ele=this.get(0);$(ele).attr('disabled','disabled');if(ele.loading_img){$(ele.loading_img).toggle(true);}else{ele.loading_img=$('<img src="images/lib/ui/button-load.gif" \
    style="margin-left: 4px; margin-bottom: -2px; display: inline;" />').insertAfter(ele);}}
$.fn.done_working=function(){var ele=this.get(0);$(ele).attr('disabled',null);if(ele.loading_img){$(ele.loading_img).toggle(false);};}})(jQuery);
/*
 *	lib/js/wn/model.js
 */
wn.provide('wn.model');wn.provide('wn.docs');wn.provide('wn.doclists');wn.provide('wn.model.local_name_idx');$.extend(wn.model,{no_value_type:['Section Break','Column Break','HTML','Table','Button','Image'],new_names:{},with_doctype:function(doctype,callback){if(wn.model.has('DocType',doctype)){callback();}else{wn.call({method:'webnotes.model.client.get_doctype',args:{doctype:doctype},callback:function(r){wn.model.sync(r.docs);callback(r);}});}},with_doc:function(doctype,name,callback){if(!name)name=doctype;if(wn.model.has(doctype,name)){callback(name);}else{wn.call({method:'webnotes.model.client.get_doclist',args:{doctype:doctype,name:name},callback:function(r){wn.model.sync(r.docs);callback(name,r);}});}},can_delete:function(doctype){if(!doctype)return false;return wn.model.get('DocType',doctype).get('allow_trash')&&wn.boot.profile.can_cancel.indexOf(doctype)!=-1;},sync:function(doclist){for(var i=0,len=doclist.length;i<len;i++){var doc=doclist[i];if(doc.parent){var doclistobj=wn.doclists[doc.parenttype][doc.parent];doclistobj.add(doc);}else{new wn.model.DocList([doc]);}}},get:function(dt,dn){return wn.doclists[dt]&&wn.doclists[dt][dn];},has:function(dt,dn){if(wn.doclists[dt]&&wn.doclists[dt][dn])return true;else return false;},get_value:function(dt,dn,fieldname){var doclist=wn.model.get(dt,dn);if(doclist)return doclist.doc.get(fieldname);else return null;},set_value:function(dt,dn,fieldname,value){wn.model.get(dt,dn).doc.set(fieldname,value);},remove:function(dt,dn){delete wn.doclists[dt][dn];},event_name:function(dt,dn){return'change-'+dt.replace(/ /g,'_')+'-'+(dn||'').replace(/ /g,'_');},insert:function(doc,callback,btn){var doclist=wn.model.create(doc.doctype);$.extend(doclist.doc.fields,doc);doclist.save(callback,btn);},create:function(dt){var doc=new wn.model.Document({doctype:dt,__islocal:1,owner:user,name:wn.model.new_name(dt)});wn.model.set_defaults(doc);return new wn.model.DocList([doc]);},new_name:function(dt){if(!wn.model.local_name_idx[dt])wn.model.local_name_idx[dt]=1;var n='New '+dt+' '+wn.model.local_name_idx[dt];wn.model.local_name_idx[dt]++;return n;},set_defaults:function(doc){var doctypelist=wn.model.get('DocType',doc.get('doctype'));if(doctypelist){doctypelist.each({doctype:'DocField'},function(df){var def=wn.model.get_default(df);if(def!==null)
doc.set(df.fieldname,def)});}},get_default:function(df){var def=df['default'];var v=null;if(def=='__user')
v=user;else if(df.fieldtype=='Date'&&(def=='Today'||def=='__today')){v=get_today();}
else if(def)
v=def;else if(user_defaults[df.fieldname])
v=user_defaults[df.fieldname][0];else if(sys_defaults[df.fieldname])
v=sys_defaults[df.fieldname];return v;}});wn.model.Document=Class.extend({init:function(fields){this.fields=fields;},get:function(key,ifnull){return this.fields[key]||ifnull;},convert_type:function(key,val){if(val===null)return val;var df=wn.model.get('DocType',this.get('doctype')).get({fieldname:key,doctype:"DocField"});if(df.length){df=df[0]
if(in_list(["Int","Check"],df.fieldtype)){val=cint(val);}else if(in_list(["Currency","Float"],df.fieldtype)){val=flt(val);}else if(df.fieldtype=='Select'){if(in_list(df.options.split('\n'),val)){throw val+" is not a correct option"}}}
return val;},set:function(key,val){this.fields[key]=this.convert_type(key,val);$(document).trigger(wn.model.event_name(this.get('doctype'),this.get('name')),[key,this.fields[key]]);}});wn.model.DocList=Class.extend({init:function(doclist){this.doclist=[];if(doclist){for(var i=0,len=doclist.length;i<len;i++){this.add(doclist[i]);}}},add:function(doc){if(!(doc instanceof wn.model.Document)){var doc=new wn.model.Document(doc);}
doc.doclist=this;this.doclist.push(doc);if(this.doclist.length==1){this.setup(doc);}},setup:function(doc){this.doc=doc;this.doctype=doc.get('doctype');this.name=doc.get('name');wn.provide('wn.doclists.'+this.doctype);wn.doclists[this.doctype][this.name]=this;},each:function(){if(typeof arguments[0]=='function'){var fn=arguments[0];$.each(this.doclist,function(i,doc){fn(doc);})}else if(typeof arguments[1]=='function'){var fn=arguments[1];if(typeof arguments[0]=='string'){$.each(this.get({doctype:arguments[0]}),function(i,doc){fn(doc);});}else{$.each(this.get(arguments[0]),function(i,doc){fn(doc);});}}else{var fn=arguments[2];$.each(this.get(arguments[0],arguments[1]),function(i,doc){fn(doc);});}},get:function(){var me=this;if(typeof arguments[0]=='string'&&typeof arguments[1]=='string'){return this.doc.get(arguments[0],arguments[1]);}else if(typeof arguments[0]=='string'){var filters={};if(arguments[1])
filters=arguments[1];filters.doctype=arguments[0];}else{var filters=arguments[0];}
var ret=$.map(this.doclist,function(d){return me.match(filters,d)})
ret.sort(function(a,b){return a.idx>b.idx;});return ret;},get_value:function(key,def){return this.doc.get(key,def);},match:function(filters,doc){for(key in filters){var fval=filters[key];if(fval instanceof Array){if(!in_list(fval,doc.get(key)))return null;}else{if(doc.get(key)!=filters[key]){return null;}}}
return doc;},save:function(callback,btn){var me=this;wn.call({method:'webnotes.model.client.save',args:{docs:this.get_docs()},callback:function(r){if(!r.exc){me.reset(r.docs);}
callback(r);}});},reset:function(doclist){var oldname=this.doc.get('name');this.doclist.splice(0,this.doclist.length);for(i in doclist){this.add(doclist[i]);}
if(oldname!=this.name){delete wn.doclists[this.doctype][oldname];}},get_docs:function(){return $.map(this.doclist,function(d){return d.fields;});},rename:function(){this.name=this.doclist[0].get('name');},meta:function(){return wn.model.get('DocType',this.doc.get('doctype'));},add_child:function(parentfield){var docfield=this.meta().get({fieldname:parentfield,doctype:'DocField'})[0];var doc=new wn.model.Document({doctype:docfield.get('options'),name:wn.model.new_name(docfield.get('options')),__islocal:1,owner:user,parent:this.doc.get('name'),parenttype:this.doc.get('doctype'),parentfield:parentfield,idx:this.get({parentfield:docfield.get('fieldname')}).length+1});wn.model.set_defaults(doc);this.add(doc);return doc;},remove_child:function(doc){this.doclist.splice(this.doclist.indexOf(doc),1);this.renum_idx(doc.get('parentfield'));},renum_idx:function(parentfield){$.each(this.get({parentfield:parentfield}),function(i,d){d.set('idx',i+1);});}});
/*
 *	lib/js/wn/meta.js
 */
wn.provide('wn.meta.docfield_map');wn.provide('wn.meta.docfield_list');wn.provide('wn.meta.doctypes');$.extend(wn.meta,{add_field:function(df){wn.provide('wn.meta.docfield_map.'+df.parent);wn.meta.docfield_map[df.parent][df.fieldname||df.label]=df;if(!wn.meta.docfield_list[df.parent])
wn.meta.docfield_list[df.parent]=[];for(var i in wn.meta.docfield_list[df.parent]){var d=wn.meta.docfield_list[df.parent][i];if(df.fieldname==d.fieldname)
return;}
wn.meta.docfield_list[df.parent].push(df);},get_docfield:function(dt,fn,dn){if(dn&&local_dt[dt]&&local_dt[dt][dn]){return local_dt[dt][dn][fn];}else{return wn.meta.docfield_map[dt][fn];}}});
/*
 *	lib/js/wn/misc/tools.js
 */
wn.markdown=function(txt){if(!wn.md2html){wn.require('js/lib/showdown.js');wn.md2html=new Showdown.converter();}
return'<div class="markdown">'+wn.md2html.makeHtml(txt)+'</div>';}
wn.get_or_set=function(obj,key,val){if(typeof obj[key]==='undefined')
obj[key]=val;return obj[key];}
/*
 *	lib/js/wn/misc/user.js
 */
wn.user_info=function(uid){var def={'fullname':uid,'image':'images/lib/ui/no_img_m.gif'}
if(!wn.boot.user_info)return def
if(!wn.boot.user_info[uid])return def
if(!wn.boot.user_info[uid].fullname)
wn.boot.user_info[uid].fullname=uid;if(!wn.boot.user_info[uid].image)
wn.boot.user_info[uid].image=def.image;return wn.boot.user_info[uid];}
wn.provide('wn.user');$.extend(wn.user,{name:(wn.boot?wn.boot.profile.name:'Guest'),has_role:function(rl){if(typeof rl=='string')
rl=[rl];for(var i in rl){if((wn.boot?wn.boot.profile.roles:['Guest']).indexOf(rl[i])!=-1)
return true;}},is_report_manager:function(){return wn.user.has_role(['Administrator','System Manager','Report Manager']);}})
wn.session_alive=true;$(document).bind('mousemove',function(){wn.session_alive=true;if(wn.session_alive_timeout)
clearTimeout(wn.session_alive_timeout);wn.session_alive_timeout=setTimeout('wn.session_alive=false;',30000);})
/*
 *	lib/js/lib/json2.js
 */
var JSON;if(!JSON){JSON={};}
(function(){"use strict";function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
/*
 *	lib/js/wn/router.js
 */
wn.re_route={}
wn.route=function(){if(wn.re_route[window.location.hash]){var re_route_val=wn.get_route_str(wn.re_route[window.location.hash]);var cur_route_val=wn.get_route_str(wn._cur_route);if(decodeURIComponent(re_route_val)===decodeURIComponent(cur_route_val)){window.history.back();return;}else{window.location.hash=wn.re_route[window.location.hash];}}
wn._cur_route=window.location.hash;var page_name=wn.get_route_str();if(wn.contents[page_name]){wn.container.change_to(page_name);return;}
var route=wn.get_route();switch(route[0]){case"List":wn.views.doclistview.show(route[1]);break;case"Form":if(route.length>3){route[2]=route.splice(2).join('/');}
wn.views.formview.show(route[1],route[2]);break;case"Report":wn.views.reportview.show(route[1],route[2]);break;case"Report2":wn.views.reportview2.show();break;default:wn.views.pageview.show(route[0]);}}
wn.get_route=function(route){return $.map(wn.get_route_str(route).split('/'),function(r){return decodeURIComponent(r);});}
wn.get_route_str=function(route){if(!route)
route=window.location.hash;if(route.substr(0,1)=='#')route=route.substr(1);if(route.substr(0,1)=='!')route=route.substr(1);if(!route){route=wn.control_panel.home_page;}
return route;}
wn.make_route_str=function(args){return $.map(args,function(a){return encodeURIComponent(a)}).join('/');}
wn.set_route=function(){window.location.hash=wn.make_route_str(arguments);wn.app.set_favicon();}
wn._cur_route=null;$(window).bind('hashchange',function(){if(location.hash==wn._cur_route)
return;wn.route();});
/*
 *	lib/js/wn/request.js
 */
wn.provide('wn.request');wn.request.url='server.py';wn.request.prepare=function(opts){if(opts.btn)$(opts.btn).set_working();if(opts.show_spinner)set_loading();if(opts.freeze)freeze();if(!opts.args.cmd){console.log(opts)
throw"Incomplete Request";}}
wn.request.cleanup=function(opts,r){if(opts.btn)$(opts.btn).done_working();if(opts.show_spinner)hide_loading();if(opts.freeze)unfreeze();if(wn.boot&&wn.boot.sid&&wn.get_cookie('sid')!=wn.boot.sid){if(!wn.app.logged_out){msgprint('Session Expired. Logging you out');wn.app.logout();}
return;}
if(r.server_messages){r.server_messages=JSON.parse(r.server_messages)
msgprint(r.server_messages);}
if(r.exc){r.exc=JSON.parse(r.exc);if(r.exc instanceof Array){$.each(r.exc,function(i,v){if(v)console.log(v);})}else{console.log(r.exc);}};if(r['403']){wn.container.change_to('403');}}
wn.request.call=function(opts){wn.request.prepare(opts);$.ajax({url:opts.url||wn.request.url,data:opts.args,type:opts.type||'POST',dataType:opts.dataType||'json',success:function(r,xhr){wn.request.cleanup(opts,r);opts.success&&opts.success(r,xhr.responseText);},error:function(xhr,textStatus){wn.request.cleanup(opts,{});show_alert('Unable to complete request: '+textStatus)
opts.error&&opts.error(xhr)}})}
wn.call=function(opts){var args=$.extend({},opts.args)
if(opts.module&&opts.page){args.cmd=opts.module+'.page.'+opts.page+'.'+opts.page+'.'+opts.method}else if(opts.method){args.cmd=opts.method;}
for(key in args){if(args[key]&&typeof args[key]!='string'){args[key]=JSON.stringify(args[key]);}}
wn.request.call({args:args,success:opts.callback,error:opts.error,btn:opts.btn,freeze:opts.freeze,show_spinner:!opts.no_spinner});}
/*
 *	lib/js/wn/app.js
 */
wn.provide('wn.views');wn.provide('wn.contents');if(!console){var console={log:function(txt){}}}
$(document).ready(function(){wn.versions.check();wn.provide('wn.app');$.extend(wn.app,new wn.Application());});wn.Application=Class.extend({init:function(){var me=this;if(window.app){wn.call({method:'startup',callback:function(r,rt){wn.provide('wn.boot');wn.boot=r;if(wn.boot.profile.name=='Guest'){window.location='index.html';return;}
me.startup();}})}else{this.startup();}},startup:function(){this.load_bootinfo();this.make_page_container();this.make_nav_bar();this.set_favicon();$(document).trigger('startup');if(wn.boot){wn.route();}
$(document).trigger('app_ready');},load_bootinfo:function(){if(wn.boot){wn.model.sync(wn.boot.docs);wn.control_panel=wn.boot.control_panel;this.set_globals();}else{this.set_as_guest();}},set_globals:function(){profile=wn.boot.profile;user=wn.boot.profile.name;user_fullname=wn.user_info(user).fullname;user_defaults=profile.defaults;user_roles=profile.roles;user_email=profile.email;sys_defaults=wn.boot.sysdefaults;},set_as_guest:function(){profile={name:'Guest'};user='Guest';user_fullname='Guest';user_defaults={};user_roles=['Guest'];user_email='';sys_defaults={};},make_page_container:function(){wn.container=new wn.views.Container();wn.views.make_403();wn.views.make_404();},make_nav_bar:function(){if(wn.boot){wn.container.wntoolbar=new wn.ui.toolbar.Toolbar();}},logout:function(){var me=this;me.logged_out=true;wn.call({method:'logout',callback:function(r){if(r.exc){console.log(r.exc);}
me.redirect_to_login();}})},redirect_to_login:function(){window.location.href='index.html';},set_favicon:function(){var link=$('link[type="image/x-icon"]').remove().attr("href");var favicon='\
   <link rel="shortcut icon" href="'+link+'" type="image/x-icon"> \
   <link rel="icon" href="'+link+'" type="image/x-icon">'
$(favicon).appendTo('head');}})

/*
 *	lib/js/legacy/globals.js
 */
wn.provide('wn.widgets.form');wn.provide('wn.widgets.report');wn.provide('wn.utils');wn.provide('wn.model');wn.provide('wn.profile');wn.provide('wn.session');wn.provide('_f');wn.provide('_p');wn.provide('_r');wn.provide('_c');wn.provide('_e');wn.provide('_startup_data')
wn.settings.no_history=1;var NEWLINE='\n';var profile=null;var user=null;var user_defaults=null;var user_roles=null;var user_fullname=null;var user_email=null;var user_img={};var pscript={};var selector=null;var top_index=91;var _f={};var _p={};var _e={};var _r={};var FILTER_SEP='\1';var frms={};var cur_frm=null;var pscript={};var validated=true;var validation_message='';var tinymce_loaded=null;
/*
 *	lib/js/legacy/utils/datatype.js
 */
wn.utils.full_name=function(fn,ln){return fn+(ln?' ':'')+(ln?ln:'')}
function fmt_money(v){if(v==null||v=='')return'0.00';v=(v+'').replace(/,/g,'');v=parseFloat(v);if(isNaN(v)){return'';}else{var val=2;if(wn.boot.sysdefaults.currency_format=='Millions')val=3;v=v.toFixed(2);var delimiter=",";amount=v+'';var a=amount.split('.',2)
var d=a[1];var i=parseInt(a[0]);if(isNaN(i)){return'';}
var minus='';if(v<0){minus='-';}
i=Math.abs(i);var n=new String(i);var a=[];if(n.length>3)
{var nn=n.substr(n.length-3);a.unshift(nn);n=n.substr(0,n.length-3);while(n.length>val)
{var nn=n.substr(n.length-val);a.unshift(nn);n=n.substr(0,n.length-val);}}
if(n.length>0){a.unshift(n);}
n=a.join(delimiter);if(d.length<1){amount=n;}
else{amount=n+'.'+d;}
amount=minus+amount;return amount;}}
function toTitle(str){var word_in=str.split(" ");var word_out=[];for(w in word_in){word_out[w]=word_in[w].charAt(0).toUpperCase()+word_in[w].slice(1);}
return word_out.join(" ");}
function is_null(v){if(v==null){return 1}else if(v==0){if((v+'').length>=1)return 0;else return 1;}else{return 0}}
function $s(ele,v,ftype,fopt){if(v==null)v='';if(ftype=='Text'||ftype=='Small Text'){ele.innerHTML=v?v.replace(/\n/g,'<br>'):'';}else if(ftype=='Date'){v=dateutil.str_to_user(v);if(v==null)v=''
ele.innerHTML=v;}else if(ftype=='Link'&&fopt){ele.innerHTML='';doc_link(ele,fopt,v);}else if(ftype=='Currency'){ele.style.textAlign='right';if(is_null(v))
ele.innerHTML='';else
ele.innerHTML=fmt_money(v);}else if(ftype=='Int'){ele.style.textAlign='right';ele.innerHTML=v;}else if(ftype=='Check'){if(v)ele.innerHTML='<img src="images/lib/ui/tick.gif">';else ele.innerHTML='';}else{ele.innerHTML=v;}}
function clean_smart_quotes(s){if(s){s=s.replace(/\u2018/g,"'");s=s.replace(/\u2019/g,"'");s=s.replace(/\u201c/g,'"');s=s.replace(/\u201d/g,'"');s=s.replace(/\u2013/g,'-');s=s.replace(/\u2014/g,'--');}
return s;}
function copy_dict(d){var n={};for(var k in d)n[k]=d[k];return n;}
function $p(ele,top,left){ele.style.position='absolute';ele.style.top=top+'px';ele.style.left=left+'px';}
function replace_newlines(t){return t?t.replace(/\n/g,'<br>'):'';}
function cstr(s){if(s==null)return'';return s+'';}
function nth(number){number=cint(number);var s='th';if((number+'').substr(-1)=='1')s='st';if((number+'').substr(-1)=='2')s='nd';if((number+'').substr(-1)=='3')s='rd';return number+s;}
function flt(v,decimals){if(v==null||v=='')return 0;v=(v+'').replace(/,/g,'');v=parseFloat(v);if(isNaN(v))
v=0;if(decimals!=null)
return parseFloat(v.toFixed(decimals));return v;}
function esc_quotes(s){if(s==null)s='';return s.replace(/'/,"\'");}
var crop=function(s,len){if(s.length>len)
return s.substr(0,len-3)+'...';else
return s;}
var strip=function(s,chars){var s=lstrip(s,chars)
s=rstrip(s,chars);return s;}
var lstrip=function(s,chars){if(!chars)chars=['\n','\t',' '];var first_char=s.substr(0,1);while(in_list(chars,first_char)){var s=s.substr(1);first_char=s.substr(0,1);}
return s;}
var rstrip=function(s,chars){if(!chars)chars=['\n','\t',' '];var last_char=s.substr(s.length-1);while(in_list(chars,last_char)){var s=s.substr(0,s.length-1);last_char=s.substr(s.length-1);}
return s;}
function repl_all(s,s1,s2){var idx=s.indexOf(s1);while(idx!=-1){s=s.replace(s1,s2);idx=s.indexOf(s1);}
return s;}
function repl(s,dict){if(s==null)return'';for(key in dict)s=repl_all(s,'%('+key+')s',dict[key]);return s;}
function keys(obj){var mykeys=[];for(key in obj)mykeys[mykeys.length]=key;return mykeys;}
function values(obj){var myvalues=[];for(key in obj)myvalues[myvalues.length]=obj[key];return myvalues;}
function in_list(list,item){for(var i=0;i<list.length;i++)
if(list[i]==item)return true;return false;}
function has_common(list1,list2){if(!list1||!list2)return false;for(var i=0;i<list1.length;i++){if(in_list(list2,list1[i]))return true;}
return false;}
var inList=in_list;function add_lists(l1,l2){var l=[];for(var k in l1)l.push(l1[k]);for(var k in l2)l.push(l2[k]);return l;}
function docstring(obj){return JSON.stringify(obj);}
function DocLink(p,doctype,name,onload){var a=$a(p,'span','link_type');a.innerHTML=a.dn=name;a.dt=doctype;a.onclick=function(){loaddoc(this.dt,this.dn,onload)};return a;}
var doc_link=DocLink;function roundNumber(num,dec){var result=Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);return result;}
/*
 *	lib/js/legacy/utils/datetime.js
 */
function same_day(d1,d2){if(d1.getFullYear()==d2.getFullYear()&&d1.getMonth()==d2.getMonth()&&d1.getDate()==d2.getDate())return true;else return false;}
var month_list=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var month_last={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
var month_list_full=['January','February','March','April','May','June','July','August','September','October','November','December'];var week_list=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];var week_list_full=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];function int_to_str(i,len){i=''+i;if(i.length<len)for(c=0;c<(len-i.length);c++)i='0'+i;return i}
wn.datetime={str_to_obj:function(d){if(typeof d=="object")return d;if(!d)return new Date();var tm=[null,null];if(d.search(' ')!=-1){var tm=d.split(' ')[1].split(':');var d=d.split(' ')[0];}
if(d.search('-')!=-1){var t=d.split('-');return new Date(t[0],t[1]-1,t[2],tm[0],tm[1]);}else if(d.search('/')!=-1){var t=d.split('/');return new Date(t[0],t[1]-1,t[2],tm[0],tm[1]);}else{return new Date();}},obj_to_str:function(d){if(typeof d=='string')return d;return d.getFullYear()+'-'+int_to_str(d.getMonth()+1,2)+'-'+int_to_str(d.getDate(),2);},obj_to_user:function(d){return dateutil.str_to_user(dateutil.obj_to_str(d));},get_diff:function(d1,d2){if(typeof d1=='string')d1=dateutil.str_to_obj(d1);if(typeof d2=='string')d2=dateutil.str_to_obj(d2);return((d1-d2)/86400000);},get_day_diff:function(d1,d2){return dateutil.get_diff(new Date(d1.getYear(),d1.getMonth(),d1.getDate(),0,0),new Date(d2.getYear(),d2.getMonth(),d2.getDate(),0,0))},add_days:function(d,days){var dt=dateutil.str_to_obj(d);var new_dt=new Date(dt.getTime()+(days*24*60*60*1000));return dateutil.obj_to_str(new_dt);},add_months:function(d,months){dt=dateutil.str_to_obj(d)
new_dt=new Date(dt.getFullYear(),dt.getMonth()+months,dt.getDate())
if(new_dt.getDate()!=dt.getDate()){return dateutil.month_end(new Date(dt.getFullYear(),dt.getMonth()+months,1))}
return dateutil.obj_to_str(new_dt);},month_start:function(){var d=new Date();return d.getFullYear()+'-'+int_to_str(d.getMonth()+1,2)+'-01';},month_end:function(d){if(!d)var d=new Date();var m=d.getMonth()+1;var y=d.getFullYear();last_date=month_last[m];if(m==2&&(y%4)==0&&((y%100)!=0||(y%400)==0))
last_date=29;return y+'-'+int_to_str(m,2)+'-'+last_date;},get_user_fmt:function(){var t=sys_defaults.date_format;if(!t)t='dd-mm-yyyy';return t;},str_to_user:function(val,no_time_str){var user_fmt=dateutil.get_user_fmt();var time_str='';if(val==null||val=='')return null;if(val.search(':')!=-1){var tmp=val.split(' ');if(tmp[1])
time_str=' '+tmp[1];var d=tmp[0];}else{var d=val;}
if(no_time_str)time_str='';d=d.split('-');if(d.length==3){if(user_fmt=='dd-mm-yyyy')
val=d[2]+'-'+d[1]+'-'+d[0]+time_str;else if(user_fmt=='dd/mm/yyyy')
val=d[2]+'/'+d[1]+'/'+d[0]+time_str;else if(user_fmt=='yyyy-mm-dd')
val=d[0]+'-'+d[1]+'-'+d[2]+time_str;else if(user_fmt=='mm/dd/yyyy')
val=d[1]+'/'+d[2]+'/'+d[0]+time_str;else if(user_fmt=='mm-dd-yyyy')
val=d[1]+'-'+d[2]+'-'+d[0]+time_str;}
return val;},full_str:function(){var d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '
+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();},user_to_str:function(d){var user_fmt=this.get_user_fmt();if(user_fmt=='dd-mm-yyyy'){var d=d.split('-');return d[2]+'-'+d[1]+'-'+d[0];}
else if(user_fmt=='dd/mm/yyyy'){var d=d.split('/');return d[2]+'-'+d[1]+'-'+d[0];}
else if(user_fmt=='yyyy-mm-dd'){return d;}
else if(user_fmt=='mm/dd/yyyy'){var d=d.split('/');return d[2]+'-'+d[0]+'-'+d[1];}
else if(user_fmt=='mm-dd-yyyy'){var d=d.split('-');return d[2]+'-'+d[0]+'-'+d[1];}},global_date_format:function(d){if(d.substr)d=this.str_to_obj(d);return nth(d.getDate())+' '+month_list_full[d.getMonth()]+' '+d.getFullYear();},get_today:function(){var today=new Date();var m=(today.getMonth()+1)+'';if(m.length==1)m='0'+m;var d=today.getDate()+'';if(d.length==1)d='0'+d;return today.getFullYear()+'-'+m+'-'+d;},get_cur_time:function(){var d=new Date();var hh=d.getHours()+''
var mm=cint(d.getMinutes()/5)*5+''
return(hh.length==1?'0'+hh:hh)+':'+(mm.length==1?'0'+mm:mm);}}
wn.datetime.only_date=function(val){if(val==null||val=='')return null;if(val.search(':')!=-1){var tmp=val.split(' ');var d=tmp[0].split('-');}else{var d=val.split('-');}
if(d.length==3)
val=d[2]+'-'+d[1]+'-'+d[0];return val;}
wn.datetime.time_to_ampm=function(v){if(!v){var d=new Date();var t=[d.getHours(),cint(d.getMinutes()/5)*5+'']}else{var t=v.split(':');}
if(t.length!=2){show_alert('[set_time] Incorect time format');return;}
if(t[1].length==1)t[1]='0'+t[1];if(cint(t[0])==0)var ret=['12',t[1],'AM'];else if(cint(t[0])<12)var ret=[cint(t[0])+'',t[1],'AM'];else if(cint(t[0])==12)var ret=['12',t[1],'PM'];else var ret=[(cint(t[0])-12)+'',t[1],'PM'];return ret;}
wn.datetime.time_to_hhmm=function(hh,mm,am){if(am=='AM'&&hh=='12'){hh='00';}else if(am=='PM'&&hh!='12'){hh=cint(hh)+12;}
if(!mm)mm='00';if(!hh)hh='00';return hh+':'+mm;}
function prettyDate(time){if(!time)return''
var date=time;if(typeof(time)=="string")
date=new Date((time||"").replace(/-/g,"/").replace(/[TZ]/g," ").replace(/\.[0-9]*/,""));var diff=(((new Date()).getTime()-date.getTime())/1000),day_diff=Math.floor(diff/86400);if(isNaN(day_diff)||day_diff<0)
return'';return day_diff==0&&(diff<60&&"just now"||diff<120&&"1 minute ago"||diff<3600&&Math.floor(diff/60)+" minutes ago"||diff<7200&&"1 hour ago"||diff<86400&&Math.floor(diff/3600)+" hours ago")||day_diff==1&&"Yesterday"||day_diff<7&&day_diff+" days ago"||day_diff<31&&Math.ceil(day_diff/7)+" weeks ago"||day_diff<365&&Math.ceil(day_diff/30)+" months ago"||"more than "+Math.floor(day_diff/365)+" year(s) ago";}
if(typeof jQuery!="undefined")
jQuery.fn.prettyDate=function(){return this.each(function(){var date=prettyDate(this.title);if(date)
jQuery(this).text(date);});};var comment_when=prettyDate;wn.datetime.comment_when=prettyDate;var date=dateutil=wn.datetime;var get_today=wn.datetime.get_today
var time_to_ampm=wn.datetime.time_to_ampm;var time_to_hhmm=wn.datetime.time_to_hhmm;var only_date=wn.datetime.only_date;
/*
 *	lib/js/legacy/utils/dom.js
 */
wn.tinymce={add_simple:function(ele,height){if(ele.myid){tinyMCE.execCommand('mceAddControl',true,ele.myid);return;}
ele.myid=wn.dom.set_unique_id(ele);$(ele).tinymce({script_url:'js/lib/tiny_mce_33/tiny_mce.js',height:height?height:'200px',theme:"advanced",theme_advanced_buttons1:"bold,italic,underline,separator,strikethrough,justifyleft,justifycenter,justifyright,justifyfull,bullist,numlist,outdent,indent,link,unlink,forecolor,backcolor,code,",theme_advanced_buttons2:"",theme_advanced_buttons3:"",theme_advanced_toolbar_location:"top",theme_advanced_toolbar_align:"left",theme_advanced_path:false,theme_advanced_resizing:false});},remove:function(ele){tinyMCE.execCommand('mceRemoveControl',true,ele.myid);},get_value:function(ele){return tinymce.get(ele.myid).getContent();}}
wn.ele={link:function(args){var span=$a(args.parent,'span','link_type',args.style);span.loading_img=$a(args.parent,'img','',{margin:'0px 4px -2px 4px',display:'none'});span.loading_img.src='images/lib/ui/button-load.gif';span.innerHTML=args.label;span.user_onclick=args.onclick;span.onclick=function(){if(!this.disabled)this.user_onclick(this);}
span.set_working=function(){this.disabled=1;$di(this.loading_img);}
span.done_working=function(){this.disabled=0;$dh(this.loading_img);}
return span;}}
function $ln(parent,label,onclick,style){return wn.ele.link({parent:parent,label:label,onclick:onclick,style:style})}
function $btn(parent,label,onclick,style,css_class,is_ajax){if(css_class==='green')css_class='btn-info';return new wn.ui.Button({parent:parent,label:label,onclick:onclick,style:style,is_ajax:is_ajax,css_class:css_class}).btn;}
$item_normal=function(ele){$y(ele,{padding:'6px 8px',cursor:'pointer',marginRight:'8px',whiteSpace:'nowrap',overflow:'hidden',borderBottom:'1px solid #DDD'});$bg(ele,'#FFF');$fg(ele,'#000');}
$item_active=function(ele){$bg(ele,'#FE8');$fg(ele,'#000');}
$item_selected=function(ele){$bg(ele,'#777');$fg(ele,'#FFF');}
$item_pressed=function(ele){$bg(ele,'#F90');$fg(ele,'#FFF');};function set_opacity(ele,ieop){var op=ieop/100;if(ele.filters){try{ele.filters.item("DXImageTransform.Microsoft.Alpha").opacity=ieop;}catch(e){ele.style.filter='progid:DXImageTransform.Microsoft.Alpha(opacity='+ieop+')';}}else{ele.style.opacity=op;}}
$br=function(ele,r,corners){if(corners){var cl=['top-left','top-right','bottom-right','bottom-left'];for(var i=0;i<4;i++){if(corners[i]){$(ele).css('-moz-border-radius-'+cl[i].replace('-',''),r).css('-webkit-'+cl[i]+'-border-radius',r);}}}else{$(ele).css('-moz-border-radius',r).css('-webkit-border-radius',r).css('border-radius',r);}}
$bs=function(ele,r){$(ele).css('-moz-box-shadow',r).css('-webkit-box-shadow',r).css('box-shadow',r);}
function SelectWidget(parent,options,width,editable,bg_color){var me=this;this.inp=$a(parent,'select');if(options)add_sel_options(this.inp,options);if(width)$y(this.inp,{width:width});this.set_width=function(w){$y(this.inp,{width:w})};this.set_options=function(o){add_sel_options(this.inp,o);}
this.inp.onchange=function(){if(me.onchange)me.onchange(this);}
return;}
function empty_select(s){if(s.custom_select){s.empty();return;}
if(s.inp)s=s.inp;if(s){var tmplen=s.length;for(var i=0;i<tmplen;i++)s.options[0]=null;}}
function sel_val(s){if(s.custom_select){return s.inp.value?s.inp.value:'';}
if(s.inp)s=s.inp;try{if(s.selectedIndex<s.options.length)return s.options[s.selectedIndex].value;else return'';}catch(err){return'';}}
function add_sel_options(s,list,sel_val,o_style){if(s.custom_select){s.set_options(list)
if(sel_val)s.inp.value=sel_val;return;}
if(s.inp)s=s.inp;for(var i=0,len=list.length;i<len;i++){var o=new Option(list[i],list[i],false,(list[i]==sel_val?true:false));if(o_style)$y(o,o_style);s.options[s.options.length]=o;}}
function cint(v,def){v=v+'';v=lstrip(v,['0']);v=parseInt(v);if(isNaN(v))v=def?def:0;return v;}
function validate_email(id){if(strip(id.toLowerCase()).search("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")==-1)return 0;else return 1;}
function validate_spl_chars(txt){if(txt.search(/^[a-zA-Z0-9_\- ]*$/)==-1)return 1;else return 0;}
function d2h(d){return cint(d).toString(16);}
function h2d(h){return parseInt(h,16);}
var $n='\n';function set_title(t){document.title=(wn.title_prefix?(wn.title_prefix+' - '):'')+t;}
function $a(parent,newtag,className,cs,innerHTML,onclick){if(parent&&parent.substr)parent=$i(parent);var c=document.createElement(newtag);if(parent)
parent.appendChild(c);if(className){if(newtag.toLowerCase()=='img')
c.src=className
else
c.className=className;}
if(cs)$y(c,cs);if(innerHTML)c.innerHTML=innerHTML;if(onclick)c.onclick=onclick;return c;}
function $a_input(p,in_type,attributes,cs){if(!attributes)attributes={};var $input=$(p).append('<input type="'+in_type+'">').find('input:last');for(key in attributes)
$input.attr(key,attributes[key]);var input=$input.get(0);if(cs)
$y(input,cs);return input;}
function $dh(d){if(d&&d.substr)d=$i(d);if(d&&d.style.display.toLowerCase()!='none')d.style.display='none';}
function $ds(d){if(d&&d.substr)d=$i(d);var t='block';if(d&&in_list(['span','img','button'],d.tagName.toLowerCase()))
t='inline'
if(d&&d.style.display.toLowerCase()!=t)
d.style.display=t;}
function $di(d){if(d&&d.substr)d=$i(d);if(d)d.style.display='inline';}
function $i(id){if(!id)return null;if(id&&id.appendChild)return id;return document.getElementById(id);}
function $w(e,w){if(e&&e.style&&w)e.style.width=w;}
function $h(e,h){if(e&&e.style&&h)e.style.height=h;}
function $bg(e,w){if(e&&e.style&&w)e.style.backgroundColor=w;}
function $y(ele,s){if(ele&&s){for(var i in s)ele.style[i]=s[i];};return ele;}
function $yt(tab,r,c,s){var rmin=r;var rmax=r;if(r=='*'){rmin=0;rmax=tab.rows.length-1;}
if(r.search&&r.search('-')!=-1){r=r.split('-');rmin=cint(r[0]);rmax=cint(r[1]);}
var cmin=c;var cmax=c;if(c=='*'){cmin=0;cmax=tab.rows[0].cells.length-1;}
if(c.search&&c.search('-')!=-1){c=c.split('-');rmin=cint(c[0]);rmax=cint(c[1]);}
for(var ri=rmin;ri<=rmax;ri++){for(var ci=cmin;ci<=cmax;ci++)
$y($td(tab,ri,ci),s);}}
function set_style(txt){wn.dom.set_style(txt);}
function make_table(parent,nr,nc,table_width,widths,cell_style,table_style){var t=$a(parent,'table');t.style.borderCollapse='collapse';if(table_width)t.style.width=table_width;if(cell_style)t.cell_style=cell_style;for(var ri=0;ri<nr;ri++){var r=t.insertRow(ri);for(var ci=0;ci<nc;ci++){var c=r.insertCell(ci);if(ri==0&&widths&&widths[ci]){c.style.width=widths[ci];}
if(cell_style){for(var s in cell_style)c.style[s]=cell_style[s];}}}
t.append_row=function(){return append_row(this);}
if(table_style)$y(t,table_style);return t;}
function append_row(t,at,style){var r=t.insertRow(at?at:t.rows.length);if(t.rows.length>1){for(var i=0;i<t.rows[0].cells.length;i++){var c=r.insertCell(i);if(style)$y(c,style);}}
return r}
function $td(t,r,c){if(r<0)r=t.rows.length+r;if(c<0)c=t.rows[0].cells.length+c;return t.rows[r].cells[c];}
wn.urllib={get_arg:function(name){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);if(results==null)
return"";else
return decodeURIComponent(results[1]);},get_dict:function(){var d={}
var t=window.location.href.split('?')[1];if(!t)return d;if(t.indexOf('#')!=-1)t=t.split('#')[0];if(!t)return d;t=t.split('&');for(var i=0;i<t.length;i++){var a=t[i].split('=');d[decodeURIComponent(a[0])]=decodeURIComponent(a[1]);}
return d;},get_base_url:function(){var url=window.location.href.split('#')[0].split('?')[0].split('app.html')[0];if(url.substr(url.length-1,1)=='/')url=url.substr(0,url.length-1)
return url},get_file_url:function(file_id){return repl('files/%(fn)s',{fn:file_id})}}
get_url_arg=wn.urllib.get_arg;get_url_dict=wn.urllib.get_dict;
/*
 *	lib/js/legacy/utils/handler.js
 */
function $c(command,args,callback,error,no_spinner,freeze_msg,btn){wn.request.call({args:$.extend(args,{cmd:command}),success:callback,error:error,btn:btn,freeze:freeze_msg,show_spinner:!no_spinner})}
function $c_obj(doclist,method,arg,callback,no_spinner,freeze_msg,btn){if(arg&&typeof arg!='string')arg=JSON.stringify(arg);args={cmd:'runserverobj',arg:arg,method:method};if(typeof doclist=='string')
args.doctype=doclist;else
args.docs=compress_doclist(doclist)
wn.request.call({args:args,success:callback,btn:btn,freeze:freeze_msg,show_spinner:!no_spinner});}
function $c_page(module,page,method,arg,callback,no_spinner,freeze_msg,btn){if(arg&&typeof arg!='string')arg=JSON.stringify(arg);wn.request.call({args:{cmd:module+'.page.'+page+'.'+page+'.'+method,arg:arg,method:method},success:callback,btn:btn,freeze:freeze_msg,show_spinner:!no_spinner});}
function $c_obj_csv(doclist,method,arg){var args={}
args.cmd='runserverobj';args.as_csv=1;args.method=method;args.arg=arg;if(doclist.substr)
args.doctype=doclist;else
args.docs=compress_doclist(doclist);open_url_post(wn.request.url,args);}
function open_url_post(URL,PARAMS,new_window){var temp=document.createElement("form");temp.action=URL;temp.method="POST";temp.style.display="none";if(new_window){temp.target='_blank';}
for(var x in PARAMS){var opt=document.createElement("textarea");opt.name=x;var val=PARAMS[x];if(typeof val!='string')
val=JSON.stringify(val);opt.value=val;temp.appendChild(opt);}
document.body.appendChild(temp);temp.submit();return temp;}
/*
 *	lib/js/legacy/utils/msgprint.js
 */
var msg_dialog;function msgprint(msg,title){if(!msg)return;if(msg instanceof Array){$.each(msg,function(i,v){if(v)msgprint(v);})
return;}
if(typeof(msg)!='string')
msg=JSON.stringify(msg);if(msg.substr(0,8)=='__small:'){show_alert(msg.substr(8));return;}
if(!msg_dialog){msg_dialog=new wn.ui.Dialog({title:"Message",onhide:function(){msg_dialog.msg_area.empty();}});msg_dialog.msg_area=$('<div class="msgprint">').appendTo(msg_dialog.body);}
if(msg.search(/<br>|<p>|<li>/)==-1)
msg=replace_newlines(msg);msg_dialog.set_title(title||'Message')
msg_dialog.msg_area.append('<p>'+msg+'</p>');msg_dialog.show();}
var growl_area;function show_alert(txt,id){if(!growl_area){if(!$('#dialog-container').length){$('<div id="dialog-container">').appendTo('body');}
growl_area=$a($i('dialog-container'),'div','',{position:'fixed',bottom:'8px',right:'8px',width:'320px',zIndex:10});}
var wrapper=$a(growl_area,'div','',{position:'relative'});var body=$a(wrapper,'div','notice');var c=$a(body,'i','icon-remove-sign',{cssFloat:'right',cursor:'pointer'});$(c).click(function(){$dh(this.wrapper)});c.wrapper=wrapper;var t=$a(body,'div','',{color:'#FFF'});$(t).html(txt);if(id){$(t).attr('id',id);}
$(wrapper).hide().fadeIn(1000);}
/*
 *	lib/js/legacy/utils/printElement.js
 */;(function(window,undefined){var document=window["document"];var $=window["jQuery"];$.fn["printElement"]=function(options){var mainOptions=$.extend({},$.fn["printElement"]["defaults"],options);if(mainOptions["printMode"]=='iframe'){if($.browser.opera||(/chrome/.test(navigator.userAgent.toLowerCase())))
mainOptions["printMode"]='popup';}
$("[id^='printElement_']").remove();return this.each(function(){var opts=$.meta?$.extend({},mainOptions,$(this).data()):mainOptions;_printElement($(this),opts);});};$.fn["printElement"]["defaults"]={"printMode":'iframe',"pageTitle":'',"overrideElementCSS":null,"printBodyOptions":{"styleToAdd":'padding:10px;margin:10px;',"classNameToAdd":''},"leaveOpen":false,"iframeElementOptions":{"styleToAdd":'border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;',"classNameToAdd":''}};$.fn["printElement"]["cssElement"]={"href":'',"media":''};function _printElement(element,opts){var html=_getMarkup(element,opts);var popupOrIframe=null;var documentToWriteTo=null;if(opts["printMode"].toLowerCase()=='popup'){popupOrIframe=window.open('about:blank','printElementWindow','width=650,height=440,scrollbars=yes');documentToWriteTo=popupOrIframe.document;}
else{var printElementID="printElement_"+(Math.round(Math.random()*99999)).toString();var iframe=document.createElement('IFRAME');$(iframe).attr({style:opts["iframeElementOptions"]["styleToAdd"],id:printElementID,className:opts["iframeElementOptions"]["classNameToAdd"],frameBorder:0,scrolling:'no',src:'about:blank'});document.body.appendChild(iframe);documentToWriteTo=(iframe.contentWindow||iframe.contentDocument);if(documentToWriteTo.document)
documentToWriteTo=documentToWriteTo.document;iframe=document.frames?document.frames[printElementID]:document.getElementById(printElementID);popupOrIframe=iframe.contentWindow||iframe;}
focus();documentToWriteTo.open();documentToWriteTo.write(html);documentToWriteTo.close();_callPrint(popupOrIframe);};function _callPrint(element){if(element&&element["printPage"])
element["printPage"]();else
setTimeout(function(){_callPrint(element);},50);}
function _getElementHTMLIncludingFormElements(element){var $element=$(element);var elementHtml=$('<div></div>').append($element.clone()).html();return elementHtml;}
function _getBaseHref(){var port=(window.location.port)?':'+window.location.port:'';return window.location.protocol+'//'+window.location.hostname+port+window.location.pathname;}
function _getMarkup(element,opts){var $element=$(element);var elementHtml=_getElementHTMLIncludingFormElements(element);var html=new Array();html.push('<html><head><title>'+opts["pageTitle"]+'</title>');if(opts["overrideElementCSS"]){if(opts["overrideElementCSS"].length>0){for(var x=0;x<opts["overrideElementCSS"].length;x++){var current=opts["overrideElementCSS"][x];if(typeof(current)=='string')
html.push('<link type="text/css" rel="stylesheet" href="'+current+'" >');else
html.push('<link type="text/css" rel="stylesheet" href="'+current["href"]+'" media="'+current["media"]+'" >');}}}
else{$("link",document).filter(function(){return $(this).attr("rel").toLowerCase()=="stylesheet";}).each(function(){html.push('<link type="text/css" rel="stylesheet" href="'+$(this).attr("href")+'" media="'+$(this).attr('media')+'" >');});}
html.push('<base href="'+_getBaseHref()+'" />');html.push('</head><body style="'+opts["printBodyOptions"]["styleToAdd"]+'" class="'+opts["printBodyOptions"]["classNameToAdd"]+'">');html.push('<div class="'+$element.attr('class')+'">'+elementHtml+'</div>');html.push('<script type="text/javascript">function printPage(){focus();print();'+((!$.browser.opera&&!opts["leaveOpen"]&&opts["printMode"].toLowerCase()=='popup')?'close();':'')+'}</script>');html.push('</body></html>');return html.join('');};})(window);
/*
 *	lib/js/wn/ui/appframe.js
 */
wn.ui.AppFrame=Class.extend({init:function(parent,title){this.buttons={};this.$w=$('<div></div>').appendTo(parent);this.$titlebar=$('<div class="appframe-titlebar">\
   <span class="appframe-title"></span>\
   <span class="close" style="line-height: 28px;">&times;</span>\
  </div>').appendTo(this.$w);this.$w.find('.close').click(function(){window.history.back();})
if(title)this.title(title);},title:function(txt){this.clear_breadcrumbs();this.add_breadcrumb(txt);},make_toolbar:function(){if(!this.$w.find('.appframe-toolbar').length)
this.$w.append('<div class="appframe-toolbar btn-toolbar"></div>');},add_button:function(label,click,icon){this.make_toolbar();args={label:label,icon:''};if(icon){args.icon='<i class="icon '+icon+'"></i>';}
this.buttons[label]=$(repl('<button class="btn btn-small">\
   %(icon)s %(label)s</button>',args)).click(click).appendTo(this.new_btn_group());return this.buttons[label];},new_btn_group:function(){return $('<div class="btn-group">').appendTo(this.$w.find('.appframe-toolbar'));},add_help_button:function(txt){this.make_toolbar();$('<button class="btn btn-small" style="float:right;" button-type="help">\
   <b>?</b></button>').data('help-text',txt).click(function(){msgprint($(this).data('help-text'),'Help');}).appendTo(this.new_btn_group().css('float','right'));},add_inverse_button:function(label,click){$('<button class="btn btn-small btn-inverse"></button>').on('click',click).html(label).appendTo(this.new_btn_group().css('float','right'));},clear_buttons:function(){this.$w.find('.appframe-toolbar').empty();},add_breadcrumb:function(html){if(!this.$breadcrumbs)
this.$breadcrumbs=$('</span>\
    <span class="breadcrumb-area"></span>').appendTo(this.$titlebar);var crumb=$('<span>').html(html);if(!this.$breadcrumbs.find('span').length){crumb.addClass('appframe-title');}
crumb.appendTo(this.$breadcrumbs);},clear_breadcrumbs:function(){this.$breadcrumbs&&this.$breadcrumbs.empty();}});wn.ui.make_app_page=function(opts){if(opts.single_column){$(opts.parent).html('<div class="layout-wrapper layout-wrapper-appframe">\
   <div class="layout-appframe"></div>\
   <div class="layout-main"></div>\
  </div>');}else{$(opts.parent).html('<div class="layout-wrapper layout-wrapper-background">\
   <div class="layout-appframe"></div>\
   <div class="layout-main-section"></div>\
   <div class="layout-side-section"></div>\
   <div class="clear"></div>\
  </div>');}
opts.parent.appframe=new wn.ui.AppFrame($(opts.parent).find('.layout-appframe'));if(opts.title)opts.parent.appframe.title(opts.title);}
/*
 *	lib/js/wn/ui/button.js
 */
wn.ui.Button=function(args){var me=this;$.extend(this,{make:function(){me.btn=wn.dom.add(args.parent,'button','btn btn-small '+(args.css_class||''));me.btn.args=args;me.loading_img=wn.dom.add(me.btn.args.parent,'img','',{margin:'0px 4px -2px 4px',display:'none'});me.loading_img.src='images/lib/ui/button-load.gif';me.btn.innerHTML=args.label;me.btn.user_onclick=args.onclick;$(me.btn).bind('click',function(){if(!this.disabled&&this.user_onclick)
this.user_onclick(this);})
me.btn.set_working=me.set_working;me.btn.done_working=me.done_working;if(me.btn.args.style)
wn.dom.css(me.btn,args.style);},set_working:function(){me.btn.disabled='disabled';$(me.loading_img).css('display','inline');},done_working:function(){me.btn.disabled=false;$(me.loading_img).toggle(false);}});this.make();}
/*
 *	lib/js/wn/ui/dialog.js
 */
wn.ui.Dialog=Class.extend({init:function(opts){$.extend(this,opts);this.display=false;if(!this.width)this.width=640;if(!$('#dialog-container').length){$('<div id="dialog-container">').appendTo('body');}
this.wrapper=$('<div class="dialog_wrapper">').appendTo('#dialog-container').get(0);this.wrapper.style.width=this.width+'px';this.make_head();this.body=$('<div class="dialog_body">').appendTo(this.wrapper).get(0);},make_head:function(){var me=this;this.appframe=new wn.ui.AppFrame(this.wrapper);this.appframe.$titlebar.find('.close').unbind('click').click(function(){if(me.oncancel)me.oncancel();me.hide();});this.set_title(this.title);},set_title:function(t){this.appframe.$titlebar.find('.appframe-title').html(t||'');},set_postion:function(){this.wrapper.style.left=(($(window).width()-parseInt(this.wrapper.style.width))/2)+'px';this.wrapper.style.top=($(window).scrollTop()+60)+'px';top_index++;$(this.wrapper).css('z-index',top_index);},show:function(){if(this.display)return;this.set_postion()
$(this.wrapper).toggle(true);freeze();this.display=true;wn.ui.cur_dialog=this;if(this.onshow)this.onshow();},hide:function(){if(this.onhide)this.onhide();unfreeze();$(this.wrapper).toggle(false);this.display=false;wn.ui.cur_dialog=null;},no_cancel:function(){this.appframe.$titlebar.find('.close').toggle(false);}});wn.ui.cur_dialog=null;$(document).bind('keydown',function(e){if(wn.ui.cur_dialog&&!wn.ui.cur_dialog.no_cancel_flag&&e.which==27){wn.ui.cur_dialog.hide();}});
/*
 *	lib/js/wn/ui/filters.js
 */
wn.ui.FilterList=Class.extend({init:function(opts){$.extend(this,opts);this.filters=[];this.$w=this.$parent;this.set_events();},set_events:function(){var me=this;this.$w.find('.add-filter-btn').bind('click',function(){me.add_filter();});this.$w.find('.search-btn').bind('click',function(){me.listobj.run();});},show_filters:function(){this.$w.find('.show_filters').toggle();if(!this.filters.length)
this.add_filter();},add_filter:function(fieldname,condition,value){this.push_new_filter(fieldname,condition,value);if(fieldname){this.$w.find('.show_filters').toggle(true);}},push_new_filter:function(fieldname,condition,value){this.filters.push(new wn.ui.Filter({flist:this,fieldname:fieldname,condition:condition,value:value}));},get_filters:function(){var values=[];$.each(this.filters,function(i,f){if(f.field)
values.push(f.get_value());})
return values;},update_filters:function(){var fl=[];$.each(this.filters,function(i,f){if(f.field)fl.push(f);})
this.filters=fl;},get_filter:function(fieldname){for(var i in this.filters){if(this.filters[i].field.docfield.fieldname==fieldname)
return this.filters[i];}}});wn.ui.Filter=Class.extend({init:function(opts){$.extend(this,opts);this.doctype=this.flist.doctype;this.make();this.make_select();this.set_events();},make:function(){this.flist.$w.find('.filter_area').append('<div class="list_filter">\
  <span class="fieldname_select_area"></span>\
  <select class="condition">\
   <option value="=">Equals</option>\
   <option value="like">Like</option>\
   <option value=">=">Greater or equals</option>\
   <option value="<=">Less or equals</option>\
   <option value=">">Greater than</option>\
   <option value="<">Less than</option>\
   <option value="in">In</option>\
   <option value="!=">Not equals</option>\
  </select>\
  <span class="filter_field"></span>\
  <a class="close">&times;</a>\
  </div>');this.$w=this.flist.$w.find('.list_filter:last-child');},make_select:function(){this.fieldselect=new wn.ui.FieldSelect(this.$w.find('.fieldname_select_area'),this.doctype,this.filter_fields);},set_events:function(){var me=this;this.fieldselect.$select.bind('change',function(){me.set_field(this.value);});this.$w.find('a.close').bind('click',function(){me.$w.css('display','none');var value=me.field.get_value();me.field=null;if(!me.flist.get_filters().length){me.flist.$w.find('.set_filters').toggle(true);me.flist.$w.find('.show_filters').toggle(false);}
if(value){me.flist.listobj.run();}
me.flist.update_filters();return false;});me.$w.find('.condition').change(function(){if($(this).val()=='in'){me.set_field(me.field.docfield.fieldname,'Data');if(!me.field.desc_area)
me.field.desc_area=$a(me.field.wrapper,'span','help',null,'values separated by comma');}else{me.set_field(me.field.docfield.fieldname);}});if(me.fieldname){this.set_values(me.fieldname,me.condition,me.value);}else{me.set_field('name');}},set_values:function(fieldname,condition,value){this.set_field(fieldname);if(condition)this.$w.find('.condition').val(condition).change();if(value)this.field.set_input(value)},set_field:function(fieldname,fieldtype){var me=this;var cur=me.field?{fieldname:me.field.docfield.fieldname,fieldtype:me.field.docfield.fieldtype}:{}
var df=me.fieldselect.fields_by_name[fieldname];this.set_fieldtype(df,fieldtype);if(me.field&&cur.fieldname==fieldname&&df.fieldtype==cur.fieldtype){return;}
me.fieldselect.$select.val(fieldname);var field_area=me.$w.find('.filter_field').empty().get(0);me.field=wn.ui.make_control({docfield:df,parent:field_area});me.field.as_inline();me.field.hide_label();this.set_default_condition(df,fieldtype);$(me.field.wrapper).find(':input').keydown(function(ev){if(ev.which==13){me.flist.listobj.run();}})},set_fieldtype:function(df,fieldtype){if(df.original_type)
df.fieldtype=df.original_type;else
df.original_type=df.fieldtype;df.description='';df.reqd=0;if(fieldtype){df.fieldtype=fieldtype;return;}
if(df.fieldtype=='Check'){df.fieldtype='Select';df.options='No\nYes';}else if(['Text','Text Editor','Code','Link'].indexOf(df.fieldtype)!=-1){df.fieldtype='Data';}},set_default_condition:function(df,fieldtype){if(!fieldtype){if(df.fieldtype=='Data'){this.$w.find('.condition').val('like');}else{this.$w.find('.condition').val('=');}}},get_value:function(){var me=this;var val=me.field.get_value();var cond=me.$w.find('.condition').val();if(me.field.docfield.original_type=='Check'){val=(val=='Yes'?1:0);}
if(cond=='like'){val=val+'%';}
return[me.fieldselect.$select.find('option:selected').attr('table'),me.field.docfield.fieldname,me.$w.find('.condition').val(),cstr(val)];}});wn.ui.FieldSelect=Class.extend({init:function(parent,doctype,filter_fields,with_blank){this.doctype=doctype;this.fields_by_name={};this.with_blank=with_blank;this.$select=$('<select>').appendTo(parent);if(filter_fields){for(var i in filter_fields)
this.add_field_option(this.filter_fields[i])}else{this.build_options();}},build_options:function(){var me=this;me.table_fields=[];var std_filters=[{fieldname:'name',fieldtype:'Data',label:'ID',parent:me.doctype},{fieldname:'modified',fieldtype:'Date',label:'Last Modified',parent:me.doctype},{fieldname:'owner',fieldtype:'Data',label:'Created By',parent:me.doctype},{fieldname:'creation',fieldtype:'Date',label:'Created On',parent:me.doctype},{fieldname:'_user_tags',fieldtype:'Data',label:'Tags',parent:me.doctype},{fieldname:'docstatus',fieldtype:'Int',label:'Doc Status',parent:me.doctype},];var doctype_obj=locals['DocType'][me.doctype];if(doctype_obj&&cint(doctype_obj.istable)){std_filters=std_filters.concat([{fieldname:'parent',fieldtype:'Data',label:'Parent',parent:me.doctype}]);}
if(this.with_blank){this.$select.append($('<option>',{value:''}).text(''));}
$.each(std_filters.concat(wn.model.get('DocType',me.doctype).get('DocField')),function(i,df){me.add_field_option(df);});$.each(me.table_fields,function(i,table_df){if(table_df.options){$.each(wn.model.get('DocType',me.doctype).get('DocField'),function(i,df){me.add_field_option(df);});}});},add_field_option:function(df){var me=this;if(me.doctype&&df.parent==me.doctype){var label=df.label;var table=me.doctype;if(df.fieldtype=='Table')me.table_fields.push(df);}else{var label=df.label+' ('+df.parent+')';var table=df.parent;}
if(wn.model.no_value_type.indexOf(df.fieldtype)==-1&&!(me.fields_by_name[df.fieldname]&&me.fields_by_name[df.fieldname]['parent']==df.parent)){this.$select.append($('<option>',{value:df.fieldname,table:table}).text(label));me.fields_by_name[df.fieldname]=df;}}})
/*
 *	lib/js/wn/ui/listing.js
 */
wn.provide('wn.ui');wn.ui.Listing=Class.extend({init:function(opts){this.opts=opts||{};this.page_length=20;this.start=0;this.data=[];if(opts){this.make();}},prepare_opts:function(){if(this.opts.new_doctype){if(wn.boot.profile.can_read.indexOf(this.opts.new_doctype)==-1){this.opts.new_doctype=null;}else{this.opts.new_doctype=get_doctype_label(this.opts.new_doctype);}}
if(!this.opts.no_result_message){this.opts.no_result_message='Nothing to show'}},make:function(opts){if(opts){this.opts=opts;}
this.prepare_opts();$.extend(this,this.opts);$(this.parent).html(repl('\
   <div class="wnlist">\
    <h3 class="title hide">%(title)s</h3>\
    \
    <div class="list-filters hide">\
     <div class="show_filters well">\
      <div class="filter_area"></div>\
      <div>\
       <button class="btn btn-small btn-info search-btn">\
        <i class="icon-refresh icon-white"></i> Search</button>\
       <button class="btn btn-small add-filter-btn">\
        <i class="icon-plus"></i> Add Filter</button>\
      </div>\
     </div>\
    </div>\
    \
    <div style="margin-bottom:9px" class="list-toolbar-wrapper">\
     <div class="list-toolbar" style="display:inline-block; margin-right: 10px;">\
     </div>\
     <div style="display:inline-block; width: 24px; margin-left: 4px">\
      <img src="images/lib/ui/button-load.gif" \
      class="img-load"/></div>\
    </div><div style="clear:both"></div>\
    \
    <div class="no-result help hide">\
     %(no_result_message)s\
    </div>\
    \
    <div class="result">\
     <div class="result-list"></div>\
    </div>\
    \
    <div class="paging-button">\
     <button class="btn btn-small btn-more hide">More...</div>\
    </div>\
   </div>\
  ',this.opts));this.$w=$(this.parent).find('.wnlist');this.set_events();if(this.appframe){this.$w.find('.list-toolbar-wrapper').toggle(false);}
if(this.show_filters){this.make_filters();}},add_button:function(label,click,icon){if(this.appframe){return this.appframe.add_button(label,click,icon)}else{$button=$('<button class="btn btn-small"></button>').appendTo(this.$w.find('.list-toolbar'))
if(icon){$('<i>').addClass(icon).appendTo($button);}
$button.html(label).click(click);return $button}},show_view:function($btn,$div,$btn_unsel,$div_unsel){$btn_unsel.removeClass('btn-info');$btn_unsel.find('i').removeClass('icon-white');$div_unsel.toggle(false);$btn.addClass('btn-info');$btn.find('i').addClass('icon-white');$div.toggle(true);},set_events:function(){var me=this;this.$w.find('.btn-more').click(function(){me.run({append:true});});if(this.title){this.$w.find('h3').html(this.title).toggle(true);}
if(!(this.hide_refresh||this.no_refresh)){this.add_button('Refresh',function(){me.run();},'icon-refresh');}
if(this.new_doctype){this.add_button('New '+this.new_doctype,function(){me.make_new_doc(me.new_doctype);},'icon-plus');}
if(me.show_filters){this.add_button('Show Filters',function(){me.filter_list.show_filters();},'icon-search').addClass('btn-filter');}
if(me.no_toolbar||me.hide_toolbar){me.$w.find('.list-toolbar-wrapper').toggle(false);}},make_new_doc:function(new_doctype){new_doc(new_doctype);},make_filters:function(){this.filter_list=new wn.ui.FilterList({listobj:this,$parent:this.$w.find('.list-filters').toggle(true),doctype:this.doctype,filter_fields:this.filter_fields});},clear:function(){this.data=[];this.$w.find('.result-list').empty();this.$w.find('.result').toggle(true);this.$w.find('.no-result').toggle(false);this.start=0;},run:function(){var me=this;var a0=arguments[0];var a1=arguments[1];if(a0&&typeof a0=='function')
this.onrun=a0;if(a0&&a0.callback)
this.onrun=a0.callback;if(!a1&&!(a0&&a0.append))
this.start=0;me.set_working(true);wn.call({method:this.opts.method||'webnotes.widgets.query_builder.runquery',args:this.get_call_args(a0),callback:function(r){me.set_working(false);me.render_results(r)},no_spinner:this.opts.no_loading});},set_working:function(flag){this.$w.find('.img-load').toggle(flag);},get_call_args:function(opts){if(!this.method){var query=this.get_query?this.get_query():this.query;query=this.add_limits(query);var args={query_max:this.query_max,as_dict:1}
args.simple_query=query;}else{var args={limit_start:this.start,limit_page_length:this.page_length}}
if(this.args)
$.extend(args,this.args)
if(this.get_args){$.extend(args,this.get_args(opts));}
return args;},render_results:function(r){if(this.start==0)this.clear();this.$w.find('.btn-more').toggle(false);if(r.message)r.values=r.message;if(r.values&&r.values.length){this.data=this.data.concat(r.values);this.render_list(r.values);this.update_paging(r.values);}else{if(this.start==0){this.$w.find('.result').toggle(false);this.$w.find('.no-result').toggle(true);}}
if(this.onrun)this.onrun();if(this.callback)this.callback(r);},render_list:function(values){var m=Math.min(values.length,this.page_length);for(var i=0;i<m;i++){this.render_row(this.add_row(),values[i],this,i);}},update_paging:function(values){if(values.length>=this.page_length){this.$w.find('.btn-more').toggle(true);this.start+=this.page_length;}},add_row:function(){return $('<div class="list-row">').appendTo(this.$w.find('.result-list')).get(0);},refresh:function(){this.run();},add_limits:function(query){query+=' LIMIT '+this.start+','+(this.page_length+1);return query}});
/*
 *	lib/js/wn/ui/overlay.js
 */
wn.ui.Overlay=function(ele){wn.require('lib/css/ui/overlay.css');var me=this;$.extend(this,{render:function(){me.wrap=wn.dom.add(wn.dom.add(wn.dom.add($('body').get(0),'div','overlay'),'div','wrap-outer'),'div','wrap');me.wrap.appendChild(ele);$('body').addClass('overlaid');},hide:function(){wn.dom.hide(me.wrap);$('body').removeClass('overlaid');}});me.render();}
/*
 *	lib/js/wn/ui/search.js
 */
wn.ui.Search=Class.extend({init:function(opts){$.extend(this,opts);var me=this;wn.model.with_doctype(this.doctype,function(r){me.make();me.dialog.show();me.list.$w.find('.list-filters input[type="text"]').focus();});},make:function(){var me=this;this.dialog=new wn.ui.Dialog({title:this.doctype+' Search',width:500});if(this.with_filters&&this.with_filters.length){this.msg_area=$('<div class="help-box">\
    <div><b>Results containing: </b></div>\
    </div>').appendTo(this.dialog.body);$.each(this.with_filters,function(i,f){var label=wn.model.get('DocType',me.doctype).get({fieldname:f[1],doctype:'DocField'}).label;$('<div>"'+label+'" '+
f[2]+' "'+f[3]+'"</div>').appendTo(me.msg_area);})}
this.list=new wn.ui.Listing({parent:$('<div>').appendTo(this.dialog.body),appframe:this.dialog.appframe,new_doctype:this.doctype,doctype:this.doctype,method:'webnotes.widgets.doclistview.get',show_filters:true,style:'compact',get_args:function(){if(me.query){me.page_length=50;return{query:me.query}}else{var filters=me.list.filter_list.get_filters()||[];if(me.with_filters){filters=filters.concat(me.with_filters);}
me.search_fields=cstr(wn.model.get("DocType",me.doctype).doc.get('search_fields'));me.search_fields=me.search_fields?me.search_fields.split(","):[];return{doctype:me.doctype,fields:$.map(["name"].concat(me.search_fields),function(v){return"`tab"+me.doctype+"`."+strip(v);}),filters:filters,docstatus:['0','1']}}},render_row:function(parent,data){$(parent).append($(repl("<a style=\"cursor: pointer;\" data-name=\"%(name)s\">%(name)s</a>",data)).click(function(){var val=$(this).attr('data-name');me.dialog.hide();if(me.callback)
me.callback(val);else
wn.set_route('Form',me.doctype,val);}));if(me.search_fields){$(parent).append(repl("<div class=\"help small\" style=\"margin-top: 5px;\">%(info)s</div>",{"info":$.map(me.search_fields,function(v){return data[v];}).join(", ")}));}}});this.list.filter_list.add_filter('name','like');if(this.txt)
this.list.$w.find('.list-filters input[type="text"]').val(this.txt)
this.list.run();}})
/*
 *	lib/js/wn/ui/toolbar.min.js
 */

/*
 *	lib/js/wn/ui/toolbar/selector_dialog.js
 */
wn.provide('wn.ui.toolbar');wn.ui.toolbar.SelectorDialog=Class.extend({init:function(opts){this.opts=opts;try{this.make_dialog();}catch(e){console.log(e);}
this.bind_events();},make_dialog:function(){this.dialog=new wn.views.FormDialog({title:this.opts.title,width:480,fields:[{fieldtype:'Select',fieldname:'doctype',options:'Select...',label:'Select Type'},{fieldtype:'Button',label:'Go',fieldname:'go'}]});},bind_events:function(){var me=this;this.dialog.form.controls.go.$input.click(function(){if(!me.dialog.display)return;me.dialog.hide();me.opts.execute(me.dialog.form.controls.doctype.get_value());return false;});this.dialog.form.controls.doctype.$input.change(function(){me.dialog.form.controls.go.$input.click();}).keypress(function(ev){if(ev.which==13){me.dialog.form.controls.go.$input.click();}});},show:function(){this.dialog.show();this.dialog.form.controls.doctype.$input.focus();return false;},set_values:function(lst){var $sel=this.dialog.form.controls.doctype.$input;$sel.empty().add_options(lst.sort());}})
/*
 *	lib/js/wn/ui/toolbar/new.js
 */
wn.ui.toolbar.NewDialog=wn.ui.toolbar.SelectorDialog.extend({init:function(){this._super({title:"New Record",execute:function(val){new_doc(val);},});this.set_values(profile.can_create.join(',').split(','));}});
/*
 *	lib/js/wn/ui/toolbar/search.js
 */
wn.ui.toolbar.Search=wn.ui.toolbar.SelectorDialog.extend({init:function(){this._super({title:"Search",execute:function(val){new wn.ui.Search({doctype:val});},});this.set_values(wn.boot.profile.can_search.join(',').split(','));}});
/*
 *	lib/js/wn/ui/toolbar/report.js
 */
wn.ui.toolbar.Report=wn.ui.toolbar.SelectorDialog.extend({init:function(){this._super({title:"Start Report For",execute:function(val){wn.set_route('Report2',val);},});this.set_values(profile.can_get_report.join(',').split(','));}});
/*
 *	lib/js/wn/ui/toolbar/recent.js
 */
wn.ui.toolbar.RecentDocs=Class.extend({init:function(){$('.navbar .nav:first').append('<li class="dropdown">\
   <a class="dropdown-toggle" data-toggle="dropdown" href="#" \
    onclick="return false;">Recent<b class="caret"></b></a>\
   <ul class="dropdown-menu" id="toolbar-recent"></ul>\
  </li>');this.setup();this.bind_events();},bind_events:function(){var me=this;$(document).bind('rename',function(event,dt,old_name,new_name){me.rename_notify(dt,old_name,new_name)});},rename_notify:function(dt,old,name){this.remove(dt,old);this.add(dt,name,1);},add:function(dt,dn,on_top){if(this.istable(dt))return;this.remove(dt,dn);var html=repl('<li data-docref="%(dt)s/%(dn)s">\
   <a href="#Form/%(dt)s/%(dn)s">\
    %(dn)s <span style="font-size: 10px">(%(dt)s)</span>\
   </a></li>',{dt:dt,dn:dn});if(on_top){$('#toolbar-recent').prepend(html);}else{$('#toolbar-recent').append(html);}},istable:function(dt){var dtl=wn.model.get('DocType',dt);return dtl?dtl.doc.get('istable'):false;},remove:function(dt,dn){$(repl('#toolbar-recent li[data-docref="%(dt)s/%(dn)s"]',{dt:dt,dn:dn})).remove();},setup:function(){var rlist=JSON.parse(profile.recent||"[]");var m=rlist.length;if(m>15)m=15;for(var i=0;i<m;i++){var rd=rlist[i]
if(rd[1]){var dt=rd[0];var dn=rd[1];this.add(dt,dn,0);}}}});
/*
 *	lib/js/wn/ui/toolbar/toolbar.js
 */
wn.ui.toolbar.Toolbar=Class.extend({init:function(){this.make();this.make_home();this.make_document();wn.ui.toolbar.recent=new wn.ui.toolbar.RecentDocs();this.make_tools();this.set_user_name();this.make_logout();$('.dropdown-toggle').dropdown();$(document).trigger('toolbar_setup');},make:function(){$('header').append('<div class="navbar navbar-fixed-top">\
   <div class="navbar-inner">\
   <div class="container">\
    <a class="brand"></a>\
    <ul class="nav">\
    </ul>\
    <img src="images/lib/ui/spinner.gif" id="spinner"/>\
    <ul class="nav pull-right">\
     <li class="dropdown">\
      <a class="dropdown-toggle" data-toggle="dropdown" href="#" \
       onclick="return false;" id="toolbar-user-link"></a>\
      <ul class="dropdown-menu" id="toolbar-user">\
      </ul>\
     </li>\
    </ul>\
   </div>\
   </div>\
   </div>');},make_home:function(){$('.navbar .brand').attr('href',"#");},make_document:function(){wn.ui.toolbar.new_dialog=new wn.ui.toolbar.NewDialog();wn.ui.toolbar.search=new wn.ui.toolbar.Search();wn.ui.toolbar.report=new wn.ui.toolbar.Report();$('.navbar .nav:first').append('<li class="dropdown">\
   <a class="dropdown-toggle" href="#"  data-toggle="dropdown"\
    onclick="return false;">Document<b class="caret"></b></a>\
   <ul class="dropdown-menu" id="toolbar-document">\
    <li><a href="#" onclick="return wn.ui.toolbar.new_dialog.show();">\
     <i class="icon-plus"></i> New</a></li>\
    <li><a href="#" onclick="return wn.ui.toolbar.search.show();">\
     <i class="icon-search"></i> Search</a></li>\
    <li><a href="#" onclick="return wn.ui.toolbar.report.show();">\
     <i class="icon-list"></i> Report</a></li>\
   </ul>\
  </li>');},make_tools:function(){$('.navbar .nav:first').append('<li class="dropdown">\
   <a class="dropdown-toggle" data-toggle="dropdown" href="#" \
    onclick="return false;">Tools<b class="caret"></b></a>\
   <ul class="dropdown-menu" id="toolbar-tools">\
    <li><a href="#" onclick="return wn.ui.toolbar.clear_cache();">Clear Cache & Refresh</a></li>\
    <li><a href="#" onclick="return wn.ui.toolbar.show_about();">About</a></li>\
   </ul>\
  </li>');if(has_common(user_roles,['Administrator','System Manager'])){$('#toolbar-tools').append('<li><a href="#" \
    onclick="return wn.ui.toolbar.download_backup();">\
    Download Backup</a></li>');}},set_user_name:function(){var fn=user_fullname;if(fn.length>15)fn=fn.substr(0,12)+'...';$('#toolbar-user-link').html(fn+'<b class="caret"></b>');},make_logout:function(){$('#toolbar-user').append('<li><a href="#" onclick="return wn.app.logout();">Logout</a></li>');}});wn.ui.toolbar.clear_cache=function(){localStorage&&localStorage.clear();$c('webnotes.session_cache.clear',{},function(r,rt){if(!r.exc){show_alert(r.message);location.reload();}});return false;}
wn.ui.toolbar.download_backup=function(){$c('webnotes.utils.backups.get_backup',{},function(r,rt){});return false;}
wn.ui.toolbar.show_about=function(){try{wn.ui.misc.about();}catch(e){console.log(e);}
return false;}

/*
 *	lib/js/wn/ui/tree.js
 */
wn.ui.Tree=Class.extend({init:function(args){$.extend(this,args);this.nodes={};this.$w=$('<div class="tree">').appendTo(this.parent);this.rootnode=new wn.ui.TreeNode({tree:this,parent:this.$w,label:this.label,expandable:true});this.set_style();},set_style:function(){wn.dom.set_style("\
   .tree li { list-style: none; }\
   .tree ul { margin-top: 2px; }\
   .tree-link { cursor: pointer; }\
  ")}})
wn.ui.TreeNode=Class.extend({init:function(args){var me=this;$.extend(this,args);this.loaded=false;this.expanded=false;this.tree.nodes[this.label]=this;this.$a=$('<a class="tree-link">').click(function(){if(me.expandable&&me.tree.method&&!me.loaded){me.load()}else{me.selectnode();}
if(me.tree.click)me.tree.click(this);}).bind('reload',function(){me.reload();}).data('label',this.label).appendTo(this.parent);if(this.expandable){this.$a.append('<i class="icon-folder-close"></i> '+this.label);}else{this.$a.append('<i class="icon-file"></i> '+this.label);}
if(this.tree.onrender){this.tree.onrender(this);}},selectnode:function(){if(this.$ul){this.$ul.toggle();this.$a.find('i').removeClass();if(this.$ul.css('display').toLowerCase()=='block'){this.$a.find('i').addClass('icon-folder-open');}else{this.$a.find('i').addClass('icon-folder-close');}}
this.tree.$w.find('a.selected').removeClass('selected');this.$a.toggleClass('selected');this.expanded=!this.expanded;},reload:function(){if(this.expanded){this.$a.click();}
if(this.$ul){this.$ul.empty();}
this.load();},addnode:function(data){if(!this.$ul){this.$ul=$('<ul>').toggle(false).appendTo(this.parent);}
return new wn.ui.TreeNode({tree:this.tree,parent:$('<li>').appendTo(this.$ul),label:data.value,expandable:data.expandable,data:data});},load:function(){var me=this;args=$.extend(this.tree.args,{parent:this.label});$(me.$a).set_working();wn.call({method:this.tree.method,args:args,callback:function(r){$(me.$a).done_working();$.each(r.message,function(i,v){node=me.addnode(v);node.$a.data('node-data',v);});me.loaded=true;me.selectnode();}})}})
/*
 *	lib/js/wn/upload.js
 */
wn.upload={make:function(opts){var id=wn.dom.set_unique_id();$(opts.parent).append(repl('<iframe id="%(id)s" name="%(id)s" src="blank.html" \
    style="width:0px; height:0px; border:0px"></iframe>\
   <form method="POST" enctype="multipart/form-data" \
    action="%(action)s" target="%(id)s">\
    <input type="file" name="filedata" /><br><br>\
    <input type="submit" class="btn btn-small" value="Upload" />\
   </form>',{id:id,action:wn.request.url}));opts.args.cmd='uploadfile';opts.args._id=id;for(key in opts.args){if(opts.args[key]){$('<input type="hidden">').attr('name',key).attr('value',opts.args[key]).appendTo($(opts.parent).find('form'));}}
$('#'+id).get(0).callback=opts.callback},callback:function(id,file_id,args){$('#'+id).get(0).callback(file_id,args);}}
/*
 *	lib/js/wn/misc/about.js
 */
wn.provide('wn.ui.misc');wn.ui.misc.about=function(){if(!wn.ui.misc.about_dialog){var d=new wn.ui.Dialog({title:'About wnframework'})
$(d.body).html(repl("<div style='padding: 20px'<p><b>Application Name:</b> %(name)s</p>\
  <p><b>Version:</b> %(version)s</p>\
  <p><b>License:</b> %(license)s</p>\
  <p><b>Source Code:</b> %(source)s</p>\
  <p><b>Publisher:</b> %(publisher)s</p>\
  <p><b>Copyright:</b> %(copyright)s</p></div>",wn.app));wn.ui.misc.about_dialog=d;}
wn.ui.misc.about_dialog.show();}
/*
 *	lib/js/wn/views/breadcrumbs.js
 */
wn.provide('wn.views');wn.views.breadcrumbs=function(appframe,module,doctype,name){appframe.clear_breadcrumbs();if(name){appframe.add_breadcrumb(name);}else if(doctype){appframe.add_breadcrumb(doctype+' List');}else if(module){appframe.add_breadcrumb(module);}
if(name&&doctype&&(!wn.model.get('DocType',doctype).issingle)){appframe.add_breadcrumb(repl(' in <a href="#!List/%(doctype)s">%(doctype)s List</a>',{doctype:doctype}))};if(doctype&&module&&wn.modules&&wn.modules[module]){appframe.add_breadcrumb(repl(' in <a href="#!%(module_page)s">%(module)s</a>',{module:module,module_page:wn.modules[module]}))}}
/*
 *	lib/js/wn/views/container.js
 */
wn.views.Container=Class.extend({init:function(){this.container=$('#body_div').get(0);this.page=null;this.pagewidth=$('#body_div').width();this.pagemargin=50;},add_page:function(label,onshow,onhide){var page=$('<div class="content"></div>').attr('id',"page-"+label).appendTo(this.container).get(0);if(onshow)
$(page).bind('show',onshow);if(onshow)
$(page).bind('hide',onhide);page.label=label;wn.contents[label]=page;return page;},change_to:function(label){if(this.page&&this.page.label==label){return;}
var me=this;if(label.tagName){var page=label;}else{var page=wn.contents[label];}
if(!page){console.log('Page not found '+label);return;}
if(this.page){$(this.page).toggle(false);$(this.page).trigger('hide');}
this.page=page;$(this.page).fadeIn();$(this.page).trigger('show');this.page._route=window.location.hash;document.title=this.page.label;scroll(0,0);return this.page;}});wn.views.add_module_btn=function(parent,module){$(parent).append(repl('<span class="label" style="margin-right: 8px; cursor: pointer;"\
     onclick="wn.set_route(\'%(module_small)s-home\')">\
     <i class="icon-home icon-white"></i> %(module)s Home\
    </span>',{module:module,module_small:module.toLowerCase()}));}
wn.views.add_list_btn=function(parent,doctype){$(parent).append(repl('<span class="label" style="margin-right: 8px; cursor: pointer;"\
     onclick="wn.set_route(\'List\', \'%(doctype)s\')">\
     <i class="icon-list icon-white"></i> %(doctype)s List\
    </span>',{doctype:doctype}));}
/*
 *	lib/js/wn/views/doclistview.js
 */
wn.provide('wn.views.doclistview');wn.provide('wn.doclistviews');wn.views.doclistview.show=function(doctype){var page_name=wn.get_route_str();if(wn.pages[page_name]){wn.container.change_to(wn.pages[page_name]);}else{var route=wn.get_route();if(route[1]){wn.model.with_doctype(route[1],function(r){if(r&&r['403']){return;}
new wn.views.DocListView(route[1]);});}}}
wn.views.DocListView=wn.ui.Listing.extend({init:function(doctype){this.doctype=doctype;this.label=get_doctype_label(doctype);this.label=(this.label.toLowerCase().substr(-4)=='list')?this.label:(this.label+' List');this.meta=wn.model.get('DocType',this.doctype).doc;this.make_page();this.setup();},make_page:function(){var me=this;var page_name=wn.get_route_str();var page=wn.container.add_page(page_name);wn.container.change_to(page_name);this.$page=$(page);this.$page.html('<div class="layout-wrapper layout-wrapper-background">\
   <div class="appframe-area"></div>\
   <div class="layout-main-section">\
    <div class="wnlist-area"><div class="help">Loading...</div></div>\
   </div>\
   <div class="layout-side-section">\
    <div class="show-docstatus hide" style="margin-bottom: 19px">\
     <h4>Show</h4>\
     <div><input data-docstatus="0" type="checkbox" checked="checked" /> Drafts</div>\
     <div><input data-docstatus="1" type="checkbox" checked="checked" /> Submitted</div>\
     <div><input data-docstatus="2" type="checkbox" /> Cancelled</div>\
    </div>\
   </div>\
   <div style="clear: both"></div>\
  </div>');this.appframe=new wn.ui.AppFrame(this.$page.find('.appframe-area'));wn.views.breadcrumbs(this.appframe,this.meta.get('module'),this.doctype);},setup:function(){var me=this;me.can_delete=wn.model.can_delete(me.doctype);me.$page.find('.wnlist-area').empty(),me.setup_docstatus_filter();me.setup_listview();me.init_list();me.init_stats();me.make_report_button();me.add_delete_option();me.make_help();},make_report_button:function(){var me=this;if(wn.boot.profile.can_get_report.indexOf(this.doctype)!=-1){this.appframe.add_button('Build Report',function(){wn.set_route('Report2',me.doctype);},'icon-th')}},make_help:function(){if(this.meta.get('description')){this.appframe.add_help_button(wn.markdown('## '+this.meta.get('name')+'\n\n'
+this.meta.get('description')));}},setup_docstatus_filter:function(){var me=this;this.can_submit=wn.model.get('DocType',me.doctype).doc.get('is_submittable');if(this.can_submit){this.$page.find('.show-docstatus').removeClass('hide');this.$page.find('.show-docstatus input').click(function(){me.run();})}},setup_listview:function(){if(this.meta.get('__listjs')){eval(this.meta.get('__listjs'));this.listview=new wn.doclistviews[this.doctype](this);}else{this.listview=new wn.views.ListView(this);}
this.listview.parent=this;this.wrapper=this.$page.find('.wnlist-area');this.page_length=20;this.allow_delete=true;},init_list:function(auto_run){var me=this;this.make({method:'webnotes.widgets.doclistview.get',get_args:this.get_args,parent:this.wrapper,start:0,page_length:this.page_length,show_filters:true,show_grid:true,new_doctype:this.doctype,allow_delete:this.allow_delete,no_result_message:this.make_no_result(),columns:this.listview.fields});$(this.wrapper).find('button[list_view_doc="'+me.doctype+'"]').click(function(){me.make_new_doc(me.doctype);});if((auto_run!==false)&&(auto_run!==0))this.run();},make_no_result:function(){var no_result_message=repl('<div class="well">\
  <p>No %(doctype_label)s found</p>\
  <hr>\
  <p><button class="btn btn-info btn-small" list_view_doc="%(doctype)s">\
   Make a new %(doctype_label)s</button>\
  </p></div>',{doctype_label:get_doctype_label(this.doctype),doctype:this.doctype});return no_result_message;},render_row:function(row,data){data.doctype=this.doctype;this.listview.render(row,data,this);},get_query_fields:function(){return this.listview.fields;},get_args:function(){return{doctype:this.doctype,fields:this.get_query_fields(),filters:this.filter_list.get_filters(),docstatus:this.can_submit?$.map(this.$page.find('.show-docstatus :checked'),function(inp){return $(inp).attr('data-docstatus')}):[],order_by:this.listview.order_by||undefined,group_by:this.listview.group_by||undefined,}},add_delete_option:function(){var me=this;if(this.can_delete){this.add_button('Delete',function(){me.delete_items();},'icon-remove');$('<div style="padding: 4px"><input type="checkbox" name="select-all" />\
     Select all</div>').insertBefore(this.$page.find('.result-list'));this.$page.find('[name="select-all"]').click(function(){me.$page.find('.list-delete').attr('checked',$(this).attr('checked')||false);})}},delete_items:function(){var me=this;var dl=$.map(me.$page.find('.list-delete:checked'),function(e){return $(e).data('name');});if(!dl.length)
return;if(!confirm('This is PERMANENT action and you cannot undo. Continue?')){return;}
me.set_working(true);wn.call({method:'webnotes.widgets.doclistview.delete_items',args:{items:dl,doctype:me.doctype},callback:function(){me.set_working(false);me.refresh();}})},init_stats:function(){var me=this
wn.call({method:'webnotes.widgets.doclistview.get_stats',args:{stats:me.listview.stats,doctype:me.doctype},callback:function(r){$.each(me.listview.stats,function(i,v){me.render_stat(v,r.message[v]);});if(me.listview.stats.length){$('<button class="btn btn-small"><i class="refresh"></i> Refresh</button>').click(function(){me.reload_stats();}).appendTo($('<div class="stat-wrapper">').appendTo(me.$page.find('.layout-side-section')))}}});},render_stat:function(field,stat){var me=this;if(!stat||!stat.length){if(field=='_user_tags'){this.$page.find('.layout-side-section').append('<div class="stat-wrapper"><h4>Tags</h4>\
      <div class="help small"><i>No records tagged.</i><br><br> \
      To add a tag, open the document and click on \
      "Add Tag" on the sidebar</div></div>');}
return;}
var docfield=wn.model.get('DocType',this.doctype).get({fieldname:field});var label=docfield.length?docfield[0].get('label'):field;if(label=='_user_tags')label='Tags';var $w=$('<div class="stat-wrapper">\
   <h4>'+label+'</h4>\
   <div class="stat-grid">\
   </div>\
  </div>');stat=stat.sort(function(a,b){return b[1]-a[1]});var sum=0;$.each(stat,function(i,v){sum=sum+v[1];})
$.each(stat,function(i,v){me.render_stat_item(i,v,sum,field).appendTo($w.find('.stat-grid'));});$w.appendTo(this.$page.find('.layout-side-section'));},render_stat_item:function(i,v,max,field){var me=this;var args={}
args.label=v[0];args.width=flt(v[1])/max*100;args.count=v[1];args.field=field;$item=$(repl('<div class="stat-item">\
   <div class="stat-bar" style="width: %(width)s%"></div>\
   <div class="stat-label">\
    <a href="#" data-label="%(label)s" data-field="%(field)s">\
     %(label)s</a> \
    (%(count)s)</div>\
  </div>',args));this.setup_stat_item_click($item);return $item;},reload_stats:function(){this.$page.find('.layout-side-section .stat-wrapper').remove();this.init_stats();},setup_stat_item_click:function($item){var me=this;$item.find('a').click(function(){var fieldname=$(this).attr('data-field');var label=$(this).attr('data-label');me.set_filter(fieldname,label);return false;});},set_filter:function(fieldname,label){var filter=this.filter_list.get_filter(fieldname);if(filter){var v=filter.field.get_value();if(v.indexOf(label)!=-1){return false;}else{if(fieldname=='_user_tags'){this.filter_list.add_filter(fieldname,'like','%'+label);}else{filter.set_values(fieldname,'in',v+', '+label);}}}else{if(fieldname=='_user_tags'){this.filter_list.add_filter(fieldname,'like','%'+label);}else{this.filter_list.add_filter(fieldname,'=',label);}}
this.run();}});wn.views.ListView=Class.extend({init:function(doclistview){this.doclistview=doclistview;this.doctype=doclistview.doctype;var t="`tab"+this.doctype+"`.";this.fields=[t+'name',t+'owner',t+'docstatus',t+'_user_tags',t+'modified'];this.stats=['_user_tags'];this.show_hide_check_column();},columns:[{width:'3%',content:'check'},{width:'4%',content:'avatar'},{width:'3%',content:'docstatus',css:{"text-align":"center"}},{width:'35%',content:'name'},{width:'40%',content:'tags',css:{'color':'#aaa'}},{width:'15%',content:'modified',css:{'text-align':'right','color':'#222'}}],render_column:function(data,parent,opts){var me=this;if(opts.css){$.each(opts.css,function(k,v){$(parent).css(k,v)});}
if(opts.content.indexOf&&opts.content.indexOf('+')!=-1){$.map(opts.content.split('+'),function(v){me.render_column(data,parent,{content:v});});return;}
if(typeof opts.content=='function'){opts.content(parent,data,me);}
else if(opts.content=='name'){$(parent).append(repl('<a href="#!Form/%(doctype)s/%(name)s">%(name)s</a>',data));}
else if(opts.content=='avatar'){$(parent).append(repl('<span class="avatar-small"><img src="%(avatar)s" \
    title="%(fullname)s"/></span>',data));}
else if(opts.content=='check'){$(parent).append('<input class="list-delete" type="checkbox">');$(parent).find('input').data('name',data.name);}
else if(opts.content=='docstatus'){$(parent).append(repl('<span class="docstatus"><i class="%(docstatus_icon)s" \
    title="%(docstatus_title)s"></i></span>',data));}
else if(opts.content=='tags'){this.add_user_tags(parent,data);}
else if(opts.content=='modified'){$(parent).append(data.when);}
else if(opts.type=='bar-graph'){this.render_bar_graph(parent,data,opts.content,opts.label);}
else if(opts.type=='link'&&opts.doctype){$(parent).append(repl('<a href="#!Form/'+opts.doctype+'/'
+data[opts.content]+'">'+data[opts.content]+'</a>',data));}
else if(opts.template){$(parent).append(repl(opts.template,data));}
else if(data[opts.content]){$(parent).append(' '+data[opts.content]);}},render:function(row,data){var me=this;this.prepare_data(data);rowhtml='';$.each(this.columns,function(i,v){rowhtml+=repl('<td style="width: %(width)s"></td>',v);});var tr=$(row).html('<table><tbody><tr>'+rowhtml+'</tr></tbody></table>').find('tr').get(0);$.each(this.columns,function(i,v){me.render_column(data,tr.cells[i],v);});},prepare_data:function(data){data.fullname=wn.user_info(data.owner).fullname;data.avatar=wn.user_info(data.owner).image;this.prepare_when(data,data.modified);if(data.docstatus==0||data.docstatus==null){data.docstatus_icon='icon-pencil';data.docstatus_title='Editable';}else if(data.docstatus==1){data.docstatus_icon='icon-lock';data.docstatus_title='Submitted';}else if(data.docstatus==2){data.docstatus_icon='icon-remove';data.docstatus_title='Cancelled';}
for(key in data){if(data[key]==null){data[key]='';}}},prepare_when:function(data,date_str){if(!date_str)date_str=data.modified;data.when=dateutil.str_to_user(date_str).split(' ')[0];var diff=dateutil.get_diff(dateutil.get_today(),date_str.split(' ')[0]);if(diff==0){data.when=dateutil.comment_when(date_str);}
if(diff==1){data.when='Yesterday'}
if(diff==2){data.when='2 days ago'}},add_user_tags:function(parent,data){var me=this;if(data._user_tags){if($(parent).html().length>0){$(parent).append('<br />');}
$.each(data._user_tags.split(','),function(i,t){if(t){$('<span class="label label-info" style="cursor: pointer; line-height: 200%">'
+strip(t)+'</span>').click(function(){me.doclistview.set_filter('_user_tags',$(this).text())}).appendTo(parent);}});}},show_hide_check_column:function(){if(!this.doclistview.can_delete){this.columns=$.map(this.columns,function(v,i){if(v.content!='check')return v});}},render_bar_graph:function(parent,data,field,label){var args={percent:data[field],fully_delivered:(data[field]>99?'bar-complete':''),label:label}
$(parent).append(repl('<span class="bar-outer" style="width: 30px; float: right" \
   title="%(percent)s% %(label)s">\
   <span class="bar-inner %(fully_delivered)s" \
    style="width: %(percent)s%;"></span>\
  </span>',args));},render_icon:function(parent,icon_class,label){var icon_html="<i class='%(icon_class)s' title='%(label)s'></i>";$(parent).append(repl(icon_html,{icon_class:icon_class,label:label||''}));}});wn.provide('wn.views.RecordListView');wn.views.RecordListView=wn.views.DocListView.extend({init:function(doctype,wrapper,ListView){this.doctype=doctype;this.wrapper=wrapper;this.listview=new ListView(this);this.listview.parent=this;this.setup();},setup:function(){var me=this;me.page_length=10;$(me.wrapper).empty();me.init_list();},get_args:function(){var args=this._super();$.each((this.default_filters||[]),function(i,f){args.filters.push(f);});args.docstatus=args.docstatus.concat((this.default_docstatus||[]));return args;},});
/*
 *	lib/js/wn/views/formview.js
 */
wn.provide('wn.views.formview');wn.provide('wn.forms');wn.views.formview={show:function(dt,dn){wn.model.with_doctype(dt,function(){wn.model.with_doc(dt,dn,function(dn,r){if(r&&r['403'])return;if(!(wn.model.get(dt,dn))){wn.container.change_to('404');return;}
if(wn.model.get('DocType',dt).get_value('in_dialog')){var form_dialog=new wn.views.FormDialog({doc:wn.model.get(dt,dn).doc});form_dialog.show();}else{var page_name=wn.get_route_str();if(wn.contents[page_name]){wn.container.change_to(page_name);}else{wn.get_or_set(wn.forms,dt,{})[dn]=new wn.views.FormPage(dt,dn);}}});})},create:function(dt){var newdoclist=wn.model.create(dt);wn.set_route('Form',dt,newdoclist.doc.get('name'));}}
/*
 *	lib/js/wn/views/pageview.js
 */
wn.provide('wn.views.pageview');wn.provide('wn.pages');wn.views.pageview={with_page:function(name,callback){if(!wn.model.has('Page',name)){wn.call({method:'webnotes.widgets.page.getpage',args:{'name':name},callback:function(r){wn.model.sync(r.docs);callback();}});}else{callback();}},show:function(name){if(!name)
name=(wn.boot?wn.boot.home_page:window.page_name);wn.views.pageview.with_page(name,function(r){if(r&&r.exc){if(!r['403'])wn.container.change_to('404');}else if(!wn.pages[name]){new wn.views.Page(name);}
wn.container.change_to(name);});}}
wn.views.Page=Class.extend({init:function(name,wrapper){this.name=name;var me=this;wn.pages[name]=this;if(name==window.page_name){this.wrapper=$('#page-'+name).get(0);this.wrapper.label=document.title||window.page_name;this.wrapper.page_name=window.page_name;wn.contents[window.page_name]=this.wrapper;}else{this.pagedoc=wn.model.get('Page',this.name).doc;this.wrapper=wn.container.add_page(this.name);this.wrapper.label=this.pagedoc.get('title')||this.pagedoc.get('name');this.wrapper.page_name=this.pagedoc.get('name');this.wrapper.innerHTML=this.pagedoc.get('content');wn.dom.eval(this.pagedoc.get('script',''));wn.dom.set_style(this.pagedoc.get('style',''));this.trigger('load',this.wrapper);}
$(this.wrapper).bind('show',function(){cur_frm=null;me.trigger('show',this.wrapper);me.trigger('refresh',this.wrapper);});}})
wn.views.make_404=function(){var page=wn.container.add_page('404');$(page).html('<div class="layout-wrapper">\
  <h1>Not Found</h1><br>\
  <p>Sorry we were unable to find what you were looking for.</p>\
  <p><a href="#">Go back to home</a></p>\
  </div>').toggle(false);};wn.views.make_403=function(){var page=wn.container.add_page('403');$(page).html('<div class="layout-wrapper">\
  <h1>Not Permitted</h1><br>\
  <p>Sorry you are not permitted to view this page.</p>\
  <p><a href="#">Go back to home</a></p>\
  </div>').toggle(false);};
/*
 *	lib/js/wn/views/reportview.js
 */
wn.views.reportview={show:function(dt,rep_name){wn.require('js/report-legacy.js');dt=get_label_doctype(dt);if(!_r.rb_con){_r.rb_con=new _r.ReportContainer();}
_r.rb_con.set_dt(dt,function(rb){if(rep_name){var route_changed=(rb.current_route!=wn.get_route_str())
rb.load_criteria(rep_name);if(rb.dt&&route_changed){rb.dt.run();}}
if(!rb.forbidden){wn.container.change_to('Report Builder');}});}}
wn.views.reportview2={show:function(dt){var page_name=wn.get_route_str();if(wn.pages[page_name]){wn.container.change_to(wn.pages[page_name]);}else{var route=wn.get_route();if(route[1]){new wn.views.ReportViewPage(route[1],route[2]);}else{wn.set_route('404');}}}}
wn.views.ReportViewPage=Class.extend({init:function(doctype,docname){this.doctype=doctype;this.docname=docname;this.page_name=wn.get_route_str();this.make_page();var me=this;wn.model.with_doctype(doctype,function(){me.make_report_view();if(docname){wn.model.with_doc('Report',docname,function(r){me.reportview.set_columns_and_filters(JSON.parse(locals['Report'][docname].json));me.reportview.run();});}else{me.reportview.run();}});},make_page:function(){this.page=wn.container.add_page(this.page_name);wn.ui.make_app_page({parent:this.page,single_column:true});wn.container.change_to(this.page_name);},make_report_view:function(){this.page.appframe.add_breadcrumb(locals.DocType[this.doctype].module);this.reportview=new wn.views.ReportView(this.doctype,this.docname,this.page)}})
wn.views.ReportView=wn.ui.Listing.extend({init:function(doctype,docname,page){var me=this;$(page).find('.layout-main').html('Loading Report...');wn.lib.import_slickgrid();$(page).find('.layout-main').empty();this.doctype=doctype;this.docname=docname;this.page=page;this.tab_name='`tab'+doctype+'`';this.setup();},set_init_columns:function(){var columns=[['name'],['owner']];$.each(wn.meta.docfield_list[this.doctype],function(i,df){if(df.in_filter&&df.fieldname!='naming_series'&&df.fieldtype!='Table'){columns.push([df.fieldname]);}});this.columns=columns;},setup:function(){var me=this;this.make({title:'Report: '+(this.docname?(this.doctype+' - '+this.docname):this.doctype),appframe:this.page.appframe,method:'webnotes.widgets.doclistview.get',get_args:this.get_args,parent:$(this.page).find('.layout-main'),start:0,page_length:20,show_filters:true,new_doctype:this.doctype,allow_delete:true,});this.make_column_picker();this.make_sorter();this.make_export();this.set_init_columns();this.make_save();},set_columns_and_filters:function(opts){var me=this;if(opts.columns)this.columns=opts.columns;if(opts.filters)$.each(opts.filters,function(i,f){me.filter_list.add_filter(f[1],f[2],f[3]);});if(opts.sort_by)this.sort_by_select.val(opts.sort_by);if(opts.sort_order)this.sort_order_select.val(opts.sort_order);if(opts.sort_by_next)this.sort_by_next_select.val(opts.sort_by_next);if(opts.sort_order_next)this.sort_order_next_select.val(opts.sort_order_next);},get_args:function(){var me=this;return{doctype:this.doctype,fields:$.map(this.columns,function(v){return me.get_full_column_name(v)}),order_by:this.get_order_by(),filters:this.filter_list.get_filters(),docstatus:['0','1','2']}},get_order_by:function(){var order_by=this.get_selected_table_and_column(this.sort_by_select)
+' '+this.sort_order_select.val()
if(this.sort_by_next_select.val()){order_by+=', '+this.get_selected_table_and_column(this.sort_by_next_select)
+' '+this.sort_order_next_select.val()}
return order_by;},get_selected_table_and_column:function($select){return this.get_full_column_name([$select.val(),$select.find('option:selected').attr('table')])},get_full_column_name:function(v){return(v[1]?('`tab'+v[1]+'`'):this.tab_name)+'.'+v[0];},build_columns:function(){var me=this;return $.map(this.columns,function(c){var docfield=wn.meta.docfield_map[c[1]||me.doctype][c[0]];coldef={id:c[0],field:c[0],docfield:docfield,name:(docfield?docfield.label:toTitle(c[0])),width:(docfield?cint(docfield.width):120)||120}
if(c[0]=='name'){coldef.formatter=function(row,cell,value,columnDef,dataContext){return repl("<a href='#!Form/%(doctype)s/%(name)s'>%(name)s</a>",{doctype:me.doctype,name:value});}}else if(docfield&&docfield.fieldtype=='Link'){coldef.formatter=function(row,cell,value,columnDef,dataContext){if(value){return repl("<a href='#!Form/%(doctype)s/%(name)s'>%(name)s</a>",{doctype:columnDef.docfield.options,name:value});}else{return'';}}}
return coldef;});},render_list:function(){var me=this;var columns=[{id:'_idx',field:'_idx',name:'Sr.',width:40}].concat(this.build_columns());$.each(this.data,function(i,v){v._idx=i+1;});var options={enableCellNavigation:true,enableColumnReorder:false};var grid=new Slick.Grid(this.$w.find('.result-list').css('border','1px solid grey').css('height','500px').get(0),this.data,columns,options);},make_column_picker:function(){var me=this;this.column_picker=new wn.ui.ColumnPicker(this);this.page.appframe.add_button('Pick Columns',function(){me.column_picker.show(me.columns);},'icon-th-list');},make_sorter:function(){var me=this;this.sort_dialog=new wn.ui.Dialog({title:'Sorting Preferences'});$(this.sort_dialog.body).html('<p class="help">Sort By</p>\
   <div class="sort-column"></div>\
   <div><select class="sort-order" style="margin-top: 10px; width: 60%;">\
    <option value="asc">Ascending</option>\
    <option value="desc">Descending</option>\
   </select></div>\
   <hr><p class="help">Then By (optional)</p>\
   <div class="sort-column-1"></div>\
   <div><select class="sort-order-1" style="margin-top: 10px; width: 60%;">\
    <option value="asc">Ascending</option>\
    <option value="desc">Descending</option>\
   </select></div><hr>\
   <div><button class="btn btn-small btn-info">Update</div>');this.sort_by_select=new wn.ui.FieldSelect($(this.sort_dialog.body).find('.sort-column'),this.doctype).$select;this.sort_by_select.css('width','60%');this.sort_order_select=$(this.sort_dialog.body).find('.sort-order');this.sort_by_next_select=new wn.ui.FieldSelect($(this.sort_dialog.body).find('.sort-column-1'),this.doctype,null,true).$select;this.sort_by_next_select.css('width','60%');this.sort_order_next_select=$(this.sort_dialog.body).find('.sort-order-1');this.sort_by_select.val('modified');this.sort_order_select.val('desc');this.sort_by_next_select.val('');this.sort_order_next_select.val('desc');this.page.appframe.add_button('Sort By',function(){me.sort_dialog.show();},'icon-arrow-down');$(this.sort_dialog.body).find('.btn-info').click(function(){me.sort_dialog.hide();me.run();});},make_export:function(){var me=this;if(wn.user.is_report_manager()){this.page.appframe.add_button('Export',function(){var args=me.get_args();args.cmd='webnotes.widgets.doclistview.export_query'
open_url_post(wn.request.url,args);},'icon-download-alt');}},make_save:function(){var me=this;if(wn.user.is_report_manager()){this.page.appframe.add_button('Save',function(){if(me.docname){var name=me.docname}else{var name=prompt('Select Report Name');if(!name){return;}}
wn.call({method:'webnotes.widgets.doclistview.save_report',args:{name:name,doctype:me.doctype,json:JSON.stringify({filters:me.filter_list.get_filters(),columns:me.columns,sort_by:me.sort_by_select.val(),sort_order:me.sort_order_select.val(),sort_by_next:me.sort_by_next_select.val(),sort_order_next:me.sort_order_next_select.val()})},callback:function(r){if(r.exc)return;if(r.message!=me.docname)
wn.set_route('Report2',me.doctype,r.message);}});},'icon-upload');}}});wn.ui.ColumnPicker=Class.extend({init:function(list){this.list=list;this.doctype=list.doctype;this.selects={};},show:function(columns){wn.require('js/lib/jquery/jquery.ui.sortable.js');var me=this;if(!this.dialog){this.dialog=new wn.ui.Dialog({title:'Pick Columns',width:'400'});}
$(this.dialog.body).html('<div class="help">Drag to sort columns</div>\
   <div class="column-list"></div>\
   <div><button class="btn btn-small btn-add"><i class="icon-plus"></i>\
    Add Column</button></div>\
   <hr>\
   <div><button class="btn btn-small btn-info">Update</div>');$.each(columns,function(i,c){me.add_column(c);});$(this.dialog.body).find('.column-list').sortable();$(this.dialog.body).find('.btn-add').click(function(){me.add_column('name');});$(this.dialog.body).find('.btn-info').click(function(){me.dialog.hide();me.list.columns=[];$(me.dialog.body).find('select').each(function(){me.list.columns.push([$(this).val(),$(this).find('option:selected').attr('table')]);})
me.list.run();});this.dialog.show();},add_column:function(c){var w=$('<div style="padding: 5px 5px 5px 35px; background-color: #eee; width: 70%; \
   margin-bottom: 10px; border-radius: 3px; cursor: move;">\
   <a class="close" style="margin-top: 5px;">&times</a>\
   </div>').appendTo($(this.dialog.body).find('.column-list'));var fieldselect=new wn.ui.FieldSelect(w,this.doctype);fieldselect.$select.css('width','90%').val(c);w.find('.close').click(function(){$(this).parent().remove();});}});
/*
 *	lib/js/wn/form/control.js
 */
wn.ui.make_control=function(opts){control_map={'Check':wn.ui.CheckControl,'Data':wn.ui.Control,'Int':wn.ui.IntControl,'Float':wn.ui.FloatControl,'Currency':wn.ui.CurrencyControl,'Link':wn.ui.LinkControl,'Select':wn.ui.SelectControl,'Table':wn.ui.GridControl,'Text':wn.ui.TextControl,'Text Editor':wn.ui.RichTextControl,'Button':wn.ui.ButtonControl}
if(control_map[opts.docfield.fieldtype]){return new control_map[opts.docfield.fieldtype](opts);}else{return null;}}
wn.ui.Control=Class.extend({init:function(opts){$.extend(this,opts);this.make();this.set_events();this.apply_hidden();this.apply_mandatory();this.set_init_value();this.set_change_event();},make:function(){if(this.docfield.vertical){this.make_body_vertical();}else{this.make_body();}
this.make_input();this.make_label();},make_label:function(){if(this.docfield.label)
this.$w.find('label:first').text(this.docfield.label);if(this.no_label){this.hide_label();}else{if(this.docfield.description){this.help_block(this.docfield.description);}}},set_change_event:function(){var me=this;if(this.$input)
this.$input.change(function(){var val=$(this).val();if(me.validate){val=me.validate(val);$(this).val(val);}
if(me.doc)me.doc.fields[me.docfield.fieldname]=val;})},set_events:function(){var me=this;this.$w.find('.control-static').click(function(){me.toggle_editable(true);});},toggle_editable:function(editable){if(this.docfield.reqd)
editable=true;if(editable===undefined)
editable=!this.editable
this.toggle_input(editable);this.$w.find('.control-static').toggle(!editable);this.editable=editable;},toggle_input:function(show){this.$input&&this.$input.toggle(show);},set_init_value:function(){if(this.doc){this.set_input(this.doc.get(this.docfield.fieldname));}},hide_label:function(){this.$w.find('.control-label').toggle(false);},set_input:function(val){this.$input.val(val).change();this.set_static(val);},as_inline:function(){this.$w.css('display','inline');this.$w.find('div').css('display','inline');},set_static:function(val){this.$w.find('.control-static').html(val||'<i style="color: #888">Click to set</i>');},set:function(val){if(this.doc){this.doc.set(this.docfield.fieldname,val);}else{this.set_input(val);}},get:function(){return this.$input.val();},get_value:function(){return this.get();},make_input:function(){this.$input=$('<input type="text">').appendTo(this.$w.find('.controls'));},make_body:function(){this.$w=$('<div class="control-group">\
   <label class="control-label"></label>\
   <div class="controls">\
    <div class="control-static" style="display: none"></div>\
   </div>\
   </div>').appendTo(this.parent);},make_body_vertical:function(){this.$w=$('<div class="control-group">\
   <div class="vertical-label"><label></label></div>\
   <div class="controls" style="margin-left: 0px;">\
    <div class="control-static" style="display: none"></div>\
   </div>\
   </div>').appendTo(this.parent);if(!this.docfield.label){this.$w.find('.vertical-label').toggle(false);}},help_block:function(text){if(!text)return;if(!this.$w.find('.help-block').length){this.$w.find('.controls').append('<div class="help-block">');}
this.$w.find('.help-block').text(text);},apply_hidden:function(){this.$w.toggle(!this.docfield.hidden);},apply_mandatory:function(){var me=this;if(this.docfield.reqd){this.$input.change(function(){$(me.$w).toggleClass('error',!$(this).val())});}}});
/*
 *	lib/js/wn/form/control_grid.js
 */
wn.ui.GridControl=wn.ui.Control.extend({init:function(opts){opts.docfield.vertical=true;this.tabletype=opts.docfield.options;this._super(opts);},make_input:function(){var me=this;wn.lib.import_slickgrid();var width=$(this.parent).parent('form:first').width();this.$input_wrapper=$('<div style="height: 300px; border: 1px solid grey;"></div>').appendTo(this.$w.find('.controls')).css('width',width);var options={enableCellNavigation:true,enableColumnReorder:false,enableRowReordering:true,rowHeight:32,editable:false};this.grid=new Slick.Grid(this.$input_wrapper.get(0),[],this.get_columns(),options);this.setup_drag_and_drop();this.make_add_row_button();this.set_edit_on_double_click();this.$w.find('.vertical-label').toggle(false);},set_edit_on_double_click:function(){var me=this;this.grid.onClick.subscribe(function(e,args){if(me.selected_row==args.row){me.edit_row(me.doc.doclist.get({parentfield:me.docfield.fieldname,idx:args.row+1})[0]);}
me.selected_row=args.row;return false;});},get_columns:function(){var columns=$.map(wn.model.get('DocType',this.tabletype).get({doctype:'DocField'}),function(d){if(!d.get('hidden')){return{id:d.get('fieldname'),field:d.get('fieldname'),name:d.get('label'),width:cint(d.get('width'))||100}}else{return null;}});function EditButtonFormatter(row,cell,value,columnDef,data){return repl('<button class="btn btn-small grid-edit" \
    data-parentfield="%(parentfield)s" data-name="%(name)s">Edit</button>',data);}
return[{id:"#",name:"",width:40,behavior:"selectAndMove",selectable:false,resizable:false,cssClass:"cell-reorder dnd"},{id:'idx',field:'idx',name:'Sr',width:40}].concat(columns);},make_add_row_button:function(){var me=this;this.add_row_button=$('<button class="btn btn-small" style="margin-top: 5px;">\
   <i class="icon-plus"></i>\
   Add Row</button>').click(function(){wn.model.get(me.doc.get('doctype'),me.doc.get('name')).add_child(me.docfield.fieldname);me.set();return false;}).appendTo(this.$w.find('.controls'));},toggle_editable:function(){this.$w.find('.control-static').toggle(false);},set_init_value:function(){this.set();},get_data:function(){var data=this.doc.doclist.get({parentfield:this.docfield.fieldname});data=$.map(data,function(d){return d.fields;});data.sort(function(a,b){return a.idx>b.idx;});return data;},set:function(){this.grid.setData(this.get_data());this.grid.render();},set_edit_button:function(){var me=this;this.$input_wrapper.find('.grid-edit').on('click',function(){var d=me.doc.doclist.get({parentfield:$(this).attr('data-parentfield'),name:$(this).attr('data-name'),})[0];me.edit_row(d);return false;});},edit_row:function(d){var form_dialog=new wn.views.RowEditFormDialog({title:d.get('doctype')+' in row #'+d.get('idx'),doc:d,control_grid:this});form_dialog.show();},setup_drag_and_drop:function(){var grid=this.grid;var me=this;grid.setSelectionModel(new Slick.RowSelectionModel());var moveRowsPlugin=new Slick.RowMoveManager();moveRowsPlugin.onBeforeMoveRows.subscribe(function(e,data){for(var i=0;i<data.rows.length;i++){if(data.rows[i]==data.insertBefore||data.rows[i]==data.insertBefore-1){e.stopPropagation();return false;}}
return true;});moveRowsPlugin.onMoveRows.subscribe(function(e,args){var extractedRows=[],left,right;var rows=args.rows;var insertBefore=args.insertBefore;var data=me.get_data();left=data.slice(0,insertBefore);right=data.slice(insertBefore,data.length);rows.sort(function(a,b){return a-b;});for(var i=0;i<rows.length;i++){extractedRows.push(data[rows[i]]);}
rows.reverse();for(var i=0;i<rows.length;i++){var row=rows[i];if(row<insertBefore){left.splice(row,1);}else{right.splice(row-insertBefore,1);}}
data=left.concat(extractedRows.concat(right));var selectedRows=[];for(var i=0;i<rows.length;i++)
selectedRows.push(left.length+i);$.each(data,function(idx,row){row.idx=idx+1});grid.resetActiveCell();grid.setData(data);grid.setSelectedRows(selectedRows);grid.render();});grid.registerPlugin(moveRowsPlugin);grid.onDragInit.subscribe(function(e,dd){e.stopImmediatePropagation();});grid.onDragStart.subscribe(function(e,dd){var cell=grid.getCellFromEvent(e);if(!cell){return;}
dd.row=cell.row;if(!data[dd.row]){return;}
if(Slick.GlobalEditorLock.isActive()){return;}
e.stopImmediatePropagation();dd.mode="recycle";var selectedRows=grid.getSelectedRows();if(!selectedRows.length||$.inArray(dd.row,selectedRows)==-1){selectedRows=[dd.row];grid.setSelectedRows(selectedRows);}
dd.rows=selectedRows;dd.count=selectedRows.length;var proxy=$("<span></span>").css({position:"absolute",display:"inline-block",padding:"4px 10px",background:"#e0e0e0",border:"1px solid gray","z-index":99999,"-moz-border-radius":"8px","-moz-box-shadow":"2px 2px 6px silver"}).text("Drag to Recycle Bin to delete "+dd.count+" selected row(s)").appendTo("body");dd.helper=proxy;$(dd.available).css("background","pink");});}});
/*
 *	lib/js/wn/form/control_input.js
 */
wn.ui.IntControl=wn.ui.Control.extend({validate:function(val){return cint(val);}});wn.ui.FloatControl=wn.ui.Control.extend({validate:function(val){if(val===null)val=0;return parseFloat(val).toFixed(6);}});wn.ui.CurrencyControl=wn.ui.Control.extend({validate:function(val){if(val===null)val=0;return parseFloat(val).toFixed(6);}});wn.ui.CheckControl=wn.ui.Control.extend({make_input:function(){this.$input=$('<input type="checkbox">').appendTo(this.$w.find('.controls'));},toggle_editable:function(){},set_static:function(){}});wn.ui.TextControl=wn.ui.Control.extend({make_input:function(){this.$input=$('<textarea type="text" rows="5">').appendTo(this.$w.find('.controls'));},set_static:function(val){if(val)
this._super(wn.markdown(val));}});wn.ui.SelectControl=wn.ui.Control.extend({make_input:function(){this.$input=$('<select>').appendTo(this.$w.find('.controls'));this.$input.add_options(this.docfield.options.split('\n'));}});wn.ui.ButtonControl=wn.ui.Control.extend({make_input:function(){this.hide_label();this.$input=$('<button class="btn btn-small">').html(this.docfield.label).appendTo(this.$w.find('.controls'));},get_value:function(){return null;},toggle_editable:function(){},set_static:function(){},});
/*
 *	lib/js/wn/form/control_link.js
 */
wn.ui.LinkControl=wn.ui.Control.extend({make_input:function(){var me=this;this.$input_wrap=$('<div class="input-append">').appendTo(this.$w.find('.controls'));this.$input=$('<input type="text" size="16"/>').appendTo(this.$input_wrap);this.$button=$('<button class="btn"><i class="icon-search"></i></button>').appendTo(this.$input_wrap).click(function(){me.search_dialog=new wn.ui.Search({doctype:me.docfield.options,txt:me.$input.val(),with_filters:me.filters,df:me.docfield,callback:function(val){me.set(val);}});return false;});},toggle_input:function(show){this.$input_wrap.toggle(show);}});
/*
 *	lib/js/wn/form/control_richtext.js
 */
wn.ui.RichTextControl=wn.ui.Control.extend({init:function(opts){opts.docfield.vertical=true;this._super(opts);},make_input:function(){var me=this;this.$input_wrap=$('<div>').appendTo(this.$w.find('.controls'));this.$input=$('<textarea>').css('font-size','12px').css('height','300px').appendTo(this.$input_wrap);this.myid=wn.dom.set_unique_id(this.$input.get(0));wn.lib.import_wysihtml5();this.$input.wysihtml5();},toggle_input:function(show){this.$input_wrap.toggle(show);}});
/*
 *	lib/js/wn/form/form.js
 */
wn.ui.Form=Class.extend({init:function(opts){$.extend(this,opts);this.controls={};if(this.doc){this.meta=wn.model.get('DocType',this.doc.get('doctype'));this.fields=$.map(this.meta.get('DocField',{}),function(d){return d.fields;});if(this.doc.get('__islocal')&&this.meta.doc.get('autoname')=='Prompt'){this.doc.set('name','');this.fields=[{"fieldtype":"Data","fieldname":"name","label":"New "+this.doc.get('doctype')+" Name",reqd:1}].concat(this.fields);}}
this.make_form();this.listen();},make_form:function(){var me=this;this.$form=$('<form class="form-horizontal" style="clear: both;">').appendTo(this.parent).submit(function(){return false;});if(this.fields[0].fieldtype!='Section Break'){me.make_fieldset('_first_section');}
$.each(this.fields,function(i,df){if(df.fieldtype=='Section Break'){me.make_fieldset(df.fieldname,df.label);}else{me.controls[df.fieldname]=wn.ui.make_control({docfield:df,parent:me.last_fieldset,doc:me.doc});}});},make_fieldset:function(name,legend){var $fset=$('<fieldset data-name="'+name+'"></fieldset>').appendTo(this.$form);if(legend){$('<legend>').text(legend).appendTo($fset);}
this.last_fieldset=$fset;},listen:function(){var me=this;if(this.doc){$(document).bind(wn.model.event_name(this.doc.get('doctype'),this.doc.get('name')),function(ev,key,val){if(me.controls[key])me.controls[key].set_input(val);});}}});
/*
 *	lib/js/wn/form/form_assign.js
 */
wn.ui.AssignTo=Class.extend({init:function(opts){$.extend(this,opts);this.make_button();this.make_dropdown();if(this.form_page.doclist.doc.get('__assigned_to')){this.set_assign_button_text(wn.boot.user_info[this.form_page.doclist.doc.get('__assigned_to')]);}},make_button:function(){this.$w=$('<div class="btn-group">\
   <span class="label dropdown-toggle" \
    style="width: 180px; overflow: hidden; text-align: left; display: inline-block;" \
    data-toggle="dropdown">Not Assigned</span>\
   <ul class="dropdown-menu">\
   </ul>\
  </div>').appendTo(this.form_page.$sidebar);},make_dropdown:function(){this.assign_btn=this.$w.find('.dropdown-toggle');var ul=this.$w.find('ul');var me=this;$.each(keys(wn.boot.user_info).sort().concat(''),function(i,v){if(v!='Guest'){if(v){var ui=$.extend(wn.boot.user_info[v],{id:v});}else{var ui={fullname:'Not Assigned',id:null};$('<li class="divider"></li>').appendTo(ul);}
$('<a></a>').html(ui.fullname).data('user-info',ui).appendTo($('<li>').appendTo(ul)).click(function(){me.assign($(this).data('user-info'));});}});this.assign_btn.dropdown();},assign:function(user_info){this.assign_btn.attr('disabled','disabled').text('Updating...');var me=this;if(user_info.id){wn.model.insert({doctype:'ToDo',parent:this.form_page.doclist.doc.get('name'),parenttype:this.form_page.doclist.doc.get('doctype'),owner:user_info.id,description:'You have been assigned this.',priority:'Medium',assigned_by:user},function(r){me.set_assign_button_text(user_info);})}else{wn.call({method:'core.doctype.todo.todo.remove_todo',args:{parent:this.form_page.doclist.doc.get('name'),parenttype:this.form_page.doclist.doc.get('doctype')},callback:function(r){me.set_assign_button_text(user_info);}});}},set_assign_button_text:function(user_info){if(user_info.id){this.assign_btn.text(user_info.fullname).addClass('label-success',user_info.id);}else{this.assign_btn.text(user_info.fullname).removeClass('label-success',user_info.id);}
this.assign_btn.attr('disabled',null);this.assign_to=user_info.id;},})
/*
 *	lib/js/wn/form/form_comments.js
 */
wn.ui.Comments=Class.extend({init:function(opts){$.extend(this,opts);this.make_body();var me=this;$.each(this.form_page.doclist.doc.get('__comments'),function(i,v){me.render_comment(v);})},make_body:function(){var me=this;this.$w=$('<div class="comments-area"><br>\
   <b>Comments:</b><br>\
   <textarea style="width: 190px; height: 36px;" \
    class="comment comment-text"></textarea>\
   <button class="btn btn-small">Add Comment</button>\
   <div class="comment-list" style="margin-top: 17px;"></div>\
   </div>').appendTo(this.form_page.$sidebar);this.$w.find('.btn').click(function(){me.add_comment(me.$w.find('textarea').val());})},add_comment:function(comment){var me=this;wn.model.insert({doctype:'Comment',comment:comment,parenttype:this.form_page.doclist.doc.get('doctype'),parent:this.form_page.doclist.doc.get('name'),parentfield:'comments',comment_by:user,},function(r){me.$w.find('textarea').val('');me.render_comment(r.docs[0]);},this.$w.find('.btn'))},render_comment:function(comment){comment.date=prettyDate(comment.creation);comment.comment_by_fullname=wn.boot.user_info[comment.comment_by].fullname;$(repl('<div style="margin-bottom: 7px; border-bottom: 1px dashed #888; \
   padding-bottom: 7px;">\
    <div class="comment">%(comment)s</div>\
    <div style="font-size: 80%">\
     <span style="color: #888;">%(date)s</span>\
     <span style="float: right; color: #888;">- %(comment_by_fullname)s</span>\
    </div>\
   </div>',comment)).prependTo(this.$w.find('.comment-list'));}})
/*
 *	lib/js/wn/form/form_dialog.js
 */
wn.views.FormDialog=wn.ui.Dialog.extend({init:function(opts){$.extend(this,opts);wn.get_or_set(this,'width',600);wn.get_or_set(this,'title',this.name);wn.get_or_set(this,'form_class',wn.ui.Form);this._super();opts.parent=this.body;opts.dialog=this;opts.appframe=this.appframe;this.form=new this.form_class(opts);}})
wn.views.RowEditFormDialog=wn.views.FormDialog.extend({init:function(opts){opts.form_class=wn.ui.RowEditForm;this._super(opts);this.make_toolbar();},make_toolbar:function(){var me=this;var save_btn=this.appframe.add_button('Close',function(){me.control_grid.set();me.hide();});var delete_btn=this.appframe.add_button('Delete',function(){me.control_grid.doc.doclist.remove_child(me.doc);me.control_grid.set();me.hide();});delete_btn.addClass('btn-danger').parent().css('float','right');}});
/*
 *	lib/js/wn/form/form_page.js
 */
wn.views.FormPage=Class.extend({init:function(doctype,name){this.doclist=wn.model.get(doctype,name);this.make_page();this.set_breadcrumbs(doctype,name);this.form=new wn.ui.Form({doclist:this.doclist,doc:this.doclist.doc,parent:this.$w,appframe:this.page.appframe});this.make_toolbar(doctype,name);},set_breadcrumbs:function(doctype,name){wn.views.breadcrumbs(this.page.appframe,wn.model.get_value('DocType',doctype,'module'),doctype,name);},make_page:function(){var page_name=wn.get_route_str();this.page=wn.container.add_page(page_name);wn.ui.make_app_page({parent:this.page});wn.container.change_to(page_name);this.$w=$(this.page).find('.layout-main-section');this.$sidebar=$(this.page).find('.layout-side-section');},make_toolbar:function(){var me=this;this.page.appframe.add_button('Save',function(){var btn=this;$(this).html('Saving...').attr('disabled','disabled');freeze();me.form.doclist.save(function(r){unfreeze();$(btn).attr('disabled',false).html('Save')
if(!r.exc){var doc=me.doclist.doc;if(doc.get('name')!=wn.get_route()[2]){wn.re_route[window.location.hash]=wn.make_route_str(['Form',doc.get('doctype'),doc.get('name')])
wn.set_route('Form',doc.get('doctype'),doc.get('name'));}else{$(btn).attr('saving',1).addClass('btn-success');setTimeout('$(".btn[saving]").removeClass("btn-success").attr("saving",null)',2000);}}});});if(!this.doclist.doc.get('__islocal')){this.make_action_buttons();this.assign_to=new wn.ui.AssignTo({form_page:this});this.comments=new wn.ui.Comments({form_page:this});this.tags=new wn.ui.TagEditor({form_page:this});}
this.make_help_buttons();},make_action_buttons:function(){this.action_btn_group=$('<div class="btn-group">\
  <button class="btn dropdown-toggle btn-small" data-toggle="dropdown">\
   Actions\
   <span class="caret"></span>\
  </button>\
  <ul class="dropdown-menu">\
   <li><a href="#" class="action-new"><i class="icon icon-plus"></i> New</a></li>\
   <li><a href="#" class="action-print"><i class="icon icon-print"></i> Print...</a></li>\
   <li><a href="#" class="action-print"><i class="icon icon-envelope"></i> Email...</a></li>\
   <li><a href="#" class="action-copy"><i class="icon icon-file"></i> Copy</a></li>\
   <li><a href="#" class="action-refresh"><i class="icon icon-refresh"></i> Refresh</a></li>\
  </ul>\
  </div>').appendTo(this.page.appframe.$w.find('.appframe-toolbar'));this.action_btn_group.find('.dropdown-toggle').dropdown();},make_help_buttons:function(){var meta=this.form.meta.doc;if(meta.get('description'))
this.page.appframe.add_help_button(meta.get('description'));this.page.appframe.add_inverse_button(meta.get('name'),function(){})},});
/*
 *	lib/js/wn/form/form_tags.js
 */
wn.ui.TagEditor=Class.extend({init:function(opts){$.extend(this,opts);var me=this;this.$w=$('<div class="tag-line">').prependTo(this.form_page.$w)
this.$tags=$('<ul>').prependTo(this.$w).tagit({placeholderText:'Add Tag',onTagAdded:function(ev,tag){wn.call({method:'webnotes.widgets.tags.add_tag',args:me.get_args(tag.find('.tagit-label').text())});},onTagRemoved:function(ev,tag){wn.call({method:'webnotes.widgets.tags.remove_tag',args:me.get_args(tag.find('.tagit-label').text())});}});this.render();},get_args:function(tag){return{tag:tag,dt:this.form_page.doclist.doc.get('doctype'),dn:this.form_page.doclist.doc.get('name'),}},render:function(){var me=this;var user_tags=this.form_page.doclist.doc.get('_user_tags');if(user_tags){$.each(user_tags.split(','),function(i,v){me.$tags.tagit("createTag",v);});}}})
/*
 *	lib/js/legacy/widgets/export_query.js
 */
var export_dialog;function export_query(query,callback){if(!export_dialog){var d=new Dialog(400,300,"Export...");d.make_body([['Data','Max rows','Blank to export all rows'],['Button','Go'],]);d.widgets['Go'].onclick=function(){export_dialog.hide();n=export_dialog.widgets['Max rows'].value;if(cint(n))
export_dialog.query+=' LIMIT 0,'+cint(n);callback(export_dialog.query);}
d.onshow=function(){this.widgets['Max rows'].value='500';}
export_dialog=d;}
export_dialog.query=query;export_dialog.show();}
function export_csv(q,report_name,sc_id,is_simple,filter_values,colnames){var args={}
args.cmd='webnotes.widgets.query_builder.runquery_csv';if(is_simple)
args.simple_query=q;else
args.query=q;args.sc_id=sc_id?sc_id:'';args.filter_values=filter_values?filter_values:'';if(colnames)
args.colnames=colnames.join(',');args.report_name=report_name?report_name:'';open_url_post(wn.request.url,args);}
/*
 *	lib/js/legacy/webpage/spinner.js
 */
var pending_req=0;var fcount=0;var dialog_back;function set_loading(){pending_req++;$('#spinner').css('visibility','visible');$('body').css('cursor','progress');}
function hide_loading(){pending_req--;if(!pending_req){$('body').css('cursor','default');$('#spinner').css('visibility','hidden');}}
function freeze(){if(!dialog_back){dialog_back=$a($i('body_div'),'div','dialog_back');$(dialog_back).css('opacity',0.6);}
$ds(dialog_back);fcount++;}
function unfreeze(){if(!fcount)return;fcount--;if(!fcount){$dh(dialog_back);}}
/*
 *	lib/js/legacy/webpage/loaders.js
 */
function loadreport(dt,rep_name,onload){if(rep_name)
wn.set_route('Report',dt,rep_name);else
wn.set_route('Report',dt);}
function loaddoc(doctype,name,onload){wn.model.with_doctype(doctype,function(){if(locals.DocType[doctype].in_dialog){_f.edit_record(doctype,name);}else{wn.set_route('Form',doctype,name);}})}
var load_doc=loaddoc;function new_doc(doctype,onload,in_dialog,on_save_callback,cdt,cdn,cnic){wn.model.with_doctype(doctype,function(){wn.views.formview.create(doctype);})}
var newdoc=new_doc;var pscript={};function loadpage(page_name,call_back,no_history){wn.set_route(page_name);}
function loaddocbrowser(dt){wn.set_route('List',dt);}
/*
 *	lib/js/legacy/model/local_data.js
 */
var locals={'DocType':{}};var LocalDB={};var READ=0;var WRITE=1;var CREATE=2;var SUBMIT=3;var CANCEL=4;var AMEND=5;LocalDB.getchildren=function(child_dt,parent,parentfield,parenttype){var l=[];for(var key in locals[child_dt]){var d=locals[child_dt][key];if((d.parent==parent)&&(d.parentfield==parentfield)){if(parenttype){if(d.parenttype==parenttype)l.push(d);}else{l.push(d);}}}
l.sort(function(a,b){return(cint(a.idx)-cint(b.idx))});return l;}
LocalDB.add=function(dt,dn){if(!locals[dt])locals[dt]={};if(locals[dt][dn])delete locals[dt][dn];locals[dt][dn]={'name':dn,'doctype':dt,'docstatus':0};return locals[dt][dn];}
LocalDB.delete_doc=function(dt,dn){var doc=get_local(dt,dn);for(var ndt in locals){if(locals[ndt]){for(var ndn in locals[ndt]){var doc=locals[ndt][ndn];if(doc&&doc.parenttype==dt&&(doc.parent==dn||doc.__oldparent==dn)){delete locals[ndt][ndn];}}}}
delete locals[dt][dn];}
function get_local(dt,dn){return locals[dt]?locals[dt][dn]:null;}
LocalDB.sync=function(list){if(list._kl)list=expand_doclist(list);if(list){LocalDB.clear_locals(list[0].doctype,list[0].name);}
for(var i=0;i<list.length;i++){var d=list[i];if(!d.name)
d.name=LocalDB.get_localname(d.doctype);LocalDB.add(d.doctype,d.name);locals[d.doctype][d.name]=d;if(cur_frm&&cur_frm.doctype==d.doctype&&cur_frm.docname==d.name){cur_frm.doc=d;}
if(d.doctype=='DocField')
wn.meta.add_field(d);if(d.localname){wn.model.new_names[d.localname]=d.name;$(document).trigger('rename',[d.doctype,d.localname,d.name]);delete locals[d.doctype][d.localname];}}}
LocalDB.clear_locals=function(dt,dn){var doclist=make_doclist(dt,dn,1);$.each(doclist,function(i,v){v&&delete locals[v.doctype][v.name];});}
local_name_idx={};LocalDB.get_localname=function(doctype){if(!local_name_idx[doctype])local_name_idx[doctype]=1;var n='New '+get_doctype_label(doctype)+' '+local_name_idx[doctype];local_name_idx[doctype]++;return n;}
LocalDB.set_default_values=function(doc){var doctype=doc.doctype;var docfields=wn.meta.docfield_list[doctype];if(!docfields){return;}
var fields_to_refresh=[];for(var fid=0;fid<docfields.length;fid++){var f=docfields[fid];if(!in_list(no_value_fields,f.fieldtype)&&doc[f.fieldname]==null){var v=LocalDB.get_default_value(f.fieldname,f.fieldtype,f['default']);if(v){if(in_list(["Int","Check"],f.fieldtype)){doc[f.fieldname]=cint(v);}else if(in_list(["Currency","Float"],f.fieldtype)){doc[f.fieldname]=flt(v);}else{doc[f.fieldname]=v;}
fields_to_refresh.push(f.fieldname);}}}
return fields_to_refresh;}
function check_perm_match(p,dt,dn){if(!dn)return true;var out=false;if(p.match){if(user_defaults[p.match]){for(var i=0;i<user_defaults[p.match].length;i++){if(user_defaults[p.match][i]==locals[dt][dn][p.match]){return true;}}
return false;}else if(!locals[dt][dn][p.match]){return true;}else{return false;}}else{return true;}}
function get_perm(doctype,dn,ignore_submit){var perm=[[0,0],];if(in_list(user_roles,'Administrator'))perm[0][READ]=1;var plist=getchildren('DocPerm',doctype,'permissions','DocType');for(var pidx in plist){var p=plist[pidx];var pl=cint(p.permlevel?p.permlevel:0);if(in_list(user_roles,p.role)){if(check_perm_match(p,doctype,dn)){if(!perm[pl])perm[pl]=[];if(!perm[pl][READ]){if(cint(p.read))perm[pl][READ]=1;else perm[pl][READ]=0;}
if(!perm[pl][WRITE]){if(cint(p.write)){perm[pl][WRITE]=1;perm[pl][READ]=1;}else perm[pl][WRITE]=0;}
if(!perm[pl][CREATE]){if(cint(p.create))perm[pl][CREATE]=1;else perm[pl][CREATE]=0;}
if(!perm[pl][SUBMIT]){if(cint(p.submit))perm[pl][SUBMIT]=1;else perm[pl][SUBMIT]=0;}
if(!perm[pl][CANCEL]){if(cint(p.cancel))perm[pl][CANCEL]=1;else perm[pl][CANCEL]=0;}
if(!perm[pl][AMEND]){if(cint(p.amend))perm[pl][AMEND]=1;else perm[pl][AMEND]=0;}}}}
if((!ignore_submit)&&dn&&locals[doctype][dn].docstatus>0){for(pl in perm)
perm[pl][WRITE]=0;}
return perm;}
LocalDB.create=function(doctype,n){if(!n)n=LocalDB.get_localname(doctype);var doc=LocalDB.add(doctype,n)
doc.__islocal=1;doc.owner=user;LocalDB.set_default_values(doc);return n;}
LocalDB.delete_record=function(dt,dn){delete locals[dt][dn];}
LocalDB.get_default_value=function(fn,ft,df){if(df=='_Login'||df=='__user')
return user;else if(df=='_Full Name')
return user_fullname;else if(ft=='Date'&&(df=='Today'||df=='__today')){return get_today();}
else if(df)
return df;else if(user_defaults[fn])
return user_defaults[fn][0];else if(sys_defaults[fn])
return sys_defaults[fn];}
LocalDB.add_child=function(doc,childtype,parentfield){var n=LocalDB.create(childtype);var d=locals[childtype][n];d.parent=doc.name;d.parentfield=parentfield;d.parenttype=doc.doctype;return d;}
LocalDB.no_copy_list=['amended_from','amendment_date','cancel_reason'];LocalDB.copy=function(dt,dn,from_amend){var newdoc=LocalDB.create(dt);for(var key in locals[dt][dn]){var df=wn.meta.get_docfield(dt,key);if(key!=='name'&&key.substr(0,2)!='__'&&!(df&&((!from_amend&&cint(df.no_copy)==1)||in_list(LocalDB.no_copy_list,df.fieldname)))){locals[dt][newdoc][key]=locals[dt][dn][key];}}
return locals[dt][newdoc];}
function make_doclist(dt,dn){if(!locals[dt]){return[];}
var dl=[];dl[0]=locals[dt][dn];for(var ndt in locals){if(locals[ndt]){for(var ndn in locals[ndt]){var doc=locals[ndt][ndn];if(doc&&doc.parenttype==dt&&doc.parent==dn){dl.push(doc)}}}}
return dl;}
var Meta={};var local_dt={};Meta.make_local_dt=function(dt,dn){var dl=make_doclist('DocType',dt);if(!local_dt[dt])local_dt[dt]={};if(!local_dt[dt][dn])local_dt[dt][dn]={};for(var i=0;i<dl.length;i++){var d=dl[i];if(d.doctype=='DocField'){var key=d.fieldname?d.fieldname:d.label;local_dt[dt][dn][key]=copy_dict(d);}}}
Meta.set_field_property=function(fn,key,val,doc){if(!doc&&(cur_frm.doc))doc=cur_frm.doc;try{local_dt[doc.doctype][doc.name][fn][key]=val;refresh_field(fn);}catch(e){alert("Client Script Error: Unknown values for "+doc.name+','+fn+'.'+key+'='+val);}}
Meta.get_field=function(dt,fn,dn){try{return local_dt[dt][dn][fn];}catch(e){return null;}}
function get_doctype_label(dt){return dt}
function get_label_doctype(label){return label}
var getchildren=LocalDB.getchildren;var createLocal=LocalDB.create;
/*
 *	erpnext/startup/startup.js
 */
var current_module;var is_system_manager=0;wn.provide('erpnext.startup');erpnext.modules={'Selling':'selling-home','Accounts':'accounts-home','Stock':'stock-home','Buying':'buying-home','Support':'support-home','Projects':'projects-home','Production':'production-home','Website':'website-home','HR':'hr-home','Setup':'Setup','Activity':'activity','To Do':'todo','Calendar':'calendar','Messages':'messages','Knowledge Base':'questions','Dashboard':'dashboard'}
wn.provide('wn.modules');$.extend(wn.modules,erpnext.modules);wn.modules['Core']='Setup';erpnext.startup.set_globals=function(){if(inList(user_roles,'System Manager'))is_system_manager=1;}
erpnext.startup.start=function(){console.log('Starting up...');$('#startup_div').html('Starting up...').toggle(true);erpnext.startup.set_globals();if(user!='Guest'){if(wn.boot.user_background){erpnext.set_user_background(wn.boot.user_background);}
wn.boot.profile.allow_modules=wn.boot.profile.allow_modules.concat(['To Do','Knowledge Base','Calendar','Activity','Messages'])
erpnext.toolbar.setup();erpnext.startup.set_periodic_updates();$('footer').html('<div class="web-footer erpnext-footer">\
   <a href="#!attributions">ERPNext | Attributions and License</a></div>');if(in_list(user_roles,'System Manager')&&(wn.boot.setup_complete=='No')){wn.require("js/complete_setup.js");erpnext.complete_setup.show();}
if(wn.boot.expires_on&&in_list(user_roles,'System Manager')){var today=dateutil.str_to_obj(dateutil.get_today());var expires_on=dateutil.str_to_obj(wn.boot.expires_on);var diff=dateutil.get_diff(expires_on,today);if(0<=diff&&diff<=15){var expiry_string=diff==0?"today":repl("in %(diff)s day(s)",{diff:diff});$('header').append(repl('<div class="expiry-info"> \
     Your ERPNext subscription will <b>expire %(expiry_string)s</b>. \
     Please renew your subscription to continue using ERPNext \
     (and remove this annoying banner). \
    </div>',{expiry_string:expiry_string}));}else if(diff<0){$('header').append(repl('<div class="expiry-info"> \
     This ERPNext subscription <b>has expired</b>. \
    </div>',{expiry_string:expiry_string}));}}
erpnext.set_about();if(wn.control_panel.custom_startup_code)
eval(wn.control_panel.custom_startup_code);}}
erpnext.update_messages=function(reset){if(inList(['Guest'],user)||!wn.session_alive){return;}
if(!reset){var set_messages=function(r){if(!r.exc){erpnext.toolbar.set_new_comments(r.message.unread_messages);var show_in_circle=function(parent_id,msg){var parent=$('#'+parent_id);if(parent){if(msg){parent.find('span:first').text(msg);parent.toggle(true);}else{parent.toggle(false);}}}
show_in_circle('unread_messages',r.message.unread_messages.length);show_in_circle('open_support_tickets',r.message.open_support_tickets);show_in_circle('things_todo',r.message.things_todo);show_in_circle('todays_events',r.message.todays_events);show_in_circle('open_tasks',r.message.open_tasks);show_in_circle('unanswered_questions',r.message.unanswered_questions);}else{clearInterval(wn.updates.id);}}
wn.call({method:'startup.startup.get_global_status_messages',callback:set_messages});}else{erpnext.toolbar.set_new_comments(0);$('#unread_messages').toggle(false);}}
erpnext.startup.set_periodic_updates=function(){wn.updates={};if(wn.updates.id){clearInterval(wn.updates.id);}
wn.updates.id=setInterval(erpnext.update_messages,60000);}
erpnext.set_user_background=function(src){set_style(repl('#body_div { background: url("files/%(src)s") repeat;}',{src:src}))}
$(document).bind('startup',function(){erpnext.startup.start();});erpnext.send_message=function(opts){if(opts.btn){$(opts.btn).start_working();}
wn.call({method:'website.send_message',args:opts,callback:function(r){if(opts.btn){$(opts.btn).done_working();}
if(opts.callback)opts.callback(r)}});}
erpnext.hide_naming_series=function(){if(cur_frm.fields_dict.naming_series){hide_field('naming_series');if(cur_frm.doc.__islocal){unhide_field('naming_series');}}}
/*
 *	erpnext/startup/js/modules.js
 */
wn.provide('erpnext.module_page');erpnext.module_page.setup_page=function(module,wrapper){erpnext.module_page.hide_links(wrapper);erpnext.module_page.make_list(module,wrapper);$(wrapper).find("a[title]").tooltip({delay:{show:500,hide:100}});}
erpnext.module_page.hide_links=function(wrapper){$(wrapper).find('[href*="List/"]').each(function(){var href=$(this).attr('href');var dt=href.split('/')[1];if(wn.boot.profile.all_read.indexOf(get_label_doctype(dt))==-1){var txt=$(this).text();$(this).parent().css('color','#999').html(txt);}});$(wrapper).find('[data-doctype]').each(function(){var dt=$(this).attr('data-doctype');if(wn.boot.profile.all_read.indexOf(dt)==-1){var txt=$(this).text();$(this).parent().css('color','#999').html(txt);}});$(wrapper).find('[href*="Form/"]').each(function(){var href=$(this).attr('href');var dt=href.split('/')[1];if(wn.boot.profile.all_read.indexOf(get_label_doctype(dt))==-1){var txt=$(this).text();$(this).parent().css('color','#999').html(txt);}});}
erpnext.module_page.make_list=function(module,wrapper){var $w=$(wrapper).find('.reports-list');var $parent1=$('<div style="width: 45%; float: left; margin-right: 4.5%"></div>').appendTo($w);var $parent2=$('<div style="width: 45%; float: left;"></div>').appendTo($w);wrapper.list1=new wn.ui.Listing({parent:$parent1,method:'utilities.get_sc_list',render_row:function(row,data){if(!data.parent_doc_type)data.parent_doc_type=data.doc_type;$(row).html(repl('<a href="#!Report/%(doc_type)s/%(criteria_name)s" \
    data-doctype="%(parent_doc_type)s">\
    %(criteria_name)s</a>',data))},args:{module:module},no_refresh:true,callback:function(r){erpnext.module_page.hide_links($parent1)}});wrapper.list1.run();wrapper.list2=new wn.ui.Listing({parent:$parent2,method:'utilities.get_report_list',render_row:function(row,data){$(row).html(repl('<a href="#!Report2/%(ref_doctype)s/%(name)s" \
    data-doctype="%(ref_doctype)s">\
    %(name)s</a>',data))},args:{module:module},no_refresh:true,callback:function(r){erpnext.module_page.hide_links($parent2)}});wrapper.list2.run();$parent1.find('.list-toolbar-wrapper').prepend("<div class=\"show-all-reports\">\
   <a href=\"#List/Search Criteria\"> [ List Of All Reports ]</a></div>");$parent2.find('.list-toolbar-wrapper').prepend("<div class=\"show-all-reports\">\
   <a href=\"#List/Report\"> [ List Of All Reports (New) ]</a></div>");}
/*
 *	erpnext/startup/js/toolbar.js
 */
wn.provide('erpnext.toolbar');erpnext.toolbar.setup=function(){erpnext.toolbar.add_modules();$('#toolbar-user').append('<li><a href="#!profile-settings">Profile Settings</a></li>');$('.navbar .pull-right').append('\
  <li><a href="#!messages" title="Unread Messages"><span class="navbar-new-comments"></span></a></li>');$('.navbar .pull-right').prepend('<li class="dropdown">\
  <a class="dropdown-toggle" data-toggle="dropdown" href="#" \
   onclick="return false;">Help<b class="caret"></b></a>\
  <ul class="dropdown-menu" id="toolbar-help">\
  </ul></li>')
$('#toolbar-help').append('<li><a href="https://erpnext.com/manual" target="_blank">\
  Documentation</a></li>')
$('#toolbar-help').append('<li><a href="http://groups.google.com/group/erpnext-user-forum" target="_blank">\
  Forum</a></li>')
$('#toolbar-help').append('<li><a href="http://www.providesupport.com?messenger=iwebnotes" target="_blank">\
  Live Chat (Office Hours)</a></li>')
erpnext.toolbar.set_new_comments();}
erpnext.toolbar.add_modules=function(){$('<li class="dropdown">\
  <a class="dropdown-toggle" data-toggle="dropdown" href="#"\
   onclick="return false;">Modules<b class="caret"></b></a>\
  <ul class="dropdown-menu modules">\
  </ul>\
  </li>').prependTo('.navbar .nav:first');if(wn.boot.modules_list&&typeof(wn.boot.modules_list)=='string'){wn.boot.modules_list=JSON.parse(wn.boot.modules_list);}
else
wn.boot.modules_list=keys(erpnext.modules).sort();for(var i in wn.boot.modules_list){var m=wn.boot.modules_list[i]
if(m!='Setup'&&wn.boot.profile.allow_modules.indexOf(m)!=-1){args={module:m,module_page:erpnext.modules[m],module_label:m=='HR'?'Human Resources':m}
$('.navbar .modules').append(repl('<li><a href="#!%(module_page)s" \
    data-module="%(module)s">%(module_label)s</a></li>',args));}}
if(user_roles.indexOf("Accounts Manager")!=-1){$('.navbar .modules').append('<li><a href="#!dashboard" \
   data-module="Dashboard">Dashboard</a></li>');}
if(user_roles.indexOf("System Manager")!=-1){$('.navbar .modules').append('<li class="divider"></li>\
  <li><a href="#!Setup" data-module="Setup">Setup</a></li>');}}
erpnext.toolbar.set_new_comments=function(new_comments){var navbar_nc=$('.navbar-new-comments');if(new_comments&&new_comments.length>0){navbar_nc.text(new_comments.length);navbar_nc.addClass('navbar-new-comments-true')
$.each(new_comments,function(i,v){var msg='New Message: '+(v[1].length<=100?v[1]:(v[1].substr(0,100)+"..."));var id=v[0].replace('/','-');if(!$('#'+id)[0]){show_alert(msg,id);}})}else{navbar_nc.removeClass('navbar-new-comments-true');navbar_nc.text(0);}}
/*
 *	erpnext/startup/js/feature_setup.js
 */
pscript.feature_dict={'fs_projects':{'BOM':{'fields':['project_name']},'Delivery Note':{'fields':['project_name']},'Purchase Invoice':{'entries':['project_name']},'Production Order':{'fields':['project_name']},'Purchase Order':{'po_details':['project_name']},'Purchase Receipt':{'purchase_receipt_details':['project_name']},'Sales Invoice':{'fields':['project_name']},'Sales Order':{'fields':['project_name']},'Stock Entry':{'fields':['project_name']},'Timesheet':{'timesheet_details':['project_name']}},'fs_packing_details':{},'fs_discounts':{'Delivery Note':{'delivery_note_details':['adj_rate']},'Quotation':{'quotation_details':['adj_rate']},'Sales Invoice':{'entries':['adj_rate']},'Sales Order':{'sales_order_details':['adj_rate','ref_rate']}},'fs_purchase_discounts':{'Purchase Order':{'po_details':['purchase_ref_rate','discount_rate','import_ref_rate']},'Purchase Receipt':{'purchase_receipt_details':['purchase_ref_rate','discount_rate','import_ref_rate']},'Purchase Invoice':{'entries':['purchase_ref_rate','discount_rate','import_ref_rate']}},'fs_brands':{'Delivery Note':{'delivery_note_details':['brand']},'Purchase Request':{'indent_details':['brand']},'Item':{'fields':['brand']},'Purchase Order':{'po_details':['brand']},'Purchase Invoice':{'entries':['brand']},'Quotation':{'quotation_details':['brand']},'Sales Invoice':{'entries':['brand']},'Sales BOM':{'fields':['new_item_brand']},'Sales Order':{'sales_order_details':['brand']},'Serial No':{'fields':['brand']}},'fs_after_sales_installations':{'Delivery Note':{'fields':['installation_status','per_installed'],'delivery_note_details':['installed_qty']}},'fs_item_batch_nos':{'Delivery Note':{'delivery_note_details':['batch_no']},'Item':{'fields':['has_batch_no']},'Purchase Receipt':{'purchase_receipt_details':['batch_no']},'Quality Inspection':{'fields':['batch_no']},'Sales and Pruchase Return Wizard':{'return_details':['batch_no']},'Sales Invoice':{'entries':['batch_no']},'Stock Entry':{'mtn_details':['batch_no']},'Stock Ledger Entry':{'fields':['batch_no']}},'fs_item_serial_nos':{'Customer Issue':{'fields':['serial_no']},'Delivery Note':{'delivery_note_details':['serial_no'],'packing_details':['serial_no']},'Installation Note':{'installed_item_details':['serial_no']},'Item':{'fields':['has_serial_no']},'Maintenance Schedule':{'item_maintenance_detail':['serial_no'],'maintenance_schedule_detail':['serial_no']},'Maintenance Visit':{'maintenance_visit_details':['serial_no']},'Purchase Receipt':{'purchase_receipt_details':['serial_no']},'Quality Inspection':{'fields':['item_serial_no']},'Sales and Pruchase Return Wizard':{'return_details':['serial_no']},'Sales Invoice':{'entries':['serial_no']},'Stock Entry':{'mtn_details':['serial_no']},'Stock Ledger Entry':{'fields':['serial_no']}},'fs_item_barcode':{'Item':{'fields':['barcode']},'Delivery Note':{'delivery_note_details':['barcode']},'Sales Invoice':{'entries':['barcode']}},'fs_item_group_in_details':{'Delivery Note':{'delivery_note_details':['item_group']},'Opportunity':{'enquiry_details':['item_group']},'Purchase Request':{'indent_details':['item_group']},'Item':{'fields':['item_group']},'Global Defaults':{'fields':['default_item_group']},'Purchase Order':{'po_details':['item_group']},'Purchase Receipt':{'purchase_receipt_details':['item_group']},'Purchase Voucher':{'entries':['item_group']},'Quotation':{'quotation_details':['item_group']},'Sales Invoice':{'entries':['item_group']},'Sales BOM':{'fields':['serial_no']},'Sales Order':{'sales_order_details':['item_group']},'Serial No':{'fields':['item_group']},'Sales Partner':{'partner_target_details':['item_group']},'Sales Person':{'target_details':['item_group']},'Territory':{'target_details':['item_group']}},'fs_page_break':{'Delivery Note':{'delivery_note_details':['page_break'],'packing_details':['page_break']},'Purchase Request':{'indent_details':['page_break']},'Purchase Order':{'po_details':['page_break']},'Purchase Receipt':{'purchase_receipt_details':['page_break']},'Purchase Voucher':{'entries':['page_break']},'Quotation':{'quotation_details':['page_break']},'Sales Invoice':{'entries':['page_break']},'Sales Order':{'sales_order_details':['page_break']}},'fs_exports':{'Delivery Note':{'fields':['Note','conversion_rate','currency','grand_total_export','in_words_export','rounded_total_export'],'delivery_note_details':['base_ref_rate','amount','basic_rate']},'POS Setting':{'fields':['conversion_rate','currency']},'Quotation':{'fields':['Note HTML','OT Notes','conversion_rate','currency','grand_total_export','in_words_export','rounded_total_export'],'quotation_details':['base_ref_rate','amount','basic_rate']},'Sales Invoice':{'fields':['conversion_rate','currency','grand_total_export','in_words_export','rounded_total_export'],'entries':['base_ref_rate','amount','basic_rate']},'Item':{'ref_rate_details':['ref_currency']},'Sales BOM':{'fields':['currency']},'Sales Order':{'fields':['Note1','OT Notes','conversion_rate','currency','grand_total_export','in_words_export','rounded_total_export'],'sales_order_details':['base_ref_rate','amount','basic_rate']}},'fs_imports':{'Purchase Invoice':{'fields':['conversion_rate','currency','grand_total_import','in_words_import','net_total_import','other_charges_added_import','other_charges_deducted_import'],'entries':['purchase_ref_rate','amount','rate']},'Purchase Order':{'fields':['Note HTML','conversion_rate','currency','grand_total_import','in_words_import','net_total_import','other_charges_added_import','other_charges_deducted_import'],'po_details':['purchase_ref_rate','amount','purchase_rate']},'Purchase Receipt':{'fields':['conversion_rate','currency','grand_total_import','in_words_import','net_total_import','other_charges_added_import','other_charges_deducted_import'],'purchase_receipt_details':['purchase_ref_rate','amount','purchase_rate']},'Supplier Quotation':{'fields':['conversion_rate','currency']}},'fs_item_advanced':{'Item':{'fields':['item_customer_details']}},'fs_sales_extras':{'Address':{'fields':['sales_partner']},'Contact':{'fields':['sales_partner']},'Customer':{'fields':['sales_team']},'Delivery Note':{'fields':['sales_team','Packing List']},'Item':{'fields':['item_customer_details']},'Sales Invoice':{'fields':['sales_team']},'Sales Order':{'fields':['sales_team','Packing List']}},'fs_more_info':{'Delivery Note':{'fields':['More Info']},'Opportunity':{'fields':['More Info']},'Purchase Request':{'fields':['More Info']},'Lead':{'fields':['More Info']},'Purchase Invoice':{'fields':['More Info']},'Purchase Order':{'fields':['More Info']},'Purchase Receipt':{'fields':['More Info']},'Quotation':{'fields':['More Info']},'Sales Invoice':{'fields':['More Info']},'Sales Order':{'fields':['More Info']},},'fs_quality':{'Item':{'fields':['Item Inspection Criteria','inspection_required']},'Purchase Receipt':{'purchase_receipt_details':['qa_no']}},'fs_manufacturing':{'Item':{'fields':['Manufacturing']}},'fs_pos':{'Sales Invoice':{'fields':['is_pos']}},'fs_recurring_invoice':{'Sales Invoice':{'fields':['Recurring Invoice']}}}
$(document).bind('form_refresh',function(){for(sys_feat in sys_defaults)
{if(sys_defaults[sys_feat]=='0'&&(sys_feat in pscript.feature_dict))
{if(cur_frm.doc.doctype in pscript.feature_dict[sys_feat])
{for(fort in pscript.feature_dict[sys_feat][cur_frm.doc.doctype])
{if(fort=='fields')
hide_field(pscript.feature_dict[sys_feat][cur_frm.doc.doctype][fort]);else if(cur_frm.fields_dict[fort])
{for(grid_field in pscript.feature_dict[sys_feat][cur_frm.doc.doctype][fort])
cur_frm.fields_dict[fort].grid.set_column_disp(pscript.feature_dict[sys_feat][cur_frm.doc.doctype][fort][grid_field],false);}
else
msgprint('Grid "'+fort+'" does not exists');}}}}})
/*
 *	conf.js
 */
wn.provide('erpnext');erpnext.set_about=function(){wn.provide('wn.app');$.extend(wn.app,{name:'ERPNext',license:'GNU/GPL - Usage Condition: All "erpnext" branding must be kept as it is',source:'https://github.com/webnotes/erpnext',publisher:'Web Notes Technologies Pvt Ltd, Mumbai',copyright:'&copy; Web Notes Technologies Pvt Ltd',version:'2'});}
wn.modules_path='erpnext';$(document).bind('toolbar_setup',function(){$('.brand').html((wn.boot.website_settings.brand_html||'erpnext')+' <i class="icon-home icon-white navbar-icon-home" ></i>').css('max-width','200px').css('overflow','hidden').hover(function(){$(this).find('.icon-home').addClass('navbar-icon-home-hover');},function(){$(this).find('.icon-home').removeClass('navbar-icon-home-hover');});});