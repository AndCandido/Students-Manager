import Student from '../models/Student';
import Picture from '../models/Picture';

export const index = async (req, res) => {
  try {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'surname', 'email', 'age', 'height', 'weight'],
      order: [['name', 'ASC'], [Picture, 'id', 'DESC']],
      include: {
        model: Picture,
        attributes: ['filename'],
      },
    });

    res.json(students);
  } catch (e) {
    res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Id necessário'],
      });
    }

    const student = await Student.findByPk(id, {
      attributes: ['id', 'name', 'surname', 'email', 'age', 'height', 'weight'],
      order: [[Picture, 'id', 'DESC']],
      include: {
        model: Picture,
        attributes: ['filename'],
      },
    });

    if (!student) {
      return res.status(400).json({
        errors: ['Aluno não existe'],
      });
    }

    return res.json(student);
  } catch (e) {
    return res.json(e);
    // return res.status(400).json({
    //   errors: e.errors.map((err) => err.message),
    // });
  }
};

export const store = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);

    return res.json(newStudent);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Id necessário'],
      });
    }

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({
        errors: ['Aluno não existe'],
      });
    }

    const updatedStudent = await student.update(req.body);

    return res.json(updatedStudent);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Id necessário'],
      });
    }

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({
        errors: ['Aluno não existe'],
      });
    }

    await student.destroy();

    return res.json({ sucess: 'Aluno deletado' });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};
