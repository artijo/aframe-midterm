const imgPack = [
    {
        bgName: "#bg1",
        text:"behide sc.09"
    },
    {
        bgName: "#bg2",
        text:"it tower and physic tower"
    },
    {
        bgName: "#bg3",
        text:"road to human faculty resturoor"
    }
];
let indexBg = 0;

function startSkyBg(){
    document.getElementById("dam").setAttribute("src","#bg1");
    document.getElementById("text").setAttribute("value",imgPack[0].text)
}

function checkLenght(){
    if(indexBg < 0){
        indexBg = 0;
        
    }else if(indexBg > imgPack.length-1){
        indexBg = imgPack.length-1
    }
}

document.addEventListener('keydown',(Event) =>{
    var keyCode = Event.code;
    
    if(keyCode === "Numpad2"){
        indexBg = indexBg + 1;
        checkLenght();
        document.getElementById("dam").setAttribute("src",imgPack[indexBg].bgName);
        document.getElementById("text").setAttribute("value",imgPack[indexBg].text)
    }else if(keyCode === "Numpad1"){
        indexBg = indexBg - 1;
        checkLenght();
        document.getElementById("dam").setAttribute("src",imgPack[indexBg].bgName);
        document.getElementById("text").setAttribute("value",imgPack[indexBg].text)
    }
    
   
});








// document.addEventListener('keydown', (event) => {
//     var keyName = event.key;
//     var keyCode = event.code;
//     alert(`Keydown: The key pressed is ${keyName} and its code value is ${keyCode}`);
// }, false);

