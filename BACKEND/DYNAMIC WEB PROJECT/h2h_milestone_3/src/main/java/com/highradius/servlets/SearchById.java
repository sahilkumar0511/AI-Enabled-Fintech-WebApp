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
/**
 * Servlet implementation class SearchById
 */
@WebServlet("/SearchById")
public class SearchById extends HttpServlet {
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
		Invoice invoice = invoiceDao.getInvoiceId(CUSTOMER_ORDER_ID);
		if(invoice != null) {
			Gson gson = new Gson();
			String res = gson.toJson(invoice);
			
			PrintWriter writer = response.getWriter();
            writer.print(res);
            writer.flush();
            writer.close();
		}else {
			Gson gson = new Gson();
			String res = gson.toJson("Invoice not found.");
			
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
