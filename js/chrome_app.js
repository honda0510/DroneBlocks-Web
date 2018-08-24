var socketId;
var portNum = 9000;
var aircraft = "Tello";
var mission = [];

window.addEventListener("load", function() {
  chrome.sockets.udp.create({}, function(socketInfo) {

    socketId = socketInfo.socketId;

    chrome.sockets.udp.onReceive.addListener(onReceive);

    bind();
  });
});

function bind() {
  chrome.sockets.udp.bind(socketId, "0.0.0.0", portNum, function(result) {
    if (result < 0) {
      console.log("Error binding on port: " + portNum);

      // Increment port and try again
      setTimeout(function() {
        portNum++;
        bind();
      }, 3000);

      return;
    }
    
    console.log("Socket bound on port: " + portNum);
});
}

function str2ab(str) {
  var buf = new Int8Array(str.length); 

  for (var i=0, strLen=str.length; i < strLen; i++) {
    buf[i] = str.charCodeAt(i);
  }

  return buf.buffer;
}

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Int8Array(buf));
}

var onReceive = function(info) {
  if (info.socketId !== socketId)
    return;
  console.log(ab2str(info.data));
};

var commandCounter = 0;

function send() {

  var thisCommand = mission[commandCounter];

  console.log(thisCommand.command + " : " + thisCommand.delay);
      
    chrome.sockets.udp.send(socketId, str2ab(thisCommand.command), '127.0.0.1', 8889, function(sendInfo) {
        
      if(commandCounter < mission.length) {
        commandCounter++;

        // Delay before sending next command
        setTimeout(function() {
          send(); 
        }, thisCommand.delay);

      } else {
        commandCounter = 0;
      }

    });

}

var totalDelay = 0;

function buildMission() {
  for (var i=0; i < commands.length; i++) {
    var command = commands[i];
    var delay = command.delay;

    totalDelay = totalDelay + delay;

    send(command.command, totalDelay);

  }
}

/*
var mission = [{
    "command": "command",
    "delay": 1000
  },
  {
    "command": "takeoff",
    "delay": 5000
  },
  {
    "command": "forward 100",
    "delay": 5000
  },
  {
    "command": "cw 90",
    "delay": 3000
  },
  {
    "command": "forward 100",
    "delay": 5000
  }
]*/


// Receiver function after data is evaled from the sandbox page
var messageHandler = function(event) {
  
  mission = [{"command":"command", "delay": 1000}];
  var commands = event.data.split("|");

  // Build the mission
  for (var i=0; i < commands.length; i++) {
    var command = commands[i];

    if(command.includes("takeoff")) {
       mission.push({"command": "takeoff", "delay": 5000});
    } else if (command.includes("fly_forward")) {
      var params = command.split(",");
      var distance = command[1];
      var units = command[2];
      mission.push({"command": "forward 100", "delay": 5000});
    } else if (command.includes("land")) {
      mission.push({"command": "land", "delay:": 5000});
    }
  }

  // Execute the mission
  send();

};
window.addEventListener('message', messageHandler);