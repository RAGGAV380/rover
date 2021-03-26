 canvas=document.getElementById("mycavas");
 ctx=canvas.getContext("2d");

 rover_width=100;
 rover_height=90;

 rover_x=10;
 rover_y=10;

background_image= "mars.jpg";
rover_image= "rover.png";
function add() {
background= new Image();
background.onload=uploadb;
background.src=background_image                  ;

rover= new Image();
rover.onload=uploadr;
rover.src=rover_image;

}

function uploadb(){
ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function uploadr(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
key_code=e.keyCode;
if (key_code == '38'){
    up();
    
}

if (key_code == '40'){
    down();

}
if (key_code == '37'){
    left();
}
if (key_code == '39'){
    right();
}
}
function up(){
    if(rover_y>=0){
rover_y-=10;

uploadb();
uploadr();
    }
} 
 
    function down(){
        if(rover_y<=500){
            rover_y+=10;
            uploadb();
            uploadr();
        }
          
    }

    function right(){
if (rover_x<=700){
    rover_x+=10;
    uploadb();
    uploadr();
}
    }
    function left(){
        if(rover_x>=0){
            rover_x-=10;
            uploadb();
            uploadr();
        }
    }
