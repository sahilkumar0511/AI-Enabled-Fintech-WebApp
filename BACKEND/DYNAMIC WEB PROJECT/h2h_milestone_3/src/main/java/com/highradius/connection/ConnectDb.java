package com.highradius.connection;
import java.sql.*;

public class ConnectDb {
	static final String URL = "jdbc:mysql://localhost:3306/hrc_db";
	static final String USER = "root";
	static final String PASS = "Aditi@2610";
	public static Connection connect(){
		Connection con = null;
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				
				con = DriverManager.getConnection(URL, USER, PASS);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return con;
	}
}

