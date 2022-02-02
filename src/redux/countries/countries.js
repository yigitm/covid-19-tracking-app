const GET_DATA = 'covid-19-tracking-app/countries/GET_DATA';
const baseURL = 'https://api.covid19tracking.narrativa.com/api?date_from=';

const initialState = [];

export const getData = (state) => ({
  type: GET_DATA,
  payload: state,
});

export const fetchData = async (dispatch) => {
  const response = await fetch(
    baseURL + `${dateHelper()}&date_to=${dateHelper()}`,
  );
  const data = await response.json();
  const countryDatas = data.dates[dateHelper()].countries;
  const dataValues = Object.entries(countryDatas);
  const stateData = [];

  dataValues.map((item, ind) => {
    let country = {
      name: item[0],
      id: item[1].id,
      newCase: item[1].today_new_confirmed,
      total: item[1].today_confirmed,
      regions: {
        region: item[1].regions,
      },
    };
    stateData.push(country);
  });

  dispatch(getData(stateData));
};

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
