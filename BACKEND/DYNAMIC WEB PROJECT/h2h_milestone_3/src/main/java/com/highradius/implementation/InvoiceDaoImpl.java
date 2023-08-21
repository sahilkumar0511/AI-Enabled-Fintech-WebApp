package com.highradius.implementation;

import com.highradius.connection.*;

import com.highradius.model.Invoice;

import java.util.*;
import java.sql.*;
import java.sql.Date;


@SuppressWarnings("unused")
public class InvoiceDaoImpl implements InvoiceDao{
	private DatabaseConnection databaseConnection;
	private static final String READ_ALL = "select * from h2h_oap LIMIT 10000";
	private static final String ADD = "INSERT INTO h2h_oap (CUSTOMER_ORDER_ID, SALES_ORG, DISTRIBUTION_CHANNEL, CUSTOMER_NUMBER, COMPANY_CODE, ORDER_CURRENCY, AMOUNT_IN_USD, ORDER_CREATION_DATE) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
	private static final String EDIT = "UPDATE h2h_oap SET ORDER_CURRENCY = ?,COMPANY_CODE = ?, DISTRIBUTION_CHANNEL = ? WHERE Sl_no = ?;";
	private static final String DELETE = "delete from h2h_oap where Sl_no = ?;";
	public InvoiceDaoImpl() {
		databaseConnection = new DatabaseConnection();
	}
	
	public List<Invoice> getInvoice(){
		List<Invoice> invoices = new ArrayList<>();
		try(Connection con = ConnectDb.connect();
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery(READ_ALL);){
			
			System.out.println(stmt);
			while(rs.next()) {
				Invoice inv = new Invoice();
				inv.setSl_no(rs.getInt("Sl_no"));
				inv.setCUSTOMER_ORDER_ID(rs.getString("CUSTOMER_ORDER_ID"));
				inv.setSALES_ORG(rs.getString("SALES_ORG"));
				inv.setDISTRIBUTION_CHANNEL(rs.getString("DISTRIBUTION_CHANNEL"));
				inv.setCOMPANY_CODE(rs.getString("COMPANY_CODE"));
				inv.setORDER_CREATION_DATE(rs.getString("ORDER_CREATION_DATE"));
				inv.setORDER_AMOUNT(rs.getDouble("ORDER_AMOUNT"));
				inv.setORDER_CURRENCY(rs.getString("ORDER_CURRENCY"));
				inv.setCUSTOMER_NUMBER(rs.getString("CUSTOMER_NUMBER"));
				inv.setAMOUNT_IN_USD(rs.getDouble("AMOUNT_IN_USD"));
				invoices.add(inv);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return invoices;
	}
	
	public void insertInvoice(Invoice invoice) throws SQLException{
		System.out.println(ADD);
	    try (Connection con = ConnectDb.connect();
	         PreparedStatement pstmt = con.prepareStatement(ADD)) {
	        pstmt.setString(1, invoice.getCUSTOMER_ORDER_ID());
	        pstmt.setString(2, invoice.getSALES_ORG());
	        pstmt.setString(3, invoice.getDISTRIBUTION_CHANNEL());
	        pstmt.setString(4, invoice.getCUSTOMER_NUMBER());
	        pstmt.setString(5, invoice.getCOMPANY_CODE());
	        pstmt.setString(6, invoice.getORDER_CURRENCY());
	        pstmt.setDouble(7, invoice.getAMOUNT_IN_USD());
	        pstmt.setString(8, invoice.getORDER_CREATION_DATE());
	        System.out.println(pstmt);
	        int rowsInserted = pstmt.executeUpdate();
	        if (rowsInserted > 0) {
	            System.out.println("New row added successfully.");
	        } else {
	            System.out.println("Failed to add the row.");
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}
	
	
	public void updateInvoice(int id, Invoice invoice) {
		try(Connection con = ConnectDb.connect();
				PreparedStatement pstmt = con.prepareStatement(EDIT)){
			pstmt.setString(1, invoice.getORDER_CURRENCY());
            pstmt.setString(2, invoice.getCOMPANY_CODE());
            pstmt.setString(3, invoice.getDISTRIBUTION_CHANNEL());
            pstmt.setInt(4, id);
            pstmt.executeUpdate();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public void deleteInvoice(int Sl_no) throws SQLException{
		try(Connection con = ConnectDb.connect();
				PreparedStatement pstmt = con.prepareStatement(DELETE);){
			pstmt.setInt(1,Sl_no);
			pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}


	public void deleteManyInvoice(String slNos) throws SQLException{
		String DELETE_MANY = "DELETE FROM h2h_oap WHERE Sl_no IN (" + slNos + ")";
		try(Connection con = ConnectDb.connect();
				PreparedStatement pstmt = con.prepareStatement(DELETE_MANY)){
//			String slNosString = String.join(",", slNos);
//			pstmt.setString(1, slNosString);
			pstmt.executeUpdate();
		} catch(SQLException e) {
			e.printStackTrace();
		}
	}

	public Invoice getInvoiceId(String CUSTOMER_ORDER_ID) {
        Invoice invoice = null;
        try (Connection con = ConnectDb.connect();
             PreparedStatement pstmt = con.prepareStatement("SELECT * FROM h2h_oap WHERE CUSTOMER_ORDER_ID = ?")) {
            pstmt.setString(1, CUSTOMER_ORDER_ID);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    invoice = new Invoice();
                    invoice.setSl_no(rs.getInt("Sl_no"));
                    invoice.setCUSTOMER_ORDER_ID(rs.getString("CUSTOMER_ORDER_ID"));
                    invoice.setSALES_ORG(rs.getString("SALES_ORG"));
                    invoice.setDISTRIBUTION_CHANNEL(rs.getString("DISTRIBUTION_CHANNEL"));
                    invoice.setCOMPANY_CODE(rs.getString("COMPANY_CODE"));
                    invoice.setORDER_CREATION_DATE(rs.getString("ORDER_CREATION_DATE"));
                    invoice.setORDER_AMOUNT(rs.getDouble("ORDER_AMOUNT"));
                    invoice.setORDER_CURRENCY(rs.getString("ORDER_CURRENCY"));
                    invoice.setCUSTOMER_NUMBER(rs.getString("CUSTOMER_NUMBER"));
                    invoice.setAMOUNT_IN_USD(rs.getDouble("AMOUNT_IN_USD"));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
       return invoice;
	}
	@Override
	public Connection getConnection() {
		// TODO Auto-generated method stub
		return null;
	}

}
