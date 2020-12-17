class Electrotechnics {
    constructor(name) {
        this.power = 'power'
        this.name = name
    }
    turnOnOff(click) {
        this.statusOnOff
        if (click == 'On') {
            this.statusOnOff = 'On'
            console.log(`${this.name} включен(а)`)
        } else {
            this.statusOnOff = 'Off'
            console.log(`${this.name} выключен(а)`)
        }
    }
    powerOnOff() {
        if (this.statusOnOff == 'On') {
            this.power = this.power
            console.log(`Потребляемая мощность ${this.power} Вт`)
        } else {
            this.power = 0;
            console.log(`Потребляемая мощность ${this.power} Вт`)
        }
    }
}

class ElectricalAppliances extends Electrotechnics {
    constructor(name) {
        super(name);
        this.category = 'Home and Garden'
    }
}

class Electronics extends Electrotechnics {
    constructor(name) {
        super(name);
        this.category = 'Computers, Tablets & Network Hardware'
    }
}

const lamp = new ElectricalAppliances('Настольная лампа');
lamp.power = 30;
lamp.Finish = 'Chrome Plated';
lamp['lighting Technology'] = 'LED';
lamp.changeBrightness = function () {
    console.log(`${this.name} горит ярче`)
};
const computer = new Electronics('Компьютер');
computer.power = 200;
computer.RAM = '16 GB';
computer.printDocument = function () {
    console.log('Документ отправлен на печать')
};

lamp.turnOnOff('Off');
lamp.powerOnOff();
computer.turnOnOff('On');
computer.powerOnOff();
console.log(`Общая потребляемая мощность ${lamp.power + computer.power} Вт`);

// В этом задании ошибки аналогичны тем, о которых я писала в предыдущем, постарайтесь на основе того, что я исправила там, провести работу над ошибками и исправить то же самое здесь :)