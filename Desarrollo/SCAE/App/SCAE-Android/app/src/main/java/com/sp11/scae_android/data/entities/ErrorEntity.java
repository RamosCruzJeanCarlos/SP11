package com.sp11.scae_android.data.entities;

import java.io.Serializable;

/**
 * Created by Jean Carlos Ramos Cruz on 15/05/17.
 */

public class ErrorEntity implements Serializable {
    private ErrorContentEntity error;

    public ErrorContentEntity getError() {
        return error;
    }

    public void setError(ErrorContentEntity error) {
        this.error = error;
    }
}
