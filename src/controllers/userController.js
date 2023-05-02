import User from '../models/User';

export const store = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const { id, name, email } = newUser;
    return res.json({
      id, name, email, ok: true,
    });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
      ok: false,
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.userId;

    const user = await User.findByPk(id);

    if (!user) return res.status(400).json({ errors: ['Usuário não existe'], ok: false });

    const userUpdated = await user.update(req.body);
    const { name, email } = userUpdated;

    return res.json({
      id, name, email, ok: true,
    });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
      ok: false,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.userId;

    const user = await User.findByPk(id);

    if (!user) return res.status(400).json({ errors: ['Usuário não existe'], ok: false });

    await user.destroy();

    return res.json({ sucess: 'Usuário deletado', ok: true });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
      ok: false,
    });
  }
};
