console.log("run TRAIN")
// B - TASK

// A - TASK

console.log("Jack Ma maslsahatlari");

const list = [
    "yaxshi talaba bo'ling", // 0-20
    "togri boshliq tanlang va kamroq hato qiling", // 20-30
    "uzingizga ishlashni boshlang", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga invertitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi!" // 60-70
];

function maslahatBering(a, callback){
    if(typeof a !== "number") callback("insert a number", null);
    else if(a <= 20) callback(null, list[0])
};