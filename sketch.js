function setup() {
    createCanvas(800, 600);
    background("orange")
  }
  
  function draw() {
  
  
    stroke("black")
    fill("#000000")
      if(mouseIsPressed){
        rect(mouseX, mouseY, 20, 20)
    }
    
  }