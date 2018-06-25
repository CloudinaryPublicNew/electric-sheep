var photo,img;


window.onload = function(){
  photo = new Photo({w:800,h:600})
  img = document.getElementById("img").setAttribute("src", photo.toUrl())
  if (annyang) {
    // Add our commands to annyang
    annyang.debug();
    annyang.addCommands(commands);
    annyang.setLanguage('en');
    annyang.start();

   
  }

  

}