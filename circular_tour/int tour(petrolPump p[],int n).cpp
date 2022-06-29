#include <bits/stdc++.h>
using namespace std;
int tour(petrolPump p[],int n)
{
  int kami_hai = 0, kitna_bacha_hai = 0, shuru_yaha_se_karo = 0;

  for(int i = 0; i < n; i++){
           kitna_bacha_hai += p[i].petrol - p[i].distance;
           
           if(kitna_bacha_hai < 0)
           {
               kami_hai += kitna_bacha_hai;
               shuru_yaha_se_karo = i + 1;
               kitna_bacha_hai = 0;
           }
       }
       
       if(kami_hai + kitna_bacha_hai >= 0)
           return shuru_yaha_se_karo;
       
       return -1;
   }