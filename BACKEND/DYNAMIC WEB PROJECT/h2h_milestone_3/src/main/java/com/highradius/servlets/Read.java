package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.*;
import com.highradius.model.*;

import com.google.gson.Gson;

/**
 * Servlet implementation class Read
 */
@WebServlet("/Read")
public class Read extends HttpServlet {
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
		try {
			String jsonResponse = new String();
			@SuppressWarnings("unused")
			PrintWriter out = response.getWriter();
			System.out.println();
			List<Invoice> invoices = invoiceDao.getInvoice();
			
			Gson gson = new Gson();
			jsonResponse = gson.toJson(invoices);
			
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(jsonResponse);
			//response.getWriter().append("Served at: ").append(request.getContextPath());
		}
		catch(Exception e){
			e.printStackTrace();
	          // Set the response status code and error message
	          response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
	          response.getWriter().write("{\"error\": \"An error occurred while retrieving invoice data.\"}");
		}
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
	}

}
