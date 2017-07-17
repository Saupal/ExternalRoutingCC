module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('Order', function(err) {
    if (err) throw err;

    app.models.Order.create([{
      order_date: "2017-06-30T06:32:26.709Z",
      order_number: 123456,
      order_total:200
    },
    {
      order_date: "2017-06-30T06:32:26.709Z",
      order_number: 123457,
      order_total:400
    } ], function(err, Orders) {
      if (err) throw err;

      console.log('Models created: \n', Orders);
    });
  });
};