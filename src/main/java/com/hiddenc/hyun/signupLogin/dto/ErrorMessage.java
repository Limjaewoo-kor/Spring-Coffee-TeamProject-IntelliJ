package com.hiddenc.hyun.signupLogin.dto;

public class ErrorMessage {

    private String errormessage;
    private String errorBean;

    public ErrorMessage(String errormessage, String errorBean) {
        this.errormessage = errormessage;
        this.errorBean = errorBean;
    }

    public String getErrormessage() {
        return errormessage;
    }

    public void setErrormessage(String errormessage) {
        this.errormessage = errormessage;
    }

    public String getErrorBean() {
        return errorBean;
    }

    public void setErrorBean(String errorBean) {
        this.errorBean = errorBean;
    }
}
