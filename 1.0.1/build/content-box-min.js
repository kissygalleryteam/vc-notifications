KISSY.add("kg/vc-notifications/1.0.0/content-box",[],function(a,t,r,e){var n=e.exports=function(a){function t(a,t){a.data,a.affix;return t.data+="' '+ boxCls",t}function r(a,t,r){var e=a.data,n=a.affix;t.data+="\n              ",v.line=6;var i=(l=n.mPartHtml)!==r?l:(l=e.mPartHtml)!==r?l:a.resolveLooseUp(["mPartHtml"]);return t=t.write(i),t.data+="\n            ",t}function e(a,t,r){var e=a.data,n=a.affix;t.data+='\n              <div class="image-wrap"><img class="vc-img" src="',v.line=10;var i=(l=n.mPartImg)!==r?l:(l=e.mPartImg)!==r?l:a.resolveLooseUp(["mPartImg"]);return t=t.writeEscaped(i),t.data+='"/></div>\n              ',t}function n(a,t,r){var e=a.data,n=a.affix;t.data+='\n                  <span class="title">',v.line=14;var i=(l=n.mPartTitle)!==r?l:(l=e.mPartTitle)!==r?l:a.resolveLooseUp(["mPartTitle"]);return t=t.writeEscaped(i),t.data+="</span>\n                  ",t}function i(a,t,r){var i=a.data,o=a.affix;t.data+='\n              <i class="close"></i>\n              ',v.line=9,v.line=9;var m=(l=o.mPartImg)!==r?l:(l=i.mPartImg)!==r?l:a.resolveLooseUp(["mPartImg"]);t=u.call(s,a,{params:[m],fn:e},t),t.data+='\n              <div class="content">\n                  ',v.line=13,v.line=13;var d=(l=o.mPartTitle)!==r?l:(l=i.mPartTitle)!==r?l:a.resolveLooseUp(["mPartTitle"]);t=u.call(s,a,{params:[d],fn:n},t),t.data+='\n                  <p class="msg">',v.line=16;var c=(l=o.mPartMsg)!==r?l:(l=i.mPartMsg)!==r?l:a.resolveLooseUp(["mPartMsg"]);return t=t.writeEscaped(c),t.data+="</p>\n              </div>\n            ",t}{var l,s=this,o=s.root,m=s.buffer,d=s.scope,v=(s.runtime,s.name,s.pos),c=d.data,p=d.affix,f=o.nativeCommands,P=o.utils,u=(P.callFn,P.callCommand,f.range,f.foreach,f.forin,f.each,f["with"],f["if"]);f.set,f.include,f.parse,f.extend,f.block,f.macro,f["debugger"]}m.data+='<div class="vc-notify-box';var g=(l=p.boxCls)!==a?l:(l=c.boxCls)!==a?l:d.resolveLooseUp(["boxCls"]);m=u.call(s,d,{params:[g],fn:t},m),m.data+='">\n    <div class="box-wrap">\n        <div class="top-part">',v.line=3;var x=(l=p.tPartHtml)!==a?l:(l=c.tPartHtml)!==a?l:d.resolveLooseUp(["tPartHtml"]);m=m.write(x),m.data+='</div>\n        <div class="main-part">\n            ',v.line=5,v.line=5;var b=(l=p.mPartHtml)!==a?l:(l=c.mPartHtml)!==a?l:d.resolveLooseUp(["mPartHtml"]);m=u.call(s,d,{params:[b],fn:r,inverse:i},m),m.data+='\n        </div>\n        <div class="bottom-part">',v.line=20;var H=(l=p.bPartHtml)!==a?l:(l=c.bPartHtml)!==a?l:d.resolveLooseUp(["bPartHtml"]);return m=m.write(H),m.data+="</div>\n    </div>\n</div>\n",m};n.TPL_NAME=e.id||e.name});