const fs = require("fs");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const CryptoJS = require("crypto-js");

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmZLYUClEMra20jvommfw
llHJLwUc0l1ByWMm5AioE5zyiVQymDrvg0tIfo7P2uPoQWWZx8CShHP2lQb4Qdy/
hlwksapMRtcRqrANBM6uDPGb4XDX24Po4eaDZGYYC+ayCTXwCVWmx0o79qu1WQ0W
JhN6GHM+Iex8NfPD6OJZoRx+rbAQW4TlDagi59qEaCCjTTgu9PtNEkfNxbm3L2Yf
Hkq+XprwQOooD6E8whmiVIvrcCljSiM2wYPiXfFoAMeE6n3tCEITOZlq/zCpLAQu
7SU+vTj9y0iG9mLNWi68UY7zaqdt/togaSXn8vepOD5ZHlW3yyeuabetWcBLcKP4
fwIDAQAB
-----END PUBLIC KEY-----`;

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZkthQKUQytrbS
O+iaZ/CWUckvBRzSXUHJYybkCKgTnPKJVDKYOu+DS0h+js/a4+hBZZnHwJKEc/aV
BvhB3L+GXCSxqkxG1xGqsA0Ezq4M8ZvhcNfbg+jh5oNkZhgL5rIJNfAJVabHSjv2
q7VZDRYmE3oYcz4h7Hw188Po4lmhHH6tsBBbhOUNqCLn2oRoIKNNOC70+00SR83F
ubcvZh8eSr5emvBA6igPoTzCGaJUi+twKWNKIzbBg+Jd8WgAx4Tqfe0IQhM5mWr/
MKksBC7tJT69OP3LSIb2Ys1aLrxRjvNqp23+2iBpJefy96k4PlkeVbfLJ65pt61Z
wEtwo/h/AgMBAAECggEAdQGYpZqLR0hGim7yjZHbj+vIKHbwuqYq1VEh9GNUC31s
nIz1714X1iSpmyMb4l36Ork6LSLffuMLYAfrZeLWWXwiyOpDK0X5Q97WTG9b1KjQ
ZzcefzVFXbfPK9NNRuQBiVr7A2Gqq/Q3M30nsi1yTphQUgibsiUHjeOnw+uQ9lod
U4138g2gs9NGUeyT1nYdF8vy038n0FcV9T6QOyuhwaOZw3kgRBpzQg3mbY7w98zO
8W5+YPjMUK/jOWiOMnXihrWsM1dOGsC0AwaLfOGPeSSMHNhJ/A7i889dGNgkVuza
ziJcDP0EpW7end4poEAZ6qSMMuDAVF+Uy6+RYt+PIQKBgQDIAK0vZPhvfs+ZVmPz
+FevwTCyjiK6Y+WyxJiQvFJ1O9uPCTbVc6vVgFptNVJJVdDLr0yLygd4BVWi/HDy
1IOyJ76nOZZYEbq2mmJRaP+Aj99kaetmdk2kNF+RsGhSf0Gu7m/flViQYkVnAqE3
KPK0nwEu4s4zsEpS1YwLFCTZCwKBgQDEklYvNAC0TgABCoGhIpAQk4zgVuv02uQX
3XFuV18Q/d3uOcsI/pzOPXw1+BbnwcW7qdMu/WUynhgzucoVQzZ88+IPRYl++Zw5
c0rAVZ+yzPqvWq8SNqT2eP4fN7ltAUd+9VnlU/Jjfd3BXu7H33ZUMeZ5khal8v5G
36WdEKIO3QKBgGkaMeieHxA4i9AA3jXvY+UwmO68UvOwW50+Qw6MaKjC8/aO2QoC
52IjOWH6i2uOdVMUpB0x5grkgsRL9O8nTq3oxQAL+z380ynyp4gwrVRaRwL1xobp
1JNeEnr1QV1ZEqNjGdddHFWDzwT7FM1v71uL04tYFRSEqAovvpBz3YlRAoGBAMK3
zsWtdrEkvt5JIQWULi8tahRkJhIDroRxaEaMJ/C1+VxdRWFgjcXCpEL1wQLMMOnn
nPlkKxWMA59hf+u2C8iU8a59DGmKKxXBvh9t8eb1I7IGW3voQ1qfmeMkmPqAlOkP
c4A2utmROdSuDExTcGyQjaSJcQPsA7QDIJPIgS/FAoGAK96P/fWeyP8prQLlEOMK
1Reti2V9LKux6TrfdWvlMgWqmx3aaUYrc/DHoG66pZwuu6Leo8saHO90IrbwmAz1
+fGqNWs5OGqzmYrh2gd/WQlSCwVx0AbW52zm6mjVtqs5jiJ5IYF9mEcx10RaHj3e
wseTorvMD7X7+Z8WHb7QUu4=
-----END PRIVATE KEY-----`;
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