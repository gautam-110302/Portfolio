import { configureStore} from "@reduxjs/toolkit";
import aboutSlice from "./aboutSlice";
import skillsSlice from "./skillsSlice";
import experienceSlice from "./experienceSlice";
import projectsSlice from "./projectsSlice";

const portfolioStore = configureStore({reducer:{
  about : aboutSlice.reducer,
  skills : skillsSlice.reducer,
  experience : experienceSlice.reducer,
  projects : projectsSlice.reducer,
}});

export default portfolioStore;