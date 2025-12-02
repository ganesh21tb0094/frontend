public class Problem2 {

    public static void main(String args[]){
        String s = "(([[{}]]))";
        int n = s.length()-1;
        boolean possible = true;
        for(int i = 0;i<s.length()/2;i++){
            if(s.charAt(i)!=s.charAt(n)){
                possible = false;
            }
            n--;

        }
        if(possible){
            System.out.println("VALID");
        }else{
            System.out.println("INVALID");
        }
    }
}