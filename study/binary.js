/*
decimal十進位   binary二進位  hexadecimal十六進位  octal八進位
1              1            1                   1
2              10           2                   2
3              11           3                   3
4              100          4                   4
5              101          5                   5
6              110          6                   6
7              111          7                   7
8              1000         8                   10
9              1001         9                   11           
10             1010         A                   12
11             1011         B                   13          
12             1100         C                   14
13             1101         D                   15
14             1110         E                   16
15             1111         F                   17
16             10000        10                  20                 
17             10001        11                  21
18             10010        12                  22
19             10011        13                  23
20             10100        14                  24
21             10101        15                  25
22             10110        16                  26
23             10111        17                  27
24             11000        18                  30
25             11001        19                  31
26             11010        1A                  32
27             11011        1B                  33
28             11100        1C                  34
29             11101        1D                  35        
30             11110        1E                  36
31             11111        1F                  37
32             100000       20                  40
.              .            
.              .                                
.              .                          
1116           10001011100


【進位換算範例】
二進位1116換算成十進位
⬇
2^1=2          
2^2=4
2^3=8
2^4=16
2^5=32
2^6=64
2^7=128
2^8=256
2^9=512
2^10=1024 -> 10000000000
1116-1024=92 -> 92: 2^6 + 28 -> 1000000 + 11100 = 1000101110

二進位11101換算成十進位：
1*2^0+0*2^1+1*2^2+1*2^3+1*2^4 = 1 + 0 + 4 + 8 + 16 = 29

十六進位FF轉換成十進位：
15*16^1+15 = 255


【Signed 和 Unsigned 整數的 32-bit 與 64-bit 表示】
當我們說「bit」時，是指二進位的最小單位，只有 0 或 1。32-bit 和 64-bit 主要區別在於：
  數據範圍：32-bit 能處理的數字範圍較小，而 64-bit 可以處理更大的數字範圍。
  記憶體容量：32-bit 系統最多支持 4GB 記憶體，64-bit 系統則支持更大的記憶體，理論上可達 18.4 億 GB。
簡單來說，64-bit 系統能處理更多的數據和記憶體，效能更強。

Signed 和 Unsigned
  Signed：可以表示正數和負數。
  Unsigned：只能表示正數。

32-bit 範例：
  Unsigned 32-bit：範圍是 0 到 4,294,967,295 (2^32-1)。
  Signed 32-bit：範圍是 -2,147,483,648 到 2,147,483,647 (2^31-1)。

範例：
  00000000000000000000000000000000：代表數字 0。
  11111111111111111111111111111111：代表 -1（在 signed 中）。
  10101010100000000000000000000000：代表負數。
int 是 32-bit，int64 是 64-bit，後者可以表示更大的數字。
*/