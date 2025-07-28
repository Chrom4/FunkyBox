const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

// Configuração do MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '52r7v41l*',
  database: 'funkybox_db'
});

connection.connect();

app.use(cors({
  origin: ['exp://192.168.1.3:8081', 'http://localhost:19006'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 204
}));

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:19006');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});*/

// Rota para buscar dados do usuário (por exemplo, pelo ID)
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  const selectQuery = 'SELECT * FROM usuarios WHERE id = ?';

  connection.query(selectQuery, [userId], (error, results) => {
    if (error) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).json({ message: 'Erro ao buscar usuário' });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
      res.json(results[0]);
    }
  });
});


// Rota para cadastro de usuário
app.post('/cadastro', (req, res) => {
  const { nome, ocupacao, instituicaoEducacional, nivelEscolaridade, email, senha } = req.body;

  bcrypt.hash(senha, 10, (err, hash) => {

    if (!req.body.nome) {
      return res.status(400).send('Nome é obrigatório');
    }

    if (!req.body.email) {
      return res.status(400).send('Email é obrigatório');
    }

    if (err) {
      console.error('Erro ao criar hash da senha:', err);
      res.status(500).send('Erro ao criar hash da senha');
    } else {
      const insertQuery = `
              INSERT INTO usuarios 
                  (nome, ocupacao, instituicao_educacional, nivel_escolaridade, email, hashed_password)
              VALUES (?, ?, ?, ?, ?, ?)
          `;
      connection.query(insertQuery, [nome, ocupacao, instituicaoEducacional, nivelEscolaridade, email, hash], (error, results) => {
        if (error) {
          console.error('Erro ao cadastrar usuário:', error);
          res.status(500).send('Erro ao cadastrar usuário');
        } else {
          console.log('Usuário cadastrado com sucesso');
          res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
        }
      });
    }
  });
});

// Rota para login
app.post('/login', (req, res) => {
  const { emailVerification, senhaVerification } = req.body;
  const selectQuery = 'SELECT * FROM usuarios WHERE email = ?';

  if (!emailVerification || !senhaVerification) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  connection.query(selectQuery, [emailVerification], (error, results) => {
      if (error) {
          console.error('Erro ao buscar usuário:', error);
          res.status(500).json({ message: 'Erro ao buscar usuário' });
      } else if (results.length === 0) {
          res.status(401).json({ message: 'Usuário não encontrado' });
      } else {
          const user = results[0];

          // Comparar a senha inserida com o hash no banco de dados
          bcrypt.compare(senhaVerification, user.hashed_password, (err, match) => {
              if (err) {
                  console.error('Erro ao comparar senhas:', err);
                  res.status(500).json({ message: 'Erro ao comparar senhas' });
              } else if (!match) {
                  res.status(401).json({ message: 'Credenciais inválidas' });
              } else {
                  res.status(200).json({ message: 'Login bem-sucedido' });
              }
          });
      }
  });
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
