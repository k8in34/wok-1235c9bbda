"use strict";
/* v5: rice / soup / 台味小吃 / 30-min challenge. Simulated kitchen seconds (SIM=6 x game s). */
(function(){
const SIM=6, PW=[0,495,990,1650];
const A='assets/';const im5={};function L(n){if(!im5[n]){const i=new Image();i.decoding='async';i.onload=()=>i.ok=1;i.src=A+n+'.webp';im5[n]=i}return im5[n]}
const cl=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));const rnd=k=>{const v=Math.sin(k*127.1+311.7)*43758.5453;return v-Math.floor(v)};
const fmt=s=>{s=Math.max(0,Math.floor(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
const I5={
 water:{n:'水',ic:'v5_boilwater',W:400},bonito:{n:'柴魚高湯',ic:'v5_bonito',W:400,col:[200,150,70,.35]},coldw:{n:'冷水',ic:'v5_boilwater',W:150},
 oil:{n:'油',ic:'oil',O:30,svg:1},oilf:{n:'炸油',ic:'oil',O:730,svg:1},lard:{n:'豬油',ic:'oil',O:35,svg:1},
 tomato:{n:'番茄',ic:'v5_tomatos',m:250,need:360,mode:'boil',sh:'wedge',k:12,col0:'#ef4a34',col1:'#d63a22',tint:[220,80,40,.35]},
 laver:{n:'紫菜',ic:'v5_laver',m:10,need:20,mode:'boil',sh:'sheet',k:9,col0:'#2a1e2e',col1:'#1e3a2a',tint:[40,60,40,.12]},
 egg:{n:'蛋液',ic:'egg',m:110,pour:1,svg:1},
 ribs:{n:'排骨',ic:'v5_ribs',m:400,need:2700,mode:'boil',sh:'rib',k:7,foam:1,fat:1,safe:1,col0:'#d98a86',col1:'#c7a68a',tint:[230,210,170,.18]},
 corn:{n:'玉米',ic:'v5_corn',m:300,need:900,mode:'boil',sh:'corn',k:5,col0:'#f8d84a',col1:'#f2c636',tint:[250,220,120,.12]},
 tofu:{n:'豆腐',ic:'v5_tofu',m:200,need:120,mode:'boil',sh:'cube',k:10,col0:'#f6f1e2',col1:'#f2ead4'},
 wakame:{n:'海帶芽',ic:'v5_wakame',m:8,need:30,mode:'boil',sh:'sheet',k:8,col0:'#2f6a2a',col1:'#2a7a34'},
 miso:{n:'味噌',ic:'v5_miso',m:50,miso:1},
 scallion:{n:'蔥花',ic:'scallion',m:10,need:20,mode:'boil',sh:'ring',k:16,col0:'#5cbf4a',col1:'#4aa23c'},
 cilantro:{n:'香菜',ic:'v5_cilantro',m:8,season:1},
 salt:{n:'鹽',ic:'salt',svg:1,season:1},pepper:{n:'白胡椒',ic:'salt',svg:1,season:1},sesoil:{n:'香油',ic:'sesame',season:1,svg:1},
 ginger:{n:'薑片',ic:'v5_gingers',m:20,need:60,mode:'both',fneed:60,sh:'ginger',k:5,col0:'#f0d9a0',col1:'#d8b26a'},
 shallot:{n:'紅蔥頭',ic:'v5_shallot',m:40,need:110,mode:'fry',sh:'bits',k:26,col0:'#e8c6b8',col1:'#c8822e',burnc:'#3a2210'},
 belly:{n:'五花肉丁',ic:'v5_belly',m:600,need:3600,over:2.6,mode:'both',fneed:150,sh:'chunk',k:16,foam:.6,fat:1.4,safe:1,col0:'#e8a8a0',col1:'#6a3418'},
 soy:{n:'醬油',ic:'soy',svg:1,W:150,col:[70,30,12,.8],sug:1},rsugar:{n:'冰糖',ic:'sugar',svg:1,season:1,sug:1},wine:{n:'米酒',ic:'wine',svg:1,W:50},
 spice:{n:'五香滷包',ic:'v5_spices',m:15,season:1,sh:'star',k:3},
 begg:{n:'水煮蛋',ic:'v5_braisedegg',m:150,need:1800,mode:'boil',sh:'egg',k:3,col0:'#f8f4ec',col1:'#7a4420'},
 doubanjiang:{n:'辣豆瓣醬',ic:'v5_doubanjiang',m:40,need:70,mode:'fry',col:[160,40,20,.55]},
 shank:{n:'牛腱',ic:'v5_shank',m:700,need:7200,over:2.2,mode:'both',fneed:120,sh:'chunk',k:9,foam:1.2,fat:.8,safe:1,col0:'#b8303a',col1:'#5a2814'},
 garlic:{n:'蒜頭',ic:'garlic',svg:1,m:20,need:60,mode:'fry',sh:'bits',k:8,col0:'#f6f0e0',col1:'#e0b060'},
 daikon:{n:'白蘿蔔',ic:'v5_daikon',m:300,need:1500,mode:'boil',sh:'cube',k:7,col0:'#f4f2ea',col1:'#e8e0c8'},
 noodle:{n:'麵條',ic:'v5_noodle',m:200,need:240,mode:'boil',sh:'strand',k:14,starch:1,col0:'#f2e6c4',col1:'#efe0b8'},
 bokchoy:{n:'青江菜',ic:'v5_bokchoy',m:80,need:50,mode:'boil',sh:'leaf',k:4,col0:'#6acb5a',col1:'#3e9a34'},
 misua:{n:'紅麵線',ic:'v5_misua',m:150,need:240,mode:'boil',sh:'strand',k:22,starch:2.5,col0:'#c8885a',col1:'#b06e44',tint:[150,90,50,.4]},
 intestine:{n:'滷大腸',ic:'v5_intestine',m:150,need:120,mode:'boil',sh:'intest',k:10,pre:1,col0:'#b8743a',col1:'#a8622c'},
 slurry2:{n:'地瓜粉水',ic:'v5_slurry2',W:80,slurry:1},vinegar:{n:'烏醋',ic:'v5_vinegar',season:1},garlicm:{n:'蒜泥',ic:'v5_garlicm',season:1},
 prawn:{n:'裹粉蝦仁',ic:'v5_prawn'},mayo:{n:'美乃滋',ic:'v5_mayo'},pineapple:{n:'鳳梨',ic:'v5_pineapple'},
 oyster:{n:'蚵仔',ic:'v5_oysterr',m:120,need:40,mode:'fry',sh:'oyster',k:9,col0:'#b8b2a4',col1:'#d8ccb0'},
 slurry:{n:'粉漿',ic:'v5_slurry',cake:1},greens:{n:'小白菜',ic:'v5_greens',m:60,need:30,mode:'fry',sh:'leaf',k:7,col0:'#7ad86a',col1:'#3e9a34'},
 eggp:{n:'雞蛋',ic:'egg',svg:1,eggtop:1},sauce:{n:'海山醬',ic:'v5_doubanjiang'},tofup:{n:'板豆腐',ic:'v5_tofu',slab:1},soysc:{n:'醬油膏',ic:'soy',svg:1},
 yolk:{n:'鹹蛋黃',ic:'v5_yolk'},rwine:{n:'噴米酒',ic:'wine',svg:1},redbean:{n:'烏豆沙',ic:'v5_redbean'},flaky:{n:'油皮油酥',ic:'v5_flaky'},
 eggw:{n:'蛋黃液',ic:'egg',svg:1},bsesame:{n:'黑芝麻',ic:'v5_bsesame'}
};
function icon(id){const it=I5[id];if(it.svg){try{return svg(it.ic)}catch(e){}}return `<img src="${A}${it.ic}.webp" alt="" loading="lazy">`}
const D5={
 ricedg:{n:'電鍋白飯',cat:'rice',lv:'簡單',img:'v5d_rice_bowl',st:[['dg','電鍋']]},
 riceec:{n:'電子鍋白飯',cat:'rice',lv:'簡單',img:'v5d_rice_bowl',st:[['ec','電子鍋']]},
 ricepot:{n:'鍋煮白飯',cat:'rice',lv:'中等',img:'v5d_rice_bowl',st:[['potrice','湯鍋']]},
 souptom:{n:'番茄蛋花湯',cat:'soup',lv:'簡單',img:'v5d_soup_tomato_egg',st:[['soup','湯鍋',['oil','tomato','water','salt','egg','scallion','sesoil']]]},
 souplav:{n:'紫菜蛋花湯',cat:'soup',lv:'簡單',img:'v5d_soup_laver_egg',st:[['soup','湯鍋',['water','laver','salt','pepper','egg','scallion','sesoil']]]},
 soupcorn:{n:'玉米排骨湯',cat:'soup',lv:'中等',img:'v5d_soup_corn_rib',st:[['soup','湯鍋',['water','ribs','ginger','corn','salt','scallion']]]},
 soupmiso:{n:'味噌湯',cat:'soup',lv:'簡單',img:'v5d_soup_miso',st:[['soup','湯鍋',['bonito','tofu','wakame','miso','scallion']]]},
 oaj:{n:'蚵仔煎',cat:'snack',lv:'中等',img:'v5d_dish_oyster_omelette',st:[['pan','平底鍋',['lard','oyster','slurry','eggp','greens','sauce']]]},
 lrf:{n:'滷肉飯',cat:'snack',lv:'困難',img:'v5d_dish_braised_pork_rice',st:[['pot','滷鍋',['oil','shallot','belly','wine','soy','rsugar','spice','water','begg']],['ec','電子鍋']]},
 dhs:{n:'蛋黃酥',cat:'snack',lv:'困難',img:'v5d_dish_egg_yolk_pastry',st:[['oven','烤箱',['yolk','rwine','flaky','redbean','eggw','bsesame']]]},
 misua:{n:'大腸麵線',cat:'snack',lv:'中等',img:'v5d_dish_intestine_misua',st:[['pot','湯鍋',['bonito','misua','intestine','slurry2','vinegar','garlicm','cilantro']]]},
 pshr:{n:'鳳梨蝦球',cat:'snack',lv:'中等',img:'v5d_dish_pineapple_shrimp',st:[['fryer','油鍋',['oilf','prawn','mayo','pineapple']]]},
 bnm:{n:'紅燒牛肉麵',cat:'snack',lv:'困難',img:'v5d_dish_beef_noodle',st:[['pot','燉鍋',['oil','ginger','garlic','scallion','doubanjiang','shank','wine','soy','rsugar','spice','daikon','water','salt']],['pot','麵鍋',['water','noodle','bokchoy','coldw']]]},
 tofu:{n:'香煎豆腐',cat:'snack',lv:'簡單',img:'v5d_tofu',st:[['pan','平底鍋',['oil','tofup','soysc','scallion']]]},
 chal:{n:'三菜一湯 30 分鐘',cat:'chal',lv:'挑戰',img:'v5d_chal'}
};
CATS.push(['rice','白飯'],['soup','湯品'],['snack','台味小吃'],['chal','30 分鐘挑戰']);
Object.entries(D5).forEach(([id,d])=>RECIPES.push({id,cat:d.cat,n:d.n,lv:d.lv,steps:[],req:[],tray:[],v5:1}));
/* audio: real samples, synth fallback */
const SFX={};const SN=['sizzle','drop','stir','ignite','boil','simmer','crackle','click','ding','egg','chop','plate','win','fry'];
let sfxL=false;function loadSfx(){if(sfxL||!AC)return;sfxL=true;SN.forEach(n=>fetch(A+'sfx/'+n+'.mp3').then(r=>{if(!r.ok)throw 0;return r.arrayBuffer()}).then(b=>AC.decodeAudioData(b)).then(b=>SFX[n]=b).catch(()=>{}))}
function sfx(n,vol=.6,rate=1){if(!AC)return;loadSfx();const b=SFX[n];if(!b){if(n==='click'||n==='plate')clank();else if(n==='ding'||n==='win')ding(true);else burst(vol*.5,.3);return}
 const s=AC.createBufferSource();s.buffer=b;s.playbackRate.value=rate;const g=AC.createGain();g.gain.value=vol;s.connect(g);g.connect(master);s.start()}
const loops={};function loopG(n,v){if(!AC)return;loadSfx();let o=loops[n];if(!o&&SFX[n]&&v>0){const s=AC.createBufferSource();s.buffer=SFX[n];s.loop=true;const g=AC.createGain();g.gain.value=0;s.connect(g);g.connect(master);s.start();o=loops[n]={s,g}}
 if(o)o.g.gain.setTargetAtTime(v,AC.currentTime,.15)}
let wokS=null;function hookWokAudio(){if(wokS||!AC||!sizzleG||!SFX.sizzle)return;const real=sizzleG;const s=AC.createBufferSource();s.buffer=SFX.sizzle;s.loop=true;const g=AC.createGain();g.gain.value=0;s.connect(g);g.connect(master);s.start();wokS=g;
 sizzleG={gain:{setTargetAtTime(v,t,c){real.gain.setTargetAtTime(v*.35,t,c);g.gain.setTargetAtTime(Math.min(.9,v*1.2),t,c)},set value(v){real.gain.value=v*.35;g.gain.value=Math.min(.9,v*1.2)},get value(){return real.gain.value/.35}}}}
/* stations */
let K=null;
function mkSt(kind,name,tray,o={}){const s={kind,name,tray:tray||[],heat:0,out:0,gas:0,lid:0,lidOpens:0,T:24,W:0,O:0,cap:3200,items:[],foam:0,sfoam:0,visc:0,spill:0,spillT:0,puddle:0,scorch:0,dry:0,bi:0,stirT:-999,addLog:[],ev:{},seed:Math.random()*99,alarm:0,warn:0,smoke:0,ribbons:[],flecks:0,miso:0,misoBoil:0,slurry:0,lumps:0,tint:[255,255,255,0],role:'soup',used:{},order:[],bigBoil:0,...o};
 if(kind==='pan')Object.assign(s,{cap:900,pieces:[],cake:null});
 if(kind==='fryer')Object.assign(s,{cap:1600,shrimp:[],rack:[],chop:0});
 if(kind==='dg'||kind==='ec')Object.assign(s,{rice:2,iw:0,ow:0,washes:0,phase:'prep',p:0,rest:0,fluff:0,mode:'std',progT:0,peek:0});
 if(kind==='potrice')Object.assign(s,{rice:2,washes:0,abs:0,p:0,crust:0,rest:0,fluff:0,riceIn:0,w0:0,cap:2600});
 if(kind==='oven')Object.assign(s,{set:180,To:24,on:0,door:0,opens:0,yolks:null,past:null,coats:0,sesame:0,elem:0});
 return s}
const solid=s=>s.items.reduce((a,i)=>a+(I5[i.id].m||0),0)+(s.kind==='potrice'&&s.riceIn?s.rice*150+s.abs:0);
const C0=s=>700+s.W*4.18+s.O*2+solid(s)*3.5;
const rateBoil=T=>T>=97?1:T>=85?(T-80)/17:T>=70?.12:0;
const rateFry=T=>Math.max(0,(T-105)/65);
function potUpd(s,dt){const P=s.out?0:PW[s.heat],C=C0(s),wet=s.W>8,h=wet?(s.lid?3.2:5.5):(s.O>200?6.5:5);
 let q=P-h*(s.T-22);s.bi=0;
 if(wet){s.W=Math.max(0,s.W-.000025*Math.max(0,s.T-30)**2*(s.lid?.15:1)*dt);
  if(s.T>=99.5&&q>0){s.T=100;s.bi=q/(300+s.W*.45)*(1+s.visc*1.5);s.W=Math.max(0,s.W-q/2260*dt*(s.lid?.25:1))}else s.T=Math.min(100,s.T+q*dt/C)}
 else s.T+=q*dt/C;
 s.T=Math.max(18,s.T);if(s.bi>.7)s.bigBoil+=dt;
 s.items.forEach(i=>{const it=I5[i.id];i.t+=dt;if(s.T>=72)i.hot=(i.hot||0)+dt;if(it.safe&&wet&&s.T>=90)i.sf=(i.sf||0)+dt;if(!it.need)return;
  const fr=wet?0:rateFry(s.T),br=wet?rateBoil(s.T):0;
  if(it.mode==='fry')i.c+=dt*(fr+br*.02)/it.need;
  else if(it.mode==='both'){i.f=(i.f||0)+dt*fr/(it.fneed||100);i.c+=dt*(br+fr*.15)/it.need}
  else i.c+=dt*br/it.need});
 const prot=s.items.reduce((a,i)=>a+(I5[i.id].foam||0)*(i.t<1500?1:.2),0),starch=s.items.reduce((a,i)=>a+(I5[i.id].starch||0),0);
 if(wet&&s.T>70)s.foam=cl(s.foam+dt*prot*.0011*(.5+s.bi));
 s.sfoam=wet?cl(starch*.12*s.bi*(s.lid?1.8:1),0,.6):0;
 const fill=(s.W+s.O*1.1+solid(s)*.8)/s.cap;s.fill=fill;const lvl=fill+s.foam*.03+s.sfoam*.18+(s.bi>.7?(s.bi-.7)*.08:0)+(s.lid&&s.bi>.5?.04:0);s.lvl=lvl;
 if(lvl>.97&&wet&&s.bi>.25){s.spillT+=dt;s.W=Math.max(0,s.W-((lvl-.97)*40+2)*dt);s.puddle=cl(s.puddle+dt*.012);if(!s.spill)sfx('fry',.5,1.3);s.spill=1;s.ev.spill=1;
  if(s.spillT>4&&!s.out&&s.heat){s.out=1;s.ev.out=(s.ev.out||0)+1;sfx('fry',.6,.7);K&&K.douse(s)}}
 else{s.spill=0;s.spillT=Math.max(0,s.spillT-dt*.5)}
 s.puddle=Math.max(0,s.puddle-dt*.0006);if(s.out&&s.heat)s.gas+=dt;
 const sug=s.addLog.some(x=>I5[x].sug);
 if(!wet&&s.kind!=='fryer'&&s.T>150)s.scorch+=dt*(s.T-150)/(s.items.length?900:2000)*(sug?2:1);
 if(wet&&s.visc>.15&&s.heat>=2&&K&&K.t-s.stirT>90)s.scorch+=dt*.0004*(s.heat-1)*(1+s.visc*2);
 if(wet&&sug&&s.W<120&&s.heat)s.scorch+=dt*.0003*s.heat*(120-s.W)/120;
 if(!wet&&!s.items.length&&!s.O&&s.heat&&s.T>200)s.dry+=dt;
 if(s.miso&&s.T>=99.5&&s.bi>.05)s.misoBoil+=dt;
 if(s.egg)s.egg.t+=dt;s.ribbons.forEach(r=>r.set=cl(r.set+dt*rateBoil(s.T)/8));
 if(s.slurryT!=null){s.slurryT+=dt;if(s.slurryStir)s.slurryT=null;else if(s.slurryT>8){s.lumps=1;s.slurryT=null}}
 if(s.slurry&&s.T>80)s.visc=cl(s.visc+dt*.004,0,Math.min(.9,.35*s.slurry));
 if(s.items.some(i=>i.id==='misua'))s.visc=Math.max(s.visc,cl(.15*s.items.find(i=>i.id==='misua').c));
 s.smoke=cl((s.scorch>.15?s.scorch:0)+(s.O>0&&!wet&&s.T>215?(s.T-215)/40:0),0,1.5);
 s.alarm=s.spill||s.out||s.smoke>.4||(s.kind==='fryer'&&s.T>215)?1:0;
 s.warn=(wet&&s.W<150&&s.heat&&s.kind!=='fryer')||(s.lvl>.9&&s.bi>.3)||s.smoke>.1?1:0}
function panUpd(s,dt){const P=s.out?0:PW[s.heat];const m=s.pieces.length*60+(s.cake?300:0)+solid(s),C=900+s.O*2+m*3.2;
 s.T+=(P-5*(s.T-22)-(s.cake?220*s.cake.wet:0))*dt/C;s.T=Math.max(18,s.T);const fr=rateFry(s.T)*(s.O>0?1:.6);
 if(s.cake)s.cake.wet=Math.max(0,s.cake.wet-dt*fr*.02);
 s.items.forEach(i=>{const it=I5[i.id];i.t+=dt;if(it.need)i.c+=dt*fr*(i.inCake?.5:1)/it.need});
 s.pieces.forEach(p=>{p.s[p.up?0:1]+=dt*fr/p.need;p.s[p.up?1:0]+=dt*fr*(s.lid?.25:.06)/p.need});
 if(s.cake){const c=s.cake;c.s[c.up?0:1]+=dt*fr/c.need;c.s[c.up?1:0]+=dt*fr*(s.lid?.45:.2)/c.need;if(c.egg!=null)c.egg+=dt*fr*(c.up?1:.35)/60}
 const mx=Math.max(0,...s.pieces.map(p=>Math.max(...p.s)),s.cake?Math.max(...s.cake.s):0);
 s.smoke=cl((mx>1.55?(mx-1.55)*2:0)+(s.T>230?(s.T-230)/40:0),0,1.5);s.alarm=s.smoke>.5||s.out?1:0;s.warn=mx>1.25||s.smoke>.1?1:0;if(s.out&&s.heat)s.gas+=dt}
function fryUpd(s,dt){const n=s.shrimp.filter(x=>x.in&&x.c<1).length;s.T-=n*12*dt/C0(s);potUpd(s,dt);const T=s.T;
 s.shrimp.forEach(x=>{if(!x.in)return;x.c+=dt*Math.max(0,(T-100)/75)/150;x.b+=dt*Math.pow(Math.max(0,(T-130)/45),1.4)/150;if(T<155)x.grease+=dt*(155-T)/2000;x.t+=dt});
 if(T>215)s.smoke=cl((T-215)/30,0,1.5);s.alarm=T>215?1:0;s.warn=T>195||s.shrimp.some(x=>x.in&&x.b>1.1)?1:0}
function ckUpd(s,dt){
 if(s.kind==='dg'){if(s.phase==='cook'){s.progT+=dt;if(s.progT>240){s.p+=dt/1150*(s.iw>0?1:.3);s.ow=Math.max(0,s.ow-dt/1300)}
   if(s.ow<=0&&s.progT>240){s.phase='rest';s.t0=K.t;sfx('click',.8)}}
  else if(s.phase==='rest'){s.rest+=dt;if(s.p<1)s.p+=dt/1150*.25*Math.max(0,1-s.rest/900)}}
 else{if(s.phase==='cook'){s.progT+=dt;const dur=s.mode==='quick'?1680:2700;if(s.progT>dur*.25)s.p+=dt/(dur*.6);s.left=dur-s.progT;
   if(s.progT>=dur){s.phase='rest';s.t0=K.t;s.p=Math.max(s.p,1);s.rest=s.mode==='quick'?300:600;sfx('ding',.6)}}
  else if(s.phase==='rest')s.rest+=dt}
 s.alarm=0;s.warn=0}
function potRiceUpd(s,dt){potUpd(s,dt);
 if(s.riceIn){if(s.T>70&&s.W>0){const tgt=s.rice*180*1.15;const ab=Math.max(0,Math.min(s.W,dt*.12*(s.T-60)/40*(tgt-s.abs)/tgt*3));s.abs+=ab;s.W-=ab}
  if(s.T>=95)s.p+=dt/780*(s.W>8?1:.7);
  if(s.W<=8&&s.heat&&s.T>110){s.crust+=dt*(s.T-110)/900;s.scorch=Math.max(0,s.crust-1)*.8}
  if(!s.heat&&s.p>.5&&s.lid&&s.T>60){s.rest+=dt;if(s.p<1.05)s.p+=dt/1600}
  s.sfoam=s.W>8?cl(.35*s.bi*(s.lid?1.8:1)*Math.max(0,1-s.p),0,.6):0}
 s.warn=s.warn||(s.riceIn&&s.W<=8&&s.heat>=2)?1:0;s.alarm=s.alarm||s.crust>1.2?1:0}
function ovUpd(s,dt){const heating=s.on&&s.To<s.set-2;s.elem=heating?1:s.on&&s.To<s.set+1?.35:0;
 s.To+=((s.on?(heating?1.25:.2*(s.set-s.To)/10):0)-(s.To-24)*.0012*(s.door?6:1))*dt;
 const r=Math.max(0,(s.To-100)/80),br=Math.pow(Math.max(0,(s.To-120)/60),1.5);
 if(s.yolks&&s.yolks.inOven)s.yolks.c+=dt*r/420;
 if(s.past&&s.past.inOven){s.past.p+=dt*r/1650;s.past.b+=dt*br/1650*(s.coats?1+s.coats*.12:.65)}
 if(!s.pre&&s.on&&s.To>=s.set-3){s.pre=1;sfx('click',.5)}
 const mx=s.past?s.past.b:0;s.smoke=mx>1.5?mx-1.5:0;s.alarm=mx>1.45?1:0;s.warn=mx>1.15||(s.yolks&&s.yolks.inOven&&s.yolks.c>1.6)?1:0}
function upd(s,dt){const k=s.kind;if(k==='pot')potUpd(s,dt);else if(k==='potrice')potRiceUpd(s,dt);else if(k==='pan')panUpd(s,dt);else if(k==='fryer')fryUpd(s,dt);else if(k==='dg'||k==='ec')ckUpd(s,dt);else if(k==='oven')ovUpd(s,dt)}
/* drawing */
function stove(c,x,y,R,s,t){c.save();const g=c.createRadialGradient(x,y,R*.2,x,y,R*1.5);g.addColorStop(0,'#2b2a2c');g.addColorStop(1,'#17161a');c.fillStyle=g;c.beginPath();c.ellipse(x,y,R*1.45,R*.62,0,0,7);c.fill();
 c.strokeStyle='#0b0b0d';c.lineWidth=R*.07;for(let i=0;i<4;i++){const a=i*Math.PI/2+.78;c.beginPath();c.moveTo(x+Math.cos(a)*R*.5,y+Math.sin(a)*R*.22);c.lineTo(x+Math.cos(a)*R*1.25,y+Math.sin(a)*R*.53);c.stroke()}
 c.beginPath();c.ellipse(x,y,R*1.2,R*.5,0,0,7);c.stroke();
 if(s.puddle>0){const tc=s.tint;c.fillStyle=`rgba(${tc[0]|0},${tc[1]|0},${tc[2]|0},${.6*s.puddle})`;c.beginPath();c.ellipse(x+R*.3,y+R*.15,R*(.5+.7*s.puddle),R*.18*(1+s.puddle),.1,0,7);c.fill()}
 if(s.heat&&!s.out){c.globalCompositeOperation='lighter';const hh=s.heat;
  for(let i=0;i<20;i++){const a=i/20*6.283;if(Math.sin(a)<-.25)continue;const fx=x+Math.cos(a)*R*.62,fy=y+Math.sin(a)*R*.27+R*.08,fl=R*(.05+.05*hh)*(.8+.4*Math.sin(t*30+i*2.3));
   const gf=c.createLinearGradient(fx,fy,fx,fy-fl);gf.addColorStop(0,'rgba(60,110,255,.95)');gf.addColorStop(.6,'rgba(120,170,255,.6)');gf.addColorStop(1,s.spill?'rgba(255,170,40,.9)':'rgba(140,190,255,0)');c.fillStyle=gf;c.beginPath();c.ellipse(fx,fy-fl/2,R*.025*(1+hh*.3),fl/2,0,0,7);c.fill()}
  const gl=c.createRadialGradient(x,y,R*.3,x,y,R*1.1);gl.addColorStop(0,`rgba(255,120,40,${.1*hh})`);gl.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=gl;c.fillRect(x-R*1.5,y-R,R*3,R*2)}
 c.restore()}
function liqCol(s){let r=232,g=238,b=240,a=.35;const m=cc=>{const w=cc[3];r+=(cc[0]-r)*w;g+=(cc[1]-g)*w;b+=(cc[2]-b)*w;a=Math.min(.95,a+w*.6)};
 s.addLog.forEach(id=>{const it=I5[id];if(it.col)m(it.col)});s.items.forEach(i=>{const it=I5[i.id];if(it.tint)m([it.tint[0],it.tint[1],it.tint[2],it.tint[3]*cl(i.c+.2)]);if(it.col)m(it.col)});
 if(s.miso)m([190,140,70,.55]);if(s.flecks)m([240,220,150,.3]);if(s.lumps)m([200,170,150,.2]);a=Math.min(.97,a+s.visc*.6);
 if(s.W<8&&s.O>0){r=226;g=176;b=60;a=s.O>200?.8:.55}
 if(s.scorch>.3){r*=.75;g*=.7;b*=.65}s.tint=[r,g,b,a];return s.tint}
function shape(c,it,i,x,y,sz,t){const d=cl(i.c,0,2.2),col=mix(it.col0||'#ccc',it.col1||'#aaa',Math.min(1,d));c.save();c.translate(x,y);c.rotate(rnd(i.seed)*6.28+Math.sin(t*.7+i.seed)*.15);c.fillStyle=col;const f=cl(i.f||0);
 switch(it.sh){
 case'wedge':c.beginPath();c.moveTo(-sz,-sz*.3);c.quadraticCurveTo(0,-sz*(1.1-.35*Math.min(1,d)),sz,-sz*.3);c.lineTo(sz*.6,sz*.5);c.lineTo(-sz*.6,sz*.5);c.closePath();c.fill();c.fillStyle=`rgba(255,220,140,${.6-.4*Math.min(1,d)})`;c.beginPath();c.ellipse(0,0,sz*.45,sz*.22,0,0,7);c.fill();if(d>.6){c.strokeStyle='rgba(255,230,210,.5)';c.lineWidth=1;c.beginPath();c.moveTo(-sz*.8,-sz*.4);c.quadraticCurveTo(0,-sz*.9,sz*.6,-sz*.5);c.stroke()}break;
 case'sheet':c.globalAlpha=.85;c.beginPath();for(let k=0;k<7;k++){const a=k/7*6.28,rr=sz*(.7+.5*rnd(i.seed+k))*(1+.6*Math.min(1,d));c.lineTo(Math.cos(a)*rr,Math.sin(a)*rr*.6)}c.closePath();c.fill();break;
 case'rib':c.fillStyle=mix('#f0e8d8','#d8c8a8',d);c.fillRect(-sz*.12,-sz*.8,sz*.24,sz*1.6);c.fillStyle=col;c.beginPath();c.ellipse(0,0,sz*.75,sz*.55,0,0,7);c.fill();c.fillStyle='rgba(255,255,255,.3)';c.beginPath();c.ellipse(-sz*.2,-sz*.2,sz*.3,sz*.1,-.4,0,7);c.fill();break;
 case'corn':c.beginPath();c.arc(0,0,sz*.7,0,7);c.fill();c.fillStyle='#e8d8a0';c.beginPath();c.arc(0,0,sz*.22,0,7);c.fill();c.fillStyle='rgba(180,130,20,.4)';for(let k=0;k<14;k++){const a=k/14*6.28;c.beginPath();c.arc(Math.cos(a)*sz*.48,Math.sin(a)*sz*.48,sz*.08,0,7);c.fill()}break;
 case'cube':c.fillRect(-sz*.5,-sz*.5,sz,sz);c.fillStyle='rgba(0,0,0,.08)';c.fillRect(-sz*.5,sz*.25,sz,sz*.25);c.fillStyle='rgba(255,255,255,.4)';c.fillRect(-sz*.5,-sz*.5,sz,sz*.15);break;
 case'ring':c.strokeStyle=col;c.lineWidth=sz*.3;c.beginPath();c.arc(0,0,sz*.45,0,7);c.stroke();break;
 case'leaf':c.beginPath();c.ellipse(0,0,sz*(1-.25*Math.min(1,d)),sz*.45,0,0,7);c.fill();c.strokeStyle='rgba(230,255,220,.5)';c.lineWidth=1;c.beginPath();c.moveTo(-sz*.8,0);c.lineTo(sz*.8,0);c.stroke();break;
 case'ginger':c.fillStyle=mix(it.col0,'#b07a30',f);c.beginPath();c.ellipse(0,0,sz*.8,sz*.5,0,0,7);c.fill();break;
 case'bits':c.fillStyle=d>1.35?mix(it.col1,it.burnc||'#2a160a',(d-1.35)/.4):col;for(let k=0;k<3;k++){c.beginPath();c.ellipse(rnd(i.seed+k)*sz-sz/2,rnd(i.seed+k+5)*sz-sz/2,sz*.3,sz*.18,k,0,7);c.fill()}break;
 case'chunk':{c.fillStyle=mix(mix(it.col0,'#a8705a',Math.min(1,d*1.5+f)),it.col1,Math.max(f*.6,Math.min(1,d*.8)));c.beginPath();c.moveTo(-sz*.6,-sz*.4);c.lineTo(sz*.5,-sz*.55);c.lineTo(sz*.65,sz*.35);c.lineTo(-sz*.45,sz*.55);c.closePath();c.fill();
  if(it===I5.belly){c.fillStyle=mix('#fbeee6','#d8a060',Math.min(1,d*.9+f*.3));c.fillRect(-sz*.55,-sz*.1,sz*1.15,sz*.18)}
  if(d>.6){c.fillStyle=`rgba(255,220,150,${.45*Math.min(1,d-.6)})`;c.beginPath();c.ellipse(-sz*.15,-sz*.22,sz*.32,sz*.09,-.3,0,7);c.fill()}break}
 case'strand':c.strokeStyle=col;c.lineWidth=sz*.16*(1+.3*Math.min(1,d)+Math.max(0,d-1.5));c.lineCap='round';c.beginPath();c.moveTo(-sz*1.6,0);for(let k=1;k<=6;k++)c.quadraticCurveTo(-sz*1.6+k*sz*.55-sz*.27,(rnd(i.seed+k)-.5)*sz*1.2,-sz*1.6+k*sz*.55,(rnd(i.seed+k+3)-.5)*sz*.6);c.stroke();break;
 case'intest':c.strokeStyle=col;c.lineWidth=sz*.35;c.beginPath();c.ellipse(0,0,sz*.5,sz*.36,0,0,7);c.stroke();c.strokeStyle='rgba(255,220,170,.4)';c.lineWidth=sz*.08;c.beginPath();c.ellipse(-sz*.05,-sz*.08,sz*.45,sz*.28,0,3.5,5.5);c.stroke();break;
 case'egg':c.beginPath();c.ellipse(0,0,sz*.75,sz*.55,0,0,7);c.fill();c.fillStyle='rgba(255,255,255,.4)';c.beginPath();c.ellipse(-sz*.25,-sz*.2,sz*.25,sz*.1,-.4,0,7);c.fill();break;
 case'star':c.fillStyle='#6a3416';c.beginPath();for(let k=0;k<16;k++){const rr=k%2?sz*.25:sz*.7,a=k/16*6.28;c.lineTo(Math.cos(a)*rr,Math.sin(a)*rr)}c.fill();break;
 case'oyster':c.fillStyle=mix('#9c968a','#e0d2b2',Math.min(1,d));c.beginPath();c.ellipse(0,0,sz*.8*(1-.15*Math.min(1,d)),sz*.5,0,0,7);c.fill();c.strokeStyle=mix('#3a3a3a','#6a5a4a',Math.min(1,d));c.lineWidth=sz*.16;c.beginPath();c.ellipse(0,0,sz*.72,sz*.44,0,.3,2.8);c.stroke();c.fillStyle='rgba(255,255,255,.45)';c.beginPath();c.ellipse(-sz*.2,-sz*.15,sz*.25,sz*.08,-.3,0,7);c.fill();break;
 default:c.beginPath();c.arc(0,0,sz*.5,0,7);c.fill()}
 c.restore()}
function smoke(c,x,y,R,a,t){for(let k=0;k<10;k++){const ph=(t*.25+rnd(k*3.3))%1;c.fillStyle=`rgba(60,58,56,${.35*cl(a)*(1-ph)})`;c.beginPath();c.ellipse(x+(rnd(k)-.5)*R+Math.sin(t+k)*R*.2*ph,y-ph*R*1.6,R*(.1+.35*ph),R*(.07+.2*ph),0,0,7);c.fill()}}
function steam(c,x,y,R,a,t,spread=1.2){for(let k=0;k<Math.ceil(7*a)+1;k++){const ph=(t*.35+rnd(k*2.2))%1;c.fillStyle=`rgba(255,255,255,${.22*Math.min(1,a)*(1-ph)})`;c.beginPath();c.ellipse(x+(rnd(k*5.1)-.5)*R*spread+Math.sin(t*1.3+k)*R*.1*ph,y-ph*R*1.2,R*(.08+.25*ph),R*(.05+.12*ph),0,0,7);c.fill()}}
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function riceBed(c,s,x,y,R,RY,mini){const done=cl(s.p);for(let k=0;k<(mini?110:380);k++){const a=rnd(k*1.7)*6.28,r2=Math.sqrt(rnd(k*2.9));c.fillStyle=mix(s.washes<2&&done<.1?'#ece6d6':'#f2eee2','#fdfdfa',done);c.globalAlpha=.55+.45*done;c.beginPath();c.ellipse(x+Math.cos(a)*R*r2,y+Math.sin(a)*RY*r2,R*.05*(1+done*.4),R*.022*(1+done*.4),a,0,7);c.fill()}c.globalAlpha=1}
function pot(c,s,x,y,R,t,mini){const RY=R*.42;stove(c,x,y+R*.55,R,s,t);c.save();
 const bg=c.createLinearGradient(x-R,0,x+R,0);bg.addColorStop(0,'#6c7076');bg.addColorStop(.3,'#d8dce2');bg.addColorStop(.55,'#9a9ea6');bg.addColorStop(1,'#55595f');c.fillStyle=bg;
 const deep=s.kind==='fryer'?R*.6:R*.72;c.beginPath();c.moveTo(x-R,y);c.lineTo(x-R*.97,y+deep);c.ellipse(x,y+deep,R*.97,RY*.97,0,Math.PI,0,true);c.lineTo(x+R,y);c.closePath();c.fill();
 c.fillStyle='#c8322a';[-1,1].forEach(sg=>{c.beginPath();c.ellipse(x+sg*R*1.1,y+R*.12,R*.16,R*.07,0,0,7);c.fill()});
 liqCol(s);const tc=s.tint;
 if(s.spill||s.spillT>.5){c.fillStyle=`rgba(${tc[0]|0},${tc[1]|0},${tc[2]|0},.85)`;for(let k=0;k<5;k++){const sx=x+(k-2)*R*.33,len=deep*(.4+.5*rnd(k+Math.floor(t*2)%3))*cl(s.spillT/3);c.beginPath();c.ellipse(sx,y+RY*.9+len/2,R*.05,len/2+2,0,0,7);c.fill()}}
 c.beginPath();c.ellipse(x,y,R,RY,0,0,7);c.fillStyle='#e6e9ee';c.fill();c.beginPath();c.ellipse(x,y,R*.95,RY*.9,0,0,7);c.clip();
 const ig=c.createLinearGradient(0,y-RY,0,y+RY);ig.addColorStop(0,'#5a5e66');ig.addColorStop(1,'#b8bcc4');c.fillStyle=ig;c.fillRect(x-R,y-RY,R*2,RY*2+deep);
 const fill=cl(s.fill||0,0,1.05),ly=y+(1-fill)*RY*1.2;
 if(s.kind==='potrice'&&s.riceIn){riceBed(c,s,x,ly+RY*.05,R*.85,RY*.75,mini);if(s.W<=8&&s.p>.5){c.fillStyle='rgba(110,100,80,.45)';for(let k=0;k<8;k++){c.beginPath();c.ellipse(x+(rnd(k*11)-.5)*R*1.2,ly+(rnd(k*13)-.5)*RY,R*.03,R*.016,0,0,7);c.fill()}}}
 if(s.W>8||s.O>0){c.fillStyle=`rgba(${tc[0]|0},${tc[1]|0},${tc[2]|0},${s.kind==='potrice'?Math.min(.6,s.W/300):tc[3]})`;c.beginPath();c.ellipse(x,ly,R*.95,RY*.9+(s.bi>.6?Math.sin(t*9)*(s.bi-.6)*R*.02:0),0,0,7);c.fill();
  c.globalCompositeOperation='lighter';for(let k=0;k<3;k++){const ph=t*.4+k*2.1;c.fillStyle=`rgba(255,255,255,${.06+.03*Math.sin(ph*2)})`;c.beginPath();c.ellipse(x+Math.sin(ph)*R*.3-R*.2,ly-RY*.3+Math.cos(ph*.7)*RY*.15,R*(.18+.06*k),RY*.08,-.15,0,7);c.fill()}c.globalCompositeOperation='source-over'}
 s.items.forEach(i=>{const it=I5[i.id];if(!it.sh)return;const kk=mini?Math.ceil(it.k/2):it.k;for(let n=0;n<kk;n++){const sd=i.seed+n*1.37,a=rnd(sd)*6.28,r2=Math.sqrt(rnd(sd+2))*.8,fl=(s.bi*.9+.05)*t*.6*(r2<.5?1:-.6);
  const px=x+Math.cos(a+fl)*R*.8*r2,py=ly+Math.sin(a+fl)*RY*.72*r2+Math.sin(t*3+sd)*RY*.02*(1+s.bi*3);shape(c,it,{...i,seed:sd},px,py,R*(it.sh==='strand'?.13:it.sh==='bits'?.05:.085)*(mini?1.15:1),t);
  if(s.W>8&&it.sh!=='sheet'){c.fillStyle=`rgba(${tc[0]|0},${tc[1]|0},${tc[2]|0},${.25+s.visc*.5})`;c.beginPath();c.ellipse(px,py+R*.03,R*.07,R*.025,0,0,7);c.fill()}}});
 s.ribbons.forEach(r=>{c.strokeStyle=mix('#fff0a0','#fbeec0',r.set);c.globalAlpha=.92;c.lineWidth=R*(r.broken?.012:.03);c.lineCap='round';
  for(let k=0;k<(r.broken?6:1);k++){const sx=x+(rnd(r.s+k)-.5)*R*1.3+Math.sin(t*.5*(1+s.bi)+r.s)*R*.1,sy=ly+(rnd(r.s+k+7)-.5)*RY*1.1;c.beginPath();c.moveTo(sx,sy);
   if(r.broken)c.lineTo(sx+R*.03,sy+2);else for(let q=1;q<=5;q++)c.quadraticCurveTo(sx+q*R*.09,sy+Math.sin(q+r.s)*RY*.18,sx+q*R*.13,sy+Math.cos(q*1.7+r.s)*RY*.1);c.stroke()}c.globalAlpha=1});
 const fat=s.items.reduce((a,i)=>a+(I5[i.id].fat||0)*cl(i.c*2),0)+(s.W>8?s.O/40:0);
 if(fat>0&&s.W>8){c.fillStyle=s.addLog.includes('soy')?'rgba(230,150,50,.6)':'rgba(255,215,120,.55)';for(let k=0;k<Math.min(45,fat*10);k++){const a=rnd(k*3.1+s.seed)*6.28,r2=Math.sqrt(rnd(k*7.7))*.85;c.beginPath();c.ellipse(x+Math.cos(a+t*.1)*R*.85*r2,ly+Math.sin(a+t*.1)*RY*.75*r2,R*(.012+.02*rnd(k)),R*(.008+.012*rnd(k)),0,0,7);c.fill()}}
 const fo=Math.max(s.foam,s.sfoam*1.5);if(fo>.02){c.fillStyle=s.sfoam>s.foam?'rgba(250,248,240,.85)':'rgba(205,190,160,.85)';for(let k=0;k<fo*45;k++){const a=rnd(k*1.9+3)*6.28,r2=s.sfoam>s.foam?.3+Math.sqrt(rnd(k*5.3))*.7:Math.sqrt(rnd(k*5.3))*.6;c.beginPath();c.ellipse(x+Math.cos(a+t*.05)*R*.9*r2,ly+Math.sin(a+t*.05)*RY*.8*r2,R*(.03+.03*rnd(k+1)),RY*(.03+.02*rnd(k+2)),0,0,7);c.fill()}}
 if(s.W>8){let nb=0,bs=.012;if(s.T>85&&s.T<99.5)nb=Math.floor((s.T-85)*.6);else if(s.T>=99.5){nb=4+Math.floor(s.bi*45);bs=.014+s.bi*.02}const sp=1.2+s.bi*2.5;
  for(let k=0;k<nb;k++){const ph=(t*sp+rnd(k))%1,cy=Math.floor(t*sp+rnd(k)),a=rnd(k*4.3+cy)*6.28,r2=Math.sqrt(rnd(k*9.1+cy))*(s.bi<.35&&s.T>=99.5?.4:.85);
   const bx=x+Math.cos(a)*R*.9*r2,by=ly+Math.sin(a)*RY*.8*r2,br=R*bs*(.5+ph)*(1+s.visc*2);c.strokeStyle=`rgba(255,255,255,${.75*(1-ph)})`;c.lineWidth=1.2;c.beginPath();c.ellipse(bx,by,br,br*.6,0,0,7);c.stroke();
   if(s.visc>.3){c.fillStyle=`rgba(${tc[0]*.8|0},${tc[1]*.8|0},${tc[2]*.8|0},.5)`;c.fill()}}
  if(s.bi>.7){c.fillStyle='rgba(255,255,255,.75)';for(let k=0;k<10;k++){const a=rnd(k+Math.floor(t*8))*6.28;c.beginPath();c.arc(x+Math.cos(a)*R*.4,ly-RY*.1+Math.sin(a)*RY*.3,1.8,0,7);c.fill()}}}
 if(s.O>0&&s.W<8&&s.T>140){c.globalCompositeOperation='lighter';for(let k=0;k<5;k++){c.strokeStyle=`rgba(255,240,200,${.05*Math.min(2,(s.T-140)/50)})`;c.lineWidth=2;c.beginPath();const yy=ly+(k-2)*RY*.18;c.moveTo(x-R*.7,yy);for(let q=1;q<8;q++)c.lineTo(x-R*.7+q*R*.2,yy+Math.sin(t*6+q*1.7+k)*RY*.04);c.stroke()}c.globalCompositeOperation='source-over'}
 if(s.kind==='fryer'){s.shrimp.forEach((p,j)=>{if(!p.in)return;const a=rnd(p.seed)*6.28+t*.3,px=x+Math.cos(a)*R*.5*rnd(p.seed+1),py=ly+Math.sin(a)*RY*.4;
   c.save();c.translate(px,py);c.rotate(a);c.fillStyle=mix('#f4e8d2','#e0a040',cl(p.b/1.1));if(p.b>1.3)c.fillStyle=mix('#c07020','#4a2410',cl((p.b-1.3)/.4));c.beginPath();c.arc(0,0,R*.11,.3,5.5);c.lineWidth=R*.09;c.strokeStyle=c.fillStyle;c.stroke();c.restore();
   const T=s.T,n=T<140?1:T<165?4:12;c.fillStyle='rgba(255,250,230,.8)';for(let k=0;k<n;k++){const ph=(t*(T>165?5:2)+rnd(k+j))%1;c.beginPath();c.arc(px+(rnd(k*3+j)-.5)*R*.3,py+(rnd(k*5+j)-.5)*R*.15-ph*R*.02,1+ph*1.5,0,7);c.fill()}})}
 c.restore();
 c.strokeStyle='#f4f6f8';c.lineWidth=R*.035;c.beginPath();c.ellipse(x,y,R*.975,RY*.95,0,0,7);c.stroke();
 if(s.spill){c.fillStyle='rgba(250,248,240,.92)';for(let k=0;k<12;k++){const a=Math.PI*.1+k/12*Math.PI*.8;c.beginPath();c.ellipse(x+Math.cos(a)*R*.97,y+Math.sin(a)*RY*.95+R*.02,R*.05,R*.03,0,0,7);c.fill()}}
 if(s.lid){const rat=s.bi>.55?Math.sin(t*40)*R*.01*(s.bi-.4)*3:0;c.save();c.translate(0,rat);const lg=c.createLinearGradient(x-R,y-RY,x+R,y+RY);lg.addColorStop(0,'#f2f4f6');lg.addColorStop(.5,'#a8acb4');lg.addColorStop(1,'#d8dce2');c.fillStyle=lg;c.beginPath();c.ellipse(x,y-R*.03,R*1.01,RY*1.02,0,0,7);c.fill();
  c.fillStyle='rgba(255,255,255,.35)';c.beginPath();c.ellipse(x-R*.3,y-RY*.35,R*.35,RY*.15,-.1,0,7);c.fill();if(s.T>90){c.fillStyle='rgba(255,255,255,.12)';c.beginPath();c.ellipse(x+R*.2,y+RY*.2,R*.5,RY*.3,0,0,7);c.fill()}
  c.fillStyle='#c8322a';c.beginPath();c.ellipse(x,y-R*.1,R*.14,R*.08,0,0,7);c.fill();c.fillStyle='#e85a4a';c.beginPath();c.ellipse(x-R*.03,y-R*.13,R*.06,R*.025,0,0,7);c.fill();c.restore()}
 const st=s.W>8?cl((s.T-60)/40)*(.4+s.bi):s.O>0&&s.T>190?.35:0;if(st>0&&!mini)steam(c,x,y-R*.1,R,st,t,s.lid?2:1.2);
 if(s.smoke>0)smoke(c,x,y-R*.1,R,s.smoke,t);
 if(s.chop>0&&!mini){const cx2=x+R*.25;c.strokeStyle='#d8b27a';c.lineWidth=R*.035;c.lineCap='round';c.beginPath();c.moveTo(cx2+R*.35,ly-R*.9);c.lineTo(cx2,ly);c.stroke();
  const T=s.T,n=T<140?0:T<165?3:T<190?10:20,sp=T<165?1:T<190?2.2:4;for(let k=0;k<n;k++){const ph=(t*sp+rnd(k))%1;c.strokeStyle=`rgba(255,250,230,${.85*(1-ph)})`;c.lineWidth=1.2;c.beginPath();c.arc(cx2+(rnd(k*3)-.5)*R*.08,ly-ph*R*.05,R*(.007+.008*rnd(k+2))*(T>190?1.6:1),0,7);c.stroke()}
  if(T>200)smoke(c,cx2,ly,R*.3,.6,t)}}
function pan(c,s,x,y,R,t,mini){stove(c,x,y+R*.35,R,s,t);const RY=R*.45;c.save();
 c.fillStyle='#2a2a2e';c.beginPath();c.ellipse(x,y+R*.06,R,RY,0,0,7);c.fill();c.fillStyle='#4a3a2a';c.beginPath();c.moveTo(x+R*.9,y);c.lineTo(x+R*1.6,y-R*.18);c.lineTo(x+R*1.63,y-R*.08);c.lineTo(x+R*.95,y+R*.1);c.fill();
 const g=c.createRadialGradient(x-R*.2,y-RY*.3,R*.1,x,y,R);g.addColorStop(0,'#3a3a40');g.addColorStop(1,'#141418');c.fillStyle=g;c.beginPath();c.ellipse(x,y,R*.92,RY*.88,0,0,7);c.fill();c.clip();
 if(s.O>0){c.fillStyle=`rgba(230,180,70,${.22+.08*Math.sin(t)})`;c.beginPath();c.ellipse(x+Math.sin(t*.3)*R*.05,y+RY*.1,R*.72,RY*.62,0,0,7);c.fill();c.globalCompositeOperation='lighter';for(let k=0;k<4;k++){const ph=t*.4+k*1.6;c.fillStyle='rgba(255,240,200,.07)';c.beginPath();c.ellipse(x+Math.sin(ph)*R*.35,y+Math.cos(ph*.8)*RY*.3,R*.15,RY*.05,0,0,7);c.fill()}c.globalCompositeOperation='source-over'}
 const ck=s.cake;
 if(ck){const bot=ck.s[ck.up?0:1],top=ck.s[ck.up?1:0];c.save();c.translate(x,y+RY*.05);if(ck.fl)c.scale(1,Math.max(.12,Math.abs(Math.cos(ck.fl*Math.PI))));
  const edge=bot>1.45?'#3a2010':mix('#efe2c8','#b8702a',cl((bot-.5)/.8));c.fillStyle=edge;c.beginPath();for(let k=0;k<48;k++){const a=k/48*6.28,r2=R*.68*(1+.07*Math.sin(k*2.7+ck.seed)+.04*rnd(k+ck.seed));c.lineTo(Math.cos(a)*r2,Math.sin(a)*r2*.47)}c.fill();
  if(ck.up){c.fillStyle=bot>1.4?mix('#a0602a','#2a1a0c',cl(bot-1.4)):mix('#f0e0b0','#c87a30',cl(bot-.2));c.beginPath();c.ellipse(0,0,R*.6,R*.27,0,0,7);c.fill();c.fillStyle='rgba(120,60,20,.35)';for(let k=0;k<18;k++){c.beginPath();c.ellipse((rnd(k)-.5)*R,(rnd(k+4)-.5)*R*.4,R*.05,R*.025,k,0,7);c.fill()}}
  else{const op=cl(.95-cl(bot*.9)*.72);c.fillStyle=`rgba(246,242,234,${op})`;c.beginPath();c.ellipse(0,0,R*.6,R*.27,0,0,7);c.fill()}
  if(!ck.up&&ck.egg!=null){for(let k=0;k<7;k++){const ex=(rnd(k*2+ck.seed)-.5)*R*.8,ey=(rnd(k*3+ck.seed)-.5)*R*.32;c.fillStyle=`rgba(255,${200+40*cl(ck.egg)|0},${40+120*cl(ck.egg)|0},.92)`;c.beginPath();c.ellipse(ex,ey,R*.13,R*.05,rnd(k)*2,0,7);c.fill();c.fillStyle=`rgba(255,252,245,${.4+.5*cl(ck.egg)})`;c.beginPath();c.ellipse(ex+R*.09,ey+R*.02,R*.07,R*.03,rnd(k)*2,0,7);c.fill()}}
  c.restore()}
 s.items.forEach(i=>{if(ck&&ck.up&&i.inCake)return;const it=I5[i.id];for(let n=0;n<(it.k||1);n++){const sd=i.seed+n*1.37,a=rnd(sd)*6.28,r2=Math.sqrt(rnd(sd+2))*.55,px=x+Math.cos(a)*R*.9*r2,py=y+RY*.05+Math.sin(a)*RY*.8*r2;shape(c,it,{...i,seed:sd},px,py,R*.08,t);
  if(ck&&i.inCake&&!ck.up){c.fillStyle=`rgba(246,242,234,${cl(.85-cl(ck.s[1]*.9)*.75)})`;c.beginPath();c.ellipse(px,py,R*.075,R*.04,0,0,7);c.fill()}}});
 if(s.sauce&&ck&&ck.up){c.strokeStyle='rgba(200,60,40,.85)';c.lineWidth=R*.035;c.lineCap='round';c.beginPath();for(let k=0;k<9;k++)c.lineTo(x-R*.45+k*R*.11,y+Math.sin(k*1.8)*R*.1);c.stroke()}
 s.pieces.forEach((p,j)=>{const b=p.s[p.up?0:1],tp=p.s[p.up?1:0],px=x+((j%3)-1)*R*.44,py=y+(Math.floor(j/3)-.5)*RY*.75;c.save();c.translate(px,py);if(p.fl)c.scale(1,Math.max(.12,Math.abs(Math.cos(p.fl*Math.PI))));
  c.fillStyle='#f6f0de';c.fillRect(-R*.17,-R*.11,R*.34,R*.22);if(tp>.12){c.globalAlpha=cl(tp*1.4);c.fillStyle=tp>1.4?mix('#a86a2a','#1e120a',cl((tp-1.4)/.5)):mix('#f2dca0','#c8842e',cl((tp-.15)/1.1));c.fillRect(-R*.17,-R*.11,R*.34,R*.22);
   c.globalAlpha=cl(tp-.4)*.6;c.fillStyle='#7a4014';for(let k=0;k<8;k++){c.beginPath();c.arc((rnd(k+j)-.5)*R*.3,(rnd(k+j+3)-.5)*R*.18,R*.015,0,7);c.fill()}c.globalAlpha=1}
  c.fillStyle=b>1.4?'#2a160a':mix('#f2dca0','#c8842e',cl(b));c.fillRect(-R*.17,R*.11,R*.34,R*.04);
  if(s.sauce){c.fillStyle='rgba(70,30,10,.6)';c.fillRect(-R*.12,-R*.03,R*.24,R*.05)}c.restore();
  if(s.T>120&&!mini){c.fillStyle='rgba(255,255,255,.6)';for(let k=0;k<3;k++){const ph=(t*3+rnd(k+j))%1;c.beginPath();c.arc(px+(rnd(k*7+j)-.5)*R*.36,py+R*.12,1+ph,0,7);c.fill()}}});
 c.restore();if((ck||s.pieces.length)&&s.T>120&&!mini)steam(c,x,y,R,cl((s.T-120)/80)*.6,t);if(s.smoke>0)smoke(c,x,y,R,s.smoke,t);
 if(s.lid){c.fillStyle='rgba(220,230,240,.35)';c.beginPath();c.ellipse(x,y-R*.02,R*.95,RY*.92,0,0,7);c.fill();c.strokeStyle='#c8ccd2';c.lineWidth=R*.03;c.stroke();c.fillStyle='#333';c.beginPath();c.ellipse(x,y-R*.06,R*.1,R*.05,0,0,7);c.fill()}}
function cooker(c,s,x,y,R,t,mini){
 if(s.phase==='prep'||s.peek){const RY=R*.5;c.fillStyle=s.kind==='dg'?'#c8322a':'#f4f2ee';c.beginPath();c.ellipse(x,y,R*1.05,RY*1.05,0,0,7);c.fill();c.fillStyle='#9ea2a8';c.beginPath();c.ellipse(x,y,R*.93,RY*.91,0,0,7);c.fill();
  if(s.kind==='dg'&&s.ow>0){c.fillStyle='rgba(200,225,240,.75)';c.beginPath();c.ellipse(x,y,R*.92,RY*.9,0,0,7);c.fill()}
  const ir=s.kind==='dg'?.72:.86;c.fillStyle='#d8dce2';c.beginPath();c.ellipse(x,y,R*ir,RY*ir,0,0,7);c.fill();c.save();c.beginPath();c.ellipse(x,y+RY*.04,R*ir*.94,RY*ir*.9,0,0,7);c.clip();c.fillStyle='#8a8e96';c.fillRect(x-R,y-R,R*2,R*2);
  riceBed(c,s,x,y+RY*.04,R*ir*.92,RY*ir*.88,mini);const wl=s.phase==='prep'?s.iw/s.rice:0;
  if(wl>0){const cloud=s.washes<3?.5-.15*s.washes:0;c.fillStyle=`rgba(${232-cloud*20|0},${238-cloud*25|0},${242-cloud*40|0},${Math.min(.85,.3+wl*.25+cloud)})`;c.beginPath();c.ellipse(x,y+RY*.04,R*ir*.94,RY*ir*.9,0,0,7);c.fill();c.strokeStyle='rgba(255,255,255,.4)';c.lineWidth=1.5;c.beginPath();c.ellipse(x-R*.15,y-RY*.2,R*.3,RY*.06,0,0,7);c.stroke()}
  if(s.p>.6&&s.phase!=='prep'){c.fillStyle='rgba(110,100,80,.4)';for(let k=0;k<9;k++){c.beginPath();c.ellipse(x+(rnd(k*11)-.5)*R*ir*1.3,y+(rnd(k*13)-.5)*RY*ir*1.2,R*.03,R*.015,0,0,7);c.fill()}if(s.rest<200)steam(c,x,y,R,.8,t)}
  if(s.fluff){c.fillStyle='rgba(255,255,255,.5)';for(let k=0;k<6;k++){c.beginPath();c.ellipse(x+(rnd(k*17)-.5)*R,y+(rnd(k*19)-.5)*RY,R*.15,R*.05,rnd(k),0,7);c.fill()}}
  c.restore();c.strokeStyle='rgba(60,60,70,.55)';c.lineWidth=1.2;for(let k=1;k<=4;k++){c.beginPath();c.moveTo(x+R*ir*.8,y-RY*.25+k*RY*.1);c.lineTo(x+R*ir*.92,y-RY*.25+k*RY*.1);c.stroke()}return}
 if(s.kind==='dg'){const im=L('v5e_cooker');if(!im.ok)return;const w=R*2.4,h=w*im.naturalHeight/im.naturalWidth,top=y-h*.55;c.drawImage(im,x-w/2,top,w,h);
  const cooking=s.phase==='cook';c.fillStyle=cooking?'#ff3a2a':'#4a2a2a';c.beginPath();c.arc(x-w*.05,top+h*.7,R*.03,0,7);c.fill();c.fillStyle=s.phase==='rest'?'#ffaa2a':'#4a3a2a';c.beginPath();c.arc(x+w*.05,top+h*.7,R*.03,0,7);c.fill();
  c.fillStyle='#222';rr(c,x-w*.025,top+h*(cooking?.82:.76),w*.05,h*.05,2);c.fill();
  const stA=cooking?cl((s.progT-200)/200)*(s.ow>0?1:.2):s.phase==='rest'?.35*Math.max(0,1-s.rest/200):0;if(stA>0)steam(c,x,top+h*.08,R,stA,t,.6)}
 else{const w=R*2.2,h=R*1.5;const g=c.createLinearGradient(x-w/2,0,x+w/2,0);g.addColorStop(0,'#d8d6d2');g.addColorStop(.35,'#fbfaf8');g.addColorStop(1,'#c8c6c2');c.fillStyle=g;rr(c,x-w/2,y-h*.35,w,h,R*.3);c.fill();
  c.fillStyle='#eeece8';c.beginPath();c.ellipse(x,y-h*.35,w*.5,R*.3,0,Math.PI,0);c.fill();c.fillStyle='#9a9a9a';c.beginPath();c.ellipse(x+w*.22,y-h*.47,R*.1,R*.05,0,0,7);c.fill();
  c.fillStyle='#3a4048';rr(c,x-w*.3,y+h*.05,w*.6,h*.3,R*.06);c.fill();c.fillStyle=s.phase==='cook'?'#8af0ff':'#4a6a70';c.font=`700 ${R*.24}px ui-monospace,monospace`;c.textAlign='center';
  c.fillText(s.phase==='cook'?(s.left>=60?String(Math.ceil(s.left/60)):'0'):s.phase==='rest'?'--':'',x,y+h*.26);
  c.fillStyle=s.phase==='rest'?'#ffaa2a':'#555';c.beginPath();c.arc(x-w*.22,y+h*.45,R*.03,0,7);c.fill();c.fillStyle=s.phase==='cook'?'#ff4a3a':'#555';c.beginPath();c.arc(x+w*.22,y+h*.45,R*.03,0,7);c.fill();
  if(s.phase==='cook'&&s.progT>300)steam(c,x+w*.22,y-h*.5,R,cl((s.progT-300)/300)*(s.left<300?.4:1),t,.4)}}
function oven(c,s,x,y,R,t){const w=R*2.6,h=R*1.6;c.save();const g=c.createLinearGradient(0,y-h/2,0,y+h/2);g.addColorStop(0,'#e0483a');g.addColorStop(1,'#a82a20');c.fillStyle=g;rr(c,x-w/2,y-h/2,w,h,R*.12);c.fill();
 c.fillStyle='#f2e2c4';rr(c,x-w*.46,y-h*.4,w*.7,h*.8,R*.06);c.fill();const wx=x-w*.42,wy=y-h*.33,ww=w*.62,wh=h*.62;c.fillStyle='#1a1210';rr(c,wx,wy,ww,wh,R*.04);c.fill();
 c.save();rr(c,wx,wy,ww,wh,R*.04);c.clip();const glow=s.on?.25+.5*s.elem*(.85+.15*Math.sin(t*3)):0;c.fillStyle=`rgba(255,${120+60*glow|0},40,${.12+.35*glow})`;c.fillRect(wx,wy,ww,wh);
 c.strokeStyle=`rgba(255,${80+120*s.elem|0},30,${.25+.75*s.elem})`;c.lineWidth=R*.03;[wy+wh*.08,wy+wh*.92].forEach(yy=>{c.beginPath();c.moveTo(wx+ww*.05,yy);c.lineTo(wx+ww*.95,yy);c.stroke()});
 c.strokeStyle='#777';c.lineWidth=1;c.beginPath();c.moveTo(wx,wy+wh*.78);c.lineTo(wx+ww,wy+wh*.78);c.stroke();
 const P=(px,py,sz,b,puff,coat,ses)=>{c.fillStyle=b>1.3?mix('#c07020','#3a1a08',cl((b-1.3)/.4)):mix(coat?'#f6e2b0':'#f4ead6',coat?'#d8862a':'#e0b880',cl(b/1.1));c.beginPath();c.ellipse(px,py,sz,sz*(.6+.15*puff),0,Math.PI,0);c.lineTo(px+sz,py+sz*.15);c.lineTo(px-sz,py+sz*.15);c.fill();
  c.fillStyle=`rgba(255,255,255,${coat?.35:.1})`;c.beginPath();c.ellipse(px-sz*.25,py-sz*.35,sz*.35,sz*.1,-.3,0,7);c.fill();if(ses){c.fillStyle='#111';for(let k=0;k<5;k++){c.beginPath();c.ellipse(px+(rnd(k+px)-.5)*sz*.6,py-sz*.45-rnd(k)*sz*.1,1.4,.8,0,0,7);c.fill()}}
  if(puff>.3){c.strokeStyle='rgba(250,230,190,.7)';c.lineWidth=1;for(let q=0;q<3;q++){c.beginPath();c.moveTo(px-sz*.95,py+sz*.05-q*sz*.08);c.lineTo(px+sz*.95,py+sz*.05-q*sz*.08);c.stroke()}}};
 if(s.past&&s.past.inOven)for(let k=0;k<6;k++)P(wx+ww*(.18+(k%3)*.32),wy+wh*(.45+Math.floor(k/3)*.28),ww*.1,s.past.b,cl(s.past.p),s.coats,s.sesame);
 if(s.yolks&&s.yolks.inOven)for(let k=0;k<6;k++){const px=wx+ww*(.18+(k%3)*.32),py=wy+wh*(.55+Math.floor(k/3)*.18);c.fillStyle=mix('#f59a20','#e06a10',cl(s.yolks.c));c.beginPath();c.ellipse(px,py,ww*.045,ww*.032,0,0,7);c.fill();if(s.yolks.c>.5){c.fillStyle='rgba(255,220,120,.6)';c.beginPath();c.ellipse(px,py+ww*.03,ww*.06,ww*.012,0,0,7);c.fill()}}
 if(s.door){c.fillStyle='rgba(255,255,255,.18)';c.fillRect(wx,wy,ww,wh)}c.restore();
 c.strokeStyle='rgba(255,255,255,.25)';c.lineWidth=2;c.beginPath();c.moveTo(wx+ww*.1,wy+wh*.12);c.lineTo(wx+ww*.32,wy+wh*.12);c.stroke();
 [[y-h*.2,(s.set-100)/150*4.5-2.25],[y+h*.2,s.on?1:-1]].forEach(([dy,ang])=>{c.fillStyle='#f2e2c4';c.beginPath();c.arc(x+w*.37,dy,R*.17,0,7);c.fill();c.strokeStyle='#5a3a20';c.lineWidth=R*.04;c.beginPath();c.moveTo(x+w*.37,dy);c.lineTo(x+w*.37+Math.sin(ang)*R*.14,dy-Math.cos(ang)*R*.14);c.stroke()});
 c.fillStyle='#5a3a20';c.font=`${R*.1}px sans-serif`;c.textAlign='center';[100,180,250].forEach(v=>{const a=(v-100)/150*4.5-2.25;c.fillText(v,x+w*.37+Math.sin(a)*R*.26,y-h*.2-Math.cos(a)*R*.26+R*.03)});
 c.fillStyle=s.elem>.5?'#ffb020':'#5a2a20';c.beginPath();c.arc(x+w*.37,y,R*.035,0,7);c.fill();
 if(s.door&&s.on)steam(c,x-w*.1,y-h*.45,R,.5,t,1);c.restore();if(s.smoke>0)smoke(c,x,y-h*.5,R,s.smoke,t)}
function wokMini(c,s,x,y,R,t){c.fillStyle='#1c1c20';c.beginPath();c.ellipse(x,y,R,R*.5,0,0,7);c.fill();c.fillStyle='#34343a';c.beginPath();c.ellipse(x,y-R*.05,R*.85,R*.38,0,0,7);c.fill();
 if(s.dirty){c.fillStyle='rgba(120,80,30,.6)';c.beginPath();c.ellipse(x,y,R*.4,R*.15,0,0,7);c.fill()}
 const g=G&&G.chal&&!G.done?G:null;if(g){g.pieces.slice(0,30).forEach((p,i)=>{c.fillStyle=pieceColor(ING[p.id],p.d);c.beginPath();c.arc(x+(rnd(i)-.5)*R*.9,y+(rnd(i+3)-.5)*R*.35,R*.08,0,7);c.fill()});
  if(g.heat&&!s.out){c.fillStyle='rgba(80,130,255,.8)';for(let k=0;k<5;k++){c.beginPath();c.ellipse(x+(k-2)*R*.25,y+R*.5,R*.04,R*.08*g.heat,0,0,7);c.fill()}}
  const mx=Math.max(0,...g.pieces.map(p=>p.d));if(mx>1.45)smoke(c,x,y,R,(mx-1.45)*2,t)}}
function drawSt(c,s,x,y,R,t,mini){const k=s.kind;if(k==='pot'||k==='fryer'||k==='potrice')pot(c,s,x,y,R,t,mini);else if(k==='pan')pan(c,s,x,y,R,t,mini);else if(k==='dg'||k==='ec')cooker(c,s,x,y,R,t,mini);else if(k==='oven')oven(c,s,x,y,R,t);else if(k==='wok')wokMini(c,s,x,y,R,t)}
/* UI */
const css=`#kit .top{padding:6px 10px 2px}#dock{display:none;gap:6px;padding:2px 8px 4px;overflow-x:auto;scrollbar-width:none}#dock.on{display:flex}
.dk{flex:0 0 auto;width:78px;height:62px;border-radius:12px;background:#0006;border:1.5px solid #ffffff22;position:relative;padding:0;overflow:hidden}.dk canvas{width:100%;height:100%;display:block}
.dk.f{border-color:#ffd36b;box-shadow:0 0 0 2px #ffd36b55}.dk.w{animation:dkw 1s infinite}.dk.a{animation:dka .25s infinite;border-color:#ff4a3a}.dk.ok{border-color:#7ddc6f}
@keyframes dkw{50%{border-color:#ffb347}}@keyframes dka{0%{transform:translateX(-2px);background:#ff3a2a44}50%{transform:translateX(2px);background:#0006}}
#kstage{position:relative;flex:1;min-height:0}#kc{position:absolute;inset:0;width:100%;height:100%}
.kctl{display:flex;flex-wrap:wrap;gap:6px;padding:4px 10px;justify-content:center}.kctl button{min-width:56px;height:40px;border-radius:12px;background:#ffffff1a;color:#fff;font-weight:700;font-size:13px;padding:0 10px;border:0}
.kctl .heat{display:flex;gap:6px;flex:1 1 100%}.kctl .heat button{flex:1}.kctl button.on{background:linear-gradient(#ff8a3d,#d9481e)}
#kit .board{max-height:132px;overflow:auto}`;
const sty=document.createElement('style');sty.textContent=css;document.head.appendChild(sty);
const sec=document.createElement('section');sec.id='kit';sec.className='screen';sec.innerHTML=`<div class="top"><button class="ib" id="kback" aria-label="返回"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg></button><div class="ttl" id="kttl"></div><div class="clock" id="kclock">0:00</div></div>
<div id="kstage"><canvas id="kc"></canvas><div class="toast" id="ktoast"></div></div><div class="kctl" id="kctl"></div><div class="board"><div class="tray" id="ktray"></div></div><div class="bottom"><button class="serve" id="kserve">起鍋出菜</button></div>`;
$('#result').before(sec);
const dock=document.createElement('div');dock.id='dock';document.body.appendChild(dock);
function placeDock(){const scr=document.querySelector('.screen.on');const top=scr&&scr.querySelector('.top');if(K&&K.chal&&!K.done&&top&&(scr.id==='kit'||scr.id==='cook')){top.after(dock);dock.classList.add('on')}else dock.classList.remove('on')}
const kc=$('#kc'),kx=kc.getContext('2d');let KW=0,KH=0;function kres(){const r=kc.getBoundingClientRect(),d=Math.min(2.5,devicePixelRatio||1);KW=r.width;KH=r.height;kc.width=KW*d;kc.height=KH*d;kx.setTransform(d,0,0,d,0,0)}
addEventListener('resize',()=>{if($('#kit').classList.contains('on'))kres()});
let ktT;function ktoast(m){const e=$('#ktoast');e.textContent=m;e.className='toast on';clearTimeout(ktT);ktT=setTimeout(()=>e.className='toast',1800)}
const cur=()=>K.st[K.f];
const multi=id=>['water','coldw','bonito','oil','oilf','lard','prawn','eggw','wine','soy'].includes(id)||I5[id].season;
function ctl(){const s=cur();const b=(id,l,on)=>`<button data-a="${id}" class="${on?'on':''}">${l}</button>`;let h='';
 if(s.kind==='wok'){h=s.dirty?b('wash','刷鍋'):'';if(!s.dirty&&K.chal.wokQ.length)h+=K.chal.wokQ.map(r=>b('wk_'+r,'炒 '+RECIPES.find(x=>x.id===r).n)).join('')}
 else if(['pot','fryer','potrice','pan'].includes(s.kind)){h=`<div class="heat">${[0,1,2,3].map(v=>`<button data-h="${v}" class="${s.heat===v?'on':''}">${['關火','小火','中火','大火'][v]}</button>`).join('')}</div>`;
  if(s.kind!=='fryer')h+=b('lid',s.lid?'掀蓋':'蓋鍋蓋');if(s.kind==='pot'||s.kind==='potrice')h+=b('stir','攪拌');if(s.kind==='pot')h+=b('skim','撈浮沫');
  if(s.kind==='fryer')h+=b('chop','插筷子')+b('lift','撈起')+b('mix','離火拌醬');if(s.kind==='pan')h+=b('flip','翻面');
  if(s.kind==='potrice')h+=(s.riceIn?'':b('wash','洗米')+b('addr','米下鍋'))+b('w+','加水')+b('w-','倒掉些水')+b('fluff','翻鬆')}
 else if(s.kind==='dg'||s.kind==='ec'){h=s.phase==='prep'?b('wash','洗米')+b('iw+','內鍋加水')+b('iw-','倒掉些水')+(s.kind==='dg'?b('ow+','外鍋加水'):b('mode',s.mode==='quick'?'快煮':'標準',1))+b('go',s.kind==='dg'?'按下開關':'開始煮飯'):
  (s.kind==='dg'&&s.phase==='rest'?b('ow+','外鍋加水')+b('go','再按一次'):'')+b('peek',s.peek?'蓋上':'開蓋看看')+b('fluff','翻鬆')}
 else if(s.kind==='oven')h=b('pwr',s.on?'關烤箱':'開烤箱',s.on)+b('t-','溫度−')+b('t+','溫度＋')+b('door',s.door?'關門':'開門',s.door)+b('wrap','包餡')+b('in','放入')+b('out','取出');
 h+=b('ff','⏩ 10 分鐘');
 const C=$('#kctl');C.innerHTML=h;C.querySelectorAll('[data-h]').forEach(x=>x.onclick=()=>{audio();const v=+x.dataset.h;if(s.out){s.out=0;s.relit=1}if(v&&!s.heat)sfx('ignite',.5);s.heat=v;ctl()});
 C.querySelectorAll('[data-a]').forEach(x=>x.onclick=()=>act(x.dataset.a));
 const tr=s.tray||[];$('#ktray').innerHTML=tr.map(id=>`<div class="ing ${s.used[id]&&!multi(id)?'used':''}" data-id="${id}">${icon(id)}<span>${I5[id].n}</span></div>`).join('');$('#ktray').parentElement.style.display=tr.length?'':'none';
 $('#ktray').querySelectorAll('.ing').forEach(e=>e.onclick=()=>add(e.dataset.id));
 $('#kserve').textContent=K.chal?(s.kind==='wok'?'結束挑戰':s.served?'已上桌':'這道上桌'):'起鍋出菜';$('#kttl').textContent=K.chal?s.name:K.d.n}
function add(id){const s=cur(),it=I5[id];audio();if(s.used[id]&&!multi(id))return;s.used[id]=(s.used[id]||0)+1;s.order.push([id,K.t,s.T]);
 if(s.kind==='pan')return panAdd(s,id);if(s.kind==='fryer')return fryAdd(s,id);if(s.kind==='oven')return ovAdd(s,id);
 const hot=s.W<8&&s.O>0&&s.T>140;
 if(it.W){const c0=C0(s);s.W+=it.W;s.T=(s.T*c0+22*it.W*4.18)/(c0+it.W*4.18);s.addLog.push(id);sfx(hot?'fry':'drop',.5,.8);if(it.slurry){s.slurry++;s.slurryT=0;s.slurryStir=0}}
 else if(it.O){s.O+=it.O;s.addLog.push(id);sfx('drop',.3)}
 else if(it.pour){if(s.W<50){ktoast('鍋裡沒湯');s.used[id]=0;return}s.egg={t:0,T:s.T,bi:s.bi};for(let k=0;k<7;k++)s.ribbons.push({s:Math.random()*99,set:0,broken:s.T<85});if(s.T<85)s.flecks=1;sfx('egg',.4)}
 else if(it.miso){s.miso=1;s.misoAt=K.t;s.misoT=s.T;s.misoBi=s.bi}
 else if(it.season){s.addLog.push(id);sfx('stir',.2,1.4);if(it.sh)s.items.push({id,c:0,t:0,seed:Math.random()*99})}
 else{const c0=C0(s);s.items.push({id,c:it.pre?.9:0,t:0,seed:Math.random()*99,at:K.t,Tin:s.T,biIn:s.bi});s.T=(s.T*c0+8*(it.m||50)*3.5)/(c0+(it.m||50)*3.5);sfx(hot?'fry':'drop',hot?.6:.45,hot?1:.9)}
 ctl()}
function panAdd(s,id){const it=I5[id];
 if(it.O){s.O+=it.O;sfx('drop',.3)}
 else if(it.cake){s.cake={s:[0,0],up:0,need:110,seed:Math.random()*9,wet:1,at:K.t,T:s.T,flips:0};s.items.forEach(i=>i.inCake=1);sfx(s.T>140?'fry':'drop',.6)}
 else if(it.eggtop){if(s.cake)s.cake.egg=0;sfx('egg',.35)}
 else if(it.slab){for(let k=0;k<6;k++)s.pieces.push({s:[0,0],up:0,need:150,fl:0,flips:0});s.T-=360*3.2*(s.T-22)/(900+s.O*2+360*3.2);sfx(s.T>130?'fry':'drop',.7)}
 else if(id==='sauce'||id==='soysc'){s.sauce=1;s.sauceAt=K.t;sfx('stir',.3)}
 else{s.items.push({id,c:0,t:0,seed:Math.random()*99,at:K.t,inCake:0});sfx(s.T>140?'fry':'drop',.55)}
 ctl()}
function fryAdd(s,id){if(id==='oilf'){s.O+=730;sfx('drop',.3)}
 else if(id==='prawn'){if(!s.O){ktoast('還沒放油');s.used[id]--;return}for(let k=0;k<4;k++)s.shrimp.push({in:1,c:0,b:0,grease:0,t:0,seed:Math.random()*99,Tin:s.T,batch:s.used.prawn});const c0=C0(s);s.T=(s.T*c0+8*60*3.5)/(c0+60*3.5);sfx(s.T>150?'fry':'drop',.8)}
 else if(id==='mayo'||id==='pineapple'){s.used[id]=1}
 ctl()}
function ovAdd(s,id){if(id==='yolk')s.yolks={c:0,wine:0,inOven:0};else if(id==='rwine'){if(s.yolks)s.yolks.wine=1}else if(id==='eggw'){if(s.past&&!s.past.inOven)s.coats++;else{ktoast('先包好');s.used.eggw--}}else if(id==='bsesame'){if(s.past)s.sesame=1}sfx('stir',.2);ctl()}
function act(a){const s=cur();audio();
 if(a==='ff')return K.skip(600);
 if(a==='lid'){s.lid=!s.lid;if(!s.lid&&(s.T>90||s.riceIn&&s.p<1))s.lidOpens++;sfx('click',.4,.8);return ctl()}
 if(a==='stir'){s.stirT=K.t;sfx('stir',.4);if(s.egg&&s.egg.t<5){s.ribbons.forEach(r=>{if(r.set<.6)r.broken=1});s.flecks=1}if(s.slurryT!=null)s.slurryStir=1;if(s.kind==='potrice'&&s.riceIn&&s.p>.15)s.stirRice=(s.stirRice||0)+1;return}
 if(a==='skim'){if(s.foam>.02){s.foam*=.4;s.skims=(s.skims||0)+1;sfx('stir',.3,.7)}return}
 if(a==='chop'){s.chop=1;s.chopAt=K.t;setTimeout(()=>s.chop=0,2500);return}
 if(a==='lift'){s.shrimp.forEach(x=>{if(x.in){x.in=0;x.out=K.t;s.rack.push(x)}});s.shrimp=s.shrimp.filter(x=>x.in);sfx('stir',.4);return}
 if(a==='mix'){if(!s.rack.length){ktoast('還沒撈起蝦');return}s.sauce={at:K.t,hot:s.rack.some(x=>K.t-x.out<45),pine:!!s.used.pineapple,mayo:!!s.used.mayo};sfx('stir',.4);return}
 if(a==='flip'){const ps=s.cake?[s.cake]:s.pieces;if(!ps.length)return;ps.forEach(p=>{p.up=1-p.up;p.fl=.001;p.flips++});if(s.cake)s.items.forEach(i=>i.inCake=1);sfx('stir',.5,1.2);return}
 if(a==='wash'){if(s.kind==='wok'){s.dirty=0;sfx('stir',.5,.8);K.skip(60);return ctl()}s.washes++;sfx('stir',.4,.9);return}
 if(a==='addr'){s.riceIn=1;s.w0=s.W;s.r0=s.W/(s.rice*180);return ctl()}
 if(a==='w+'){const c0=C0(s);s.W+=36;s.T=(s.T*c0+22*150)/(c0+150);return}if(a==='w-'){s.W=Math.max(0,s.W-36);return}
 if(a==='iw+'){s.iw=Math.round((s.iw+.1)*10)/10;return}if(a==='iw-'){s.iw=Math.max(0,Math.round((s.iw-.1)*10)/10);return}
 if(a==='ow+'){s.ow=Math.round((s.ow+.25)*100)/100;sfx('drop',.3);return}
 if(a==='mode'){s.mode=s.mode==='quick'?'std':'quick';return ctl()}
 if(a==='go'){if(s.kind==='dg'&&s.ow<=0){ktoast('外鍋沒水');return}if(!s.iw){ktoast('內鍋沒水');return}if(s.phase==='rest'){s.phase='cook';s.progT=240;s.again=1}else{s.phase='cook';s.progT=0;s.r0=s.iw/s.rice}s.peek=0;sfx('click',.8);return ctl()}
 if(a==='peek'){s.peek=!s.peek;if(s.peek&&s.phase==='cook'){s.lidOpens++;s.progT-=60}sfx('click',.3);return ctl()}
 if(a==='fluff'){if(s.lid||(s.phase&&!s.peek)){ktoast('先打開蓋子');return}s.fluff=1;sfx('stir',.4);return}
 if(a==='pwr'){s.on=!s.on;sfx('click',.6);return ctl()}
 if(a==='t+'){s.set=Math.min(250,s.set+10);sfx('click',.3);return}if(a==='t-'){s.set=Math.max(100,s.set-10);sfx('click',.3);return}
 if(a==='door'){s.door=!s.door;if(s.door){s.opens++;s.To-=15}sfx('click',.5);return ctl()}
 if(a==='wrap'){if(!s.used.flaky||!s.used.redbean||!s.yolks){ktoast('材料不齊');return}if(s.yolks.inOven){ktoast('蛋黃還在烤箱裡');return}if(s.past)return;s.past={p:0,b:0,inOven:0,yolk:s.yolks.c,wine:s.yolks.wine};sfx('chop',.3);return}
 if(a==='in'){if(!s.door){ktoast('門沒開');return}const o=s.past?(s.past.done?null:s.past):s.yolks&&!s.yolks.done?s.yolks:null;if(!o)return;o.inOven=1;o.inT=s.To;o.set=s.set;sfx('click',.4);return}
 if(a==='out'){if(!s.door){ktoast('門沒開');return}if(s.past&&s.past.inOven){s.past.inOven=0;s.past.done=1}else if(s.yolks&&s.yolks.inOven){s.yolks.inOven=0;s.yolks.done=1}sfx('plate',.4);return}
 if(a.startsWith('wk_'))return K.startWok(a.slice(3))}
kc.addEventListener('pointerdown',()=>{if(K&&!K.done){const s=cur();if(s.kind==='pot'||s.kind==='potrice')act('stir')}});
/* kitchen engine */
function makeK(d,chal){const st=d.st.map(([k,nm,tray])=>k==='soup'?mkSt('pot',nm,tray):mkSt(k,nm,tray,k==='fryer'?{O:0}:{}));
 return {d,st,f:0,t:0,chal,done:0,res:{},
  douse(s){/* boil-over on a shared cooktop: neighbour burners with flame can be knocked out too */if(!chal)return;K.st.forEach(o=>{if(o!==s&&o.heat&&(o.kind==='pot'||o.kind==='pan')&&Math.random()<.35){o.out=1;o.ev.out=(o.ev.out||0)+1}})},
  skip(sec){const n=Math.ceil(sec/.5);for(let i=0;i<n;i++)step(.5);draw()},
  startWok(id){wokGo(id)}}}
function step(dt){K.t+=dt;K.st.forEach(s=>{upd(s,dt);s.Tmax=Math.max(s.Tmax||0,s.kind==='oven'?0:s.T)});
 K.st.forEach(s=>{if(s.cake&&s.cake.fl){s.cake.fl+=dt/1.2;if(s.cake.fl>=1)s.cake.fl=0}(s.pieces||[]).forEach(p=>{if(p.fl){p.fl+=dt/1.2;if(p.fl>=1)p.fl=0}})});
 if(K.chal&&G&&G.chal&&!G.done&&!$('#cook').classList.contains('on')){const w=K.st.find(s=>s.kind==='wok');let r=dt/SIM;while(r>0){const q=Math.min(.05,r);update(q);r-=q}}}

function openKit(){show('kit');kres();K.f=Math.min(K.f,K.st.length-1);ctl();placeDock();draw()}
let lastDraw=0;
function tick(dt){if(!K||K.done)return;const onKit=$('#kit').classList.contains('on'),onCook=$('#cook').classList.contains('on');if(!onKit&&!onCook)return;
 let r=dt*SIM;while(r>0){const q=Math.min(.5,r);step(q);r-=q}
 if(K.chal&&G&&G.chal&&!G.done&&onCook){}/* wok steps itself in the main loop */
 if(onKit)draw();audioMix(onKit);drawDock();
 const clk=K.chal?(K.t<=1800?'剩 '+fmt(1800-K.t):'超時 '+fmt(K.t-1800)):fmt(K.t);$('#kclock').textContent=clk;if(K.chal&&onCook)$('#clock').textContent=clk;
 if(onKit){const nt=performance.now();if(nt-lastDraw>700){lastDraw=nt;const s=cur();const tr=$('#ktray');if(tr&&s.tray)tr.querySelectorAll('.ing').forEach(e=>e.classList.toggle('used',!!(s.used[e.dataset.id]&&!multi(e.dataset.id))))}}}
function audioMix(onKit){if(!AC)return;let boil=0,sim=0,fry=0,crk=0;const S=onKit?[cur()]:K.st;
 S.forEach(s=>{const v=onKit?1:.25;if(s.kind==='pot'||s.kind==='potrice'){if(s.W>8){if(s.bi>.6)boil+=v*(.35+.3*s.bi);else if(s.T>80)sim+=v*.4*cl((s.T-80)/20+.2)}else if(s.T>140&&s.O)fry+=v*cl((s.T-140)/60)*.7}
  if(s.kind==='fryer'&&s.O){fry+=v*cl((s.T-120)/60)*.35+v*s.shrimp.filter(x=>x.in).length*.12*Math.max(.2,1-s.shrimp.reduce((a,x)=>a+x.c,0)/Math.max(1,s.shrimp.length))}
  if(s.kind==='pan'&&(s.pieces.length||s.cake||s.items.length))fry+=v*cl((s.T-110)/70)*.7;
  if(s.kind==='dg'&&s.phase==='cook'&&s.progT>240)sim+=v*.25;if(s.kind==='ec'&&s.phase==='cook'&&s.progT>400)sim+=v*.18;
  if(s.kind==='oven'&&s.past&&s.past.inOven&&s.To>150)crk+=v*.15;if(s.spill)crk+=v*.5});
 loopG('boil',Math.min(.8,boil));loopG('simmer',Math.min(.6,sim));loopG('sizzle',Math.min(.8,fry));loopG('crackle',Math.min(.5,crk))}
function silence(){['boil','simmer','sizzle','crackle'].forEach(n=>loopG(n,0))}
function draw(){if(!KW)return;const c=kx,t=performance.now()/1000;c.clearRect(0,0,KW,KH);
 const bg=c.createLinearGradient(0,0,0,KH);bg.addColorStop(0,'#3a3430');bg.addColorStop(.45,'#4a423c');bg.addColorStop(.46,'#26221f');bg.addColorStop(1,'#1a1715');c.fillStyle=bg;c.fillRect(0,0,KW,KH);
 c.fillStyle='rgba(255,255,255,.04)';for(let i=0;i<KW;i+=36)c.fillRect(i,0,1,KH*.45);for(let j=0;j<KH*.45;j+=36)c.fillRect(0,j,KW,1);
 const s=cur(),R=Math.min(KW*.36,KH*.33);drawSt(c,s,KW/2,KH*.5,R,t,0);
 if(K.st.length>1&&!K.chal){K.st.forEach((o,i)=>{const x=24+i*58,y=KH-30;c.fillStyle=i===K.f?'#ffd36b':'#ffffff33';c.beginPath();c.arc(x+18,y,20,0,7);c.fill();c.fillStyle='#000a';c.font='12px sans-serif';c.textAlign='center';c.fillText(o.name.slice(0,2),x+18,y+4)})}}
kc.addEventListener('click',e=>{if(!K||K.chal||K.st.length<2)return;const r=kc.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;K.st.forEach((o,i)=>{if(Math.hypot(x-(42+i*58),y-(KH-30))<22){K.f=i;ctl()}})});
/* dock */
function drawDock(){if(!K||!K.chal){dock.classList.remove('on');return}placeDock();const t=performance.now()/1000;
 if(dock.children.length!==K.st.length){dock.innerHTML=K.st.map((s,i)=>`<button class="dk" data-i="${i}" aria-label="${s.name}"><canvas width="156" height="124"></canvas></button>`).join('');dock.querySelectorAll('.dk').forEach(b=>b.onclick=()=>focus(+b.dataset.i))}
 const onCook=$('#cook').classList.contains('on');
 K.st.forEach((s,i)=>{const b=dock.children[i],cv=b.firstChild,x=cv.getContext('2d');x.setTransform(2,0,0,2,0,0);x.clearRect(0,0,78,62);x.fillStyle='#221e1b';x.fillRect(0,0,78,62);drawSt(x,s,39,32,20,t,1);
  if(s.served){x.fillStyle='#0008';x.fillRect(0,0,78,62)}
  const wokAl=s.kind==='wok'&&G&&G.chal&&!G.done&&Math.max(0,...G.pieces.map(p=>p.d))>1.4;
  const foc=s.kind==='wok'?onCook:(!onCook&&i===K.f);b.className='dk'+(foc?' f':'')+(s.served?' ok':(s.alarm||wokAl?' a':s.warn?' w':''))})}
function focus(i){const s=K.st[i];audio();if(s.kind==='wok'){if(G&&G.chal&&!G.done){G.bg=0;show('cook');resize();setHeatUI();renderTray();renderChips();placeDock();return}K.f=i;openKit();return}
 if(G&&G.chal&&!G.done)G.bg=1;K.f=i;openKit()}
function wokGo(id){const w=K.st.find(s=>s.kind==='wok');K.chal.wokQ=K.chal.wokQ.filter(x=>x!==id);start(id);G.chal=1;G.bg=0;placeDock()}
function wokServe(){const r=G.r;G.done=true;if(AC){sizzleG.gain.setTargetAtTime(0,AC.currentTime,.1);fireG.gain.setTargetAtTime(0,AC.currentTime,.1)}const res=evaluate();
 K.res[r.id]={score:res.score,safe:res.tips.some(x=>x.t==='safe'),tips:res.tips,at:K.t,n:r.n};sfx('plate',.6);
 const w=K.st.find(s=>s.kind==='wok');w.dirty=1;G=null;K.f=K.st.indexOf(w);openKit()}
function back(){if(K&&K.chal&&$('#cook').classList.contains('on')){if(G)G.bg=1;K.f=0;openKit();return true}return false}
$('#kback').onclick=()=>{silence();if(G)G=null;K=null;dock.classList.remove('on');home()};
$('#kserve').onclick=()=>{audio();if(!K)return;if(!K.chal)return serve5();const s=cur();if(s.kind==='wok')return finishChal();if(s.served)return;
 const id=s.dish;const ev=evalSt(s,D5[id]?id:s.dish);K.res[id]={...ev,at:K.t,n:D5[id].n};s.served=1;s.heat=0;sfx('plate',.6);
 if(id==='tofu'){/* pan freed: same burner becomes the soup pot */const p=mkSt('pot','湯鍋',['water','laver','salt','pepper','egg','scallion','sesoil']);p.dish='souplav';K.st[K.f]=p;}
 ctl();drawDock();if(K.st.every(x=>x.served||x.kind==='wok')&&!K.chal.wokQ.length&&!(G&&G.chal))finishChal()};
function startChal(){K=makeK({n:'三菜一湯',st:[]},{wokQ:['cab','bef']});
 const rc=mkSt('ec','電子鍋');rc.dish='riceec';rc.mode='quick';rc.rice=3;const w=mkSt('wok','炒鍋');w.served=0;const p=mkSt('pan','平底鍋',['oil','tofup','soysc','scallion']);p.dish='tofu';
 K.st=[rc,w,p];K.f=0;G=null;openKit();dock.innerHTML='';drawDock()}
/* evaluation: safe(食安) qual(扣分) var(也可以) soft(建議) good */
function evalSt(s,id){const tp=[];let sc=100;const P=(p,m,t='qual')=>{sc-=p;tp.push({p,msg:m,t})},V=m=>tp.push({msg:m,t:'var'}),S=m=>tp.push({msg:m,t:'soft'});
 const it=n=>s.items.filter(i=>i.id===n),has=n=>!!s.used[n],minC=n=>Math.min(9,...it(n).map(i=>i.c));
 if(s.gas>3)P(10,'溢鍋把火澆熄後瓦斯還開著：先關火、開窗，確認沒瓦斯味再重新點火。','safe');
 else if(s.ev.out)P(4,'湯溢出把爐火澆熄了。');
 if(s.ev.spill&&!s.ev.out)P(4,'溢鍋了：快滾時轉小火或打開蓋子，別裝太滿。');
 if(s.dry>20)P(25,'空鍋乾燒：鍋子會變形、塗層會釋出有害煙。');
 if(s.scorch>.3&&s.kind!=='potrice'&&s.dry<=20)P(Math.min(18,Math.round(6+s.scorch*8)),'鍋底燒焦了，焦味會帶進整鍋。');
 if((s.Tmax||0)>240&&(s.kind==='fryer'||s.kind==='pan'))P(12,'油溫超過 240°C 冒濃煙，有起火風險。','safe');
 const rice=(r0,lo,hi,ilo,ihi)=>{if(r0<lo-.001)P(12,`水太少（米水約 1:${r0.toFixed(2)}），飯會硬、帶生心。`);else if(r0>hi+.001)P(10,`水太多（米水約 1:${r0.toFixed(2)}），飯會爛糊。`);else if(r0<ilo-.001||r0>ihi+.001)V(`米水 1:${r0.toFixed(2)}：偏${r0<ilo?'Q硬':'軟'}，也是常見口味。`);else tp.push({msg:`米水 1:${r0.toFixed(2)} 剛好。`,t:'good'})};
 const egg=()=>{if(!has('egg'))return P(12,'沒有蛋花。');if(s.ribbons.some(r=>r.set<.8))P(14,'蛋花還沒凝固就起鍋。','safe');if(s.egg.T<85)P(7,'湯沒滾就下蛋，蛋液散成混濁的碎末。');else if(s.flecks)P(5,'蛋液剛下就攪，蛋花碎掉。等 5–15 秒定型再推。');else if(s.egg.bi>.7)V('大滾時下蛋：蛋花較碎、較蓬，也可以。');else tp.push({msg:'小滾時慢慢倒、先不攪，蛋花成片。',t:'good'})};
 const k=s.kind;
 if(k==='dg'||k==='ec'){if(s.phase==='prep')return{score:0,safe:false,tips:[{p:100,msg:'飯還沒煮。',t:'qual'}]};
  rice(s.r0,1.1,1.3,1.15,1.25);if(s.p<.95)P(15,'飯還沒熟就起鍋，米心是生的。');if(k==='dg'&&s.again)V('外鍋再加水按一次：讓飯更軟、更透，也可以。');
  if(s.phase==='rest'&&K.t-s.t0<480&&k==='dg')P(4,'跳起後沒燜就開：再燜 10–15 分鐘米粒更均勻。');
  if(s.lidOpens)P(Math.min(6,2*s.lidOpens),'煮的中途掀蓋，熱氣跑掉。');if(!s.washes)V('沒洗米：免洗米可以不洗，一般米輕洗 2–3 次口感較清爽。');
  if(k==='ec'&&s.mode==='quick')V('快煮模式：省時間，米粒稍硬一點。');if(!s.fluff)S('煮好後用飯匙由底翻鬆，散出多餘水氣。')}
 else if(k==='potrice'){if(!s.riceIn)return{score:0,safe:false,tips:[{p:100,msg:'米還沒下鍋。',t:'qual'}]};rice(s.r0,1.2,1.5,1.25,1.4);
  if(s.p<.95)P(15,'飯還沒熟，米心硬。');if(s.crust>1)P(Math.min(18,Math.round(s.crust*8)),'鍋底燒焦：滾了以後要轉最小火、蓋蓋。');else if(s.crust>.3)V('鍋底有一層鍋巴，香脆，也可以。');
  if(s.lidOpens>1)P(Math.min(6,2*(s.lidOpens-1)),'燜煮中常掀蓋，蒸氣跑掉，飯會夾生。');if(s.stirRice>2)P(5,'米下鍋滾後一直攪，飯會黏糊。');if(s.rest<500)P(3,'關火後再燜 10–15 分鐘，米粒才會均勻熟透。');if(!s.fluff)S('燜好打開翻鬆再盛。')}
 else if(id==='souptom'||id==='souplav'){if(id==='souptom'){if(!has('tomato'))P(15,'沒有番茄。');else if(minC('tomato')<.9)P(6,'番茄還沒煮軟出色，湯偏淡。');if(has('oil'))V('番茄先用油炒過：湯色更紅、更香。')}
  else{if(!has('laver'))P(15,'沒有紫菜。');if(minC('laver')>8)S('紫菜久煮會散，起鍋前下就好。')}
  egg();if(!has('salt'))P(5,'沒調味。')}
 else if(id==='soupcorn'){if(!has('ribs'))P(25,'沒有排骨。');else{if(it('ribs').some(i=>(i.sf||0)<900))P(25,'排骨還沒燉透，骨邊可能還帶血。','safe');else if(minC('ribs')<.8)P(6,'排骨燉得不夠久，肉還硬。')}
  if(s.foam>.3)P(5,'浮沫沒撈，湯會混濁有腥味。');else if(s.skims)tp.push({msg:'有撈浮沫，湯清。',t:'good'});if(has('corn')&&minC('corn')<.8)P(4,'玉米還沒煮透。');if(!has('salt'))P(5,'沒調味。');if(has('ginger'))V('加薑片去腥。')}
 else if(id==='soupmiso'){if(!has('miso'))P(20,'沒有味噌。');else if(s.misoBoil>20)P(7,'味噌下鍋後還大滾：香氣會散。下味噌後保持不滾。');else tp.push({msg:'味噌最後下、不滾，香氣保住。',t:'good'});
  if(has('tofu')&&minC('tofu')<.8)P(4,'豆腐還是冰的。');if(has('wakame')&&minC('wakame')>6)S('海帶芽泡開就好，久煮會糊。')}
 else if(id==='misua'){if(!has('misua'))P(25,'沒有麵線。');else if(minC('misua')<.9)P(8,'麵線還沒煮透。');if(!has('intestine'))P(10,'沒有大腸。');else if(it('intestine').some(i=>(i.hot||0)<120))P(15,'大腸沒有煮到滾燙。','safe');
  if(!s.slurry)P(8,'沒勾芡，湯不夠濃稠。');else if(s.lumps)P(6,'粉水下鍋沒馬上推，結成粉塊。');if(has('vinegar')||has('garlicm')||has('cilantro'))V('烏醋、蒜泥、香菜：依口味加。');if(!has('intestine')&&has('oyster'))V('蚵仔麵線也是經典做法。')}
 else if(k==='pot'&&(id==='lrf'||id==='bnmA')){const m=id==='lrf'?'belly':'shank',nm=I5[m].n;
  if(!has(m))P(40,`沒有${nm}。`);else{if(it(m).some(i=>(i.sf||0)<900))P(25,`${nm}還沒燉透。`,'safe');const c=minC(m);if(c<.85)P(Math.round(8+(1-c)*20),`${nm}燉得不夠久，${id==='lrf'?'肥肉不夠透亮':'肉筋還咬不動'}。`);else if(c>I5[m].over)P(6,`燉過頭，${nm}散成渣。`);else tp.push({msg:`${nm}燉得軟透入味。`,t:'good'})}
  if(id==='lrf'){if(!has('shallot'))S('紅蔥頭酥是滷肉飯的香氣來源。');else if(it('shallot').some(i=>i.c>1.35))P(8,'紅蔥頭炸焦會苦，金黃就要撈或下料。');if(!has('soy'))P(10,'沒有醬油，顏色和味道都不夠。');if(has('rsugar'))V('加冰糖：顏色亮、味道圓。');if(has('begg'))V('滷蛋一起滷。')}
  else{if(!has('doubanjiang')&&!has('soy'))V('清燉牛肉麵：不加豆瓣醬油，也是正統做法。');else if(has('doubanjiang')&&it('doubanjiang').some(i=>i.c>1.4))P(8,'豆瓣醬炒焦會苦。');if(s.foam>.3)P(4,'燉之前沒撈血沫。');if(has('daikon'))V('加白蘿蔔，湯更清甜。')}}
 else if(id==='bnmB'){if(!has('noodle'))P(40,'沒有麵。');else{const c=minC('noodle');if(c<.85)P(10,'麵還沒熟，有硬芯。');else if(c>1.6)P(8,'麵煮太久，軟爛。')}if(has('coldw'))V('點冷水：麵更有彈性。');if(has('bokchoy'))tp.push({msg:'燙青江菜配色。',t:'good'})}
 else if(k==='fryer'){const R=s.rack;if(!R.length)return{score:0,safe:false,tips:[{p:100,msg:'蝦還沒炸。',t:'qual'}]};
  if(R.some(x=>x.c<1))P(20,'有蝦沒熟透，中心還是透明。','safe');const b=R.reduce((a,x)=>a+x.b,0)/R.length,gr=R.reduce((a,x)=>a+x.grease,0)/R.length;
  if(b>1.3)P(10,'炸過頭，外皮深褐發苦。');else if(b<.45)P(6,'油溫不夠，外皮太白不酥。');else tp.push({msg:'外皮金黃酥脆。',t:'good'});if(gr>.5)P(6,'油溫太低下鍋，蝦吸油變油膩。');
  if(!s.sauce)P(10,'沒拌美乃滋。');else if(s.sauce.hot)P(5,'蝦剛起鍋就拌，美乃滋遇熱出油。稍微放涼再拌。');if(s.sauce&&s.sauce.pine)V('加鳳梨片。')}
 else if(id==='oaj'){const c=s.cake;if(!c)return{score:0,safe:false,tips:[{p:100,msg:'還沒下粉漿。',t:'qual'}]};
  if(!has('oyster'))P(15,'沒有蚵仔。');else if(it('oyster').some(i=>i.c<1))P(15,'蚵仔沒熟透。','safe');if(c.egg==null)P(8,'沒有蛋。');else if(c.egg<1)P(10,'蛋還沒凝固。','safe');
  const lo=Math.min(...c.s),hi=Math.max(...c.s);if(lo<.55)P(10,'粉漿還沒熟，白濁黏糊；要煎到半透明。');if(hi>1.45)P(10,'煎焦了。');else if(hi>.9&&lo>.7)tp.push({msg:'粉漿透明 Q 彈，邊緣酥脆。',t:'good'});
  if(!s.sauce)S('淋上海山醬（甜辣醬）。');if(has('lard'))V('用豬油煎更香。');if(!c.flips)P(6,'沒翻面，另一面還是生的。')}
 else if(id==='tofu'){if(!s.pieces.length)return{score:0,safe:false,tips:[{p:100,msg:'豆腐還沒下鍋。',t:'qual'}]};
  const ps=s.pieces;const raw=ps.filter(p=>Math.min(...p.s)<.6).length,brn=ps.filter(p=>Math.max(...p.s)>1.45).length;
  if(raw)P(Math.min(12,raw*3),'有豆腐沒煎上色，表皮不脆。');if(brn)P(Math.min(14,brn*3),'豆腐煎焦了。');if(!raw&&!brn)tp.push({msg:'兩面金黃。',t:'good'});if(!s.sauce)S('起鍋前淋醬油膏、撒蔥花。')}
 else if(k==='oven'){const y=s.yolks,p=s.past;if(!p||!p.done)return{score:0,safe:false,tips:[{p:100,msg:'蛋黃酥還沒烤好出爐。',t:'qual'}]};
  if(p.yolk<.6)P(10,'鹹蛋黃沒先烤，吃起來腥、帶生水。');else if(p.yolk>1.6)P(5,'蛋黃預烤太久，乾硬。');if(p.wine)V('噴米酒去腥。');else S('預烤蛋黃前噴點米酒，去腥。');
  if(p.p<.9)P(12,'酥皮還沒烤熟，中心生。');if(p.b>1.45)P(12,'烤焦了。');else if(p.b<.6)P(6,'顏色太淺，不夠金黃。');else tp.push({msg:'表面金黃、層次分明。',t:'good'});
  if(!s.coats)S('刷蛋黃液表面會更亮更金。');else if(s.coats>=2)V('刷兩層蛋黃液，顏色更深亮。');if(s.sesame)V('撒黑芝麻。');if((p.inT||0)<s.set-25)P(5,'烤箱沒預熱就放進去，酥皮會塌。');if(s.opens>4)P(3,'太常開烤箱門，溫度一直掉。')}
 sc=Math.max(0,Math.min(100,Math.round(sc)));return{score:sc,safe:tp.some(x=>x.t==='safe'),tips:tp}}
const SUB={lrf:[['lrf',.75],['riceec',.25]],bnm:[['bnmA',.7],['bnmB',.3]]};
function stars(sc){return sc>=90?3:sc>=70?2:sc>=45?1:0}
function serve5(){const id=K.id;let score=0,tips=[],safe=false;
 if(SUB[id]){SUB[id].forEach(([sid,w],i)=>{const e=evalSt(K.st[i],sid);score+=e.score*w;safe=safe||e.safe;tips.push(...e.tips.map(t=>({...t,msg:(K.st[i].name+'：')+t.msg})))})}
 else{const e=evalSt(K.st[0],id);score=e.score;safe=e.safe;tips=e.tips}
 score=Math.round(score);showRes(id,D5[id].n,score,tips,safe?Math.min(stars(score),1):stars(score))}
function showRes(id,n,score,tips,st,extra){K.done=1;silence();dock.classList.remove('on');
 lastRes={score,stars:st,tips,know:null};V5last={id,n,score,stars:st};
 if(!best[id]||score>best[id]){best[id]=score;localStorage.setItem('wokBest',JSON.stringify(best))}
 show('result');$('#rname').textContent=n;$('#stars').innerHTML=[0,1,2].map(i=>STAR(i<st)).join('');
 const TAG={safe:'食安',qual:'扣分',var:'也可以',soft:'建議',good:'很好'};const ord={safe:0,qual:1,good:2,var:3,soft:4};
 tips=tips.slice().sort((a,b)=>ord[a.t]-ord[b.t]||(b.p||0)-(a.p||0));
 $('#tips').innerHTML=(extra||'')+tips.slice(0,9).map(t=>`<div class="tip ${t.t}">${t.t==='safe'||t.t==='qual'?TIPI.bad:TIPI.good}<div><em>${TAG[t.t]}</em>${t.msg}</div>${t.p?`<span class="pt">-${t.p}</span>`:''}</div>`).join('');
 const ch=challenge&&challenge.r===id?challenge:null;$('#vs').textContent=ch?(score>ch.s?`贏過朋友的 ${ch.s} 分！`:score===ch.s?`和朋友同分（${ch.s}）`:`朋友 ${ch.s} 分，還差 ${ch.s-score} 分`):`這道最佳：${best[id]} 分`;
 let k=0;const sc=$('#score');const iv=setInterval(()=>{k=Math.min(score,k+3);sc.textContent=k;if(k>=score)clearInterval(iv)},16);sfx(st>=2?'win':'ding',.6);
 const pc=$('#platec'),x=pc.getContext('2d'),r=pc.getBoundingClientRect(),dp=Math.min(2.5,devicePixelRatio||1);pc.width=r.width*dp;pc.height=r.height*dp;x.setTransform(dp,0,0,dp,0,0);
 const im=L(D5[id].img);const pd=()=>{x.clearRect(0,0,r.width,r.height);if(!im.ok)return;const ir=im.naturalWidth/im.naturalHeight,cr=r.width/r.height;let sw=im.naturalWidth,sh=im.naturalHeight,sx=0,sy=0;if(ir>cr){sw=sh*cr;sx=(im.naturalWidth-sw)/2}else{sh=sw/cr;sy=(im.naturalHeight-sh)/2}
  x.save();x.beginPath();x.roundRect(0,0,r.width,r.height,16);x.clip();x.drawImage(im,sx,sy,sw,sh,0,0,r.width,r.height);if(score<45){x.fillStyle='rgba(40,20,10,.35)';x.fillRect(0,0,r.width,r.height)}x.restore()};
 if(im.ok)pd();else im.addEventListener('load',pd,{once:true})}
let V5last=null;
function finishChal(){if(!K||K.done)return;const C=K.chal,ids=['riceec','cab','bef','tofu','souplav'];
 if(G&&G.chal&&!G.done)wokServe();
 K.st.forEach(s=>{if(s.dish&&!s.served&&!K.res[s.dish]){const e=evalSt(s,s.dish);K.res[s.dish]={...e,at:K.t,n:D5[s.dish].n}}});
 let sum=0,tips=[],safe=true,done=true;
 ids.forEach(id=>{const r=K.res[id],nm=(D5[id]||RECIPES.find(x=>x.id===id)).n;if(!r){done=false;tips.push({p:20,msg:`${nm}沒有完成。`,t:'qual'});return}
  let s=r.score;if(K.t-r.at>480&&id!=='riceec'){s-=5;tips.push({p:5,msg:`${nm}太早做好，上桌時已經涼了。`,t:'qual'})}
  if(r.safe){safe=false;tips.push({msg:`${nm}：${(r.tips.find(t=>t.t==='safe')||{}).msg||'有食安問題'}`,t:'safe'})}
  sum+=Math.max(0,s);const top=(r.tips||[]).filter(t=>t.t==='qual').sort((a,b)=>b.p-a.p)[0];if(top)tips.push({...top,msg:`${nm}：${top.msg}`})});
 const sc=Math.round(sum/ids.length),inT=K.t<=1800;if(!inT)tips.push({msg:`超時 ${fmt(K.t-1800)}：不算失敗，但拿不到 2 星以上。`,t:'soft'});else tips.push({msg:`用時 ${fmt(K.t)}。`,t:'good'});
 const st=!done||!safe?0:sc>=95&&inT?3:sc>=85&&inT?2:1;
 const rows=`<div class="tip k"><div><em>五道菜</em>${ids.map(id=>{const r=K.res[id];return`${(D5[id]||RECIPES.find(x=>x.id===id)).n} ${r?r.score:'—'}`}).join('・')}</div></div>`;
 if(G){G=null}showRes('chal','三菜一湯 30 分鐘',sc,tips,st,rows)}
/* home/result wiring */
const oAgain=$('#again').onclick,oShare=$('#share').onclick;
$('#again').onclick=()=>{if(V5last&&$('#rname').textContent===V5last.n){startV5(V5last.id);return}oAgain()};
$('#share').onclick=async()=>{if(!(V5last&&$('#rname').textContent===V5last.n))return oShare();const {id,n,score,stars:s}=V5last;const url=location.href.split('#')[0]+`#c=${id}-${score}`;
 const text=`我在「熱炒小廚房」做了${n}，拿到 ${score} 分 ${'★'.repeat(s)}${'☆'.repeat(3-s)}\n敢來挑戰嗎？`;
 try{if(navigator.share){await navigator.share({title:'熱炒小廚房',text,url});return}}catch(e){return}try{await navigator.clipboard.writeText(text+'\n'+url);toastR('已複製挑戰連結')}catch(e){prompt('複製這段分享：',text+'\n'+url)}};
function startV5(id){K=null;G=null;if(id==='chal')return startChal();K=makeK(D5[id],null);K.id=id;K.st.forEach((s,i)=>s.dish=SUB[id]?SUB[id][i][0]:id);G=null;openKit()}
window.V5={start:id=>{audio();startV5(id)},tick,wokServe,back};
window.__v5={get K(){return K},I5,D5,evalSt,step:sec=>K.skip(sec),act,add,cur,finishChal,focus,serveSt:()=>$('#kserve').onclick()};
parseHash();home();
})();
