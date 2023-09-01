// orders
const db = require("../config");

class Orders {
    fetchOrders(req, res) {
        const query = `
              SELECT Orders.orderID, Users.firstName, Users.lastName, Products.prodTitle, Products.prodPrice, Products.content, Products.prodImage 
              FROM ((Orders
                INNER JOIN Users ON Orders.userID = Users.userID)
                INNER JOIN Products ON Orders.prodID = Products.prodID);
              `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      } 

      deleteProduct(req, res) {
        const query = `
                DELETE FROM Orders
                WHERE orderID = ${req.params.id};   
                `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The Order record has been deleted.",
          });
        });
      }

}

// SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
// FROM ((Orders
//     INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
//     INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);


module.exports = Orders;