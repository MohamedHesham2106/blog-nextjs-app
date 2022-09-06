/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // add your configuration
    return {
      env: {
        mongodb_username: "",
        mongodb_password: "",
        mongodb_cluster_name: "",
        mongodb_database: "",
      },
    };
  }
  return {
    env: {
      server: process.env.SERVER,
    },
  };
};
