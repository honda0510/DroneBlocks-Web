Blockly.Blocks['yaw_left'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "yaw left %1 degrees",
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