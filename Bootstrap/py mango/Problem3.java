public class Problem3 {

    public static void main(String args[]){
        int k = 3;
        int z = k-1;
        int arr[] = {1,3,-1,-3,5,3,6,7};
        for(int i = 0;i<arr.length/k;i++){
           for(int j = 0;j<arr.length;j++){
              Math.max(arr[i],arr[z]);
           }
        }
        
            }

        }
        
        
