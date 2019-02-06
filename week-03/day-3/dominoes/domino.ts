
  interface Comparable {
    compareTo(other: Comparable): number;
    }
    
  
  
class Domino implements Comparable { 
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  compareTo(other: Domino){
    let result: number = 1
    if(other.values[1] === this.values[0]){
      result = 0;
    }else if(other.values[1] < this.values[0]){
      result = -1;
    }else{result = 1}
    return result;
  }
}

export {Domino};