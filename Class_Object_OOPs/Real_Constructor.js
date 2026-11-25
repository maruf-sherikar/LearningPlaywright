class TestCase{

    constructor(name, status, priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }


    display(){
        console.log(this.name + " ->" + this.status + " ->" + this.priority);
    }
}


let test1 = new TestCase("Login", "PASS", "P0");
let test2 = new TestCase("Logout", "FAIL", "P1");


test1.display();
test2.display();
