var db= require("../database/db_connection");

var list={
    getAllList:function (callback){
        return db.query("Select * from list",callback);
    },
    addList:function (list,callback) {
        return db.query("Insert into list(name) values(?)",[list.name],callback);
    },
    deleteList:function (id,callback) {
        return db.query("delete from list where Id=?",[id],callback);
    },
    updateList:function (id,list, callback) {
        return db.query("update list set name=? where Id=?",[list.name,id],callback);
    }
}
module.exports=list;