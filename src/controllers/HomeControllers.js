class HomeControllers {
  index(req, res) {
    res.json({ msg: 'OK' });
  }
}

export default new HomeControllers();
