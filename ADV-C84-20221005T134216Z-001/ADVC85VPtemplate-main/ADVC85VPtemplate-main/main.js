canvas = document.getElementById("mycanvas");
ctx = canvas.getcontext("2d")

greencar_wridth = 100;
greencar_height = 160;


background_image = "parkingLot.jpg 
greencar_image = "car2.png";

greencar_x = 100;
greencar_y = 100;

function add() {
	background_imgTag = new image();
	baackground_imgTag.onload = uploadbackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadBackground;
	greenar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, 1000, 600);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_wridth, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(green_Y >=0){
		greencar_Y greencar_Y -10
		uploadBackground();
		uploadgreencar();


	}
}

function down()
{
	if(green_Y <=440){
		greencar_Y greencar_Y +10
		uploadBackground();
		uploadgreencar();

}

function left()
{
	if(green_X >=0){
		greencar_X greencar_X -10
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(green_X <= 900){
		greencar_X greencar_X +10
		uploadBackground();
		uploadgreencar();
    }
}