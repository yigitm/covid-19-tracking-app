const GET_DATA = 'covid-19-tracking-app/countries/GET_DATA';
const baseURL = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = [];

export const getData = (state) => ({
  type: GET_DATA,
  payload: state,
});

export const fetchData = async (dispatch) => {
  const response = await fetch(baseURL + 'countries');
  const list = await response.json();
  let countryData = [];

  list.countries.map((item) => {
    let country = {
      name: '',
      id: '',
      link: '',
    };
    country.name = item.name;
    country.id = item.id;
    country.link = item.links[0].href;
    countryData.push(country);
  });
  dispatch(getData(countryData));
};

const countryReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducers;
