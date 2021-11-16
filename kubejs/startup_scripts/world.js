// Another Quality Modpack 2 //
//////////////////////////////
// priority: 0

onEvent('worldgen.remove', event => {
// Remove Artifality crystals from Miner's Horizon
  event.removeOres(ores => {
    ores.blocks = [ 'artifality:budding_lunar_crystal', 'artifality:lunar_crystal_cluster', 'artifality:budding_life_crystal', 'artifality:life_crystal_cluster', 'artifality:budding_incremental_crystal', 'artifality:incremental_crystal_cluster']
    ores.biomes.values = [ 'minershorizon:rocky_plains' ]
  })

// Remove valleycraft salt since we already have bewitchment salt
  event.removeOres(ores => {
    ores.blocks = [ 'valley:saltpeter_ore', 'valley:salt_ore', 'valley:nether_salt', 'indrev:tungsten_ore', "indrev:lead_ore", "indrev:silver_ore"]
  })

});