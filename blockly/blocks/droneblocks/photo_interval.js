Blockly.Blocks['photo_interval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAMERA_TAKE)
        .appendField(new Blockly.FieldNumber(5, 1, 100, 1), 'photo_count')
        .appendField(Blockly.Msg.CAMERA_PHOTOS_WITH)
        .appendField(new Blockly.FieldNumber(5, 2, 30, 1), 'interval')
        .appendField(Blockly.Msg.CAMERA_SEC_INTERVAL);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};
