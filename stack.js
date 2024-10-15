function Stack() {
    var collection = [];

    this.print = function() {
      console.log(collection);
    };
    
    // Only change code below this line
    this.push = function(element)  {
      collection.push[element];
      this.print();
    }
  
    this.pop = function() {
      if(collection.length === 0) return -1;
      return collection.pop();
    }
  
    this.peek = function() {
      if(collection.length === 0) return -1;
      return collection[collection.length-1];
    }
  
    this.isEmpty = function() {
      if(collection.length === 0) {
        return true;
      }
      return false;
    }
  
    this.clear = function() {
      collection = [];
    }
    // Only change code above this line
  }