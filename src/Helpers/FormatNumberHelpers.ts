import { ValidatedNumber, getValidateNumber } from "../fetch/numVerifyFetch";
import {
  setCurrentSelection,
  setErrorMessage,
} from "../store/reducers/promoReducer";

export function formatPhoneNumber(input: string): string {
  const phoneTemplate = "___)___-__-__";
  if (input.length === 0) {
    return phoneTemplate;
  }
  let formattedPhone = phoneTemplate;
  for (const char of input) {
    if (/[0-9]/.test(char)) {
      formattedPhone = formattedPhone.replace("_", char);
    }
  }

  return formattedPhone;
}

export function validateNumber(
  numberValue: string,
  navigate: (path: string) => void,
  checkBoxState: boolean,
  dispatch: (action: any) => void
) {
  if (numberValue.length == 10 && checkBoxState) {
    getValidateNumber(numberValue).then((response: ValidatedNumber) => {
      if (response.valid) {
        navigate("/final-page");
        dispatch(setErrorMessage(""));
        dispatch(setCurrentSelection(0));
      } else {
        dispatch(
          setErrorMessage(
            "Номер введён не корректно, или ошибка на строне сервера."
          )
        );
      }
    });
  } else if (!checkBoxState) {
    dispatch(
      setErrorMessage("Вы не дали согласие на обработку персональных данных.")
    );
  } else if (numberValue.length != 10) {
    dispatch(setErrorMessage("Номер введён не корректно."));
  }
}
