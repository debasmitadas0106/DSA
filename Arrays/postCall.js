const axios = require("axios");

const callRecordingUrl =
  "https://storage.googleapis.com/botstream-recordings/this-is-to-check-the-final-draft.mp3";
const summary =
  "The user, John, asked about product availability and pricing. The bot provided details and assisted in scheduling a demo call.";
const questions = [
  { key: "user_name", value: "John Doe" },
  { key: "inquiry", value: "Product pricing and demo availability" },
];

const transcript = [
  { type: "input", value: "hi", created_date: "30-01-2025 15:14:10" },
  {
    type: "response",
    value: "Hi I am Alex from Qnovate",
    created_date: "30-01-2025 15:14:10",
  },
  { type: "input", value: "Hi.", created_date: "30-01-2025 15:14:10" },
  {
    type: "response",
    value:
      "Hi I am Alex from VOdex. Are you looking to improve your business processes?",
    created_date: "30-01-2025 15:14:10",
  },
];

const notes = {
  body: `
    <html>
      <body>
        <p><strong>Recording URL:</strong> 
        <a href="${callRecordingUrl}</a></p>

        <p><strong>Summary:</strong> ${summary}</p>

        <p><strong>Questions:</strong><br>
        ${questions
          .map((q) => `&bull; ${q.key}: <strong>${q.value}</strong>`)
          .join("<br>")}
        </p>

        <p><strong>Transcript:</strong><br>
        ${transcript
          .map((t) => `&bull; <strong>${t.type}:</strong> ${t.value}`)
          .join("<br>")}
        </p>

        <hr/>
      </body>
    </html>
  `,
};

const API_URL =
  "https://services.leadconnectorhq.com/contacts/cOwjM4ycnqHmWEtcks0z/notes";
const ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF1dGhDbGFzc0lkIjoid3NsaldXMUpncGRERDRmSmtnTlMiLCJzb3VyY2UiOiJJTlRFR1JBVElPTiIsInNvdXJjZUlkIjoiNjdkYTdmMmJjMDgxNjZkYTRkZGJlOWIwLW04aWMyYzdkIiwiY2hhbm5lbCI6Ik9BVVRIIiwicHJpbWFyeUF1dGhDbGFzc0lkIjoid3NsaldXMUpncGRERDRmSmtnTlMiLCJvYXV0aE1ldGEiOnsic2NvcGVzIjpbImNvbnRhY3RzLndyaXRlIiwiY29udGFjdHMucmVhZG9ubHkiLCJjYWxlbmRhcnMucmVhZG9ubHkiLCJjYWxlbmRhcnMud3JpdGUiLCJjYWxlbmRhcnMvZXZlbnRzLnJlYWRvbmx5IiwiY2FsZW5kYXJzL2V2ZW50cy53cml0ZSIsImxvY2F0aW9ucy5yZWFkb25seSIsImxvY2F0aW9ucy9jdXN0b21WYWx1ZXMucmVhZG9ubHkiLCJsb2NhdGlvbnMvY3VzdG9tVmFsdWVzLndyaXRlIiwibG9jYXRpb25zL3RhZ3Mud3JpdGUiXSwiY2xpZW50IjoiNjdkYTdmMmJjMDgxNjZkYTRkZGJlOWIwIiwiY2xpZW50S2V5IjoiNjdkYTdmMmJjMDgxNjZkYTRkZGJlOWIwLW04aWMyYzdkIn0sImlhdCI6MTc0MjU0NjY2NS42NzcsImV4cCI6MTc0MjYzMzA2NS42Nzd9.auAA4Rks6G0ZU1nkalAstWwOWBB0PybP3BFtvf395Y7H3eyVMwfxdiwCgGc4dB22sqnLD9IMK3Z9RbtzTrg5sKGMnfJ_nZE-kDMocmG8Scdd0PVX6zDr8IXHRUKiRRYuNxDGm1S5gxrRL-qySDs7wE7MkQ0Lj6wcm3F_i2KAaAJuSKR4IsULHE4R4ZySbTMu9Zuk_A_1qgfkFhZyiC5YBTuqFcP3kdSFhaqmhPJKZE7umE-6HqA1X2NZpwS8weqzfa_IIvBXI6vqgnXShQdNDFiN2WnGDns36P9FxFxbYPtuXXPbK2f6_5XUV8deX7W9_thrj781pijShgeW3MPs09Zw69JYoePXEfh2T4_PbFR3GpMd2USTGqYEOa9KGVWXe4bzReYC98Dd-cLYoHq-M0UMWGUf6PpXqD54hpMYteK_NtL4X0bWL9qDlKXZQcmu1Bc8PepKBvampBaPNALlzXOtlHHG1vJVP8s0_fZ-eUR90LHdDCigt7TSwqP2wa0rYfvljVzwFWrE9D_WLgXCGqG6zZf3rmuyEPv_Nsw62-APayBPyAu4KpGOXBHKc0MwtqQmtinUpfwTk2hgWr83fbUS2cK8PJNB7dpcxBQetxNE5ugN0YnIHdur77n8SLY1kYIVnFjlABuLX025Rb6oZeoMr_E33f2O7aP9SLweDWw";

const sendNotes = async () => {
  try {
    const response = await axios.post(
      API_URL,
      {
        body: notes.body,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
      }
    );

    console.log("✅ API Response:", response.data);
  } catch (error) {
    console.error(
      "❌ Error sending notes:",
      error.response ? error.response.data : error.message
    );
  }
};

sendNotes();