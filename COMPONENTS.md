Scheduler project breakdown
Components:
Button
DayList
DayListItem
InterviewerList
InterviewerListItem
Appointment
Appointment/Header
Appointment/Empty
Appointment/Show
Appointment/Form
Appointment/Status
Appointment/Error
Appointment/Confirm

Button
State: NO STATE
Props: confirm (boolean), disabled (boolean), danger, boolean, onClick (function), clickable
Used by: EVERYONE

DayList
State: day, days, appointments, interviewers
Props: days, value, onChange
Used by: App

DayListItem
State: NO STATE
Props: key, selected, spots, name, setDay
Used by: dayList

InterviewerList
State: NO STATE
Props: interviewers
Used by: App ???

InterviewerListItem
State: NO STATE
Props: key, name, avatar, selected , setInterviewer
Used by: interviewerList

Appointment
State: day, days, appointments, interviewers
Props: key, id, time, interview, interviewers, bookInterview
Used by: App

Appointment/Header
State: NO STATE
Props: time
Used by: Appointment

Appointment/Empty
State: NO STATE
Props: onAdd
Used by: Appointment

Appointment/Show
State: NO STATE
Props: student, interviewer
Used by: Appointment

Appointment/Form
State: student, interviewer
Props: onSave, interviewers, onCancel
Used by: Appointment

Appointment/Status
State:
Props:
Used by:

Appointment/Error
State:
Props:
Used by:

Appointment/Confirm
State:
Props:
Used by:
