// products
const db = require("../config");

class Products {
    async addProduct(req, res) {
        const data = req.body;
        // Query
        const query = `
                INSERT INTO Products
                SET ?;
                `;
        db.query(query, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Product has been added.",
          });
        });
      }

         // Fetch All Products
    fetchProducts(req, res) {
        const query = `
              SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
              FROM Products;
              `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }

      // Fetch One Product
  fetchProduct(req, res) {
    const id = req.params.id;
    const query = `
          SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
          FROM Products
          WHERE prodID = ?
          `;
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

  fetchTreadmills(req, res) {
    const query = `
    SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
    FROM Products
    WHERE category = 'Treadmill' 
    `
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results
      })
    })
  }

  fetchExerciseBikes(req, res) {
    const query = `
    SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
    FROM Products
    WHERE category = 'Exercise Bikes' 
    `
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results
      })
    })
  }
  
  fetchBenches(req, res) {
    const query = `
    SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
    FROM Products
    WHERE category = 'Benches' 
    `
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results
      })
    })
  }
  
  fetchYogaMats(req, res) {
    const query = `
    SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
    FROM Products
    WHERE category = 'Yoga Mats' 
    `
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results
      })
    })
  }

  fetchWeights(req, res) {
    const query = `
    SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
    FROM Products
    WHERE category = 'Weights' 
    `
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results
      })
    })
  }

  fetchDumbbell(req, res) {
    const query = `
    SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
    FROM Products
    WHERE category = 'Dumbbell' 
    `
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results
      })
    })
  }

  // Update Product Info
  updateProduct(req, res) {
    const data = req.body;
    const query = `
            UPDATE Products
            SET ?
            WHERE prodID = ?;   
            `;
    db.query(query, [data, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The product record has been updated.",
      });
    });
  }

  // Delete Product
  deleteProduct(req, res) {
    const query = `
            DELETE FROM Products
            WHERE prodID = ${req.params.id};   
            `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The product record has been deleted.",
      });
    });
  }

  sortProductsByName(req, res) {
    const query = `
    SELECT prodID, prodTitle, prodPrice, category, content, specifications, prodImage
    FROM Products
    ORDER BY prodName;
    `
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

}

module.exports = Products;