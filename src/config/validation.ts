import * as Joi from 'joi';

export default Joi.object({
  JWT_SECRET: Joi.string(),
  JWT_EXPIRE: Joi.number().default(3000),
});
