Blockly.Blocks['takeoff'] = {
  init: function() {
    this.appendValueInput("altitude")
    .setCheck("Number")
    .appendField(Blockly.Msg.TAKEOFF_TO);
    this.appendDummyInput().appendField(Blockly.Msg.TAKEOFF_FT);
    this.setInputsInline(true);
    this.setNextStatement(true);
    this.setColour('#264653');
    this.setTooltip('');
  }
};