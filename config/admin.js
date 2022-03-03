module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '445b5e64273fe09c57abd9104c6a8d65'),
  },
});
