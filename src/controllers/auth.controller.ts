import { Controller, HttpExecutionContext, Post } from '../framework';
import * as jwt from 'jsonwebtoken';

const users = [
  {
    id: 1,
    fullname: 'user1',
    username: 'user1',
    password: 'mypassword',
  },
];

@Controller('/auth')
export class AuthController {
  @Post('/login')
  public login(ctx: HttpExecutionContext) {
    const { username, password } = ctx.req.body;
    const user = users.find(user => {
      return user.username === username || user.password === password;
    });
    if (user) {
      const token = jwt.sign({ id: user.id }, 'mysecret', { expiresIn: '5Mins' });
      return { token };
    } else {
      throw new Error('Invalid username or password');
    }
  }
}
