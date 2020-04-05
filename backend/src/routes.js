const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngsController = require("./controllers/OngsController");
const IncidentController = require("./controllers/IncidentController");
const OngProfileController = require("./controllers/OngProfileController");
const SessionController = require("./controllers/SessionController");

const routes = Router();

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      whatsapp: Joi.string()
        .regex(/\d{2}\d{4,5}\d{4}/)
        .required(),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngsController.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number()
    }
  }),
  IncidentController.index
);

routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  IncidentController.create
);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

routes.get(
  "/ong-incidents",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  OngProfileController.index
);

routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  SessionController.create
);

module.exports = routes;
