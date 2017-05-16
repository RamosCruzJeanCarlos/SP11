package com.sp11.scae_android.presentation.fragments;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.mobsandgeeks.saripaar.ValidationError;
import com.mobsandgeeks.saripaar.Validator;
import com.sp11.scae_android.R;
import com.sp11.scae_android.core.BaseFragment;
import com.sp11.scae_android.presentation.activities.LoginActivity;
import com.sp11.scae_android.presentation.contracts.LoginContract;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

import static com.google.common.base.Preconditions.checkNotNull;

/**
 * Created by Jean Carlos Ramos Cruz on 15/05/17.
 */

public class LoginFragment extends BaseFragment implements LoginContract.View, Validator.ValidationListener {


    @BindView(R.id.img_logo_scae)
    ImageView imgLogoScae;
    @BindView(R.id.et_user)
    EditText etUser;
    @BindView(R.id.et_password)
    EditText etPassword;
    @BindView(R.id.btn_login)
    Button btnLogin;
    @BindView(R.id.btn_register)
    Button btnRegister;
    @BindView(R.id.forget_password)
    TextView forgetPassword;
    @BindView(R.id.frame_container)
    LinearLayout frameContainer;
    private ProgressDialog dialog;
    private LoginContract.Presenter mPresenter;
    private Validator validator;
    private boolean isLoading = false;

    public static LoginFragment newInstance() {
        return new LoginFragment();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_layout_login, container, false);
        ButterKnife.bind(this, root);
        return root;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        dialog = new ProgressDialog(getContext());
        dialog.setIndeterminate(true);
        dialog.setMessage("Ingresando, espere un momento...");
        dialog.setCancelable(false);
        dialog.setIndeterminateDrawable(getResources().getDrawable(R.drawable.circle_progress));

        validator = new Validator(this);
        validator.setValidationListener(this);
    }

    @Override
    public void onValidationSucceeded() {
        mPresenter.loginUser(etUser.getText().toString(), etPassword.getText().toString());
        isLoading = true;
    }

    @Override
    public void onValidationFailed(List<ValidationError> errors) {
        for (ValidationError error : errors) {
            View view = error.getView();
            String message = error.getCollatedErrorMessage(getContext());
            //Display error messages
            if (view instanceof EditText) {
                ((EditText) view).setError(message);
            } else {
                errorLogin(message);
            }
        }
    }

    @Override
    public void successLogin() {
        Toast.makeText(getActivity(), "Bienvenido", Toast.LENGTH_LONG).show();
    }

    @Override
    public void errorLogin(String msg) {
        ((LoginActivity) getActivity()).showMessageError(msg);
    }

    @Override
    public void showDialogForgotPassword() {

    }

    @Override
    public void showSendEmail(String email) {

    }

    @Override
    public void setPresenter(LoginContract.Presenter presenter) {
        mPresenter = checkNotNull(presenter);
    }

    @Override
    public void hideLoad() {
        dialog.dismiss();
        isLoading = false;
    }

    @Override
    public void showLoad() {
        isLoading = true;
        dialog.show();
    }

    @Override
    public void setError(String msg) {
        errorLogin(msg);
    }

    @OnClick({R.id.btn_login, R.id.btn_register, R.id.forget_password})
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.btn_login:
                break;
            case R.id.btn_register:
                break;
            case R.id.forget_password:
                break;
        }
    }
}
