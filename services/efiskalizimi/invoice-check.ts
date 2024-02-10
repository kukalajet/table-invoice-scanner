import ky from "ky";

const BASE_URL = "https://efiskalizimi-app.tatime.gov.al/invoice-check/api/";

const headers = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  Origin: "https://efiskalizimi-app.tatime.gov.al",
  Referer: "https://efiskalizimi-app.tatime.gov.al/invoice-check/",
} as const;

const client = ky.extend({ prefixUrl: BASE_URL, headers });

const verifyInvoice = async (
  iic: string,
  dateTimeCreated: string,
  tin: string
) => {
  const body = `iic=${iic}&dateTimeCreated=${dateTimeCreated}&tin=${tin}`;
  return await client.post("verifyInvoice", { body }).json();
};

export { verifyInvoice };
