interface TwoParam {
  first: string;
  second: string;
}

type TwoArgs = {
  first: string;
  second: string;
};

export const addTwoNumbers = (params: TwoArgs) => {
  return params.first + params.second;
};
export {};
