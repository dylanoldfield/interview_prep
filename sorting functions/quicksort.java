
import java.util.Arrays;


public class quicksort{
    public static void main(String[] args){
        int[] arr = {80,90,30,50,70,60,100,60,120, 70, 130, 150};

        
        String[] str_arr = Arrays.stream(arr).mapToObj(String::valueOf).toArray(String[]::new);
        System.out.printf(String.join(",", str_arr) +"\n");
        
        qs(arr,true);

        str_arr = Arrays.stream(arr).mapToObj(String::valueOf).toArray(String[]::new);
        System.out.printf(String.join(",", str_arr) +"\n");
  
    }


    public static void qs(int[] arr, boolean reverse){
     part(arr, 0, arr.length-1, true);
    }

    public static void part(int[] arr, int low, int high, boolean reverse){
        int placeholder = low;
        
        int pivot = arr[high];

        for(int i = low; i < high; i++){
            if(reverse){
                if(arr[i] >= pivot){
                    swap(arr,placeholder,i);
                    placeholder++;
                }
            } 
            else{
                if(arr[i] <= pivot){
                    swap(arr,placeholder,i);
                    placeholder++;
                }
            }    
        }
        swap(arr,placeholder, high);

        if (placeholder != low){
            part(arr, 0, placeholder - 1, reverse);
        }
        if (placeholder != high){
            part(arr, placeholder, high, reverse);
        }   
    }

    public static void swap(int[] arr, int p1, int p2){
        int temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
    }
}
