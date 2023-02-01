import moment from "moment";

/**
 * Function to convert date object to format: "MMM D, YYYY"
 * @param {string} date string coming from new Date(date) object
 */

export const convertDate = (date) => {
  if (date) {
    return moment(date).format("MMM D, YYYY");
  }
};

/**
 * Function to check if date is in this week
 * @param {Date} date
 */

export const isDateInThisWeek = (date) => {
  const now = moment();
  const input = moment(date);

  return now.isoWeek() === input.isoWeek();
};
