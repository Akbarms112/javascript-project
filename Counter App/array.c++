#include<bits/stdc++.h>
using namespace std;
int kaldenalgorthim(int a[],int size)
{
  int currentsum=0;
  int maxsum=0;
  for(int i=0;i<size;i++)
  {
    currentsum=currentsum+a[i];
    if(currentsum>maxsum)
    {
        maxsum=currentsum;
    }
    if(currentsum>0)
    {
        currentsum=0;
    }
    return maxsum;

  }

}
int main()
{
    
    int a[]={1,2,-9,9};
    int n=sizeof(a);

  
    int max_sun = kaldenalgorthim(a,n);
    cout<<max_sun;

}
