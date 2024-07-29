class SlotMachine {
  constructor() {
    this.monedas = 1;
  }

  play() {
    this.monedas++;
    const slot1 = () => Math.random() >= 0.5;
    const slot2 = () => Math.random() >= 0.5;
    const slot3 = () => Math.random() >= 0.5;
    if (slot1() && slot2() && slot3()) {
      console.log(`Congratulations!!!. You won ${this.monedas} coins!!`);
      this.monedas = 1;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();
machine1.play(); 
machine1.play();
machine1.play();
machine1.play();
