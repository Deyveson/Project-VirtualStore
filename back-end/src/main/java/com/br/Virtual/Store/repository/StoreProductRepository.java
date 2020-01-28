package com.br.Virtual.Store.repository;

import com.br.Virtual.Store.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoreProductRepository extends JpaRepository<Product, Long> {
}
