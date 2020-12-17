function Electrotechnics(name) {
    this.power = 'power' 
    this.name = name
    this.statusOnOff = 'Off'
}

Electrotechnics.prototype.turnOnOff = function (click) {
    // this.statusOnOff - это не совсем корректно, т.к. свойства должны объявляться в конструкторе
    if (click == 'On') {
        this.statusOnOff = 'On'
        console.log(`${this.name} включен(а)`)
    } else {
        this.statusOnOff = 'Off'
        console.log(`${this.name} выключен(а)`)
    }
}
Electrotechnics.prototype.powerOnOff = function () {
    if (this.statusOnOff == 'On') {
        // this.power = this.power - данная строчка не имеет смыслв, т.к. вы записываете в свойство уже имеющееся значение.
        console.log(`Потребляемая мощность ${this.power} Вт`)
    } else {
        // this.power = 0; - Если задумка была просто показать, что выключенное устройство не потребляет энергию, не нужно переписывать свойство, потому что первоначальное значение в таком случае будет утеряно. Если устройство выключено, можно просто вывести 0 в строке и ничего не переписывать
        console.log('Потребляемая мощность 0 Вт')
    }
}

// Исправила название конструктора на более конкретное, чтобы оно соответствовало содержимому
function Lamp(name, power, finish, lightingTechnology) {
    this.name = name
    this.power = power
    this.finish = finish
    this.lightingTechnology = lightingTechnology
    this.category = 'Home and Garden'
    this.changeBrightness = function () {
        console.log(`${this.name} горит ярче`)
    };
}
Lamp.prototype = new Electrotechnics()

function Electronics(name, power, ram) {
    this.name = name
    this.power = power
    this.ram = ram
    this.category = 'Computers, Tablets & Network Hardware'
    this.printDocument = function () {
        console.log('Документ отправлен на печать')
    };
}
Electronics.prototype = new Electrotechnics()


const lamp = new Lamp('Настольная лампа', 30, 'Chrome Plated', 'LED');
//lamp.power = 30;
//lamp.Finish = 'Chrome Plated';
//lamp['lighting Technology'] = 'LED';
// lamp.changeBrightness = function () {
//     console.log(`${this.name} горит ярче`)
// };

// Все эти свойства и методы должны задаваться в конструкторе. Представьте, что вам нужно будет описать 10 таких ламп. В этом и есть смысл использования конструкторов - не писать один и тот же код при создании однотипных объектов, а максимально унифицировать из создание и перенести максимум кода в конструктор. Переписала на правильный вариант.


const computer = new Electronics('Компьютер', 200, '16 GB');
// computer.power = 200;
// computer.RAM = '16 GB';
// computer.printDocument = function () {
//     console.log('Документ отправлен на печать')
// };
// Выше написанное касается и этого конструктора тоже

lamp.turnOnOff('On');
lamp.powerOnOff();
computer.turnOnOff('On');
computer.powerOnOff();
console.log(`Общая потребляемая мощность ${lamp.power + computer.power} Вт`);