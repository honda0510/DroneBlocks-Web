Blockly.Blocks['video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.CAMERA_LIST_START, "start"], [Blockly.Msg.CAMERA_LIST_STOP, "stop"]]), "video_status")
        .appendField(Blockly.Msg.CAMERA_RECORDING_VIDEO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};