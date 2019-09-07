var x,y,z; 
var input = prompt(); 
x = input; 
var input2 = prompt();
y = input2;
var input3 = prompt(); 
z = input3;

if(x > y && x > z){
    if(y>z){
        console.log(x + "," + y + "," + z);
    }else{
        // 3,12,0
        console.log(x + "," + z + "," + y);
    }
}else if(y > x && y > z){
    if(x > z){
        console.log(y + "," + x + "," + z);
    }else{
        console.log(y + "," + z + "," + x);
    }
}else if(z > x && z > y){
    if(x>y){
        console.log(z + "," + x + "," + y);
    }else{
        console.log(z + "," + y + "," + x);
    }
}

