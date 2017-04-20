import {
  FETCHING_POETRY,
  //GET_RANDOM_TITLE,
  GET_POEM,
  API_FAIL
} from './types';

export const getRandomPoem = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_POETRY });
    let randomTitle = poetryDbFetch(dispatch, getRandomTitle);
    //let cleanedTitle = cleanTitle(randomTitle);
    poetryDbFetch(dispatch, getPoem, randomTitle);
  };
};

const poetryDbFetch = (dispatch, fetchAction, title=null) => {
  //return (dispatch) => {
    //dispatch({ type: FETCHING_POETRY });
    let url = 'https://poetrydb.org/title';
    if (title) { url += title };
    //if (title) cleanTitle(title); <-- assume title is clean
    //let fetcher = coroutine(createFetcher(url));
    // run generator
    try {
      let data = fetch(url); //.json();
    } catch (error) {
      console.error(error);
    }
    console.log(url);
    //console.log(data);
    // // return appropriate field if specified
    // if (field) return data.field
    // // else return the entire object
    //fetcher
    data
      .then(data => fetchAction(dispatch, data))
      .catch(() => apiFail(dispatch));
  //};
};

//const cleanTitle = (title) => title.replace(/\\/, '');

const apiFail = (dispatch) => {
  dispatch({ type: API_FAIL });
};

const getRandomTitle = (dispatch, data) => {
  let i = getRandomInt(0, data.titles.length);
  return data.titles[i];
};

const getPoem = (dispatch, data) => {
  //let cleanedTitle = cleanTitle(data.title);
  dispatch({
    type: GET_POEM,
    payload: data
    //{ title: cleanedTitle, author: data.author, lines: data.lines }
  });
};






// const fetchTitles = () => {
//   return (dispatch) => {
//     dispatch({ type: FETCH_TITLES });
//     let fetcher = coroutine(createFetcher(
//       'http://poetrydb.org/title',
//       'titles'
//     ));
//     // run generator
//     fetcher
//       .then(data => getRandomTitle(dispatch, data))
//       .catch(() => apiFail(dispatch));
//   };
// };




const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

//// I. create generator ////
function* createFetcher(url) {
  // fetch API data
  const response = yield fetch(url);
  // parse response
  const data = yield response.json();
  // // return appropriate field if specified
  // if (field) return data.field
  // // else return the entire object
  return data;
};
//// II. generator helper function, coroutine() ////
const coroutine = (gen) => {
  const generator = gen();
  // call generator recursively via handle(), which will
  // get result from generator.next() and do something with it
  const handle = (result) => {
    // if generator {done: true}, end recursion
    if (result.done) return Promise.resolve(result.value);
    // if generator {done: false}, both wait until promise has resolved...
    return Promise.resolve(result.value)
      // ...and then pass result back into handle
      .then(res => handle(generator.next(res)));
  };
  return handle(generator.next());
};
