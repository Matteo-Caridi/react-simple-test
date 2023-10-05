import { createSlice, current } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calc",
  initialState: { total: 0, inputs: [] },
  reducers: {
    addInput(state, { payload }) {
      const existingInput = state.inputs.find(
        (input) => input.id === payload.id
      );

      if (!existingInput) state.inputs.push(payload);
    },

    editInputValue(state, { payload }) {
      const existingInput = state.inputs.find(
        (input) => input.id === payload.id
      );

      if (existingInput) {
        existingInput.value = payload.value;

        state.total = state.inputs.reduce((acc, curr, index) => {
          if (!state.inputs[index].isDisabled) {
            return acc + Number(curr.value);
          } else {
            return acc + 0;
          }
        }, 0);
      }
    },

    removeInput(state, { payload }) {
      const existingInput = state.inputs.find(
        (input) => input.id === payload.id
      );

      if (existingInput) {
        state.inputs = state.inputs.filter(
          (input) => input.id !== existingInput.id
        );

        state.total = state.inputs.reduce((acc, curr, index) => {
          if (!state.inputs[index].isDisabled) {
            return acc + Number(curr.value);
          } else {
            return acc + 0;
          }
        }, 0);
      }
    },

    opToggle(state, { payload }) {
      const existingInput = state.inputs.find(
        (input) => input.id === payload.id
      );

      if (existingInput) {
        existingInput.op = payload.op;

        if (existingInput.value !== 0)
          existingInput.value = existingInput.value * -1;

        state.total = state.inputs.reduce((acc, curr, index) => {
          if (!state.inputs[index].isDisabled) {
            return acc + Number(curr.value);
          } else {
            return acc + 0;
          }
        }, 0);
      }
    },

    disableToggle(state, { payload }) {
      const existingInput = state.inputs.find(
        (input) => input.id === payload.id
      );

      if (existingInput) existingInput.isDisabled = payload.isDisabled;

      state.total = state.inputs.reduce((acc, curr, index) => {
        if (!state.inputs[index].isDisabled) {
          return acc + Number(curr.value);
        } else {
          return acc + 0;
        }
      }, 0);
    },
  },
});

export const calcActions = calcSlice.actions;

export default calcSlice;
