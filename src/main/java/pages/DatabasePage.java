package pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabasePage {
	Connection connection;
	Statement statement;
	ResultSet resultSet;
	String columnValue;
	
	public String getDataFromDB(String columnName) {
		
		try {
//			set the properties of mySQL
			Class.forName("com.mysql.cj.jdbc.Driver");
			String sqlURL = "jdbc:mysql://localhost:3306/dec2021";
			String sqlUsername = "root";
			String sqlPassword = "root";
			String sqlQuery = "select * from users";
			
//			create a connection to local DB
			connection = DriverManager.getConnection(sqlURL, sqlUsername, sqlPassword);
			
//			Empower the connection reference variable to execute queries
			statement = connection.createStatement();
			
//			Deliver the query
			resultSet = statement.executeQuery(sqlQuery);
			
//			retrieve the data
			while(resultSet.next()) {
			return columnValue = resultSet.getString(columnName);
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			if(resultSet != null) {
				try {
					resultSet.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			
			if(connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return columnValue;
	}
}
