let testMatrix = [
                ["login", "PaymentAddress", 200],
                ["checkin", "fail", 404],
                ["search", "pass", 200]
]


for(let i = 0; i<testMatrix.length; i++){

    for(let j = 0; j<testMatrix[i].length; j++){

    process.stdout.write(testMatrix[i][j] + "");
    }
    console.log("");
}