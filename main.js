Webcam.set({
    width:300,
    height:200,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="saved" src="'+data_uri+'">';
    });
}

console.log('ml5 version : ' , ml5.version); 

classifier = ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/PnZGqYeut/model.json", modelLoaded);

function modelLoaded(){
    console.log("Your model link is loaded.");
}