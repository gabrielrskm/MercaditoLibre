---
-- Table Categories
CREATE TABLE Categories (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    DeactivatedAt TIMESTAMPTZ
);

---
-- Table Brands
CREATE TABLE Brands (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    DeactivatedAt TIMESTAMPTZ
);

---
-- Table ShippingStatuses
CREATE TABLE ShippingStatuses (
    ID SERIAL PRIMARY KEY,
    Description VARCHAR(100),
    DeactivatedAt TIMESTAMPTZ
);

---
-- Table Users
-- NOTE: If integrating with Supabase Auth, consider using UUID for the ID column
-- and linking it to auth.users.id for consistency and security.
-- For this schema, keeping SERIAL as requested.
CREATE TABLE Users (
    ID SERIAL PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    ResetToken VARCHAR(100),
    ResetTokenExpiry TIMESTAMPTZ,
    Phone VARCHAR(20),
    Address VARCHAR(255),
    Permissions INT NOT NULL,
    CreatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    DeactivatedAt TIMESTAMPTZ
);

---
-- Table Products
CREATE TABLE Products (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT,
    Category_ID INT,
    Brand_ID INT,
    Price NUMERIC(18,2),
    Discount NUMERIC(5,2),
    IsFeatured BOOLEAN,
    DeactivatedAt TIMESTAMPTZ,
    AvailableStock INT NOT NULL DEFAULT 0, 
    ReservedStock INT NOT NULL DEFAULT 0,
    CONSTRAINT FK_Products_Categories FOREIGN KEY (Category_ID) REFERENCES Categories(ID),
    CONSTRAINT FK_Products_Brands FOREIGN KEY (Brand_ID) REFERENCES Brands(ID)
);

---
-- Table Sales
-- NOTE: Consider using an ENUM type or a reference table for `Status`
-- instead of INT for better readability and maintainability.
CREATE TABLE Sales (
    ID SERIAL PRIMARY KEY,
    User_ID INT,
    TotalAmount NUMERIC(18,2),
    SaleDate TIMESTAMPTZ,
    Status INT DEFAULT 0,
    CONSTRAINT FK_Sales_Users FOREIGN KEY (User_ID) REFERENCES Users(ID)
);

---
-- Table SaleItems (Junction table for Sales and Products)
CREATE TABLE SaleItems (
    Sale_ID INT,
    Product_ID INT,
    Quantity INT,
    UnitPrice NUMERIC(18,2),
    PRIMARY KEY (Sale_ID, Product_ID),
    CONSTRAINT FK_SaleItems_Sales FOREIGN KEY (Sale_ID) REFERENCES Sales(ID),
    CONSTRAINT FK_SaleItems_Products FOREIGN KEY (Product_ID) REFERENCES Products(ID)
);

---
-- Table CartItems
-- NOTE: For a persistent cart, often a `session_id` or `user_id` is used,
-- and the "sold" or "cancelled" logic is handled at the order level, not the cart item.
-- `IsSold` and `IsCancelled` here suggest the cart also serves as a purchase history,
-- which is a valid approach.
CREATE TABLE CartItems (
    ID SERIAL PRIMARY KEY,
    User_ID INT,
    Product_ID INT,
    AddedAt TIMESTAMPTZ,
    Quantity INT,
    IsSold BOOLEAN,
    IsCancelled BOOLEAN,
    CONSTRAINT FK_CartItems_Users FOREIGN KEY (User_ID) REFERENCES Users(ID),
    CONSTRAINT FK_CartItems_Products FOREIGN KEY (Product_ID) REFERENCES Products(ID)
);

---
-- Table Images
CREATE TABLE Images (
    ID SERIAL PRIMARY KEY,
    URI TEXT,
    Product_ID INT,
    DeactivatedAt TIMESTAMPTZ,
    CONSTRAINT FK_Images_Products FOREIGN KEY (Product_ID) REFERENCES Products(ID)
);

---
-- Table Favorites (Junction table for Users and Products)
CREATE TABLE Favorites (
    User_ID INT,
    Product_ID INT,
    PRIMARY KEY (User_ID, Product_ID),
    CONSTRAINT FK_Favorites_Users FOREIGN KEY (User_ID) REFERENCES Users(ID),
    CONSTRAINT FK_Favorites_Products FOREIGN KEY (Product_ID) REFERENCES Products(ID)
);

---
-- Table Shipments
CREATE TABLE Shipments (
    ID SERIAL PRIMARY KEY,
    Sale_ID INT,
    ShippingStatus_ID INT,
    CONSTRAINT FK_Shipments_Sales FOREIGN KEY (Sale_ID) REFERENCES Sales(ID),
    CONSTRAINT FK_Shipments_ShippingStatus FOREIGN KEY (ShippingStatus_ID) REFERENCES ShippingStatuses(ID)
);

---
-- Table PaymentMethods
-- This table is designed to hold a single row of global payment configuration.
-- No auto-incrementing ID. The application should ensure only one row exists.
CREATE TABLE PaymentMethods (
    Id INT PRIMARY KEY DEFAULT 1, -- Using a fixed ID to enforce single row, or manage without PK if preferred.
    CBU VARCHAR(22),
    Alias VARCHAR(20),
    MercadoToken VARCHAR(256)
);
