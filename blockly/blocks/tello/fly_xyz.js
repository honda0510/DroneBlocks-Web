Blockly.Blocks['fly_xyz'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "fly x %1 %2, y %3 %4, z %5 %6",
        "args0": [
          {
            "type": "input_value",
            "name": "xdistance"
          },
          {
            "type": "field_dropdown",
            "name": "xunits",
            "options":
              [["in", "in"],
               ["cm", "cm"]]
          },
          {
            "type": "input_value",
            "name": "ydistance"
          },
          {
            "type": "field_dropdown",
            "name": "yunits",
            "options":
              [["in", "in"],
               ["cm", "cm"]]
          },
          {
            "type": "input_value",
            "name": "zdistance"
          },
          {
            "type": "field_dropdown",
            "name": "zunits",
            "options":
              [["in", "in"],
               ["cm", "cm"]]
          },
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};