Blockly.Blocks['land'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LAND_LAND);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setColour('#E76F51');
  }
};