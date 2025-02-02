const axios = require("axios");
const { wrapper } = require("axios-cookiejar-support");
const { CookieJar } = require("tough-cookie");

const sap = async () => {
  let leadId = "AD6CCF7B736F1EDFB793CDA8D548279C";
  const jar = new CookieJar(); // To store cookies
  const client = wrapper(axios.create({ jar })); // Axios instance with cookie support

  try {
    // Step 1: GET Request to Fetch CSRF Token
    const getOptions = {
      method: "GET",
      url: `https://my306332.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/LeadCollection('${leadId}')`,
      headers: {
        Authorization: `Basic ${Buffer.from(
          "API_INTEGRATION:Welcome123456789@"
        ).toString("base64")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-csrf-token": "fetch",
        Connection: "keep-alive",
      },
    };

    const getResponse = await client.request(getOptions);
    const csrfToken = getResponse.headers["x-csrf-token"]; // Extract CSRF token
    console.log("CSRF Token:", csrfToken);

    // Step 2: PATCH Request with CSRF Token and Cookies
    const data = {
      UserStatusCode: "04",
      ResultReasonCode: "004",
      Note:"callll"
    };

    const patchOptions = {
      method: "PATCH",
      url: `https://my306332.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/LeadCollection('${leadId}')`,
      headers: {
        Authorization: `Basic ${Buffer.from(
          "API_INTEGRATION:Welcome123456789@"
        ).toString("base64")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-csrf-token": csrfToken,
        Connection: "keep-alive",
      },
      data: data,
    };

    const patchResponse = await client.request(patchOptions);
    console.log("PATCH Response:", patchResponse.data);

    return patchResponse.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};

sap().then((result) => {
  console.log("Result:", result);
});