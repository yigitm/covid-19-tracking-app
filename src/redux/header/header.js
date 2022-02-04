const GET_TOTAL = 'covid-19-tracking-app/header/GET_TOTAL';
const baseURL = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = [];

export const getTotal = (state) => ({
  type: GET_TOTAL,
  payload: state,
});

export const fetchHeaderData = async (dispatch) => {
  const response = await fetch(baseURL + `${dateHelper()}`);
  const data = await response.json();
  const metaData = Object.entries(data.total);

  const totalCase = {
    total: metaData[6][1],
  };
  console.log(totalCase);
  dispatch(getTotal(totalCase));
};

export const dateHelper = () => {
  let months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  let date = new Date();
  let day =
    date.getDate() < 10
      ? '0' + (date.getDate() - 1)
      : '0' + (date.getDate() - 1);
  let month =
    date.getMonth() < 10
      ? '0' + months[date.getMonth()]
      : '0' + months[date.getMonth()];
  let year = date.getFullYear();
  let dataDate = [year.toString(), month, day.toString()].join('-');
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
