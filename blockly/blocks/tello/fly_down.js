Blockly.Blocks['fly_down'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "fly down %1 feet",
        "args0": [
          {
            "type": "input_value",
            "name": "distance"
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#69D2E7"
      });
  }
};