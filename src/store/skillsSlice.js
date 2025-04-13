import {createSlice} from "@reduxjs/toolkit";

import skillsData from "../data/skills.js";


const skillsSlice = createSlice({
  name:'skills',
  initialState : skillsData,
  reducers : {}
})

export default skillsSlice;