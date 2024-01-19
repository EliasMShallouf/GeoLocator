package com.eliasmshallouf.examples.geo_locator.retrofit;

import com.eliasmshallouf.examples.geo_locator.exception.BadAddressException;
import com.eliasmshallouf.examples.geo_locator.persistence.model.Address;
import java.io.IOException;

public class AddressApiClient {
    private RetrofitClient retrofitClient;

    private AddressService addressService;

    public AddressApiClient() {
        this.retrofitClient = RetrofitClient.getInstance();
        this.addressService = this.retrofitClient.getRetrofit().create(AddressService.class);
    }

    public Address get(String ip) {
        try {
            return this.addressService.getAddress(ip).execute().body();
        } catch (IOException e) {
            throw new BadAddressException(e.getMessage(), e.getCause());
        }
    }
}
