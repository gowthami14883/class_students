const checkLogin = (username,password) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(username === "admin" && password === "1293"){
                resolve("Login success");
            }else{
                reject("invalid credentials");
            }
        },1000);
    });
}
module.exports = checkLogin;