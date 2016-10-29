update products
  set product_desc = $2
  where product_id = $1;
