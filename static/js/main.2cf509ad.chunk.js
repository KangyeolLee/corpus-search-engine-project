(this["webpackJsonpcra-velog"]=this["webpackJsonpcra-velog"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=(n(100),n(154)),l=n(156),s=n(112),j=n(85),o=n(153),d=n(66),b=(n(101),n(16)),u=n(159),O=n(140),h=n(141),x=n(142),f=n(143),m=n(155),g=n(144),p=n(21),v=n(42),y=Object(v.b)({name:"searchResult",initialState:{searchWords:"",aroundWords:""},reducers:{updateSearchWord:function(e,t){e.searchWords=t.payload},updateAroundWord:function(e,t){e.aroundWords=t.payload}}}),S=y.actions,w=S.updateSearchWord,W=S.updateAroundWord,C=y.reducer,T=n(40),k=n.n(T),A=n(81),D=n.n(A),I=n(70),L=n(65),R=/[\n|.|?|!]/gi,z=function(e,t,n){var a=e.toLowerCase(),r=t.trim().toLowerCase(),c=a.split(R).filter(String).filter((function(e){return e.includes(r)})),i=new RegExp("[\\w]*"+r+"[\\w]*","gi"),l=a.match(i);return[c,{word:t,text:null===l||void 0===l?void 0:l.reduce((function(e,t){return e[t]?e[t].sum++:e[t]={sum:1},e}),{}),range:n}]},E=n(4),B=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(1),i=Object(b.a)(c,2),l=i[0],j=i[1],o=Object(p.c)((function(e){return e.textFile.value})),d=Object(p.b)();return Object(E.jsxs)(u.a,{defaultExpanded:!0,children:[Object(E.jsx)(O.a,{style:{borderBottom:"1px solid #ededed"},expandIcon:Object(E.jsx)(k.a,{}),children:Object(E.jsxs)(s.a,{variant:"h5",style:{display:"flex",alignItems:"center"},children:[Object(E.jsx)(D.a,{fontSize:"large",style:{marginRight:"1rem"}}),"\uac80\uc0c9\uc5b4 \uc124\uc815"]})}),Object(E.jsx)(h.a,{style:{display:"block",marginTop:"2rem"},children:Object(E.jsx)(x.a,{style:{margin:"0 2rem"},children:Object(E.jsxs)(f.a,{container:!0,spacing:3,children:[Object(E.jsx)(f.a,{item:!0,children:Object(E.jsx)(m.a,{value:n,onChange:function(e){e.preventDefault(),r(e.target.value)},variant:"outlined",label:"\uac80\uc0c9\ud560 \ub2e8\uc5b4",helperText:"\uc804\uce58\uc0ac + \uba85\uc0ac\uad6c \ub4f1 \ubb38\uc7a5\ub2e8\uc704 \uac00\ub2a5"})}),Object(E.jsx)(f.a,{item:!0,children:Object(E.jsx)(m.a,{variant:"outlined",label:"\uac80\uc0c9 \ubc94\uc704",helperText:"\uae30\ubcf8\ubc94\uc704 1",onChange:function(e){e.preventDefault(),j(e.target.value)},value:l})}),Object(E.jsx)(f.a,{item:!0,children:Object(E.jsx)(g.a,{onClick:function(e){if(e.preventDefault(),o)if(n){var t=z(o,n,l),a=Object(b.a)(t,2),r=a[0],c=a[1];d(W(r)),d(w(c))}else alert("\uac80\uc0c9\ud560 \ub2e8\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc6a8!");else alert("\uac80\uc0c9\ud560 \ud30c\uc77c \ub0b4\uc6a9\uc744 \ubcf5\ubd99\ud558\uc138\uc6a7!")},size:"large",variant:"contained",color:"primary",children:"\uac80\uc0c9"})})]})})})]})},F=n(111),P=n(152),N=n(157),J=n(151),M=n(82),G=n.n(M),H=n(83),U=n.n(H),q=n(145),K=n(146),Q=n(147),V=n(148),X=n(149),Y=n(150),Z=n(158),$=Object(q.a)({table:{"& td, & th":{textAlign:"center"}},tbcMain:{width:"70px",fontWeight:"bold",textAlign:"center",backgroundColor:"#ededed"},tbcAppearance:{fontWeight:"bold",fontSize:"1.5rem",textAlign:"center",backgroundColor:"#ededed"}}),_=function(e){var t=e.range,n=e.data,a=$(),r=function(e,t){for(var n=[],a={},r=1;r<=e;r++)n.push(r),a[r]={};for(var c=Object.values(t),i=[],l=0;l<c.length;l++){var s,j=Object(L.a)(c[l]);try{for(j.s();!(s=j.n()).done;){var o=s.value;a[l+1][o]=a[l+1][o]?a[l+1][o]+1:1}}catch(b){j.e(b)}finally{j.f()}i.push.apply(i,Object(I.a)(new Set(Object.values(a[l+1]))))}i.sort((function(e,t){return e-t}));var d=Object(I.a)(new Set(i));return 1===d[0]&&d.shift(),[n,d,a]}(t,n),c=Object(b.a)(r,3),i=c[0],l=c[1],s=c[2];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(K.a,{className:a.table,children:[Object(E.jsx)(Q.a,{children:Object(E.jsxs)(V.a,{children:[Object(E.jsx)(X.a,{className:a.tbcMain,children:"\ub4f1\uc7a5 \ube48\ub3c4"}),i.length>0&&i.map((function(e){return Object(E.jsxs)(X.a,{children:[e,"\uce78"]},Object(Z.a)())}))]})}),Object(E.jsx)(Y.a,{children:l.length>0&&l.map((function(e){return Object(E.jsxs)(V.a,{children:[Object(E.jsx)(X.a,{className:a.tbcAppearance,children:e}),Object.values(s).length>0&&Object.values(s).map((function(t){for(var n="",a=0,r=Object.entries(t);a<r.length;a++){var c=Object(b.a)(r[a],2),i=c[0],l=c[1];e===l&&(n+=i+"\n")}return Object(E.jsx)(X.a,{children:n.split("\n").map((function(e){return Object(E.jsxs)("span",{children:[e,Object(E.jsx)("br",{})]},Object(Z.a)())}))},Object(Z.a)())}))]},Object(Z.a)())}))})]}),!l.length&&Object(E.jsxs)(N.a,{style:{margin:"2rem 0"},severity:"warning",children:[Object(E.jsx)(J.a,{children:Object(E.jsx)("strong",{children:"\uc544\uc774\uace0\ub09c!! \ud83e\udd23"})}),"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4!"]})]})},ee=function(){var e=Object(p.c)((function(e){return e.searchResult.aroundWords})),t=Object(p.c)((function(e){return e.searchResult.searchWords})),n=t.word,r=t.text,c=t.range,i=Object(a.useState)(""),j=Object(b.a)(i,2),o=j[0],d=j[1],x=Object(a.useState)(0),g=Object(b.a)(x,2),v=g[0],y=g[1];Object(a.useEffect)((function(){var e=r?Object.entries(r):"",t=r?Object.values(r).reduce((function(e,t){return e+t.sum}),0):0;d(e),y(t)}),[r]);var S={},w={};n&&function(e,t,n,a,r){var c,i=e.toLowerCase(),l=i.split(" ").join(""),s=Object(L.a)(n);try{for(s.s();!(c=s.n()).done;){var j,o=c.value.replaceAll(i,l).split(" ").filter(String),d=o.reduce((function(e,t,n){return t.includes(l)&&e.push(n),e}),[]),b=Object(L.a)(d);try{for(b.s();!(j=b.n()).done;){var u=j.value,O=u-1*t>=0?u-1*t:0,h=u+1*t+1,x=o.slice(O,u),f=o.slice(u+1,h);x.reverse();for(var m=0;m<x.length;m++)a[m+1]?a[m+1].push(x[m]):a[m+1]=[x[m]];for(var g=0;g<f.length;g++)r[g+1]?r[g+1].push(f[g]):r[g+1]=[f[g]]}}catch(p){b.e(p)}finally{b.f()}}}catch(p){s.e(p)}finally{s.f()}}(n,c,e,S,w);var W=function(e){var t=e.currentTarget.id,n=o.filter((function(e){return e[0]!==t})),a=n.reduce((function(e,t){return e+t[1].sum}),0);d(n),y(a)};return Object(E.jsxs)(u.a,{children:[Object(E.jsx)(O.a,{style:{borderBottom:"1px solid #ededed"},expandIcon:Object(E.jsx)(k.a,{}),children:Object(E.jsxs)(s.a,{variant:"h5",style:{display:"flex",alignItems:"center"},children:[Object(E.jsx)(G.a,{fontSize:"large",style:{marginRight:"1rem"}}),"\uac80\uc0c9 \uacb0\uacfc"]})}),Object(E.jsxs)(h.a,{style:{display:"block",marginTop:"2rem"},children:[Object(E.jsx)(s.a,{style:{marginBottom:"3rem",marginLeft:"2rem",fontWeight:"bold"},variant:"h6",children:"\uac80\uc0c9 \ubaa9\ub85d"}),o.length?Object(E.jsx)(f.a,{container:!0,spacing:5,style:{alignItems:"center"},children:o.map((function(e,t){return Object(E.jsx)(f.a,{item:!0,xs:6,children:Object(E.jsxs)(f.a,{container:!0,spacing:2,children:[Object(E.jsx)(F.a,{onClick:W,id:e[0],style:t%2===0?{marginLeft:"2rem"}:{marginLeft:"0"},children:Object(E.jsx)(U.a,{color:"secondary",fontSize:"large"})}),Object(E.jsx)(f.a,{item:!0,style:{width:"60%"},children:Object(E.jsx)(m.a,{value:e[0],label:"\uac80\uc0c9\uacb0\uacfc",variant:"outlined",fullWidth:!0,inputProps:{readOnly:!0}})}),Object(E.jsx)(f.a,{item:!0,style:{width:"20%"},children:Object(E.jsx)(m.a,{value:e[1].sum,label:"\ub4f1\uc7a5\ube48\ub3c4",variant:"outlined",inputProps:{readOnly:!0}})})]})},Object(Z.a)())}))}):Object(E.jsxs)(N.a,{style:{margin:"0 2rem"},severity:"warning",children:[Object(E.jsx)(J.a,{children:Object(E.jsx)("strong",{children:"\uc544\uc774\uace0\ub09c!! \ud83e\udd23"})}),"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4!"]}),Object(E.jsx)(P.a,{style:{margin:"2rem"}}),Object(E.jsx)(f.a,{container:!0,style:{justifyContent:"flex-end",padding:"0 2rem"},children:Object(E.jsx)(f.a,{item:!0,children:Object(E.jsx)(m.a,{value:v,label:"\ucd1d\ud569",variant:"outlined",inputProps:{readOnly:!0}})})}),Object(E.jsx)(s.a,{style:{marginTop:"3rem",marginLeft:"2rem",fontWeight:"bold"},variant:"h6",children:"\uac80\uc0c9\uc5b4 \uc774\uc804 \ub4f1\uc7a5 \ub2e8\uc5b4 \ubaa9\ub85d"}),Object(E.jsx)(l.a,{my:1,mx:"2rem",children:Object(E.jsx)(_,{range:c,data:S})}),Object(E.jsx)(s.a,{style:{marginTop:"2.5rem",marginLeft:"2rem",fontWeight:"bold"},variant:"h6",children:"\uac80\uc0c9\uc5b4 \uc774\ud6c4 \ub4f1\uc7a5 \ub2e8\uc5b4 \ubaa9\ub85d"}),Object(E.jsx)(l.a,{my:1,mx:"2rem",children:Object(E.jsx)(_,{range:c,data:w})})]})]})},te=Object(v.b)({name:"textFile",initialState:{value:""},reducers:{update:function(e,t){e.value=t.payload}}}),ne=te.actions.update,ae=te.reducer,re=n(84),ce=n.n(re),ie=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(p.b)();Object(a.useEffect)((function(){c(ne(n))}),[c,n]);return Object(E.jsxs)(u.a,{children:[Object(E.jsx)(O.a,{style:{borderBottom:"1px solid #ededed"},expandIcon:Object(E.jsx)(k.a,{}),children:Object(E.jsxs)(s.a,{variant:"h5",style:{display:"flex",alignItems:"center"},children:[Object(E.jsx)(ce.a,{fontSize:"large",style:{marginRight:"1rem"}}),"\uac80\uc0c9 \ud30c\uc77c \uc5c5\ub85c\ub4dc"]})}),Object(E.jsx)(h.a,{style:{display:"block",marginTop:"2rem"},children:Object(E.jsx)(m.a,{value:n,onChange:function(e){e.preventDefault(),r(e.target.value)},onPaste:function(e){r(e.clipboardData.getData("Text")),c(ne(n)),e.preventDefault()},fullWidth:!0,rows:15,label:"\ud14d\uc2a4\ud2b8",placeholder:"\uac80\uc0ac\ud560 \ud14d\uc2a4\ud2b8\ub97c \ubd99\uc5ec\ub123\uc73c\uc138\uc694.",multiline:!0,variant:"filled"})})]})},le=Object(j.a)({status:{danger:d.a[500]}});var se=function(){return Object(E.jsx)(o.a,{theme:le,children:Object(E.jsxs)(i.a,{maxWidth:"lg",children:[Object(E.jsxs)(l.a,{my:10,children:[Object(E.jsx)(s.a,{align:"center",variant:"h3",component:"h1",children:"Corpus Search Engine"}),Object(E.jsx)(s.a,{align:"center",variant:"h5",component:"h1",children:"optimized in German (DEUTSCH)"})]}),Object(E.jsx)(B,{}),Object(E.jsx)(ee,{}),Object(E.jsx)(ie,{})]})})},je=Object(v.a)({reducer:{textFile:ae,searchResult:C}});c.a.render(Object(E.jsx)(p.a,{store:je,children:Object(E.jsx)(se,{})}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.2cf509ad.chunk.js.map