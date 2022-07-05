
let channelName = "welcomePage";

let answerInput 

let you

let answer

function preload() {

  you = random (0,1000000);
  console.log (you);
  you = int (you);
  console.log (you);
  you = you.toString ();

}
function setup() {

    createCanvas(windowWidth, windowHeight);

    answerInput = createInput();
    answerInput.style('font-size', '20px');
    answerInput.position(windowWidth/3, 300);

    submitButton = createButton("Comment");
    submitButton.position(windowWidth/3, 350);
    submitButton.style('font-size', '20px');
  
  }
  
function draw() {
  background(255);

  textSize(30);

  textAlign(CENTER);

  text("Welcome! This is an anonymous channel.", windowWidth/2, 100);

  text("How do you think about the following subject? Feel free to make comments.", windowWidth/2, 150)

  textSize(40);
  text("Horror Movies", windowWidth/2, 250);



  submitButton.mousePressed(sendTheMessage);

}
 
function sendTheMessage() {
  if (answerInput.value() != "") {
    answer = answerInput.value();
    window.location.href = "/../_pageTwo/index.html?answer="+answer+"&you="+you; 

  } else {
    window.alert ("Please tell me your opinion on the subject. Let's see if we hold the same point of view.");

  }

}
