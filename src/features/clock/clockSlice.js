import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  time: new Date(),
  change: false
}

export const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    currentTime: state => {
      state.time = new Date()
    },
    setTime: (state, action) => {
      const newTime = new Date(action.payload)
      //   newTime.setHours(10)
      //   newTime.setMinutes(30)
      //   newTime.setSeconds(newTime.getSeconds() + 1)
      state.change = true
      state.time = newTime
    }
  }
})

export const { currentTime, setTime } = clockSlice.actions
export default clockSlice.reducer
