import axios from "axios";
import { useState, useEffect } from "react";

export function useApplicationData() {
  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  console.log("state days!:", state.days);
  console.log("state !:", state);

  const updateSpots = (state, appointments) => {
    const allDays = [...state.days];
    // find current day obj
    const currentDay = state.days.find((day) => day.name === state.day);
    const indexOfCurrentDay = state.days.findIndex(
      (day) => day.name === state.day
    );
    // gets array of appt ids for current day
    const findApptIds = currentDay.appointments;
    // make shallow copy and find the free appointments for current day based on f interview is null
    const freeApptsForDay = findApptIds.filter(
      (id) => !appointments[id].interview
    );
    // amount of free spots is length of freeApptsForDay (amount of nulls)
    const spots = freeApptsForDay.length;

    allDays[indexOfCurrentDay].spots = spots;
    return allDays;
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    // update db with interview data
    return axios.put(`/api/appointments/${id}`, appointment).then(() =>
      setState({
        ...state,
        appointments,
        days: updateSpots(state, appointments),
      })
    );
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then(() =>
      setState({
        ...state,
        appointments,
        days: updateSpots(state, appointments),
      })
    );
  };

  useEffect(() => {
    const dayPromise = axios.get("/api/days");
    const appointmentPromise = axios.get("/api/appointments");
    const interviewersPromise = axios.get("/api/interviewers");

    const promises = [dayPromise, appointmentPromise, interviewersPromise];

    Promise.all(promises)
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch();
  }, []);
  // console.log(state);

  return { setDay, state, bookInterview, cancelInterview, updateSpots };
}
