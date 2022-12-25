const pianoKeys=document.querySelectorAll(".piano-keys .key");
const changer=document.getElementById("change");



let audio=new Audio("tunes/a.wav");//by defult,audio src is "a"

const playTune=(key)=>{
    audio.src=`tunes/${key}.wav`;
    audio.play();//playing audio;
    const clickedKey=document.querySelector(`[data-key=${key}]`);
   
}

pianoKeys.forEach(key=>{
    //calling playTune function with passing data-key value as an argument
    key.addEventListener("click",()=>playTune(key.dataset.key));
})





