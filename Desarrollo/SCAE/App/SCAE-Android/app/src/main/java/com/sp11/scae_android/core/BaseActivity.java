package com.sp11.scae_android.core;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.Snackbar;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

import com.sp11.scae_android.R;

import butterknife.ButterKnife;

/**
 * Created by Jean Carlos Ramos Cruz on 12/05/17.
 */

public class BaseActivity extends AppCompatActivity {
    protected void injectView(){
        ButterKnife.bind(this);
    }

    public void showMessage(String message){
        CoordinatorLayout container = (CoordinatorLayout) findViewById(R.id.coordinatorLayout);
        this.showMessage(container, message);
    }

    public void showMessage(View container, String message){
        Snackbar snackbar = Snackbar
                .make(container,message, Snackbar.LENGTH_LONG);
        snackbar.setActionTextColor(Color.BLACK);
        View sbView = snackbar.getView();
        sbView.setBackgroundColor(ContextCompat.getColor(this, R.color.colorAccent));
        TextView textView = (TextView) sbView.findViewById(android.support.design.R.id.snackbar_text);
        textView.setTypeface(Util_Fonts.setFontBold(this));
        textView.setTextColor(Color.BLACK);
        snackbar.show();
    }

    protected void next(Activity context, Bundle bundle, Class<?> activity, boolean destroy) {
        Intent intent= new Intent(context,activity);
        if(bundle!=null){
            intent.putExtras(bundle);
        }
        startActivity(intent);
        if(destroy)context.finish();
    }
}
