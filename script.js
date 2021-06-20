function btnCliked()
{
  var link = document.getElementById("inputlink").value;
  btnClicked2(link);
}

function btnClicked2(link)
{
  e.preventDefault();
  increaseDownloadCountOnTheServer(location);
  window.location.href=link;
}

function redirection(link){
  document.location.href=link;
}

