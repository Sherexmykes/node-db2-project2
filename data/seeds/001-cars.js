
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { make: 'Ford', model: 'Focus', VIN: 'WBAKF9C52BE619303', mileage: 128903, year: 1993},
        { make: 'Acura', model: 'Integra', VIN: 'JH4DA9440NS003801',  mileage: 5603, year: 1993,}, 
        { make: 'Acura', model: 'Legend', VIN: 'JH4KA8160PC000949', mileage: 12676, year: 1996},
        { make: 'Freightliner', model: 'Conventional', VIN: '1FUPDXYB3PP469921', mileage: 98703, year: 1972},
        { make: 'Jeep', model: 'Grand Cherokee', VIN: '1C4RJEBG8CC299381', mileage: 834574, year: 2004},
        
      ]);
    });
};
