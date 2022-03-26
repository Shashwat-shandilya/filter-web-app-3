NoseX = 0;
NoseY = 0;

function preload(){
    Moustache = loadImage("https://i.postimg.cc/44222R5k/m.png");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(480,200);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been initialised")
}
    
function draw(){
    image(video, 0,0,500,500);
    image(Moustache,NoseX,NoseY,100,60)
}

function takeSnapshot(){
    save('your_face.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x-125;
        NoseY = results[0].pose.nose.y+20;
        console.log("nose x = " + NoseX);
        console.log("nose y = " + NoseY);
    }
}