import { Router, Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
import UserMap from '../Mappings/UserMap';

const sessionRouter = Router();

sessionRouter.post('/', async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const mappedUser = UserMap.toDTO(user);
  return response.json({ mappedUser, token });
});

export default sessionRouter;
