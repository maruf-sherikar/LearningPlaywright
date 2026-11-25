// private fields (#)
// public are normal




class credentials{
    #apikey;
    user;

    constructor (user, key){
        this.user = user;
        this.#apikey = key;

    }

    marufgetAuthHeader(){
        return "Bearer" + this.#apikey;

    }
}

let cred = new credentials("admin", "1234567890");
console.log(cred.user);