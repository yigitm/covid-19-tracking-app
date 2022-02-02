const GET_TOTAL = 'covid-19-tracking-app/header/GET_TOTAL';
const baseURL = 'https://api.covid19tracking.narrativa.com/api?date_from=';

const initialState = [];

export const getTotal = (state) => ({
  type: GET_TOTAL,
  payload: state,
});

export const fetchHeaderData = async (dispatch) => {
  const response = await fetch(
    baseURL + `${dateHelper()}&date_to=${dateHelper()}`,
  );
  const data = await response.json();
  const metaData = Object.entries(data.total);
  const stateData = [];

  const totalCase = {
    total: metaData[6][1],
  };
  stateData.push(totalCase);
  dispatch(getTotal(stateData));
};

export const dateHelper = () => {
  let date = new Date();
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  let year = date.getFullYear();
  let dataDate = [year.toString(), day.toString(), month.toString()].join('-');
  return dataDate;
};

const headerReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL:
      return action.payload;
    default:
      return state;
  }
};

export default headerReducers;
