// build time:Wed Aug 05 2020 11:54:09 GMT+0800 (CST)
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.LgZoom=e()}})(function(){var e,t,o;return function r(e,t,o){function i(a,s){if(!t[a]){if(!e[a]){var n=typeof require=="function"&&require;if(!s&&n)return n(a,!0);if(l)return l(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[a]={exports:{}};e[a][0].call(u.exports,function(t){var o=e[a][1][t];return i(o?o:t)},u,u.exports,r,e,t,o)}return t[a].exports}var l=typeof require=="function"&&require;for(var a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,o,r){(function(t,o){if(typeof e==="function"&&e.amd){e([],o)}else if(typeof r!=="undefined"){o()}else{var i={exports:{}};o();t.lgZoom=i.exports}})(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o){if(Object.prototype.hasOwnProperty.call(o,r)){e[r]=o[r]}}}return e};var t={scale:1,zoom:true,actualSize:true,enableZoomAfter:300};var o=function r(o){this.el=o;this.core=window.lgData[this.el.getAttribute("lg-uid")];this.core.s=e({},t,this.core.s);if(this.core.s.zoom&&this.core.doCss()){this.init();this.zoomabletimeout=false;this.pageX=window.innerWidth/2;this.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)}return this};o.prototype.init=function(){var e=this;var t='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';if(e.core.s.actualSize){t+='<span id="lg-actual-size" class="lg-icon"></span>'}this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",t);utils.on(e.core.el,"onSlideItemLoad.lgtmzoom",function(t){var o=e.core.s.enableZoomAfter+t.detail.delay;if(utils.hasClass(document.body,"lg-from-hash")&&t.detail.delay){o=0}else{utils.removeClass(document.body,"lg-from-hash")}e.zoomabletimeout=setTimeout(function(){utils.addClass(e.core.___slide[t.detail.index],"lg-zoomable")},o+30)});var o=1;var r=function s(t){var o=e.core.outer.querySelector(".lg-current .lg-image");var r;var i;var l=(window.innerWidth-o.clientWidth)/2;var a=(window.innerHeight-o.clientHeight)/2+(document.documentElement.scrollTop||document.body.scrollTop);r=e.pageX-l;i=e.pageY-a;var s=(t-1)*r;var n=(t-1)*i;utils.setVendor(o,"Transform","scale3d("+t+", "+t+", 1)");o.setAttribute("data-scale",t);o.parentElement.style.left=-s+"px";o.parentElement.style.top=-n+"px";o.parentElement.setAttribute("data-x",s);o.parentElement.setAttribute("data-y",n)};var i=function n(){if(o>1){utils.addClass(e.core.outer,"lg-zoomed")}else{e.resetZoom()}if(o<1){o=1}r(o)};var l=function c(t,r,l,a){var s=r.clientWidth;var n;if(e.core.s.dynamic){n=e.core.s.dynamicEl[l].width||r.naturalWidth||s}else{n=e.core.items[l].getAttribute("data-width")||r.naturalWidth||s}var c;if(utils.hasClass(e.core.outer,"lg-zoomed")){o=1}else{if(n>s){c=n/s;o=c||2}}if(a){e.pageX=window.innerWidth/2;e.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)}else{e.pageX=t.pageX||t.targetTouches[0].pageX;e.pageY=t.pageY||t.targetTouches[0].pageY}i();setTimeout(function(){utils.removeClass(e.core.outer,"lg-grabbing");utils.addClass(e.core.outer,"lg-grab")},10)};var a=false;utils.on(e.core.el,"onAferAppendSlide.lgtmzoom",function(t){var o=t.detail.index;var r=e.core.___slide[o].querySelector(".lg-image");if(!e.core.isTouch){utils.on(r,"dblclick",function(e){l(e,r,o)})}if(e.core.isTouch){utils.on(r,"touchstart",function(e){if(!a){a=setTimeout(function(){a=null},300)}else{clearTimeout(a);a=null;l(e,r,o)}e.preventDefault()})}});utils.on(window,"resize.lgzoom scroll.lgzoom orientationchange.lgzoom",function(){e.pageX=window.innerWidth/2;e.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop);r(o)});utils.on(document.getElementById("lg-zoom-out"),"click.lg",function(){if(e.core.outer.querySelector(".lg-current .lg-image")){o-=e.core.s.scale;i()}});utils.on(document.getElementById("lg-zoom-in"),"click.lg",function(){if(e.core.outer.querySelector(".lg-current .lg-image")){o+=e.core.s.scale;i()}});utils.on(document.getElementById("lg-actual-size"),"click.lg",function(t){l(t,e.core.___slide[e.core.index].querySelector(".lg-image"),e.core.index,true)});utils.on(e.core.el,"onBeforeSlide.lgtm",function(){o=1;e.resetZoom()});if(!e.core.isTouch){e.zoomDrag()}if(e.core.isTouch){e.zoomSwipe()}};o.prototype.resetZoom=function(){utils.removeClass(this.core.outer,"lg-zoomed");for(var e=0;e<this.core.___slide.length;e++){if(this.core.___slide[e].querySelector(".lg-img-wrap")){this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("style");this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-x");this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-y")}}for(var t=0;t<this.core.___slide.length;t++){if(this.core.___slide[t].querySelector(".lg-image")){this.core.___slide[t].querySelector(".lg-image").removeAttribute("style");this.core.___slide[t].querySelector(".lg-image").removeAttribute("data-scale")}}this.pageX=window.innerWidth/2;this.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)};o.prototype.zoomSwipe=function(){var e=this;var t={};var o={};var r=false;var i=false;var l=false;for(var a=0;a<e.core.___slide.length;a++){utils.on(e.core.___slide[a],"touchstart.lg",function(o){if(utils.hasClass(e.core.outer,"lg-zoomed")){var r=e.core.___slide[e.core.index].querySelector(".lg-object");l=r.offsetHeight*r.getAttribute("data-scale")>e.core.outer.querySelector(".lg").clientHeight;i=r.offsetWidth*r.getAttribute("data-scale")>e.core.outer.querySelector(".lg").clientWidth;if(i||l){o.preventDefault();t={x:o.targetTouches[0].pageX,y:o.targetTouches[0].pageY}}}})}for(var s=0;s<e.core.___slide.length;s++){utils.on(e.core.___slide[s],"touchmove.lg",function(a){if(utils.hasClass(e.core.outer,"lg-zoomed")){var s=e.core.___slide[e.core.index].querySelector(".lg-img-wrap");var n;var c;a.preventDefault();r=true;o={x:a.targetTouches[0].pageX,y:a.targetTouches[0].pageY};utils.addClass(e.core.outer,"lg-zoom-dragging");if(l){c=-Math.abs(s.getAttribute("data-y"))+(o.y-t.y)}else{c=-Math.abs(s.getAttribute("data-y"))}if(i){n=-Math.abs(s.getAttribute("data-x"))+(o.x-t.x)}else{n=-Math.abs(s.getAttribute("data-x"))}if(Math.abs(o.x-t.x)>15||Math.abs(o.y-t.y)>15){s.style.left=n+"px";s.style.top=c+"px"}}})}for(var n=0;n<e.core.___slide.length;n++){utils.on(e.core.___slide[n],"touchend.lg",function(){if(utils.hasClass(e.core.outer,"lg-zoomed")){if(r){r=false;utils.removeClass(e.core.outer,"lg-zoom-dragging");e.touchendZoom(t,o,i,l)}}})}};o.prototype.zoomDrag=function(){var e=this;var t={};var o={};var r=false;var i=false;var l=false;var a=false;for(var s=0;s<e.core.___slide.length;s++){utils.on(e.core.___slide[s],"mousedown.lgzoom",function(o){var i=e.core.___slide[e.core.index].querySelector(".lg-object");a=i.offsetHeight*i.getAttribute("data-scale")>e.core.outer.querySelector(".lg").clientHeight;l=i.offsetWidth*i.getAttribute("data-scale")>e.core.outer.querySelector(".lg").clientWidth;if(utils.hasClass(e.core.outer,"lg-zoomed")){if(utils.hasClass(o.target,"lg-object")&&(l||a)){o.preventDefault();t={x:o.pageX,y:o.pageY};r=true;e.core.outer.scrollLeft+=1;e.core.outer.scrollLeft-=1;utils.removeClass(e.core.outer,"lg-grab");utils.addClass(e.core.outer,"lg-grabbing")}}})}utils.on(window,"mousemove.lgzoom",function(s){if(r){var n=e.core.___slide[e.core.index].querySelector(".lg-img-wrap");var c;var u;i=true;o={x:s.pageX,y:s.pageY};utils.addClass(e.core.outer,"lg-zoom-dragging");if(a){u=-Math.abs(n.getAttribute("data-y"))+(o.y-t.y)}else{u=-Math.abs(n.getAttribute("data-y"))}if(l){c=-Math.abs(n.getAttribute("data-x"))+(o.x-t.x)}else{c=-Math.abs(n.getAttribute("data-x"))}n.style.left=c+"px";n.style.top=u+"px"}});utils.on(window,"mouseup.lgzoom",function(s){if(r){r=false;utils.removeClass(e.core.outer,"lg-zoom-dragging");if(i&&(t.x!==o.x||t.y!==o.y)){o={x:s.pageX,y:s.pageY};e.touchendZoom(t,o,l,a)}i=false}utils.removeClass(e.core.outer,"lg-grabbing");utils.addClass(e.core.outer,"lg-grab")})};o.prototype.touchendZoom=function(e,t,o,r){var i=this;var l=i.core.___slide[i.core.index].querySelector(".lg-img-wrap");var a=i.core.___slide[i.core.index].querySelector(".lg-object");var s=-Math.abs(l.getAttribute("data-x"))+(t.x-e.x);var n=-Math.abs(l.getAttribute("data-y"))+(t.y-e.y);var c=(i.core.outer.querySelector(".lg").clientHeight-a.offsetHeight)/2;var u=Math.abs(a.offsetHeight*Math.abs(a.getAttribute("data-scale"))-i.core.outer.querySelector(".lg").clientHeight+c);var d=(i.core.outer.querySelector(".lg").clientWidth-a.offsetWidth)/2;var g=Math.abs(a.offsetWidth*Math.abs(a.getAttribute("data-scale"))-i.core.outer.querySelector(".lg").clientWidth+d);if(Math.abs(t.x-e.x)>15||Math.abs(t.y-e.y)>15){if(r){if(n<=-u){n=-u}else if(n>=-c){n=-c}}if(o){if(s<=-g){s=-g}else if(s>=-d){s=-d}}if(r){l.setAttribute("data-y",Math.abs(n))}else{n=-Math.abs(l.getAttribute("data-y"))}if(o){l.setAttribute("data-x",Math.abs(s))}else{s=-Math.abs(l.getAttribute("data-x"))}l.style.left=s+"px";l.style.top=n+"px"}};o.prototype.destroy=function(){var e=this;utils.off(e.core.el,".lgzoom");utils.off(window,".lgzoom");for(var t=0;t<e.core.___slide.length;t++){utils.off(e.core.___slide[t],".lgzoom")}utils.off(e.core.el,".lgtmzoom");e.resetZoom();clearTimeout(e.zoomabletimeout);e.zoomabletimeout=false};window.lgModules.zoom=o})},{}]},{},[1])(1)});
//rebuild by neat 