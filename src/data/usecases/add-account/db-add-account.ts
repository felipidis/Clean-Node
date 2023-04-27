import { type IAccountModel } from '../../../domain/models/account'
import { type IAddAccountModel, type IAddAccount } from '../../../domain/usecases/add-account'
import { type IEncrypter } from '../../protocols/encrypter'

export class DbAddAccount implements IAddAccount {
  private readonly encrypter: IEncrypter

  constructor (encrypter: IEncrypter) {
    this.encrypter = encrypter
  }

  async add (account: IAddAccountModel): Promise<IAccountModel> {
    await this.encrypter.encrypt(account.password)
    return await Promise.resolve({ id: 'test', name: 'test', email: 'test', password: 'test' })
  }
}
