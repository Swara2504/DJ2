song1= "";
song2="";
function preload()
{
    song1= loadSound("Roadtrip.mp3");
    song2= loadSound("Faded.mp3");
}
function setup()
{
    canvas= createCanvas(375,375);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0,0,375,375);
}