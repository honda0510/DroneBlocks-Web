Blockly.Blocks['land_home'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LAND_RETURN_HOME);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setColour('#E76F51');
    this.setTooltip('');
  }
};