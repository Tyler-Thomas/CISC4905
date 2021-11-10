import java.sql.*;

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

   public static int  login(String user){
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
   flag=login("Test2");
   System.out.println(flag); 

   }
}