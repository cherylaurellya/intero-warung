const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const dataWarung = [
    {
        "kd_produk": "A001",
        "nm_brg": "kopi Bubuk 100g",
        "hrg": "15000",
        "ket_stok": "ada"
    },
    {
        "kd_produk": "A002",
        "nm_brg": "Gula Pasir 1kg",
        "hrg": "13500",
        "ket_stok": "habis"
    },
    {
        "kd_produk": "A003",
        "nm_brg": "Minyak Goreng 1L",
        "hrg": "14000",
        "ket_stok": "ada"
    }

];

app.get('/', (req, res) => {
    res.send('Selamat Datang di Warung!, untuk melihat data bisa /api/warung');
});

app.get('/api/warung', (req, res) => {
    res.json(dataWarung);
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server jalan di http://localhost:${port}`);
});

module.exports = app;