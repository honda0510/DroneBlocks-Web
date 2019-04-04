Blockly.Blocks['takeoff'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.TAKEOFF_TO,
        "nextStatement": true,
        "colour": "#264653"
      });
  }
};