package com.highradius.model;

public class Invoice {
    private int Sl_no;
    private String CUSTOMER_ORDER_ID;
    private String SALES_ORG;
    private String DISTRIBUTION_CHANNEL;
    private String COMPANY_CODE;
    private String ORDER_CREATION_DATE;
    private Double ORDER_AMOUNT;
    private String ORDER_CURRENCY;
    private String CUSTOMER_NUMBER;
    private Double AMOUNT_IN_USD;

    // Constructors, getters, and setters

    public Invoice() {
    	super();
        // Default constructor
    }

    public Invoice(int Sl_no, String CUSTOMER_ORDER_ID, String SALES_ORG, String DISTRIBUTION_CHANNEL, String COMPANY_CODE,
                   String ORDER_CREATION_DATE, String ORDER_CURRENCY, String CUSTOMER_NUMBER, Double AMOUNT_IN_USD,  Double ORDER_AMOUNT) {
        super();
    	this.Sl_no = Sl_no;
        this.CUSTOMER_ORDER_ID = CUSTOMER_ORDER_ID;
        this.SALES_ORG = SALES_ORG;
        this.DISTRIBUTION_CHANNEL = DISTRIBUTION_CHANNEL;
        this.COMPANY_CODE = COMPANY_CODE;
        this.ORDER_CREATION_DATE = ORDER_CREATION_DATE;
        this.ORDER_CURRENCY = ORDER_CURRENCY;
        this.CUSTOMER_NUMBER = CUSTOMER_NUMBER;
        this.AMOUNT_IN_USD = AMOUNT_IN_USD;
        this.ORDER_AMOUNT = ORDER_AMOUNT;
    }
    
    public Invoice( String CUSTOMER_ORDER_ID, String SALES_ORG, String DISTRIBUTION_CHANNEL, String COMPANY_CODE,
            String ORDER_CREATION_DATE, String ORDER_CURRENCY, String CUSTOMER_NUMBER, Double AMOUNT_IN_USD , Double ORDER_AMOUNT) {
    	super();
    	this.CUSTOMER_ORDER_ID = CUSTOMER_ORDER_ID;
    	this.SALES_ORG = SALES_ORG;
    	this.DISTRIBUTION_CHANNEL = DISTRIBUTION_CHANNEL;
    	this.COMPANY_CODE = COMPANY_CODE;
    	this.ORDER_CREATION_DATE = ORDER_CREATION_DATE;
    	this.ORDER_CURRENCY = ORDER_CURRENCY;
    	this.CUSTOMER_NUMBER = CUSTOMER_NUMBER;
    	this.AMOUNT_IN_USD = AMOUNT_IN_USD;
    	this.ORDER_AMOUNT = ORDER_AMOUNT;
    }
    
    public Invoice(String CUSTOMER_ORDER_ID,String SALES_ORG,String DISTRIBUTION_CHANNEL,String CUSTOMER_NUMBER,String COMPANY_CODE,String ORDER_CURRENCY,Double AMOUNT_IN_USD,String ORDER_CREATION_DATE) {
    	super();
    	this.CUSTOMER_ORDER_ID = CUSTOMER_ORDER_ID;
    	this.SALES_ORG = SALES_ORG;
    	this.DISTRIBUTION_CHANNEL = DISTRIBUTION_CHANNEL;
    	this.CUSTOMER_NUMBER = CUSTOMER_NUMBER;
    	this.COMPANY_CODE = COMPANY_CODE;
    	this.ORDER_CURRENCY = ORDER_CURRENCY;
    	this.AMOUNT_IN_USD = AMOUNT_IN_USD;
    	this.ORDER_CREATION_DATE = ORDER_CREATION_DATE;
    }
    
    public Invoice(String ORDER_CURRENCY,String COMPANY_CODE,String DISTRIBUTION_CHANNEL,int Sl_no) {
    	super();
    	this.ORDER_CURRENCY = ORDER_CURRENCY;
    	this.COMPANY_CODE = COMPANY_CODE;
    	this.DISTRIBUTION_CHANNEL = DISTRIBUTION_CHANNEL;
    	this.Sl_no = Sl_no;
    }

	public int getSl_no() {
		return Sl_no;
	}

	public void setSl_no(int sl_no) {
		Sl_no = sl_no;
	}

	public String getCUSTOMER_ORDER_ID() {
		return CUSTOMER_ORDER_ID;
	}

	public void setCUSTOMER_ORDER_ID(String cUSTOMER_ORDER_ID) {
		CUSTOMER_ORDER_ID = cUSTOMER_ORDER_ID;
	}

	public String getSALES_ORG() {
		return SALES_ORG;
	}

	public void setSALES_ORG(String sALES_ORG) {
		SALES_ORG = sALES_ORG;
	}

	public String getDISTRIBUTION_CHANNEL() {
		return DISTRIBUTION_CHANNEL;
	}

	public void setDISTRIBUTION_CHANNEL(String dISTRIBUTION_CHANNEL) {
		DISTRIBUTION_CHANNEL = dISTRIBUTION_CHANNEL;
	}

	public String getCOMPANY_CODE() {
		return COMPANY_CODE;
	}

	public void setCOMPANY_CODE(String cOMPANY_CODE) {
		COMPANY_CODE = cOMPANY_CODE;
	}

	public String getORDER_CREATION_DATE() {
		return ORDER_CREATION_DATE;
	}

	public void setORDER_CREATION_DATE(String oRDER_CREATION_DATE) {
		ORDER_CREATION_DATE = oRDER_CREATION_DATE;
	}

	public Double getORDER_AMOUNT() {
		return ORDER_AMOUNT;
	}

	public void setORDER_AMOUNT(Double oRDER_AMOUNT) {
		ORDER_AMOUNT = oRDER_AMOUNT;
	}

	public String getORDER_CURRENCY() {
		return ORDER_CURRENCY;
	}

	public void setORDER_CURRENCY(String oRDER_CURRENCY) {
		ORDER_CURRENCY = oRDER_CURRENCY;
	}

	public String getCUSTOMER_NUMBER() {
		return CUSTOMER_NUMBER;
	}

	public void setCUSTOMER_NUMBER(String cUSTOMER_NUMBER) {
		CUSTOMER_NUMBER = cUSTOMER_NUMBER;
	}

	public Double getAMOUNT_IN_USD() {
		return AMOUNT_IN_USD;
	}

	public void setAMOUNT_IN_USD(Double aMOUNT_IN_USD) {
		AMOUNT_IN_USD = aMOUNT_IN_USD;
	}

    
}
