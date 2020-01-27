package com.br.Virtual.Store.service;

import com.br.Virtual.Store.domain.Product;

public interface StoreService {
    Product create(String name, Double price);
}
