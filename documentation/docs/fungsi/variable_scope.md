---
title: Variable Scope
---

## Variabel Lokal

Sebuah variabel yang berada/didefinisikan di dalam sebuah blok adalah variabel lokal. Variabel yang sifatnya lokal hanya dapat diakses pada blok tersebut saja. Misalnya :

```c
int main()
{
    int a = 0;
    while (a <= 100) {
        // variabel x hanya dapat dibaca pada blok while saja
        int x;
        x = a + a;
        a++;
    }

    // Error, x tidak diketahui
    x = 2;

    // Variabel a masih terdapat pada blok yang sama
    a = 2;

    return 0;
}
```
Contoh lain
```c
int jumlah(int a, int b)
{
    // variabel hasil bersifat lokal terhadap fungsi jumlah()
    int hasil = a + b;
    return hasil;
}

int main()
{
    // variabel hasil di fungsi main() 
    // adalah variabel yang berbeda 
    // dengan hasil di fungsi jumlah()
    int hasil;
    // ...
    // ...
    // ...
}
```

## Variabel Global

Variabel global adalah varibel yang dideklarasikan diluar fungsi (secara global) dan dapat diakses dari semua fungsi. Misalnya :
```c
// variabel iniGlobal merupakan variabel global
int iniGlobal;

void fungsi()
{
    // ..
    // dapat mengakses iniGlobal
}

int main()
{
    // ..
    // dapat mengakses iniGlobal
}
```