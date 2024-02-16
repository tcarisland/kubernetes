package com.tcarisland.api.controllers;

import com.tcarisland.api.entities.Barcode;
import com.tcarisland.api.entities.Item;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BarcodeController {
    private static Logger LOGGER = LoggerFactory.getLogger(BarcodeController.class);

    @PostMapping("/barcode")
    public Barcode barcode(@RequestBody Item item) {
        LOGGER.info("item {}", item);
        Barcode barcode = new Barcode();
        barcode.setId(1234L);
        barcode.setBarcode("11001001011101111011011");
        return barcode;
    }

}
