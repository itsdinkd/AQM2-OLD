// Another Quality Modpack 2 //
///////////////////////////////
onEvent("recipes", event => {
    event.remove({output: 'croparia:ritual_stand'});
    event.remove({output: 'croparia:infusor'});
    event.remove({output: 'croparia:potion_water'});
    event.remove({output: 'croparia:potion_fire'});
    event.remove({output: 'croparia:potion_earth'});
    event.remove({output: 'croparia:potion_air'});


    var cropariaMats = [
        "gold",
        "iron",
        "wood",
        "stone",
        "netherite",
        "obsidian",
        "renforced",
        "diamond"
    ];

    cropariaMats.forEach(function (item) {
        event.remove({output: 'croparia:' + item + '_knife'});
        event.remove({output: 'croparia:' + item + '_multitool'});
    });

    var cropariaTools = [
        "pickaxe",
        "sword",
        "axe",
        "shovel",
        "hoe",
        "helmet",
        "chestplate",
        "leggings",
        "boots"
    ];

    cropariaTools.forEach(function (item) {
        event.remove({output: 'croparia:renforced_' + item});
        event.remove({output: 'croparia:obsidian_' + item});
    });

    var cropariaSeeds = ["blaze", "dragon", "diamond", "emerald", "ender", "eye", "foot", "ghast", "goat", "goldenapple", "lead2", "magma", "nautilus", "netherite", "phantom", "totem", "quartz", "redstone", "scute", "sea", "shard", "crystal", "shell", "star", "wither", "xp"];

    cropariaSeeds.forEach(function (item) {
        event.remove({output: 'croparia:seed_crop_' + item});
        event.remove({output: 'croparia:fruit_' + item});
    });

});