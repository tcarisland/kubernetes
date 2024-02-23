package com.tcarisland.api.controllers;

import com.mongodb.client.result.UpdateResult;
import com.tcarisland.api.database.ItemRepository;
import com.tcarisland.api.entities.Barcode;
import com.tcarisland.api.entities.Item;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    private static Logger LOGGER = LoggerFactory.getLogger(BarcodeController.class);
    @Autowired
    private ItemRepository itemRepository;

    @PostMapping("/item")
    public void addItem(@RequestBody Item item) {
        LOGGER.info("item {}", item);
        itemRepository.addItem(item);
    }
    @GetMapping("/item")
    public List<Item> getItems() {
        LOGGER.info("get items called");
        return itemRepository.getItems();
    }

}
