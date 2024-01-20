package com.eliasmshallouf.examples.geo_locator.retrofit;

import com.eliasmshallouf.examples.geo_locator.persistence.model.Address;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface AddressService {

    @GET("{ip}?fields=query,country,countryCode,city,lat,lon")
    Call<Address> getAddress(@Path("ip") String ip);

}
