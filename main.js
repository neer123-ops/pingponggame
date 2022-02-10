function preload(){
    world_start = loadSound("ball_touch_paddel.wav");
    missed = loadSound("missed.wav");
}

function setup(){
    canvas = createCanvas(1240, 336);

    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent('game_console');

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

rightWristX = "";
rightWristY = "";
score_rightWrist = "";
game_status = "";

function gotPoses(results)
{
    if(results.length > 0)
    {
        rightWristX = results[0].pose.rightWristX.x;
        rightWristY = results[0].pose.rightWristY.y;
        score_rightWrist = results[0].pose.keypoints[10].score;
        console.log("score_rightWrist");
    }
}

function startGame(){
    game_status = "start";
    document.getElementById("status").innerHTML = "Game is Loading";
}