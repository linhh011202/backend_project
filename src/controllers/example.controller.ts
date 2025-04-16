import { Controller, Get, HttpExecutionContext, Post } from '../framework';

@Controller('/v1')
export class ExampleController {
  @Get('/examples')
  public listExamples(ctx: HttpExecutionContext) {
    return [{ name: 'ok' }];
  }

  @Post('/examples')
  public createExample() {}

  public dosth() {}
}

// base64encode(<user>:<pass>) => Basic str
// myusername:mypassword

// headers request { "Authorization": "Basic <base64encode(<user>:<pass>)>" }
// 1. Kiem tra trong header cuar request co key "Authorization"
// 2. Lay gia tri header "Authorization" ra
// 3. Trich xuat thong tin <base64encode(<user>:<pass>)> tu buoc 2
// 4. Decode thong tin buoc 3 ra mot chuoi <user>:<pass>
// 5. Server can co san danh sach user name + pass,