Blockly.Blocks['pitch_gimbal_to'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField(Blockly.Msg.CAMERA_PITCH_GIMBAL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAMERA_DEGREES);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};