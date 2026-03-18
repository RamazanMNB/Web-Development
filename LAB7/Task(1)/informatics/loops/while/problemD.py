a=int(input())
twoinpow = 1
booll=False
while twoinpow<=a:
    
    if twoinpow == a:
        print("YES")
        booll=True
        break
    else:
        twoinpow*=2
      
if booll == False:
    print("NO")
    
    


