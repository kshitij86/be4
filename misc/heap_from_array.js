class Heap {
  constructor(_mode) {
    this.mode = _mode || "min";
    this.values = [];
    this.size = 0;
  }
  insert(_data) {
    this.values.push(_data);
    if (this.mode == "min") {
      this.min_heapify(this.size);
    } else if (this.mode == "max") {
      this.max_heapify(this.size);
    }
    this.size++;
  }
  printMode() {
    process.stdout.write(`${this.mode}\n`);
  }
  max_heapify(_idx) {
    if (_idx == 0) {
      return;
    }
    let parent;
    if (_idx % 2 == 0) {
      parent = (_idx - 2) / 2;
    } else {
      parent = (_idx - 1) / 2;
    }

    // to maintain the property of max heap
    if (this.values[parent] < this.values[_idx]) {
      let temp = this.values[parent];
      this.values[parent] = this.values[_idx];
      this.values[_idx] = temp;
    }
    this.max_heapify(parent);
  }
  min_heapify(_idx) {
    if (_idx == 0) {
      return;
    }
    let parent;
    if (_idx % 2 == 0) {
      parent = (_idx - 2) / 2;
    } else {
      parent = (_idx - 1) / 2;
    }

    // to maintain the property of min heap
    if (this.values[parent] > this.values[_idx]) {
      let temp = this.values[parent];
      this.values[parent] = this.values[_idx];
      this.values[_idx] = temp;
    }
    // call recursively for each parent
    // miodification only takes place in case of a violation
    this.min_heapify(parent);
  }
  printHeap() {
    for (let i = 0; i < this.size; i++) {
      process.stdout.write(this.values[i].toString() + " ");
    }
    process.stdout.write("\n");
  }
  extract() {
    // removes minmum/maximum from top and rearranges the heap

    // swap with last element
    let temp = this.values[0];
    this.values[0] = this.values[this.size - 1];
    this.values[this.size - 1] = temp;

    // decrease size of the heap
    this.size--;
    if (this.mode == "min") {
      // heapify from the last value
      this.min_heapify(this.size - 1);
    } else if (this.mode == "max") {
      this.max_heapify(this.size - 1);
    }
  }
  peek() {
    process.stdout.write(`${this.values[0]}\n`);
  }
}

// min heap
let h = new Heap("min");
for (let i = 6; i >= 0; i--) {
  h.insert(i);
}
h.printHeap();

// max heap
let g = new Heap("max");
for (let i = 0; i < 7; i++) {
  g.insert(i);
}
g.printHeap();
