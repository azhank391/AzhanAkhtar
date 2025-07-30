require('dotenv').config();

const commonConfig = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true' ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
};

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    ...commonConfig
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    ...commonConfig
  }
};
