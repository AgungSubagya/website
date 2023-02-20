const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), function(req, res) {
  console.log(req.file);
  res.send('File berhasil diunggah');
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada port ${port}`);
});
