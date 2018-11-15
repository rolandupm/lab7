//Daca dau click in input acesta isi schimba fundalul in mov si doar dupa aceea butoanele functioneaza!!!!


var pos = 0;
var clicked = false;
var elem = document.getElementById("test"); 
var texti = document.getElementById("textI");
var initialColor = texti.style.backgroundColor;
var button2 = document.getElementById("varianta2");


button2.addEventListener('mousedown', testMove, false);
texti.addEventListener('mousedown',changeColor,false);

 function changeColor() {
        
		if (clicked)
		{
			texti.style.backgroundColor = initialColor;
			clicked =  false;
		}
		else
		{
			texti.style.backgroundColor = "purple";
			clicked =  true;
		}
 }   
	
function testMove() {
	if (clicked)
	{
		pos = move(pos,elem);
	}
}

 function move(position,elem) {
	 if (position < 1024)
	 {		
			var i = position;
			position += 100;
			
			while (i<position)
			{
				elem.style.left = i + 'px'; 
				++i;
			}
			return position;
	 }
	 else
	 {
		 elem.style.left = '0px'; 
		 return 0;
	 }
}