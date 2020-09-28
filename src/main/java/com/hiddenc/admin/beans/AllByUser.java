package com.hiddenc.admin.beans;

import java.util.List;

public class AllByUser {

    private List<ByUserBean> byuser;
    private List<CafeImg> cafeImgList;

    public List<ByUserBean> getByuser() {
        return byuser;
    }

    public void setByuser(List<ByUserBean> byuser) {
        this.byuser = byuser;
    }

    public List<CafeImg> getCafeImgList() {
        return cafeImgList;
    }

    public void setCafeImgList(List<CafeImg> cafeImgList) {
        this.cafeImgList = cafeImgList;
    }


}
