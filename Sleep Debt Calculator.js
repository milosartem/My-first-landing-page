const getSleepHours = day =>{
  switch (day){
   case 'monday':
   return 8;
   case 'tuesday':
   return 8;
   case 'wednesday':
   return 8;
   case 'thursday':
   return 8;
   case 'friday':
   return 8;
   case 'saturday':
   return 9;
   case 'sunday':
   return 10;
  }
}

const getActualSleepHours = () => {
 const getActualSleepHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return getActualSleepHours;
}

const getIdealSleepHours = () => {
  var idealHours = 8;
  return idealHours *7 ;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    return console.log('User got the perfect amount of sleep')
  }else if(actualSleepHours > idealSleepHours){
    return console.log('User got more sleep than needed');
  }else if(actualSleepHours < idealSleepHours){
    return console.log('Get some rest');
  }else {
    return 'We have a problem!';
  }
}
console.log(calculateSleepDebt());
