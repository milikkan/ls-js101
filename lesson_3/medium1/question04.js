// Is there a difference between these implementations, 
// other than the method she used to add an element to the buffer?
//  You may assume that newElement will always be a primitive value.

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// first implementation mutates the buffer parameter. So any argument passed
// for the buffer parameter will be mutated. This is a side effect. The caller
// will realize that the buffer is mutated after the function returns.
// Second implementation does not mutate any arguments.