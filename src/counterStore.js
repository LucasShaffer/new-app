import {observable, action} from 'mobx';
class CounterStore {
  counter = observable.box(0);
  @action.bound increment() {
    this.counter++;
    console.log("increment", this.counter);
  }
  @action.bound decrement() {
    this.counter--;
    console.log("decrement", this.counter);
  }
}

const counterStore = new CounterStore();
export default counterStore;
