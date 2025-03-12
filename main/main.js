document.oncontextmenu = function(){return false;}

vol = 1;

function fade_out(vol){
    document.getElementById('bgm').volume=vol-0.1;
    if(vol>0.2){
        setTimeout(fade_out,100,vol-0.1);    
    }
}

function start(){
    document.getElementById("mes").innerText = "読み込み中"
    setTimeout(fade_out,100,1);
    const st01 = new Audio("tap01.mp3");
    st01.play();
    st01.addEventListener("ended",(event)=>{
        window.location.replace("mode_sen.html");
    });
}