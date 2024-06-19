function classDecorator(
    construntor: any;
){
   
}

@classDecorator
export class SuperClass{
    public muProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);