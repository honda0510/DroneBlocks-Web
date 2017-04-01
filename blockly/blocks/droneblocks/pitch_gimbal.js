Blockly.Blocks['pitch_gimbal_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pitch gimbal to")
        .appendField(new Blockly.FieldNumber('0', -90, 30, 1), 'angle')
        .appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};