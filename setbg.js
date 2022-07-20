function setbg(){
 found = 0;

 red = 0;
 green = 0;
 blue = 0;

 value = Random(440);
 value += 300;

 //purple - blue
 if(value < 490 && found == 0){
  red = -1*(value-490) / (490 - 300);
  green = 0;
  blue = 1;
  found = 1;
 }

 //blue - skyblue
 if(value < 520 && found == 0){
  red = 0;
  green = (value-490) / (520-490);
  blue = 1;
  found = 1;
 }

 //skyblue - green
 if(value < 570 && found == 0){
  red = 0;
  green = -1*(value-570) / (570-520);
  blue = 1;
  found = 1;
 }

 //green - yellow
 if(value < 590 && found == 0){
  red = (value-570) / (590-570);
  green = 1;
  blue = 0;
  found = 1;
 }

 //yellow - red
 if(value < 740 && found == 0){
  red = 1;
  green = -1*(value-740) / (740-590);
  blue = 0;
  found = 1;
 }

 //black (wtf!)
 if(found == 0){
  alert(value);
  red = 0;
  green = 0;
  blue = 0;
  found = 1;
 }

 red = Math.floor(red * 255);
 green = Math.floor(green * 255);
 blue = Math.floor(blue * 255);

 color = numberPad();
 document.bgColor = color;
// document.getElementById("clicky").value = (value+"\n"+color);
}

function numberPad(){
 ongoing = "";
 if(red < 16)
  ongoing += 0;
 ongoing += red.toString(16);
 if(green < 16)
  ongoing += 0;
 ongoing += green.toString(16);
 if(blue < 16)
  ongoing += 0;
 ongoing += blue.toString(16);
 return ongoing;
}
