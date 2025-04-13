import {createSlice} from "@reduxjs/toolkit";
import projectData from "../data/project";

const projectsSlice = createSlice({
  name:'projects',
  initialState : projectData,
  reducers: {}
})

export default projectsSlice;