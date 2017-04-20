

//// I. create generator ////
function* createFetcher(url, field=null) {
  // fetch API data
  const response = yield fetch(url)
  // parse response
  const data = yield response.json()
  // return appropriate field if specified
  if (field) return data.field
  // else return the entire object
  return data
}

//// II. generator helper function, coroutine() ////
//  [can also npm install co and write,
//  `const coroutine = require('co')`.]
const coroutine = (gen) => {
  const generator = gen()
  // call generator recursively via handle(), which will
  // get result from generator.next() and do something with it
  const handle = (result) => {
    // if generator {done: true}, end recursion
    if (result.done) return Promise.resolve(result.value)
    // if generator {done: false}, both wait until promise has resolved...
    return Promise.resolve(result.value)
      // ...and then pass result back into handle
      .then(res => handle(generator.next(res)))
  }
  return handle(generator.next())
}

//// III. generator in action ////
// create generator instance
const fetcher = coroutine(createFetcher)
// run generator
fetcher.then(data)
