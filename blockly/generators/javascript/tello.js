Blockly.JavaScript['takeoff'] = function(block) {
  return 'mission+="takeoff";';
};

Blockly.JavaScript['fly_forward'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(distance))) {
    return 'mission+=|fly_forward," + eval(' + distance + ') + "";';
  } else {
    return 'mission+="|fly_forward,' + distance + '";';
  }
};

Blockly.JavaScript['fly_backward'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_backward," + eval(' + distance + ') + "";';
  } else {
    return 'mission+="|fly_backward,' + distance + '";';
  }
};

Blockly.JavaScript['fly_left'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_left," + eval(' + distance + ') + "";';
  } else {
    return 'mission+="|fly_left,' + distance + '";';
  }
};

Blockly.JavaScript['fly_right'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_right," + eval(' + distance + ') + "";';
  } else {
    return 'mission+="|fly_right,' + distance + '";';
  }
};

Blockly.JavaScript['fly_up'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_up," + eval(' + distance + ') + "";';
  } else {
    return 'mission+="|fly_up,' + distance + '";';
  }
};

Blockly.JavaScript['fly_down'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(distance))) {
    return 'mission+="|fly_down," + eval(' + distance + ') + "";';
  } else {
    return 'mission+="|fly_down,' + distance + '";';
  }
};

Blockly.JavaScript['land'] = function(block) {
  return 'mission+="|land";';
};