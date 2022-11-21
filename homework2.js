let main = function(num, func) {
    return function func(x) {
      return num ** x
    };
  };
  
  
  console.log(main(5)(3));