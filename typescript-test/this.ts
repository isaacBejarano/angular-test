let obj = {
  props: "props",

  classicFn() {
    setTimeout(function () {
      //   console.log("classicFn", this.props); // undefined
    }, 1000);
  },

  arrowFn() {
    setTimeout(() => {
      console.log("arrowFn", this.props); // props
    });
  },
};

obj.classicFn(); // this refs globalThis, where no props exists
obj.arrowFn(); // this refs obj, where props existes
