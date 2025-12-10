app.post('/api/login',
  body('username').notEmpty(),
  body('password').notEmpty(),
  async (req,res) => {
    const { username, password, captcha } = req.body;

    if(!captcha || captcha.length < 4){
      return res.status(400).json({ ok:false, msg:'Captcha inválido' });
    }

    const [rows] = await pool.execute(
      'SELECT id, username, password_hash, role FROM users WHERE username = ?',
      [username]
    );

    if(rows.length === 0){
      return res.status(401).json({ ok:false, msg:'Usuario o contraseña incorrecta' });
    }

    const user = rows[0];

    const okPassword = bcrypt.compareSync(password, user.password_hash);

    if(!okPassword){
      return res.status(401).json({ ok:false, msg:'Usuario o contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    return res.json({ ok:true, token });
});
