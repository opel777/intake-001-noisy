import { Person } from './ver-datos_interface';

export default function ageRange(arr: Person[]) {
    let entre18y25 = 0;
    let entre26y35 = 0;
    let entre36y45 = 0;
    let en45omas = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].edad >= 18 && arr[index].edad <= 25) {
        entre18y25 += 1;
      }
      if (arr[index].edad >= 26 && arr[index].edad <= 35) {
        entre26y35 += 1;
      }
      if (arr[index].edad >= 36 && arr[index].edad < 45) {
        entre36y45 += 1;
      }
      if (arr[index].edad >= 45) {
        en45omas += 1;
      }
    }
    return [entre18y25, entre26y35, entre36y45, en45omas];
  }