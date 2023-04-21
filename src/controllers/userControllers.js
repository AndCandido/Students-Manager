import User from '../models/User';

export const store = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.json(newUser);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

export const index = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (e) {
    return res.json(null);
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
  } catch (e) {
    return res.json(null);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ errors: ['Id não enviado'] });

    const user = await User.findByPk(id);

    if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });

    const userUpdated = await user.update(req.body);

    return res.json(userUpdated);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ errors: ['Id não enviado'] });

    const user = await User.findByPk(id);

    if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });

    await user.destroy();

    return res.json(user);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};
