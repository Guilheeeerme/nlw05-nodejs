import { getCustomRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string): Promise<User> {
    const userExists = this.usersRepository.findOne({ email });

    // Se existir, retorna
    if (userExists) {
      return userExists;
    }

    // Caso não, criar
    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersService };
