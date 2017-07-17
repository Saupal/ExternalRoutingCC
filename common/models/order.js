'use strict';

module.exports = function(Order) {

	Order.getOrderTotal =function(orderId, cb) {

		Order.findById(orderId,function (err, instance) {

			var response = "Order Total is " + instance.order_total;
			cb(null, response);
            console.log(response);

		});
	}

	Order.remoteMethod (
        'getOrderTotal',
        {
          http: {path: '/getOrderTotal', verb: 'get'},
          accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );

};
