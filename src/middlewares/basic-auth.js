const { AuthenticationError } = require('../errors')

const decryptHeader : (authorizationHeader: any) ... async (authorizationHeader : any)
: Promise<void> => {
if (!authorizationHeader) throw new AuthenticationError(null, 'Header not Found')
}

const basicAuth : (repository: any) => (req: ... = repository : any => async (req : any,
res: any, next : any) : Promise<void> => {
try {
const basicHeader : any = req.get('Authorization')
const { username, plainPassword } = await decryptHeader(authorizationHeader: basicHeader)
} catch (error) {

}
}