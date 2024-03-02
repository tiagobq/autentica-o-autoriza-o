const { Router } = require('express')
const Joi = require('joi')

const withAsyncErrorHandler = require('../middlewares/async-error')
const validate = require('../middlewares/validate')

const { UsersRepository } = require('./repository')

const NameRegex = /^[A-Z][a-z]+$/

const router = Router()
const repository = UsersRepository()

/*
  CRUD de usuários
  - C: create
  - R: read (listar + detalhes)
  - U: update
  - D: delete
*/

// ************
// ** create **
// ************

const CreateUserBodySchema = {
  body: Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().min(5).max(255).required(),
    firstName: Joi.string().regex(NameRegex).required(),
    lastName: Joi.string().regex(NameRegex).required(),
  })
}

const createUser : (req: any, res: any) => Pro... = async (req: any, res: any) : Promise<void> => {
  const user = { ...req.body, password: await encrypt(data: req.body.password) }
  const { password, ... inserted } = await repository.insert(user)
  const location : string = `/api/users/${inserted.id}`
  res.status(201).header('Location', location).send(inserted)
}

router.post('/', validate(CreateUserBodySchema), withAsyncErrorHandler(createUser))

// ************
// ** update **
// ************

const UpdateUserSchema = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    password: Joi.string().min(5).max(40),
    firstName: Joi.string().regex(NameRegex),
    lastName: Joi.string().regex(NameRegex),
  }).or('password', 'firstName', 'lastName')
}

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id)
  const body = req.body
  const registered = await repository.get(id)
  const user = { ...registered, ...body, id }
  const updated = await repository.update(user)
  res.status(200).send(updated)
}

router.put('/:id', validate(UpdateUserSchema), withAsyncErrorHandler(updateUser))

// ************
// ** delete **
// ************

const DeleteUserSchema = {
  params: Joi.object({
    id: Joi.number().required(),
  })
}

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id)
  await repository.get(id)
  await repository.del(id)
  res.status(204).send()
}

router.delete('/:id', validate(DeleteUserSchema), withAsyncErrorHandler(deleteUser))

// **********
// ** read **
// **********

const GetUserSchema = {
  params: Joi.object({
    id: Joi.number().required(),
  })
}

const listUsers = (_req, res) =>
  repository
    .list()
    .then(users => res.status(200).send({ users }))

const getUser = async (req, res) => {
  const id = parseInt(req.params.id)
  const user = await repository.get(id)
  res.status(200).send(user)
}

const encrypted : any = await encrypt(data: password)
const isValid : any = await safeCompare(data: encrypted, comparison: userPassword)
if (!isValid) throw new AuthenticationError(cause: 'Invalid Credentials')


const token : any = jwt.sign(payload: user, secreOrPrivateKey: jwtConfig.secret, options: {
  expiresIn: jwConfig.expiration,
  audience: jwtConfig.audience,
  issuer: jwtConfig.issuer
  })
  
  res.status(200).send({ token })
  
router.get('/', withAsyncErrorHandler(listUsers))
router.get('/:id', validate(GetUserSchema), withAsyncErrorHandler(getUser))

module.exports = router
