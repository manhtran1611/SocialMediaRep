(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{1139:function(t,e){},1142:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(32),a=n.n(s),i=(n(70),n(8)),o=n(5),u=n(19),d=function(){return Object(u.b)()},j=u.c,l=n(18),b=n(7),p=n.n(b),f=n(15),O=n(17),h=n(4),x=n(20),m=n(65);function v(t){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(p.a.mark((function t(e){var n,r,c,s,a,i,o,u=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=n.body,c=Object(m.a)(n,["body"]),s={"Content-Type":"application/json"},a=Object(x.a)(Object(x.a)({method:r?"POST":"GET"},c),{},{headers:Object(x.a)(Object(x.a)({},s),c.headers)}),r&&(a.body=JSON.stringify(r)),t.prev=4,t.next=7,window.fetch(e,a);case 7:return o=t.sent,t.next=10,o.json();case 10:if(i=t.sent,!o.ok){t.next=13;break}return t.abrupt("return",i);case 13:throw new Error(o.statusText);case 16:return t.prev=16,t.t0=t.catch(4),t.abrupt("return",Promise.reject(t.t0.message?t.t0.message:i));case 19:case"end":return t.stop()}}),t,null,[[4,16]])})))).apply(this,arguments)}v.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v(t,Object(x.a)(Object(x.a)({},e),{},{method:"GET"}))},v.post=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v(t,Object(x.a)(Object(x.a)({},n),{},{body:e}))};var y,N=Object(h.c)({sortComparer:function(t,e){return e.date.localeCompare(t.date)}}),w=Object(h.b)("notifications/fetchNotifications",function(){var t=Object(O.a)(p.a.mark((function t(e,n){var r,c,s,a,i,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.getState,c=k(r()),s=Object(f.a)(c,1),a=s[0],i=a?a.date:"",t.next=6,v.get("/fakeAPI/notifications?since=".concat(i));case 6:return o=t.sent,t.abrupt("return",o.notifications);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),I=Object(h.d)({name:"notifications",initialState:N.getInitialState(),reducers:{allNotificationsRead:function(t,e){Object.values(t.entities).forEach((function(t){t.read=!0}))}},extraReducers:Object(l.a)({},w.fulfilled,(function(t,e){Object.values(t.entities).forEach((function(t){t.isNew=!t.read})),N.upsertMany(t,e.payload)}))}),S=I.actions.allNotificationsRead,C=I.reducer,k=N.getSelectors((function(t){return t.notifications})).selectAll,P=n(0),A=function(){var t,e=d(),n=j(k).filter((function(t){return!t.read})).length;return n>0&&(t=Object(P.jsx)("span",{className:"badge",children:n})),Object(P.jsx)("nav",{children:Object(P.jsxs)("section",{children:[Object(P.jsx)("h1",{children:"Social Media Replicate"}),Object(P.jsxs)("div",{className:"navContent",children:[Object(P.jsxs)("div",{className:"navLinks",children:[Object(P.jsx)(i.b,{to:"/",children:"Posts"}),Object(P.jsx)(i.b,{to:"/users",children:"Users"}),Object(P.jsxs)(i.b,{to:"/notifications",children:["Notifications ",t]}),Object(P.jsx)(i.b,{to:"/notifications",children:"Notifications"})]}),Object(P.jsx)("button",{className:"button",onClick:function(){e(w())},children:"Refresh Notification"})]})]})})},T=n(1144),E=n(1143),F=n(54),U=n.n(F),M=Object(h.c)(),R=M.getInitialState(),L=Object(h.b)("users/fetchUsers",Object(O.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/fakeAPI/users");case 2:return e=t.sent,t.abrupt("return",e.users);case 4:case"end":return t.stop()}}),t)})))),D=Object(h.d)({name:"users",initialState:R,reducers:{},extraReducers:Object(l.a)({},L.fulfilled,M.setAll)}).reducer,B=M.getSelectors((function(t){return t.users})),q=B.selectAll,z=B.selectById,J=function(){var t=Object(u.b)(),e=Object(u.c)(k),n=Object(u.c)(q);Object(r.useEffect)((function(){t(S())}));var c=e.map((function(t){var e=Object(T.a)(t.date),r=Object(E.a)(e),c=n.find((function(e){return e.id===t.user}))||{name:"Unknown User"},s=U()("notification",{new:t.isNew});return Object(P.jsxs)("div",{className:s,children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("b",{children:c.name})," ",t.message]}),Object(P.jsx)("div",{title:t.date,children:Object(P.jsxs)("i",{children:[r," ago"]})})]},t.id)}));return Object(P.jsxs)("section",{className:"notificationsList",children:[Object(P.jsx)("h2",{children:"Notifications"}),c]})},G=n(33),V=Object(h.c)({sortComparer:function(t,e){return e.date.localeCompare(t.date)}}),W=V.getInitialState({status:"idle",error:null}),H=Object(h.b)("posts/fetchPosts",Object(O.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/fakeAPI/posts");case 2:return e=t.sent,t.abrupt("return",e.posts);case 4:case"end":return t.stop()}}),t)})))),K=Object(h.b)("posts/addNewPost",function(){var t=Object(O.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.post("/fakeAPI/posts",{post:e});case 2:return n=t.sent,t.abrupt("return",n.post);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Q=Object(h.d)({name:"posts",initialState:W,reducers:{postUpdated:function(t,e){var n=e.payload,r=n.id,c=n.title,s=n.content,a=t.entities[r];a&&(a.title=c,a.content=s)},reactionAdded:function(t,e){var n=e.payload,r=n.postId,c=n.reaction,s=t.entities[r];s&&s.reactions[c]++}},extraReducers:(y={},Object(l.a)(y,H.pending,(function(t,e){t.status="loading"})),Object(l.a)(y,H.fulfilled,(function(t,e){t.status="succeeded",V.upsertMany(t,e.payload)})),Object(l.a)(y,H.rejected,(function(t,e){t.status="failed",t.error=e.payload})),Object(l.a)(y,K.fulfilled,V.addOne),y)}),X=Q.actions,Y=(X.postAdded,X.postUpdated),Z=X.reactionAdded,$=Q.reducer,_=V.getSelectors((function(t){return t.posts})),tt=_.selectAll,et=_.selectById,nt=_.selectIds,rt=Object(G.a)([tt,function(t,e){return e}],(function(t,e){return t.filter((function(t){return t.user===e}))})),ct=function(){var t=Object(r.useState)(""),e=Object(f.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(""),a=Object(f.a)(s,2),i=a[0],o=a[1],u=Object(r.useState)(""),l=Object(f.a)(u,2),b=l[0],x=l[1],m=Object(r.useState)("idle"),v=Object(f.a)(m,2),g=v[0],y=v[1],N=d(),w=j(q),I=[n,i,b].every(Boolean)&&"idle"===g,S=function(){var t=Object(O.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!I){t.next=18;break}return t.prev=1,y("pending"),t.next=5,N(K({title:n,content:i,user:b}));case 5:e=t.sent,Object(h.f)(e),c(""),o(""),x(""),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.error("Failed to save the post: ",t.t0);case 15:return t.prev=15,y("idle"),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})));return function(){return t.apply(this,arguments)}}(),C=w.map((function(t){return Object(P.jsx)("option",{value:t.id,children:t.name},t.id)}));return Object(P.jsxs)("section",{children:[Object(P.jsx)("h2",{children:"Add A New Post"}),Object(P.jsxs)("form",{children:[Object(P.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(P.jsx)("input",{type:"text",id:"postTile",name:"postTile",value:n,onChange:function(t){return c(t.target.value)}}),Object(P.jsx)("label",{htmlFor:"postAuthor",children:"Author:"}),Object(P.jsxs)("select",{id:"postAuthor",value:b,onChange:function(t){return x(t.target.value)},children:[Object(P.jsx)("option",{value:""}),C]}),Object(P.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(P.jsx)("textarea",{id:"postContent",name:"postContent",value:i,onChange:function(t){return o(t.target.value)}}),Object(P.jsx)("button",{onClick:S,disabled:!I,type:"button",children:"Save Post"})]})]})},st=function(t){var e=t.match.params.postId,n=j((function(t){return et(t,e)})),c=Object(r.useState)(n.title),s=Object(f.a)(c,2),a=s[0],i=s[1],u=Object(r.useState)(n.content),l=Object(f.a)(u,2),b=l[0],p=l[1],O=d(),h=Object(o.g)();return Object(P.jsxs)("section",{children:[Object(P.jsx)("h2",{children:"Edit Post"}),Object(P.jsxs)("form",{children:[Object(P.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(P.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",placeholder:"What's on your mind?",value:a,onChange:function(t){return i(t.target.value)}}),Object(P.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(P.jsx)("textarea",{id:"postContent",name:"postContent",value:b,onChange:function(t){return p(t.target.value)}})]}),Object(P.jsx)("button",{type:"button",onClick:function(){a&&b&&(O(Y({id:e,title:a,content:b})),h.push("/posts/".concat(e)))},children:"Save Post"})]})},at=function(t){var e=t.timestamp,n="";if(e){var r=Object(T.a)(e),c=Object(E.a)(r);n="".concat(c," ago")}return Object(P.jsx)("span",{title:e,children:Object(P.jsx)("i",{children:n})})},it=function(t){t.userId;var e=j(z);return Object(P.jsxs)("span",{children:["by ",e?e.name:"Unknown author"]})},ot={thumbsUp:"\ud83d\udc4d",hooray:"\ud83c\udf89",heart:"\u2764\ufe0f",rocket:"\ud83d\ude80",eyes:"\ud83d\udc40"},ut=function(t){var e=t.post,n=d(),r=Object.entries(ot).map((function(t){var r=Object(f.a)(t,2),c=r[0],s=r[1];return Object(P.jsxs)("button",{type:"button",className:"muted-button reaction-button",onClick:function(){return n(Z({postId:e.id,reaction:c}))},children:[s," ",e.reactions[c]]},c)}));return Object(P.jsx)("div",{children:r})},dt=function(t){var e=t.postId,n=j((function(t){return et(t,e)}));return Object(P.jsxs)("article",{className:"post-excerpt",children:[Object(P.jsx)("h3",{children:n.title}),Object(P.jsxs)("div",{children:[Object(P.jsx)(it,{userId:n.user}),Object(P.jsx)(at,{timestamp:n.date})]}),Object(P.jsx)("p",{className:"post-content",children:n.content.substring(0,100)}),Object(P.jsx)(ut,{post:n}),Object(P.jsx)(i.b,{to:"/posts/".concat(n.id),className:"button muted-button",children:"View Post"})]},n.id)},jt=function(){var t,e=d(),n=j(nt),c=j((function(t){return t.posts.status})),s=j((function(t){return t.posts.error}));return Object(r.useEffect)((function(){"idle"===c&&e(H())}),[c,e]),"loading"===c?t=Object(P.jsx)("div",{className:"loader",children:"Loading..."}):"succeeded"===c?t=n.map((function(t){return Object(P.jsx)(dt,{postId:t},t)})):"error"===c&&(t=Object(P.jsx)("div",{children:s})),Object(P.jsxs)("section",{className:"posts-list",children:[Object(P.jsx)("h2",{children:"Posts"}),t]})},lt=function(t){var e=t.match.params.postId,n=j((function(t){return et(t,e)}));return n?Object(P.jsx)("section",{children:Object(P.jsxs)("article",{className:"post",children:[Object(P.jsx)("h2",{children:n.title}),Object(P.jsx)("p",{className:"post-content",children:n.content}),Object(P.jsx)(i.b,{to:"/editPost/".concat(n.id),className:"button",children:"Edit Post"}),Object(P.jsx)(it,{userId:e})]})}):Object(P.jsx)("section",{children:Object(P.jsx)("h2",{children:"Post not found!"})})},bt=function(t){var e=t.match.params.userId,n=j((function(t){return z(t,e)})),r=j((function(t){return rt(t,e)})).map((function(t){return Object(P.jsx)("li",{children:Object(P.jsx)(i.b,{to:"/posts/".concat(t.id),children:t.title})},t.id)}));return Object(P.jsxs)("section",{children:[Object(P.jsx)("h2",{children:n.name}),Object(P.jsx)("ul",{children:r})]})},pt=function(){var t=j(q).map((function(t){return Object(P.jsx)("li",{children:Object(P.jsx)(i.b,{to:"/users/".concat(t.id),children:t.name})},t.id)}));return Object(P.jsxs)("section",{children:[Object(P.jsx)("h2",{children:"User"}),Object(P.jsx)("ul",{children:t})]})};var ft,Ot=function(){return Object(P.jsxs)(i.a,{children:[Object(P.jsx)(A,{}),Object(P.jsx)("div",{className:"App",children:Object(P.jsxs)(o.d,{children:[Object(P.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)(ct,{}),Object(P.jsx)(jt,{})]})}}),Object(P.jsx)(o.b,{exact:!0,path:"/posts/:postId",component:lt}),Object(P.jsx)(o.b,{exact:!0,path:"/editPost/:postId",component:st}),Object(P.jsx)(o.b,{exact:!0,path:"/users",component:pt}),Object(P.jsx)(o.b,{exact:!0,path:"/users/:userId",component:bt}),Object(P.jsx)(o.b,{exact:!0,path:"/notifications",component:J}),Object(P.jsx)(o.a,{to:"/"})]})})]})},ht=Object(h.a)({reducer:{posts:$,users:D,notifications:C}}),xt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,1145)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))},mt=n(64),vt=n(9),gt=n(21),yt=n.n(gt),Nt=n(29),wt=n(46),It=n.n(wt),St=vt.c.extend({serializeIds:"always"}),Ct=It()(),kt=localStorage.getItem("randomTimestampSeed");function Pt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Ct()*(e-t+1))+t}kt?ft=new Date(kt):(kt=(ft=new Date).toISOString(),localStorage.setItem("randomTimestampSeed",kt)),Ct=It()(kt),Object(Nt.setRandom)(Ct),yt.a.seed(ft.getTime());var At=function(t){return t[Pt(0,t.length-1)]},Tt=["poked you","says hi!","is glad we're friends","sent you a gift"];new vt.d({routes:function(){this.namespace="fakeAPI",this.resource("users"),this.resource("posts"),this.resource("comments");var t=this;this.post("/posts",(function(e,n){var r=this.normalizedRequestAttrs();r.date=(new Date).toISOString();var c=e.users.find(r.userId);if(r.user=c,"error"===r.content)throw new Error("Could not save the post!");return t.create("post",r)})),this.get("/posts/:postId/comments",(function(t,e){return t.posts.find(e.params.postId).comments})),this.get("/notifications",(function(t,e){var n,r=Pt(1,5),c=new Date;return e.queryParams.since?n=Object(T.a)(e.queryParams.since):(n=new Date(c.valueOf())).setMinutes(n.getMinutes()-15),{notifications:Object(mt.a)(Array(r)).map((function(){var e=At(t.db.users),r=At(Tt);return{id:Object(h.e)(),date:yt.a.date.between(n,c).toISOString(),message:r,user:e.id,read:!1,isNew:!0}}))}}))},models:{user:vt.b.extend({posts:Object(vt.g)()}),post:vt.b.extend({user:Object(vt.f)(),comments:Object(vt.g)()}),comment:vt.b.extend({post:Object(vt.f)()}),notification:vt.b.extend({})},factories:{user:vt.a.extend({id:function(){return Object(h.e)()},firstName:function(){return yt.a.name.firstName()},lastName:function(){return yt.a.name.lastName()},name:function(){return yt.a.name.findName(this.firstName,this.lastName)},username:function(){return yt.a.internet.userName(this.firstName,this.lastName)},afterCreate:function(t,e){e.createList("post",3,{user:t})}}),post:vt.a.extend({id:function(){return Object(h.e)()},title:function(){return Object(Nt.sentence)()},date:function(){return yt.a.date.recent(7)},content:function(){return Object(Nt.article)(1)},reactions:function(){return{thumbsUp:0,hooray:0,heart:0,rocket:0,eyes:0}},afterCreate:function(t,e){},user:Object(vt.e)()}),comment:vt.a.extend({id:function(){return Object(h.e)()},date:function(){return yt.a.date.past(2)},text:function(){return Object(Nt.paragraph)()},post:Object(vt.e)()})},serializers:{user:St,post:St,comment:St},seeds:function(t){t.createList("user",3)}}),ht.dispatch(L()),a.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(u.a,{store:ht,children:Object(P.jsx)(Ot,{})})}),document.getElementById("root")),xt()},70:function(t,e,n){}},[[1142,1,2]]]);
//# sourceMappingURL=main.03654676.chunk.js.map