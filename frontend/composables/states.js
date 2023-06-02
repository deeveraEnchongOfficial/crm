export const useShowBurger = () =>
  useState("showBurger", () => {
    return false;
  });

export const useModal = (v) =>
  useState("showModal", (v) => {

    return false;
  });

export const useAlert = () =>
  useState("alert", () => {
    return {
      message: null,
      type: "success",
    };
  });

export const useShowAlert = () =>
  useState("showAlert", () => {
    return false;
  });
