
class DBConnection{
    private static connection:string;

    private constructor(value:string) {
        DBConnection.connection=value;
    }

    public static getConnection(){
        if (!DBConnection.connection){
            new DBConnection("test connection");
        }
        return DBConnection.connection;
    }
}

let connection = DBConnection.getConnection();
console.log(connection);