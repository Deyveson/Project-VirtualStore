package com.br.Virtual.Store.service.impl;

import com.br.Virtual.Store.domain.Product;
import com.br.Virtual.Store.repository.StoreProductRepository;
import com.br.Virtual.Store.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service(value = "StoreService")
public class StoreServiceImpl implements StoreService {

    @Autowired
    StoreProductRepository storeRepository;

    @Override
    public Product create(String name, Double price){

        Product product = new Product();

        product.setName(name);
        product.setPrice(price);

        storeRepository.save(product);

       return product;
    }
}
