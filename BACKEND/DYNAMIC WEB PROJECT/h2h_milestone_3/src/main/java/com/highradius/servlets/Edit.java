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
 * Servlet implementation class Edit
 */
@WebServlet("/Edit")
public class Edit extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private InvoiceDao invoiceDao;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public void init() {
    	invoiceDao = new InvoiceDaoImpl();;
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String ORDER_CURRENCY = request.getParameter("ORDER_CURRENCY");
		String COMPANY_CODE = request.getParameter("COMPANY_CODE");
		String DISTRIBUTION_CHANNEL = request.getParameter("DISTRIBUTION_CHANNEL");
		int Sl_no = Integer.parseInt(request.getParameter("Sl_no"));

		Invoice invoice = new Invoice(ORDER_CURRENCY,COMPANY_CODE,DISTRIBUTION_CHANNEL,Sl_no);
		try {
			invoiceDao.updateInvoice(Sl_no,invoice);
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
