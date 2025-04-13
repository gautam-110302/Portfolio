import {createSlice} from "@reduxjs/toolkit";

import experienceData from "../data/experience";

const experienceSlice = createSlice({
  name:'experience',
  initialState : experienceData,
  reducers: {}
})

export default experienceSlice;