export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((weekDay) => {
    // returns arr when day names matching
    return weekDay.name === day;
  });
  // if arr empty, return empty arr
  if (filteredDays.length === 0) {
    return [];
  }
  // returns appt obj at the appoitnment id
  const findAppts = filteredDays[0].appointments.map((appt) => {
    // console.log(`filtered:`, filteredDays[0].appointments);
    // console.log(state.appointments[appt]);
    return state.appointments[appt];
  });
  return findAppts;
}
