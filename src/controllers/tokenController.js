import jwt from 'jsonwebtoken';
import User from '../models/User';

export const store = async (req, res) => {
  const { email = '', password = '' } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      errros: ['Credenciais inválidas'],
    });
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({
      errros: ['Usuário não existe'],
    });
  }

  if (!(await user.passwordIsValid(password))) {
    return res.status(400).json({
      errros: ['Senha está incorreta'],
    });
  }

  const { id } = user;

  const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });

  return res.json({ token, user: { name: user.name, id, email } });
};
