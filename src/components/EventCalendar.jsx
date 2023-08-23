import { useState } from 'react'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import DatePicker from 'react-datepicker'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import fiFI from 'date-fns/locale/fi'

const locales = {
  'fi-FI': fiFI,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const EventCalendar = () => {
  const initEvent = { title: '', start: null, end: null }

  const [newEvent, setNewEvent] = useState(initEvent)
  const [allEvents, setAllEvents] = useState([])

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
    setNewEvent(initEvent)
  }

  return (
    <>
      <h1>Calendar Event</h1>
      <div>
        <input
          type='text'
          placeholder='Add Event Name'
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText='Start Date'
          selected={newEvent.start}
          showTimeSelect
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText='End Date'
          selected={newEvent.end}
          showTimeSelect
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
      />
    </>
  )
}

export default EventCalendar
