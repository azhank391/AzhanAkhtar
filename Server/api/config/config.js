require('dotenv').config();

const commonConfig = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true' ? {
      require: true,
      rejectUnauthorized: false
    } : false,
    // Add connection pooling for serverless
    pool: {
      max: 1,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  // Add logging configuration
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  // Add timezone configuration
  timezone: '+00:00'
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
