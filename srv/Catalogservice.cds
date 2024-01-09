using db from '../db/schema';


service MyService @(impl: './serviceimp.js') {

    entity tbl as select from db.tbl1;
    entity tbl2 as select from db.tbl1;  
    @cds.persistence.skip
    @odata.singleton
    entity ExcelUpload {
            @Core.MediaType : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            excel : LargeBinary;
        };
    entity Students as select from db.Students;   
    entity kpilist as select from db.kpilist;
    entity Department as select from db.Department;

}
