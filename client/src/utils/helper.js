import moment from "moment";
export const setNameSystem = (str) => {
  return `JobSearching | ${str}`;
}

export function setMinAndDefaultDate(inputRef, inputValueDate){
  const today = new Date().toISOString().split('T')[0];
  inputRef.current.min = today;
  if(inputValueDate){
    inputRef.current.value = inputValueDate.split('T')[0] || today;
  }
};

export function disablePastDates(refDate) {
  const today = new Date().toISOString().split('T')[0];
  refDate.current.min = today;
}


export function convertFormat(refDate) {
  let targetDate = moment(refDate);
  return targetDate.format('DD,MMM,YYYY');
}

export function convertFormat2(refDate) {
  let targetDate = moment(refDate);
  return targetDate.format("YYYY-MM-DD")
}

export function ConvertDayRemaining(refdate) {
  let str_day_remaining = " days remaing";
  let str_day_end = " expired"

  //2024-12-30T17:00:00.000Z
  let today = moment().utc();
  let afterCovertDate = moment(refdate).utc();
  const daysDiff = afterCovertDate.diff(today, 'days');
  return daysDiff + str_day_remaining;

}