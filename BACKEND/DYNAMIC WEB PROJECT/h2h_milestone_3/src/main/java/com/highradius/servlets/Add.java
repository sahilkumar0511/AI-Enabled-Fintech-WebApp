package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.*;
import com.highradius.model.*;

import com.google.gson.Gson;

import java.util.*;

/**
 * Servlet implementation class Add
 */
@SuppressWarnings("unused")
@WebServlet("/Add")
public class Add extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private InvoiceDao invoiceDao;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public void init() {
        invoiceDao = new InvoiceDaoImpl();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String CUSTOMER_ORDER_ID = request.getParameter("CUSTOMER_ORDER_ID");
		String SALES_ORG = request.getParameter("SALES_ORG");
		String DISTRIBUTION_CHANNEL = request.getParameter("DISTRIBUTION_CHANNEL");
		String CUSTOMER_NUMBER = request.getParameter("CUSTOMER_NUMBER");
		String COMPANY_CODE = request.getParameter("COMPANY_CODE");
		String ORDER_CURRENCY = request.getParameter("ORDER_CURRENCY");
		Double AMOUNT_IN_USD = Double.parseDouble(request.getParameter("AMOUNT_IN_USD"));
		String ORDER_CREATION_DATE = request.getParameter("ORDER_CREATION_DATE");
		Invoice invoice = new Invoice(CUSTOMER_ORDER_ID,SALES_ORG,DISTRIBUTION_CHANNEL,CUSTOMER_NUMBER,COMPANY_CODE,ORDER_CURRENCY,AMOUNT_IN_USD,ORDER_CREATION_DATE);
		System.out.println(invoice);
		try {
			invoiceDao.insertInvoice(invoice);
			Gson gson = new Gson();
			String res = gson.toJson("Data added successfully");
			
			PrintWriter writer = response.getWriter();
			writer.print(res);
			writer.flush();
			writer.close();
		}
		catch(Exception e){
			System.out.println(e);
			Gson gson = new Gson();
			String res = gson.toJson("Failed");
			
			PrintWriter writer = response.getWriter();
			writer.print(res);
			writer.flush();
			writer.close();
			
		}
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
