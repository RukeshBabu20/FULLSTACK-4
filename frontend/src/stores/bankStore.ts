export const banks = ["Indian bank", "SBI", "Canara Bank"];

export const codes = (value: string) => {
  if (value == "Indian bank") {
    return ["I123", "I234", "I345"];
  } else if (value == "SBI") {
    return ["S123", "S234", "s345"];
  } else if (value == "Canara Bank") {
    return ["C123", "c234", "c345"];
  } else {
    return [];
  }
};
