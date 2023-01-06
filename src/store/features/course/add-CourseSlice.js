import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

const addCourseSlice = createSlice({
  name: 'add-Course',
  initialState,
  reducers: {
    addCourse: (state) => {
      console.log(state);
    },
  },
});

export default addCourseSlice.reducer;
