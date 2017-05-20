package com.sp11.scae_android.presentation.activities;

import android.os.Bundle;
import android.support.design.widget.CoordinatorLayout;

import com.sp11.scae_android.R;
import com.sp11.scae_android.core.BaseActivity;
import com.sp11.scae_android.presentation.fragments.LoginFragment;
import com.sp11.scae_android.presentation.presenters.LoginPresenter;
import com.sp11.scae_android.utils.ActivityUtils;

/**
 * Created by Jean Carlos Ramos Cruz on 15/05/17.
 */

public class LoginActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_white);

        LoginFragment loginFragment = (LoginFragment) getSupportFragmentManager()
                .findFragmentById(R.id.layout_content_frame);

        if(loginFragment == null){
            loginFragment = LoginFragment.newInstance();
            ActivityUtils.addFragmentToActivity(getSupportFragmentManager(), loginFragment, R.id.layout_content_frame);
        }

        //Creamos al LoginPresenter
        new LoginPresenter(loginFragment,this);
    }

    public void showMessageError(String message){
        CoordinatorLayout container = (CoordinatorLayout) findViewById(R.id.coordinatorLayout);
        super.showMessage(container,message);
    }

    @Override
    public boolean onSupportNavigateUp(){
        onBackPressed();
        return true;
    }
}
