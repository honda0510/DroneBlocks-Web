Blockly.Python['takeoff'] = function(block) {
  var altitude = Blockly.Python.valueToCode(block, 'altitude', Blockly.JavaScript.ORDER_NONE);
  return 'takeoff(' + altitude + ');\n';
};

Blockly.Python['land'] = function(block) {
  return 'land();\n';
};