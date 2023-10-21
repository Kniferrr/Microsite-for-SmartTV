import { setErrorMessage } from "../store/reducers/promoPageReducer";

export function formatPhoneNumber(input: string): string {
  // Устанавливаем шаблон номера телефона
  const phoneTemplate = "___)___-__-__";

  // Если входная строка пуста, то возвращаем пустой шаблон
  if (input.length === 0) {
    return phoneTemplate;
  }

  // Создаем копию шаблона, с которой будем работать
  let formattedPhone = phoneTemplate;

  // Итерируем по символам входной строки
  for (const char of input) {
    // Если символ - цифра, заменяем первое подчеркивание на эту цифру
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
    navigate("/final-page");
    dispatch(setErrorMessage(""));
  } else if (!checkBoxState) {
    dispatch(
      setErrorMessage("Вы не дали согласие на обработку персональных данных")
    );
  } else if (numberValue.length != 10) {
    dispatch(setErrorMessage("Номер введён не корректно"));
  }
}
