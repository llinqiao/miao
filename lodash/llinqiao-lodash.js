var llinqiao = {
  chunk: function chunk(ary, size) {
    var result = []
    var l = Math.floor(ary.length / size)
    var j = 0
    for (var i = 0; i < l; i++) {
      result.push(ary.slice(j, j + size))
      j = j + size
    }
    if (ary.length % size === 0) {
      return result
    } else {
      result.push(ary.slice(j, ary.length))
      return result
    }
  },

  compact: function compact(array){
    var result = []
    for(var i = 0;i<array.length;i++){
      if(array[i]!==false&&array[i]!==null&&array[i]!==0&&array[i]!==""&&array[i]!==undefined&&array[i]===array[i]){
        result.push(array[i])
      }
    }
    return result
  },

  concat: function concat(array,size){
    var result = array
    for(var i = 1;i<arguments.length;i++){
      if(arguments[i] instanceof Array){
        for(var j = 0;j<arguments[i].length;j++){
          result.push(arguments[i][j])
        }
      }else{
        result.push(arguments[i])
      } 
    }
    return result
  },

  



  after:function after(n,func){
    var count = 0
    return function(...args){
      count++
      if(count>=n){
        return func()
      }
    }
  },


  unary:function unary (func){
    return function(...args){
      var first = args.slice(0,1)
      return func(...args)
    }
  },

  ary:function ary (func,[n=func.legth]){
    return function(...args){
      var inits = args.slice(0,n)
      return func(...inits)
    }
  },

  negate:function negate (predicate){
    return function (...args){
      return !predicate(...args)
    }
  },


  


  
  






}


