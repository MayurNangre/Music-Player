var indexplay = 0;
var audio = new Audio('musics/1.mp3')
var marterplay = document.querySelector(".playbutton")
var playgif = document.querySelector(".gif img")
var playgifsongname = document.querySelector(".gif-songname")
var myrangebar = document.querySelector("#myrangebar")
var musicitems = Array.from(document.getElementsByClassName("music-items"))

let songs = [

   {songname: "dil de chuke sanam", filepath: "musics/1.mp3", coverpath: "Images/1.jpg"},
   {songname: "Reason to Believe", filepath: "musics/2.mp3", coverpath: "Images/2.jpg"},
   {songname: " The Time of My Life", filepath: "musics/3.mp3", coverpath: "Images/3.jpg"},
   {songname: "Baby One More Time", filepath: "musics/4.mp3", coverpath: "Images/4.jpg"},
   {songname: "The 59th Street Bridge Song ", filepath: "musics/5.mp3", coverpath: "Images/5.jpg"},
   {songname: "Achy Breaky Heart", filepath: "musics/6.mp3", coverpath: "Images/6.jpg"},
   {songname: "Across the River", filepath: "musics/7.mp3", coverpath: "Images/7.jpg"},
   {songname: "Addicted to Love", filepath: "musics/8.mp3", coverpath: "Images/8.jpg"},
   {songname: "After the Lovin'", filepath: "musics/9.mp3", coverpath: "Images/9.jpg"},
   {songname: "After the Rain", filepath: "musics/10.mp3", coverpath: "Images/10.jpg"}

]


musicitems.forEach((element, i)=>{
   element.getElementsByTagName('img')[0].src = songs[i].coverpath
   element.getElementsByTagName('span')[0].innerHTML = songs[i].songname
})


marterplay.addEventListener("click",function(){
   if(audio.paused || audio.currentTime<=0){
      audio.play();
      playgif.style.opacity = "1";
      playgifsongname.style.opacity = "1";
      marterplay.classList.remove("fa-play-circle")
      marterplay.classList.add("fa-pause-circle")

   }else{
      audio.pause();
      playgif.style.opacity = "0";
      playgifsongname.style.opacity = "0";
      marterplay.classList.remove("fa-pause-circle")
      marterplay.classList.add("fa-play-circle")
   }

})

audio.addEventListener("timeupdate", ()=>{
   // console.log("timeupdate")

   progress = parseInt((audio.currentTime/audio.duration) * 100)
   // console.log(progress)

   myrangebar.value = progress
})

myrangebar.addEventListener("change", ()=>{

   audio.currentTime = (myrangebar.value * audio.duration)/100;
})


let makeAllpause = ()=>{
   Array.from(document.getElementsByClassName("playitemsong")).forEach((element, i)=>{
      element.classList.remove("fa-pause-circle")
      element.classList.add("fa-play-circle")

   })
}

Array.from(document.getElementsByClassName("playitemsong")).forEach((element, i)=>{
   element.addEventListener('click', (e)=>{

      console.log(e.target);

      indexplay = parseInt((e.target).id)
      
      makeAllpause();
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');

      audio.src = `musics/${indexplay}.mp3`
      audio.currentTime = 0;
      audio.play();
   
      

      marterplay.classList.remove("fa-play-circle")
      marterplay.classList.add("fa-pause-circle")

      playgif.style.opacity = "1";
      playgifsongname.style.opacity = "1";
      playgifsongname.innerHTML = songs[indexplay-1].songname


   })
})

document.getElementById("nextplay").addEventListener("click", ()=>{

   if(indexplay>=10){
      indexplay = 0;
   }else{

      indexplay += 1;
   }

   playgif.style.opacity = "1";
   playgifsongname.style.opacity = "1";
   playgifsongname.innerHTML = songs[indexplay-1].songname

   audio.src = `musics/${indexplay}.mp3`
   audio.currentTime = 0;
   audio.play();
   marterplay.classList.remove("fa-play-circle")
   marterplay.classList.add("fa-pause-circle")


   indexstring = indexplay.toString();
   
   let a = document.getElementById(indexstring)
   makeAllpause();
   a.classList.remove("fa-play-circle")
   a.classList.add("fa-pause-circle")



})

document.getElementById("previousplay").addEventListener("click", ()=>{

   if(indexplay<=0){
      indexplay = 10;
   }else{

      indexplay -= 1;
   }

   playgif.style.opacity = "1";
   playgifsongname.style.opacity = "1";
   playgifsongname.innerHTML = songs[indexplay-1].songname

   audio.src = `musics/${indexplay}.mp3`
   audio.currentTime = 0;
   audio.play();
   marterplay.classList.remove("fa-play-circle")
   marterplay.classList.add("fa-pause-circle")

   indexstring = indexplay.toString();
   
   let a = document.getElementById(indexstring)
   makeAllpause();
   a.classList.remove("fa-play-circle")
   a.classList.add("fa-pause-circle")

})

