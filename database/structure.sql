USE AMapsDb;

CREATE TABLE `Users` (
        `UserId` INT UNSIGNED AUTO_INCREMENT FOREIGN KEY,
        `Names` VARCHAR(50) NOT NULL,
        `Email` VARCHAR(50) NOT NULL,
        `Address` VARCHAR(50) NOT NULL,
        `Password` VARCHAR(50) NOT NULL,
        `Image` VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (`UserId`)
)

CREATE TABLE `Products` (
        `ProductId` INT UNSIGNED AUTO_INCREMENT FOREIGN KEY,
        `Name` VARCHAR(50) NOT NULL,
        `Continent` VARCHAR(50),
        `Description` TEXT NOT NULL,
        `UnitPrice` DECIMAL(10, 2),
        `Image` VARCHAR(100) NOT NULL,
        `Stock` INT,

    PRIMARY KEY (`ProductId`),
)

CREATE TABLE `Order` (
        `OrderId` INT UNSIGNED AUTO_INCREMENT,
        `UserId` INT,
        `ProductId` INT,
        `Quantity` INT UNSIGNED NOT NULL,
        `Price` DECIMAL(10, 2),
    PRIMARY KEY (`OrderId`)
    FOREIGN KEY (`ProductId`) REFERENCES `Products`(`ProductId`),
    FOREIGN KEY (`UserId`) REFERENCES `Users`(`UserId`)
)
 