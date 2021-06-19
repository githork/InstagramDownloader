function btnCliked()
{
  var link = document.getElementById("inputlink").value;
  redirection(link);
}


function redirection(link){
  document.location.href=link; 
}