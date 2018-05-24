Blockly.Blocks['toggle_leds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn front LEDs ")
        .appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "led_status");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#64c2d9');
  }
};