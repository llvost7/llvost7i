const enterBtn=document.getElementById("enterBtn");
const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const music=document.getElementById("bgMusic");

enterBtn.onclick=()=>{
music.play();
page1.classList.remove("active");
page2.classList.add("active");
};

/* changing arabic long sentences */

const lines=[
"حين أراك يصبح كل شيء أكثر لطفاً",
"وجودك يهدئ قلبي بطريقة لا توصف",
"معك أشعر أن العالم أبطأ وأجمل",
"قربك يشبه الأمان الدافئ",
"كل لحظة معك تبقى في الذاكرة"
];

let i=0;
const text=document.getElementById("arabicLine");

setInterval(()=>{
i=(i+1)%lines.length;
text.textContent=lines[i];
},5000);


/* pastel petal colors (7 shades) */

const colors=[
"#f4d7df",
"#efe7dd",
"#d8c7e8",
"#cfe3e8",
"#dff3df",
"#f2e4ec",
"#e3f0e8"
];

function createPetal(){
const petal=document.createElement("span");

petal.style.left=Math.random()*100+"vw";
petal.style.background=colors[Math.floor(Math.random()*colors.length)];
petal.style.animationDuration=(9+Math.random()*7)+"s";

document.querySelector(".petals").appendChild(petal);

setTimeout(()=>petal.remove(),16000);
}

setInterval(createPetal,280);