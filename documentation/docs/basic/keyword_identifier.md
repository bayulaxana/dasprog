---
title: Keyword dan Identifier
---

## Keyword

Keyword merupakan kata khusus yang telah dipesan (reserved) pada bahasa pemograman. Kata-kata khusus tersebut mempunyai makna tersendiri bagi compiler, dan kata-kata tersebut merupakan bagian dari sintaks dan tidak dapat digunakan sebagai identifier.
Berikut adalah daftar keyword pada bahasa C.

|               |           |           |           |
|---------------|:----------|:----------|:----------|
| auto          | double    | int       | struct    |
| break         | else      | long      | switch    |
| case          | enum      | register  | typedef   |
| char          | extern    | return    | union     |
| continue      | for       | signed    | void      |
| do            | if        | static    | while     |
| default       | goto      | sizeof    | volatile  |
| const         | float     | short     | unsigned  |

## Identifier

Identifier merujuk kepada penamaan sebuah entitas, seperti pada variabel, fungsi, structures dan lain-lain. Karena identifier menamai sebuah entitas, maka nama dari identifier harus unik (dua entitas tidak boleh mempunyai nama identifier yang sama).

Aturan penamaan identifier :

+ Identifier bukan merupakan keyword.
+ Identifier hanya boleh terdiri dari huruf lowercase, huruf uppercase, digit, dan simbol underscore ( _ ).
+ Identifier tidak boleh mengandung whitespace.
+ Identifier harus dimulai dengan huruf atau simbol underscore. Tidak boleh dimulai dengan digit/angka.
+ Bersifat case-sensitive, artinya identifier `variable` berbeda dengan `vAriaBle`.

## Gaya Penamaan Identifier

### Camel Case

camelCase

### Snake Case

snake_case

### Pascal Case

PascalCase

### Screaming Camel Case

SCREAMING_CAMEL_CASE