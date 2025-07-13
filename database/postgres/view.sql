CREATE OR REPLACE VIEW product_with_image AS
SELECT
  p.id,
  p.name,
  p.price,
  p.availablestock,
  p.description,
  p.isfeatured,
  (
    SELECT uri FROM images i WHERE i.product_id = p.id ORDER BY i.id LIMIT 1
  ) AS image
FROM products as p where p.availablestock > 0;

select * from product_with_image
