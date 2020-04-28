exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { make: 'Ford', model: 'Focus',  year: 1993, VIN: 'WBAKF9C52BE619303',transmission:'automatic', mileage: 128903, },
        { make: 'Acura', model: 'Integra', year: 1993, VIN: 'JH4DA9440NS003801', transmission:'automatic', mileage: 5603,}, 
        { make: 'Acura', model: 'Legend',  year: 1993, VIN: 'JH4KA8160PC000949', transmission:'automatic',mileage: 12676, },
        { make: 'Freightliner', model: 'Conventional', year: 1993, VIN: '1FUPDXYB3PP469921',transmission:'automatic', mileage: 98703, },
        { make: 'Jeep', model: 'Grand Cherokee',  year: 1993, VIN: '1C4RJEBG8CC299381',transmission:'automatic', mileage: 834574, },
        
      ]);
    });
};