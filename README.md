# Manajemen Novel API dengan JWT dan RBAC


Proyek ini adalah aplikasi manajemen novel yang memungkinkan admin  untuk menambahkan, mengedit, menghapus, dan melihat daftar novel, sementara user hanya bisa melihat daftar novel . Aplikasi ini dibangun menggunakan Node.js, Express, dan Sequelize sebagai ORM untuk berinteraksi dengan database


## Installation
Clone repositori ini:
```sh
git clone https://github.com/Isann22/capstone
cd capstone
```
Instal dependensi:
```sh
npm install
```
Buat file .env dari .env.example dan isi dengan konfigurasi yang sesuai:
```sh
cp .env.example .env
```
Jalankan migrasi untuk membuat tabel:
```sh
npx sequelize-cli db:migrate
```

Seed database (opsional):
```sh
npx sequelize-cli db:seed:all
```

## Usage
jalankan server :
```
npm start
```

Buka Postman atau alat lainnya untuk menguji endpoint API.









