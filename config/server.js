module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "85c8e3155c9752944339f13548dcce2b"),
    },
  },
});
