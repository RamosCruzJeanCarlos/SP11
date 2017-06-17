package com.sp11.scae_android.presentation.activities;

import android.os.Bundle;
import android.support.design.widget.CoordinatorLayout;

import com.sp11.scae_android.R;
import com.sp11.scae_android.core.BaseActivity;
import com.sp11.scae_android.presentation.fragments.LoginFragment;
import com.sp11.scae_android.presentation.fragments.TakeAssistancePanelFragment;
import com.sp11.scae_android.presentation.presenters.LoginPresenter;
import com.sp11.scae_android.utils.ActivityUtils;

/**
 * Created by Jean Carlos Ramos Cruz on 17/06/17.
 */

public class TakeAssistancePanelActivity extends BaseActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TakeAssistancePanelFragment fragment = (TakeAssistancePanelFragment) getSupportFragmentManager()
                .findFragmentById(R.id.contentFrame);

        if(fragment == null){
            fragment = TakeAssistancePanelFragment.newInstance();
            ActivityUtils.addFragmentToActivity(getSupportFragmentManager(), fragment, R.id.contentFrame);
        }

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
