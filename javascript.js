let a = [{a:1},{a:4},{a:5},{a:3}];

let d = a.sort((x,y)=>{
    if(x.a > y.a){
        return 1
    }else if(x.a < y.a){
        return -1
    }
    return 0
});

const days = ['sun','mon','tue','wed','thu','fri','sat'];

const getDays=(day,num)=>{
    let indexOfDay = days.indexOf(day);
    return days[indexOfDay+num]
}


console.log(getDays('mon',2));
