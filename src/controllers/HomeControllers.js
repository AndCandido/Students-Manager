import Aluno from '../models/Aluno';

export const index = async (req, res) => {
  try {
    const novoAluno = await Aluno.create({
      name: 'Aluno 3',
      surname: 'Sobrenome',
      email: 'alunos@g',
      age: 19,
      height: 1.7,
      weight: 120,
    });
    res.json(novoAluno);
  } catch (e) {
    res.status(400).json(e.errors.map((err) => err.message));
  }
};
