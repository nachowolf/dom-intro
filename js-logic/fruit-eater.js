var FruitEater = function(){

    var fruitEaten = {};

    var eatFruit = function(fruitType){
          if (fruitEaten[fruitType] === undefined){
          fruitEaten[fruitType] = 0;
              }

          fruitEaten[fruitType] += 1;
        };

var Apples = function(fruitType){
  return fruitEaten["apple"];
};

var Pears = function(fruitType) {
  return fruitEaten["pear"];
};

return {
  eat : eatFruit,
  applesEaten : Apples,
  pearsEaten : Pears
};
};
