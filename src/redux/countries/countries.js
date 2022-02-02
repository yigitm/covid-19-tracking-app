const GET_DATA = 'covid-19-tracking-app/countries/GET_DATA';
const baseURL = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = [];

export const getData = (state) => ({
  type: GET_DATA,
  payload: state,
});

export const fetchData = async (dispatch) => {
  const response = await fetch(
    `https://api.covid19tracking.narrativa.com/api?date_from=${dateHelper()}&date_to=${dateHelper()}`,
  );
  const data = await response.json();
  dispatch(getData(data));

  const continents = await fetch('https://api.teleport.org/api/continents/');
  const response2 = await continents.json();

  dispatch(getData(response2._links['continent:items']));
  //loop line 21, add /countries to end

export const dateHelper = () => {
  let date = new Date();
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  let year = date.getFullYear();
  let dataDate = [year.toString(), day.toString(), month.toString()].join('-');
  return dataDate;
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
