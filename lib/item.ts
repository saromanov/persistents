
//Basic item for linear persistent data structure
module UserItem{
export class Item<T>{ 
    next: Item<T>;
    element :T 
    constructor(next: Item<T>, element: T){
        this.next = next;
        this.element = element;
    }
    }
}

