KISSY.add("kg/vc-notifications/1.0.0/index",["node","base","event","ua","kg/xtemplate/3.3.3/runtime","kg/vc-notifications/1.0.0/index.css"],function(t,e,a,i){{var n,s,o=e("node"),r=e("base"),l=e("event"),m=e("ua"),c=e("kg/xtemplate/3.3.3/runtime");e("kg/vc-notifications/1.0.0/index.css")}n=function(t){var e=t=function(t){function e(t,e,a){var i=t.data,n=t.affix;e.data+="\n              ",c.line=6;var o=(s=n.mPartHtml)!==a?s:(s=i.mPartHtml)!==a?s:t.resolveLooseUp(["mPartHtml"]);return e=e.write(o),e.data+="\n            ",e}function a(t,e,a){var i=t.data,n=t.affix;e.data+='\n              <div class="image-wrap"><img class="vc-img" src="',c.line=10;var o=(s=n.mPartImg)!==a?s:(s=i.mPartImg)!==a?s:t.resolveLooseUp(["mPartImg"]);return e=e.writeEscaped(o),e.data+='"/></div>\n              ',e}function i(t,e,a){var i=t.data,n=t.affix;e.data+='\n                  <span class="title">',c.line=14;var o=(s=n.mPartTitle)!==a?s:(s=i.mPartTitle)!==a?s:t.resolveLooseUp(["mPartTitle"]);return e=e.writeEscaped(o),e.data+="</span>\n                  ",e}function n(t,e,n){var r=t.data,l=t.affix;e.data+='\n              <i class="close"></i>\n              ',c.line=9,c.line=9;var m=(s=l.mPartImg)!==n?s:(s=r.mPartImg)!==n?s:t.resolveLooseUp(["mPartImg"]);e=f.call(o,t,{params:[m],fn:a},e),e.data+='\n              <div class="content">\n                  ',c.line=13,c.line=13;var d=(s=l.mPartTitle)!==n?s:(s=r.mPartTitle)!==n?s:t.resolveLooseUp(["mPartTitle"]);e=f.call(o,t,{params:[d],fn:i},e),e.data+='\n                  <p class="msg">',c.line=16;var v=(s=l.mPartMsg)!==n?s:(s=r.mPartMsg)!==n?s:t.resolveLooseUp(["mPartMsg"]);return e=e.writeEscaped(v),e.data+="</p>\n              </div>\n            ",e}{var s,o=this,r=o.root,l=o.buffer,m=o.scope,c=(o.runtime,o.name,o.pos),d=m.data,v=m.affix,g=r.nativeCommands,h=r.utils,f=(h.callFn,h.callCommand,g.range,g.foreach,g.forin,g.each,g["with"],g["if"]);g.set,g.include,g.parse,g.extend,g.block,g.macro,g["debugger"]}l.data+='<div class="vc-notify-box';var u=" ",p=(s=v.boxCls)!==t?s:(s=d.boxCls)!==t?s:m.resolveLooseUp(["boxCls"]);u=" "+p,l=l.writeEscaped(u),l.data+='">\n    <div class="box-wrap">\n        <div class="top-part">',c.line=3;var P=(s=v.tPartHtml)!==t?s:(s=d.tPartHtml)!==t?s:m.resolveLooseUp(["tPartHtml"]);l=l.write(P),l.data+='</div>\n        <div class="main-part">\n            ',c.line=5,c.line=5;var b=(s=v.mPartHtml)!==t?s:(s=d.mPartHtml)!==t?s:m.resolveLooseUp(["mPartHtml"]);l=f.call(o,m,{params:[b],fn:e,inverse:n},l),l.data+='\n        </div>\n        <div class="bottom-part">',c.line=20;var x=(s=v.bPartHtml)!==t?s:(s=d.bPartHtml)!==t?s:m.resolveLooseUp(["bPartHtml"]);return l=l.write(x),l.data+="</div>\n    </div>\n</div>\n",l};return e.TPL_NAME=i.id||i.name,t}(),s=function(e){function a(t){for(;t=t.parentNode;)if(t==document)return!0;return!1}function i(t){var e=t&&t.getDOMNode();e&&t.hasClass("xclose")&&!a(e)||(T&&e.addEventListener?(t.css({height:0,opacity:0}),e.addEventListener(T.end,function(){t.remove()},!1)):(t.addClass("remove-transtion"),t.animate({height:0,opacity:0},{duration:.3,easing:"easeNone",complete:function(){t.remove()}})))}function s(t){if(!t.hasClass("xclose")){var e=t.getDOMNode();t.removeClass("show"),e.addEventListener(T.end,function(){return 0==t.height()?void t.remove():void t.css({height:0})},!1)}}function d(t){if(!t.hasClass("xclose")){var e=t.getDOMNode();t.removeClass("show"),e.addEventListener(T.end,function(){return 0==t.height()?void t.remove():void t.css({height:0})},!1)}}var v=o,g=r,h=l,f=m,u=c,p=v.all,P=n,b='<div class="vc-notifications $1"></div>',x=p("body"),T=function(){var t=document.body||document.documentElement,e=t.style,a=void 0!==e.transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition;return a&&{end:function(){var t="TransitionEnd";return f.webkit?t="webkitTransitionEnd":f.gecko?t="transitionend":f.opera&&(t="oTransitionEnd"),t}()}}(),C=g.extend({initializer:function(){var e=this,a=(e.get("$target"),this.get("cls"));a||(a="");var i=v.one(b.replace("$1",a));x.append(i),this.$container=i,this.stayTime=t.isNumber(this.get("stayTime"))?this.get("stayTime"):3e3,this.gapTime=t.isNumber(this.get("gapTime"))?this.get("gapTime"):1e3,this.boxEffect=this.get("boxEffect"),this.boxs=[];var n={boxCls:this.get("boxCls")||"",tPartHtml:this.get("tPartHtml")||"",mPartHtml:this.get("mPartHtml")||"",bPartHtml:this.get("bPartHtml")||"",mPartImg:this.get("mPartImg"),mPartTitle:this.get("mPartTitle"),mPartMsg:this.get("mPartMsg")||""};this.createNoticeDom(n),h.delegate(i,"click",".close",function(t){var e=v.one(t.target),a=e.parent(".vc-notify-box"),i=a.getDOMNode();T&&i.addEventListener?(a.addClass("xclose"),a.css({opacity:0,height:a.height()}),document.body.offsetWidth,a.css("height",0),i.addEventListener(T.end,function(){a.remove()},!1)):(a.css({opacity:0}),a.animate({height:0},{duration:.3,easing:"easeNone",complete:function(){a.remove()}}))});var s,o=i.getDOMNode(),r=0;i.on("click",function(t){if(t.target===o){if(i.addClass("bg"),i.hasClass("bg")&&(clearTimeout(s),r>=1)){var a=e.boxs.shift();a&&a.remove()}s=setTimeout(function(){i.removeClass("bg"),r=0},500),r++}})},createNoticeDom:function(t,e){var a={boxCls:t.boxCls,tPartHtml:t.tPartHtml,mPartHtml:t.mPartHtml,bPartHtml:t.bPartHtml,mPartImg:t.mPartImg,mPartTitle:t.mPartTitle,mPartMsg:t.mPartMsg},i=new u(P);e?this[e]=v.one(i.render(a)):this.$notice=v.one(i.render(a))},notify:function(e,a){var n,o=this;n=a?this[a].clone(!0):this.$notice.clone(!0),e&&(t.isString(e)?n.one(".msg").text(e):t.isObject(e)&&("boxCls"in e&&n.attr("class","vc-notify-box "+e.boxCls),"mPartImg"in e&&n.one(".vc-img")&&n.one(".vc-img").attr("src",e.mPartImg),"mPartTitle"in e&&n.one(".title")&&n.one(".title").text(e.mPartTitle),"mPartMsg"in e&&n.one(".msg")&&n.one(".msg").text(e.mPartMsg))),0===this.boxs.length&&(this.$container.css("display","block"),this.taskId=setInterval(function(){0!==o.boxs.length&&setTimeout(function(){if(0!==o.boxs.length){var t=o.boxs.shift();"rs"===o.boxEffect?s(t):"ls"===o.boxEffect?d(t):i(t)}},o.stayTime),0===o.$container.all(".vc-notify-box").length&&(clearInterval(o.taskId),o.$container.removeAttr("style"))},o.gapTime)),"rs"===this.boxEffect?(n.addClass("right"),this.$container.append(n),document.body.offsetWidth,n.addClass("show"),n.css("height",n.height()+"px")):"ls"===this.boxEffect?(n.addClass("left"),this.$container.append(n),document.body.offsetWidth,n.addClass("show"),n.css("height",n.height()+"px")):(this.$container.append(n),n.addClass("remove-transtion"),n.css("height",n.height()+"px"),document.body.offsetWidth,n.removeClass("remove-transtion")),this.boxs.push(n)}},{ATTRS:{$target:{value:"",getter:function(t){return p(t)}}}});return e=C}(),i.exports=s});