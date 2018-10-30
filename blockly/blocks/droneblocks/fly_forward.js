Blockly.Blocks['fly_forward'] = {
  init: function() {
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField(Blockly.Msg.NAVIGATION_FLY_FORWARD);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NAVIGATION_FT_AT)
        .appendField(new Blockly.FieldNumber(10, 5, 25, 1), 'speed')
        .appendField(Blockly.Msg.NAVIGATION_MPH);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#2A9D8F');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};