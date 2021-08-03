import testTypes from "./test.constants";

export const incrementButton = (increment)=>({
    type: testTypes.INCREMENT_BUTTON,
    payload: increment
})