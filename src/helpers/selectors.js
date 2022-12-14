export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((weekDay) => {
    // returns arr when day names matching
    return weekDay.name === day;
  });
  // if arr empty, return empty arr
  if (filteredDays.length === 0) {
    return [];
  }
  // returns appt obj at the appoinment id
  const findAppts = filteredDays[0].appointments.map((appt) => {
    return state.appointments[appt];
  });
  return findAppts;
}

export function getInterview(state, interview) {
  // if no intreview obj return null
  if (!interview) {
    return null;
  }
  // returns a new interview obj w/ the interview data
  const interviewer = state.interviewers[interview.interviewer];

  return { ...interview, interviewer };
}

export function getInterviewersForDay(state, day) {
  // const filteredDays = state.days.find((d) => d.name === day);
  const filteredDays = state.days.filter((weekDay) => {
    // returns arr when day names matching
    return weekDay.name === day;
  });
  // if arr empty, return empty arr

  if (filteredDays.length === 0) {
    return [];
  }
  // returns appt obj at the appoinment id
  const findInterviewers = filteredDays[0].interviewers.map((appt) => {
    return state.interviewers[appt];
  });
  
  return findInterviewers;
}
