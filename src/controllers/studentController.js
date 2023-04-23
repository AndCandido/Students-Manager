import Student from '../models/Student';

export const index = async (req, res) => {
  try {
    const students = await Student.findAll(
      {
        attributes: ['id', 'name', 'surname', 'email', 'age', 'height', 'weight'],
      },
    );
    res.json(students);
  } catch (e) {
    res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

const verifyErrors = (body) => {
  const errors = [];
  const {
    name,
    surname,
    email,
    age,
    height,
    weigth,
  } = body;
  console.log(body);
  if (!name || !surname || !email || !age || !height || !weigth) {
    errors.push('Campos vazios');
  }
  return errors;
};

export const store = async (req, res) => {
  try {
    const errors = verifyErrors(req.body);
    if (errors.length > 0) return res.status(400).json({ errors });
    const newStudent = Student.create(req.body);
    return res.json(newStudent);
  } catch (e) {
    return res.status(400).json(e);
  }
};
