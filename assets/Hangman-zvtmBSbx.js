import{_ as u,o as i,c as a,a as r,t as d,d as _,r as w,b as A,e as v,F as p,f,n as g,p as k,g as T}from"./index-rrozMge6.js";const b={props:["params"],data(){return{text:this.params.text}},methods:{confirm(){this.$emit("confirm",!0)}}},C={class:"bg"},y={class:"content"};function $(t,s,n,l,h,o){return i(),a("div",C,[r("div",y,[r("p",null,d(h.text),1),r("button",{onClick:s[0]||(s[0]=(...c)=>o.confirm&&o.confirm(...c))},"확인")])])}const P=u(b,[["render",$],["__scopeId","data-v-acae9b71"]]),I=_({name:"Hanman",components:{CAlert:P},props:{},data(){this.getDate();const t=["apple","banana","Orange","Grape","Strawberry","Mango","Pineapple","Watermelon","cherry","kiwi"],s=Math.floor(Math.random()*t.length),n=t[s].toUpperCase(),l=Array.from(n,()=>""),h=Array.from({length:26},(o,c)=>String.fromCharCode(65+c)).map(o=>({letter:o,isPass:void 0}));return{incorrectAttempts:0,answer:n,answerTemp:l,alphabet:h,ctx:{},params:{text:"정답입니다."},isAlert:!1}},mounted(){const t=this.$refs.hangmanCanvas;t&&(this.ctx=t.getContext("2d"),this.ctx.moveTo(20,0),this.ctx.lineTo(20,200),this.ctx.stroke())},methods:{async getDate(){const t=await fetch("https://main--taupe-beijinho-5f10a6.netlify.app/.netlify/functions/rand-word",{method:"get"}).then(s=>s.json());console.log(t),t.success===!0&&(this.answer=t.data,this.answerTemp=Array.from(this.answer,()=>""))},drawHangman(){this.incorrectAttempts>=1&&(this.ctx.moveTo(20,0),this.ctx.lineTo(150,0),this.ctx.stroke()),this.incorrectAttempts>=2&&(this.ctx.moveTo(100,0),this.ctx.lineTo(100,20),this.ctx.stroke()),this.incorrectAttempts>=3&&(this.ctx.beginPath(),this.ctx.arc(100,40,20,0,2*Math.PI),this.ctx.stroke(),this.ctx.fillStyle="black",this.ctx.fill()),this.incorrectAttempts>=4&&(this.ctx.moveTo(100,60),this.ctx.lineTo(100,120),this.ctx.stroke()),this.incorrectAttempts>=5&&(this.ctx.moveTo(100,70),this.ctx.lineTo(60,90),this.ctx.stroke()),this.incorrectAttempts>=6&&(this.ctx.moveTo(100,70),this.ctx.lineTo(140,90),this.ctx.stroke()),this.incorrectAttempts>=7&&(this.ctx.moveTo(100,120),this.ctx.lineTo(70,160),this.ctx.stroke()),this.incorrectAttempts>=8&&(this.ctx.moveTo(100,120),this.ctx.lineTo(130,160),this.ctx.stroke())},checkAnswer(t){if([...this.answer].filter((s,n)=>{t.letter===s&&(t.isPass=!0,this.answerTemp[n]=s)}),!t.isPass){t.isPass=!1,this.incorrectAttempts++,this.drawHangman(),this.incorrectAttempts===8&&(this.params.text="실패했습니다.",this.isAlert=!0);return}this.answerTemp.join("")===this.answer&&(this.isAlert=!0)}}}),x=t=>(k("data-v-efe616cf"),t=t(),T(),t),S=x(()=>r("h1",{class:"mt-7 pt-6"},"행맨",-1)),B={class:"mx-auto",ref:"hangmanCanvas",width:"150",height:"200"},D=x(()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"3"},[r("line",{x1:"0",y1:"0",x2:"100%",y2:"0",stroke:"black","stroke-width":"3"})],-1)),H={class:"input-box mb-8 mt-5"},M=["value"],j={class:"letter-box"},E=["disabled","onClick"];function F(t,s,n,l,h,o){const c=w("CAlert");return i(),a(p,null,[t.isAlert?(i(),A(c,{key:0,params:t.params,onConfirm:s[0]||(s[0]=e=>t.isAlert=!e)},null,8,["params"])):v("",!0),r("section",null,[S,r("canvas",B,null,512),D,r("div",H,[(i(!0),a(p,null,f(t.answerTemp,(e,m)=>(i(),a("input",{type:"text",class:"answer-input",disabled:"",value:e,key:m},null,8,M))),128))]),r("div",j,[(i(!0),a(p,null,f(t.alphabet,e=>(i(),a("button",{key:e.letter,class:g([{fail:e.isPass===!1},{pass:e.isPass}]),disabled:e.isPass===!1||e.isPass,onClick:m=>t.checkAnswer(e)},d(e.letter),11,E))),128))])])],64)}const V=u(I,[["render",F],["__scopeId","data-v-efe616cf"]]);export{V as default};
