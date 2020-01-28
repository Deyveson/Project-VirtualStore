package com.br.Virtual.Store.service.impl;

import com.br.Virtual.Store.domain.Product;
import com.br.Virtual.Store.repository.StoreProductRepository;
import com.br.Virtual.Store.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service(value = "StoreService")
public class StoreServiceImpl implements StoreService {

    @Autowired
    StoreProductRepository storeRepository;

    @Override
    public Product create(Product product){

       storeRepository.save(product);
       return product;

    }

    @Override
    public List<Product> allProduct(){
        return  storeRepository.findAll();
    }

    @Override
    public void deleteProduct(Long id){

        Product product = storeRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Produto não encontrado."));
        storeRepository.delete(product);

    }

    @Override
    public Product updateProduto(Long id, Product product){

        if(!storeRepository.existsById(id)) throw new EntityNotFoundException("Produto não encontrado.");
        product.setID(id);
        return storeRepository.save(product);
    }

}
