Blockly.Blocks['photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAMERA_TAKE_PHOTO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};