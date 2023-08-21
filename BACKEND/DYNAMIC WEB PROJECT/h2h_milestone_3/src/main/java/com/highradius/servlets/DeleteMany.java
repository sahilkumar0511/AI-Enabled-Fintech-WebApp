package com.highradius.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;

import com.highradius.implementation.*;
import com.google.gson.Gson;
/**
 * Servlet implementation class DeleteMany
 */
@SuppressWarnings("unused")
@WebServlet("/DeleteMany")
public class DeleteMany extends HttpServlet {
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
		String slNos = request.getParameter("slNos");
		try {
			invoiceDao.deleteManyInvoice(slNos);
			
			Gson gson = new Gson();
			String res = gson.toJson("Data deleted successfully");
			
			PrintWriter writer = response.getWriter();
            writer.print(res);
            writer.flush();
            writer.close();
		}catch (Exception e) {
            e.printStackTrace();
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
