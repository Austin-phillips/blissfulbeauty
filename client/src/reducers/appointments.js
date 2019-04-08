const appointments = (state = [], action) => {
  switch (action.type) {
    case 'GET_APPOINTMENTS':
    if (action.appointments.length === 0) {
      return { any: false, appointments: action.appointments }
    } else {
      return { any: true, appointments: action.appointments }
    }
    case 'ADD_APPOINTMENT':
      return [...state, action.appointment]
    case 'UPDATE_APPOINTMENT':
      return state.map(s => {
        if (s.id === action.appointment.id)
          return action.appointment
        return s
      })
    case 'DELETE_APPOINTMENT':
      return state.filter(appointment => appointment.id !== action.id)
    default:
      return state;
  }
}

export default appointments;