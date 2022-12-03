import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import "./styles.scss";



export default function Appointment(props) {
  const appointmentSelected = props.interview ? (
    <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer.name}
    />
  ) : (
    <Empty />
  );
  return (
    <article className="appointment">
      <Header time={props.time} />
      {appointmentSelected}
    </article>
  );
}
