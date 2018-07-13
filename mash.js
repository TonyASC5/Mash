
//console.log (mash());
console.log("Welcome to mash the game. PLease provide a dream house, dream car,dream  # of children", "Sexual preferance (man or woman)", " and dream career");

if( !process.argv[2] || !process.argv[3] || !process.argv[4])
{
    console.log ("please inoput your options");
}
else{

        const live = ["Mansion","Apartment","House", "Shack", process.argv[2], "Street", "Penthouse", "igloo"]; 

    function getHome(){
        let rand = Math.random()*live.length;
        let floor = Math.floor(rand);
        return live[floor];
    }



    function getChildrenCount(){
        let math = Math.random ()*2;
        let chance = Math.floor(math);
        if (chance ==0){
        let rand = Math.random()*101;
        let floor = Math.floor(rand);
        return floor;
        }
        else{
            return process.argv[3];
        }
        
    }

    const car = ["corvette", "Honda","Horse", " Hundai", "BMW", "Lambo", "Mercedes Benz", "Lambo", "Aston Martin", "Nothing"
    , "Chariot", "PiggyBack Ride", process.argv[4]];

    function getCar(){
        let rand = Math.random()*car.length;
        let floor = Math.floor(rand);
        return car[floor];

    }

    let womanNames = ["Jane", "Rosemarry", "Elizabeth", "Caroline", "Tiffany", "Katelyn", "Kiara", "KIKI", "Karen"];
    let manNames = ["James", "Jason", "Daquan", "Tylor", "Jerome", "Dylan", "Juan", "Carlos", "Paul"];

    function findSpouse(){

    if (process.argv[5] == "woman"){

    let rand = Math.random()* manNames.length;
    let floor = Math.floor(rand);
    return womanNames[floor];
    }
    else {
    let rand = Math.random()* manNames.length;
    let floor = Math.floor(rand);
    return manNames[floor];
    }
    
    }
    getsalary = () =>{
    arrow = Math.floor(Math.random()*100000);
    return arrow
}
    lifeExpectancey = () =>
    {
    age = (Math.random()*100) + 20;
    death = Math.floor(age);
    return death;
    }

    let career = ["drug dealer", "mathamatician", "Programer", "Free Loader", "Docter", "politician", "President", "Musician"
, " lol what's a job?😂😂", " Astronaut", "teacher", "Mafia Boss"]
    getJob = () =>{
    welp = Math.random()* career.length;
    cut = Math.floor(welp);
    return career[cut];
    }

    function mash (){

        return "You will live in a(n)" +" "+ getHome() + " and you will have"
        + " " + getChildrenCount() + " "+ "kids!" +", and you’ll drive a " + getCar() +" 😎" + " You will marry "+ findSpouse() + " 😍 ❤"
        + " You will recive " + getsalary() + " You will live to " + lifeExpectancey() + " you work as a(n)" + getJob();
        }
    console.log(mash());
}

 //throw keyword that prints used with arrow functions 
 // lol = () => {

// throw or return}