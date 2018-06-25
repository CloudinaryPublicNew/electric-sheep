var commands = {


    'enhance (224 to 176)': function(){
      console.info(arguments);
      alert("enhance");
      fetch(newUrl);
      animateRectical(Photo.translatePoint(param));

    },

    'stop': function(){
      console.info(arguments);
      alert("stop!")
    },

    'wait (a minute)': function(){
      console.info(arguments);
      alert("wait!")
    },

    'pan :where': function(where){
      console.info(arguments);
      alert("pan" + where);
    },

    'go :where': function(where){
      console.info(arguments);
      alert("go" + where);
    },

    'pull :where': function(where){
      console.info(arguments);
      alert("pull" + where);
    },

    'track *where': function(where){
      console.info(arguments);
      alert("track")
    },

    "center :where": function(where){
      console.info(arguments);
      alert("center" + where)
    }, 


    "Give me a hard copy right there": function() {
      console.info(arguments);
      alert("Give me a hard copy right there")
    }, 


};