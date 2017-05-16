package com.sp11.scae_android.core;

import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.ProgressBar;

import com.sp11.scae_android.R;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * Created by Jean Carlos Ramos Cruz on 15/05/17.
 */

public class LoaderViewHolder extends RecyclerView.ViewHolder {

    @BindView(R.id.progressbar)
    ProgressBar mProgressBar;

    public LoaderViewHolder(View itemView) {
        super(itemView);
        ButterKnife.bind(this, itemView);
    }
}