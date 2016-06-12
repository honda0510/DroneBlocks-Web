Blockly.Blocks['spin'] = {
  init: function() {
    this.appendValueInput("times")
        .setCheck(null)
        .appendField("spin")
        .appendField(new Blockly.FieldDropdown([["right", "right"], ["left", "left"]]), "direction");
    this.appendDummyInput()
        .appendField("times");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
  }
};