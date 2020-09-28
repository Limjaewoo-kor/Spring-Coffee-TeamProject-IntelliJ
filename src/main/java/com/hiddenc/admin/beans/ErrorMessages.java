package com.hiddenc.admin.beans;


public class ErrorMessages {

    private String errorMessages;
    private String errorBean;

    public ErrorMessages(String errorMessages, String errorBean) {
        this.errorMessages = errorMessages;
        this.errorBean = errorBean;
    }

    public ErrorMessages() {

    }

    public String getErrorMessages() {
        return errorMessages;
    }

    public void setErrorMessages(String errorMessages) {
        this.errorMessages = errorMessages;
    }

    public String getErrorBean() {
        return errorBean;
    }

    public void setErrorBean(String errorBean) {
        this.errorBean = errorBean;
    }
}
