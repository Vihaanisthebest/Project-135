statu = "";
image = "";

function setup()
{
    canvas = createCanvas(400, 335);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(400, 335);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    var input1 = document.getElementById('input1').value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    statu = true;
}

function draw()
{
    image(video, 0, 0, 400, 335);
}