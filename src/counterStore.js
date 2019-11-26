import {observable, action} from 'mobx';
class CounterStore {
  @observable counter = 0;
  @action increment() {
    this.counter++;
    console.log("increment", this.counter);
  }
  @action decrement() {
    this.counter--;
    console.log("decrement", this.counter);
  }
}

const counterStore = new CounterStore();
export default counterStore;
