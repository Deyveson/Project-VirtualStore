package com.br.Virtual.Store.service.impl;

import com.br.Virtual.Store.service.StoreService;
import org.springframework.stereotype.Service;


@Service(value = "StoreService")
public class StoreServiceImpl implements StoreService {

//    @Autowired
//    StoreRepository storeRepository;

    @Override
    public String create(){
        return "Sucesso";
    }
}
