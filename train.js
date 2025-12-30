// console.log("run TRAIN")
// B - TASK

// A - TASK








//Class
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//        Callback & Async Functions — Jack Ma
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

console.log("Jack Ma maslahatlari!");

// data
const list = [
    "1. Yaxshi talaba boling!", //0-20
    "2. Togri boshliq tanlang va koproq hato qiling!", // 20-30
    "3. O'zingizga ishlashni boshlang!", // 30-40
    "4. Siz kuchli bo'lgan narsalarni qiling!", // 40-50
    "5. Yoshlarga invertitsiya qiling!", // 50-60
    "6. Endi dam oling, foydasi yo'q!" //60+
];





// ======================================= Callback function ===============================================

// define callback func
function maslahatBering(yosh, callback){
    if(typeof yosh !== 'number') callback("Please, insert number!", null);
    else if(yosh <= 20) callback(null, list[0]);
    else if(yosh > 20 && yosh <= 30) callback(null, list[1]);
    else if(yosh > 30 && yosh <= 40) callback(null, list[2]);
    else if(yosh > 40 && yosh <= 50) callback(null, list[3]);
    else if(yosh > 50 && yosh <= 60) callback(null, list[4]);
    else{
        // ex 1
        callback(null, list[5]);

        // ex 2
        // setTimeout(function(){
        //     callback(null, list[5]);
        // }, 3000);

        // ex 3
        // setInterval(function(){
        //  callback(null, list[5])
        // }, 1000);
    };
};

// call func
console.log("passed here: 0");

maslahatBering(66, (err, data) => {
    if(err) console.log("Error: ", err);
    // console.log("Javob:", data)
    else(
        console.log("Javob:", data)
    );
});

console.log("passed here: 1");

// ======================================= END Callback ===============================================







// ============================================ Async =================================================

//sync functions get response immidetely
//async functions get response after all sync functions got their responses.

// define async func
async function maslahatBering2(yosh){
    if(typeof yosh !== 'number') throw new Error("Please, insert number!");
    else if(yosh <= 20) return list[0];
    else if(yosh > 20 && yosh <=30) return list[1];
    else if(yosh > 30 && yosh <=40) return list[2];
    else if(yosh > 40 && yosh <=50) return list[3];
    else if(yosh > 50 && yosh <=60) return list[4];
    else{
        // ex 1
        return list[5];

        // ex 2  "possible to use core func in async with Promise func"
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve(list[5]);
        //   }, 3000);
        // });
    };
};

//------ * call via then / catch * ------//

// console.log("passed here: 0");

// maslahatBering(66)
//   .then((data)=> {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err.message);
//   });

// console.log("passed here: 1");


//------ * call via async / await * ------//

// console.log("passed here: 001");

// async function run() {
//     let javob;
  
//     javob = await maslahatBering2(18);
//     console.log(javob);

//     javob = await maslahatBering2(66);
//     console.log(javob);
    
//     javob = await maslahatBering2(33);
//     console.log(javob);
// };
// run();

// console.log("passed here: 002");

// ========================================== END Async ================================================