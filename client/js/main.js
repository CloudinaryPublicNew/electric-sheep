window.onload = function(){

  if (annyang) {
    // Add our commands to annyang
    annyang.debug();
    annyang.addCommands(commands);
    annyang.setLanguage('en');
    annyang.start();

   
  }



}