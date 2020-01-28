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

    @Column(name = "nome", columnDefinition = "VARCHAR(25)")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String nome;

    @Column(name = "preco")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Double preco;

    @Column(name = "categoria", columnDefinition = "VARCHAR(25)")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String categoria;

    @Column(name = "quantidade", columnDefinition = "VARCHAR(25)")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private int quantidade;

    public Product(Long id, String nome, Double preco, String categoria, int quantidade) {
        this.ID = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.quantidade = quantidade;
    }

    public Product() {
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
}
