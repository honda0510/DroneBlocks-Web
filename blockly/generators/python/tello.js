Blockly.Python['takeoff'] = function(block) {
  return 'takeoff();\n';
};

Blockly.Python['fly_forward'] = function(block) {
  var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");
  return 'fly("forward", ' + distance + ', "' + units + '");\n';
};

Blockly.Python['fly_backward'] = function(block) {
  var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");
  return 'fly("backward", ' + distance + ', "' + units + '");\n';
};

Blockly.Python['fly_left'] = function(block) {
  var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");
  return 'fly("left", ' + distance + ', "' + units + '");\n';
};

Blockly.Python['fly_right'] = function(block) {
  var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");
  return 'fly("right", ' + distance + ', "' + units + '");\n';
};

Blockly.Python['fly_up'] = function(block) {
  var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");
  return 'fly("up", ' + distance + ', "' + units + '");\n';
};

Blockly.Python['fly_down'] = function(block) {
  var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  var units = block.getFieldValue("units");
  return 'fly("down", ' + distance + ', "' + units + '");\n';
};

Blockly.Python['yaw_right'] = function(block) {
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);
  return 'yaw("right", ' + angle + ');\n';
};

Blockly.Python['yaw_left'] = function(block) {
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);
  return 'yaw("left", ' + angle + ');\n';
};

Blockly.Python['flip_forward'] = function(block) {
  return 'flip("forward");\n';
};

Blockly.Python['flip_backward'] = function(block) {
  return 'flip("backward");\n';
};

Blockly.Python['flip_left'] = function(block) {
  return 'flip("left");\n';
};

Blockly.Python['flip_right'] = function(block) {
  return 'flip("right");\n';
};


Blockly.Python['land'] = function(block) {
  return 'land();\n';
};