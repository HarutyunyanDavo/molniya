import { createSlice } from "@reduxjs/toolkit";
import newWork from "../work";

const initialState = {
  works: [],
  allWorksMount: 0,
  isLoading: false,
  error: false,
};

const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    addWork: (state, action) => {
      state.works.push({
        id: new Date().toString(),
        name: action.payload.name,
        money: +action.payload.money,
        perecent: +action.payload.perecent,
        days: newWork,
      });
    },
    deleteWork: (state, { payload }) => {
      state.works = state.works.filter(work => work.id !== payload.id);
    },
    updateWorkName: (state, {payload}) => {
  
      state.works = state.works.map((worker) => {
        if(worker.id === payload.id){
          return {
            ...worker, name: payload.name
          }
        }else{
          return worker
        }
      })
    },
    updateWorkMoney: (state, {payload}) => {
  
      state.works = state.works.map((worker) => {
        if(worker.id === payload.id){
          return {
            ...worker, money: payload.money
          }
        }else{
          return worker
        }
      })
    },
    updateWorkPerecent: (state, {payload}) => {
  
      state.works = state.works.map((worker) => {
        if(worker.id === payload.id){
          return {
            ...worker, perecent: payload.perecent
          }
        }else{
          return worker
        }
      })
    },
    updateDay: (state, { payload }) => {
      state.works = state.works.map(worker => {
        if (worker.id === payload.id) {
          return {
            ...worker,
            days: worker.days.map((day, i) =>
              i + 1 === +payload.day ? payload.work : day
            ),
          };
        } else {
          return worker;
        }
      });
    }
  },
});

export const { addWork, deleteWork, updateDay, updateWorkName, updateWorkMoney, updateWorkPerecent } = worksSlice.actions;

export default worksSlice.reducer;
