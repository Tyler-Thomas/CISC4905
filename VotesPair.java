import java.util.*;
public class VotesPair{
    private int[] votes;
    private float avg;

    public VotesPair(int[] arr, float fl){
        votes= new int[arr.length];
        avg=fl;
        votes=Arrays.copyOf(arr,arr.length);
    }

    public int[] getVotes(){return votes;}
    public float getAVG(){return avg;}
}