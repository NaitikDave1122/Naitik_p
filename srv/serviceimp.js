const cds=require("@sap/cds");
;

const handeler=require('./handeler');

module.exports=cds.service.impl(srv=>{
    srv.on('READ','tbl',handeler._getKpidetail);
    srv.on('CREATE','tbl2',handeler.postkpidetail);
    srv.on('POST','ExcelUpload',handeler.Postdata);
    srv.on('POST','Students',handeler.Poststudent)
    srv.on('CREATE','kpilist',handeler.Postkpidata);
    srv.on('READ','Department',handeler.insertdeprt);
})
