namespace mycappiext.srv;

using { Northwind } from './external/Northwind';

service CatalogService {

  entity Products as projection on Northwind.Products{
    ProductID,ProductName,SupplierID,CategoryID,QuantityPerUnit,UnitPrice,UnitsInStock,UnitsOnOrder,ReorderLevel,Discontinued
    //  ProductID,ProductName,SupplierID,CategoryID
  } ;
}


