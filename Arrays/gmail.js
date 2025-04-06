const data = {
  emailRepliesCatchup: async function () {
    const logger = new Logger("EMAIL REPLIES CATCH_UP");
    const gmailAuthDetails = await getGmailAuthService({});
    console.log(gmailAuthDetails);

    for (let i = 0; i < gmailAuthDetails.length; i++) {
      const gmailAuth = gmailAuthDetails[i];

      const gmailH = new GmailHelper(gmailAuth.email);
      await gmailH.initialize();
      const threads = await gmailH.fetchThreadIdsInLastTenMinutes();
      console.log(threads);

      await Promise.all(
        threads.map(async (threadId) => {
          await addjo(
            "processEmailNotificationReply",
            { email: gmailAuth.email, threadId: threadId },
            logger
          );
        })
      );
    }
  },
};
