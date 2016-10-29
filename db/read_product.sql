select product_name as Name,
 product_desc as Description,
 product_price as Price,
 product_image as Image
 from products
  where product_id = $1;
