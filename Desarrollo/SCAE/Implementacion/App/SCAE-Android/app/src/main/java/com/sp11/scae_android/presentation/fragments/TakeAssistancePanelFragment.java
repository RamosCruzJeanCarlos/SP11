package com.sp11.scae_android.presentation.fragments;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.sp11.scae_android.R;
import com.sp11.scae_android.core.BaseFragment;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

/**
 * Created by Jean Carlos Ramos Cruz on 17/06/17.
 */

public class TakeAssistancePanelFragment extends BaseFragment {

    @BindView(R.id.tv_date)
    TextView tvDate;
    @BindView(R.id.btn_qr)
    Button btnQr;
    @BindView(R.id.btn_manual)
    Button btnManual;

    public static TakeAssistancePanelFragment newInstance() {
        return new TakeAssistancePanelFragment();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_layout_take_assistance, container, false);
        ButterKnife.bind(this, root);
        return root;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        //null.unbind();
    }

    @OnClick({R.id.tv_date, R.id.btn_qr, R.id.btn_manual})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.tv_date:
                break;
            case R.id.btn_qr:
                break;
            case R.id.btn_manual:
                break;
        }
    }
}
