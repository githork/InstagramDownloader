function openlink(){
    var obj = document.getElementById("text").value;
    var c = document.getElementById("idcheckbox").checked;
    if (c == true){
    window.open(obj+'media/?size=l');
    }
    else
    {
        window.alert("Please check the box before downloading anything.");
    }
}
/*
function download(filename, textInput){
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("btn").addEventListener("click",function(){
        var text = document.getElementById("text").value;
        var filename = "output.html";
        var c = document.getElementById("idcheckbox").checked;
        if (c == true){
        download(filename, text+"media/?siez=l");
        }
        else
        {
            window.alert("Please check the box before downloading anything.");
        }
    }, false);
    */

    /* TODO : Automatiser le CTRL +S */

    