a=int(input())
arr = list(map(int,input().split()))
count=0
for i in range(a):
    if arr[i]>0:
        count+=1
        
print(count)