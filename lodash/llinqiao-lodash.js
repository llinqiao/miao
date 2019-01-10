var llinqiao = {
  chunk: function chunk(ary, size) {
    var result = []
    var l = Math.floor(ary.length / 3)
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
  }
}

