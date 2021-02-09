const { PHASE_DEVELOPMENT_SERVER } = require('next/constants'); 

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      // dev config options
      env: {
        CONTENT_API_KEY: "cacf4869a36aef0055a16a2c48",
        CONTENT_API_URL: "http://localhost:2368",
        CN_API_URL: "http://localhost:5000/"
      }
    }
  } else {
    return {
      // prod config options
      env: {
        CONTENT_API_KEY: "db12fc51133acab5c30a5c6fc6",
        CONTENT_API_URL: "https://code-nguyen3-ghost.herokuapp.com",
        CN_API_URL: "https://blooming-sands-31061.herokuapp.com/"
      }
    }  
  }

}

