import java.sql.*;
import java.util.*;

public class ProjectDB {

   public static int addAccount(String user, String pwd) throws Exception{
      Connection c = null;
      
      try {
         Class.forName("org.sqlite.JDBC");
         c = DriverManager.getConnection("jdbc:sqlite:FECommunityTierLists.db");
         c.setAutoCommit(false);
      } catch ( Exception e ) {
         System.err.println( e.getClass().getName() + ": " + e.getMessage() );
         System.exit(0);
      }
      try{
      System.out.println("Opened database successfully");
      Statement smt= c.createStatement();
      String query="INSERT INTO User Values('"+user+"','"+pwd+"',false);";
      smt.executeUpdate(query);
      smt.close();
      c.commit();
      c.close();
      return 0;
   }
   catch(Exception E){ return -1;}
   }

   public static int login(String user){
      Connection c = null;
      
      try {
         Class.forName("org.sqlite.JDBC");
         c = DriverManager.getConnection("jdbc:sqlite:FECommunityTierLists.db");
         c.setAutoCommit(false);
      } catch ( Exception e ) {
         System.err.println( e.getClass().getName() + ": " + e.getMessage() );
         System.exit(0);
      }
      try{
      System.out.println("Opened database successfully");
      Statement smt= c.createStatement();
      ResultSet r= smt.executeQuery("Select * From User WHERE UserID='"+user+"';");
      while(r.next()){
         if(!r.getString("UserID").equals("")){
            String query="Update User Set Login=true where UserID='"+user+"';";
            smt.executeUpdate(query);
            c.commit();
            r.close();
            smt.close();
            c.close();
            return 0;
         }
         
      }
      
      r.close();
      smt.close();
      c.close();
      return 1;
   }
   catch(Exception e){return -1;}
   } 

   public static HashMap<Integer,Integer> checkVote(String userID,int charID){
      Connection c = null;
      HashMap<Integer,Integer> output= new HashMap<>();
      try {
         Class.forName("org.sqlite.JDBC");
         c = DriverManager.getConnection("jdbc:sqlite:FECommunityTierLists.db");
         c.setAutoCommit(false);
      } catch ( Exception e ) {
         System.err.println( e.getClass().getName() + ": " + e.getMessage() );
         System.exit(0);
      }
      try{
         System.out.println("Opened database successfully");
         Statement smt= c.createStatement();
         ResultSet r= smt.executeQuery("Select * From Vote WHERE User='"+userID+"' AND Character='"+charID+"';");
         while(r.next()){
            output.put(Integer.valueOf(r.getString("VoteID")),Integer.valueOf(r.getString("VoteNum")));
         }
         
         r.close();
         smt.close();
         c.close();
         if(output.isEmpty())
         output.put(0,0);
         return output;
      }
      catch(Exception e){output.put(-1,-1); return output;}
      } 

      public static float getAverage(int character){
         Connection c= null;
         float avg=0;
         try {
            Class.forName("org.sqlite.JDBC");
            c = DriverManager.getConnection("jdbc:sqlite:FECommunityTierLists.db");
            c.setAutoCommit(false);
         } catch ( Exception e ) {
            System.err.println( e.getClass().getName() + ": " + e.getMessage() );
            System.exit(0);
         }
         try{
            System.out.println("Opened database successfully");
            Statement smt= c.createStatement();
            ResultSet r= smt.executeQuery("Select AVG(VoteNum) as avg From Vote WHERE Character='"+character+"';");
            while(r.next()){
               avg= (r.getFloat("avg"));
            }
            
            r.close();
            smt.close();
            c.close();
            
            return avg;
         }
         catch(Exception e){ System.out.println(e.getMessage());return -1;}
         } 
      

   
  public static void main( String args[] ) throws Exception{
     int flag;
      /**Connection c = null;
      
      try {
         Class.forName("org.sqlite.JDBC");
         c = DriverManager.getConnection("jdbc:sqlite:FECommunityTierLists.db");
         c.setAutoCommit(false);
      } catch ( Exception e ) {
         System.err.println( e.getClass().getName() + ": " + e.getMessage() );
         System.exit(0);
      }
      try{
      System.out.println("Opened database successfully");
      Statement smt= c.createStatement();
      ResultSet r= smt.executeQuery("Select * From Character;");
      while(r.next()){
         System.out.println(r.getString("Character"));
      }
   }
   catch(Exception e){System.out.println("Oops...");} **/
   
   //System.out.println(checkVote("Test1",1).entrySet().toArray()[0]); 
   System.out.println(getAverage(Integer.parseInt(args[0])));

   }
}