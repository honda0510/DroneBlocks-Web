Blockly.Blocks['hover'] = {
  init: function() {
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField(Blockly.Msg.NAVIGATION_HOVER);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NAVIGATION_SECONDS);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};