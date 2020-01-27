package com.br.Virtual.Store.domain;

import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;

@Entity
@Table(name = "PRODUCT")
public class Product {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    @Column(name = "NAME", columnDefinition = "VARCHAR(8)")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String name;

    @Column(name = "PRICE")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Double price;

    public Product(Long id, String name, Double price) {
        this.ID = id;
        this.name = name;
        this.price = price;
    }

    public Product() {
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
