package com.eliasmshallouf.examples.geo_locator.persistence.repo;

import com.eliasmshallouf.examples.geo_locator.persistence.model.Address;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository extends CrudRepository<Address, String> {

}
