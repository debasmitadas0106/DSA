// const axios = require("axios");

// const transcript = [
//   { type: "input", value: "hi", created_date: "24-03-2025 18:00:04" },
//   {
//     type: "response",
//     value: "Hi Debasmita",
//     created_date: "24-03-2025 18:00:04",
//   },
//   { type: "input", value: "Hi.", created_date: "24-03-2025 18:00:04" },
//   {
//     type: "response",
//     value:
//       "Hi Debasmita, I hope you are doing well. I wanted to see if you were interested in buying a real estate property in and around Bengaluru",
//     created_date: "24-03-2025 18:00:04",
//   },
//   {
//     type: "input",
//     value: "Yes Im interested.",
//     created_date: "24-03-2025 18:00:04",
//   },
//   {
//     type: "response",
//     value:
//       "Can you tell me what exactly you looking for? An apartment, a villa or a condo?.",
//     created_date: "24-03-2025 18:00:04",
//   },
//   {
//     type: "input",
//     value: "Im looking for a villa.",
//     created_date: "24-03-2025 18:00:04",
//   },
// ];

// // Replace with your values
// const API_URL =
//   "https://services.leadconnectorhq.com/conversations/messages/inbound";
// const BEARER_TOKEN =
//   "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF1dGhDbGFzc0lkIjoid3NsaldXMUpncGRERDRmSmtnTlMiLCJzb3VyY2UiOiJJTlRFR1JBVElPTiIsInNvdXJjZUlkIjoiNjdkYTdmMmJjMDgxNjZkYTRkZGJlOWIwLW04aWMyYzdkIiwiY2hhbm5lbCI6Ik9BVVRIIiwicHJpbWFyeUF1dGhDbGFzc0lkIjoid3NsaldXMUpncGRERDRmSmtnTlMiLCJvYXV0aE1ldGEiOnsic2NvcGVzIjpbImNvbnRhY3RzLndyaXRlIiwiY29udGFjdHMucmVhZG9ubHkiLCJjYWxlbmRhcnMucmVhZG9ubHkiLCJjYWxlbmRhcnMud3JpdGUiLCJjYWxlbmRhcnMvZXZlbnRzLnJlYWRvbmx5IiwiY2FsZW5kYXJzL2V2ZW50cy53cml0ZSIsImNvbnZlcnNhdGlvbnMucmVhZG9ubHkiLCJjb252ZXJzYXRpb25zLndyaXRlIiwiY29udmVyc2F0aW9ucy9tZXNzYWdlLnJlYWRvbmx5IiwiY29udmVyc2F0aW9ucy9tZXNzYWdlLndyaXRlIiwiY29udmVyc2F0aW9ucy9yZXBvcnRzLnJlYWRvbmx5IiwibG9jYXRpb25zLnJlYWRvbmx5IiwibG9jYXRpb25zL2N1c3RvbVZhbHVlcy5yZWFkb25seSIsImxvY2F0aW9ucy9jdXN0b21WYWx1ZXMud3JpdGUiLCJsb2NhdGlvbnMvdGFncy53cml0ZSJdLCJjbGllbnQiOiI2N2RhN2YyYmMwODE2NmRhNGRkYmU5YjAiLCJ2ZXJzaW9uSWQiOiI2N2RhN2YyYmMwODE2NmRhNGRkYmU5YjAiLCJjbGllbnRLZXkiOiI2N2RhN2YyYmMwODE2NmRhNGRkYmU5YjAtbThpYzJjN2QifSwiaWF0IjoxNzQ4NTkxODgyLjQ4NSwiZXhwIjoxNzQ4Njc4MjgyLjQ4NX0.RHlNsFhHi25EJsoWkre_GbOkDlvR29SAcWokK1BmZQ__aBIEhfByYUqpJeLZC3rnXafc3ruEgG5XVy98wBWGh90nDR5OS7DSXrjOTxhHBh2pIUZbH6FqKVugkzWda4z2URoDt6oCRxKdOykJjj_CNo84QNkrFFEv6dfuPZs0VxLnYdTutIyE8hiU-R3DbnQhypPkqU5MEx5w9-q-eTHPYurFXNPT0r7VMiXZFzyQE2VUbSGYTDGIXuyoA56aX_PVndWcbkJPlxQRohy-L1OFv6kbeHEnpdEbI4DLIQTSh0FAsU41gt376W45IztogCybrR7yuhf1boX9-5zMtXeHqAbFxf1MrSxWfpLdToKSeqijUpkbJpAf9uqYCUwHG-vsZMex3US5NeVhe3Q063BnJ_AVbS40EidKxhuCxAvhsPuDSSLtMCVWmol0eGjz-LT4wUkjz0xMY5fudXcqJ0IyxW5bwErj2Y4jDgvuzyiZFiMmUIEOhTEYl_B2mATcFTJI3LBMjeuZgb3IH5PIjQIl03yM-Tg-OAo_uSfBVZe8HaXEDysvEZdvDcCSBVhws3-34_kdSv2CVKg64jrFaiYjV-2SVyOsgj4fFtr27Beus8zUugMRa6YJxd_My9js18ihmEKw6mxhUJbUGl5PUyYaJyyXIjyndsAa1Hu_zztk_zw";
// const conversationId = "PERwLYMc0btC60g7YA6Q";
// const conversationProviderId = "67e690eb0be65bfb678b313e";

// // Format full transcript into one string
// const formattedTranscript = transcript
//   .map((entry) => {
//     if (entry.type === "input") {
//       return `User: ${entry.value}`;
//     } else if (entry.type === "response") {
//       return `Bot: ${entry.value}`;
//     }
//   })
//   .join("\n"); // join with newline for better readability

// // Final message body
// const payload = {
//   type: "SMS",
//   message: formattedTranscript,
//   conversationId,
//   conversationProviderId,
//   direction: "inbound",
// };

// async function sendSingleMessage() {
//   try {
//     const response = await axios.post(API_URL, payload, {
//       headers: {
//         Authorization: `Bearer ${BEARER_TOKEN}`,
//         "Content-Type": "application/json",
//         version: "2021-04-15",
//       },
//     });
//     console.log("Transcript sent successfully:", response.data);
//   } catch (error) {
//     console.error(
//       "Error sending transcript:",
//       error.response?.data || error.message
//     );
//   }
// }

// sendSingleMessage();

let response = {
  conversations: [
    {
      id: "PERwLYMc0btC60g7YA6Q",
      locationId: "wsljWW1JgpdDD4fJkgNS",
      dateAdded: 1743668859155,
      dateUpdated: 1748594625881,
      lastMessageDate: 1748594625818,
      lastMessageType: "TYPE_CUSTOM_SMS",
      lastMessageBody:
        "User: hi\nBot: Hi Debasmita\nUser: Hi.\nBot: Hi Debasmita, I hope you are doing well. I wanted to see if you were interested in buying a real estate property in and around Bengaluru\nUser: Yes Im interested.\nBot: Can you tell me what exactly you looking for? An apartment, a villa or a condo?.\nUser: Im looking for a villa.",
      lastOutboundMessageAction: "manual",
      lastMessageDirection: "inbound",
      inbox: true,
      unreadCount: 11,
      lastMessageConversationProviderId: "67e690eb0be65bfb678b313e",
      lastManualMessageDate: 1748594625818,
      followers: [],
      isLastMessageInternalComment: false,
      contactId: "cOwjM4ycnqHmWEtcks0z",
      fullName: "Debasmita Das",
      contactName: "Debasmita Das",
      email: "debasmita@vodex.ai",
      phone: "+918777253565",
      tags: ["test_call_ended", "test_call_failed", "call_trigger_failed"],
      type: "TYPE_PHONE",
      scoring: [],
      attributed: true,
      sort: [1748594625818],
    },
  ],
  total: 1,
  traceId: "efa659e8-5123-4c60-980c-54283b210513",
};

let { conversations } = response;
console.log(conversations[0].id);
