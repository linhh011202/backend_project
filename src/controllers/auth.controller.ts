import axios from 'axios';
import * as jwt from 'jsonwebtoken';
import { Controller, Get, HttpExecutionContext, Post } from '../framework';
import { EnvService } from '../services';
import users from '../static/users';
import { PrismaClient } from '../../prisma/generated/prisma';
import bcrypt  from 'bcryptjs';
import { permission } from 'process';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly env: EnvService,
    private prisma: PrismaClient,
  ) {}


  @Post('/sign-up')
  public async signUP(ctx: HttpExecutionContext) {
    ctx.req.query.abc
    const { name, username, password, role_id } = ctx.req.body;
    
    const salt = this.env.get("HASH_SALT") || '0'
    const hashedPassword = await bcrypt.hash(password, parseInt(salt));
    const user = await this.prisma.user.create({
      data: { 
        name, 
        username, 
        password: hashedPassword, 
        role_id, 
       }
    })
    console.log(user)

    return [{ name: 'ok' }];
  }

  @Post('/login')
  public async login(ctx: HttpExecutionContext) {
    const { username, password } = ctx.req.body;

    const user = await this.prisma.user.findFirst({
      where: { 
        username, 
      },
      include: {
        role: true
      }
    })

    // TODO user not found check
    if (user == null) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Wrong password');
    }
    
    const token = jwt.sign({ user_id: user.id, role: user.role?.name }, 'mysecret', { expiresIn: '15Mins' });
    return { token };
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
