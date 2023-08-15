export enum Gender {
    FEMALE, MALE
}
//type AlterGender = "MALE" | "FEMALE";


interface Person {
    id: number;
    name: string;
    gender: Gender;
    birthDate: Date;
}

class HumanBeing implements Person {

    private _id: number;
    private _name: string;
    private _gender: Gender;
    private _birthDate: Date;
  
    constructor(id: number, name: string, gender: Gender, birthDate: Date){
      this._id = id;
      this._name = name;
      this._gender = gender;
      this._birthDate = birthDate;
    }
    
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get gender(){
        return this._gender;
    }
    get birthDate(){
        return this._birthDate;
    }

  }

/*
const me: Person = {
    id: 1,
    name: 'John',
    gender: Gender.MALE,
    birthDate: new Date("01-01-2015")
}
console.log(me);
*/

export const getInstance = (id: number, name: string, gender: Gender, birthDate: Date): HumanBeing => {
    return new HumanBeing(id, name, gender, birthDate);
}
