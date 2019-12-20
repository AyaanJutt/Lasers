// DRAW FUNCTIONS

function initGraphics(){
    ctx.fillTriangle=function(x1, y1, x2, y2, x3, y3) {
        // Draw a filled triangle with vertices (x1, y1), (x2, y2), (x3, y3)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    }
    
    ctx.strokeTriangle=function(x1, y1, x2, y2, x3, y3) {
        // Draw an outlined triangle with vertices (x1, y1), (x2, y2), (x3, y3)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath()
        ctx.stroke();
    }
    
    ctx.fillCircle=function (x, y, r) {
        // Draw a filled circle with center (x, y) and radius (r)
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    ctx.strokeCircle=function (x, y, r) {
        // Draw an outlined circle with center (x, y) and radius (r)
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    ctx.line=function (x1, y1, x2, y2) {
        // Draw a line segment from (x1, y1) to (x2, y2)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    ctx.strokeRect=function(x,y,w,h){
        //Draw ab outlined rectangle
        ctx.beginPath();
        ctx.rect(x,y,w,h)
        ctx.stroke();
    }

    ctx.fillRect=function(x,y,w,h){
        //draw a filled rectangle
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.fill();
    }

    // make a function to build short rects
    ctx.shortRect=function(x,y){

        ctx.beginPath();
        ctx.rect(x,y,40,50);
        ctx.fill();
       
    }
    ctx.longRect=function(x,y){

        ctx.beginPath();
        ctx.rect(x,y,40,200);
        ctx.fill();
        
    }
    ctx.thinRect=function(x,y){

        ctx.beginPath();
        ctx.rect(x,y,20,50);
        ctx.fill();
        y+=speed
    }
    ctx.veryLongRect=function(x,y){
        
        ctx.beginPath();
        ctx.rect(x,y,40,500);
        ctx.fill();
        y+=speed
    }

}

