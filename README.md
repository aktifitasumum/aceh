CMD
===

D: atau E:  //pindah ke drive lain
dir // untuk tampilkan isi folder
md atau mkdir namaFolder // membuat folder baru
md namaFolder1 namaFolder2 //membuat 2 folder
md D:\namaFolder\subFolder\
rd namaFolder //Hapus Folder
del namafile //hapus file

copy con namaFile.txt // membuat file baru beserta isinya lalu ctrl+z dan enter
namaFile.txt untuk buka file

copy namaFile.txt d:\namaFolder\folderSub\ // copy file to folder lain
move namaFile.txt tujuanFolder

ren namaFile.txt namaFileHasilRename.txt //rename file

GIT
===
Langkah Awal
git config --global user.email "aktifitasumum@gmail.com" //untuk login ke github
git init //untuk aktifkan git difolder tersebut
git add . //menambahkan semua isi folder ke perencanaan upload ke github
git remote add origin https://github.com/aktifitasumum/rmd.git  //untuk remote ke repository
git commit -m "keterangan" //untuk commit
git push -u origin main //untuk upload ke github "main" sebagai nama folder di github

git clone https://github.com/aktifitasumum/rmd.git   //untuk ambil repositori kita di github ke lokal kumputer

Untuk selanjutnya:
git add . 
git commit -m "keterangan"
git push -u origin main

git pull untuk update dari repo ke lokal
