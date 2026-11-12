
const R=(items,w,h,x={})=>({preset_info:{version:13,title:"Demo",width:w,height:h},preset_root:{internal_type:"RootLayerModule",...x,viewgroup_items:items}});
const S=o=>({internal_type:"ShapeModule",shape_type:"RECT",...o}),T=o=>({internal_type:"TextModule",...o}),I=o=>({internal_type:"FontIconModule",...o});
const dot=(c,o)=>S({shape_type:"CIRCLE",shape_width:40,shape_height:40,paint_color:c,...o});
const EX={
hello:R([S({internal_title:"Card",shape_width:400,shape_height:200,shape_corners:48,paint_color:"#FF1E88E5"}),T({internal_title:"Hello",position_anchor:"CENTER",text_expression:"Hello KWGT",text_size:48,paint_color:"#FFFFFFFF"})],400,200),
anchors:R([S({internal_title:"Card",shape_width:400,shape_height:240,shape_corners:32,paint_color:"#FF263238"}),
dot("#FFFF5252",{internal_title:"TL",position_anchor:"TOPLEFT",position_padding_left:20,position_padding_top:20}),
dot("#FF69F0AE",{internal_title:"TR",position_anchor:"TOPRIGHT",position_padding_right:20,position_padding_top:20}),
dot("#FF40C4FF",{internal_title:"BL",position_anchor:"BOTTOMLEFT",position_padding_left:20,position_padding_bottom:20}),
dot("#FFFFD740",{internal_title:"BR + offset",position_anchor:"BOTTOMRIGHT",position_padding_right:20,position_padding_bottom:20,position_offset_x:-60}),
T({internal_title:"Label",position_anchor:"CENTER",text_expression:"CENTER",text_size:30,paint_color:"#FFFFFFFF"})],400,240),
shapes:R([S({internal_title:"Card",shape_width:460,shape_height:220,shape_corners:28,paint_color:"#FFF3EDF7"}),
S({internal_title:"Square",shape_width:90,shape_height:90,shape_corners:0,position_offset_x:30,position_offset_y:30,paint_color:"#FF6750A4"}),
S({internal_title:"Rounded",shape_width:110,shape_height:90,shape_corners:32,position_offset_x:140,position_offset_y:30,paint_color:"#FF7D5260"}),
S({shape_type:"CIRCLE",internal_title:"Circle",shape_width:90,shape_height:90,position_offset_x:270,position_offset_y:30,paint_color:"#FF386A20"}),
S({internal_title:"Pill",shape_width:240,shape_height:50,shape_corners:360,position_offset_x:30,position_offset_y:140,paint_color:"#8000639B"})],460,220),
stack:R([S({internal_title:"Card",shape_width:400,shape_height:160,shape_corners:32,paint_color:"#FF37474F"}),
{internal_type:"StackLayerModule",internal_title:"Row",position_anchor:"CENTER",config_stacking:"HORIZONTAL_CENTER",config_margin:16,viewgroup_items:[dot("#FFFF8A65",{shape_width:60,shape_height:60}),dot("#FFFFD54F",{shape_width:90,shape_height:90}),dot("#FF81C784",{shape_width:60,shape_height:60}),T({text_expression:"Row",text_size:34,paint_color:"#FFFFFFFF"})]}],400,160),
globals:R([S({internal_title:"Card",shape_width:400,shape_height:200,shape_corners:40,paint_color:"#FF212121"}),
S({internal_title:"Track",shape_width:340,shape_height:28,shape_corners:360,position_offset_x:30,position_offset_y:120,paint_color:"#FF424242"}),
S({internal_title:"Fill",shape_width:1,shape_height:28,shape_corners:360,position_offset_x:30,position_offset_y:120,paint_color:"#FFE91E63",internal_toggles:{paint_color:100,shape_width:10},internal_globals:{paint_color:"accent"},internal_formulas:{shape_width:"$gv(pbwidth)*bi(level)/100$"}}),
T({internal_title:"Percent",position_offset_x:30,position_offset_y:30,text_expression:"$bi(level)$%",text_size:64,paint_color:"#FFFFFFFF",internal_toggles:{paint_color:10},internal_formulas:{paint_color:"$if(bi(level)<20, #FFFF5252, #FFFFFFFF)$"}})],400,200,
{globals_list:{accent:{index:1,type:"COLOR",title:"accent",value:"#FFE91E63"},pbwidth:{index:2,type:"NUMBER",title:"pbwidth",value:340}}}),
clock:R([S({internal_title:"BG",shape_width:420,shape_height:200,shape_corners:56,paint_color:"#FF000000"}),
T({internal_title:"Time",position_anchor:"CENTER",position_offset_y:-18,text_expression:"$df(hh:mm)$",text_size:100,paint_color:"#FFFFFFFF"}),
T({internal_title:"Date",position_anchor:"BOTTOM",position_padding_bottom:28,text_expression:"$df(EEEE d MMMM)$",text_size:24,paint_color:"#FFD71921"})],420,200),
media:R([S({internal_title:"Background",shape_width:460,shape_height:230,shape_corners:52,paint_color:"#FF2B2733"}),
{internal_type:"BitmapModule",internal_title:"Cover",bitmap_width:120,bitmap_height:120,position_offset_x:28,position_offset_y:28,internal_toggles:{bitmap_bitmap:10},internal_formulas:{bitmap_bitmap:"$mi(cover)$"}},
T({internal_title:"Title",position_offset_x:170,position_offset_y:34,text_expression:"$mi(title)$",text_size:30,paint_color:"#FFFFFFFF"}),
T({internal_title:"Artist",position_offset_x:170,position_offset_y:74,text_expression:"$mi(artist)$",text_size:20,paint_color:"#FFB8B2C8"}),
S({internal_title:"Track",shape_width:400,shape_height:10,shape_corners:360,position_anchor:"BOTTOMLEFT",position_padding_left:30,position_padding_bottom:36,paint_color:"#FF4A4458"}),
S({internal_title:"Progress",shape_width:1,shape_height:10,shape_corners:360,position_anchor:"BOTTOMLEFT",position_padding_left:30,position_padding_bottom:36,paint_color:"#FFD0BCFF",internal_toggles:{shape_width:10},internal_formulas:{shape_width:"$gv(pbwidth)*mi(percent)/100$"}}),
{internal_type:"StackLayerModule",internal_title:"Controls",position_offset_x:170,position_offset_y:108,config_stacking:"HORIZONTAL_CENTER",config_margin:22,viewgroup_items:[
I({icon_icon:"skip_previous",icon_size:44,paint_color:"#FFFFFFFF",internal_events:[{type:"SINGLE_TAP",action:"MUSIC",music_action:"PREVIOUS"}]}),
I({icon_icon:"play_arrow",icon_size:52,paint_color:"#FFD0BCFF",internal_toggles:{icon_icon:10},internal_formulas:{icon_icon:"$if(mi(state) = PLAYING, Pause, Play_arrow)$"},internal_events:[{type:"SINGLE_TAP",action:"MUSIC"}]}),
I({icon_icon:"skip_next",icon_size:44,paint_color:"#FFFFFFFF",internal_events:[{type:"SINGLE_TAP",action:"MUSIC",music_action:"NEXT"}]})]}],460,230,
{globals_list:{pbwidth:{index:1,type:"NUMBER",title:"pbwidth",value:400}}})};

EX.wavebar=R([S({internal_title:"Card",shape_width:485,shape_height:49,shape_corners:24,paint_color:"#FF2B2733"}),
I({internal_title:"Previous",icon_icon:"skip_previous",icon_size:42,position_anchor:"CENTERLEFT",position_padding_left:10,paint_color:"#FFFFFFFF",internal_events:[{type:"SINGLE_TAP",action:"MUSIC",music_action:"PREVIOUS"}]}),
S({internal_title:"Background Container",shape_width:291,shape_height:4.5,shape_corners:360,position_anchor:"CENTERLEFT",position_padding_left:80,paint_color:"#66FFFFFF",internal_toggles:{shape_width:10},internal_formulas:{shape_width:"$gv(pbwidth)+1$"}}),
S({internal_title:"Progress",shape_width:1,shape_height:4.5,shape_corners:360,position_anchor:"CENTERLEFT",position_padding_left:80,paint_color:"#FFFFFFFF",internal_toggles:{shape_width:10},internal_formulas:{shape_width:"$gv(pbwidth)*(mi(percent)/100)-1$"}}),
S({internal_title:"Head",shape_width:8,shape_height:32,shape_corners:360,position_anchor:"CENTERLEFT",position_padding_left:80,paint_color:"#FFFFFFFF",internal_toggles:{position_padding_left:10},internal_formulas:{position_padding_left:"$gv(pbwidth)*(mi(percent)/100)+76$"}}),
I({internal_title:"Next",icon_icon:"skip_next",icon_size:42,position_anchor:"CENTERRIGHT",position_padding_right:10,paint_color:"#FFFFFFFF",internal_events:[{type:"SINGLE_TAP",action:"MUSIC",music_action:"NEXT"}]})],485,49,
{globals_list:{pbwidth:{index:1,type:"NUMBER",title:"pbwidth",value:290}}});
const St={bat:72,pct:35,play:true};let G={};const cards=[];
const wd=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],mo=["January","February","March","April","May","June","July","August","September","October","November","December"];
const p2=n=>String(n).padStart(2,"0");
function df(f){const D=new Date(),h=D.getHours()%12||12;return f.replace(/EEEE|EEE|MMMM|MMM|hh|h|mm|ss|d|a/g,t=>({EEEE:wd[D.getDay()],EEE:wd[D.getDay()].slice(0,3),MMMM:mo[D.getMonth()],MMM:mo[D.getMonth()].slice(0,3),hh:p2(h),h:h,mm:p2(D.getMinutes()),ss:p2(D.getSeconds()),d:D.getDate(),a:D.getHours()<12?"AM":"PM"})[t])}
function split(s){const r=[];let d=0,c="";for(const ch of s){if(ch=="(")d++;if(ch==")")d--;if(ch==","&&!d){r.push(c);c=""}else c+=ch}r.push(c);return r}
function close(s,i){let d=0;for(let k=i;k<s.length;k++){if(s[k]=="(")d++;if(s[k]==")"&&--d==0)return k}return -1}
function call(n,a){if(n=="df")return df(a.join(","));if(n=="bi")return St.bat;if(n=="gv")return G[a[0].trim()]??"";
if(n=="mi"){const k=a[0].trim();return k=="percent"?St.pct:k=="state"?(St.play?"PLAYING":"STOPPED"):k=="title"?"Night Drive":k=="artist"?"Synth Wave Co.":""}
if(n=="if")return a[0].trim()=="true"?a[1]:a[2];return ""}
function ev(s){s=String(s).trim();let m;const re=/\b(df|bi|gv|mi|if)\(/;
while((m=re.exec(s))){const o=m.index+m[0].length-1,c=close(s,o);if(c<0)break;const raw=split(s.slice(o+1,c));s=s.slice(0,m.index)+String(call(m[1],m[1]=="df"?raw:raw.map(ev)))+s.slice(c+1)}
const k=/^(.+?)(<=|>=|!=|<|>|=)(.+)$/.exec(s);if(k){const a=k[1].trim(),b=k[3].trim(),n=/^-?[\d.]+$/;const num=n.test(a)&&n.test(b),x=num?+a:a,y=num?+b:b;
return String(k[2]=="<"?x<y:k[2]==">"?x>y:k[2]=="<="?x<=y:k[2]==">="?x>=y:k[2]=="="?x==y:x!=y)}
if(/^[\d\s.+\-*/()]+$/.test(s)&&/\d/.test(s)){try{return Function("return "+s)()}catch(e){}}return s}
function val(n,p,d){const t=(n.internal_toggles||{})[p];if(t==100)return G[(n.internal_globals||{})[p]];
if(t==10){const f=(n.internal_formulas||{})[p];if(f!=null)return ev(String(f).replace(/^\$|\$$/g,""))}return n[p]!==undefined?n[p]:d}
const num=v=>parseFloat(v)||0;
function col(c){if(!c)return"transparent";const m=/^#([0-9a-f]{8})$/i.exec(c);if(!m)return c;const h=m[1];return`rgba(${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${parseInt(h.slice(6),16)},${(parseInt(h.slice(0,2),16)/255).toFixed(3)})`}
const GL={skip_next:"⏭",skip_previous:"⏮",play_arrow:"▶",pause:"⏸",music_note:"♪",headset_mic:"🎧",bolt:"⚡"};
function place(e,n){const a=n.position_anchor||"TOPLEFT",v=a.startsWith("TOP")?"T":a.startsWith("BOTTOM")?"B":"C",h=a.endsWith("LEFT")?"L":a.endsWith("RIGHT")?"R":"C";
const g=k=>num(val(n,k,0));let tf="";
if(h=="L")e.style.left=g("position_padding_left")+"px";else if(h=="R")e.style.right=g("position_padding_right")+"px";else{e.style.left="50%";tf+="translateX(-50%) "}
if(v=="T")e.style.top=g("position_padding_top")+"px";else if(v=="B")e.style.bottom=g("position_padding_bottom")+"px";else{e.style.top="50%";tf+="translateY(-50%) "}
tf+=`translate(${g("position_offset_x")}px,${g("position_offset_y")}px)`;e.style.transform=tf}
function build(n,inStack){if(String(val(n,"config_visible","ALWAYS"))=="NEVER")return null;
const t=n.internal_type,e=document.createElement("div");e.style.position=inStack?"relative":"absolute";if(n.internal_title)e.dataset.t=n.internal_title;
const kids=()=>(n.viewgroup_items||[]).forEach(c=>{const x=build(c,t=="StackLayerModule");x&&e.appendChild(x)});
if(t=="OverlapLayerModule"||t=="KomponentModule"){e.style.inset=0;kids()}
else if(t=="StackLayerModule"){const col=/VERTICAL/.test(n.config_stacking||"");e.style.display="flex";e.style.flexDirection=col?"column":"row";e.style.alignItems="center";e.style.gap=num(val(n,"config_margin",0))+"px";place(e,n);kids()}
else{if(t=="ShapeModule"){e.style.width=num(val(n,"shape_width",100))+"px";e.style.height=num(val(n,"shape_height",100))+"px";const r=num(val(n,"shape_corners",0));e.style.borderRadius=n.shape_type=="CIRCLE"||n.shape_type=="OVAL"?"50%":(r>=360?"9999px":r+"px");e.style.background=col(val(n,"paint_color","#FFFFFFFF"))}
else if(t=="TextModule"||t=="CurvedTextModule"){let s=String(val(n,"text_expression","")).replace(/\$([\s\S]*?)\$/g,(_,f)=>ev(f));s=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\[b\]/g,"<b>").replace(/\[\/b\]/g,"</b>").replace(/\[i\]/g,"<i>").replace(/\[\/i\]/g,"</i>");e.innerHTML=s;e.style.whiteSpace="nowrap";e.style.fontSize=num(val(n,"text_size",20))+"px";e.style.color=col(val(n,"paint_color","#FFFFFFFF"))}
else if(t=="FontIconModule"){const s=num(val(n,"icon_size",24));e.textContent=GL[String(val(n,"icon_icon","")).toLowerCase()]||"■";e.style.fontSize=s+"px";e.style.color=col(val(n,"paint_color","#FFFFFFFF"))}
else if(t=="BitmapModule"){e.style.width=num(val(n,"bitmap_width",100))+"px";e.style.height=num(val(n,"bitmap_height",100))+"px";e.style.borderRadius="12px";e.style.background="linear-gradient(135deg,#7e57c2,#26c6da)";e.style.color="#fff";e.style.fontSize="13px";e.style.display="grid";e.style.placeItems="center";e.textContent="bitmap"}
if(!inStack)place(e,n)}
const ev0=(n.internal_events||[])[0];if(ev0){e.style.cursor="pointer";e.title="Tap: "+(ev0.action||"")+(ev0.music_action?" "+ev0.music_action:" play/pause");e.onclick=x=>{x.stopPropagation();if(ev0.action=="MUSIC"){if(!ev0.music_action)St.play=!St.play;else if(/NEXT|PREVIOUS/.test(ev0.music_action))St.pct=0;all()}}}
return e}
function render(c){let j;try{j=JSON.parse(c.ta.value);c.err.textContent=""}catch(e){c.err.textContent="JSON error: "+e.message;return}
try{const r=j.preset_root,W=j.preset_info.width,H=j.preset_info.height;G={w:W,h:H};const gl=r.globals_list||{};for(const k in gl)if(gl[k].value!==undefined)G[k]=gl[k].value;for(const k in gl)if(gl[k].global_formula)G[k]=ev(String(gl[k].global_formula).replace(/^\$|\$$/g,""));
const cv=document.createElement("div");cv.className="cv";cv.style.width=W+"px";cv.style.height=H+"px";(r.viewgroup_items||[]).forEach(x=>{const b=build(x,false);b&&cv.appendChild(b)});
c.sc.replaceChildren(cv);c.cv=cv;c.W=W;c.H=H;fit(c)}catch(e){c.err.textContent="Preview error: "+e.message}}
function fit(c){if(!c.cv)return;const s=Math.min(1,(c.pv.clientWidth-24)/c.W);c.cv.style.transform=`scale(${s})`;c.sc.style.width=c.W*s+"px";c.sc.style.height=c.H*s+"px"}
function all(){cards.forEach(c=>{render(c);c.ctl.querySelectorAll("[data-k]").forEach(i=>{i.type=="checkbox"?i.checked=St[i.dataset.k]:i.value=St[i.dataset.k]})})}
function ctls(c){const t=c.ta.value;let h="";if(t.includes("bi("))h+='<label>battery <input type=range min=0 max=100 data-k=bat></label>';if(t.includes("mi("))h+='<label>progress <input type=range min=0 max=100 data-k=pct></label><label><input type=checkbox data-k=play> playing</label>';
c.ctl.innerHTML=h;c.ctl.querySelectorAll("[data-k]").forEach(i=>i.oninput=()=>{St[i.dataset.k]=i.type=="checkbox"?i.checked:+i.value;all()})}
document.querySelectorAll(".ex").forEach(d=>{d.innerHTML='<div class=card><div><div class=pv><div class=sc></div></div><div class=ctl></div></div><div class=code><div class=bar><span>preset.json · editable</span><button>Copy</button></div><textarea spellcheck=false></textarea><div class=err></div></div></div>';
const q=s=>d.querySelector(s),c={pv:q(".pv"),sc:q(".sc"),ctl:q(".ctl"),ta:q("textarea"),err:q(".err")};c.ta.value=JSON.stringify(EX[d.dataset.id],null,2);
c.ta.oninput=()=>{ctls(c);render(c)};q("button").onclick=e=>{navigator.clipboard&&navigator.clipboard.writeText(c.ta.value).then(()=>{e.target.textContent="Copied";setTimeout(()=>e.target.textContent="Copy",1200)}).catch(()=>{})};
d.firstChild.replaceWith(d.firstChild);cards.push(c);ctls(c)});
all();addEventListener("resize",()=>cards.forEach(fit));setInterval(()=>cards.forEach(c=>c.ta.value.includes("df(")&&render(c)),1000);
