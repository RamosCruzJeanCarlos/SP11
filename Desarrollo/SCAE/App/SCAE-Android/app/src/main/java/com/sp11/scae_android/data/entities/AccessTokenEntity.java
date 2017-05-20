package com.sp11.scae_android.data.entities;

import java.io.Serializable;

/**
 * Created by Jean Carlos Ramos Cruz on 15/05/17.
 */

public class AccessTokenEntity implements Serializable {

    private String id;
    private String userId;
    private String jwt;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
