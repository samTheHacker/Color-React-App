(this["webpackJsonpcolors-app"]=this["webpackJsonpcolors-app"]||[]).push([[0],{304:function(e,a,t){e.exports=t.p+"static/media/bg.66ab7a49.svg"},383:function(e,a,t){e.exports=t(766)},388:function(e,a,t){},573:function(e,a,t){},766:function(e,a,t){"use strict";t.r(a);var o,n,r=t(0),l=t.n(r),i=t(12),c=t.n(i),s=t(41),m=(t(388),t(75)),d=t(27),u=t(9),h=t(30),p=t(28),g=t(3),b=t(29),f=t(62),v=t(771),C=t(770),y=t(5),E=t(298),j=t(7),O=t.n(j),w=t(36),x=t(45),k=t.n(x),S=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600.98px"}[e],")")},P={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:"1"}},Object(y.a)(o,S("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(y.a)(o,S("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(y.a)(o,S("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return k()(e.background).luminance()>=.55?"black":"white"}},colorName:{color:function(e){return k()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return k()(e.background).luminance()>=.55?"rgba(0, 0, 0, 0.5)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0",bottom:"0",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return k()(e.background).luminance()>=.55?"rgba(0, 0, 0, 0.5)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:"0"},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",zIndex:"-5",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(y.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},S("xs"),{fontSize:"6rem"}),"& p":{fontize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},N=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,r=e.classes,i=this.state.copied;return l.a.createElement(E.CopyToClipboard,{text:t,onCopy:this.changeCopyState},l.a.createElement("div",{style:{background:t},className:r.ColorBox},l.a.createElement("div",{style:{background:t},className:O()(r.copyOverlay,Object(y.a)({},r.showOverlay,i))}),l.a.createElement("div",{className:O()(r.copyMessage,Object(y.a)({},r.showMessage,i))},l.a.createElement("h1",null,"copied!"),l.a.createElement("p",{className:r.copyText},t)),l.a.createElement("div",null,l.a.createElement("div",{className:r.boxContent},l.a.createElement("span",{className:r.colorName},a)),l.a.createElement("button",{className:r.copyButton},"Copy")),n&&l.a.createElement(s.b,{to:o,onClick:function(e){return e.stopPropagation()}},l.a.createElement("span",{className:r.seeMore},"MORE"))))}}]),a}(r.Component),F=Object(w.a)(P)(N),D=t(110),B=t.n(D),I=t(90),A=t.n(I),T=t(142),L=t.n(T),R=t(60),G=t.n(R),M=t(154),z=t.n(M),U=t(310),H=(t(464),{Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(y.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},S("xs"),{display:"none"}),slider:Object(y.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},S("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),V=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(g.a)(t)),t.closeSnackbar=t.closeSnackbar.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.classes,r=this.state.format;return l.a.createElement("header",{className:n.Navbar},l.a.createElement("div",{className:n.logo},l.a.createElement(s.b,{to:"/"},"reactcolorpicker")),o&&l.a.createElement("div",null,l.a.createElement("span",null,"Level: ",a),l.a.createElement("div",{className:n.slider},l.a.createElement(U.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),l.a.createElement("div",{className:n.selectContainer},l.a.createElement(B.a,{value:r,onChange:this.handleFormatChange},l.a.createElement(A.a,{value:"hex"},"HEX - #fffff"),l.a.createElement(A.a,{value:"rgb"},"RGB - rgb(255, 255, 255)"),l.a.createElement(A.a,{value:"rgba"},"RGB - rgba(255, 255, 255, 1.0)"))),l.a.createElement(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:l.a.createElement("span",{id:"message-id"},"Format Changed To ",r.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[l.a.createElement(G.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},l.a.createElement(z.a,null))]}))}}]),a}(r.Component),W=Object(w.a)(H)(V),q={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(n={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:"1",backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(y.a)(n,S("lg"),{width:"25%",height:"33.3333%"}),Object(y.a)(n,S("md"),{width:"50%",height:"20%"}),Object(y.a)(n,S("xs"),{width:"100%",height:"10%"}),n)};var J,Y,K=Object(w.a)({paletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return l.a.createElement("footer",{className:o.paletteFooter},a,l.a.createElement("span",{className:o.emoji},t))})),_=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(g.a)(t)),t.changeFormat=t.changeFormat.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,r=this.props.classes,i=this.state,c=i.level,s=i.format,m=a[c].map((function(e){return l.a.createElement(F,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})}));return l.a.createElement("div",{className:r.Palette},l.a.createElement(W,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),l.a.createElement("div",{className:r.colors},m),l.a.createElement(K,{paletteName:t,emoji:o}))}}]),a}(r.Component),Q=Object(w.a)(q)(_),X=t(73),$=t.n(X),Z=t(74),ee=t.n(Z),ae=t(111),te=t.n(ae),oe=t(88),ne=t.n(oe),re=t(112),le=t.n(re),ie=t(113),ce=t.n(ie),se=t(114),me=t.n(se),de=t(305),ue=t.n(de),he=t(220),pe=t.n(he),ge=t(153),be=t.n(ge),fe=t(155),ve=t.n(fe),Ce=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).deletePalette=t.deletePalette.bind(Object(g.a)(t)),t.handleClick=t.handleClick.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors;console.log("Readering:",t);var r=n.map((function(e){return l.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return l.a.createElement("div",{className:a.root,onClick:this.handleClick},l.a.createElement(ve.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),l.a.createElement("div",{className:a.colors},r),l.a.createElement("h5",{className:a.title},t," ",l.a.createElement("span",{className:a.emoji},o)))}}]),a}(r.PureComponent),ye=Object(w.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(Ce),Ee=t(304),je={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#487346",backgroundImage:"url(".concat(t.n(Ee).a,")"),overflow:"scroll"},heading:{fontSize:"2rem"},container:(J={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(y.a)(J,S("xl"),{width:"80%"}),Object(y.a)(J,S("xs"),{width:"70%"}),J),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"#fff",alignItems:"center","& a":{color:"white"}},palettes:(Y={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(y.a)(Y,S("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(y.a)(Y,S("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),Y)},Oe=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={openDeleteDialog:!1,deletingId:""},t.openDialog=t.openDialog.bind(Object(g.a)(t)),t.closeDialog=t.closeDialog.bind(Object(g.a)(t)),t.handleDelete=t.handleDelete.bind(Object(g.a)(t)),t.handleDefault=t.handleDefault.bind(Object(g.a)(t)),t.goToPalette=t.goToPalette.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDefault",value:function(){window.localStorage.clear()}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return l.a.createElement("div",{className:o.root},l.a.createElement("div",{className:o.container},l.a.createElement("nav",{className:o.nav},l.a.createElement("h1",{className:o.heading},"React Colours"),l.a.createElement(s.b,{to:"/palette/new"},"Create Palette")),l.a.createElement(v.a,{className:o.palettes},t.map((function(a){return l.a.createElement(C.a,{key:a.id,classNames:"fade",timeout:2e3},l.a.createElement(ye,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),l.a.createElement($.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},l.a.createElement(ee.a,{id:"delete-dialog-title"},"Delete This Palette?"),l.a.createElement(te.a,null,l.a.createElement(ne.a,{button:!0,onClick:this.handleDelete},l.a.createElement(le.a,null,l.a.createElement(ce.a,{style:{backgroundColor:pe.a[100],color:pe.a[600]}},l.a.createElement(ue.a,null))),l.a.createElement(me.a,{primary:"Delete"})),l.a.createElement(ne.a,{button:!0,onClick:this.closeDialog},l.a.createElement(le.a,null,l.a.createElement(ce.a,{style:{backgroundColor:be.a[100],color:be.a[600]}},l.a.createElement(z.a,null))),l.a.createElement(me.a,{primary:"Cancel"})))))}}]),a}(r.Component),we=Object(w.a)(je)(Oe),xe=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,r=this.props.classes,i=this._shades.map((function(a){return l.a.createElement(F,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})}));return l.a.createElement("div",{className:r.Palette},l.a.createElement(W,{handleChange:this.changeFormat,showingAllColors:!1}),l.a.createElement("div",{className:r.colors},i,l.a.createElement("div",{className:r.goBack},l.a.createElement(s.b,{to:"/palette/".concat(n)},"Go Back!"))),l.a.createElement(K,{paletteName:t,emoji:o}))}}]),a}(r.Component),ke=Object(w.a)(q)(xe);t(573);var Se,Pe=function(e){var a=e.children;return l.a.createElement("section",{className:"page"},a)},Ne=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Fe=t(92),De={root:(Se={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(y.a)(Se,S("lg"),{width:"25%",height:"20%"}),Object(y.a)(Se,S("md"),{width:"50%",height:"10%"}),Object(y.a)(Se,S("sm"),{width:"100%",height:"5%"}),Se),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return k()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},Be=Object(Fe.b)((function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return l.a.createElement("div",{className:a.root,style:{backgroundColor:n}},l.a.createElement("div",{className:a.boxContent},l.a.createElement("span",null,o),l.a.createElement(ve.a,{className:a.deleteIcon,onClick:t})))})),Ie=Object(w.a)(De)(Be),Ae=Object(Fe.a)((function(e){var a=e.colors,t=e.removeColor;return l.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return l.a.createElement(Ie,{index:a,color:e.color,key:e.name,name:e.name,handleClick:function(){return t(e.name)}})})))})),Te=t(306),Le=t(61),Re=t(54),Ge=t(35),Me={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},ze=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={currentColor:"teal",newColorName:""},t.updateCurrentColor=t.updateCurrentColor.bind(Object(g.a)(t)),t.handleChange=t.handleChange.bind(Object(g.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;Re.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Re.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,n=o.currentColor,r=o.newColorName;return l.a.createElement("div",null,l.a.createElement(Te.ChromePicker,{color:n,onChangeComplete:this.updateCurrentColor,className:t.picker}),l.a.createElement(Re.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},l.a.createElement(Re.TextValidator,{value:r,placeholder:"Color Name",name:"newColorName",variant:"filled",margin:"normal",className:t.colorNameInput,onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used"]}),l.a.createElement(Le.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":n}},a?"Palette Full":"Add Color")))}}]),a}(r.Component),Ue=Object(Ge.withStyles)(Me)(ze),He=t(89),Ve=t.n(He),We=t(145),qe=t.n(We),Je=t(143),Ye=t.n(Je),Ke=t(144),_e=t.n(Ke),Qe=t(311),Xe=(t(757),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.state={stage:"form",newPaletteName:""},t.handleChange=t.handleChange.bind(Object(g.a)(t)),t.showEmoPicker=t.showEmoPicker.bind(Object(g.a)(t)),t.savePalette=t.savePalette.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;Re.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"showEmoPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.props.hideForm,a=this.state,t=a.newPaletteName,o=a.stage;return l.a.createElement("div",null,l.a.createElement($.a,{open:"emoji"===o,onClose:e},l.a.createElement(ee.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),l.a.createElement(Qe.a,{onSelect:this.savePalette,title:"Pick a Palette Emoji"})),l.a.createElement($.a,{open:"form"===o,"aria-labelledby":"form-dialog-title",onClose:e},l.a.createElement(ee.a,{id:"form-dialog-title"},"Choose a Palette Name"),l.a.createElement(Re.ValidatorForm,{onSubmit:this.showEmoPicker},l.a.createElement(Ye.a,null,l.a.createElement(_e.a,null,"Please enter a name for your colour palette."),l.a.createElement(Re.TextValidator,{label:"Palette Name",value:t,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),l.a.createElement(qe.a,null,l.a.createElement(Ve.a,{onClick:e,color:"primary"},"Cancel"),l.a.createElement(Ve.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),a}(r.Component)),$e=t(146),Ze=t.n($e),ea=t(147),aa=t.n(ea),ta=t(148),oa=t.n(ta),na=t(52),ra=t.n(na),la=t(308),ia=t.n(la),ca=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(y.a)({marginRight:"1rem","& a":{textDecoration:"none"}},S("xs"),{marginRight:"0.5rem"}),button:Object(y.a)({margin:"0 0.5rem","& a":{textDecoration:"none"}},S("xs"),{margin:"0 0.2rem",padding:"0.3rem"}),link:{textDecoration:"none"}}},sa=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={newPaletteName:"",formShowing:!1},t.handleChange=t.handleChange.bind(Object(g.a)(t)),t.showForm=t.showForm.bind(Object(g.a)(t)),t.hideForm=t.hideForm.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit,r=e.handleDrawerOpen,i=this.state.formShowing;return l.a.createElement("div",{className:a.root},l.a.createElement(Ze.a,null),l.a.createElement(aa.a,{position:"fixed",color:"default",className:O()(a.appBar,Object(y.a)({},a.appBarShift,t))},l.a.createElement(oa.a,{disableGutters:!t},l.a.createElement(G.a,{color:"inherit","aria-label":"Open drawer",onClick:r,className:O()(a.menuButton,Object(y.a)({},a.hide,t))},l.a.createElement(ia.a,null)),l.a.createElement(ra.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),l.a.createElement("div",{className:a.navBtns},l.a.createElement(s.b,{to:"/"},l.a.createElement(Le.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),l.a.createElement(Le.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"Save"))),i&&l.a.createElement(Xe,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))}}]),a}(r.Component),ma=Object(Ge.withStyles)(ca,{withTheme:!0})(sa),da=t(149),ua=t.n(da),ha=t(150),pa=t.n(ha),ga=t(309),ba=t.n(ga);function fa(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function va(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?fa(t,!0).forEach((function(a){Object(y.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fa(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Ca=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:va({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},ya=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState((function(e){var t=e.colors;return{colors:Object(Fe.c)(t,a,o)}}))},t.state={open:!0,colors:Ne[0].colors},t.addNewColor=t.addNewColor.bind(Object(g.a)(t)),t.handleChange=t.handleChange.bind(Object(g.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(t)),t.removeColor=t.removeColor.bind(Object(g.a)(t)),t.clearColors=t.clearColors.bind(Object(g.a)(t)),t.addRandomColor=t.addRandomColor.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(m.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a,t=this.props.palettes.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=this.state.colors.some((function(e){return e.name===a.name}));this.setState({colors:[].concat(Object(m.a)(this.state.colors),[a])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,r=n.open,i=n.colors,c=i.length>=t;return l.a.createElement("div",{className:a.root},l.a.createElement(ma,{open:r,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),l.a.createElement(ua.a,{className:a.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:a.drawerPaper}},l.a.createElement("div",{className:a.drawerHeader},l.a.createElement(G.a,{onClick:this.handleDrawerClose},l.a.createElement(ba.a,null))),l.a.createElement(pa.a,null),l.a.createElement("div",{className:a.container},l.a.createElement(ra.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),l.a.createElement("div",{className:a.buttons},l.a.createElement(Le.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button},"Clear Palette"),l.a.createElement(Le.a,{variant:"contained",className:a.button,color:"primary",onClick:this.addRandomColor,disabled:c},"Random Color")),l.a.createElement(Ue,{paletteIsFull:c,addNewColor:this.addNewColor,colors:i}))),l.a.createElement("main",{className:O()(a.content,Object(y.a)({},a.contentShift,r))},l.a.createElement("div",{className:a.drawerHeader}),l.a.createElement(Ae,{colors:this.state.colors,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),a}(r.Component);ya.defaultProps={maxColors:20};var Ea=Object(Ge.withStyles)(Ca,{withTheme:!0})(ya),ja=[50,100,200,300,400,500,600,700,800,900];function Oa(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,n=void 0;try{for(var r,l=ja[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var i=r.value;a.colors[i]=[]}}catch(v){o=!0,n=v}finally{try{t||null==l.return||l.return()}finally{if(o)throw n}}var c,s,m=!0,d=!1,u=void 0;try{for(var h,p=e.colors[Symbol.iterator]();!(m=(h=p.next()).done);m=!0){var g=h.value,b=(c=g.color,s=10,k.a.scale(function(e){return[k()(e).darken(1.4).hex(),e,"#fff"]}(c)).mode("lab").colors(s)).reverse();for(var f in b)a.colors[ja[f]].push({name:"".concat(g.name," ").concat(ja[f]),id:g.name.toLowerCase().replace(/ /g,"-"),hex:b[f],rgb:k()(b[f]).css(),rgba:k()(b[f]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(v){d=!0,u=v}finally{try{m||null==p.return||p.return()}finally{if(d)throw u}}return a}var wa=function(e){function a(e){var t;Object(d.a)(this,a),t=Object(h.a)(this,Object(p.a)(a).call(this,e));var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||Ne},t.savePalette=t.savePalette.bind(Object(g.a)(t)),t.findPalette=t.findPalette.bind(Object(g.a)(t)),t.deletePalette=t.deletePalette.bind(Object(g.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(m.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return l.a.createElement(f.a,{render:function(a){var t=a.location;return l.a.createElement(v.a,null,l.a.createElement(C.a,{key:t.key,classNames:"page",timeout:300},l.a.createElement(f.c,{location:t},l.a.createElement(f.a,{exact:!0,path:"/palette/new",render:function(a){return l.a.createElement(Pe,null,l.a.createElement(Ea,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),l.a.createElement(f.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return l.a.createElement(Pe,null,l.a.createElement(ke,{colorId:a.match.params.colorId,palette:Oa(e.findPalette(a.match.params.paletteId))}))}}),l.a.createElement(f.a,{exact:!0,path:"/",render:function(a){return l.a.createElement(Pe,null,l.a.createElement(we,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),l.a.createElement(f.a,{exact:!0,path:"/palette/:id",render:function(a){return l.a.createElement(Pe,null,l.a.createElement(Q,{palette:Oa(e.findPalette(a.match.params.id))}))}}),l.a.createElement(f.a,{render:function(a){return l.a.createElement(Pe,null,l.a.createElement(we,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null,l.a.createElement(wa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[383,1,2]]]);
//# sourceMappingURL=main.6ab0ae03.chunk.js.map