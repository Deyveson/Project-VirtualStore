package com.br.Virtual.Store.controller;

import com.br.Virtual.Store.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/store")
public class StoreController {

    @Autowired
    private StoreService service;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String registerProduct (@RequestParam(value = "Produto", defaultValue = "", required = false) String nome){

        return service.create();
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String searchProduct (@RequestParam(value = "Produto", defaultValue = "", required = false) String nome){

        return "Pesquisar";
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public String deleteProduct (@RequestParam(value = "Produto", defaultValue = "", required = false) String nome){

        return "Excluir";
    }

    @RequestMapping(value = "/alter", method = RequestMethod.PUT)
    public String alterProduct (@RequestParam(value = "Produto", defaultValue = "", required = false) String nome){

        return "Alterar";
    }

}
