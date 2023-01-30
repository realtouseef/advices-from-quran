'use strict';

const advices = require('./AdvicesFromQuran.json');

const getAdvice = async event => {
  if (event.pathParameters) {
    const { adviceId } = event.pathParameters;
    const advice = advices.find(advice => adviceId == advice.id);
    if (!advice) {
      return {
        statusCode: 404,
        body: createResponse({ message: 'The ID seems invalid' }),
      };
    }
    return {
      statusCode: 200,
      body: createResponse(advice),
    };
  } else {
    const randomIndex = Math.floor(advices.length * Math.random());
    const advice = advices.at(randomIndex);
    return {
      statusCode: 200,
      body: createResponse(advice),
    };
  }
};

module.exports = { getAdvice };

const createResponse = json => {
  return JSON.stringify(json, null, 2);
};
