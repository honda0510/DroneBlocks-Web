Blockly.Blocks['yaw_left'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField(Blockly.Msg.NAVIGATION_YAW_LEFT);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NAVIGATION_DEG);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NAVIGATION_AT)
        .appendField(new Blockly.FieldNumber(30, 1, 100, 1), 'velocity')
        .appendField(Blockly.Msg.NAVIGATION_DEG_PER_SEC);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};