const sendVerifyEmail = (obj) => {
  console.log(`sent verifyEmail to ${obj.email}`);
};

const sendWelcomeEmail = (obj) => {
  console.log(`sent welcome email to ${obj.email}`);
};

module.exports = {
  verifyEmail: sendVerifyEmail,
  welcomeEmail: sendWelcomeEmail,
};
