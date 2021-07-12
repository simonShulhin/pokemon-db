(this["webpackJsonppokemon-db"]=this["webpackJsonppokemon-db"]||[]).push([[0],{64:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(64);var a=n(13),r=n(0),c=n(19),s=n.n(c),i=n(36),o=n(39),u=function e(){var t=this;Object(o.a)(this,e),this._apiBase="https://pokeapi.co/api/v2/",this._imageBase="https://starwars-visualguide.com/assets/img",this.getResource=function(){var e=Object(i.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n," , received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPokemons=Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("pokemon?limit=50&offset=0/");case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)}))),this.getPokemon=function(){var e=Object(i.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("pokemon/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformPokemon(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAbilities=function(){var e=Object(i.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("ability/".concat(n));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformPokemon=function(e){var t=e.name,n=e.types,a=e.sprites,r=e.id,c=e.height,s=e.weight;return{name:t,types:n.map((function(e){return e.type.name})),sprite:a.other["official-artwork"].front_default,id:r,weight:s,height:c}}},l=n(57),j=(n(67),n(2)),d=function(e){var t=e.pokemon,n=t.types?t.types.map((function(e){return Object(j.jsx)("span",{className:"type ".concat(e),children:e},e)})):[];return Object(j.jsx)("div",{className:"pokemons-list-item",children:Object(j.jsxs)("div",{className:"card shadow-sm",children:[Object(j.jsx)("img",{className:"sprite",src:t.sprite,alt:t.name}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h4",{className:"order",children:["#",t.id]}),Object(j.jsx)("h1",{className:"name",children:t.name}),Object(j.jsxs)("p",{children:["Height: ",t.height," Weight: ",t.weight]}),Object(j.jsx)("div",{children:n})]})]})})},h=(n(69),n(5)),b=n(121),m=n(126),p=n(122),A=n(125),N=n(59),f=Object(h.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(N.a),O=Object(b.a)((function(e){return{margin:{margin:e.spacing(1)}}})),U=function(e){var t=e.quantity,n=e.handleChange,a=O();return Object(j.jsx)("div",{children:Object(j.jsx)(p.a,{className:a.margin,children:Object(j.jsxs)(A.a,{labelId:"demo-customized-select-label",id:"demo-customized-select",value:t,onChange:function(e){n(e.target.value)},input:Object(j.jsx)(f,{}),children:[Object(j.jsx)(m.a,{value:10,children:"10"}),Object(j.jsx)(m.a,{value:20,children:"20"}),Object(j.jsx)(m.a,{value:50,children:"50"})]})})})},E=n(129),g=(n(78),Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:150},selectEmpty:{marginTop:e.spacing(2)}}}))),v=function(e){var t=e.types,n=e.handleChange,c=g(),s=Object(r.useState)(""),i=Object(a.a)(s,2),o=i[0],u=i[1],l=t.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}));return Object(j.jsx)("div",{className:"type-filter",children:Object(j.jsxs)(p.a,{variant:"outlined",className:c.formControl,children:[Object(j.jsx)(E.a,{htmlFor:"outlined-type-native-simple",children:"Filter by type"}),Object(j.jsxs)(A.a,{native:!0,value:o,onChange:function(e){n(e.target.value),u(e.target.value)},label:"Filter by type",inputProps:{name:"type",id:"outlined-type-native-simple"},children:[Object(j.jsx)("option",{"aria-label":"None",value:""}),l]})]})})},x=n(127),W=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),S=function(e){var t=e.handleChange,n=W(),c=Object(r.useState)(""),s=Object(a.a)(c,2),i=s[0],o=s[1];return Object(j.jsx)("form",{className:n.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){return e.preventDefault()},children:Object(j.jsx)(x.a,{className:"search-input",id:"outlined-basic",label:"Search",variant:"outlined",value:i,onChange:function(e){o(e.target.value),t(e.target.value)}})})},y=(n(79),Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:150},selectEmpty:{marginTop:e.spacing(2)}}}))),k=function(e){e.types;var t=e.handleChange,n=y(),c=Object(r.useState)(""),s=Object(a.a)(c,2),i=s[0],o=s[1];return Object(j.jsx)("div",{className:"type-filter",children:Object(j.jsxs)(p.a,{variant:"outlined",className:n.formControl,children:[Object(j.jsx)(E.a,{htmlFor:"outlined-type-native-simple",children:"Sort by..."}),Object(j.jsxs)(A.a,{native:!0,value:i,onChange:function(e){t(e.target.value),o(e.target.value)},label:"Filter by type",inputProps:{name:"type",id:"outlined-type-native-simple"},children:[Object(j.jsx)("option",{"aria-label":"None",value:""}),Object(j.jsx)("option",{value:"Lowest",children:"Lowest Number"}),Object(j.jsx)("option",{value:"Highest",children:"Highest Number"}),Object(j.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(j.jsx)("option",{value:"Z-A",children:"Z-A"})]})]})})},w=function(e){var t=e.pokemons,n=Object(r.useState)(10),c=Object(a.a)(n,2),s=c[0],i=c[1],o=Object(r.useState)(""),u=Object(a.a)(o,2),h=u[0],b=u[1],m=Object(r.useState)([]),p=Object(a.a)(m,2),A=p[0],N=p[1],f=Object(r.useState)(""),O=Object(a.a)(f,2),E=O[0],g=O[1],x=Object(r.useState)(""),W=Object(a.a)(x,2),y=W[0],w=W[1];Object(r.useEffect)((function(){N(Object(l.a)(new Set(t.map((function(e){return e.types})).flat().sort())))}),[t]);var M=(""!==h?t.filter((function(e){return e.types.includes(h)})):t).filter((function(e){return-1!==e.name.indexOf(E)})),C=function(e){switch(e){case"Highest":return M.reverse(),M;case"Z-A":return M.sort((function(e,t){return e.name>t.name?-1:e.name>t.name?1:0})),M;case"A-Z":return M.sort((function(e,t){return e.name<t.name?-1:e.name<t.name?1:0})),M;default:return M}}(y).filter((function(e,t){return t<s})).map((function(e){return Object(j.jsx)(d,{pokemon:e},e.id)}));return Object(j.jsx)("div",{className:"pokemons-list album py-5 bg-light",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)(v,{types:A,handleChange:function(e){b(e)}}),Object(j.jsx)(S,{handleChange:function(e){g(e)}}),Object(j.jsx)(k,{handleChange:function(e){w(e)}})]}),Object(j.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:C}),Object(j.jsx)(U,{quantity:s,handleChange:function(e){i(e)}})]})})},M=(n(80),function(){return Object(j.jsx)("div",{className:"lds-css",children:Object(j.jsxs)("div",{className:"lds-double-ring",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})}),C=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!0),i=Object(a.a)(s,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){var e=new u,t=function(e){var t=e.map((function(e){var t=e.name;return n(t)}));Promise.all(t).then((function(e){return c(e)}))},n=function(t){return e.getPokemon(t).then((function(e){return e}))};e.getAllPokemons().then((function(e){return t(e)})).then((function(){return l(!1)}))}),[]),o?Object(j.jsx)(M,{}):Object(j.jsx)(w,{pokemons:n})},T=(n(81),function(){return Object(j.jsx)("div",{id:"header",className:"header container",children:Object(j.jsx)("h1",{children:"Pokemon DB"})})}),V=function(){return Object(j.jsxs)("main",{role:"main",className:"container",children:[Object(j.jsx)(T,{}),Object(j.jsx)(C,{})]})},B=n(54),F=n(58),R=n(55),D=(n(82),function(){return Object(j.jsxs)("div",{className:"error-indicator",children:[Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(j.jsx)("span",{className:"boom",children:"BOOM!"}),Object(j.jsx)("span",{children:"something has gone terribly wrong"}),Object(j.jsx)("span",{children:"(but we already sent droids to fix it)"})]})}),I=function(e){Object(F.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(B.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)(D,{}):this.props.children}}]),n}(r.Component),P=n(56),Z=(n(83),n(9));n(0);Z.render(Object(j.jsx)(I,{children:Object(j.jsx)(P.a,{children:Object(j.jsx)(V,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.dcb5234a.chunk.js.map