package com.sp11.scae_android.utils;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by Jean Carlos Ramos Cruz on 15/05/17.
 */

public class SessionManager {

    public static final String PREFERENCE_NAME = "econtrolpreferences";
    public static int PRIVATE_MODE = 0;

    /*
    USUARIO DATA SESSION - JSON
     */
    public static final String USER_TOKEN = "userToken";
    public static final String USER_DATA = "userData";
    public static final String USER_LOGIN = "userLogin";

    private SharedPreferences preferences;
    private SharedPreferences.Editor editor;
    private Context context;

    public SessionManager(Context context) {
        this.context = context;
        preferences = this.context.getSharedPreferences(PREFERENCE_NAME, PRIVATE_MODE);
        editor = preferences.edit();
    }

    public boolean isLogin()  {
        boolean login = preferences.getBoolean(USER_LOGIN, false);
        return login;
    }
}
