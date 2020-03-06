let state = {
  count: 1
};

let listeners = [];

function subscribe(listener) {
   listeners.push(listener);
}

function changeCount(count) {
  state.count = count;
  listeners.forEach(listen=>{
    listen()
  })
}

subscribe(()=>{ 
  console.log('state.count 的值是：',state.count);
 })

changeCount(2)