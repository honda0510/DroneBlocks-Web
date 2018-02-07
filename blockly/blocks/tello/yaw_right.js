Blockly.Blocks['yaw_right'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "yaw right %1 degrees",
        "args0": [
          {
            "type": "input_value",
            "name": "angle"
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#FE4365"
      });
  }
};