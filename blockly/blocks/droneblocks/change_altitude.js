Blockly.Blocks['change_altitude'] = {
  init: function() {
    this.appendValueInput("altitude")
        .setCheck("Number")
        .appendField(Blockly.Msg.NAVIGATION_CHANGE_ALTITUDE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NAVIGATION_FT_AT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};