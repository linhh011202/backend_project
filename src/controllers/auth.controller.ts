import axios from 'axios';
import * as jwt from 'jsonwebtoken';
import { Controller, Get, HttpExecutionContext, Post } from '../framework';
import { EnvService } from '../services';
import users from '../static/users';

@Controller('/auth')
export class AuthController {
  constructor(private readonly env: EnvService) {}

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

  @Get('/github/callback')
  public async onGithubCallback(ctx: HttpExecutionContext) {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: this.env.get('GITHUB_CLIENT_ID'),
      client_secret: this.env.get('GITHUB_CLIENT_SECRET'),
      code: ctx.req.query['code'],
    });
    return response.data;
  }

  @Get('/login/github')
  public loginWithGithub(ctx: HttpExecutionContext) {
    const clientID = this.env.get('GITHUB_CLIENT_ID');
    const redirectURI = this.env.get('GITHUB_REDIRECT_URI');
    ctx.res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=user`
    );
  }
}
