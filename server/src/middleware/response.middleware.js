const _ = require("lodash");
const responseMiddleware = app => {
  app.use((req, res, next) => {
    const status = _.get(res, "locals.response.status");
    const message = _.get(res, "locals.response.message");
    const data = _.get(res, "locals.response.data");
    const responseMeta = _.get(res, "locals.response.responseMeta");
    const response = { message, data, responseMeta };
    res.status(status).json(response);
  });
};
module.exports = responseMiddleware;
