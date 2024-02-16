package com.tcarisland.api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Barcode {

    @Id
    private Long id;
    private String barcode;

}
