nosex = 0;
nosey = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nosex, nosey, 50, 50);
}

function take_snapshot() {
    save('mustache_png_file.png');
}
function modelLoaded() {
    console.log("posenet loaded");
}

function gotPoses(results) {
    if(results.length > 0)
    {
        nosex = results[0].pose.nose.x-20;
        nosey = results[0].pose.nose.y;
        console.log("nose x =" + nosex);
        console.log("nose y =" + nosey);
    }
}
