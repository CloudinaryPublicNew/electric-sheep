var commands = {


    'enhance *id': function(id){
      annyang.abort();
      pointer.classList.add("point");
      pointer.style.webkitAnimationPlayState = "running";
      pointer.addEventListener("animationend", function(){
        img.setAttribute("src", photo.getNext());
        img.classList.add("zoomin");

      })

      img.addEventListener("animationend", function(){
        img.classList.remove("zoomin");
        img.setAttribute("src", photo.getNext());
        annyang.resume();
      })
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
      img.setAttribute("src", photo.getNext());
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