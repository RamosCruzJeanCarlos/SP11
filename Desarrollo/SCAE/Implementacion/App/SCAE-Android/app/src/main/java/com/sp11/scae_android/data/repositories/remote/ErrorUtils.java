package com.sp11.scae_android.data.repositories.remote;

import com.sp11.scae_android.data.entities.ErrorEntity;

import java.io.IOException;
import java.lang.annotation.Annotation;

import okhttp3.ResponseBody;

import static com.sp11.scae_android.data.repositories.remote.ServiceGeneratorSimple.retrofit;
/**
 * Created by Jean Carlos Ramos Cruz on 16/06/2017.
 */

public class ErrorUtils {

    public static ErrorEntity parseError(retrofit2.Response<?> response) {
        retrofit2.Converter<ResponseBody, ErrorEntity> converter =
                retrofit.responseBodyConverter(ErrorEntity.class, new Annotation[0]);

        ErrorEntity error;

        try {
            error = converter.convert(response.errorBody());
        } catch (IOException e) {
            return new ErrorEntity();
        }

        return error;
    }
}
