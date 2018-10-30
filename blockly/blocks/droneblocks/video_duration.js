Blockly.Blocks['video_duration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAMERA_RECORD_VIDEO_FOR)
        .appendField(new Blockly.FieldNumber('10', 1, 600, 1), 'duration')
        .appendField(Blockly.Msg.CAMERA_RECORD_SECONDS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};
