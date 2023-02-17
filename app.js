//created by Khulyso.dev

 const playerWindow = document.getElementById("players");
 const audio = document.getElementById("audio");
 const name = document.getElementById("name");
 const category = document.getElementById("category");
 const thumbnail = document.getElementById("thumbnail");
 const playBtn = document.getElementById("playBtn");
 const progress = document.getElementById("progress");
 const ttview = document.getElementById("ttview");
 const tcview = document.getElementById("tcview");
 const volumeBar = document.getElementById("volumeBar");
 
 const musicList = document.getElementById("music-list");
 const body = document.querySelector("body");
 // variable 
 let musicData = [
 {
 id:1,
 category:"Dancehall",
 name:"Faded - Alan Walker",
 src:"",
 image:"",
 },
 {
 id:2,
 category:"Dancehall",
 name:"Chahun ya - Aashiqui-2",
 src:"",
 image:"",
 },
 {
 id:3,
 category:"Dancehall",
 name:"Dil ka lagana",
 src:"",
 image:"",
 },
 {
 id:4,
 category:"Dancehall",
 name:"Tum hi ho",
 src:"",
 image:"",
 },
 {
 id:5,
 category:"Dancehall",
 name:"kaho na pyar hai",
 src:"",
 image:"",
 },
 {
 id:6,
 category:"Dancehall",
 name:"Love me like do",
 src:"",
 image:"",
 },
 {
 id:7,
 category:"Dancehall",
 name:"Stereo Love",
 src:"",
 image:"",
 },
 {
 id:8,
 category:"Dancehall",
 name:"Radhakrishn fluit",
 src:"",
 image:"",
 },
 {
 id:9,
 category:"Dancehall",
 name:"Radhakrishn Love",
 src:"",
 image:"",
 },
 {
 id:10,
 category:"Dancehall",
 name:"Jab bna uska bna",
 src:"",
 image:"",
 },
 {
 id:11,
 category:"Dancehall",
 name:"khamoshiya Aawaj hai",
 src:"",
 image:"",
 },
 {
 id:12,
 category:"Dancehall",
 name:"aasmano me jo khuda",
 src:"",
 image:"",
 papular:15,
 },
 {
 id:13,
 category:"Dancehall",
 name:"Otilia Bilioner",
 src:"",
 image:"",
 },
 {
 id:14,
 category:"Dancehall",
 name:"Tu meri Dost",
 src:"",
 image:"",
 },
 {
 id:15,
 category:"Dancehall",
 name:"milne hai mujhe aayi",
 src:"",
 image:""
 },
 {
 id:16,
 category:"Dancehall",
 name:"O Khuda - hero",
 src:"",
 image:"",
 },
 {
 id:17,
 category:"Dancehall",
 name:"Carryminati - UTuber",
 src:"",
 image:"",
 },
 {
 id:18,
 category:"Dancehall",
 name:"i am coming",
 src:"",
 image:""
 },
 {
id:19,
category:"Dancehall",
name:"Befikra - Disha pathani",
src:"",
image:""
 },
 {
 id:20,
 category:"Dancehall",
 name:"Aap mujhe achhe lgne",
 src:"",
 image:"",
 },
 {
 id:21,
 category:"Dancehall",
 name:"",
 src:"",
 image:"",
 },
{
id:22,
category:"Dancehall",
name:"English medium",
src:"",
image:""
},
 {
 id:23,
 category:"Dancehall",
 name:"deewana Kar Raha - Raaz ",
 src:"",
 image:"",
 },
 {
 id:24,
 category:"Dancehall",
 name:"Let me love you",
 src:"",
 image:"",
 },
 {
 id:25,
 category:"Dancehall",
 name:"Bhula Dena",
 src:"",
 image:"",
 },
 {
 id:26,
 category:"Dancehall",
 name:"Sunny Sunny",
 src:"",
 image:""
 },
 ];
 
let repeatMusic = false;
let index = 1;
let songs = musicData;

const elc = musicList.getElementsByClassName("equalize")[index-1];

const showMusicList = () => {
 document.querySelector(".sec-1").classList.add("hide");
 document.querySelector(".sec-2").classList.remove("hide");
}
const darkMood = () => {
 body.classList.toggle("dark");
}

const setActive = (i) => {
  setEqualizer()
  let a =  musicList.querySelector(".active");
  if(a !== null) {
   a.classList.remove("active");
  }
  const ele = document.getElementsByClassName("music")[i-1];
  ele.classList.add("active");
}

const setData = data => {
 name.textContent = data.name;
 category.textContent = data.category;
 thumbnail.src = data.image;
} 

const playMusic = async (i) => {
  if(i == 18 || i == 10 ) {
   body.classList.toggle("dark");
   setTimeout(() => body.classList.toggle("dark"),7000);
  }
  let data = musicData.find(m => m.id === i) || musicData[1];
  setActive(i)
  setData(data);
  playBtn.textContent = "pause";
  audio.src = data.src;
  await audio.load();
  audio.play();
}
 
 const playPause = e => {
    if(audio.paused) {
    playBtn.textContent = "pause";
    audio.play();
    setEqualizer()
   } else{
   playBtn.textContent = "play_arrow";
    audio.pause();
    setEqualizer(true)
   }
 }
 
 const showplayer = () => {
   playerWindow.classList.toggle("active");
 }
 const equalizerBtn = e => {
  e.target.classList.toggle("active");
  document.querySelector(".thumbnail").classList.toggle("spin");
 }
 const addFvt = e => {
  e.target.classList.toggle("active")
 }
 const repeat = e => {
  e.target.classList.toggle("active")
  repeatMusic = !repeatMusic;
  audio.loop = repeatMusic;
 }
 const volumeBox = e => {
  e.target.classList.toggle("active");
  document.querySelector(".volume-box").classList.toggle("show");
 }
 const nextPlay = () => {
  index++;
  if (index > musicData.length) {
   index = 1;
  }
  playMusic(index);
 }
 const prevPlay = () => {
  index--;
  if (index <= 0) {
  index = musicData.length;
  }
  playMusic(index);
 }
 // eventListners 
 audio.addEventListener("ended", () => {
  nextPlay();
 })
 audio.onloadeddata = () =>  {
 progress.max = audio.duration
 const ds = parseInt(audio.duration % 60)
 const dm = parseInt((audio.duration / 60) % 60)
 ttview.textContent = dm + ':' + ds;
 }
 audio.ontimeupdate =  () =>  { 
   progress.value = audio.currentTime 
 }
 audio.addEventListener('timeupdate', () => {
 //progress.value = audio.currentTime;
 var cs = parseInt(audio.currentTime % 60)
 var cm = parseInt((audio.currentTime / 60) % 60)
  ctview.textContent = cm + ':' + cs;
 }, false);
 
 const changeProgressBar = () => { 
   audio.currentTime = progress.value;
 }
 
/* volume control */
 const volumeDown = () => {
  volumeBar.value = Number(volumeBar.value) - 20
  audio.volume = volumeBar.value / 100
 }
 const volumeUp = () => {
  volumeBar.value = Number(volumeBar.value) + 20
  audio.volume = volumeBar.value / 100
 }
 

 const addList = (data) => {
  let div = document.createElement("div");
  div.classList.add('music');
  div.setAttribute("data-id", data.id);
  let html = `
   <div class="list-thumbnail" >
    <img src="${data.image}" alt="" >
   </div>
   <div class="list-content" >
   <h3>${data.name}</h3>
   <small>${data.category}</small>
   </div>
   <button class="list-btn" >
   <i class="material-icons">play_arrow</i>
    <div class="equalize">
    <span></span>
    <span></span>
    <span></span>
   </div>
   </button>`;
   div.innerHTML = html;
   musicList.append(div);
   div.addEventListener('click', () => {
    playMusic(data.id);
    playerWindow.classList.add("active");
    index = data.id;
   });
 }
 
 const setMusicList =  () => {
  songs.forEach(song => addList(song));
 }
 
 const FirstSetUp = () => {
  audio.src = musicData[index -1].src;
  setData(musicData[index -1]);
  setMusicList();
 }
 FirstSetUp()
 
 const filterCat = (cat) => {
  songs = musicData.filter(song => song.category == cat);
  while(musicList.hasChildNodes()){
    musicList.removeChild(musicList.firstChild);
  }
  setMusicList()
 }
 const filterAll = () => {
  songs = musicData;
  while(musicList.hasChildNodes()){
    musicList.removeChild(musicList.firstChild);
  }
  setMusicList()
 }
function setEqualizer(action = false){
 const elc = musicList.getElementsByClassName("equalize")[index-1];
 const thumb =  document.querySelector(".thumbnail");
 if(elc.classList.contains("pause")) {
   elc.classList.remove("pause")
 } else {
  if(action) {
   elc.classList.add("pause")
  }
 }
 if(thumb.classList.contains("spin") && audio.paused && action){
  thumb.classList.add("pause");
 } else if(thumb.classList.contains("spin") &&!audio.paused){
  thumb.classList.remove("pause");
 }
}

