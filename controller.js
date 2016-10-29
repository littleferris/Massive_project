var app = require('./index');

var db = app.get('db');

module.exports = {
    getAll: function(req, res){
        db.read_products(function(err, products){
          res.json(products);

        })
    },

    getOne: function(req, res) {
      db.read_product([req.params.id], function(err, product) {
        res.send(product);

      })
    },

    create: function(req, res) {
      db.create_product([req.body.name, req.body.price,  req.body.desc, req.body.imgURL],
        function(err, product) {
        res.json(req.body.name + "Was added to Products");
        console.log("Product was added correctly!");
      })
    },

    destroy: function(req, res) {
      db.delete_product([req.params.id], function(err, products) {
        console.log( products )
        res.json("Product with an id of " + req.params.id + " has been deleted")
      })
    },

    update_description: function(req, res) {
      db.update_desc([req.params.id, req.body.product_desc], function(err, products) {
        console.log(req.params.id, req.body.product_desc)
        res.send( "Fun stuff" )
      })
    },

    update_price: function(req, res) {
      db.update_price([req.params.id, req.body.product_price], function(err, products) {
        console.log(req.params.id, req.body.product_price)
        res.send( "Price for id " + req.params.id + " updated" )
      })
    }

}
