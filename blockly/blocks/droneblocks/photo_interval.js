Blockly.Blocks['photo_interval'] = {
  init: function() {
    this.appendValueInput("num_photos")
        .setCheck(null)
        .appendField("take");
    this.appendDummyInput()
        .appendField("photos at");
    this.appendValueInput("seconds")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("s interval");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#64c2d9');
  }
};