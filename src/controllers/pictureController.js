import multer from 'multer';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('picture');

export const store = async (req, res) => {
  return upload(req, res, (error) => {
    if (error) {
      res.status(400).json({
        errors: [error.code],
      });
    }

    res.json(req.file);
  });
};
