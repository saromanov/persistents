
/// <reference path="./persistent.ts" />
/// <reference path="./item.ts" />

import Item = UserItem.Item
class Stack<T> extends Persistent.LinearPersistent<T> {
  private start: Item<T>;
  private end: Item<T>;
      constructor(start: Item<T>=null, end: Item<T>=null) {
      super()
      this.start = start;
      this.end=end;
  }
  
  put(item:T):Stack<T> {
      return new Stack<T>(this.start, new Item<T>(this.end, item));
    }

    pop(): Stack<T>{
      return new Stack<T>(this.start, this.end.next);
  }

  head_element(){
    return this.end.element;
  }

  toList() {
   var tmp = this.end;
   while(tmp != undefined){
      console.log(tmp.element);
      tmp = tmp.next;
    }
  }
}
