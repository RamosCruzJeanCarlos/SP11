package com.sp11.scae_android.presentation.presenters;

import android.content.Context;
import android.support.annotation.NonNull;

import com.sp11.scae_android.data.entities.AccessTokenEntity;
import com.sp11.scae_android.data.entities.GroupEntity;
import com.sp11.scae_android.network.ErrorUtils;
import com.sp11.scae_android.network.ServiceGeneratorSimple;
import com.sp11.scae_android.network.remote.LoginRequest;
import com.sp11.scae_android.presentation.contracts.LoginContract;
import com.sp11.scae_android.utils.SessionManager;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by Jean Carlos Ramos Cruz on 15/05/17.
 */

public class LoginPresenter implements LoginContract.Presenter {

    private final LoginContract.View mLoginView;
    private Context context;
    private SessionManager sessionManager;

    public LoginPresenter(LoginContract.View mLoginView, @NonNull Context context) {
        this.mLoginView = mLoginView;
        this.context = context;
        this.mLoginView.setPresenter(this);
        sessionManager = new SessionManager(context);
    }

    @Override
    public void loginUser(String username, String password) {
        LoginRequest loginService = ServiceGeneratorSimple.createService(LoginRequest.class);
        Call<AccessTokenEntity> call = loginService.login(username, password);
        mLoginView.showLoad();
        call.enqueue(new Callback<AccessTokenEntity>() {
            @Override
            public void onResponse(Call<AccessTokenEntity> call, Response<AccessTokenEntity> response) {
                if(response.isSuccessful()){
                    getGang(response.body());
                }else{
                    if(response.raw().code()==401){
                        //ErrorEntity errorEntity = (ErrorEntity) response.errorBody();
                        /*if(response.errorBody()!= null){
                            mLoginView.hideLoad();
                            mLoginView.errorLogin(response.errorBody().toString());
                        }*/
                        mLoginView.hideLoad();
                        //mLoginView.errorLogin("401");

                        //Este método se encarga de mostrar el error al usuario según halla sido el contendio enviado por el json de error
                        mLoginView.errorLogin(ErrorUtils.parseError(response).getError().getMessage());

                        //Esta es una forma de capturar el json cuando no se da un response.isSuccessfull satisfactorio
                        /*Converter<ResponseBody, ErrorEntity> errorConverter = retrofit.responseBodyConverter(ErrorEntity.class, new Annotation[0]);
                        try {
                            ErrorEntity error = errorConverter.convert(response.errorBody());
                            mLoginView.errorLogin(error.getError().getMessage());
                        } catch (Exception e) {
                            e.printStackTrace();
                        }*/

                    }else{
                        mLoginView.hideLoad();
                        mLoginView.errorLogin(ErrorUtils.parseError(response).getError().getMessage());
                    }

                }
            }

            @Override
            public void onFailure(Call<AccessTokenEntity> call, Throwable t) {
                mLoginView.hideLoad();
                mLoginView.errorLogin("Ocurrió un error al tratar de ingresar, por favor intente nuevamente");
            }
        });
    }

    @Override
    public void getGang(AccessTokenEntity token) {

    }

    @Override
    public void openSession(String jwt, String token, GroupEntity groupEntity) {

    }

    @Override
    public void start() {

    }
}
