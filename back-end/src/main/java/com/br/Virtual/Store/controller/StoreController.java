package com.br.Virtual.Store.controller;

import com.br.Virtual.Store.domain.Product;
import com.br.Virtual.Store.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/store")
public class StoreController {

    @Autowired
    private StoreService service;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Product registerProduct (@RequestBody Product product){
        return service.create(product);
    }

    @RequestMapping(value = "/findAllProduct", method = RequestMethod.GET)
    public List<Product> allProduct (){
        return service.allProduct();
    }

    @DeleteMapping("/{id}")
    public void deleteProduto(@PathVariable("id") Long id) {
        service.deleteProduct(id);
    }

    @PutMapping(path = "/{id}")
    public Product updateProduct (@PathVariable("id") Long id, @RequestBody Product product){
        return service.updateProduto(id, product);
    }

}
