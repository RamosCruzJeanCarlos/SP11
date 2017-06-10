package com.sp11.scae_android.presentation.contracts;

import com.sp11.scae_android.core.BasePresenter;
import com.sp11.scae_android.core.BaseView;
import com.sp11.scae_android.data.entities.AccessTokenEntity;
import com.sp11.scae_android.data.entities.GroupEntity;

/**
 * Created by Jean Carlos Ramos Cruz on 15/05/17.
 */

public interface LoginContract {
    interface View extends BaseView<Presenter> {
        void successLogin();
        void errorLogin(String msg);
        void showDialogForgotPassword();
        void showSendEmail(String email);
    }

    interface Presenter extends BasePresenter {
        void loginUser(String username, String password);
        void getGang(AccessTokenEntity token);
        void openSession(String jwt, String token, GroupEntity groupEntity);
    }
}
