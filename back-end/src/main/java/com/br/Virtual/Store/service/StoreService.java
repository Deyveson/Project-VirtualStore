package com.br.Virtual.Store.service;

import com.br.Virtual.Store.domain.Product;

import java.util.List;

public interface StoreService {
    Product create(Product product);

    List<Product> allProduct();

    void deleteProduct(Long id);

    Product updateProduto(Long id, Product product);
}
