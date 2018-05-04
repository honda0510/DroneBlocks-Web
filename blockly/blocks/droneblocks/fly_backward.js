Blockly.Blocks['fly_backward'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "fly backward %1 ft at %2 mph",
        "args0": [
          {
            "type": "input_value",
            "name": "distance"
          },
          {
            "type": "field_number",
            "name": "speed",
            "value": 10
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};