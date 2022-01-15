// Another Quality Modpack 2 //
//////////////////////////////

onEvent("rei.hide.items", event => {

    var cropariaSeedsHide = ["blaze", "dragon", "diamond", "emerald", "ender", "eye", "foot", "ghast", "goat", "goldenapple", "lead2", "magma", "nautilus", "netherite", "phantom", "totem", "redstone", "scute", "sea", "shard", "crystal", "shell", "star", "wither", "xp"];

    cropariaSeedsHide.forEach(function (item) {
        event.hide('croparia:seed_crop_' + item);
        event.hide('croparia:fruit_' + item);
    });

    event.hide('croparia:ritual_stand');
    event.hide('croparia:infusor');
    event.hide('croparia:potion_water');
    event.hide('croparia:potion_fire');
    event.hide('croparia:potion_earth');
    event.hide('croparia:potion_air');
    event.hide('croparia:midas_hand');
    event.hide('croparia:infinite_apple');
    event.hide('croparia:horn_plenty');

    var cropariaMatsHide = [
        "gold",
        "iron",
        "wood",
        "stone",
        "netherite",
        "obsidian",
        "diamond",
        "renforced"
    ];

    cropariaMatsHide.forEach(function (item) {
        event.hide('croparia:' + item + '_knife');
        event.hide('croparia:' + item + '_multitool');
    });

    var cropariaToolsHide = [
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

    cropariaToolsHide.forEach(function (item) {
        event.hide('croparia:renforced_' + item);
        event.hide('croparia:obsidian_' + item);
        event.hide('croparia:air_' + item);
        event.hide('croparia:water_' + item);
        event.hide('croparia:fire_' + item);
        event.hide('croparia:earth_' + item);
        event.hide('croparia:elemental_air_' + item);
        event.hide('croparia:elemental_water_' + item);
        event.hide('croparia:elemental_fire_' + item);
        event.hide('croparia:elemental_earth_' + item);
    });

});