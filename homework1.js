let compare = (num1) => {
    return (num2) => {
      if (num1 > num2) {
        return true
      } else if (num1 < num2) {
        return false
      } else {
        return null;
      };
    };
  };
  
  const comp = compare(20);
  console.log(comp(10));
  console.log(comp(20));
  console.log(comp(35));