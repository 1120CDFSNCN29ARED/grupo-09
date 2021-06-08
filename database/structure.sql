USE AMapsDb;

CREATE TABLE `Users` (
        `UserId` INT UNSIGNED NOT NULL AUTO_INCREMENT FOREIGN KEY,
        `Names` VARCHAR(50) NOT NULL,
        `Email` VARCHAR(50) NOT NULL,
        `Address` VARCHAR(50) NOT NULL,
        `Password` VARCHAR(50) NOT NULL,
        `Image` VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (`Id`)
)

CREATE TABLE `Products` (
        `ProductId` INT UNSIGNED NOT NULL AUTO_INCREMENT FOREIGN KEY,
        `Name` VARCHAR(50) NOT NULL,
        `Continent` VARCHAR(50),
        `Description` TEXT NOT NULL,
        `UnitPrice` DECIMAL(10, 2),
        `Image` VARCHAR(100) NOT NULL,
        `Stock` INT,
    PRIMARY KEY (`Id`)
)

CREATE TABLE `Order` (
        `OrderId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        `UserId` FOREIGN KEY,
        `ProductId` FOREIGN KEY,
        `Quantity` INT UNSIGNED NOT NULL,
        `Price` DECIMAL(10, 2),
    PRIMARY KEY (`OrderId`)
)
