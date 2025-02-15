const fs = require("fs");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const CryptoJS = require("crypto-js");

const publicKey = process.env.PUBLIC_KEY;

const privateKey = process.env.PRIVATE_KEY;
// const uuid = uuidv4();
// const encryptedUuid = crypto
//   .publicEncrypt(
//     {
//       key: publicKey, // Use backend's public RSA key
//       padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//     },
//     Buffer.from(uuid)
//   )
//   .toString("base64");

// console.log("Encrypted UUID (AES Key):", encryptedUuid);

// let payload = {
//   data: {
//     name: "project",
//     type: "custom",
//     description: "testing",
//   },
// };

// // 🔹 Encrypt payload using AES (with the UUID as key)
// const encryptedPayload = CryptoJS.AES.encrypt(
//   JSON.stringify(payload),
//   uuid
// ).toString();

// console.log("Encrypted Payload:", encryptedPayload);


const encryptUuid = "ESG9Ozq0yFHDvTSq+rQ+uFG+LxC3ujTm/QFjwVI8xThvb1Jq/6XFhmYLglvDl80uAg4vdZ9oB0TxtvTTmh53XvHI8gttLRN+mNOZmIQSdfP3PN382I0nKBvX+gkh6+rLqMbuz2PJ1jAOt6FbhJVVKTC0VP7uXQX6WNSiZEsoLXUtObmVLd+o+kFITPmlEDMZBicveN3GML/8XmrQwENzlVP+E3zGDyJL+9ieLSfL9ypLTCGf/VlubsMA8nl8gA9QQg2g6sw6dHabQWnVVnIWvSWOCjEtWvesKCC5MaWOVbubyL2Ftlo3BjolIXrA2zHsx8sgrf+RnXpqCxKakkHhMQ==";
const decryptedUuid = crypto
  .privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(encryptUuid, "base64")
  )
  .toString("utf8");

console.log("Decrypted UUID (AES Key):", decryptedUuid);

// Example Encrypted Payload (from the previous encryption process)
const encrydPayload = "U2FsdGVkX19M796jDm5pWKEtuto/6jV+naKMbDKXoGX8HOb4KH3cz41mAqKmL/Mm5VGamcz3K4hPjfl//OclKQ+AXtjI8UNCtJm2WLqY2UOLgRAhe2u1caZM/QGjdm+L";

// Step 2: Decrypt Payload using AES and the decrypted UUID as the key
const bytes = CryptoJS.AES.decrypt(encrydPayload, decryptedUuid);
const decryptedPayload = bytes.toString(CryptoJS.enc.Utf8);

console.log("Decrypted Payload:", decryptedPayload);