package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.*;
import com.google.gson.Gson;

/**
 * Servlet implementation class Delete
 */
@WebServlet("/Delete")
public class Delete extends HttpServlet {
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
		int Sl_no = Integer.parseInt(request.getParameter("Sl_no"));
		try {
			invoiceDao.deleteInvoice(Sl_no);
			
			Gson gson = new Gson();
			String res = gson.toJson("Data deleted successfully");
			
			PrintWriter writer = response.getWriter();
			writer.print(res);
			writer.flush();
			writer.close();
		} catch(Exception e) {
			e.printStackTrace();
            Gson gson = new Gson();
            String res = gson.toJson("Failed to delete invoice");

            PrintWriter writer = response.getWriter();
            writer.print(res);
            writer.flush();
            writer.close();
		}
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
