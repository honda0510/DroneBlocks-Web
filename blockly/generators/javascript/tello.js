Blockly.JavaScript['takeoff'] = function(block) {
  return 'mission+="takeoff";';
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

Blockly.JavaScript['fly_left'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_left," + eval(' + distance + ') + ",' + units + '";';
  } else {
    return 'mission+="|fly_left,' + distance + ',' + units + '";';
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