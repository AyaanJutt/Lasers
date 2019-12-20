// DS - MODULE EXAM
// Element for the background
let bgEl=document.getElementById('spacebg')

// Canvas Setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 1200;
cnv.height = 700;

initGraphics(1200, 700)

// Global Vars
//Array for the lasers
let lasers=[]
for(let i=0;i<100;i++){
    lasers.push({
        x:0,
        y:Math.randomDec(0,cnv.height),
        w:Math.randomDec(50,200),
        h:5,
        speed: Math.randomDec(5,25)
    })
}
// Event Listeners
document.addEventListener('mousemove', mouseEventHandler)
document.addEventListener('keypress', keypressHandler)

// Canvas Drawing

requestAnimationFrame(draw);

function draw(){

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    // Creates the backdrop
    ctx.drawImage(bgEl,0,0,1200,700)
    // Gets the color

    // Creates the lasers
    for(let i=0;i<lasers.length;i++){
        ctx.fillStyle=getRandomColor()
        //ctx.fillStyle='red'
        ctx.fillRect(lasers[i].x,lasers[i].y,lasers[i].w,lasers[i].h)
        lasers[i].x+=lasers[i].speed
        if(lasers[i].x+lasers[i].w>cnv.width){
            lasers[i].x=0
        }
    }
    requestAnimationFrame(draw);  
}






// getRandomColor
function getRandomColor() {
    
    // create an array of the numbers 0-9 and letters A-F (hint: you can start with the string '0123456789ABCDEF' and split it to save time)
   let arrString='0123456789ABCDEF'
   let colorArr=arrString.split("")

    // create a variable to store the color. Initialize it with the value '#'
    let color='#'

    // loop 6 times, each time adding a random value from the array created above.
   for(let i=0;i<5;i++){
    colorArr[15]+=colorArr[Math.randomint(0,16)]
    }
   console.log(colorArr)
    // return the color variable
    // #FF18B3
    return color+colorArr[15]
}


// mouseEventHandler Handler
function mouseEventHandler(event){

    let cnvRect = cnv.getBoundingClientRect(); 

    let mouseX = Math.round(event.clientX - cnvRect.left);
    let mouseY = Math.round(event.clientY - cnvRect.top);
    // Gets the mouse inside the canvas, and lines it up. Makes sure that is in the canvas and then resets it
    for(let i=0;i<lasers.length;i++){
        lasers[i].y=mouseY
        if(mouseY+event.clientY<cnvRect.top || mouseY>cnvRect.bottom || mouseX<cnvRect.left ||mouseX>cnvRect.right){
            lasers[i].y=Math.randomDec(0,cnv.height)
            lasers[i].x=Math.randomDec(0,cnv.width)
        }
    }

}

// keypressHandler
// If Q is pressed, go fast, if Z is pressed, go slow, if speed is less than 0, stop the lasers
function keypressHandler(event){
   for(let i=0;i<lasers.length;i++){
       if(event.key=='q'){
            lasers[i].speed+=1
        } else if(event.key=='z'){
            lasers[i].speed-=1
        }
        if(lasers[i].speed<0){
            lasers[i].speed=0
        }
   }

}

document.addEventListener('keydown',myBonusFunction)
// myBonusFunction
// Adds more lasers
function myBonusFunction(event){
    if(event.key=='p'){
        console.log('test')
            lasers.push({
                x:0,
                y:Math.randomDec(0,cnv.height),
                w:Math.randomDec(50,200),
                h:5,
                speed: Math.randomDec(10,30)
            })
        }
    }
