Blockly.Blocks['hover'] = {
  init: function() {
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("hover ");
    this.appendDummyInput()
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};