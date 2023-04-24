import User from '../models/User';

export const indexDev = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

export const store = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const { id, name, email } = newUser;
    return res.json({ id, name, email });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.userId;

    const user = await User.findByPk(id);

    if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });

    const userUpdated = await user.update(req.body);
    const { name, email } = userUpdated;

    return res.json({ id, name, email });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.userId;

    const user = await User.findByPk(id);

    if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });

    await user.destroy();

    return res.json({ sucess: 'Usuário deletado' });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};
