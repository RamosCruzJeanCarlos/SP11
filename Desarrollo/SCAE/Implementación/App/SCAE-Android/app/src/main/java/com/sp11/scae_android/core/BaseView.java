package com.sp11.scae_android.core;

/**
 * Created by Jean Carlos Ramos Cruz on 12/05/17.
 */

public interface BaseView<T> {

    void setPresenter(T presenter);
    void hideLoad();
    void showLoad();
    void setError(String msg);
}
