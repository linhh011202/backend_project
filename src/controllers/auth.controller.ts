import axios from 'axios';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { PrismaClient } from '../../prisma/generated/prisma';
import { Controller, Get, HttpExecutionContext, Post } from '../framework';
import { EnvService } from '../services';

@Controller('/auth')
export class AuthController {
  constructor(private readonly env: EnvService, private prisma: PrismaClient) {}

  @Post('/sign-up')
  public async signUP(ctx: HttpExecutionContext) {
    const { name, username, password, roleId } = ctx.req.body;

    // @todo: check if role existed

    const salt = this.env.get<string>('HASH_SALT', '10');
    const hashedPassword = await bcrypt.hash(password, +salt);
    const user = await this.prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
        roleId,
      },
    });

    // @ts-ignore
    delete user.password;

    return user;
  }

  @Post('/login')
  public async login(ctx: HttpExecutionContext) {
    const { username, password } = ctx.req.body;

    const user = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user == null) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Incorrect username or password');
    }

    return {
      accessToken: jwt.sign({ id: user.id }, this.env.get('JWT_SECRET_KEY', 'mysecret'), { expiresIn: '15Mins' }),
    };
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
