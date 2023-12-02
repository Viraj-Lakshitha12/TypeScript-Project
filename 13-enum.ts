//enum

enum Roles{
    SUPER_ADMIN,
    ADMIN,
    MANEGER,
    SELLER,
    BUYER
}

let myRoles:Roles = Roles.ADMIN;
console.log(myRoles);

function sendMassage(role:Roles) {
    switch (role){
        case Roles.SUPER_ADMIN:
            console.log("Hello ,SUPER_ADMIN");
            break;
        case Roles.ADMIN:
            console.log("Hello ,ADMIN");
            break;
        case Roles.MANEGER:
            console.log("Hello ,MANEGER");
            break;
        case Roles.SELLER:
            console.log("Hello ,SELLER");
            break;
        case Roles.BUYER:
            console.log("Hello ,BUYER");
            break;
    }
}

sendMassage(myRoles);