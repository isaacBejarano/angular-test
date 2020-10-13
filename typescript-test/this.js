"use strict";
var obj = {
    props: "props",
    classicFn: function () {
        setTimeout(function () {
            //   console.log("classicFn", this.props); // undefined
        }, 1000);
    },
    arrowFn: function () {
        var _this = this;
        setTimeout(function () {
            console.log("arrowFn", _this.props); // props
        });
    },
};
obj.classicFn(); // this refs globalThis, where no props exists
obj.arrowFn(); // this refs obj, where props existes
