// Another Quality Modpack 2 //
///////////////////////////////

events.listen("recipes", function (event) {
  event.remove({output: 'kibe:chunk_loader'});
  //event.remove({output: 'kibe:angel_ring'});
  event.remove({output: 'doom:invisiblesphere'});
  event.remove({output: 'blockus:polished_basalt_bricks'});
  event.remove({output: 'kibe:diamond_kibe'});
  event.remove({output: 'kibe:golden_kibe'});
  event.remove({output: 'things:moss_necklace'});
  event.remove({output: 'things:hades_crystal'});
  event.remove({output: 'things:hardening_catalyst'});
  event.remove({output: 'gobber2:gobber2_ring_stealth'});
})