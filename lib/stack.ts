
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

  toList(elems: Item<T>):T[] {
  var tmp = elems;
  var result:T[] = [];
   while(tmp != undefined){
      result.push(tmp.element);
      tmp = tmp.next;
      }

   return result.reverse();
    }

  accessToVersion(ver:number):T[] {
     var tmp = this.end;
     var count = 0;
     while(tmp != null && count != ver){
        tmp = tmp.next;
        count += 1;
    }

    return this.toList(tmp.next);

  }
}




