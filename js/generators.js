var Generators = {
  snackFood: function() {
    return _.sample( Lists.snackFoods.brands ) + ' ' +
    _.sample( Lists.snackFoods.flavors ) + ' ' +
    _.sample( Lists.snackFoods.foods );
  }
}
