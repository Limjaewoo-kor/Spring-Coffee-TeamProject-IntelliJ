package com.hiddenc.admin.beans;




public class AdminConnection {


    private String admin_id;
    private String admin_pw;

    private boolean isLoggedIn;


    public boolean isLoggedIn() {
        return isLoggedIn;
    }



    public void setLoggedIn(boolean loggedIn) {
        isLoggedIn = loggedIn;
    }

    public AdminConnection(){
//        this.admin_id="host";
//        this.admin_pw="1234";
//        this.isLoggedIn=true;

    }

    public String getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(String admin_id) {
        this.admin_id = admin_id;
    }

    public String getAdmin_pw() {
        return admin_pw;
    }

    public void setAdmin_pw(String admin_pw) {
        this.admin_pw = admin_pw;
    }
}