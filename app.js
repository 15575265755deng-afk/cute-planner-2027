const META=[{"k": "a1", "n": "小熊挥手"}, {"k": "a2", "n": "兔兔胡萝卜"}, {"k": "a3", "n": "雨伞小鸭"}, {"k": "a4", "n": "瓜子仓鼠"}, {"k": "a5", "n": "柴柴"}, {"k": "a6", "n": "荷叶青蛙"}, {"k": "a7", "n": "竹子熊猫"}, {"k": "a8", "n": "围巾企鹅"}, {"k": "a9", "n": "破壳小鸡"}, {"k": "b1", "n": "草莓"}, {"k": "b2", "n": "珍珠奶茶"}, {"k": "b3", "n": "草莓蛋糕"}, {"k": "b4", "n": "粉粉甜甜圈"}, {"k": "b5", "n": "饭团"}, {"k": "b6", "n": "蜜桃"}, {"k": "b7", "n": "樱桃"}, {"k": "b8", "n": "双球冰淇淋"}, {"k": "b9", "n": "布丁"}, {"k": "c1", "n": "云朵"}, {"k": "c2", "n": "星星"}, {"k": "c3", "n": "彩虹"}, {"k": "c4", "n": "太阳"}, {"k": "c5", "n": "晚安月亮"}, {"k": "c6", "n": "小雨滴"}, {"k": "c7", "n": "爱心"}, {"k": "c8", "n": "四叶草"}, {"k": "c9", "n": "郁金香"}, {"k": "d1", "n": "云上睡熊"}, {"k": "d2", "n": "兔兔情书"}, {"k": "d3", "n": "泡泡浴小鸭"}, {"k": "d4", "n": "草莓仓鼠"}, {"k": "d5", "n": "气球柴柴"}, {"k": "d6", "n": "雨天青蛙"}, {"k": "d7", "n": "看书兔兔"}, {"k": "d8", "n": "咖啡小熊"}, {"k": "d9", "n": "小雏菊鸭"}, {"k": "e1", "n": "圣诞树"}, {"k": "e2", "n": "圣诞帽兔兔"}, {"k": "e3", "n": "姜饼人"}, {"k": "e4", "n": "拐杖糖"}, {"k": "e5", "n": "圣诞礼物"}, {"k": "e6", "n": "雪人"}, {"k": "e7", "n": "小驯鹿"}, {"k": "e8", "n": "圣诞袜"}, {"k": "e9", "n": "圣诞花环"}, {"k": "f1", "n": "热可可"}, {"k": "f2", "n": "雪花"}, {"k": "f3", "n": "冰晶雪花"}, {"k": "f4", "n": "圣诞铃铛"}, {"k": "f5", "n": "红手套"}, {"k": "f6", "n": "毛线帽白熊"}, {"k": "f7", "n": "姜饼屋"}, {"k": "f8", "n": "圣诞彩球"}, {"k": "f9", "n": "笑脸星星"}];
(()=>{
'use strict';
const TS=()=>window.__TS||1;
const $=s=>document.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const LS={get(k,d){try{const v=localStorage.getItem('cp27:'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('cp27:'+k,JSON.stringify(v))}catch(e){}}};
const Q=new URLSearchParams(location.search);
const NAME=Object.fromEntries(META.map(m=>[m.k,m.n]));const src=k=>`stickers/${k}.png`;
const CAT={E:'圣诞 · 限定',F:'冬日 · 暖暖',A:'软萌 · 动物',D:'日常 · 小事',B:'甜品 · 零食',C:'天气 · 心情'};const CATS=['E','F','A','D','B','C'];
const byCat=c=>META.filter(m=>m.k[0]==c.toLowerCase());
const MON=['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
const MZH=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
const HOL={'1-1':'元旦','2-6':'春节','2-14':'情人节','3-8':'女神节','4-5':'清明','5-1':'劳动节','5-20':'520','6-1':'儿童节','6-9':'端午','9-15':'中秋','10-1':'国庆','12-24':'平安夜','12-25':'圣诞'};
const ILLO=[[['a8',22,8,62,-4],['c2',4,0,22,-12]],[['d2',20,6,62,3],['c7',2,52,24,-10]],[['c9',8,10,46,-6],['a4',46,24,50,5]],[['a3',16,4,66,0],['c6',0,54,20,8]],
 [['d9',18,6,62,2],['c8',0,4,24,-14]],[['d6',16,4,66,0]],[['b8',2,16,42,-8],['a5',42,14,54,4]],[['d3',10,10,72,0],['c4',62,-6,30,10]],
 [['d7',14,6,60,-3],['b9',66,52,30,8]],[['d8',16,6,60,2],['b6',62,58,30,-6]],[['d4',16,6,62,-2],['b1',62,0,28,12]],[['d1',8,16,70,0],['c5',62,-8,32,10]]];
const N=15,XM=13;
let cur=LS.get('cur',0),opened=false,W=400,H=560,mode='land',hideUI=false,rx=0,ry=0,rx0=0,ry0=0;
const notes=LS.get('notes',{});let stk=LS.get('stk',{});const save=()=>{LS.set('stk',stk);updCount()};
const days=(m)=>new Date(2027,m+1,0).getDate(),dow=(m,d)=>(new Date(2027,m,d).getDay()+6)%7;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const RING_Y=[14,21,28,72,79,86];
// ===== build sheets =====
function tabs(m){return `<div class="tabs">${MON.map((_,j)=>`<b data-go="${j+1}" class="${j==m?'on':''}">${j+1}</b>`).join('')}<b data-go="${XM}" class="xt ${m=='x'?'on':''}">★</b></div>`}
function monthL(m){const mm=String(m+1).padStart(2,'0'),last=days(m);
 return `<div class="mh"><div class="yy">20<br>27</div><div class="sep"></div><div><div class="mo">${MON[m]}</div><div class="rg">${mm}/01<br>${mm}/${last}</div></div><div class="circ">${m+1}</div></div>
 <div class="illo">${ILLO[m].map(([k,l,t,w,r])=>`<img src="${src(k)}" style="left:${l}%;top:${t}%;width:${w}%;transform:rotate(${r}deg)" alt="">`).join('')}</div>
 <div class="tag">#${MON[m]}</div><div class="pfoot"><span>SOFT DAYS · MONTHLY</span><span>${MZH[m]}</span></div>`}
function monthR(m){const first=dow(m,1),n=days(m);let c='';
 for(let i=0;i<42;i++){const d=i-first+1,wd=i%7;
  if(d<1||d>n){c+=`<div class="cell x"></div>`;continue}
  const key=`${m+1}-${d}`;c+=`<div class="cell ${wd==5?'sa':wd==6?'su':''}" data-d="${key}"><span class="d">${d}</span>${HOL[key]?`<span class="hol">${HOL[key]}</span>`:''}<span class="nt">${esc(notes[key]||'')}</span></div>`}
 return `<div class="calw"><div class="wkh"><span>Mon.</span><span>Tue.</span><span>Wed.</span><span>Thu.</span><span>Fri.</span><span class="sa">Sat.</span><span class="su">Sun.</span></div><div class="grid">${c}</div>
 <div class="calnote"><span>✎ 点日期直接写</span><span>· 贴纸随便贴</span></div></div>${tabs(m)}`}
function titleL(){return `<div class="ti"><div class="big">2027</div><div class="s1">my soft days planner</div><div class="ln"></div>
 <div class="who">THIS BOOK BELONGS TO<br><span contenteditable data-k="owner"></span></div><img src="${src('d5')}" alt=""></div>`}
function titleR(){return `<div class="ti"><div class="who" style="margin-bottom:4cqw">INDEX · 月份目录</div><div class="idx">${MON.map((m,j)=>`<b data-go="${j+1}">${j+1}月<small>${m.slice(0,3).toLowerCase()}</small></b>`).join('')}<b class="xb" data-go="${XM}">🎄 圣诞特辑 <small>christmas special</small></b></div>
 <div class="s1" style="margin-top:6cqw">tap a month ♡</div></div>${tabs(-1)}`}
function freeL(){return `<div class="dotbg" style="position:absolute;inset:0"></div><div class="ti" style="justify-content:flex-start;padding-top:12cqw"><div class="big" style="font-size:9cqw">STICKER<br>FREE ZONE</div><div class="s1">贴满它 · stick them all</div></div>`}
function freeR(){return `<div class="dotbg" style="position:absolute;inset:0"></div><div class="pfoot" style="left:10cqw"><span>SOFT DAYS · 2027</span><span>♡</span></div>${tabs(-1)}`}
const snow=`<div class="snowbox"><div class="snow s1"></div><div class="snow s2"></div></div>`;
function xmasL(){
 return `<div class="mh"><div class="yy">20<br>27</div><div class="sep"></div><div><div class="mo">DECEMBER</div><div class="rg">12/24<br>12/25</div></div><div class="circ xc">★</div></div>
 <div class="washi"></div>
 <div class="illo xi"><img src="${src('e1')}" style="left:4%;top:2%;width:56%;transform:rotate(-3deg)" alt=""><img src="${src('e2')}" style="left:44%;top:30%;width:50%;transform:rotate(4deg)" alt=""><img src="${src('f2')}" style="left:76%;top:0;width:18%;transform:rotate(12deg)" alt=""></div>
 <div class="tag xtag">#Merry Christmas</div><div class="pfoot"><span>SOFT DAYS · CHRISTMAS SPECIAL</span><span>圣诞特辑</span></div>${snow}`}
function xmasR(){const wk=[21,22,23,24,25,26,27],nm=['Mon.','Tue.','Wed.','Thu.','Fri.','Sat.','Sun.'];
 return `<div class="xm-in">
 <div class="xm-h"><span>WISH LIST</span><i></i><span>圣诞心愿</span></div>
 <div class="cell xcard" data-d="xmas-card"><span class="d">To: 亲爱的你</span><span class="nt">${esc(notes['xmas-card']||'')}</span></div>
 <div class="xm-wk">${wk.map((d,i)=>`<div class="${i==5?'sa':i==6?'su':''} ${d==24||d==25?'hot':''}"><small>${nm[i]}</small><b>${d}</b>${d==24?'<em>平安夜</em>':d==25?'<em>圣诞</em>':''}</div>`).join('')}</div>
 <div class="xm-list"><span><i></i>交换礼物</span><span><i></i>热可可 + 一部老电影</span><span><i></i>等第一场雪</span></div>
 <div class="xm-ft"><span>A6 · DECEMBER</span><span>▸▸▸</span></div></div>${snow}${tabs('x')}`}
const holes=`<div class="holes" style="position:absolute;left:0;top:0;height:100%;width:calc(var(--W)*.08);z-index:40;pointer-events:none">${RING_Y.map(y=>`<i style="position:absolute;left:calc(var(--W)*.026);top:${y}%;width:calc(var(--W)*.028);height:calc(var(--W)*.028);margin-top:calc(var(--W)*-.014);border-radius:50%;background:#cfcac3;box-shadow:inset 0 1px 2px rgba(0,0,0,.35)"></i>`).join('')}</div>`;
let h='';for(let i=0;i<N;i++){let L,R;if(i==0){L=titleL();R=titleR()}else if(i<13){L=monthL(i-1);R=monthR(i-1)}else if(i==XM){L=xmasL();R=xmasR()}else{L=freeL();R=freeR()}
 h+=`<div class="sheet${i==XM?' xmas':''}" data-i="${i}"><div class="face"><div class="pnl pL" data-p="s${i}L">${L}<div class="sl"></div></div><div class="pnl pR" data-p="s${i}R">${R}<div class="sl"></div></div>${holes}<div class="shadeR"></div></div><div class="bface"></div></div>`}
$('#sheets').innerHTML=h;const sheets=$$('.sheet');
$('#rings').innerHTML=RING_Y.map(y=>`<i style="top:${y}%"></i>`).join('');
$('#stack').innerHTML=[10,9,8,7,6,5,4,3,2,1].map(o=>`<i style="transform:translate(calc(var(--D)*${o/10}),calc(var(--D)*${o*.125}))" class="${o%2?'o':''}"></i>`).join('');
$$('[data-k]').forEach(el=>{el.textContent=LS.get(el.dataset.k,'');el.addEventListener('input',()=>LS.set(el.dataset.k,el.textContent))});
$('#bBell').innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="#f6ece2"><path d="M12 22a2.5 2.5 0 0 0 2.4-2h-4.8A2.5 2.5 0 0 0 12 22zm7-6V11a7 7 0 0 0-5.5-6.8V3.5a1.5 1.5 0 0 0-3 0v.7A7 7 0 0 0 5 11v5l-2 2v1h18v-1z"/></svg>';
// UI strips
function siHTML(m){return `<div class="si" data-s="${m.k}"><img src="${src(m.k)}" alt="${m.n}" draggable="false"><span>${m.n}</span></div>`}
$('#stripA').innerHTML=`<div class="strip"><div class="lab">天气 · 心情</div><div class="gr">${[...byCat('C'),...byCat('D'),...byCat('A')].map(siHTML).join('')}</div></div>`;
$('#stripB').innerHTML=`<div class="strip b xm"><div class="lab">圣诞 · 限定</div><div class="gr">${[...byCat('E'),...byCat('F'),...byCat('B')].map(siHTML).join('')}</div></div>`;
let cat=0;function renderPanel(){$('#phd').textContent=CAT[CATS[cat]];$('#pgr').innerHTML=byCat(CATS[cat]).map(siHTML).join('')}renderPanel();
$('#phd').onclick=()=>{cat=(cat+1)%CATS.length;renderPanel();SFX.tick()};
$('.pocket .peeks').innerHTML=['e5','e2','f1','e6'].map((k,i)=>`<img src="${src(k)}" style="left:${i*24}%;transform:rotate(${[-10,6,-4,9][i]}deg)">`).join('');
// ===== audio =====
const SFX=(()=>{let ctx;const log=window.__sfx=[];const A=()=>{if(!ctx){const C=window.AudioContext||window.webkitAudioContext;if(C)ctx=new C()}if(ctx&&ctx.state=='suspended')ctx.resume();return ctx};
 const note=(t)=>log.push({t,at:Date.now()/1000});
 function tone(f,t0,dur,g,type='sine'){const c=A();if(!c)return;const o=c.createOscillator(),v=c.createGain();o.type=type;o.frequency.value=f;v.gain.setValueAtTime(0,t0);v.gain.linearRampToValueAtTime(g,t0+.005);v.gain.exponentialRampToValueAtTime(.0001,t0+dur);o.connect(v).connect(c.destination);o.start(t0);o.stop(t0+dur+.05)}
 function noise(t0,dur,g,f1,f2,q=1.2,type='bandpass'){const c=A();if(!c)return;const b=c.createBuffer(1,Math.ceil(c.sampleRate*dur),c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  const s=c.createBufferSource();s.buffer=b;const fl=c.createBiquadFilter();fl.type=type;fl.Q.value=q;fl.frequency.setValueAtTime(f1,t0);fl.frequency.exponentialRampToValueAtTime(f2,t0+dur);const v=c.createGain();v.gain.setValueAtTime(0,t0);v.gain.linearRampToValueAtTime(g,t0+dur*.3);v.gain.exponentialRampToValueAtTime(.0001,t0+dur);s.connect(fl).connect(v).connect(c.destination);s.start(t0)}
 return{unlock:A,
  bell(){note('bell');const c=A();if(!c)return;const t=c.currentTime;[[0,1],[.13,1.19],[.27,.94]].forEach(([dt,k])=>{const f=1568*k;[[1,.16,1.6],[2.76,.05,.7],[5.4,.025,.35],[.5,.04,1.2]].forEach(([m,g,d])=>tone(f*m,t+dt,d,g))})},
  jingle(){note('jingle');const c=A();if(!c)return;const t=c.currentTime;[0,.07,.15].forEach((dt,i)=>{tone(2093*[1,1.12,1.26][i],t+dt,.5,.05);tone(4186*[1,1.12,1.26][i],t+dt,.25,.02)})},
  flip(){note('flip');const c=A();if(!c)return;const t=c.currentTime;noise(t,.38,.22,700,3200,.8);noise(t+.16,.22,.12,3000,1200,1)},
  pop(){note('pop');const c=A();if(!c)return;const t=c.currentTime;const o=c.createOscillator(),v=c.createGain();o.frequency.setValueAtTime(520,t);o.frequency.exponentialRampToValueAtTime(1100,t+.07);v.gain.setValueAtTime(.18,t);v.gain.exponentialRampToValueAtTime(.0001,t+.14);o.connect(v).connect(c.destination);o.start(t);o.stop(t+.16);noise(t,.05,.08,2500,2500,1)},
  tear(){note('tear');const c=A();if(!c)return;const t=c.currentTime;for(let i=0;i<7;i++)noise(t+i*.035,.05,.12,4000+i*300,2500,2,'bandpass');},
  thud(){note('thud');const c=A();if(!c)return;const t=c.currentTime;const o=c.createOscillator(),v=c.createGain();o.frequency.setValueAtTime(140,t);o.frequency.exponentialRampToValueAtTime(55,t+.18);v.gain.setValueAtTime(.35,t);v.gain.exponentialRampToValueAtTime(.0001,t+.3);o.connect(v).connect(c.destination);o.start(t);o.stop(t+.32);noise(t,.12,.12,300,120,1,'lowpass')},
  tick(){note('tick');const c=A();if(!c)return;tone(1800,c.currentTime,.05,.06,'triangle')},
  open(){note('open');const c=A();if(!c)return;const t=c.currentTime;noise(t,.5,.18,400,1800,.7);tone(660,t+.25,.3,.03)}}})();
addEventListener('pointerdown',()=>{SFX.unlock();if(window.DeviceMotionEvent&&DeviceMotionEvent.requestPermission&&!window.__dm){window.__dm=1;DeviceMotionEvent.requestPermission().catch(()=>{})}},{once:false,capture:true});
// ===== layout =====
const app=$('#app'),book=$('#book');let geo={};
function layout(){const aw=app.clientWidth,ah=app.clientHeight;mode=(aw/ah<.9)?'port':'land';
 document.body.classList.toggle('portui',mode=='port');$('#tips').textContent=mode=='port'?'点封面打开 · 拖动翻页 · 点日期写字 · 拖贴纸贴上/拖出撕掉 · 摇一摇铃铛会响':'点封面打开 · 点挂件或铃铛会响 · 拖动背景转视角 · 拖动页面翻页 · 点日期直接写 · 拖贴纸到任意位置 · 拖出本子就撕掉 · 滚轮缩放贴纸';book.classList.toggle('port',mode=='port');$('#sheets').classList.toggle('port',mode=='port');
 if(mode=='land'){let h=Math.min(ah*.72,820),w=h*.72;const maxW=(aw-300)/2.05;if(w>maxW){w=maxW;h=w/.72}W=w;H=h;
  geo={closedX:(aw-250)/2-W/2+10,openX:(aw-260-2*W)/2+W*.12,y:(ah-H)/2+2}}
 else{const top=84,bot=ah-100;let h=Math.min(bot-top,(aw*.8)/.72),w=h*.72;W=w;H=h;geo={closedX:(aw-W)/2+W*.02,openX:(aw-W)/2+W*.01,y:top+(bot-top-H)/2}}
 book.style.setProperty('--W',W+'px');rx0=mode=='port'?4:5;ry0=mode=='port'?-3:-4;if(!layout.done){rx=rx0;ry=ry0;layout.done=1;applyView()}book.style.setProperty('--H',H+'px');book.style.setProperty('--SW',(mode=='land'?2*W:W)+'px');
 $('#sheets').querySelectorAll('.sheet').forEach(s=>s.classList.toggle('port',mode=='port'));
 place()}
function place(){const x=opened?geo.openX:geo.closedX,y=geo.y;book.style.left=x+'px';book.style.top=y+'px';
 const aw=app.clientWidth,ah=app.clientHeight,A=$('#stripA'),B=$('#stripB'),C=$('#count'),P=$('#panel');
 if(mode=='land'){A.style.cssText=`left:${Math.max(14,x-W*.38)}px;top:${Math.max(34,y-70)}px;--ss:36px`;A.querySelector('.strip').style.setProperty('--ss','34px');
  B.style.cssText=`left:${Math.max(14,x+W*.12)}px;top:${Math.min(ah-112,y+H-18)}px`;B.querySelector('.strip').style.setProperty('--ss','24px');B.querySelectorAll('.si span').forEach(s=>s.style.display='none');
  const right=Math.max(16,Math.min(aw*.06,90));C.style.cssText=`right:${right}px;top:${Math.max(40,y-40)}px`;P.style.cssText=`right:${right+24}px;top:${Math.max(40,y-40)+150}px`}
 else{A.style.cssText=`left:8px;top:24px`;A.querySelector('.strip').style.setProperty('--ss','32px');C.style.cssText=`right:8px;top:24px`;
  B.style.cssText=`left:8px;right:8px;bottom:48px`;B.querySelector('.strip').style.setProperty('--ss','36px');P.style.cssText=''}
 const fs=$('#fshadow');if(fs){const sw=(mode=='land'&&opened)?2*W:W;fs.style.cssText=`left:${x}px;top:${y}px;width:${sw}px;height:${H}px`}}
// ===== state render =====
function render(){book.classList.toggle('closed',!opened);document.body.classList.toggle('open-state',opened);$('#cover').classList.toggle('open',opened);
 sheets.forEach((s,i)=>{const f=i<cur,turning=s.classList.contains('turning');if(s.classList.contains('dragging'))return;
  s.classList.toggle('flipped',f);const z=turning?N*.3+1.5:(N-i)*.3;s.style.transform=`translateZ(${z}px) rotateY(${f?-180:0}deg)`;s.style.zIndex=turning?99:(f?i:N*2-i)});
 $('#cover').style.zIndex=opened?0:200;
 $('#bOpen').textContent=opened?'合上':'打开封面';LS.set('cur',cur);place()}
function turn(i){const s=sheets[i];s.classList.add('turning');clearTimeout(s._t);s._t=setTimeout(()=>{s.classList.remove('turning');render()},1050*TS())}
function open(){if(opened)return;opened=true;SFX.open();render()}
function close(){if(!opened)return;opened=false;SFX.open();render()}
function go(n,stag){n=Math.max(0,Math.min(N-1,n));if(!opened){open();if(n==cur)return}if(n==cur)return;const dir=n>cur?1:-1;const list=[];for(let i=cur;i!=n;i+=dir)list.push(dir>0?i:i-1);
 const st=stag||(list.length>3?90:220);if(list.length>3)$('#sheets').classList.add('riffle');setTimeout(()=>$('#sheets').classList.remove('riffle'),(st*list.length+1100)*TS());
 list.forEach((i,k)=>setTimeout(()=>{turn(i);cur+=dir;if(k%2==0||list.length<4)SFX.flip();render()},k*st*TS()))}
// ===== pointer: flip drag / view rotate =====
let fd=null,suppress=false;
app.addEventListener('pointerdown',e=>{if(e.button>0)return;const t=e.target;
 if(t.closest('.stk,.si,.ui,#btns,textarea,[contenteditable],#charm'))return;
 if(t.closest('#book')){fd={k:'flip',x:e.clientX,y:e.clientY,id:e.pointerId,on:false,onCover:!!t.closest('#cover')};return}
 fd={k:'view',x:e.clientX,y:e.clientY,id:e.pointerId,rx,ry,on:false}});
addEventListener('pointermove',e=>{if(!fd||e.pointerId!==fd.id)return;const dx=e.clientX-fd.x,dy=e.clientY-fd.y;
 if(fd.k=='view'){if(!fd.on&&Math.hypot(dx,dy)<4)return;fd.on=true;rx=Math.max(-22,Math.min(22,fd.rx-dy*.12));ry=Math.max(-30,Math.min(30,fd.ry+dx*.15));$('#view').classList.add('dragging');applyView();return}
 if(!fd.on){if(Math.abs(dx)<12||Math.abs(dx)<Math.abs(dy))return;
  if(!opened){if(dx<0){fd.on=true;fd.cover=true}else{fd=null;return}}
  else if(dx<0&&cur<N-1){fd.on=true;fd.i=cur;fd.dir=1}else if(dx>0&&cur>0){fd.on=true;fd.i=cur-1;fd.dir=-1}else if(dx>0&&cur==0){fd.on=true;fd.cover=true;fd.closing=true}else{fd=null;return}
  if(!fd.cover){const s=sheets[fd.i];s.classList.add('turning','dragging');s.style.zIndex=99}else{$('#cover').style.transition='none'}}
 const span=W*1.2;
 if(fd.cover){let a=fd.closing?-178+Math.max(0,Math.min(178,dx/span*178)):Math.max(-178,Math.min(0,dx/span*178));fd.a=a;$("#cover").style.transform=`translateZ(${fd.closing?-3:8}px) rotateY(${a}deg)`;return}
 let a=fd.dir>0?Math.max(-180,Math.min(0,dx/span*180)):-180+Math.max(0,Math.min(180,dx/span*180));fd.a=a;sheets[fd.i].style.transform=`translateZ(${N*.3+1.5}px) rotateY(${a}deg)`});
addEventListener('pointerup',e=>{if(!fd||e.pointerId!==fd.id)return;const f=fd;fd=null;
 if(f.k=='view'){$('#view').classList.remove('dragging');if(f.on){suppress=true;setTimeout(()=>suppress=false,30)}return}
 if(!f.on)return;suppress=true;setTimeout(()=>suppress=false,30);
 if(f.cover){const cv=$('#cover');cv.style.transition='';cv.style.transform='';if(f.closing){if(f.a>-120)close();else render()}else{if(f.a<-50)open();else render()}return}
 const s=sheets[f.i];s.classList.remove('dragging');const commit=f.dir>0?f.a<-55:f.a>-125;if(commit){cur+=f.dir;SFX.flip()}turn(f.i);render()});
app.addEventListener('dblclick',e=>{if(e.target===app||e.target.id=='scene'||e.target.id=='view'){rx=rx0;ry=ry0;applyView()}});
function applyView(){$('#view').style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`}
// clicks
app.addEventListener('click',e=>{if(suppress){e.stopPropagation();e.preventDefault();return}const t=e.target;
 if(t.closest('#bell')){ringBell();e.stopPropagation();return}
 if(t.closest('#charm')){swing();SFX.jingle();return}
 if(t.closest('#cover')&&!opened){open();return}
 const g=t.closest('[data-go]')||document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-go]');if(g){go(+g.dataset.go);return}
 const c=t.closest('.cell[data-d]');if(c&&!t.closest('textarea')){edit(c);return}},true);
$('#bOpen').onclick=()=>{opened?close():open()};$('#bPrev').onclick=()=>{if(!opened)return;if(cur==0)close();else go(cur-1)};$('#bNext').onclick=()=>{if(!opened)open();else go(cur+1)};
$('#bBell').onclick=()=>ringBell();$('#bUI').onclick=()=>{hideUI=!hideUI;app.classList.toggle('hideui',hideUI);$('#bUI').textContent=hideUI?'展开贴纸栏':'收起贴纸栏'};
addEventListener('keydown',e=>{if(e.target.closest&&e.target.closest('textarea,[contenteditable]'))return;if(e.key=='ArrowRight')$('#bNext').click();if(e.key=='ArrowLeft')$('#bPrev').click();if(e.key==' ')ringBell()});
function swing(){const c=$('#charm');c.classList.remove('swing');void c.offsetWidth;c.classList.add('swing')}
function ringBell(){const b=$('#bell');b.classList.remove('ring');void b.offsetWidth;b.classList.add('ring');swing();SFX.bell()}
let lastShake=0;addEventListener('devicemotion',e=>{const a=e.accelerationIncludingGravity||e.acceleration;if(!a)return;const m=Math.hypot(a.x||0,a.y||0,a.z||0);if(m>24&&Date.now()-lastShake>900){lastShake=Date.now();ringBell()}});
// ===== notes inline =====
function edit(cell){if(cell.querySelector('textarea'))return;const key=cell.dataset.d,ta=document.createElement('textarea');ta.maxLength=24;ta.value=notes[key]||'';cell.appendChild(ta);ta.focus();SFX.tick();
 let done=false;const fin=(ok)=>{if(done)return;done=true;if(ok){const v=ta.value.trim();if(v)notes[key]=v;else delete notes[key];LS.set('notes',notes);cell.querySelector('.nt').textContent=v}ta.remove()};
 ta.addEventListener('keydown',e=>{if(e.key=='Enter'&&!e.shiftKey){e.preventDefault();fin(true)}if(e.key=='Escape')fin(false)});ta.addEventListener('blur',()=>fin(true))}
// ===== stickers =====
function panels(){return opened?[...sheets[cur].querySelectorAll('.pnl')]:[$('#cover .cf')]}
function panelAt(x,y){return panels().find(p=>{const r=p.getBoundingClientRect();return x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom})}
function renderLayer(pid){const p=$(`[data-p="${pid}"]`);if(!p)return;const L=p.querySelector('.sl');L.innerHTML=(stk[pid]||[]).map((s,i)=>`<div class="stk" data-i="${i}" style="left:${s.x}%;top:${s.y}%;--r:${s.r}deg;--sz:${s.sz}"><img src="${src(s.s)}" alt="" draggable="false"></div>`).join('')}
Object.keys(stk).forEach(renderLayer);
function total(){return Object.values(stk).reduce((a,b)=>a+b.length,0)}
let lastN=null;function updCount(){const n=total(),el=$('#num');el.textContent=n;if(lastN!==null&&n!==lastN){el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump')}lastN=n}updCount();
const ghost=$('#ghost'),gimg=ghost.querySelector('img');
function ghostAt(x,y){ghost.style.left=x+'px';ghost.style.top=y+'px';ghost.classList.toggle('out',!panelAt(x,y))}
function place1(x,y,rec){const p=panelAt(x,y);if(!p)return false;const r=p.getBoundingClientRect(),pid=p.dataset.p;
 (stk[pid]=stk[pid]||[]).push({...rec,x:+((x-r.left)/r.width*100).toFixed(2),y:+((y-r.top)/r.height*100).toFixed(2)});save();renderLayer(pid);const els=p.querySelectorAll('.stk');els[els.length-1].classList.add('pop');SFX.pop();return true}
function szFor(){return mode=='land'?11:14}
function pxOf(sz,p){return (p||panels()[0]).getBoundingClientRect().width*sz/100}
function tearFx(x,y,k,w){const im=document.createElement('img');im.src=src(k);im.className='tear';Object.assign(im.style,{left:x+'px',top:y+'px',width:w+'px'});document.body.appendChild(im);setTimeout(()=>im.remove(),650*TS());SFX.tear()}
let sd=null;
document.addEventListener('pointerdown',e=>{const si=e.target.closest('.si');if(si){e.preventDefault();sd={from:'ui',k:si.dataset.s,x:e.clientX,y:e.clientY,id:e.pointerId,on:false,mouse:e.pointerType=='mouse',el:si,r:Math.round(Math.random()*24-12)};return}
 const s=e.target.closest('.stk');if(s&&e.button==0){e.preventDefault();e.stopPropagation();const p=s.closest('[data-p]'),pid=p.dataset.p,i=+s.dataset.i,rec=stk[pid][i];sd={from:'page',pid,i,rec,el:s,k:rec.s,r:rec.r,x:e.clientX,y:e.clientY,id:e.pointerId,on:false,mouse:true}}},true);
addEventListener('pointermove',e=>{if(!sd||e.pointerId!==sd.id)return;const dx=e.clientX-sd.x,dy=e.clientY-sd.y;
 if(!sd.on){const ok=sd.mouse||sd.from=='page'?Math.hypot(dx,dy)>5:(Math.abs(dy)>8&&Math.abs(dy)>Math.abs(dx));if(!ok){if(!sd.mouse&&Math.abs(dx)>10)sd=null;return}
  sd.on=true;const sz=sd.from=='page'?sd.rec.sz:szFor();sd.w=pxOf(sz,sd.from=='page'?sd.el.closest('[data-p]'):null);if(sd.from=='page'){sd.el.style.visibility='hidden';SFX.tear()}
  gimg.src=src(sd.k);ghost.style.width=sd.w+'px';ghost.style.setProperty('--r',sd.r+'deg');ghost.className=sd.from=='page'?'peel':'';ghost.style.display='block'}
 e.preventDefault();ghostAt(e.clientX,e.clientY)},{passive:false});
addEventListener('pointerup',e=>{if(!sd||e.pointerId!==sd.id)return;const s=sd;sd=null;ghost.style.display='none';
 if(!s.on){if(s.from=='ui')fly(s.k,s.el.getBoundingClientRect());return}
 if(s.from=='page'){stk[s.pid].splice(s.i,1);save();renderLayer(s.pid)}
 const ok=place1(e.clientX,e.clientY,{s:s.k,r:s.r,sz:s.from=='page'?s.rec.sz:szFor()});
 if(!ok&&s.from=='page'){tearFx(e.clientX,e.clientY,s.k,s.w);toast('撕下来啦')}});
app.addEventListener('contextmenu',e=>{const s=e.target.closest('.stk');if(!s)return;e.preventDefault();rip(s)});
function rip(s){const p=s.closest('[data-p]'),pid=p.dataset.p,r=s.getBoundingClientRect(),rec=stk[pid].splice(+s.dataset.i,1)[0];save();renderLayer(pid);tearFx(r.left+r.width/2,r.top+r.height/2,rec.s,r.width);toast('撕下来啦')}
app.addEventListener('dblclick',e=>{const s=e.target.closest('.stk');if(s)rip(s)});
app.addEventListener('wheel',e=>{const s=e.target.closest('.stk');if(!s)return;e.preventDefault();const pid=s.closest('[data-p]').dataset.p,rec=stk[pid][+s.dataset.i];rec.sz=Math.max(7,Math.min(45,rec.sz+(e.deltaY<0?1:-1)));s.style.setProperty('--sz',rec.sz);LS.set('stk',stk)},{passive:false});
function fly(k,fromRect,tx,ty){const p=panels()[0];if(!p)return;const r=p.getBoundingClientRect();
 if(tx==null){const pp=panels()[Math.floor(Math.random()*panels().length)].getBoundingClientRect();tx=pp.left+pp.width*(.25+Math.random()*.55);ty=pp.top+pp.height*(.25+Math.random()*.55)}
 const w=r.width*szFor()/100,im=document.createElement('img');im.src=src(k);Object.assign(im.style,{position:'fixed',left:0,top:0,width:w+'px',zIndex:3000,pointerEvents:'none',filter:'drop-shadow(0 12px 10px rgba(60,35,20,.3))'});document.body.appendChild(im);
 const fx=fromRect.left+fromRect.width/2-w/2,fy=fromRect.top+fromRect.height/2-w/2,rr=Math.round(Math.random()*24-12);
 im.animate([{transform:`translate(${fx}px,${fy}px) scale(.5) rotate(0deg)`},{transform:`translate(${(fx+tx-w/2)/2}px,${Math.min(fy,ty)-80}px) scale(1.25) rotate(${rr*2}deg)`},{transform:`translate(${tx-w/2}px,${ty-w/2}px) scale(1) rotate(${rr}deg)`}],{duration:620,easing:'cubic-bezier(.3,.7,.3,1)'}).onfinish=()=>{im.remove();place1(tx,ty,{s:k,r:rr,sz:szFor()})}}
$('#count .pocket').onclick=e=>{const m=META[Math.floor(Math.random()*META.length)];fly(m.k,e.currentTarget.getBoundingClientRect())};
let tt;function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>el.classList.remove('show'),1400*TS())}
// ===== video helpers =====
if(Q.get('finger')){const f=$('#finger');f.style.display='block';addEventListener('pointermove',e=>{f.style.left=e.clientX+'px';f.style.top=e.clientY+'px'},true);addEventListener('pointerdown',()=>{f.classList.add('dn');f.classList.remove('rip');void f.offsetWidth;f.classList.add('rip')},true);addEventListener('pointerup',()=>f.classList.remove('dn'),true)}
function hook(){const fs=$('#fshadow');book.style.opacity='';[book,fs].forEach(e=>{e.classList.remove('drop');void e.offsetWidth;e.classList.add('drop')});
 setTimeout(()=>{SFX.thud()},470*TS());setTimeout(()=>ringBell(),560*TS());
 setTimeout(()=>{$('#cover').classList.add('pop');open();setTimeout(()=>$('#cover').classList.remove('pop'),900*TS())},1000*TS());
 setTimeout(()=>{go(XM,80)},1250*TS());setTimeout(()=>[book,fs].forEach(e=>e.classList.remove('drop')),1200*TS())}
const cam={s:1,ox:0,oy:0};
function focus(el,fill=.9,maxS=2.4){const r0=(typeof el=='string'?$(el):el).getBoundingClientRect(),cs=parseFloat((getComputedStyle(app).transform.match(/matrix\(([^,]+)/)||[0,1])[1])||1,u=v=>({x:cam.ox+(v.x-cam.ox)/cs,y:cam.oy+(v.y-cam.oy)/cs}),p1=u({x:r0.left,y:r0.top}),p2=u({x:r0.right,y:r0.bottom}),r={left:p1.x,top:p1.y,width:p2.x-p1.x,height:p2.y-p1.y},aw=app.clientWidth,ah=app.clientHeight;
 const s=Math.min(maxS,fill*aw/r.width,fill*ah/r.height);if(s<=1.01){CP.camera(1);return 1}const cx=r.left+r.width/2,cy=r.top+r.height/2;
 const ox=Math.max(0,Math.min(aw,(aw/2-cx*s)/(1-s))),oy=Math.max(0,Math.min(ah,(ah/2-cy*s)/(1-s)));CP.camera(s,ox,oy);return s}
window.CP={open,close,go,ringBell,hook,focus,XM,shake(){const sc=$('#scene');sc.classList.remove('shake');void sc.offsetWidth;sc.classList.add('shake');ringBell();toast('叮铃铃～')},get cur(){return cur},get opened(){return opened},
 camera(s,ox,oy){const sc=$('#app');if(ox!=null){sc.style.transformOrigin=`${ox}px ${oy}px`;cam.ox=ox;cam.oy=oy}cam.s=s;sc.style.transform=s==1?'':`scale(${s})`},
 view(a,b){rx=a;ry=b;applyView()},enter(){book.classList.remove('enter');void book.offsetWidth;book.classList.add('enter');setTimeout(()=>book.classList.remove('enter'),1100*TS())},reset(){localStorage.clear();location.reload()}};
addEventListener('dragstart',e=>e.preventDefault());
addEventListener('resize',layout);layout();render();
if(Q.get('open')){opened=true;render()}
else if(Q.get('hook')!=='0'){cur=0;render();book.style.opacity='0';$('#fshadow').style.opacity='0';setTimeout(()=>{$('#fshadow').style.opacity='';hook()},350*TS())}
})();
