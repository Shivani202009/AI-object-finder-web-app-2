objects=""
function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
video.hide()
}
function draw() {
    image(video,0,0,300,300)
}
function start() {
    model=ml5.objectDetector("cocossd",modelloaded)
   document.getElementById("status").innerHTML="status:detecting objects"
   document.getElementById("input").value
}
function modelloaded() {
    console.log("modelloaded")
status=true
}
