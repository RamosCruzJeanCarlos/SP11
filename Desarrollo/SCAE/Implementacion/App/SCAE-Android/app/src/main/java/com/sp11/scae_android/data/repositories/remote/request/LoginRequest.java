package com.sp11.scae_android.data.repositories.remote.request;

import com.sp11.scae_android.data.entities.AccessTokenEntity;

import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

/**
 * Created by Jean Carlos Ramos Cruz on 16/06/2017.
 */

public interface LoginRequest {

    @FormUrlEncoded
    @POST("users/loginmobile/")
    Call<AccessTokenEntity> login(@Field("username") String username, @Field("password") String password);
}
