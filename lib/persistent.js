var Persistent;
(function (Persistent) {
    /* This abstract class for simple linear data structures: List, Stack, Array ... */
    var LinearPersistent = (function () {
        function LinearPersistent() {
        }
        /* Set new element */
        LinearPersistent.prototype.put = function (item) {
            TypeError("This is abstract method");
        };
        LinearPersistent.prototype.pop = function () {
            TypeError("this is abstract method");
        };
        return LinearPersistent;
    })();
    Persistent.LinearPersistent = LinearPersistent;
})(Persistent || (Persistent = {}));
/// <reference path="./persistent.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Item = (function () {
    function Item(next, element) {
        this.next = next;
        this.element = element;
    }
    return Item;
})();
var Stack = (function (_super) {
    __extends(Stack, _super);
    function Stack(start, end) {
        if (start === void 0) { start = null; }
        if (end === void 0) { end = null; }
        _super.call(this);
        this.start = start;
        this.end = end;
    }
    Stack.prototype.put = function (item) {
        return new Stack(this.start, new Item(this.end, item));
    };
    Stack.prototype.pop = function () {
        return new Stack(this.start, this.end.next);
    };
    Stack.prototype.head_element = function () {
        return this.end.element;
    };
    Stack.prototype.toList = function () {
        var tmp = this.end;
        while (tmp != undefined) {
            console.log(tmp.element);
            tmp = tmp.next;
        }
    };
    return Stack;
})(Persistent.LinearPersistent);
var stack = new Stack();
var data = stack.put("A").put("B").put("C");
data.toList();
