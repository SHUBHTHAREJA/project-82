mouseEvent="";
canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


color="";
radius="";
width="";

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width_of_the_line").value;
    width=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown") {
        console.log(x,y);
    console.log("x ="+x+"y ="+y);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_the_line;
    ctx.arc(x,y,0,2*Math.PI);
    ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }