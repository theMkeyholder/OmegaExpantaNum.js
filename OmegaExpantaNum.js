var OEC = {
debug: 0,
notation: "letter"
}
class OENnumber {
  constructor(array) {
  this.array = array
  }
  toNumber() {
  if (this.array.length = 0) {
  return this.array[0]
  } else {
  temp = this.array[this.array.length-1]
    for (i=this.array.length,i--,>-1) {
      if (typeof this.array[i] = "number") {
        if ([1,2,3,4,"E","F","G","H"].indexOf(this.array[i]) != -1) {
        temp2 = [1,2,3,4,"E","F","G","H"]
        temp = temp2[temp2.indexOf(this.array[i])+4]+ temp
        }
      }
    }
  }
  }
}
