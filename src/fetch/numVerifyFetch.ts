import axios from "axios";

export const getValidateNumber = async (number: string) => {
  const apiUrl = "http://apilayer.net/api/validate";

  const params = {
    access_key: "c02ae480cb3b2bf1ed9e5bf696abe361",
    number: `${number}`,
    country_code: "RU",
    format: 1,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export interface ValidatedNumber {
  valid: boolean;
  number: string;
  local_format: string;
  international_format: string;
  country_prefix: string;
  country_code: string;
  country_name: string;
  location: string;
  carrier: string;
  line_type: string | null;
}
