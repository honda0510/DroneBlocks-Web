Blockly.Python['takeoff'] = function(block) {
  var altitude = Blockly.Python.valueToCode(block, 'altitude', Blockly.JavaScript.ORDER_NONE);
  return 'takeoff(' + altitude + ');\n';
};

Blockly.Python['fly_forward'] = function(block) {
  var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  return 'flyForward(' + distance + ');\n';
};

Blockly.Python['land'] = function(block) {
  return 'land();\n';
};