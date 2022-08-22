module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ba7a365006e22cfde117d009a35432fa'),
  },
});
