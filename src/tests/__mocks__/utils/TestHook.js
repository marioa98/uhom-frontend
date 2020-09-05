import React from "react";
import { mount } from "enzyme";
import "../../config";

function TestHook({callback}){
  callback();
  return null;
}

export const testedHook = (callback) => {
  mount(<TestHook callback={callback}/>)
}