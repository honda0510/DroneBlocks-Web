Blockly.Blocks['curve'] = {
    init: function() {
      this.jsonInit(
        {
          "message0": "curve x1 %1 %2, y1 %3 %4, z1 %5 %6, x2 %7 %8, y2 %9 %10, z2 %11 %12",
          "args0": [
            {
              "type": "input_value",
              "name": "x1distance"
            },
            {
              "type": "field_dropdown",
              "name": "x1units",
              "options":
                [["in", "in"],
                 ["cm", "cm"]]
            },
            {
              "type": "input_value",
              "name": "y1distance"
            },
            {
              "type": "field_dropdown",
              "name": "y1units",
              "options":
                [["in", "in"],
                 ["cm", "cm"]]
            },
            {
              "type": "input_value",
              "name": "z1distance"
            },
            {
              "type": "field_dropdown",
              "name": "z1units",
              "options":
                [["in", "in"],
                 ["cm", "cm"]]
            },
            {
                "type": "input_value",
                "name": "x2distance"
              },
              {
                "type": "field_dropdown",
                "name": "x2units",
                "options":
                  [["in", "in"],
                   ["cm", "cm"]]
              },
              {
                "type": "input_value",
                "name": "y2distance"
              },
              {
                "type": "field_dropdown",
                "name": "y2units",
                "options":
                  [["in", "in"],
                   ["cm", "cm"]]
              },
              {
                "type": "input_value",
                "name": "z2distance"
              },
              {
                "type": "field_dropdown",
                "name": "z2units",
                "options":
                  [["in", "in"],
                   ["cm", "cm"]]
              }
          ],
          "previousStatement": true,
          "nextStatement": true,
          "colour": "#2A9D8F"
        });
    }
  };