package com.tcarisland.api.database;

import com.tcarisland.api.controllers.BarcodeController;
import com.tcarisland.api.entities.Item;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ItemRepository {
    private static Logger LOGGER = LoggerFactory.getLogger(ItemRepository.class);

    @Autowired
    MongoTemplate mongoTemplate;

    public void addItem(Item item) {
        LOGGER.info("addItem called");
        mongoTemplate.insert(item);
    }

    public List<Item> getItems() {
        LOGGER.info("getItems called");
        return mongoTemplate.findAll(Item.class);
    }

}
