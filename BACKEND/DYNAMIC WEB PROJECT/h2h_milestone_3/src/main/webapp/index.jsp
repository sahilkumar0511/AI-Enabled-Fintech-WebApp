<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Invoice Management</title>
</head>
<body>
    <h2>Invoice Management</h2>
    
    <!-- Read Operation -->
    <h3>Read Invoices</h3>
    <form action="Read" method="get">
        <input type="submit" value="Read">
    </form>
    
    <!-- Add Operation -->
    <h3>Add Invoice</h3>
    <form action="Add" method="post">
        <label for="CUSTOMER_ORDER_ID">Customer Order ID:</label>
        <input type="text" name="CUSTOMER_ORDER_ID" id="CUSTOMER_ORDER_ID" required><br><br>
        
        <label for="SALES_ORG">Sales Org:</label>
        <input type="text" name="SALES_ORG" id="SALES_ORG" required><br><br>
        
        <label for="DISTRIBUTION_CHANNEL">Distribution Channel:</label>
        <input type="text" name="DISTRIBUTION_CHANNEL" id="DISTRIBUTION_CHANNEL" required><br><br>
        
        <label for="CUSTOMER_NUMBER">Customer Number:</label>
        <input type="text" name="CUSTOMER_NUMBER" id="CUSTOMER_NUMBER" required><br><br>
        
        <label for="COMPANY_CODE">Company Code:</label>
        <input type="text" name="COMPANY_CODE" id="COMPANY_CODE" required><br><br>
        
        <label for="ORDER_CURRENCY">Order Currency:</label>
        <input type="text" name="ORDER_CURRENCY" id="ORDER_CURRENCY" required><br><br>
        
        <label for="AMOUNT_IN_USD">Amount in USD:</label>
        <input type="text" name="AMOUNT_IN_USD" id="AMOUNT_IN_USD" required><br><br>
        
        <label for="ORDER_CREATION_DATE">Order Creation Date:</label>
        <input type="text" name="ORDER_CREATION_DATE" id="ORDER_CREATION_DATE" required><br><br>
        
        <input type="submit" value="Add">
    </form>
    
    <!-- Edit Operation -->
    <h3>Edit Invoice</h3>
    <form action="Edit" method="post">
        <label for="Sl_no">Sl No:</label>
        <input type="text" name="Sl_no" id="Sl_no" required><br><br>
        
        <label for="ORDER_CURRENCY">Order Currency:</label>
        <input type="text" name="ORDER_CURRENCY" id="ORDER_CURRENCY" required><br><br>
        
        <label for="COMPANY_CODE">Company Code:</label>
        <input type="text" name="COMPANY_CODE" id="COMPANY_CODE" required><br><br>
        
        <label for="DISTRIBUTION_CHANNEL">Distribution Channel:</label>
        <input type="text" name="DISTRIBUTION_CHANNEL" id="DISTRIBUTION_CHANNEL" required><br><br>
        
        <input type="submit" value="Edit">
    </form>
    
    <!-- Delete Operation -->
    <h3>Delete Invoice</h3>
    <form action="Delete" method="post">
        <label for="Sl_no">Sl No:</label>
        <input type="text" name="Sl_no" id="Sl_no" required><br><br>
        
        <input type="submit" value="Delete">
     </form>
   
   <h3>Delete Many Rows</h3>
    <form method="post" action="DeleteMany">
        <label for="slNos">Sl_no values (comma-separated):</label>
        <input type="text" name="slNos" id="slNos" required><br><br>
        <input type="submit" value="DeleteMany">
    </form>

</body>

</html>