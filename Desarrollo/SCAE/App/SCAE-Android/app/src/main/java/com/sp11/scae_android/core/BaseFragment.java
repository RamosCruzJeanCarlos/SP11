package com.sp11.scae_android.core;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;

/**
 * Created by Jean Carlos Ramos Cruz on 12/05/17.
 */

public class BaseFragment extends Fragment {
    protected void next(Activity context, Bundle bundle, Class<?> activity, boolean destroy) {
        Intent intent= new Intent(context,activity);
        if(bundle!=null){intent.putExtras(bundle);}
        startActivity(intent);
        if(destroy)context.finish();
    }
    protected void nextAll(Activity context, Bundle bundle, Class<?> activity, boolean destroyall) {
        Intent intent= new Intent(context,activity);
        if(bundle!=null){intent.putExtras(bundle);}
        if(destroyall)
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        startActivity(intent);
    }
    protected void initView(){

    }
}
