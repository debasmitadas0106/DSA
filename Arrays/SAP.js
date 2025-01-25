const axios = require("axios");
const sap = async (crmDetails, callDetails) => {
  //const { questions, mobileNo, mandatory_params } = callDetails;
  let leadId = "f22c2956-6c14-11ee-bb67-29cbdc6c95ef";
  const options = {
    method: "GET",
    url: `https://my1000173.us1.test.crm.cloud.sap/sap/c4c/api/v1/lead-service/leads/${leadId}`,
    headers: {
      Authorization: `Basic ${Buffer.from(
        "API_INTEGRATION:Welcome123456789@"
      ).toString("base64")}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    const response = await axios.request(options);
    //let etag = response.headers.etag;
    return response.data.value.notes[0].content
    // const data = {
    //   status: "3",
    //   reasonForStatus: "5",
    //   notes: [
    //     {
    //       content: "This is a sample note",
    //     },
    //   ],
    // };
    // const options1 = {
    //   method: "PATCH",
    //   url: `https://my1000173.us1.test.crm.cloud.sap/sap/c4c/api/v1/lead-service/leads/${leadId}`,
    //   headers: {
    //     Authorization: `Basic ${Buffer.from(
    //       "API_INTEGRATION:Welcome123456789@"
    //     ).toString("base64")}`,
    //     Version: "2021-07-28",
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "If-Match": etag,
    //   },
    //   data: data,
    // };
    // const updateResponse = await axios.request(options1);
    // return { resp: updateResponse.data };
  } catch (error) {
    console.error(error);
  }
};

sap().then((result) => {
  console.log(result);
});