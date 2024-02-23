package com.tcarisland.api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Entity
@Document(collection = "Item")
public class Item {

    @Transient
    public static final String SEQUENCE_NAME = "Item";

    @Id
    private Long id;
    private String name;
}
