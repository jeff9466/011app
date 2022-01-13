let size =500;
function setup() {
        createCanvas(size, size);
        //background(100);   
}  

function load() {
        mouth = loadImage('Scary-Mouth.png');
}

function draw() {
        background(153, 50, 204);
       
        fill(121, 173, 126);
        noStroke();
        ellipse(380,200,150,150);

       
        let eyeMoveX = (size/2)-16+mouseX/16;
        let eyeMoveY = (size/2)-25+mouseY/9;
       
                let rad = 150.0;
        for  (let i = 0; i < rad; i++) {
                stroke(113, 150, 58,255-(200 * i/rad));
        noFill();
        ellipse(120,200,i,i);
        ellipse(380,200,i,i);
                stroke(0,80);
        //ellipse(eyeMoveX,eyeMoveY,i,i);
        }
       
        //fill(0);
        fill(235, 129, 37);
        //rect(50,90,600,50);
        //ellipse(mouseX, mouseY, 20, 20);
        //fill(0);
        //triangle(120, 110, 255, 220, 380, 100);
        //triangle(20, 110, 25, 220, 120, 100);
        //fill(0);
        //triangle(400, 110, 425, 220, 420, 100);
       
        let eyeSize = 50 + mouseX/10;
        let smallEye = 10 + mouseX/20;
        fill(0);
        ellipse(120,200,eyeSize,eyeSize);
        ellipse(380,200,eyeSize,eyeSize);
        fill(255);
        noStroke();
        ellipse(150,170,smallEye,smallEye);
        ellipse(410,170,smallEye,smallEye);
       
        if (mouseX < 0) {
        image(mouth, 50, 280,400,200);
        }
       
        fill(234, 203, 237);
        triangle(200, 250, 290, 250, 245, 280); 
	fill(0, 0, 0)
	rect(244, 280, 3, 45) 
	fill( 225, 255, 255) 
	rect( 254, 280, 3, 45)
	
}
