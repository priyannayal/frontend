import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Search, Moon, Sun, Bell, Sparkles, ArrowRight, Play, BookOpen,
  Brain, Globe2, FlaskConical, Cpu, Calculator, Landmark, Dna,
  Atom, Code2, Languages, ChevronRight, Zap, Trophy, Clock3,
  Bookmark, UserRound, Settings, CheckCircle2, Lock, Flame, X,
  Menu, Mic, Send, RotateCcw, Target, BarChart3, Star, Layers3
} from "lucide-react";

const topics = [
  {name:"Science", icon:FlaskConical, color:"violet", desc:"Experiments, nature & discovery"},
  {name:"Technology", icon:Cpu, color:"cyan", desc:"AI, software & the digital world"},
  {name:"Math", icon:Calculator, color:"blue", desc:"Numbers, logic & problem solving"},
  {name:"History", icon:Landmark, color:"gold", desc:"Civilizations, events & stories"},
  {name:"Biology", icon:Dna, color:"pink", desc:"Life, cells & living systems"},
  {name:"Physics", icon:Atom, color:"purple", desc:"Matter, energy & the universe"},
  {name:"Coding", icon:Code2, color:"green", desc:"Build, debug & understand code"},
  {name:"Language", icon:Languages, color:"orange", desc:"Languages, words & communication"}
];

const popular = [
  ["Black Holes","Physics","12 min","92% match"],
  ["How AI Works","Technology","9 min","96% match"],
  ["DNA & Genetics","Biology","14 min","88% match"],
  ["JavaScript DOM","Coding","16 min","94% match"],
  ["Solar System","Science","11 min","91% match"],
  ["French Revolution","History","18 min","83% match"]
];

function CosmicBackground(){
  return <div className="cosmic-bg" aria-hidden="true">
    <div className="nebula n1"/><div className="nebula n2"/>
    <div className="stars s1"/><div className="stars s2"/><div className="stars s3"/>
    <div className="floating-orb orb1"/><div className="floating-orb orb2"/>
  </div>
}

function Planet3D({small=false}){
  return <div className={`planet-scene ${small?"small":""}`}>
    <div className="planet-glow"/>
    <div className="planet">
      <div className="planet-shine"/>
      <div className="planet-land land1"/><div className="planet-land land2"/>
      <div className="planet-land land3"/>
    </div>
    <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
    <div className="orbit-dot dot-a"/><div className="orbit-dot dot-b"/>
  </div>
}

function Logo(){
  return <NavLink to="/" className="brand">
    <div className="brand-orbit"><div className="brand-planet"/></div>
    <span>COSMO</span>
  </NavLink>
}

function Navbar({theme,setTheme}){
  const [mobile,setMobile] = useState(false);
  const location = useLocation();
  const links = [["/","Home"],["/explore","Explore"],["/reel","AI Reel"],["/learn","Learn"],["/quiz","Quiz"]];
  return <header className="topbar">
    <Logo/>
    <nav className={`main-nav ${mobile?"open":""}`}>
      {links.map(([to,label])=><NavLink key={to} to={to} className={({isActive})=>isActive?"active":""} onClick={()=>setMobile(false)}>{label}</NavLink>)}
    </nav>
    <div className="nav-actions">
      <button className="icon-btn" onClick={()=>setTheme(theme==="dark"?"light":"dark")} title="Toggle theme">
        {theme==="dark"?<Moon size={19}/>:<Sun size={19}/>}
      </button>
      <NavLink to="/progress" className="icon-btn notification"><Bell size={19}/><i/></NavLink>
      <NavLink to="/profile" className="avatar">P<span>+</span></NavLink>
      <button className="icon-btn mobile-btn" onClick={()=>setMobile(!mobile)}><Menu size={21}/></button>
    </div>
  </header>
}

function Layout({children,theme,setTheme}){
  return <div className={`app ${theme}`}>
    <CosmicBackground/>
    <Navbar theme={theme} setTheme={setTheme}/>
    <main className="page-shell">{children}</main>
    <footer className="footer"><span>© 2026 COSMO</span><span>AI-Powered Learning Universe</span><span>Built for curiosity ✦</span></footer>
  </div>
}

function SearchBox({large=false}){
  const [q,setQ]=useState("");
  const navigate=useNavigate();
  const submit=(e)=>{e.preventDefault(); if(q.trim()) navigate(`/learn?topic=${encodeURIComponent(q.trim())}`)};
  return <form className={`search-box ${large?"large":""}`} onSubmit={submit}>
    <Search size={22}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="What do you want to learn today?"/>
    <button type="submit">Explore <ArrowRight size={17}/></button>
    {large && <button type="button" className="mic"><Mic size={17}/></button>}
  </form>
}

function Home(){
  return <div className="home">
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={15}/> AI-POWERED LEARNING UNIVERSE</div>
        <h1>Learn Anything.<br/><span>Explore Everything.</span></h1>
        <p className="hero-text">Ask COSMO about any topic and turn knowledge into an interactive learning experience.</p>
        <SearchBox large/>
        <div className="hero-trust"><span><Zap size={15}/> AI generated</span><span><Globe2 size={15}/> Any topic</span><span><Brain size={15}/> Adaptive</span></div>
      </div>
      <div className="hero-visual">
        <Planet3D/>
        <div className="ai-float card-3d"><div className="robot">◉‿◉</div><div><b>AI Powered</b><small>Personalized learning<br/>for your curiosity</small></div></div>
        <div className="quote-float">Curiosity<br/>builds a<br/>better you <span>♡</span></div>
      </div>
    </section>

    <section className="feature-grid">
      {[
        [Globe2,"Explore","Discover new topics and expand your world.","/explore"],
        [Play,"AI Reel","Short, smart, and visual learning.","/reel"],
        [BookOpen,"Learn","In-depth knowledge with AI assistance.","/learn"],
        [Brain,"Quiz","Test your knowledge and level up.","/quiz"]
      ].map(([Icon,title,desc,to])=><NavLink to={to} className="feature-card card-3d" key={title}>
        <div className="feature-icon"><Icon size={28}/></div><div><h3>{title}</h3><p>{desc}</p></div><span className="round-arrow"><ArrowRight size={17}/></span>
      </NavLink>)}
    </section>

    <section className="section">
      <div className="section-head"><div><div className="eyebrow"><Sparkles size={14}/> DISCOVER</div><h2>Popular Topics</h2><p>Explore trending topics and start learning today.</p></div><NavLink to="/explore" className="text-link">View All <ArrowRight size={15}/></NavLink></div>
      <div className="topic-grid">{topics.map(t=><TopicCard key={t.name} topic={t}/>)}</div>
    </section>

    <section className="cta-banner card-3d">
      <div><div className="eyebrow"><Sparkles size={14}/> YOUR NEXT ADVENTURE</div><h2>What will you discover next?</h2><p>One question can open an entire universe.</p></div>
      <NavLink to="/explore" className="primary-btn">Start Exploring <ArrowRight size={17}/></NavLink>
    </section>
  </div>
}

function TopicCard({topic}){
  const Icon=topic.icon;
  return <NavLink to={`/explore?topic=${encodeURIComponent(topic.name)}`} className="topic-card card-3d">
    <div className={`topic-icon ${topic.color}`}><Icon size={30}/></div><div><h3>{topic.name}</h3><p>{topic.desc}</p></div><ChevronRight size={18}/>
  </NavLink>
}

function Explore(){
  const [filter,setFilter]=useState("All");
  const filters=["All","Science","Technology","Math","History","Biology","Physics","Coding"];
  const data=filter==="All"?popular:popular.filter(x=>x[1]===filter);
  return <div className="content-page">
    <PageIntro eyebrow="EXPLORE THE UNIVERSE" title="Discover something new." text="Tell COSMO what you're curious about. Every query can become a new interactive learning world."/>
    <SearchBox large/>
    <div className="filter-row">{filters.map(f=><button className={filter===f?"filter active":"filter"} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div>
    <div className="topic-grid explore-topics">{topics.map(t=><TopicCard key={t.name} topic={t}/>)}</div>
    <section className="section compact"><div className="section-head"><div><h2>Recommended for you</h2><p>AI-curated from your learning interests.</p></div></div>
      <div className="lesson-grid">{data.map((x,i)=><LessonCard key={i} data={x}/>)}</div>
    </section>
  </div>
}

function LessonCard({data}){
  return <NavLink to={`/learn?topic=${encodeURIComponent(data[0])}`} className="lesson-card card-3d">
    <div className="lesson-art"><div className="mini-planet"/><span>{data[1]}</span></div>
    <div className="lesson-body"><div className="lesson-meta"><span><Clock3 size={13}/> {data[2]}</span><span className="match">{data[3]}</span></div><h3>{data[0]}</h3><p>Interactive lesson with visual explanations, examples and a quick quiz.</p><div className="lesson-bottom"><span><Star size={14}/> 4.9</span><span>Start <ArrowRight size={14}/></span></div></div>
  </NavLink>
}

function Learn(){
  const params=new URLSearchParams(useLocation().search);
  const initial=params.get("topic")||"How does an earthquake happen?";
  const [topic,setTopic]=useState(initial);
  const [tab,setTab]=useState("Overview");
  const [saved,setSaved]=useState(false);
  const scenes=[
    {n:"01",title:"The hidden trigger",text:"Earth's outer shell is broken into huge tectonic plates. These plates move slowly over time.",type:"plates"},
    {n:"02",title:"Pressure builds",text:"Where plates meet, friction can lock them together while movement continues. Energy accumulates.",type:"pressure"},
    {n:"03",title:"Energy is released",text:"When the locked boundary slips, stored energy travels through Earth as seismic waves.",type:"waves"}
  ];
  return <div className="learn-page">
    <div className="learn-top"><div><div className="eyebrow"><Sparkles size={14}/> AI GENERATED LESSON</div><h1>{topic}</h1><p>Beginner · Interactive · 12 min</p></div><div className="learn-actions"><button className={saved?"icon-btn active-save":"icon-btn"} onClick={()=>setSaved(!saved)}><Bookmark size={19} fill={saved?"currentColor":"none"}/></button><button className="primary-btn" onClick={()=>document.getElementById("lesson-scene")?.scrollIntoView({behavior:"smooth"})}>Start Learning <ArrowRight size={16}/></button></div></div>
    <div className="progress-line"><span style={{width:"28%"}}/></div>
    <div className="lesson-layout">
      <aside className="lesson-side card-3d">
        <b>Lesson map</b>
        {["Overview","How it works","Visual scene","Key ideas","Quick quiz"].map((x,i)=><button key={x} className={tab===x?"side-item active":"side-item"} onClick={()=>setTab(x)}><span>{String(i+1).padStart(2,"0")}</span>{x}<ChevronRight size={14}/></button>)}
      </aside>
      <section className="lesson-main" id="lesson-scene">
        <div className="lesson-intro card-3d"><div className="big-orb"><Planet3D small/></div><div><span className="pill">CORE IDEA</span><h2>Earth can move without us noticing.</h2><p>Most plate motion is incredibly slow. An earthquake happens when that gradual movement suddenly releases built-up energy.</p></div></div>
        {scenes.map(s=><SceneCard scene={s} key={s.n}/>)}
        <div className="key-ideas card-3d"><div className="eyebrow"><Brain size={14}/> REMEMBER</div><h2>3 ideas to keep</h2><div className="remember-grid">{["Plates move","Friction stores energy","Waves carry energy"].map((x,i)=><div key={x}><span>{i+1}</span><b>{x}</b></div>)}</div></div>
        <NavLink to="/quiz" className="quiz-start card-3d"><div><span className="pill">READY?</span><h2>Test what you learned.</h2><p>5 questions · instant feedback · earn XP</p></div><span className="round-arrow"><ArrowRight/></span></NavLink>
      </section>
    </div>
  </div>
}

function SceneCard({scene}){
  return <article className="scene-card card-3d"><div className="scene-number">{scene.n}</div><div className="scene-copy"><h2>{scene.title}</h2><p>{scene.text}</p></div><div className={`scene-visual ${scene.type}`}><div className="plate p1"/><div className="plate p2"/><div className="energy e1"/><div className="wave w1"/><div className="wave w2"/><span>interactive scene</span></div></article>
}

function Reel(){
  const [playing,setPlaying]=useState(false);
  const reels=[
    ["Black Holes","A 60-second journey beyond the event horizon","Physics"],
    ["How AI Thinks","From data to patterns to predictions","Technology"],
    ["DNA","The tiny code that helps build life","Biology"]
  ];
  return <div className="content-page reel-page">
    <PageIntro eyebrow="COSMO REELS" title="Learn in a minute." text="Short visual stories generated from the same knowledge engine that powers your lessons."/>
    <div className="reel-feature card-3d">
      <div className="reel-screen" onClick={()=>setPlaying(!playing)}><div className="reel-space"/><div className="reel-planet"/>{!playing?<button className="play-big"><Play fill="currentColor"/></button>:<div className="playing-ui"><span className="live-dot"/> Playing · 00:24 / 01:00</div>}<div className="reel-title"><span>FEATURED</span><h2>Why do black holes bend light?</h2><p>Physics · 60 sec</p></div></div>
      <div className="reel-info"><span className="pill">AI REEL</span><h2>One concept. One minute. One new perspective.</h2><p>Watch a visual explanation, then jump directly into the full interactive lesson.</p><div className="reel-actions"><button className="primary-btn" onClick={()=>setPlaying(!playing)}>{playing?"Pause":"Watch Reel"} <Play size={15}/></button><NavLink to="/learn?topic=Black%20holes" className="secondary-btn">Explore lesson</NavLink></div></div>
    </div>
    <div className="section compact"><div className="section-head"><div><h2>Trending reels</h2><p>Fresh explanations for curious minds.</p></div></div><div className="reel-grid">{reels.map((r,i)=><div className="small-reel card-3d" key={r[0]}><div className={`reel-thumb rt${i}`}><button className="play-small"><Play size={15} fill="currentColor"/></button><span>{r[2]}</span></div><div><h3>{r[0]}</h3><p>{r[1]}</p></div></div>)}</div></div>
  </div>
}

function Quiz(){
  const questions=[
    {q:"What happens when stored tectonic energy is released?",a:["It becomes sunlight","It travels as seismic waves","It stops plate motion","It creates a new planet"]},
    {q:"What are Earth's large moving outer sections called?",a:["Cloud layers","Tectonic plates","Solar bands","Magnetic rings"]},
    {q:"What can friction do at a plate boundary?",a:["Store energy","Delete energy","Stop gravity","Create oxygen"]}
  ];
  const [idx,setIdx]=useState(0),[selected,setSelected]=useState(null),[score,setScore]=useState(0),[done,setDone]=useState(false);
  const choose=(i)=>{if(selected!==null)return;setSelected(i);if(i===1)setScore(s=>s+1)};
  const next=()=>{if(idx===questions.length-1)setDone(true);else{setIdx(i=>i+1);setSelected(null)}};
  if(done)return <div className="quiz-result card-3d"><div className="result-orb"><Trophy size={42}/></div><div className="eyebrow">QUIZ COMPLETE</div><h1>{score}/{questions.length}</h1><p>Great job! You earned <b>+{score*25+25} XP</b>.</p><div className="result-actions"><button className="primary-btn" onClick={()=>{setIdx(0);setSelected(null);setScore(0);setDone(false)}}><RotateCcw size={16}/> Try Again</button><NavLink className="secondary-btn" to="/progress">View Progress</NavLink></div></div>;
  const q=questions[idx];
  return <div className="quiz-page"><div className="quiz-head"><div><div className="eyebrow"><Brain size={14}/> QUICK QUIZ</div><h1>Check your understanding.</h1></div><span className="quiz-count">{idx+1} / {questions.length}</span></div><div className="quiz-progress"><span style={{width:`${((idx+1)/questions.length)*100}%`}}/></div><div className="quiz-card card-3d"><span className="pill">EARTHQUAKES</span><h2>{q.q}</h2><div className="answers">{q.a.map((a,i)=><button key={a} className={`answer ${selected!==null?(i===1?"correct":selected===i?"wrong":"dim"):""}`} onClick={()=>choose(i)}><span>{String.fromCharCode(65+i)}</span>{a}{selected!==null&&i===1?<CheckCircle2 size={18}/>:null}</button>)}</div><div className="quiz-bottom"><span>{selected===null?"Choose an answer":"Answer locked — continue when ready"}</span><button className="primary-btn" disabled={selected===null} onClick={next}>Continue <ArrowRight size={16}/></button></div></div></div>
}

function Progress(){
  const skills=[["Science",82,FlaskConical],["Technology",71,Cpu],["Coding",64,Code2],["History",48,Landmark]];
  return <div className="content-page"><PageIntro eyebrow="YOUR UNIVERSE" title="Progress & achievements." text="See what you've explored, where you're improving, and what COSMO recommends next."/>
    <div className="stats-grid">{[[Zap,"1,240","XP earned"],[Flame,"7","Day streak"],[BookOpen,"24","Lessons"],[Trophy,"8","Badges"]].map(([I,n,l])=><div className="stat-card card-3d" key={l}><div className="stat-icon"><I size={20}/></div><strong>{n}</strong><span>{l}</span></div>)}</div>
    <div className="progress-layout"><section className="panel card-3d"><div className="panel-head"><div><h2>Concept mastery</h2><p>Your learning map grows with every lesson.</p></div><BarChart3/></div>{skills.map(([n,v,I])=><div className="skill" key={n}><div><span><I size={15}/>{n}</span><b>{v}%</b></div><div className="bar"><span style={{width:`${v}%`}}/></div></div>)}</section>
    <section className="panel card-3d"><div className="panel-head"><div><h2>Weekly goal</h2><p>Keep your curiosity streak alive.</p></div><Target/></div><div className="goal-ring"><div><strong>4/5</strong><span>lessons</span></div></div><div className="goal-days">{["M","T","W","T","F","S","S"].map((d,i)=><span className={i<4?"done":""} key={i}>{i<4?<CheckCircle2 size={15}/>:d}</span>)}</div></section></div>
    <section className="section compact"><div className="section-head"><div><h2>Continue learning</h2><p>Pick up where you left off.</p></div><NavLink className="text-link" to="/explore">Explore more <ArrowRight size={15}/></NavLink></div><div className="lesson-grid">{popular.slice(0,3).map((x,i)=><LessonCard data={x} key={i}/>)}</div></section>
  </div>
}

function Profile(){
  const [edit,setEdit]=useState(false);
  return <div className="profile-page"><div className="profile-hero card-3d"><div className="profile-avatar">P<div className="status"/></div><div className="profile-info"><span className="pill">CURIOUS EXPLORER</span><h1>Priya</h1><p>Learning across worlds · Member since 2026</p><div className="profile-tags"><span>🌌 Explorer</span><span>⚡ Fast learner</span><span>🧠 Curious mind</span></div></div><button className="secondary-btn" onClick={()=>setEdit(!edit)}><Settings size={16}/> {edit?"Close":"Settings"}</button></div>
    <div className="profile-grid"><section className="panel card-3d"><h2>Learning preferences</h2><p>Customize how COSMO teaches you.</p>{[["Difficulty","Adaptive"],["Language","English"],["Learning style","Visual + Interactive"],["Daily goal","20 minutes"]].map(x=><div className="setting-row" key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><ChevronRight size={15}/></div>)}</section><section className="panel card-3d"><h2>Saved topics</h2><p>Your personal constellation of ideas.</p>{["Black Holes","JavaScript DOM","Human Brain"].map((x,i)=><NavLink to={`/learn?topic=${encodeURIComponent(x)}`} className="saved-row" key={x}><span className={`saved-dot d${i}`}/><b>{x}</b><Bookmark size={15} fill="currentColor"/></NavLink>)}</section></div>
  </div>
}

function PageIntro({eyebrow,title,text}){return <div className="page-intro"><div className="eyebrow"><Sparkles size={14}/>{eyebrow}</div><h1>{title}</h1><p>{text}</p></div>}

function NotFound(){return <div className="empty-page"><div className="empty-orbit"><Planet3D small/></div><h1>Lost in space.</h1><p>This page doesn't exist in our universe yet.</p><NavLink to="/" className="primary-btn">Return Home <ArrowRight size={16}/></NavLink></div>}

export default function App(){
  const [theme,setTheme]=useState(localStorage.getItem("cosmo-theme")||"dark");
  useEffect(()=>localStorage.setItem("cosmo-theme",theme),[theme]);
  return <Layout theme={theme} setTheme={setTheme}><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/explore" element={<Explore/>}/>
    <Route path="/learn" element={<Learn/>}/>
    <Route path="/reel" element={<Reel/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/progress" element={<Progress/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></Layout>
}