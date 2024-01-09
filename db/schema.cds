namespace db;

entity tbl1{
    ID : Integer;
    Name : String(30);
    Address : String(40);
}

entity Students{
   Name : String(34);
   Address : String(40);

}

entity kpilist{
  first_name: String(50);
  last_name : String(60);
  email : String(70);
  gender : String(20);
  }

entity productlist{
  Name:String(50);
  Address:String(60);
  Location : String(70);
}

entity Department{
  Name:String(70);
  EmpCount:Integer64;
}
