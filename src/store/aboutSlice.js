import {createSlice} from "@reduxjs/toolkit";
import aboutData from "../data/about";

const aboutSlice = createSlice({
  name:'about',
  initialState : aboutData,
  reducers: {}
})

export default aboutSlice;