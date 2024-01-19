package com.eliasmshallouf.examples.geo_locator.controller;

import com.eliasmshallouf.examples.geo_locator.persistence.model.Address;
import com.eliasmshallouf.examples.geo_locator.persistence.repo.AddressRepository;
import com.eliasmshallouf.examples.geo_locator.retrofit.AddressApiClient;
import com.eliasmshallouf.examples.geo_locator.utils.EmailManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
public class ApiController {
    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private AddressApiClient addressApiClient;

    @Autowired
    private EmailManager emailManager;

    @GetMapping("/address/{ip}")
    public Address find(@PathVariable String ip) {
        return
            addressRepository
                .findById(ip)
                .orElseGet(() -> {
                    Address address = addressApiClient.get(ip);
                    addressRepository.save(address);
                    return address;
                });
    }

    @PostMapping("/send-results-via-email/{email}")
    public void sendResultsViaEmail(@PathVariable String email, @RequestBody Address result) {
        emailManager.sendEmail(
            email,
            "GeoLocator results",
            result.toString()
        );
    }
}
