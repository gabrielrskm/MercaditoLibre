INSERT INTO Categories (name, description) 
VALUES 
  ('Electrónica', 'Dispositivos y gadgets electrónicos'),
  ('Hogar', 'Artículos para el hogar'),
  ('Salud', 'Productos para el cuidado de la salud'),
  ('Deportes', 'Equipamiento deportivo'),
  ('Juguetes', 'Juguetes y juegos'),
  ('Libros', 'Libros y material de lectura'),
  ('Belleza', 'Productos de belleza y cuidado personal');

INSERT INTO Brands (name, description)
VALUES
  ('Sony', 'Tecnología y productos electrónicos innovadores'),
  ('Samsung', 'Electrónica de consumo y dispositivos móviles'),
  ('Apple', 'Tecnología y dispositivos inteligentes'),
  ('Nike', 'Ropa y calzado deportivo de alto rendimiento'),
  ('Adidas', 'Equipamiento y accesorios deportivos'),
  ('LG', 'Electrodomésticos y electrónica para el hogar'),
  ('Philips', 'Electrónica de consumo y cuidado personal'),
  ('Bosch', 'Herramientas y electrodomésticos profesionales'),
  ('Canon', 'Equipos de fotografía e imagen digital'),
  ('Microsoft', 'Software y hardware informático');

INSERT INTO Products (Name, Description, Category_ID, Brand_ID, Price, Discount, IsFeatured, AvailableStock)
VALUES
-- Electrónica
('Led 40 pulgadas', 'Led 40 pulgadas Sony alta definición', 1, 1, 600000, 0, true, 30),
('Smartphone Galaxy S22', 'Teléfono inteligente Samsung con Android y pantalla AMOLED', 1, 2, 850000, 10, true, 50),
('MacBook Air M1', 'Notebook Apple con chip M1, 256GB SSD, 8GB RAM', 1, 3, 1200000, 5, true, 20),
('Notebook básica 15.6"', 'Notebook genérica para tareas de oficina, 8GB RAM, 256GB SSD', 1, 10, 400000, 15, false, 40),
('PC Gamer RTX 4060', 'CPU armada con Ryzen 5, 16GB RAM, RTX 4060 8GB', 1, 10, 1400000, 0, true, 10),

-- Hogar
('Lavarropas automático LG', 'Lavadora automática LG con carga frontal', 2, 6, 750000, 10, true, 25),
('Aspiradora Philips PowerPro', 'Aspiradora sin bolsa de alto rendimiento', 2, 7, 250000, 5, false, 15),

-- Salud
('Termómetro digital', 'Termómetro digital rápido y preciso para uso familiar', 3, 7, 20000, 0, false, 100),
('Masajeador de cuello', 'Masajeador cervical eléctrico con calor', 3, 6, 95000, 20, true, 40),

-- Deportes
('Zapatillas Nike Air Zoom', 'Calzado deportivo para running y entrenamiento', 4, 4, 180000, 10, true, 35),
('Pelota de fútbol Adidas', 'Pelota oficial tamaño 5 para entrenamiento', 4, 5, 35000, 0, false, 60),

-- Juguetes
('Lego Star Wars', 'Set de construcción Lego edición Star Wars', 5, 10, 95000, 5, true, 20),
('Muñeca articulada', 'Muñeca con ropa intercambiable y accesorios', 5, 10, 30000, 0, false, 80),

-- Libros
('Cien Años de Soledad', 'Libro de Gabriel García Márquez, edición tapa blanda', 6, 10, 12000, 0, false, 150),
('El Principito', 'Libro clásico infantil con ilustraciones originales', 6, 10, 8000, 0, false, 200),

-- Belleza
('Plancha de pelo Philips', 'Alisadora con tecnología iónica para el cabello', 7, 7, 45000, 10, true, 25),
('Crema hidratante facial', 'Crema nutritiva para todo tipo de piel', 7, 10, 15000, 0, false, 70);

INSERT INTO Images (URI, product_id)
VALUES
-- 1: Led 40 pulgadas
('https://placehold.co/600x400.webp?text=Led+Sony+Frente', 1),
('https://placehold.co/600x400.webp?text=Led+Sony+Lateral', 1),
('https://placehold.co/600x400.webp?text=Led+Sony+Detalle', 1),

-- 2: Galaxy S22
('https://placehold.co/600x400.webp?text=Galaxy+S22+Frente', 2),
('https://placehold.co/600x400.webp?text=Galaxy+S22+Espalda', 2),
('https://placehold.co/600x400.webp?text=Galaxy+S22+Caja', 2),

-- 3: MacBook Air
('https://placehold.co/600x400.webp?text=Macbook+Frente', 3),
('https://placehold.co/600x400.webp?text=Macbook+Teclado', 3),
('https://placehold.co/600x400.webp?text=Macbook+Cerrada', 3),

-- 4: Notebook básica
('https://placehold.co/600x400.webp?text=Notebook+Básica+Frente', 4),
('https://placehold.co/600x400.webp?text=Notebook+Básica+Lateral', 4),
('https://placehold.co/600x400.webp?text=Notebook+Básica+Pantalla', 4),

-- 5: PC Gamer
('https://placehold.co/600x400.webp?text=PC+Gamer+Frente', 5),
('https://placehold.co/600x400.webp?text=PC+Gamer+Interior', 5),
('https://placehold.co/600x400.webp?text=PC+Gamer+RGB', 5),

-- 6: Lavarropas LG
('https://placehold.co/600x400.webp?text=Lavarropas+Frente', 6),
('https://placehold.co/600x400.webp?text=Lavarropas+Tambor', 6),
('https://placehold.co/600x400.webp?text=Lavarropas+Panel', 6),

-- 7: Aspiradora Philips
('https://placehold.co/600x400.webp?text=Aspiradora+Frente', 7),
('https://placehold.co/600x400.webp?text=Aspiradora+Accesorios', 7),
('https://placehold.co/600x400.webp?text=Aspiradora+Filtro', 7),

-- 8: Termómetro
('https://placehold.co/600x400.webp?text=Termómetro+Frente', 8),
('https://placehold.co/600x400.webp?text=Termómetro+Pantalla', 8),
('https://placehold.co/600x400.webp?text=Termómetro+Caja', 8),

-- 9: Masajeador
('https://placehold.co/600x400.webp?text=Masajeador+Cuello', 9),
('https://placehold.co/600x400.webp?text=Masajeador+Acción', 9),
('https://placehold.co/600x400.webp?text=Masajeador+Empaque', 9),

-- 10: Zapatillas Nike
('https://placehold.co/600x400.webp?text=Zapatillas+Nike+Lado', 10),
('https://placehold.co/600x400.webp?text=Zapatillas+Nike+Suela', 10),
('https://placehold.co/600x400.webp?text=Zapatillas+Nike+Caja', 10),

-- 11: Pelota Adidas
('https://placehold.co/600x400.webp?text=Pelota+Adidas+Frente', 11),
('https://placehold.co/600x400.webp?text=Pelota+Adidas+Logo', 11),
('https://placehold.co/600x400.webp?text=Pelota+Adidas+Uso', 11),

-- 12: Lego Star Wars
('https://placehold.co/600x400.webp?text=Lego+Star+Wars+Caja', 12),
('https://placehold.co/600x400.webp?text=Lego+Star+Wars+Construido', 12),
('https://placehold.co/600x400.webp?text=Lego+Star+Wars+Piezas', 12),

-- 13: Muñeca articulada
('https://placehold.co/600x400.webp?text=Muñeca+Frente', 13),
('https://placehold.co/600x400.webp?text=Muñeca+Accesorios', 13),
('https://placehold.co/600x400.webp?text=Muñeca+Empaque', 13),

-- 14: Cien Años de Soledad
('https://placehold.co/600x400.webp?text=Cien+Años+Portada', 14),
('https://placehold.co/600x400.webp?text=Cien+Años+Interior', 14),
('https://placehold.co/600x400.webp?text=Cien+Años+Contratapa', 14),

-- 15: El Principito
('https://placehold.co/600x400.webp?text=Principito+Portada', 15),
('https://placehold.co/600x400.webp?text=Principito+Ilustración', 15),
('https://placehold.co/600x400.webp?text=Principito+Empaque', 15),

-- 16: Plancha Philips
('https://placehold.co/600x400.webp?text=Plancha+Pelo+Frente', 16),
('https://placehold.co/600x400.webp?text=Plancha+Pelo+Uso', 16),
('https://placehold.co/600x400.webp?text=Plancha+Pelo+Cerrada', 16),

-- 17: Crema facial
('https://placehold.co/600x400.webp?text=Crema+Facial+Frente', 17),
('https://placehold.co/600x400.webp?text=Crema+Facial+Textura', 17),
('https://placehold.co/600x400.webp?text=Crema+Facial+Uso', 17);