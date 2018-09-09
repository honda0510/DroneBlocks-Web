Blockly.JavaScript['takeoff'] = function(block) {
  return 'mission+="takeoff";';
};

Blockly.JavaScript['set_speed'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");

  if(isNaN(parseInt(distance))) {
    return 'mission+="|speed," + eval(' + distance + ') + ",' + units + '";';
  } else {
    return 'mission+="|speed,' + distance + ',' + units + '";';
  }
};

Blockly.JavaScript['fly_forward'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_forward," + eval(' + distance + ') + ",' + units + '";';
  } else {
    return 'mission+="|fly_forward,' + distance + ',' + units + '";';
  }
};

Blockly.JavaScript['fly_backward'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_backward," + eval(' + distance + ') + ",' + units + '";';
  } else {
    return 'mission+="|fly_backward,' + distance + ',' + units + '";';
  }
};

Blockly.JavaScript['fly_left'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_left," + eval(' + distance + ') + ",' + units + '";';
  } else {
    return 'mission+="|fly_left,' + distance + ',' + units + '";';
  }
};

Blockly.JavaScript['fly_right'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_right," + eval(' + distance + ') + ",' + units + '";';
  } else {
    return 'mission+="|fly_right,' + distance + ',' + units + '";';
  }
};

Blockly.JavaScript['fly_up'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_up," + eval(' + distance + ') + ",' + units + '";';
  } else {
    return 'mission+="|fly_up,' + distance + ',' + units + '";';
  }
};

Blockly.JavaScript['fly_down'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_down," + eval(' + distance + ') + ",' + units + '";';
  } else {
    return 'mission+="|fly_down,' + distance + ',' + units + '";';
  }
};

Blockly.JavaScript['fly_xyz'] = function(block) {
  var xdistance = Blockly.JavaScript.valueToCode(block, 'xdistance', Blockly.JavaScript.ORDER_NONE);
  var xunits = block.getFieldValue("xunits");
  var ydistance = Blockly.JavaScript.valueToCode(block, 'ydistance', Blockly.JavaScript.ORDER_NONE);
  var yunits = block.getFieldValue("yunits");
  var zdistance = Blockly.JavaScript.valueToCode(block, 'zdistance', Blockly.JavaScript.ORDER_NONE);
  var zunits = block.getFieldValue("zunits");
  
  var blockString = 'mission+="|fly_xyz,';

  if(isNaN(parseInt(xdistance))) {
    blockString += '" + eval(' + xdistance + ') + "';
    blockString += ',' + xunits;
  } else {
    blockString += xdistance + ',' + xunits;
  }
  
  if(isNaN(parseInt(ydistance))) {
    blockString += '," + eval(' + ydistance + ') + "';
    blockString += ',' + yunits;
  } else {
    blockString += ',' + ydistance + ',' + yunits;
  }
  
  if(isNaN(parseInt(zdistance))) {
    blockString += '," + eval(' + zdistance + ') + "';
    blockString += ',' + zunits;
  } else {
    blockString += ',' + zdistance + ',' + zunits;
  }
  
  blockString += '";';
  
  return blockString;
  
};

Blockly.JavaScript['curve'] = function(block) {
  var x1distance = Blockly.JavaScript.valueToCode(block, 'x1distance', Blockly.JavaScript.ORDER_NONE);
  var x1units = block.getFieldValue("x1units");
  var y1distance = Blockly.JavaScript.valueToCode(block, 'y1distance', Blockly.JavaScript.ORDER_NONE);
  var y1units = block.getFieldValue("y1units");
  var z1distance = Blockly.JavaScript.valueToCode(block, 'z1distance', Blockly.JavaScript.ORDER_NONE);
  var z1units = block.getFieldValue("z1units");

  var x2distance = Blockly.JavaScript.valueToCode(block, 'x2distance', Blockly.JavaScript.ORDER_NONE);
  var x2units = block.getFieldValue("x2units");
  var y2distance = Blockly.JavaScript.valueToCode(block, 'y2distance', Blockly.JavaScript.ORDER_NONE);
  var y2units = block.getFieldValue("y2units");
  var z2distance = Blockly.JavaScript.valueToCode(block, 'z2distance', Blockly.JavaScript.ORDER_NONE);
  var z2units = block.getFieldValue("z2units");
  
  var blockString = 'mission+="|curve,';

  if(isNaN(parseInt(x1distance))) {
    blockString += '" + eval(' + x1distance + ') + "';
    blockString += ',' + x1units;
  } else {
    blockString += x1distance + ',' + x1units;
  }
  
  if(isNaN(parseInt(y1distance))) {
    blockString += '," + eval(' + y1distance + ') + "';
    blockString += ',' + y1units;
  } else {
    blockString += ',' + y1distance + ',' + y1units;
  }
  
  if(isNaN(parseInt(z1distance))) {
    blockString += '," + eval(' + z1distance + ') + "';
    blockString += ',' + z1units;
  } else {
    blockString += ',' + z1distance + ',' + z1units;
  }

  if(isNaN(parseInt(x2distance))) {
    blockString += '," + eval(' + x2distance + ') + "';
    blockString += ',' + x2units;
  } else {
    blockString += ',' + x2distance + ',' + x2units;
  }
  
  if(isNaN(parseInt(y2distance))) {
    blockString += '," + eval(' + y2distance + ') + "';
    blockString += ',' + y2units;
  } else {
    blockString += ',' + y2distance + ',' + y2units;
  }
  
  if(isNaN(parseInt(z2distance))) {
    blockString += '," + eval(' + z2distance + ') + "';
    blockString += ',' + z2units;
  } else {
    blockString += ',' + z2distance + ',' + z2units;
  }  
  
  blockString += '";';
  
  return blockString;
  
};

Blockly.JavaScript['hover'] = function(block) {
  var duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(duration))) {
    return 'mission+="|hover," + eval(' + duration + ') + "";';
  } else {
    return 'mission+="|hover,' + duration + '";';
  }
};

Blockly.JavaScript['yaw_right'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(angle))) {
    return 'mission+="|yaw_right," + eval(' + angle + ') + "";';
  } else {
    return 'mission+="|yaw_right,' + angle + '";';
  }
};

Blockly.JavaScript['yaw_left'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(angle))) {
    return 'mission+="|yaw_left," + eval(' + angle + ') + "";';
  } else {
    return 'mission+="|yaw_left,' + angle + '";';
  }
};

Blockly.JavaScript['flip_forward'] = function(block) {
  return 'mission+="|flip_forward";';
};

Blockly.JavaScript['flip_backward'] = function(block) {
  return 'mission+="|flip_backward";';
};

Blockly.JavaScript['flip_left'] = function(block) {
  return 'mission+="|flip_left";';
};

Blockly.JavaScript['flip_right'] = function(block) {
  return 'mission+="|flip_right";';
};

Blockly.JavaScript['land'] = function(block) {
  return 'mission+="|land";';
};

Blockly.JavaScript['loop'] = function(block) {
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
  var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_NONE);  
  var branch = Blockly.JavaScript.statementToCode(block, 'DO').trim();
  var code = "for(var " + loopVar + " = 0; " + loopVar + " < " + repeats + "; " + loopVar + "++){" + branch + "}";
  return code;  
};