import { CreateUserType } from '..';
import Joi from 'joi';

export const UserSchema = Joi.object({
  email: Joi.string().max(32).email({ tlds: false }).required(),
  username: Joi.string().min(3).max(32).alphanum().lowercase().required(),
  password: Joi.string().min(8).max(256).trim().required(),
});

export const CreateUserSchema = Joi.object<CreateUserType>({
  email: Joi.string().max(32).email({ tlds: false }).required(),
  // username: Joi.string().min(3).max(32).alphanum().lowercase().required(),
  password: Joi.string().min(8).max(256).trim().required(),
  confirmPassword: Joi.string()
    .label('Confirm Password')
    .min(8)
    .max(256)
    .trim()
    .valid(Joi.ref('password'))
    .options({ messages: { 'any.only': '{{#label}} does not match' } })
    .required(),
});

export const UserIdSchema = Joi.object({
  username: Joi.string().min(3).max(32).alphanum().lowercase().required(),
});
