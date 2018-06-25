var photo,img,pointer;


window.onload = function(){
  photo = new Photo({w:800,h:600})
  img = document.getElementById("img");
  img.setAttribute("src", photo.toUrl());
  pointer = document.getElementById("pointer");
  if (annyang) {
    // Add our commands to annyang
    annyang.debug();
    annyang.addCommands(commands);
    annyang.setLanguage('en');
    annyang.start();

   
  }

  

}