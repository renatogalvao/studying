Object.prototype.getKeyNames = function(){
    keyNames = [];
    for (var key in this) {
       keyNames.push(key);
    }
    return keyNames;
}

var jsonObj = {
  "cars": {
    "wheels": {
      "0": "right",
      "1": "left"
    },
    "tyres": {
      "0": "bridgestone",
      "1": "michelin"
    },
    "chassis": {
      "0": "super long",
      "1": "longe",
      "2": "medium",
      "3": "short",
      "4": "tiny"
    },
    "seats": {
      "0": "2",
      "1": "4",
      "2": "5"
    }
  }
};

